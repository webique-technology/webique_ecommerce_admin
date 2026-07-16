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

// Modules
import Products from "../pages/products/Products";
import Categories from "../pages/categories/Categories";
import CategoryForm from "../pages/categories/CategoryForm";
import Attributes from "../pages/categoryAttributes/Attributes";
import AttributeForm from "../pages/categoryAttributes/AttributeForm";

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

      {/* ================= PUBLIC ================= */}

      <Route element={<PublicRoute />}>
        <Route
          path="/super-admin/login"
          element={<Login />}
        />

        <Route
          path="/store-admin/login"
          element={<Login />}
        />

        <Route
          path="/forget-password"
          element={<ForgetPassword />}
        />
      </Route>

      <Route
        path="/"
        element={<Navigate to="/super-admin/login" replace />}
      />

      {/* ================= PROTECTED ================= */}

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

          {/* Orders */}

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/orders/:id"
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

          {/* ========= SUPER ADMIN ========= */}

          <Route element={<RoleRoute roles={["super_admin"]} />}>

            <Route
              path="/categories/*"
              element={<Categories />}
            />
            <Route
              path="/categories/add"
              element={<CategoryForm />}
            />

            <Route
              path="/categories/edit/:id"
              element={<CategoryForm />}
            />

            <Route
              path="/categories/:subcategoryId/attributes"
              element={<Attributes />}
            />

            <Route
              path="/categories/:subcategoryId/attributes/add"
              element={<AttributeForm />}
            />

            <Route
              path="/categories/:subcategoryId/attributes/edit/:id"
              element={<AttributeForm />}
            />

            {/*
              Future

              <Route path="/attributes/*" element={<Attributes />} />
              <Route path="/stores/*" element={<Stores />} />
              <Route path="/store-admins/*" element={<StoreAdmins />} />
            */}

          </Route>

        </Route>
      </Route>

      {/* ================= 404 ================= */}

      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />

    </Routes>
  );
}