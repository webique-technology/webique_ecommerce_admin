import React, { useState } from "react";
import {
    FiEdit2,
    FiTrash2,
    FiPlus,
    FiRefreshCw,
} from "react-icons/fi";
import {
    RxCaretRight,
    RxCaretDown,
} from "react-icons/rx";

export default function CategoryTable({
    categories = [],
    loading = false,
    pagination,
    onPageChange,
    onRefresh,
    onAdd,
    onEdit,
    onDelete,
    onManage,
}) {
    const [expanded, setExpanded] = useState({});

    const toggleCategory = (id) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="p-6">

            {/* Header */}

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h1 className="text-2xl font-bold">
                        Categories
                    </h1>

                    <p className="text-gray-500">
                        Manage Categories & Subcategories
                    </p>

                </div>

                <div className="flex gap-3">

                    <button
                        onClick={onRefresh}
                        className="border rounded-lg px-4 py-2 flex items-center gap-2"
                    >
                        <FiRefreshCw />
                        Refresh
                    </button>

                    <button
                        onClick={onAdd}
                        className="bg-indigo-600 text-white rounded-lg px-4 py-2 flex items-center gap-2"
                    >
                        <FiPlus />
                        Add Category
                    </button>

                </div>

            </div>

            {/* Loading */}

            {loading && (
                <div className="bg-white rounded-xl p-10 text-center">
                    Loading Categories...
                </div>
            )}

            {!loading && (
                <div className="bg-white rounded-xl shadow border overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="text-left p-4">
                                    Category
                                </th>

                                <th className="text-left">
                                    Description
                                </th>

                                <th className="text-center">
                                    Status
                                </th>

                                <th className="text-center">
                                    Sort
                                </th>

                                <th className="text-center">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {categories.length === 0 && (
                                <tr>

                                    <td
                                        colSpan="5"
                                        className="text-center p-8 text-gray-500"
                                    >
                                        No Categories Found
                                    </td>

                                </tr>
                            )}

                            {categories.map((category) => (
                                <React.Fragment key={category.id}>

                                    {/* Parent */}

                                    <tr className="border-t">

                                        <td className="p-4">

                                            <div
                                                onClick={() =>
                                                    toggleCategory(category.id)
                                                }
                                                className="flex items-center gap-2 cursor-pointer font-semibold"
                                            >

                                                {expanded[category.id] ? (
                                                    <RxCaretDown size={20} />
                                                ) : (
                                                    <RxCaretRight size={20} />
                                                )}

                                                {category.name}

                                            </div>

                                        </td>

                                        <td>
                                            {category.description}
                                        </td>

                                        <td className="text-center">

                                            <span
                                                className={`px-3 py-1 rounded-full text-xs
                        ${category.status
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {category.status
                                                    ? "Active"
                                                    : "Inactive"}
                                            </span>

                                        </td>

                                        <td className="text-center">
                                            {category.sort_order}
                                        </td>

                                        <td>

                                            <div className="flex justify-center gap-2">

                                                {category.children?.length === 0 && (
                                                    <button
                                                        onClick={() => onManage(category.id)}
                                                        className="px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm"
                                                    >
                                                        Manage
                                                    </button>
                                                )}

                                                <button
                                                    onClick={() =>
                                                        onEdit(category.id)
                                                    }
                                                    className="p-2 text-blue-600"
                                                >
                                                    <FiEdit2 />
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        onDelete(category.id)
                                                    }
                                                    className="p-2 text-red-600"
                                                >
                                                    <FiTrash2 />
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                    {/* Children */}

                                    {expanded[category.id] &&
                                        category.children?.map((child) => (

                                            <tr
                                                key={child.id}
                                                className="bg-gray-50 border-t"
                                            >

                                                <td className="pl-14 py-3">

                                                    {child.name}

                                                </td>

                                                <td>
                                                    {child.description}
                                                </td>

                                                <td className="text-center">

                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs
                            ${child.status
                                                                ? "bg-green-100 text-green-700"
                                                                : "bg-red-100 text-red-700"
                                                            }`}
                                                    >
                                                        {child.status
                                                            ? "Active"
                                                            : "Inactive"}
                                                    </span>

                                                </td>

                                                <td className="text-center">
                                                    {child.sort_order}
                                                </td>

                                                <td>

                                                    <div className="flex justify-center">

                                                        <button
                                                            onClick={() => onManage(child.id)}
                                                            className="px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm"
                                                        >
                                                            Manage
                                                        </button>

                                                    </div>

                                                </td>

                                            </tr>

                                        ))}

                                </React.Fragment>
                            ))}

                        </tbody>

                    </table>

                </div>
            )}

            {/* Pagination */}

            {!loading && pagination && (

                <div className="flex justify-between items-center mt-6">

                    <div className="text-gray-500">

                        Total Categories :
                        <b> {pagination.total}</b>

                    </div>

                    <div className="flex gap-2">

                        <button
                            disabled={pagination.current_page === 1}
                            onClick={() =>
                                onPageChange(
                                    pagination.current_page - 1
                                )
                            }
                            className="border rounded px-4 py-2 disabled:opacity-40"
                        >
                            Previous
                        </button>

                        <span className="px-4 py-2">

                            {pagination.current_page} / {pagination.last_page}

                        </span>

                        <button
                            disabled={
                                pagination.current_page ===
                                pagination.last_page
                            }
                            onClick={() =>
                                onPageChange(
                                    pagination.current_page + 1
                                )
                            }
                            className="border rounded px-4 py-2 disabled:opacity-40"
                        >
                            Next
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
}