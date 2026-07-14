import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import RoleRoute from "./RoleRoute";

// Authentication
import Login from "../pages/authentication/Login";
import ForgetPassword from "../pages/authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/dashboard/Dashboard";

// Catalog
import Products from "../pages/products/Products";
import AddProduct from "../pages/products/AddProduct";

import Catagories from "../pages/catagories/Catagories";
import AddCatagories from "../pages/catagories/AddCatagories";
import SubCategoryTable from "../pages/catagories/SubCategoryTable";

// Sales
import Orders from "../pages/Orders/Orders";
import OrderDetails from "../pages/Orders/OrderDetails";
import Customers from "../pages/customers/Customers";

// Reports
import Analytics from "../pages/analytics/Analytics";

// Settings
import Settings from "../pages/settings/Settings";

export default function AppRoutes() {
  return (
    <Routes>

      {/* ==========================
            Public Routes
      ========================== */}

      <Route element={<PublicRoute />}>
        <Route path="/super-admin/login" element={<Login />} />
        <Route path="/store-admin/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Route>

      <Route
        path="/"
        element={<Navigate to="/super-admin/login" replace />}
      />

      {/* ==========================
            Protected Routes
      ========================== */}

      <Route element={<ProtectedRoute />}>

        <Route element={<MainLayout />}>

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Products */}
          <Route
            path="/products/*"
            element={<Products />}
          />

          <Route
            path="/add-product"
            element={<AddProduct />}
          />

          {/* Orders */}
          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/view-order/:id"
            element={<OrderDetails />}
          />

          {/* Customers */}
          <Route
            path="/customers"
            element={<Customers />}
          />

          {/* Reports */}
          <Route
            path="/analytics"
            element={<Analytics />}
          />

          {/* Settings */}
          <Route
            path="/settings"
            element={<Settings />}
          />

          {/* ==========================
                SUPER ADMIN ONLY
          ========================== */}

          <Route
            element={
              <RoleRoute
                roles={["super_admin"]}
              />
            }
          >
            <Route
              path="/categories/*"
              element={<Catagories />}
            />

            <Route
              path="/add-categories"
              element={<AddCatagories />}
            />
            <Route
              path="/sub-categories"
              element={<SubCategoryTable />}
            />

            {/* Future */}

            {/* <Route
              path="/attributes"
              element={<Attributes />}
            /> */}

            {/* <Route
              path="/stores"
              element={<Stores />}
            /> */}

            {/* <Route
              path="/store-admins"
              element={<StoreAdmins />}
            /> */}
          </Route>

        </Route>

      </Route>

      {/* 404 */}

      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />

    </Routes>
  );
}