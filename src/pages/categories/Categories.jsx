import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryTable from "./CategoryTable";
import DeleteModal from "../../components/common/DeleteModal";
import {
  getCategories,
  deleteCategory,
  changeCategoryStatus,
} from "../../services/categoryService";

export default function Categories() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

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
  // const handleDelete = async (id) => {
  //   const confirmDelete = window.confirm(
  //     "Are you sure you want to delete this category?"
  //   );

  //   if (!confirmDelete) return;

  //   try {
  //     await deleteCategory(id);

  //     refreshCategories();
  //   } catch (error) {
  //     console.error(error);
  //     alert("Unable to delete category.");
  //   }
  // };

  const handleDelete = (id) => {
    setSelectedCategoryId(id);
    setShowDeleteModal(true);
  };
  const confirmDelete = async () => {
    try {
      setDeleteLoading(true);

      await deleteCategory(selectedCategoryId);

      setShowDeleteModal(false);

      setSelectedCategoryId(null);

      refreshCategories();

    } catch (error) {

      console.error(error);

      alert("Unable to delete category.");

    } finally {

      setDeleteLoading(false);

    }
  };

  const handleStatusChange = async (id) => {
    try {
      await changeCategoryStatus(id);

      setCategories((prev) =>
        prev.map((category) => {
          // Parent Category
          if (category.id === id) {
            return {
              ...category,
              status: !category.status,
            };
          }

          // Subcategories
          return {
            ...category,
            children: category.children.map((sub) =>
              sub.id === id
                ? {
                  ...sub,
                  status: !sub.status,
                }
                : sub
            ),
          };
        })
      );
    } catch (error) {
      console.error(error);
      alert("Unable to change status.");
    }
  };

  // const handleStatusChange = async (id) => {
  //   try {
  //     await changeCategoryStatus(id);

  //     refreshCategories();

  //   } catch (error) {
  //     console.error(error);
  //     alert("Unable to change status.");
  //   }
  // };

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

  const handleManageSubCategories = (subcategoryId) => {
    // navigate(`/categories/${categoryId}/sub-categories`);
    navigate(`/categories/${subcategoryId}/attributes`);
  };

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <>
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
        onStatusChange={handleStatusChange}
      />

      <DeleteModal
        open={showDeleteModal}
        title="Delete Category"
        message="Are you sure you want to delete this category?"
        loading={deleteLoading}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedCategoryId(null);
        }}
        onConfirm={confirmDelete}
      />
    </>
  );
}