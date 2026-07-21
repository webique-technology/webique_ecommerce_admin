import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button, {
    FormHeading,
    InputFields,
    TextareaFields,
    SelectField,
} from "../../../components/ui/FormFields";

import { useEffect } from "react";

import { createProduct, getProduct, updateBasicProduct } from "../../../services/productService";

export default function Step1Basic({

    isEdit,
    productId,
    setProductId,
    productType,
    setProductType,
    nextStep,

}) {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({

        name: "",

        product_type: "",

        brand: "",

        sku: "",

        short_description: "",

        description: "",

    });

    useEffect(() => {
        if (productId) {
            const fetchProduct = async () => {
                setFetching(true);
                try {
                    const response = await getProduct(productId);
                    const product = response.data?.data || response.data;

                    setFormData({
                        name: product.name || "",
                        product_type: product.product_type || "",
                        brand: product.brand || "",
                        sku: product.sku || "",
                        short_description: product.short_description || "",
                        description: product.description || "",
                    });

                    // Sync local parent state
                    if (product.product_type) {
                        setProductType(product.product_type);
                    }
                } catch (error) {
                    console.error("Failed to fetch product details:", error);
                    alert("Error loading product details.");
                } finally {
                    setFetching(false);
                }
            };

            fetchProduct();
        }
    }, [productId, setProductType]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (name === "product_type") {
            setProductType(value);
        }

    };
    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        setErrors({});

        try {
            let response;
            // const response = await createProduct(formData);
            if (productId) {
                // Edit Mode: Update Basic Product API
                response = await updateBasicProduct(productId, formData);
            } else {
                // Create Mode: Store Basic Product API
                response = await createProduct(formData);
            }

            const savedData = response.data?.data || response.data;
            // Save Product ID and Type to Parent State
            if (savedData?.id) {
                setProductId(savedData.id);
            }
            if (savedData?.product_type) {
                setProductType(savedData.product_type);
            }
            // Save Product ID
            // setProductId(response.data.data.id);

            // Save Product Type
            // setProductType(response.data.data.product_type);

            nextStep();

        } catch (error) {

            /*
            |--------------------------------------------------------------------------
            | Laravel Validation
            |--------------------------------------------------------------------------
            */

            if (error.response?.status === 422) {

                setErrors(
                    error.response.data.errors
                );

                return;

            }
            console.error(error);

            alert(

                error.response?.data?.message ||

                "Something went wrong."

            );

        } finally {

            setLoading(false);

        }

    };
    return (

        <form onSubmit={handleSubmit}>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">

                <FormHeading
                    icon="inventory_2"
                    title="Basic Information"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <InputFields
                        label="Product Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Product Name"
                        labelClass="block mb-2 font-medium"
                        inputClass="w-full border rounded-lg px-4 py-3"
                        error={errors.name?.[0]}
                        errorClass="text-red-500 text-sm mt-1 block"
                    />

                    <SelectField
                        label="Product Type"
                        name="product_type"
                        value={formData.product_type}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Simple Product",
                                value: "simple",
                            },
                            {
                                label: "Variable Product",
                                value: "variable",
                            },
                        ]}
                        placeholder="Select Product Type"
                        labelClass="block mb-2 font-medium"
                        selectClass="w-full border rounded-lg px-4 py-3"
                        error={errors.product_type?.[0]}
                        errorClass="text-red-500 text-sm mt-1 block"
                    />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

                    <InputFields
                        label="Brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="Brand Name"
                        labelClass="block mb-2 font-medium"
                        inputClass="w-full border rounded-lg px-4 py-3"
                        error={errors.brand?.[0]}
                        errorClass="text-red-500 text-sm mt-1 block"
                    />

                    <InputFields
                        label="SKU"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="Product SKU"
                        labelClass="block mb-2 font-medium"
                        inputClass="w-full border rounded-lg px-4 py-3"
                        error={errors.sku?.[0]}
                        errorClass="text-red-500 text-sm mt-1 block"
                    />

                </div>

                <div className="mt-5">

                    <TextareaFields
                        label="Short Description"
                        rows={3}
                        name="short_description"
                        value={formData.short_description}
                        onChange={handleChange}
                        placeholder="Short Description"
                        labelClass="block mb-2 font-medium"
                        textareaClass="w-full border rounded-lg px-4 py-3"
                        error={errors.short_description?.[0]}
                        errorClass="text-red-500 text-sm mt-1 block"
                    />

                </div>

                <div className="mt-5">

                    <TextareaFields
                        label="Description"
                        rows={6}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Full Description"
                        labelClass="block mb-2 font-medium"
                        textareaClass="w-full border rounded-lg px-4 py-3"
                        error={errors.description?.[0]}
                        errorClass="text-red-500 text-sm mt-1 block"
                    />

                </div>

            </div>

            <div className="flex justify-end gap-3">

                <Button
                    type="button"
                    label="Cancel"
                    className="bg-slate-500 hover:bg-slate-600"
                    onClick={() => navigate("/products")}
                />

                <Button
                    type="submit"
                    disabled={loading}
                    label={
                        loading
                            ? "Saving..."
                            : "Save & Continue"
                    }
                />

            </div>

        </form>

    );

}
