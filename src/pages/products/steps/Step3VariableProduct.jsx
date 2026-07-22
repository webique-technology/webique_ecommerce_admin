import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/ui/FormFields";

import VariantGenerator from "../components/VariantGenerator";
import VariantAccordion from "../components/VariantAccordion";
import {
    saveVariableProduct,
    updateVariableProduct,
    getProduct,
} from "../../../services/productService";

export default function Step3VariableProduct({
    productId,
    previousStep,
    nextStep,
    isEdit = false,
    attributes,
}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    /*
    |--------------------------------------------------------------------------
    | Generated Variants
    |--------------------------------------------------------------------------
    */
    const [variants, setVariants] = useState([]);

    /*
    |--------------------------------------------------------------------------
    | Fetch Saved Product Variants (Edit Mode)
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        if (productId) {
            const fetchSavedVariants = async () => {
                try {
                    const response = await getProduct(productId);
                    const productData = response.data?.data || response.data;

                    if (productData?.variants && productData.variants.length > 0) {
                        const loadedVariants = productData.variants.map((v) => ({
                            id: v.id,
                            sku: v.sku || "",
                            barcode: v.barcode || "",
                            price: v.price || "",
                            sale_price: v.sale_price || "",
                            cost_price: v.cost_price || "",
                            stock: v.stock || 0,
                            low_stock_alert: v.low_stock_alert || 0,
                            tax_percentage: v.tax_percentage || 0,
                            weight: v.weight || "",
                            length: v.length || "",
                            width: v.width || "",
                            height: v.height || "",
                            status: v.status ?? true,
                            variant_data: v.variant_data || v.attributes || {},
                            images: v.images || [],
                        }));
                        setVariants(loadedVariants);
                    }
                } catch (error) {
                    console.error("Failed to load variant details:", error);
                }
            };

            fetchSavedVariants();
        }
    }, [productId]);

    /*
    |--------------------------------------------------------------------------
    | Update Variant
    |--------------------------------------------------------------------------
    */
    const updateVariant = (index, updatedVariant) => {
        setVariants((prev) =>
            prev.map((item, i) => (i === index ? updatedVariant : item))
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Remove Variant
    |--------------------------------------------------------------------------
    */
    const removeVariant = (index) => {
        setVariants((prev) => prev.filter((_, i) => i !== index));
    };

    /*
    |--------------------------------------------------------------------------
    | Submit
    |--------------------------------------------------------------------------
    */
    const handleSubmit = async () => {
        try {
            setLoading(true);
            setErrors({});

            const payload = new FormData();

            /*
            |--------------------------------------------------------------------------
            | Product
            |--------------------------------------------------------------------------
            */
            payload.append("product_id", productId);

            /*
            |--------------------------------------------------------------------------
            | Variants
            |--------------------------------------------------------------------------
            */
            variants.forEach((variant, index) => {
                if (variant.id) {
                    payload.append(`variants[${index}][id]`, variant.id);
                }

                /*
                |--------------------------------------------------------------------------
                | Variant Data (Color, Size etc.)
                |--------------------------------------------------------------------------
                */
                if (variant.variant_data) {
                    Object.entries(variant.variant_data).forEach(([key, value]) => {
                        payload.append(
                            `variants[${index}][variant_data][${key}]`,
                            value
                        );
                    });
                }

                /*
                |--------------------------------------------------------------------------
                | Pricing
                |--------------------------------------------------------------------------
                */
                payload.append(`variants[${index}][sku]`, variant.sku);
                payload.append(
                    `variants[${index}][barcode]`,
                    variant.barcode || ""
                );
                payload.append(`variants[${index}][price]`, variant.price);
                payload.append(
                    `variants[${index}][sale_price]`,
                    variant.sale_price || ""
                );
                payload.append(
                    `variants[${index}][cost_price]`,
                    variant.cost_price || ""
                );

                /*
                |--------------------------------------------------------------------------
                | Inventory
                |--------------------------------------------------------------------------
                */
                payload.append(`variants[${index}][stock]`, variant.stock);
                payload.append(
                    `variants[${index}][low_stock_alert]`,
                    variant.low_stock_alert || 0
                );
                payload.append(
                    `variants[${index}][tax_percentage]`,
                    variant.tax_percentage || 0
                );

                /*
                |--------------------------------------------------------------------------
                | Dimensions
                |--------------------------------------------------------------------------
                */
                payload.append(
                    `variants[${index}][weight]`,
                    variant.weight || ""
                );
                payload.append(
                    `variants[${index}][length]`,
                    variant.length || ""
                );
                payload.append(
                    `variants[${index}][width]`,
                    variant.width || ""
                );
                payload.append(
                    `variants[${index}][height]`,
                    variant.height || ""
                );

                /*
                |--------------------------------------------------------------------------
                | Status
                |--------------------------------------------------------------------------
                */
                payload.append(
                    `variants[${index}][status]`,
                    variant.status ? 1 : 0
                );

                /*
                |--------------------------------------------------------------------------
                | Images
                |--------------------------------------------------------------------------
                */
                if (variant.images && variant.images.length) {
                    variant.images.forEach((image) => {
                        if (image.file) {
                            payload.append(
                                `variants[${index}][images][]`,
                                image.file
                            );
                        }
                    });
                }
            });

            /*
            |--------------------------------------------------------------------------
            | API
            |--------------------------------------------------------------------------
            */
            for (const pair of payload.entries()) {
                console.log(pair[0], pair[1]);
            }

            let response;
            if (productId && isEdit) {
                response = await updateVariableProduct(productId, payload);
            } else {
                response = await saveVariableProduct(payload);
            }

            console.log(response.data);

            nextStep();
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
                return;
            }

            console.error(error);

            alert(
                error.response?.data?.message || "Something went wrong."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <VariantGenerator
                attributes={attributes}
                variants={variants}
                setVariants={setVariants}
            />

            {variants.length > 0 && (
                <>
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Generated Variants
                        </h2>
                        <span className="text-sm text-slate-500">
                            {variants.length} Variant(s)
                        </span>
                    </div>

                    <div className="space-y-5">
                        {variants.map((variant, index) => (
                            <VariantAccordion
                                key={index}
                                index={index}
                                variant={variant}
                                updateVariant={updateVariant}
                                removeVariant={removeVariant}
                                errors={errors}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Footer */}
            <div className="flex justify-between pt-4">
                <Button
                    type="button"
                    label="Back"
                    className="bg-slate-500 hover:bg-slate-600"
                    onClick={previousStep}
                />

                <div className="flex gap-3">
                    <Button
                        type="button"
                        label="Cancel"
                        className="bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                        onClick={() => navigate("/products")}
                    />

                    <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                        label={
                            loading
                                ? "Saving..."
                                : isEdit || productId
                                    ? "Update & Continue"
                                    : "Save & Continue"
                        }
                    />
                </div>
            </div>
        </div>
    );
}