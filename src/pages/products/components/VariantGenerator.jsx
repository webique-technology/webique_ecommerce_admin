import { useState } from "react";

export default function VariantGenerator({

    attributes = [],

    variants,

    setVariants,

}) {

    /*
    |--------------------------------------------------------------------------
    | Selected Attribute Values
    |--------------------------------------------------------------------------
    */

    const [selectedValues, setSelectedValues] = useState({});

    /*
    |--------------------------------------------------------------------------
    | Select Value
    |--------------------------------------------------------------------------
    */

    const toggleValue = (attributeName, value) => {

        setSelectedValues(prev => {

            const existing = prev[attributeName] || [];

            const alreadySelected = existing.some(item => {

                if (typeof item === "object") {

                    return item.name === value.name;

                }

                return item === value;

            });

            return {

                ...prev,

                [attributeName]: alreadySelected
                    ? existing.filter(item => {

                        if (typeof item === "object") {

                            return item.name !== value.name;

                        }

                        return item !== value;

                    })
                    : [...existing, value]

            };

        });

    };

    /*
    |--------------------------------------------------------------------------
    | Cartesian Product
    |--------------------------------------------------------------------------
    */

    const cartesian = (arrays) => {

        return arrays.reduce(

            (acc, current) =>

                acc.flatMap(a =>

                    current.map(c => [

                        ...a,

                        c,

                    ])

                ),

            [[]]

        );

    };

    /*
    |--------------------------------------------------------------------------
    | Generate Variants
    |--------------------------------------------------------------------------
    */

    const generateVariants = () => {

        const keys = Object.keys(selectedValues);

        if (!keys.length) return;

        const values = keys.map(key => selectedValues[key]);

        const combinations = cartesian(values);

        const generated = combinations.map(combo => {

            const variantData = {};

            combo.forEach((item, index) => {

                const key = keys[index];

                variantData[key] =
                    typeof item === "object"
                        ? item.name
                        : item;

            });

            return {

                id: null,

                variant_data: variantData,

                sku: "",

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

                images: [],

            };

        });

        setVariants(generated);

    };

    return (

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-lg font-semibold">

                    Generate Variants

                </h2>

                <button

                    type="button"

                    onClick={generateVariants}

                    className="px-5 py-2 rounded-lg bg-primary text-white"

                >

                    Generate

                </button>

            </div>
            {
                attributes.length === 0 ? (

                    <div className="text-center py-10 text-slate-500">

                        No variant attributes available.

                    </div>

                ) : (

                    <div className="space-y-8">

                        {

                            attributes.map((attribute) => (

                                <div key={attribute.attribute_name}>

                                    <h3 className="font-semibold text-slate-800 mb-4">

                                        {attribute.attribute_name}

                                    </h3>

                                    <div className="flex flex-wrap gap-3">

                                        {

                                            attribute.values.map((value, index) => {

                                                const isObject =
                                                    typeof value === "object";

                                                const label = isObject
                                                    ? value.name
                                                    : value;

                                                const checked =
                                                    (
                                                        selectedValues[
                                                        attribute.attribute_name
                                                        ] || []
                                                    ).some((item) => {

                                                        if (
                                                            typeof item ===
                                                            "object"
                                                        ) {

                                                            return (
                                                                item.name ===
                                                                label
                                                            );

                                                        }

                                                        return item === label;

                                                    });

                                                /*
                                                |--------------------------------------------------------------------------
                                                | Color Attribute
                                                |--------------------------------------------------------------------------
                                                */

                                                if (
                                                    isObject &&
                                                    value.code
                                                ) {

                                                    return (

                                                        <button

                                                            key={index}

                                                            type="button"

                                                            onClick={() =>
                                                                toggleValue(
                                                                    attribute.attribute_name,
                                                                    value
                                                                )
                                                            }

                                                            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all
                                                                ${checked
                                                                    ? "border-primary bg-primary/10"
                                                                    : "border-slate-300"
                                                                }`}
                                                        >

                                                            <span

                                                                className="w-5 h-5 rounded-full border"

                                                                style={{
                                                                    background:
                                                                        value.code,
                                                                }}

                                                            />

                                                            <span>

                                                                {value.name}

                                                            </span>

                                                        </button>

                                                    );

                                                }

                                                /*
                                                |--------------------------------------------------------------------------
                                                | Normal Attribute
                                                |--------------------------------------------------------------------------
                                                */

                                                return (

                                                    <button

                                                        key={index}

                                                        type="button"

                                                        onClick={() =>
                                                            toggleValue(
                                                                attribute.attribute_name,
                                                                value
                                                            )
                                                        }

                                                        className={`px-5 py-2 rounded-full border transition-all
                                                            ${checked
                                                                ? "bg-primary text-white border-primary"
                                                                : "border-slate-300 hover:border-primary"
                                                            }`}
                                                    >

                                                        {label}

                                                    </button>

                                                );

                                            })

                                        }

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }
        </div>

    );

}