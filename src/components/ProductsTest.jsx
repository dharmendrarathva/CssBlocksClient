import { useState } from "react";
import { productApi } from "../api";

export default function ProductsTest() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [singleProduct, setSingleProduct] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleGetAll() {
    setStatus("loading");
    setError("");

    try {
      const res = await productApi.getAll();
      setProducts(res);
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  async function handleGetById() {
    if (!productId) return;
    setStatus("loading");
    setError("");

    try {
      const res = await productApi.getById(productId);
      setSingleProduct(res);
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: "60px auto", fontFamily: "sans-serif" }}>
      <h2>Products API Test</h2>

      <div>
        <button onClick={handleGetAll} disabled={status === "loading"}>
          Get All Products
        </button>
      </div>

      {products.length > 0 && (
        <pre style={{ background: "#f5f5f5", padding: 10, marginTop: 10 }}>
          {JSON.stringify(products, null, 2)}
        </pre>
      )}

      <hr style={{ margin: "20px 0" }} />

      <div>
        <input
          placeholder="Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <button onClick={handleGetById} disabled={status === "loading"}>
          Get Product by ID
        </button>
      </div>

      {singleProduct && (
        <pre style={{ background: "#f5f5f5", padding: 10, marginTop: 10 }}>
          {JSON.stringify(singleProduct, null, 2)}
        </pre>
      )}

      {status === "error" && (
        <p style={{ color: "red", marginTop: 10 }}>✖ {error}</p>
      )}
    </div>
  );
}
