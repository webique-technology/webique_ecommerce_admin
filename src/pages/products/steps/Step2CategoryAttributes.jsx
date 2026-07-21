// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// // import Button from "../../../components/common/Button";
// import Button, { FormHeading } from "../../../components/ui/FormFields";

// import CategoryTreeSelector from "../../../components/common/CategoryTreeSelector";

// import { getCategoryTree } from "../../../services/categoryService";
// import ProductAttributesRenderer from "../components/ProductAttributesRenderer";
// import AddColorModal from "../components/AddColorModal";

// import {
//     getAttributes,
//     getProduct,
//     saveCategoryAttributes,
//     updateCategoryAttributes,

// } from "../../../services/productService";

// export default function Step2CategoryAttributes({

//     productId,

//     previousStep,

//     nextStep,
//     setVariantAttributes,

// }) {

//     const navigate = useNavigate();

//     /*
//     |--------------------------------------------------------------------------
//     | Loading
//     |--------------------------------------------------------------------------
//     */

//     const [loading, setLoading] = useState(false);

//     const [treeLoading, setTreeLoading] = useState(true);
//     const [errors, setErrors] = useState({});

//     const [attributeLoading, setAttributeLoading] = useState(false);

//     /*
//     |--------------------------------------------------------------------------
//     | Category Tree
//     |--------------------------------------------------------------------------
//     */

//     const [categoryTree, setCategoryTree] = useState([]);

//     const [selectedCategory, setSelectedCategory] = useState(null);

//     /*
//     |--------------------------------------------------------------------------
//     | Attributes
//     |--------------------------------------------------------------------------
//     */

//     const [attributes, setAttributes] = useState([]);

//     const [attributeData, setAttributeData] = useState({});
//     const [showColorModal, setShowColorModal] = useState(false);
//     const [activeColorAttribute, setActiveColorAttribute] = useState(null);

//     // const [variantAttributes, setVariantAttributes] = useState({});
//     // Local checkbox selections
//     const [selectedVariantValues, setSelectedVariantValues] = useState({});

//     /*
//     |--------------------------------------------------------------------------
//     | Load Category Tree
//     |--------------------------------------------------------------------------
//     */

//     // useEffect(() => {

//     //     fetchCategoryTree();

//     // }, []);

//     useEffect(() => {
//         const initData = async () => {
//             await fetchCategoryTree();
//             if (productId) {
//                 await fetchSavedProductCategoryData();
//             }
//         };

//         initData();
//     }, [productId]);

//     const fetchCategoryTree = async () => {
//         try {
//             setTreeLoading(true);
//             const response = await getCategoryTree();
//             setCategoryTree(response.data.data || []);
//         }
//         catch (error) {
//             console.error(error);
//         }
//         finally {
//             setTreeLoading(false);
//         }

//     };

//     const fetchSavedProductCategoryData = async () => {
//         try {
//             const response = await getProduct(productId);
//             const product = response.data?.data || response.data;

//             if (product?.category || product?.category_id) {
//                 const category = product.category || {
//                     id: product.category_id,
//                     full_path: product.category_name || "Selected Category",
//                 };

//                 setSelectedCategory(category);

//                 // Fetch Category Attributes
//                 if (category.id) {
//                     await fetchAttributes(category.id);
//                 }

//                 // Populate Attribute Data
//                 if (product.attribute_data) {
//                     setAttributeData(product.attribute_data);
//                 }

//                 // Populate Variant Values if existing
//                 if (product.selected_variant_values) {
//                     setSelectedVariantValues(product.selected_variant_values);
//                 }
//             }
//         } catch (error) {
//             console.error("Failed to fetch product category details:", error);
//         }
//     };

//     /*
//     |--------------------------------------------------------------------------
//     | Select Category
//     |--------------------------------------------------------------------------
//     */

//     const handleCategorySelect = (category) => {

//         setSelectedCategory(category);
//         setAttributeData({});
//         setSelectedVariantValues({});
//         fetchAttributes(category.id);

//     };

//     /*
//     |--------------------------------------------------------------------------
//     | Load Attributes
//     |--------------------------------------------------------------------------
//     */

//     const fetchAttributes = async (categoryId) => {
//         try {
//             setAttributeLoading(true);
//             const response = await getAttributes(categoryId);
//             // setAttributes(response.data.data.data || [] );
//             setAttributes(response.data.data.data || response.data.data || []);
//         }
//         catch (error) {
//             console.error(error);
//         }
//         finally {
//             setAttributeLoading(false);
//         }
//     };

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button, { FormHeading } from "../../../components/ui/FormFields";

import CategoryTreeSelector from "../../../components/common/CategoryTreeSelector";

import ProductAttributesRenderer from "../components/ProductAttributesRenderer";
import AddColorModal from "../components/AddColorModal";

import { getCategoryTree } from "../../../services/categoryService";

import {
    getAttributes,
    getProduct,
    saveCategoryAttributes,
    updateCategoryAttributes,
} from "../../../services/productService";

export default function Step2CategoryAttributes({

    productId,
    previousStep,
    nextStep,
    setVariantAttributes,

}) {

    const navigate = useNavigate();

    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    const [loading, setLoading] = useState(false);
    const [treeLoading, setTreeLoading] = useState(true);
    const [attributeLoading, setAttributeLoading] = useState(false);

    const [errors, setErrors] = useState({});

    /*
    |--------------------------------------------------------------------------
    | Category
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

    const [selectedVariantValues, setSelectedVariantValues] = useState({});

    /*
    |--------------------------------------------------------------------------
    | Color Modal
    |--------------------------------------------------------------------------
    */

    const [showColorModal, setShowColorModal] = useState(false);
    const [activeColorAttribute, setActiveColorAttribute] = useState(null);

    /*
    |--------------------------------------------------------------------------
    | Initial Load
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        const init = async () => {

            await fetchCategoryTree();

            if (productId) {

                await fetchSavedProductCategoryData();

            }

        };

        init();

    }, [productId]);

    /*
    |--------------------------------------------------------------------------
    | Category Tree
    |--------------------------------------------------------------------------
    */

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
    | Edit Product
    |--------------------------------------------------------------------------
    */

    const fetchSavedProductCategoryData = async () => {

        try {

            const response = await getProduct(productId);

            const product = response.data?.data || response.data;

            if (!product) return;

            const category = product.category || {

                id: product.category_id,

                full_path:

                    product.category_name ||

                    "Selected Category",

            };

            setSelectedCategory(category);

            if (category.id) {

                await fetchAttributes(category.id);

            }

            if (product.attribute_data) {

                setAttributeData(product.attribute_data);

                const variantSelections = {};

                Object.entries(product.attribute_data).forEach(

                    ([key, value]) => {

                        if (Array.isArray(value)) {

                            variantSelections[key] = value;

                        }

                    }

                );

                setSelectedVariantValues(

                    variantSelections

                );

            }

            if (product.selected_variant_values) {

                setSelectedVariantValues(

                    product.selected_variant_values

                );

            }

        }

        catch (error) {

            console.error(error);

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

        setSelectedVariantValues({});

        fetchAttributes(category.id);

    };

    /*
    |--------------------------------------------------------------------------
    | Load Category Attributes
    |--------------------------------------------------------------------------
    */

    const fetchAttributes = async (categoryId) => {

        try {

            setAttributeLoading(true);

            const response = await getAttributes(categoryId);

            const loadedAttributes =

                response.data.data.data ||

                response.data.data ||

                [];

            setAttributes(loadedAttributes);

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

    const handleAttributeChange = (attributeName, value) => {

        setAttributeData((prev) => ({

            ...prev,

            [attributeName]: value,

        }));

    };

    /*
    |--------------------------------------------------------------------------
    | Add Custom Color
    |--------------------------------------------------------------------------
    */

    const handleAddColor = (color) => {

        if (!activeColorAttribute) return;

        setAttributeData((prev) => {

            const existing =

                prev[activeColorAttribute] || [];

            // Prevent duplicate color names
            const alreadyExists = existing.some(

                (item) =>

                    item.name.toLowerCase() ===

                    color.name.toLowerCase()

            );

            if (alreadyExists) {

                return prev;

            }

            return {

                ...prev,

                [activeColorAttribute]: [

                    ...existing,

                    color,

                ],

            };

        });

        setShowColorModal(false);

        setActiveColorAttribute(null);

    };

    /*
    |--------------------------------------------------------------------------
    | Remove Custom Color
    |--------------------------------------------------------------------------
    */

    const handleRemoveColor = (

        attributeName,

        index

    ) => {

        setAttributeData((prev) => ({

            ...prev,

            [attributeName]:

                (prev[attributeName] || []).filter(

                    (_, i) => i !== index

                ),

        }));

    };

    /*
    |--------------------------------------------------------------------------
    | Variant Attribute Selection
    |--------------------------------------------------------------------------
    */

    const handleVariantSelectionChange = (

        attributeName,

        value,

        checked

    ) => {

        setSelectedVariantValues((prev) => {

            const selected =

                prev[attributeName] || [];

            const updated = checked

                ? [...selected, value]

                : selected.filter(

                    (item) => item !== value

                );

            return {

                ...prev,

                [attributeName]: updated,

            };

        });

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

            if (!selectedCategory) {

                setErrors({

                    category: [

                        "Please select a category.",

                    ],

                });

                return;

            }

            const finalAttributeData = {

                ...attributeData,

            };

            attributes.forEach((attribute) => {

                if (

                    attribute.attribute_type === "checkbox"

                ) {

                    finalAttributeData[attribute.attribute_name] =

                        selectedVariantValues[attribute.attribute_name] || [];

                }

            });

            const payload = {

                product_id: productId,

                category_id: selectedCategory.id,

                attribute_data: finalAttributeData,

            };

            if (productId) {

                await updateCategoryAttributes(

                    productId,

                    payload

                );

            }

            else {

                await saveCategoryAttributes(

                    payload

                );

            }

            /*
            |--------------------------------------------------------------------------
            | Prepare Variant Attributes
            |--------------------------------------------------------------------------
            */

            const variantList = attributes

                .filter(

                    (attribute) =>

                        attribute.attribute_type === "checkbox" ||

                        attribute.attribute_type === "color"

                )

                .map((attribute) => ({

                    attribute_name:

                        attribute.attribute_name,

                    values:

                        attribute.attribute_type === "color"

                            ? (

                                attributeData[
                                attribute.attribute_name
                                ] || []

                            )

                            : (

                                selectedVariantValues[
                                attribute.attribute_name
                                ] || []

                            ),

                }))

                .filter(

                    (attribute) =>

                        attribute.values.length > 0

                );

            /*
            |--------------------------------------------------------------------------
            | Pass To Step 3
            |--------------------------------------------------------------------------
            */

            setVariantAttributes(

                variantList

            );

            nextStep();

        }

        catch (error) {

            if (

                error.response?.status === 422

            ) {

                setErrors(

                    error.response.data.errors

                );

                return;

            }

            console.error(

                "Save category step failed:",

                error

            );

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

                                <ProductAttributesRenderer

                                    attributes={attributes}

                                    attributeData={attributeData}

                                    selectedVariantValues={selectedVariantValues}

                                    handleAttributeChange={handleAttributeChange}

                                    handleVariantSelectionChange={handleVariantSelectionChange}

                                    setShowColorModal={setShowColorModal}

                                    setActiveColorAttribute={setActiveColorAttribute}

                                    handleRemoveColor={handleRemoveColor}

                                />

                            )

                        }

                        <AddColorModal

                            show={showColorModal}

                            onClose={() => {

                                setShowColorModal(false);

                                setActiveColorAttribute(null);

                            }}

                            onSave={handleAddColor}

                        />

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