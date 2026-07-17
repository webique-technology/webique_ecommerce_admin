import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button, {
    FormHeading,
    InputFields,
    TextareaFields,
    SelectField,
} from "../../../components/ui/FormFields";

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

    const [formData, setFormData] = useState({

        name: "",

        product_type: "",

        brand: "",

        sku: "",

        short_description: "",

        description: "",

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };
    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            console.log(formData);

            /*
                Later

                POST /product/store

                setProductId(response.data.id);

                setProductType(response.data.product_type);
            */

            setProductType(formData.product_type);

            nextStep();

        }

        finally {

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
                    />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

                    <InputFields
                        label="Brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="Enter Brand Name"
                        labelClass="block mb-2 font-medium"
                        inputClass="w-full border rounded-lg px-4 py-3"
                    />

                    <InputFields
                        label="SKU"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="Enter SKU"
                        labelClass="block mb-2 font-medium"
                        inputClass="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div className="mt-5">

                    <TextareaFields
                        label="Short Description"
                        name="short_description"
                        rows={3}
                        value={formData.short_description}
                        onChange={handleChange}
                        placeholder="Short Description"
                        labelClass="block mb-2 font-medium"
                        textareaClass="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div className="mt-5">

                    <TextareaFields
                        label="Description"
                        name="description"
                        rows={6}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Full Product Description"
                        labelClass="block mb-2 font-medium"
                        textareaClass="w-full border rounded-lg px-4 py-3"
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
