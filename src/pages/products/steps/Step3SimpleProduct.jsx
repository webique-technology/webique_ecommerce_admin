import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/ui/FormFields";

import PricingInventoryCard from "../components/PricingInventoryCard";
import DimensionCard from "../components/DimensionCard";
import ImageUploader from "../components/ImageUploader";
import GalleryUploader from "../components/GalleryUploader";

export default function Step3SimpleProduct({

    productId,

    previousStep,

    nextStep,

    isEdit = false,

}) {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

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
    | Submit
    |--------------------------------------------------------------------------
    */

    const handleSubmit = async () => {

        try {

            setLoading(true);

            /*
            |--------------------------------------------------------------------------
            | API
            |--------------------------------------------------------------------------
            |
            | POST /product/save-simple-product
            |
            | product_id
            | barcode
            | price
            | sale_price
            | cost_price
            | stock
            | low_stock_alert
            | tax_percentage
            | weight
            | length
            | width
            | height
            | status
            | thumbnail
            | gallery_images[]
            |
            */

            const payload = new FormData();

            payload.append("product_id", productId);

            payload.append("barcode", form.barcode);

            payload.append("price", form.price);

            payload.append("sale_price", form.sale_price);

            payload.append("cost_price", form.cost_price);

            payload.append("stock", form.stock);

            payload.append("low_stock_alert", form.low_stock_alert);

            payload.append("tax_percentage", form.tax_percentage);

            payload.append("weight", form.weight);

            payload.append("length", form.length);

            payload.append("width", form.width);

            payload.append("height", form.height);

            payload.append("status", form.status ? 1 : 0);

            if (form.thumbnail) {

                payload.append(
                    "thumbnail",
                    form.thumbnail
                );

            }

            form.gallery_images.forEach(image => {

                payload.append(
                    "gallery_images[]",
                    image
                );

            });

            /*
            |--------------------------------------------------------------------------
            | Later
            |--------------------------------------------------------------------------
            |
            
            await saveSimpleProduct(payload);
            
            */

            for (const pair of payload.entries()) {

                console.log(pair[0], pair[1]);

            }

            nextStep();

            nextStep();

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>
            <div className="space-y-6">

                {/* Pricing & Inventory */}

                <PricingInventoryCard

                    form={form}

                    setForm={setForm}

                />

                {/* Shipping Dimensions */}

                <DimensionCard

                    form={form}

                    setForm={setForm}

                />

                {/* Thumbnail */}

                <ImageUploader

                    thumbnail={form.thumbnail}

                    preview={thumbnailPreview}

                    setPreview={setThumbnailPreview}

                    setForm={setForm}

                />

                {/* Gallery */}

                <GalleryUploader

                    images={galleryPreview}

                    setImages={setGalleryPreview}

                    setForm={setForm}

                />

            </div>

            {/* Footer */}

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
                                : "Save & Continue"
                        }

                        onClick={handleSubmit}

                    />

                </div>

            </div>
        </>

    );

}