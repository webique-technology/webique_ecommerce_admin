import React, { useState, useEffect } from "react";
import {
    FiEdit2,
    FiTrash2,
} from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";
import { RxCaretDown } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
const CatagoriesTable = ({
    categories,
    onAdd,
    onEdit,
    onDelete,
}) => {

    const navigate = useNavigate();

    const [expandedCategories, setExpandedCategories] = useState({});

    const toggleCategory = (id) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };



    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);







    const itemsPerPage = 4;







    ;

    // prevent overflow after delete


    // smart pagination








    return (
        <div className="p-xl flex-1 flex flex-col gap-lg">
            {/* header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-h1 text-h1 text-on-surface">
                        Categories
                    </h2>

                    <p className="text-on-surface-variant">
                        Manage all products
                    </p>
                </div>

                <button
                    onClick={onAdd}
                    className="px-6 py-3 bg-primary text-white rounded-lg"
                >
                    Add Category
                </button>
            </div>





            {/* FILTERS */}


            {/* table */}
            <div className="overflow-auto rounded-xl border border-outline-variant/30">
                <table className="w-full">
                    <thead className="bg-surface-container-low">
                        <tr>
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-left">Type</th>
                            <th className="p-4 text-left">Slug</th>
                            <th className="p-4 text-left">Items</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                        {categories.map((category) => (
                            <React.Fragment key={category.id}>
                                <tr>
                                    <td
                                        className="p-4 cursor-pointer font-semibold flex items-center gap-2"
                                        onClick={() => toggleCategory(category.id)}
                                    >
                                        {expandedCategories[category.id] ? (
                                            <RxCaretDown size={20} />
                                        ) : (
                                            <RxCaretRight size={20} />
                                        )}

                                        <span>{category.name}</span>
                                    </td>

                                    <td>{category.type}</td>
                                    <td>{category.slug}</td>
                                    <td>{category.items}</td>
                                    <td>{category.status}</td>
                                    <td></td>
                                </tr>

                                {expandedCategories[category.id] &&
                                    category.subCategories.map((sub, index) => (
                                        <tr key={index} className="bg-gray-50">
                                            <td className="p-4 font-semibold pl-10">{sub}</td>
                                            <td>{category.type}</td>
                                            <td>{sub.toLowerCase().replace(/\s+/g, "-")}</td>
                                            <td>-</td>
                                            <td>{category.status}</td>
                                            <td className="text-center">
                                                <button
                                                    onClick={() => navigate(`/sub-categories`)}
                                                    className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                                >
                                                    Manage
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
                {/* PAGINATION */}

            </div>

            {/* delete modal */}
            {/* VIEW MODAL */}


        </div>
    );
};

export default CatagoriesTable;