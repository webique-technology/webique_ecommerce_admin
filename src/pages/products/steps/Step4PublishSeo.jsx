import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button, {

    CheckboxField,
    FormHeading,
    InputFields,
    TextareaFields,

} from "../../../components/ui/FormFields";

// import CommonCard from "../../../components/common/CommonCard";

export default function Step4PublishSeo({

    productId,

    previousStep,

    isEdit = false,

}) {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        status: true,

        featured: false,

        meta_title: "",

        meta_description: "",

        meta_keywords: "",

        canonical_url: "",

    });

    const handleCheckbox = (e) => {

        const { name, checked } = e.target;

        setFormData(prev => ({

            ...prev,

            [name]: checked,

        }));

    };

    const handleInput = (e) => {

        const { name, value } = e.target;

        setFormData(prev => ({

            ...prev,

            [name]: value,

        }));

    };

    const handleSubmit = async () => {

        try {

            setLoading(true);

            /*
            Later

            POST /product/publish

            */

            console.log(formData);

            navigate("/products");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="space-y-6">

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

                <FormHeading

                    icon="publish"

                    title="Publish Settings"

                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <CheckboxField

                        label="Active"

                        name="status"

                        checked={formData.status}

                        onChange={handleCheckbox}

                    />

                    <CheckboxField

                        label="Featured Product"

                        name="featured"

                        checked={formData.featured}

                        onChange={handleCheckbox}

                    />

                </div>

            </div>
            {/* ===========================================
                SEO Settings
            =========================================== */}

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

                <FormHeading
                    icon="travel_explore"
                    title="SEO Settings"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <InputFields
                        label="Meta Title"
                        name="meta_title"
                        value={formData.meta_title}
                        onChange={handleInput}
                        placeholder="Meta Title"
                        labelClass="block mb-2 font-medium"
                        inputClass="w-full border rounded-lg px-4 py-3"
                    />

                    <InputFields
                        label="Canonical URL"
                        name="canonical_url"
                        value={formData.canonical_url}
                        onChange={handleInput}
                        placeholder="https://example.com/product"
                        labelClass="block mb-2 font-medium"
                        inputClass="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div className="mt-5">

                    <TextareaFields
                        label="Meta Description"
                        name="meta_description"
                        rows={4}
                        value={formData.meta_description}
                        onChange={handleInput}
                        placeholder="Enter Meta Description"
                        labelClass="block mb-2 font-medium"
                        textareaClass="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div className="mt-5">

                    <InputFields
                        label="Meta Keywords"
                        name="meta_keywords"
                        value={formData.meta_keywords}
                        onChange={handleInput}
                        placeholder="shirt, cotton, men's tshirt"
                        labelClass="block mb-2 font-medium"
                        inputClass="w-full border rounded-lg px-4 py-3"
                    />

                    <p className="text-xs text-slate-500 mt-2">

                        Separate keywords using commas.

                    </p>

                </div>

            </div>
            {/* ===========================================
                Footer
            =========================================== */}

            <div className="flex justify-between">

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

                                ? "Publishing..."

                                : isEdit

                                    ? "Update Product"

                                    : "Publish Product"

                        }

                    />

                </div>

            </div>

        </div>

    );

}