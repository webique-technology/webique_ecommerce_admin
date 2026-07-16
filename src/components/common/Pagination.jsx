import React from "react";

export default function Pagination({
    currentPage = 1,
    totalPages = 1,
    totalItems = 0,
    perPage = 10,
    onPageChange,
}) {

    if (totalPages <= 1) return null;

    const startItem =
        totalItems === 0
            ? 0
            : (currentPage - 1) * perPage + 1;

    const endItem = Math.min(
        currentPage * perPage,
        totalItems
    );

    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }

            return pages;
        }

        pages.push(1);

        if (currentPage > 3) {
            pages.push("...");
        }

        for (
            let i = Math.max(2, currentPage - 1);
            i <= Math.min(totalPages - 1, currentPage + 1);
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

    return (
        <div className="px-lg py-md mt-3 border-t border-slate-100 flex items-center justify-between bg-white rounded-xl shadow border">

            {/* Left */}

            <div className="text-sm text-gray-500">
                Showing {startItem} to {endItem} of{" "}
                {totalItems.toLocaleString()} results
            </div>

            {/* Right */}

            <div className="flex items-center gap-2">

                <button
                    onClick={() =>
                        onPageChange(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                    className="w-9 h-9 rounded-lg border border-outline-variant/30 flex items-center justify-center disabled:opacity-40"
                >
                    {"<"}
                </button>

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
                            key={page}
                            onClick={() =>
                                onPageChange(page)
                            }
                            className={`w-9 h-9 rounded-lg border text-sm transition
                            ${currentPage === page
                                    ? "bg-primary text-white border-primary"
                                    : "border-outline-variant/30 hover:bg-surface-container-low"
                                }`}
                        >
                            {page}
                        </button>
                    )
                )}

                <button
                    onClick={() =>
                        onPageChange(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                    className="w-9 h-9 rounded-lg border border-outline-variant/30 flex items-center justify-center disabled:opacity-40"
                >
                    {">"}
                </button>

            </div>

        </div>
    );
}