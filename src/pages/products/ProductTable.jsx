import React, { useState, useEffect } from "react";
import {
    FiEdit2,
    FiTrash2,
    FiEye,
} from "react-icons/fi";
import { LuListFilter } from "react-icons/lu";
import { Routes, Route, useNavigate } from "react-router-dom";

const ProductTable = ({
    womenWearProducts,
    onAdd,
    onEdit,
    onDelete,
}) => {

    const [page, setPage] = useState("table");
    const [selectedSizes, setSelectedSizes] = useState({});
    const navigate = useNavigate();
    const totalStock = womenWearProducts.reduce((total, item) => {
        return (
            total +
            (item.sizes || []).reduce(
                (sum, size) => sum + size.stock,
                0
            )
        );
    }, 0);
    const totalProducts =
        womenWearProducts.length;

    const activeProducts =
        womenWearProducts.filter(
            (item) => item.status === "Active"
        ).length;

    const availableProducts = womenWearProducts.filter((item) => {
        const totalStock = item.sizes.reduce(
            (sum, size) => sum + size.stock,
            0
        );

        return totalStock > 20;
    }).length;
    const defaultSizes = [
        { size: "2T", stock: 0 },
        { size: "4T", stock: 0 },
        { size: "6T", stock: 0 },
    ];
    const lowStockProducts = womenWearProducts.filter((item) => {
        const totalStock = item.sizes.reduce(
            (sum, size) => sum + size.stock,
            0
        );

        return totalStock > 0 && totalStock < 10;
    }).length;

    const outOfStockProducts = womenWearProducts.filter((item) => {
        const totalStock = item.sizes.reduce(
            (sum, size) => sum + size.stock,
            0
        );

        return totalStock === 0;
    }).length;



    const statsData = [
        {
            id: 1,
            title: "Total Products",
            value: totalProducts,
            subtitle: `${totalStock} Units`,
            subtitleIcon: "",
            subtitleColor: "text-secondary",
            borderClass: "",
            valueColor: "text-on-surface",
        },
        {
            id: 2,
            title: "Available",
            value: availableProducts,
            subtitle: "Stock > 20",
            subtitleIcon: "",
            subtitleColor: "text-success",
            borderClass: "border-l-4 border-available",
            valueColor: "text-success",
        },
        {
            id: 3,
            title: "Low Stock",
            value: lowStockProducts,
            subtitle: "Stock < 10",
            subtitleIcon: "",
            subtitleColor: "text-warning",
            borderClass: "border-l-4 border-low",
            valueColor: "text-warning",
        },
        {
            id: 4,
            title: "Out of Stock",
            value: outOfStockProducts,
            subtitle: "Stock = 0",
            subtitleIcon: "",
            subtitleColor: "text-error",
            borderClass: "border-l-4 border-error",
            valueColor: "text-error",
        },
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [currentPage, setCurrentPage] =
        useState(1);

    const [searchTerm, setSearchTerm] =
        useState("");

    const [selectedGender, setSelectedGender] =
        useState("All Genders");

    const [selectedStatus, setSelectedStatus] =
        useState("All Status");

    const [selectedProductFilter, setSelectedProductFilter] =
        useState("All Products");

    const itemsPerPage = 4;


    const filteredProducts =
        womenWearProducts.filter((item) => {

            const matchesSearch =
                (item.product || "")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||

                (item.subProduct || "")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||

                (item.brand || "")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

            const matchesCategory =
                selectedGender === "All Genders" ||
                item.gender === selectedGender;

            const matchesStatus =
                selectedStatus === "All Status" ||
                item.status === selectedStatus;

            const matchesProduct =
                selectedProductFilter === "All Products" ||
                item.product === selectedProductFilter;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesStatus &&
                matchesProduct
            );
        });

    const totalItems = filteredProducts.length;

    const totalPages = Math.ceil(
        totalItems / itemsPerPage
    );

    const startIndex =
        (currentPage - 1) * itemsPerPage;

    const currentData =
        filteredProducts.slice(
            startIndex,
            startIndex + itemsPerPage
        );





    const startItem =
        totalItems === 0 ? 0 : startIndex + 1;

    const endItem = Math.min(
        startIndex + itemsPerPage,
        totalItems
    );

    // prevent overflow after delete
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages || 1);
        }
    }, [totalPages, currentPage]);

    // smart pagination
    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 7) {
            return Array.from(
                { length: totalPages },
                (_, i) => i + 1
            );
        }

        pages.push(1);

        if (currentPage > 3) {
            pages.push("...");
        }

        for (
            let i = Math.max(2, currentPage - 1);
            i <= Math.min(
                totalPages - 1,
                currentPage + 1
            );
            i++
        ) {
            pages.push(i);
        }

        if (currentPage < totalPages - 2) {
            pages.push("...");
        }

        pages.push(totalPages);

        return pages;
    };
    const [viewModal, setViewModal] =
        useState(false);

    const [selectedProduct, setSelectedProduct] =
        useState(null);

    const handleView = (product) => {
        setSelectedProduct(product);

        setViewModal(true);
    };

    const handleDeleteClick = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const confirmDelete = () => {
        onDelete(selectedId);

        setShowModal(false);
        setSelectedId(null);
    };



    return (
        <div className="p-xl flex-1 flex flex-col gap-lg">
            {/* header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-h1 text-h1 text-on-surface">
                        Products
                    </h2>

                    <p className="text-on-surface-variant">
                        Manage all products
                    </p>
                </div>

                <button
                    onClick={onAdd}
                    className="px-6 py-3 bg-primary text-white rounded-lg"
                >
                    Add Product
                </button>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-4 gap-lg ">
                {statsData.map((item) => (
                    <div
                        key={item.id}
                        className={`bg-white p-lg rounded-xl ambient-shadow flex flex-col gap-xs ${item.borderClass}`}
                    >
                        <span className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                            {item.title}
                        </span>

                        <div className="flex items-end justify-between">
                            <span
                                className={`font-h2 text-h2 ${item.valueColor}`}
                            >
                                {item.value}
                            </span>

                            <span
                                className={`${item.subtitleColor} font-label-sm text-label-sm flex items-center gap-1`}
                            >
                                {item.subtitleIcon && (
                                    <span className="material-symbols-outlined text-[16px]">
                                        {item.subtitleIcon}
                                    </span>
                                )}

                                {item.subtitle}
                            </span>
                        </div>
                    </div>
                    // <Table
                    //     title={item.title}
                    //     subtitile={item.subtitle}
                    // />
                ))}
            </div>

            {/* FILTERS */}
            <div className="bg-white p-4 rounded-xl border border-slate-200  flex flex-wrap items-center gap-4">

                {/* SEARCH */}
                <div className="flex items-center gap-2 border border-slate-200 px-3 py-2 rounded-lg bg-slate-50 min-w-[240px]">

                    <span className="material-symbols-outlined text-[18px] text-slate-500">
                        search
                    </span>

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="bg-transparent outline-none w-full"
                    />
                </div>

                {/* GENDER */}
                <div className="flex items-center gap-2 border border-slate-200 px-3 py-2 rounded-lg bg-slate-50 min-w-[180px]">

                    <select
                        value={selectedGender}
                        onChange={(e) => {
                            setSelectedGender(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="bg-transparent outline-none w-full"
                    >
                        <option>All Genders</option>

                        {[
                            ...new Set(
                                womenWearProducts.map(
                                    (item) => item.gender
                                )
                            ),
                        ].map((category, index) => (
                            <option key={index}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* STATUS */}
                {/* <div className="flex items-center gap-2 border border-slate-200 px-3 py-2 rounded-lg bg-slate-50 min-w-[160px]">

                    <select
                        value={selectedStatus}
                        onChange={(e) => {
                            setSelectedStatus(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="bg-transparent outline-none w-full"
                    >
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div> */}

                {/* PRODUCT */}
                <div className="flex items-center gap-2 border border-slate-200 px-3 py-2 rounded-lg bg-slate-50 min-w-[180px]">

                    <select
                        value={selectedProductFilter}
                        onChange={(e) => {
                            setSelectedProductFilter(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        <option>All Products</option>

                        {[
                            ...new Set(
                                womenWearProducts.map(
                                    (item) => item.product
                                )
                            ),
                        ].map((product, index) => (
                            <option key={index}>
                                {product}
                            </option>
                        ))}
                    </select>
                </div>

                {/* CLEAR */}
                <button
                    onClick={() => {
                        setSearchTerm("");
                        setSelectedGender(
                            "All"
                        );
                        setSelectedStatus(
                            "All Status"
                        );
                        setSelectedProductFilter(
                            "All Products"
                        );
                        setCurrentPage(1);
                    }}
                    className="ml-auto px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-100 flex gap-1 items-center"
                >
                    <LuListFilter /> Clear Filters
                </button>
            </div>

            {/* table */}
            <div className="overflow-auto rounded-xl border border-outline-variant/30">
                <table className="w-full">
                    <thead className="bg-surface-container-low">
                        <tr>
                            <th className="p-4 text-left">Image</th>

                            <th className="p-4 text-left">Category</th>
                            <th className="p-4 text-left">Size</th>
                            <th className="p-4 text-left">Stock</th>
                            {/* <th className="p-4 text-left">Brand</th> */}
                            <th className="p-4 text-left">Price</th>

                            {/* <th className="p-4 text-left">Status</th> */}
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                        {currentData.map((item) => (
                            <tr
                                key={item.id}
                                className="hover:bg-slate-50/80 transition-colors group"
                            >
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.images?.[0]}
                                            alt={item.product}
                                            className="w-16 h-16 rounded-lg object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold">
                                                {item.product}
                                            </h3>

                                            <p className="text-sm text-on-surface-variant">
                                                {item.subProduct}
                                            </p>
                                        </div>
                                    </div>
                                </td>



                                <td className="p-4">
                                    <p>{item.category}</p>
                                    <p>{item.subCategory}</p>

                                </td>

                                <td>
                                    <div className="flex gap-1 flex-wrap">
                                        {(item.sizes?.length
                                            ? item.sizes
                                            : defaultSizes
                                        ).map((s) => {
                                            const sizes =
                                                item.sizes?.length
                                                    ? item.sizes
                                                    : defaultSizes;

                                            const activeSize =
                                                selectedSizes[item.id] ||
                                                sizes[0].size;

                                            return (
                                                <button
                                                    key={s.size}
                                                    type="button"
                                                    className={`btn btn-sm cursor-pointer ${activeSize === s.size
                                                        ? "w-8 h-8 rounded border border-gray-600 flex items-center justify-center text-[10px] font-bold text-primary"
                                                        : "w-8 h-8 rounded border border-gray-100 flex items-center justify-center text-[10px] font-medium text-slate-500"
                                                        }`}
                                                    onClick={() =>
                                                        setSelectedSizes((prev) => ({
                                                            ...prev,
                                                            [item.id]: s.size,
                                                        }))
                                                    }
                                                >
                                                    {s.size}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </td>
                                <td>
                                    {(() => {
                                        const selectedSize =
                                            selectedSizes[item.id] || item.sizes[0].size;

                                        const sizeData = item.sizes.find(
                                            (s) => s.size === selectedSize
                                        );

                                        if (!sizeData) return null;

                                        const stock = sizeData.stock;

                                        return (
                                            <span
                                                className={`badge px-2 py-1 ${stock === 0
                                                        ? "bg-gray-100 text-gray-700"
                                                        : stock < 5
                                                            ? "bg-red-100 text-red-700"
                                                            : "bg-green-100 text-green-700"
                                                    }`}
                                            >
                                                {sizeData.size} -{" "}
                                                {stock === 0
                                                    ? `Out of Stock (${stock})`
                                                    : stock < 5
                                                        ? `Low Stock (${stock})`
                                                        : `Available (${stock})`}
                                            </span>
                                        );
                                    })()}
                                </td>

                                {/* <td className="p-4">{item.brand}</td> */}

                                <td className="p-4">
                                    ₹{item.price}
                                </td>

                                {/* <td className="p-4">
                                    {item.stockLevel}
                                </td> */}

                                {/* <td className="p-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${item.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </td> */}

                                <td className="p-4">
                                    <div className="flex items-center gap-4">

                                        {/* VIEW */}
                                        <button
                                            onClick={() => handleView(item)}
                                            className="text-gray-600 hover:text-primary transition"
                                        >
                                            <FiEye size={18} />
                                        </button>

                                        {/* EDIT */}
                                        <button
                                            onClick={() => onEdit(item)}
                                            className="text-blue-600 hover:scale-110 transition"
                                        >
                                            <FiEdit2 size={18} />
                                        </button>

                                        {/* DELETE */}
                                        <button
                                            onClick={() =>
                                                handleDeleteClick(item.id)
                                            }
                                            className="text-red-600 hover:scale-110 transition"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* PAGINATION */}
                {totalPages > 1 && (
                    <div className="px-lg py-md border-t border-slate-100 flex items-center justify-between bg-white">

                        {/* LEFT */}
                        <div className="text-sm text-gray-500">
                            Showing {startItem} to {endItem} of{" "}
                            {totalItems.toLocaleString()} results
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-2">

                            {/* PREV */}
                            <button
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.max(prev - 1, 1)
                                    )
                                }
                                disabled={currentPage === 1}
                                className="w-9 h-9 rounded-lg border border-outline-variant/30 flex items-center justify-center disabled:opacity-40"
                            >
                                {"<"}
                            </button>

                            {/* PAGE NUMBERS */}
                            {getPageNumbers().map((page, index) =>
                                page === "..." ? (
                                    <span
                                        key={index}
                                        className="px-2"
                                    >
                                        ...
                                    </span>
                                ) : (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setCurrentPage(page)
                                        }
                                        className={`w-9 h-9 rounded-lg border text-sm transition ${currentPage === page
                                            ? "bg-primary text-white border-primary"
                                            : "border-outline-variant/30 hover:bg-surface-container-low"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                )
                            )}

                            {/* NEXT */}
                            <button
                                onClick={() =>
                                    setCurrentPage((prev) =>
                                        Math.min(
                                            prev + 1,
                                            totalPages
                                        )
                                    )
                                }
                                disabled={
                                    currentPage === totalPages
                                }
                                className="w-9 h-9 rounded-lg border border-outline-variant/30 flex items-center justify-center disabled:opacity-40"
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* delete modal */}
            {/* VIEW MODAL */}
            {viewModal && selectedProduct && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden">

                        {/* IMAGE */}
                        <div className="h-72 overflow-hidden">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.product}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 space-y-4">

                            <div>
                                <h2 className="text-2xl font-bold">
                                    {selectedProduct.product}
                                </h2>

                                <p className="text-gray-500">
                                    {selectedProduct.subProduct}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Category
                                    </p>

                                    <p className="font-semibold">
                                        {selectedProduct.category}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Brand
                                    </p>

                                    <p className="font-semibold">
                                        {selectedProduct.brand}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Price
                                    </p>

                                    <p className="font-semibold">
                                        ₹{selectedProduct.price}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Stock
                                    </p>

                                    <p className="font-semibold">
                                        {selectedProduct.stockLevel}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Status
                                    </p>

                                    <p className="font-semibold">
                                        {selectedProduct.status}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">
                                    Description
                                </p>

                                <p className="text-gray-700">
                                    {selectedProduct.description}
                                </p>
                            </div>

                            {/* footer */}
                            <div className="flex justify-end pt-4">
                                <button
                                    onClick={() =>
                                        setViewModal(false)
                                    }
                                    className="px-5 py-2 bg-primary text-white rounded-lg"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md">

                        <h2 className="text-xl font-bold mb-3">
                            Delete Product
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete this product?
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setSelectedId(null);
                                }}
                                className="px-4 py-2 border rounded-lg"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductTable;