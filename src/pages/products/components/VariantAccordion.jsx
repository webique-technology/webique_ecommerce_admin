import { useState } from "react";

import {
    InputFields,
    SelectField,
} from "../../../components/ui/FormFields";

export default function VariantAccordion({

    variant,
    index,
    updateVariant,
    removeVariant,
    errors = {},

}) {

    const [open, setOpen] = useState(index === 0);

    /*
    |--------------------------------------------------------------------------
    | Input Change
    |--------------------------------------------------------------------------
    */

    const handleChange = (e) => {

        const { name, value } = e.target;
        updateVariant(index, {
            ...variant,
            [name]: value,
        });
    };

    /*
    |--------------------------------------------------------------------------
    | Upload Images
    |--------------------------------------------------------------------------
    */

    const handleImages = (e) => {

        const files = Array.from(e.target.files);
        if (!files.length) return;
        const previewImages = files.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        updateVariant(index, {
            ...variant,
            images: [
                ...variant.images,
                ...previewImages,
            ],
        });
    };

    /*
    |--------------------------------------------------------------------------
    | Remove Image
    |--------------------------------------------------------------------------
    */

    const removeImage = (imageIndex) => {

        updateVariant(index, {

            ...variant,

            images: variant.images.filter(

                (_, i) => i !== imageIndex

            ),

        });

    };

    const title = Object.values(

        variant.variant_data

    ).join(" / ");
    const getError = (field) => {

        return errors?.[`variants.${index}.${field}`]?.[0];

    };

    return (

        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer bg-slate-50"
                onClick={() => setOpen(!open)}
            >

                <div>
                    <h3 className="font-semibold text-lg">
                        {title || "New Variant"}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                        SKU :
                        {
                            variant.sku || "Not Assigned"
                        }
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <span
                        className={`px-3 py-1 rounded-full text-xs
                        ${variant.status
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                    >
                        {
                            variant.status
                                ? "Active"
                                : "Inactive"
                        }

                    </span>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            removeVariant(index);
                        }}
                        className="text-red-600 hover:text-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
            {

                open && (

                    <div className="p-6 space-y-8 grid grid-cols-1 md:grid-cols-3 gap-5">

                        {/* ===========================================
                            Pricing & Inventory
                        =========================================== */}

                        <div>

                            <h4 className="font-semibold text-slate-800 mb-5">

                                Pricing & Inventory

                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                                <InputFields

                                    label="SKU"
                                    name="sku"
                                    value={variant.sku}
                                    onChange={handleChange}
                                    placeholder="SKU"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"
                                    error={getError("sku")}
                                    errorClass="text-red-500 text-sm mt-1 block"
                                />

                                <InputFields

                                    label="Barcode"
                                    name="barcode"
                                    value={variant.barcode}
                                    onChange={handleChange}
                                    placeholder="Barcode"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"

                                />

                                <SelectField
                                    label="Status"
                                    name="status"
                                    value={variant.status}
                                    onChange={(e) =>
                                        updateVariant(index, {
                                            ...variant,
                                            status: e.target.value === "true",
                                        })

                                    }

                                    options={[

                                        {
                                            label: "Active",
                                            value: "true",
                                        },

                                        {
                                            label: "Inactive",
                                            value: "false",
                                        },

                                    ]}

                                    labelClass="block mb-2 font-medium"
                                    selectClass="w-full border rounded-lg px-4 py-3"

                                />

                                <InputFields

                                    label="Price"
                                    name="price"
                                    type="number"
                                    value={variant.price}
                                    onChange={handleChange}
                                    placeholder="Price"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"
                                    error={getError("price")}

                                />

                                <InputFields

                                    label="Sale Price"
                                    name="sale_price"
                                    type="number"
                                    value={variant.sale_price}
                                    onChange={handleChange}
                                    placeholder="Sale Price"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"
                                    error={getError("sale_price")}

                                />

                                <InputFields

                                    label="Cost Price"
                                    name="cost_price"
                                    type="number"
                                    value={variant.cost_price}
                                    onChange={handleChange}
                                    placeholder="Cost Price"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"
                                    error={getError("cost_price")}

                                />

                                <InputFields

                                    label="Stock"
                                    name="stock"
                                    type="number"
                                    value={variant.stock}
                                    onChange={handleChange}
                                    placeholder="Stock"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"
                                    error={getError("stock")}

                                />

                                <InputFields

                                    label="Low Stock Alert"
                                    name="low_stock_alert"
                                    type="number"
                                    value={variant.low_stock_alert}
                                    onChange={handleChange}
                                    placeholder="Low Stock Alert"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"
                                    error={getError("low_stock_alert")}

                                />

                                <InputFields

                                    label="Tax Percentage"
                                    name="tax_percentage"
                                    type="number"
                                    value={variant.tax_percentage}
                                    onChange={handleChange}
                                    placeholder="Tax %"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"
                                    error={getError("tax_percentage")}

                                />

                            </div>

                        </div>

                        {/* ===========================================
                            Shipping Dimensions
                        =========================================== */}

                        <div>

                            <h4 className="font-semibold text-slate-800 mb-5">
                                Shipping Dimensions
                            </h4>

                            <div className="grid grid-cols-2 md:grid-cols-2 gap-5">

                                <InputFields
                                    label="Weight"
                                    name="weight"
                                    type="number"
                                    value={variant.weight}
                                    onChange={handleChange}
                                    placeholder="Weight"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"
                                    error={getError("weight")}

                                />

                                <InputFields
                                    label="Length"
                                    name="length"
                                    type="number"
                                    value={variant.length}
                                    onChange={handleChange}
                                    placeholder="Length"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"
                                    error={getError("length")}

                                />

                                <InputFields

                                    label="Width"
                                    name="width"
                                    type="number"
                                    value={variant.width}
                                    onChange={handleChange}
                                    placeholder="Width"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"
                                    error={getError("width")}
                                />

                                <InputFields

                                    label="Height"
                                    name="height"
                                    type="number"
                                    value={variant.height}
                                    onChange={handleChange}
                                    placeholder="Height"
                                    labelClass="block mb-2 font-medium"
                                    inputClass="w-full border rounded-lg px-4 py-3"
                                    error={getError("height")}
                                />

                            </div>

                        </div>
                        {/* ===========================================
                            Variant Images
                        =========================================== */}

                        <div>

                            <div className="flex items-center justify-between mb-5">
                                <h4 className="font-semibold text-slate-800">
                                    Variant Images
                                </h4>
                                <label className="px-4 py-2 rounded-lg bg-primary text-white cursor-pointer hover:opacity-90">
                                    Add Images
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImages}
                                        className="hidden"
                                    />

                                </label>

                            </div>
                            {
                                getError("images") && (

                                    <p className="text-red-500 text-sm mt-2">

                                        {getError("images")}

                                    </p>

                                )
                            }

                            {

                                variant.images.length === 0 ? (
                                    <div className="border-2 border-dashed border-slate-300 rounded-xl h-48 flex flex-col items-center justify-center text-slate-400">
                                        <span className="material-symbols-outlined text-5xl mb-2">
                                            imagesmode
                                        </span>
                                        <p>
                                            No Images Selected
                                        </p>

                                        <small>
                                            First uploaded image becomes thumbnail
                                        </small>
                                    </div>

                                ) : (

                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                                        {
                                            variant.images.map((image, imageIndex) => (
                                                <div key={imageIndex} className="relative group" >
                                                    {image.preview !== undefined
                                                        ? (<img src={image.preview} alt="Variant" className="w-full h-36 object-cover rounded-lg border" />)
                                                        : (<img src={image.image} alt="Variant" className="w-full h-36 object-cover rounded-lg border" />)
                                                    }
                                                    {
                                                        imageIndex === 0 && (
                                                            <span className="absolute left-2 top-2 bg-primary text-white text-xs px-2 py-1 rounded">
                                                                Thumbnail
                                                            </span>
                                                        )
                                                    }
                                                    <button
                                                        type="button"
                                                        onClick={() => removeImage(imageIndex)}
                                                        className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-600 text-white hidden group-hover:flex items-center justify-center"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );

}