import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/ui/FormFields";

import VariantGenerator from "../components/VariantGenerator";
import VariantAccordion from "../components/VariantAccordion";

export default function Step3VariableProduct({

    productId,

    previousStep,

    nextStep,

    isEdit = false,

}) {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Temporary Attributes
    |--------------------------------------------------------------------------
    | Later these will come from Step 2
    |--------------------------------------------------------------------------
    */

    const [attributes] = useState([

        {

            attribute_name: "Color",

            values: [

                {

                    name: "Red",

                    code: "#EF4444",

                },

                {

                    name: "Black",

                    code: "#111827",

                },

                {

                    name: "Blue",

                    code: "#2563EB",

                },

            ],

        },

        {

            attribute_name: "Size",

            values: [

                "S",

                "M",

                "L",

                "XL",

            ],

        },

    ]);

    /*
    |--------------------------------------------------------------------------
    | Generated Variants
    |--------------------------------------------------------------------------
    */

    const [variants, setVariants] = useState([]);

    /*
    |--------------------------------------------------------------------------
    | Update Variant
    |--------------------------------------------------------------------------
    */

    const updateVariant = (

        index,

        updatedVariant

    ) => {

        setVariants(prev =>

            prev.map((item, i) =>

                i === index

                    ? updatedVariant

                    : item

            )

        );

    };

    /*
    |--------------------------------------------------------------------------
    | Remove Variant
    |--------------------------------------------------------------------------
    */

    const removeVariant = (index) => {

        setVariants(prev =>

            prev.filter(

                (_, i) => i !== index

            )

        );

    };
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
            | API Structure
            |--------------------------------------------------------------------------
            |
            | POST /product/save-variable-product
            |
            */

            const payload = new FormData();

            payload.append(
                "product_id",
                productId
            );

            /*
            |--------------------------------------------------------------------------
            | Variants
            |--------------------------------------------------------------------------
            */

            const variantPayload = variants.map((variant) => ({

                variant_data: variant.variant_data,

                sku: variant.sku,

                barcode: variant.barcode,

                price: variant.price,

                sale_price: variant.sale_price,

                cost_price: variant.cost_price,

                stock: variant.stock,

                low_stock_alert:
                    variant.low_stock_alert,

                tax_percentage:
                    variant.tax_percentage,

                weight: variant.weight,

                length: variant.length,

                width: variant.width,

                height: variant.height,

                status: variant.status,

            }));

            payload.append(

                "variants",

                JSON.stringify(variantPayload)

            );

            /*
            |--------------------------------------------------------------------------
            | Images
            |--------------------------------------------------------------------------
            */

            variants.forEach((variant, variantIndex) => {

                variant.images.forEach((image) => {

                    if (!image.existing) {

                        payload.append(

                            `variant_images[${variantIndex}][]`,

                            image.file

                        );

                    }

                });

            });

            /*
            |--------------------------------------------------------------------------
            | Later
            |--------------------------------------------------------------------------
            |
            | await saveVariableProduct(payload)
            |
            */

            console.log(variants);

            nextStep();

        }

        finally {

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

                                : "Save & Continue"

                        }

                    />

                </div>

            </div>

        </div>

    );

}