import React, { useState } from "react";

import TableToolbar from "../../components/common/TableToolbar";
import Pagination from "../../components/common/Pagination";
import StatusBadge from "../../components/common/StatusBadge";
import StatusToggle from "../../components/common/StatusToggle";
import TableActions from "../../components/common/TableActions";
import { deleteProduct } from "../../services/productService";

export default function ProductTable({

    products = [],

    loading = false,

    pagination,

    search,
    onSearchChange,

    categoryFilter,
    onCategoryChange,

    productTypeFilter,
    onProductTypeChange,

    statusFilter,
    onStatusFilterChange,

    featuredFilter,
    onFeaturedFilterChange,

    categoryOptions = [],

    onRefresh,

    onAdd,

    onView,

    onEdit,

    onDelete,

    onStatusChange,

    onPageChange,

}) {
    const [deletingId, setDeletingId] = useState(null);

    /*
    |--------------------------------------------------------------------------
    | View Handler (Receives Product ID or Object)
    |--------------------------------------------------------------------------
    */
    const handleViewProduct = (productIdOrObject) => {
        if (typeof onView === "function") {
            onView(productIdOrObject);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | Edit Handler (Receives Product ID)
    |--------------------------------------------------------------------------
    */
    const handleEditProduct = (id) => {
        if (typeof onEdit === "function") {
            onEdit(id);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | Delete Handler (Receives Full Product Row)
    |--------------------------------------------------------------------------
    */
    const handleDeleteProduct = async (product) => {
        if (typeof onDelete === "function") {
            onDelete(product);
            return;
        }

        const confirmDelete = window.confirm(
            `Are you sure you want to delete "${product.name}"? This action cannot be undone.`
        );

        if (!confirmDelete) return;

        try {
            setDeletingId(product.id);
            await deleteProduct(product.id);
            if (typeof onRefresh === "function") {
                onRefresh();
            }
        } catch (error) {
            console.error("Failed to delete product:", error);
            alert(
                error.response?.data?.message || "Failed to delete product."
            );
        } finally {
            setDeletingId(null);
        }
    };

    const filters = [

        {

            key: "category",

            value: categoryFilter,

            onChange: onCategoryChange,

            placeholder: "Category",

            options: categoryOptions,

        },

        {

            key: "type",

            value: productTypeFilter,

            onChange: onProductTypeChange,

            placeholder: "Product Type",

            options: [

                {
                    value: "simple",
                    label: "Simple",
                },

                {
                    value: "variable",
                    label: "Variable",
                },

            ],

        },

        {

            key: "status",

            value: statusFilter,

            onChange: onStatusFilterChange,

            placeholder: "Status",

            options: [

                {
                    value: "1",
                    label: "Active",
                },

                {
                    value: "0",
                    label: "Inactive",
                },

            ],

        },

        // {

        //     key: "featured",

        //     value: featuredFilter,

        //     onChange: onFeaturedFilterChange,

        //     placeholder: "Featured",

        //     options: [

        //         {
        //             value: "1",
        //             label: "Featured",
        //         },

        //         {
        //             value: "0",
        //             label: "Not Featured",
        //         },

        //     ],

        // },

    ];

    return (

        <div className="p-6">

            <TableToolbar

                title="Products"

                description="Manage all products."

                search={search}

                onSearchChange={onSearchChange}

                filters={filters}

                onRefresh={onRefresh}

                addLabel="Add Product"

                onAdd={onAdd}

            />

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">

                    <table className="min-w-full">

                        <thead className="bg-slate-50 border-b border-slate-200">

                            <tr>

                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 w-24">
                                    Image
                                </th>

                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                                    Product
                                </th>

                                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">
                                    Category
                                </th>

                                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-600">
                                    Type
                                </th>

                                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-600">
                                    Price
                                </th>

                                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-600">
                                    Stock
                                </th>

                                {/* <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-600">
                                    Featured
                                </th> */}

                                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-600">
                                    Status
                                </th>

                                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-600 w-40">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {loading ? (

                                <tr>
                                    <td
                                        colSpan={9}
                                        className="py-12 text-center text-slate-500"
                                    >
                                        Loading products...
                                    </td>
                                </tr>

                            ) : products.length === 0 ? (

                                <tr>
                                    <td
                                        colSpan={9}
                                        className="py-12 text-center text-slate-500"
                                    >
                                        No products found.
                                    </td>
                                </tr>

                            ) : (

                                products.map((product) => (

                                    <tr
                                        key={product.id}
                                        className={`hover:bg-slate-50 transition ${deletingId === product.id ? "opacity-50 pointer-events-none" : ""}`}
                                    >

                                        {/* Image */}

                                        <td className="px-5 py-4">

                                            {product.thumbnail ? (

                                                <img
                                                    src={product.thumbnail}
                                                    alt={product.name}
                                                    className="w-16 h-16 rounded-lg border object-cover"
                                                />

                                            ) : (

                                                <div className="w-16 h-16 rounded-lg border bg-slate-100 flex items-center justify-center text-xs text-slate-400">
                                                    No Image
                                                </div>

                                            )}

                                        </td>

                                        {/* Product */}

                                        <td className="px-5 py-4">

                                            <div className="font-medium text-slate-800">
                                                {product.name}
                                            </div>

                                            <div className="text-sm text-slate-500 mt-1">
                                                SKU : {product.sku}
                                            </div>

                                        </td>

                                        {/* Category */}

                                        <td className="px-5 py-4">

                                            <div className="font-medium text-slate-700">
                                                {product.category_name}
                                            </div>

                                            <div className="text-sm text-slate-500">
                                                {product.subcategory_name}
                                            </div>

                                        </td>

                                        {/* Type */}

                                        <td className="px-5 py-4 text-center">

                                            <span
                                                className={`inline-flex px-3 py-1 rounded-full text-xs font-medium
                    ${product.product_type === "variable"
                                                        ? "bg-purple-100 text-purple-700"
                                                        : "bg-blue-100 text-blue-700"
                                                    }`}
                                            >
                                                {product.product_type === "variable"
                                                    ? "Variable"
                                                    : "Simple"}
                                            </span>

                                        </td>

                                        {/* Price */}

                                        <td className="px-5 py-4 text-right font-medium">

                                            ₹{" "}
                                            {Number(
                                                product.offer_price ??
                                                product.price ??
                                                0
                                            ).toLocaleString()}

                                        </td>

                                        {/* Stock */}

                                        <td className="px-5 py-4 text-center">

                                            {product.product_type === "variable"

                                                ? `${product.variants_count ?? 0} Variants`

                                                : product.stock_quantity ?? 0}

                                        </td>

                                        {/* Featured */}

                                        {/* <td className="px-5 py-4 text-center">

                                            <StatusBadge
                                                status={product.featured}
                                                activeText="Featured"
                                                inactiveText="No"
                                            />

                                        </td> */}

                                        {/* Status */}

                                        <td className="px-5 py-4 text-center">

                                            <StatusToggle
                                                checked={product.status}
                                                onChange={() =>
                                                    onStatusChange(product)
                                                }
                                            />

                                        </td>

                                        {/* Actions */}

                                        <td className="px-5 py-4">

                                            <TableActions
                                                row={product}
                                                onView={handleViewProduct}
                                                onEdit={handleEditProduct}
                                                onDelete={handleDeleteProduct}
                                            />

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>
                    </table>
                </div>
                {/* Pagination */}

                {!loading && pagination?.total > 0 && (

                    <Pagination
                        currentPage={pagination.current_page}
                        totalPages={pagination.last_page}
                        totalItems={pagination.total}
                        perPage={pagination.per_page}
                        onPageChange={onPageChange}
                    />

                )}
            </div>
        </div>
    );
}