import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/ui/FormFields";

import PricingInventoryCard from "../components/PricingInventoryCard";
import DimensionCard from "../components/DimensionCard";
import ImageUploader from "../components/ImageUploader";
import GalleryUploader from "../components/GalleryUploader";
import {
    saveSimpleProduct,
    updateSimpleProduct,
    getProduct,
} from "../../../services/productService";

export default function Step3SimpleProduct({
    productId,
    previousStep,
    nextStep,
    isEdit = false,
}) {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    /*
    |--------------------------------------------------------------------------
    | Form State
    |--------------------------------------------------------------------------
    */
    const [form, setForm] = useState({
        barcode: "",
        price: "",
        sale_price: "",
        cost_price: "",
        stock: "",
        low_stock_alert: "",
        tax_percentage: "",
        weight: "",
        length: "",
        width: "",
        height: "",
        status: true,
        thumbnail: null,
        gallery_images: [],
    });

    /*
    |--------------------------------------------------------------------------
    | Image Preview
    |--------------------------------------------------------------------------
    */
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [galleryPreview, setGalleryPreview] = useState([]);

    /*
    |--------------------------------------------------------------------------
    | Fetch Saved Product Details (Edit Mode)
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        if (productId) {
            const fetchSavedSimpleProduct = async () => {
                try {
                    const response = await getProduct(productId);
                    const productData = response.data?.data || response.data;

                    if (productData) {
                        const simpleVariant = productData.variants?.[0] || {};

                        setForm({
                            barcode: simpleVariant.barcode || productData.barcode || "",
                            price: simpleVariant.price || productData.price || "",
                            sale_price: simpleVariant.sale_price || productData.sale_price || "",
                            cost_price: simpleVariant.cost_price || productData.cost_price || "",
                            stock: simpleVariant.stock ?? productData.stock ?? "",
                            low_stock_alert: simpleVariant.low_stock_alert ?? productData.low_stock_alert ?? "",
                            tax_percentage: simpleVariant.tax_percentage ?? productData.tax_percentage ?? "",
                            weight: simpleVariant.weight || productData.weight || "",
                            length: simpleVariant.length || productData.length || "",
                            width: simpleVariant.width || productData.width || "",
                            height: simpleVariant.height || productData.height || "",
                            status: productData.status ?? true,
                            thumbnail: null,
                            gallery_images: [],
                        });

                        // 1. Extract Thumbnail (find marked thumbnail or fallback to first image/url)
                        const thumbnailItem =
                            productData.images?.find((img) => img.is_thumbnail) ||
                            productData.images?.[0];

                        const thumb =
                            typeof thumbnailItem === "string"
                                ? thumbnailItem
                                : thumbnailItem?.image ||
                                thumbnailItem?.url ||
                                productData.thumbnail_url ||
                                productData.thumbnail ||
                                simpleVariant.images?.[0]?.image;

                        if (thumb) {
                            setThumbnailPreview(thumb);
                        }

                        // 2. Extract Gallery Images (filter out thumbnail or map all valid image properties)
                        const rawGallery =
                            productData.images?.length > 0
                                ? productData.images
                                : productData.gallery_images || [];

                        const formattedGallery = rawGallery
                            .map((img) =>
                                typeof img === "string"
                                    ? img
                                    : img?.image || img?.url || img?.image_path
                            )
                            .filter(Boolean); // Remove any undefined values

                        setGalleryPreview(formattedGallery);
                    }
                } catch (error) {
                    console.error("Failed to load simple product details:", error);
                }
            };

            fetchSavedSimpleProduct();
        }
    }, [productId]);

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

            payload.append("product_id", productId);
            payload.append("barcode", form.barcode || "");
            payload.append("price", form.price || "");
            payload.append("sale_price", form.sale_price || "");
            payload.append("cost_price", form.cost_price || "");
            payload.append("stock", form.stock ?? "");
            payload.append("low_stock_alert", form.low_stock_alert ?? "");
            payload.append("tax_percentage", form.tax_percentage ?? "");
            payload.append("weight", form.weight || "");
            payload.append("length", form.length || "");
            payload.append("width", form.width || "");
            payload.append("height", form.height || "");
            payload.append("status", form.status ? 1 : 0);

            // Thumbnail Upload
            if (form.thumbnail && form.thumbnail instanceof File) {
                payload.append("thumbnail", form.thumbnail);
            }

            // Gallery Upload
            if (Array.isArray(form.gallery_images) && form.gallery_images.length > 0) {
                form.gallery_images.forEach((item) => {
                    const fileObj = item?.file || item;
                    if (fileObj instanceof File) {
                        payload.append("gallery_images[]", fileObj);
                    }
                });
            }

            let response;
            if (productId && isEdit) {
                response = await updateSimpleProduct(productId, payload);
            } else {
                response = await saveSimpleProduct(payload);
            }

            console.log(response.data);
            nextStep();
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
                return;
            }

            console.error(error);
            alert(error.response?.data?.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="space-y-6">
                <PricingInventoryCard
                    form={form}
                    setForm={setForm}
                    errors={errors}
                />

                <DimensionCard
                    form={form}
                    setForm={setForm}
                    errors={errors}
                />

                <ImageUploader
                    thumbnail={form.thumbnail}
                    preview={thumbnailPreview}
                    setPreview={setThumbnailPreview}
                    setForm={setForm}
                    errors={errors}
                />

                <GalleryUploader
                    images={galleryPreview}
                    setImages={setGalleryPreview}
                    setForm={setForm}
                    errors={errors}
                />
            </div>

            <div className="flex items-center justify-between mt-8">
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
                        disabled={loading}
                        label={
                            loading
                                ? "Saving..."
                                : isEdit || productId
                                    ? "Update & Continue"
                                    : "Save & Continue"
                        }
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </>
    );
}