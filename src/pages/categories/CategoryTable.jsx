import React, { useState } from "react";
import Pagination from "../../components/common/Pagination";
import StatusBadge from "../../components/common/StatusBadge";
import StatusToggle from "../../components/common/StatusToggle";

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
    onStatusChange,
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
                                        {/* <td className="px-6 py-4 text-center">
                                            <StatusBadge status={category.status} />
                                        </td> */}
                                        <td className="px-6 py-4 text-center">

                                            <div className="flex items-center justify-center gap-3">

                                                <StatusBadge status={category.status} />

                                                <StatusToggle
                                                    checked={category.status}
                                                    onChange={() => onStatusChange(category.id)}
                                                />

                                            </div>

                                        </td>

                                        <td className="text-center">
                                            [ {category.sort_order} ]
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
                                                <td className="px-6 py-4 text-center">
                                                    <div className="flex items-center justify-center gap-3">

                                                        <StatusBadge status={child.status} />

                                                        <StatusToggle
                                                            checked={child.status}
                                                            onChange={() => onStatusChange(child.id)}
                                                        />

                                                    </div>
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

            <Pagination
                currentPage={pagination.current_page}
                totalPages={pagination.last_page}
                totalItems={pagination.total}
                perPage={pagination.per_page}
                onPageChange={onPageChange}
            />

        </div>
    );
}