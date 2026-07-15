import React, { useState } from "react";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const SubCategoryTable = () => {
    const [formData, setFormData] = useState({
        name: "",
        inputType: "Dropdown",
        values: [],
        required: true,
    });

    const [valueInput, setValueInput] = useState("");

    const [attributes, setAttributes] = useState([
        {
            id: 1,
            name: "Brand",
            inputType: "Dropdown",
            values: ["Samsung", "Apple", "OnePlus", "Xiaomi"],
            required: true,
        },
        {
            id: 2,
            name: "RAM",
            inputType: "Dropdown",
            values: ["4GB", "6GB", "8GB", "12GB", "16GB"],
            required: true,
        },
        {
            id: 3,
            name: "Storage",
            inputType: "Dropdown",
            values: ["32GB", "64GB", "128GB", "256GB", "512GB"],
            required: true,
        },
        {
            id: 4,
            name: "Color",
            inputType: "Color Palette",
            values: [
                "#000000",
                "#ffffff",
                "#2563EB",
                "#EF4444",
            ],
            required: true,
        },
        {
            id: 5,
            name: "Battery Capacity",
            inputType: "Dropdown",
            values: [
                "3000mAh",
                "4000mAh",
                "5000mAh",
                "6000mAh",
            ],
            required: true,
        },
        {
            id: 6,
            name: "Screen Size",
            inputType: "Dropdown",
            values: [
                "5.5 inch",
                "6.1 inch",
                "6.7 inch",
                "7.1 inch",
            ],
            required: false,
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editingAttribute, setEditingAttribute] = useState(null);

    const handleAdd = () => {
        setEditingAttribute(null);
        setShowModal(true);
    };

    const handleEdit = (attribute) => {
        setEditingAttribute(attribute);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        setAttributes((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    return (
        <div className="p-xl flex-1 flex flex-col gap-lg">

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-h1 text-h1">
                        Attributes
                    </h2>

                    <p className="text-on-surface-variant">
                        Manage Attribute for this sub-category
                    </p>
                </div>

                <button
                    onClick={handleAdd}
                    className="bg-primary text-white px-lg py-md rounded-xl"
                >
                    Add Attribute
                </button>
            </div>

            <section className="bg-white rounded-xl border overflow-hidden">

                <div className="overflow-auto">

                    <table className="w-full">

                        <thead className="bg-surface-container-low">

                            <tr>

                                <th className="px-lg py-md text-left">
                                    Attribute
                                </th>

                                <th className="px-lg py-md text-left">
                                    Type
                                </th>

                                <th className="px-lg py-md text-left">
                                    Values
                                </th>

                                <th className="px-lg py-md text-center">
                                    Required
                                </th>

                                <th className="px-lg py-md text-center">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {attributes.map((attribute) => (

                                <tr
                                    key={attribute.id}
                                    className="border-t"
                                >

                                    <td className="px-lg py-md">
                                        {attribute.name}
                                    </td>

                                    <td className="px-lg py-md">

                                        <span className="px-3 py-1 rounded bg-blue-100 text-blue-600 text-xs font-semibold">

                                            {attribute.inputType}

                                        </span>

                                    </td>

                                    <td className="px-lg py-md">

                                        {attribute.inputType ===
                                            "Color Palette" ? (

                                            <div className="flex gap-2">

                                                {attribute.values.map(
                                                    (color, index) => (
                                                        <span
                                                            key={index}
                                                            className="w-5 h-5 rounded-full border"
                                                            style={{
                                                                backgroundColor: color,
                                                            }}
                                                        />
                                                    )
                                                )}

                                            </div>

                                        ) : (

                                            attribute.values.join(", ")

                                        )}

                                    </td>

                                    <td className="px-lg py-md text-center">

                                        {attribute.required ? (

                                            <IoCheckmarkCircleOutline className="text-green-600 text-2xl mx-auto" />

                                        ) : (

                                            <IoCloseCircleOutline className="text-red-600 text-2xl mx-auto" />

                                        )}

                                    </td>

                                    <td className="px-lg py-md">

                                        <div className="flex justify-center gap-4">

                                            <button
                                                onClick={() =>
                                                    handleEdit(attribute)
                                                }
                                            >
                                                <MdOutlineEdit className="text-blue-600 text-2xl" />
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(attribute.id)
                                                }
                                            >
                                                <RiDeleteBinLine className="text-red-600 text-2xl" />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </section>

            {showModal && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
                    <div className="bg-white rounded-xl w-[650px] p-6">

                        {/* Initialize these states at the top of your component */}
                        {/* const [formData, setFormData] = useState({
          name: "",
          inputType: "Dropdown",
          values: [],
          required: true,
      });
      const [valueInput, setValueInput] = useState("");
      */}

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">
                                {editingAttribute ? "Edit Attribute" : "Add Attribute"}
                            </h2>

                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setEditingAttribute(null);
                                }}
                                className="text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        {/* Attribute Name */}

                        <div className="mb-5">
                            <label className="block mb-2 font-medium">
                                Attribute Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter Attribute Name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full border rounded-lg px-4 py-3 outline-none"
                            />
                        </div>

                        {/* Input Type */}

                        <div className="mb-5">
                            <label className="block mb-2 font-medium">
                                Input Type
                            </label>

                            <select
                                value={formData.inputType}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        inputType: e.target.value,
                                    })
                                }
                                className="w-full border rounded-lg px-4 py-3 outline-none"
                            >
                                <option>Dropdown</option>
                                <option>Color Palette</option>
                                <option>Text</option>
                                <option>Number</option>
                            </select>
                        </div>

                        {/* Add Value */}

                        {(formData.inputType === "Dropdown" ||
                            formData.inputType === "Color Palette") && (
                                <>
                                    <label className="block mb-2 font-medium">
                                        Values
                                    </label>

                                    <div className="flex gap-3">

                                        <input
                                            type={
                                                formData.inputType === "Color Palette"
                                                    ? "color"
                                                    : "text"
                                            }
                                            value={valueInput}
                                            onChange={(e) =>
                                                setValueInput(e.target.value)
                                            }
                                            className="flex-1 border rounded-lg px-4 py-3 outline-none"
                                        />

                                        <button
                                            className="bg-primary text-white px-5 rounded-lg"
                                        >
                                            Add
                                        </button>

                                    </div>

                                    {/* Values */}

                                    <div className="flex flex-wrap gap-3 mt-4">

                                        {formData.values.map((value, index) => (

                                            <div
                                                key={index}
                                                className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2"
                                            >

                                                {formData.inputType ===
                                                    "Color Palette" ? (
                                                    <span
                                                        className="w-5 h-5 rounded-full border"
                                                        style={{
                                                            background: value,
                                                        }}
                                                    />
                                                ) : (
                                                    <span>{value}</span>
                                                )}

                                                <button className="text-red-500">
                                                    ×
                                                </button>

                                            </div>

                                        ))}

                                    </div>
                                </>
                            )}

                        {/* Required */}

                        <div className="flex items-center justify-between mt-6">

                            <label className="font-medium">
                                Required
                            </label>

                            <input
                                type="checkbox"
                                checked={formData.required}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        required: e.target.checked,
                                    })
                                }
                            />

                        </div>

                        {/* Footer */}

                        <div className="flex justify-end gap-4 mt-8">

                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setEditingAttribute(null);
                                }}
                                className="border px-6 py-2 rounded-lg"
                            >
                                Cancel
                            </button>

                            <button
                                className="bg-primary text-white px-6 py-2 rounded-lg"
                            >
                                {editingAttribute ? "Update" : "Save"}
                            </button>

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default SubCategoryTable;