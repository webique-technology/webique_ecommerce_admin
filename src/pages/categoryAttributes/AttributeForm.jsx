import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    FormHeading,
    InputFields,
    SelectField,
    CheckboxField,
} from "../../components/ui/FormFields";
import {
    createAttribute,
    updateAttribute,
    getAttribute,
} from "../../services/attributeService";
import Button from "../../components/ui/FormFields";

export default function AttributeForm() {

    const navigate = useNavigate();

    const { subcategoryId, id } = useParams();

    const isEdit = Boolean(id);

    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({

        category_id: subcategoryId,

        attribute_name: "",

        attribute_type: "dropdown",

        attribute_values: [""],

        status: true,

        sort_order: 1,

    });

    // ---------------------------------------
    // Input Change
    // ---------------------------------------

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]:
                type === "checkbox"
                    ? checked
                    : value,

        }));

    };


    // ---------------------------------------
    // Add Value
    // ---------------------------------------

    const addValueField = () => {

        setFormData((prev) => ({

            ...prev,

            attribute_values: [
                ...prev.attribute_values,
                "",
            ],

        }));

    };

    // ---------------------------------------
    // Update Value
    // ---------------------------------------

    const updateValue = (index, value) => {

        const values = [...formData.attribute_values];

        values[index] = value;

        setFormData((prev) => ({

            ...prev,

            attribute_values: values,

        }));

    };

    // ---------------------------------------
    // Remove Value
    // ---------------------------------------

    const removeValueField = (index) => {

        if (formData.attribute_values.length === 1) return;

        const values = [...formData.attribute_values];

        values.splice(index, 1);

        setFormData((prev) => ({

            ...prev,

            attribute_values: values,

        }));

    };

    // ---------------------------------------

    useEffect(() => {

        if (!isEdit) return;

        const fetchAttribute = async () => {

            try {

                const response = await getAttribute(id);

                const attribute = response.data.data;

                setFormData({

                    category_id: attribute.category_id,

                    attribute_name: attribute.attribute_name,

                    attribute_type: attribute.attribute_type,

                    attribute_values:
                        attribute.attribute_values?.length
                            ? attribute.attribute_values
                            : [""],

                    status: attribute.status,

                    sort_order: attribute.sort_order,

                });

            } catch (error) {

                console.error(error);

                alert("Unable to load attribute.");

            }

        };

        fetchAttribute();

    }, [id, isEdit]);

    // ---------------------------------------

    const handleSubmit = async (e) => {

        e.preventDefault();

        setErrors({});

        const payload = {

            ...formData,

            attribute_values: formData.attribute_values
                .map(value => value.trim())
                .filter(value => value !== ""),

        };

        if (payload.attribute_values.length === 0) {

            setErrors({
                attribute_values: "Please add at least one value."
            });

            return;

        }

        try {

            setLoading(true);

            if (isEdit) {

                await updateAttribute(id, payload);

                // alert("Attribute updated successfully.");

            } else {

                await createAttribute(payload);

                // alert("Attribute created successfully.");

            }

            navigate(
                `/categories/${subcategoryId}/attributes`
            );

        } catch (error) {

            console.error(error);

            if (error.response?.status === 422) {

                setErrors(
                    error.response.data.errors || {}
                );

            } else {

                alert("Something went wrong.");

            }

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="p-6">

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow border p-6"
            >

                <FormHeading
                    icon="category"
                    title={
                        isEdit
                            ? "Edit Attribute"
                            : "Add Attribute"
                    }
                />

                <div className="grid grid-cols-2 gap-6">

                    {/* Attribute Name */}

                    <InputFields

                        label="Attribute Name *"

                        name="attribute_name"

                        value={formData.attribute_name}

                        onChange={handleChange}

                        placeholder="Brand"

                        className="col-span-1"

                        labelClass="block text-sm font-medium mb-2"

                        inputClass="w-full border rounded-lg px-4 py-2"

                        error={errors.attribute_name}

                    />

                    {/* Attribute Type */}

                    <SelectField

                        label="Attribute Type *"

                        name="attribute_type"

                        value={formData.attribute_type}

                        onChange={handleChange}

                        className="col-span-1"

                        labelClass="block text-sm font-medium mb-2"

                        selectClass="w-full border rounded-lg px-4 py-2"

                        options={[

                            {
                                label: "Dropdown",
                                value: "dropdown",
                            },
                            {
                                label: "Checkbox",
                                value: "checkbox",
                            },

                            {
                                label: "Color",
                                value: "color",
                            },

                            {
                                label: "Text",
                                value: "text",
                            },

                            {
                                label: "Number",
                                value: "number",
                            },

                            {
                                label: "Boolean",
                                value: "boolean",
                            },

                        ]}

                    />

                </div>
                {/* Attribute Values */}

                <div className="mt-8">

                    <label className="block text-sm font-medium mb-3">

                        Attribute Values *

                    </label>

                    <div className="space-y-3">

                        {formData.attribute_values.map((value, index) => (

                            <div
                                key={index}
                                className="flex items-center gap-3"
                            >

                                <input
                                    type="text"
                                    placeholder={`Value ${index + 1}`}
                                    value={value}
                                    onChange={(e) =>
                                        updateValue(index, e.target.value)
                                    }
                                    className="flex-1 border rounded-lg px-4 py-2"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        removeValueField(index)
                                    }
                                    disabled={
                                        formData.attribute_values.length === 1
                                    }
                                    className="w-10 h-10 rounded-lg border flex items-center justify-center text-red-500 hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    ✕
                                </button>

                            </div>

                        ))}

                    </div>
                    {
                        errors.attribute_values && (

                            <p className="text-red-500 text-sm mt-2">

                                {errors.attribute_values}

                            </p>

                        )
                    }

                    <button
                        type="button"
                        onClick={addValueField}
                        className="mt-4 px-4 py-2 border border-dashed rounded-lg text-primary hover:bg-slate-50"
                    >
                        + Add More
                    </button>

                </div>

                {/* Required */}

                <div className="mt-8">

                    <CheckboxField

                        label="Required"

                        name="status"

                        checked={formData.status}

                        onChange={handleChange}

                    />

                </div>

                {/* Sort Order */}

                <div className="mt-6 w-40">

                    <InputFields

                        label="Sort Order"

                        name="sort_order"

                        type="number"

                        value={formData.sort_order}

                        onChange={handleChange}

                        labelClass="block text-sm font-medium mb-2"

                        inputClass="w-full border rounded-lg px-4 py-2"

                    />

                </div>

                {/* Buttons */}

                <div className="flex justify-end gap-3 mt-10">

                    <Button

                        label="Cancel"

                        className="bg-slate-500 hover:bg-slate-600"

                        onClick={() => navigate(-1)}

                    />

                    <Button

                        type="submit"

                        label={
                            loading
                                ? "Saving..."
                                : isEdit
                                    ? "Update Attribute"
                                    : "Save Attribute"
                        }

                    />

                </div>

            </form>

        </div>

    );

}