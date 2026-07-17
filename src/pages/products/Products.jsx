import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductTable from "./ProductTable";
import DeleteModal from "../../components/common/DeleteModal";

import {
  getProducts,
  deleteProduct,
  changeProductStatus,
} from "../../services/productService";

export default function Products() {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  });

  // Search

  const [search, setSearch] = useState("");

  // Filters

  const [categoryFilter, setCategoryFilter] = useState("");

  const [productTypeFilter, setProductTypeFilter] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [featuredFilter, setFeaturedFilter] = useState("");

  // Category Dropdown

  const [categoryOptions, setCategoryOptions] = useState([]);

  // Delete Modal

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  // ---------------------------------------
  // Fetch Products
  // ---------------------------------------

  const fetchProducts = async (page = 1) => {

    try {

      setLoading(true);

      const response = await getProducts({

        page,

        search,

        category_id: categoryFilter,

        product_type: productTypeFilter,

        status: statusFilter,

        featured: featuredFilter,

      });

      const result = response.data.data;

      setProducts(result.data || []);

      setPagination({

        current_page: result.current_page,

        last_page: result.last_page,

        per_page: result.per_page,

        total: result.total,

      });

      // Later we'll populate this from API
      // setCategoryOptions(...)

    } catch (error) {

      console.error("Product List Error :", error);

    } finally {

      setLoading(false);

    }

  };
  useEffect(() => {

    fetchProducts();

  }, []);
  const refreshProducts = () => {

    fetchProducts(
      pagination.current_page
    );

  };
  // ---------------------------------------
  // Delete
  // ---------------------------------------

  const handleDelete = (product) => {

    setSelectedProduct(product);

    setShowDeleteModal(true);

  };

  const confirmDelete = async () => {

    if (!selectedProduct) return;

    try {

      await deleteProduct(selectedProduct.id);

      setProducts((prev) =>
        prev.filter(
          (item) => item.id !== selectedProduct.id
        )
      );

      setPagination((prev) => ({
        ...prev,
        total: prev.total - 1,
      }));

      setShowDeleteModal(false);

      setSelectedProduct(null);

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Unable to delete product."
      );

    }

  };
  // ---------------------------------------
  // Status Toggle
  // ---------------------------------------

  const handleStatusChange = async (product) => {

    try {

      await changeProductStatus(product.id);

      setProducts((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? {
              ...item,
              status: !item.status,
            }
            : item
        )
      );

    } catch (error) {

      console.error(error);

      alert("Unable to change status.");

    }

  };
  // ---------------------------------------
  // Navigation
  // ---------------------------------------

  const handleAdd = () => {

    navigate("/products/add");

  };

  const handleEdit = (id) => {

    navigate(`/products/edit/${id}`);

  };

  const handleView = (id) => {

    navigate(`/products/view/${id}`);

  };

  const handlePageChange = (page) => {

    fetchProducts(page);

  };
  useEffect(() => {

    const timer = setTimeout(() => {

      fetchProducts();

    }, 500);

    return () => clearTimeout(timer);

  }, [

    search,

    categoryFilter,

    productTypeFilter,

    statusFilter,

    featuredFilter,

  ]);
  return (
    <>

      <ProductTable

        products={products}

        loading={loading}

        pagination={pagination}

        search={search}
        onSearchChange={setSearch}

        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}

        productTypeFilter={productTypeFilter}
        onProductTypeChange={setProductTypeFilter}

        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}

        featuredFilter={featuredFilter}
        onFeaturedFilterChange={setFeaturedFilter}

        categoryOptions={categoryOptions}

        onRefresh={refreshProducts}

        onAdd={handleAdd}

        onView={handleView}

        onEdit={handleEdit}

        onDelete={handleDelete}

        onStatusChange={handleStatusChange}

        onPageChange={handlePageChange}

      />

      <DeleteModal

        open={showDeleteModal}

        title="Delete Product"

        message={`Are you sure you want to delete "${selectedProduct?.name}"?`}

        onClose={() => {

          setShowDeleteModal(false);

          setSelectedProduct(null);

        }}

        onConfirm={confirmDelete}

      />

    </>
  );
}
