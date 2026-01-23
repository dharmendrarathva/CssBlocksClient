import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { loginUser } from "../api/auth.api";
import { getToken } from "../api/token";
import { adminHello, userHello } from "../api/hello.api";
import Loader from "../components/common/Loader";

const AuthContext = createContext(null);
/* login

logout

isAuthenticated

role
 */
export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectRole = async () => {
      if (!getToken()) {
        setLoading(false);
        return;
      }

      try {
        await adminHello();
        setRole("ADMIN");
      } catch (err) {
        try {
          await userHello();
          setRole("USER");
        } catch {
          setRole(null);
        }
      } finally {
        setLoading(false);
      }
    };

    detectRole();
  }, []);


  
  const login = async (email, password) => {
    await loginUser({ email, password });
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.clear();
    setIsAuthenticated(false);
    setRole(null);
  };

  const value = useMemo(
    () => ({ login, logout, isAuthenticated, role }),
    [isAuthenticated, role]
  );

  if (loading) return <Loader />;

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};


