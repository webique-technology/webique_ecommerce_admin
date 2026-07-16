import React from "react";
import { Link } from "react-router-dom";

import Pagination from "../../components/common/Pagination";
import StatusBadge from "../../components/common/StatusBadge";

import {
    FiEdit2,
    FiTrash2,
    FiPlus,
    FiRefreshCw,
    FiArrowLeft,
} from "react-icons/fi";

export default function AttributeTable({
    categoryName,
    subcategoryName,

    attributes = [],
    loading = false,

    pagination,

    onPageChange,

    onRefresh,
    onAdd,
    onEdit,
    onDelete,
}) {

    // -----------------------------------
    // Type Badge
    // -----------------------------------

    const renderTypeBadge = (type) => {

        const colors = {

            dropdown:
                "bg-blue-100 text-blue-700",

            color:
                "bg-green-100 text-green-700",

            text:
                "bg-gray-100 text-gray-700",

            number:
                "bg-purple-100 text-purple-700",

            boolean:
                "bg-orange-100 text-orange-700",

        };

        return (

            <span
                className={`px-2 py-1 rounded-md text-xs font-semibold capitalize ${colors[type] || colors.text}`}
            >
                {type}
            </span>

        );

    };

    // -----------------------------------
    // Render Values
    // -----------------------------------

    const renderValues = (attribute) => {

        const values = attribute.attribute_values || [];

        if (values.length === 0) {

            return (
                <span className="text-gray-400">
                    —
                </span>
            );

        }

        // Color attribute
        if (attribute.attribute_type === "color") {

            return (

                <div className="flex items-center gap-2">

                    {values.slice(0, 5).map((color, index) => (

                        <div
                            key={index}
                            className="w-5 h-5 rounded-full border border-gray-300"
                            style={{ backgroundColor: color }}
                        />

                    ))}

                    {values.length > 5 && (

                        <span className="text-xs text-gray-500">
                            +{values.length - 5}
                        </span>

                    )}

                </div>

            );

        }

        // Other types
        return (

            <div className="flex flex-wrap gap-2">

                {values.slice(0, 3).map((value, index) => (

                    <span
                        key={index}
                        className="px-2 py-1 rounded bg-slate-100 text-xs"
                    >
                        {value}
                    </span>

                ))}

                {values.length > 3 && (

                    <span className="text-xs text-gray-500 self-center">
                        +{values.length - 3} more
                    </span>

                )}

            </div>

        );

    };

    return (

        <div className="p-6">

            {/* Header */}

            <div className="flex justify-between items-center mb-6">

                <div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">

                        <Link
                            to="/categories"
                            className="hover:text-indigo-600"
                        >
                            Categories
                        </Link>

                        <span>/</span>

                        <span>
                            {categoryName}
                        </span>

                        <span>/</span>

                        <span className="font-medium text-gray-700">

                            {subcategoryName}

                        </span>

                    </div>

                    <h1 className="text-2xl font-bold">

                        {subcategoryName} Attributes

                    </h1>

                    <p className="text-gray-500">

                        Manage product attributes for this subcategory

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

                        Add Attribute
                    </button>

                </div>

            </div>

            {/* Loading */}

            {loading && (

                <div className="bg-white rounded-xl p-10 text-center">

                    Loading Attributes...

                </div>

            )}

            {!loading && (

                <div className="bg-white rounded-xl shadow border overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="text-left p-4">
                                    Attribute
                                </th>

                                <th className="text-left">
                                    Type
                                </th>

                                <th className="text-left">
                                    Values
                                </th>

                                <th className="text-center">
                                    Required
                                </th>

                                <th className="text-center">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {attributes.length === 0 && (

                                <tr>

                                    <td
                                        colSpan={5}
                                        className="text-center p-8 text-gray-500"
                                    >
                                        No Attributes Found
                                    </td>

                                </tr>

                            )}
                            {attributes.map((attribute) => (

                                <tr
                                    key={attribute.id}
                                    className="border-t hover:bg-gray-50 transition"
                                >

                                    {/* Attribute */}

                                    <td className="p-4">

                                        <div className="font-semibold text-gray-800">
                                            {attribute.attribute_name}
                                        </div>

                                    </td>

                                    {/* Type */}

                                    <td className="py-4">

                                        {renderTypeBadge(attribute.attribute_type)}

                                    </td>

                                    {/* Values */}

                                    <td className="py-4">

                                        {renderValues(attribute)}

                                    </td>

                                    {/* Required */}

                                    <td className="text-center">

                                        <StatusBadge
                                            status={attribute.status}
                                        />

                                    </td>

                                    {/* Actions */}

                                    <td>

                                        <div className="flex justify-center gap-2">

                                            <button
                                                onClick={() =>
                                                    onEdit(attribute.id)
                                                }
                                                className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition"
                                            >
                                                <FiEdit2 />
                                            </button>

                                            <button
                                                onClick={() =>
                                                    onDelete(attribute)
                                                }
                                                className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition"
                                            >
                                                <FiTrash2 />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

            {/* Pagination */}

            <Pagination
                currentPage={pagination.current_page}
                totalPages={pagination.last_page}
                totalItems={pagination.total}
                perPage={pagination.per_page}
                onPageChange={onPageChange}
            />

            {/* Back Button */}

            <div className="mt-6">

                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-50 transition"
                >
                    <FiArrowLeft />

                    Back to Categories

                </button>

            </div>

        </div>

    );

}