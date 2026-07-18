import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import Button from "../../../components/common/Button";
import Button, { FormHeading } from "../../../components/ui/FormFields";

import CategoryTreeSelector from "../../../components/common/CategoryTreeSelector";

import { getCategoryTree } from "../../../services/categoryService";

import {
    getAttributes,

    saveCategoryAttributes,

} from "../../../services/productService";

export default function Step2CategoryAttributes({

    productId,

    previousStep,

    nextStep,

}) {

    const navigate = useNavigate();

    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    const [loading, setLoading] = useState(false);

    const [treeLoading, setTreeLoading] = useState(true);
    const [errors, setErrors] = useState({});

    const [attributeLoading, setAttributeLoading] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Category Tree
    |--------------------------------------------------------------------------
    */

    const [categoryTree, setCategoryTree] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState(null);

    /*
    |--------------------------------------------------------------------------
    | Attributes
    |--------------------------------------------------------------------------
    */

    const [attributes, setAttributes] = useState([]);

    const [attributeData, setAttributeData] = useState({});

    /*
    |--------------------------------------------------------------------------
    | Load Category Tree
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        fetchCategoryTree();

    }, []);

    const fetchCategoryTree = async () => {

        try {

            setTreeLoading(true);

            const response = await getCategoryTree();

            setCategoryTree(response.data.data || []);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setTreeLoading(false);

        }

    };

    /*
    |--------------------------------------------------------------------------
    | Select Category
    |--------------------------------------------------------------------------
    */

    const handleCategorySelect = (category) => {

        setSelectedCategory(category);

        setAttributeData({});

        fetchAttributes(category.id);

    };

    /*
    |--------------------------------------------------------------------------
    | Load Attributes
    |--------------------------------------------------------------------------
    */

    const fetchAttributes = async (categoryId) => {

        try {

            setAttributeLoading(true);

            const response = await getAttributes(categoryId);

            setAttributes(
                response.data.data.data || []
            );

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setAttributeLoading(false);

        }

    };

    /*
    |--------------------------------------------------------------------------
    | Attribute Change
    |--------------------------------------------------------------------------
    */

    const handleAttributeChange = (

        attributeName,

        value

    ) => {

        setAttributeData((prev) => ({

            ...prev,

            [attributeName]: value,

        }));

    };

    /*
    |--------------------------------------------------------------------------
    | Save Step
    |--------------------------------------------------------------------------
    */

    const handleSubmit = async () => {

        setLoading(true);

        setErrors({});

        try {

            await saveCategoryAttributes({

                product_id: productId,

                category_id: selectedCategory.id,
                attribute_data: attributeData,

            });

            nextStep();

        }

        catch (error) {

            if (error.response?.status === 422) {

                setErrors(

                    error.response.data.errors

                );

                return;

            }

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    /*
    |--------------------------------------------------------------------------
    | JSX
    |--------------------------------------------------------------------------
    */

    return (

        <>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

                <FormHeading
                    icon="category"
                    title="Category & Product Attributes"
                />

                {/* Selected Category */}

                {selectedCategory && (

                    <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4">

                        <p className="text-sm text-slate-500">

                            Selected Category

                        </p>

                        <h3 className="mt-1 font-semibold text-green-700">

                            {selectedCategory.full_path}

                        </h3>

                    </div>

                )}
                <div className="flex gap-3 mb-6 w-full">
                    {/* Category Tree */}

                    <CategoryTreeSelector

                        tree={categoryTree}

                        selectedCategory={selectedCategory}

                        onSelect={handleCategorySelect}

                    />

                    {/* Attributes */}

                    <div className="mt-8 w-full">

                        <h3 className="text-lg font-semibold text-slate-800 mb-5">

                            Product Attributes

                        </h3>

                        {

                            attributeLoading && (

                                <div className="text-slate-500">

                                    Loading attributes...

                                </div>

                            )

                        }

                        {

                            !attributeLoading &&

                            selectedCategory &&

                            attributes.length === 0 && (

                                <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-500">

                                    No Attributes Found

                                </div>

                            )

                        }

                        {

                            !attributeLoading &&

                            attributes.length > 0 && (

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {

                                        attributes.map((attribute) => {

                                            switch (attribute.attribute_type) {

                                                /*
                                                |--------------------------------------------------------------------------
                                                | Dropdown
                                                |--------------------------------------------------------------------------
                                                */

                                                case "dropdown":

                                                    return (

                                                        <div key={attribute.id}>

                                                            <label className="block mb-2 font-medium">

                                                                {attribute.attribute_name}

                                                            </label>

                                                            <select

                                                                className="w-full border rounded-lg px-4 py-3"

                                                                value={
                                                                    attributeData[
                                                                    attribute.attribute_name
                                                                    ] || ""
                                                                }

                                                                onChange={(e) =>
                                                                    handleAttributeChange(
                                                                        attribute.attribute_name,
                                                                        e.target.value
                                                                    )
                                                                }

                                                            >

                                                                <option value="">

                                                                    Select

                                                                </option>

                                                                {

                                                                    attribute.attribute_values.map((item) => (

                                                                        <option

                                                                            key={item}

                                                                            value={item}

                                                                        >

                                                                            {item}

                                                                        </option>

                                                                    ))

                                                                }

                                                            </select>

                                                        </div>

                                                    );

                                                /*
                                                |--------------------------------------------------------------------------
                                                | Text
                                                |--------------------------------------------------------------------------
                                                */

                                                case "text":

                                                    return (

                                                        <div key={attribute.id}>

                                                            <label className="block mb-2 font-medium">

                                                                {attribute.attribute_name}

                                                            </label>

                                                            <input

                                                                type="text"

                                                                className="w-full border rounded-lg px-4 py-3"

                                                                value={
                                                                    attributeData[
                                                                    attribute.attribute_name
                                                                    ] || ""
                                                                }

                                                                onChange={(e) =>
                                                                    handleAttributeChange(
                                                                        attribute.attribute_name,
                                                                        e.target.value
                                                                    )
                                                                }

                                                            />

                                                        </div>

                                                    );

                                                /*
                                                |--------------------------------------------------------------------------
                                                | Number
                                                |--------------------------------------------------------------------------
                                                */

                                                case "number":

                                                    return (

                                                        <div key={attribute.id}>

                                                            <label className="block mb-2 font-medium">

                                                                {attribute.attribute_name}

                                                            </label>

                                                            <input

                                                                type="number"

                                                                className="w-full border rounded-lg px-4 py-3"

                                                                value={
                                                                    attributeData[
                                                                    attribute.attribute_name
                                                                    ] || ""
                                                                }

                                                                onChange={(e) =>
                                                                    handleAttributeChange(
                                                                        attribute.attribute_name,
                                                                        e.target.value
                                                                    )
                                                                }

                                                            />

                                                        </div>

                                                    );
                                                /*
    |--------------------------------------------------------------------------
    | Boolean
    |--------------------------------------------------------------------------
    */

                                                case "boolean":

                                                    return (

                                                        <div key={attribute.id}>

                                                            <label className="block mb-3 font-medium">

                                                                {attribute.attribute_name}

                                                            </label>

                                                            <select
                                                                className="w-full border rounded-lg px-4 py-3"
                                                                value={
                                                                    attributeData[
                                                                    attribute.attribute_name
                                                                    ] ?? ""
                                                                }
                                                                onChange={(e) =>
                                                                    handleAttributeChange(
                                                                        attribute.attribute_name,
                                                                        e.target.value
                                                                    )
                                                                }
                                                            >

                                                                <option value="">
                                                                    Select
                                                                </option>

                                                                <option value="1">
                                                                    Yes
                                                                </option>

                                                                <option value="0">
                                                                    No
                                                                </option>

                                                            </select>

                                                        </div>

                                                    );

                                                /*
                                                |--------------------------------------------------------------------------
                                                | Date
                                                |--------------------------------------------------------------------------
                                                */

                                                case "date":

                                                    return (

                                                        <div key={attribute.id}>

                                                            <label className="block mb-2 font-medium">

                                                                {attribute.attribute_name}

                                                            </label>

                                                            <input

                                                                type="date"

                                                                className="w-full border rounded-lg px-4 py-3"

                                                                value={
                                                                    attributeData[
                                                                    attribute.attribute_name
                                                                    ] || ""
                                                                }

                                                                onChange={(e) =>
                                                                    handleAttributeChange(
                                                                        attribute.attribute_name,
                                                                        e.target.value
                                                                    )
                                                                }

                                                            />

                                                        </div>

                                                    );

                                                /*
                                                |--------------------------------------------------------------------------
                                                | Color
                                                |--------------------------------------------------------------------------
                                                | Later this will become color chips.
                                                |--------------------------------------------------------------------------
                                                */

                                                case "color":

                                                    return (

                                                        <div key={attribute.id}>

                                                            <label className="block mb-2 font-medium">

                                                                {attribute.attribute_name}

                                                            </label>

                                                            <select

                                                                className="w-full border rounded-lg px-4 py-3"

                                                                value={
                                                                    attributeData[
                                                                    attribute.attribute_name
                                                                    ] || ""
                                                                }

                                                                onChange={(e) =>
                                                                    handleAttributeChange(
                                                                        attribute.attribute_name,
                                                                        e.target.value
                                                                    )
                                                                }

                                                            >

                                                                <option value="">

                                                                    Select Color

                                                                </option>

                                                                {

                                                                    attribute.attribute_values.map((item) => (

                                                                        <option
                                                                            key={item}
                                                                            value={item}
                                                                        >
                                                                            {item}
                                                                        </option>

                                                                    ))

                                                                }

                                                            </select>

                                                        </div>

                                                    );

                                                default:

                                                    return null;

                                            }

                                        })

                                    }

                                </div>

                            )

                        }

                    </div>
                </div>

            </div>

            {/* Footer */}

            <div className="flex justify-between mt-6">

                <Button

                    type="button"

                    label="Back"

                    className="bg-slate-500 hover:bg-slate-600"

                    onClick={previousStep}

                />

                <Button

                    type="button"

                    disabled={
                        loading ||
                        !selectedCategory
                    }

                    label={
                        loading
                            ? "Saving..."
                            : "Save & Continue"
                    }

                    onClick={handleSubmit}

                />

            </div>

        </>

    );

}