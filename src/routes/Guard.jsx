import { Routes, Route } from "react-router-dom";
import { routes } from "./config";
import Guard from "./Guard";

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map((r) => {
        const element = r.roles ? (
          <Guard roles={r.roles}>{r.element}</Guard>
        ) : (
          r.element
        );

        return <Route key={r.path} path={r.path} element={element} />;
      })}
    </Routes>
  );
}
