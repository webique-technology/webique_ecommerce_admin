import React, { useState } from "react";


import { Route, Routes, useNavigate } from "react-router-dom";
import CategoriesTable from "./CatagoriesTable";
import AddCatagories from "./AddCatagories";

const Catagories = () => {
  const navigate = useNavigate();
  // dummy products
  const category = [
    {
      id: 1,
      name: "Electronics",
      type: "Product",
      slug: "electronics",
      items: 245,
      status: "Active",
      subCategories: [
        "Smartphones",
        "Laptops",
        "Tablets",
        "Smartwatches",
      ],
    },
    {
      id: 2,
      name: "Fashion",
      type: "Product",
      slug: "fashion",
      items: 420,
      status: "Active",
      subCategories: [
        "Men's Clothing",
        "Women's Clothing",
        "Kids' Clothing",
        "Footwear",
      ],
    },
    {
      id: 3,
      name: "Gift Hampers",
      type: "Product",
      slug: "gift-hampers",
      items: 68,
      status: "Inactive",
      subCategories: [
        "Birthday Hampers",
        "Anniversary Hampers",
        "Wedding Hampers",
        "Corporate Gift Hampers",
      ],
    },
    {
      id: 4,
      name: "Home & Kitchen",
      type: "Product",
      slug: "home-kitchen",
      items: 186,
      status: "Active",
      subCategories: [
        "Cookware",
        "Bakeware",
        "Dinnerware",
        "Kitchen Tools & Gadgets",
        "Storage Containers",
      ],
    },
  ];

  const [categories, setCategories] = useState(category);



  const [page, setPage] = useState("table");


  // ADD / UPDATE
  const handleSave = (productData) => {
    const existingProduct =
      categories.find(
        (item) => item.id === productData.id
      );

    if (existingProduct) {
      setCategories((prev) =>
        prev.map((item) =>
          item.id === productData.id
            ? productData
            : item
        )
      );
    } else {
      setCategories((prev) => [
        {
          ...productData,
          id: Date.now(),
        },
        ...prev,
      ]);
    }

    navigate("/products");
  };

  // EDIT
  const handleEdit = (product) => {
    navigate(
      `/products/update-product/${product.id}`
    );
  };

  // DELETE
  const handleDelete = (id) => {
    const updatedProducts =
      categories.filter(
        (item) => item.id !== id
      );

    setCategories(updatedProducts);
  };

  return (
    <Routes>

      {/* TABLE */}
      <Route
        path="/"
        element={
          <CategoriesTable
            categories={categories}
            onAdd={() => {
              navigate("/products/add-product");
            }}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        }
      />

      {/* ADD PRODUCT */}
      <Route
        path="/add-product"
        element={
          <AddCatagories
            onSave={handleSave}
            categories={categories}
            onCancel={() => {
              navigate("/catagories");
            }}
          />
        }
      />

      {/* UPDATE PRODUCT */}
      <Route
        path="/update-product/:id"
        element={
          <AddCatagories
            onSave={handleSave}
            categories={categories}
            onCancel={() => {
              navigate("/catagories");
            }}
          />
        }
      />
    </Routes>
  );
};

export default Catagories;