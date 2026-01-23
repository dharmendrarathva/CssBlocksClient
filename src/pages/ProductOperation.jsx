import { useEffect, useState } from "react";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../api/product.api";

import "./ProductOperation.css";

const emptyForm = {
  name: "",
  code: "",
  htmlCode: "",
  cssCode: "",
  jsCode: "",
};

const ProductOperation = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);


  const loadProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to load products", err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);


  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log("ProductOperation mounted");



  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingId) {
        await updateProduct(editingId, form);
      } else {
        await createProduct(form);
      }

      setForm(emptyForm);
      setEditingId(null);
      loadProducts();
    } catch (err) {
      console.error("Save failed", err);
    } finally {
      setLoading(false);
    }
  };


  const editProduct = async (id) => {
    try {
      const res = await getProductById(id);
      setForm(res.data);
      setEditingId(id);
    } catch (err) {
      console.error("Edit failed", err);
    }
  };


  const removeProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await deleteProduct(id);
      loadProducts();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="product-container">
      <h2>Product Operations</h2>

      {/* ===== FORM ===== */}
      <form className="product-form" onSubmit={submit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
          required
        />

        <input
          name="code"
          placeholder="Code"
          value={form.code}
          onChange={onChange}
          required
        />

        <textarea
          name="htmlCode"
          placeholder="HTML Code"
          value={form.htmlCode}
          onChange={onChange}
        />

        <textarea
          name="cssCode"
          placeholder="CSS Code"
          value={form.cssCode}
          onChange={onChange}
        />

        <textarea
          name="jsCode"
          placeholder="JS Code"
          value={form.jsCode}
          onChange={onChange}
        />

        <button disabled={loading}>
          {editingId ? "Update Product" : "Create Product"}
        </button>
      </form>

      {/* ===== LIST ===== */}
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.code}</td>
              <td>
                <button onClick={() => editProduct(p.id)}>Edit</button>
                <button onClick={() => removeProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductOperation;


