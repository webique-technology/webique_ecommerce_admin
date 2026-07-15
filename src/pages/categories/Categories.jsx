import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryTable from "./CategoryTable";
import {
  getCategories,
  deleteCategory,
} from "../../services/categoryService";

export default function Categories() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  });

  // -----------------------------
  // Fetch Categories
  // -----------------------------
  const fetchCategories = async (page = 1) => {
    try {
      setLoading(true);

      const response = await getCategories(page);

      const result = response.data.data;

      setCategories(result.data || []);

      setPagination({
        current_page: result.current_page,
        last_page: result.last_page,
        per_page: result.per_page,
        total: result.total,
      });
    } catch (error) {
      console.error("Category List Error :", error);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Initial Load
  // -----------------------------
  useEffect(() => {
    fetchCategories();
  }, []);

  // -----------------------------
  // Refresh List
  // -----------------------------
  const refreshCategories = () => {
    fetchCategories(pagination.current_page);
  };

  // -----------------------------
  // Delete Category
  // -----------------------------
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCategory(id);

      refreshCategories();
    } catch (error) {
      console.error(error);
      alert("Unable to delete category.");
    }
  };

  // -----------------------------
  // Pagination
  // -----------------------------
  const handlePageChange = (page) => {
    fetchCategories(page);
  };

  // -----------------------------
  // Navigation
  // -----------------------------
  const handleAdd = () => {
    navigate("/categories/add");
  };

  const handleEdit = (id) => {
    navigate(`/categories/edit/${id}`);
  };

  const handleManageSubCategories = (categoryId) => {
    navigate(`/categories/${categoryId}/sub-categories`);
  };

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <CategoryTable
      categories={categories}
      loading={loading}
      pagination={pagination}
      onPageChange={handlePageChange}
      onRefresh={refreshCategories}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onManage={handleManageSubCategories}
    />
  );
}