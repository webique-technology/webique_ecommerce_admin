import ColorSwatchSelector from "./ColorSwatchSelector";

export default function ProductAttributesRenderer({

    attributes,

    attributeData,

    handleAttributeChange,

    selectedVariantValues,

    handleVariantSelectionChange,

    setShowColorModal,

    setActiveColorAttribute,

    handleRemoveColor,

}) {

    const inputClass =
        "w-full border rounded-lg px-4 py-3";

    return (

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

                                        className={inputClass}

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
                        | Checkbox (Variant)
                        |--------------------------------------------------------------------------
                        */

                        case "checkbox":

                            return (

                                <div key={attribute.id}>

                                    <label className="block mb-3 font-medium">

                                        {attribute.attribute_name}

                                    </label>

                                    <div className="space-y-2">

                                        {

                                            attribute.attribute_values.map((item) => (

                                                <label
                                                    key={item}
                                                    className="flex items-center gap-3 cursor-pointer"
                                                >

                                                    <input

                                                        type="checkbox"

                                                        className="w-4 h-4"

                                                        checked={
                                                            selectedVariantValues[
                                                                attribute.attribute_name
                                                            ]?.includes(item) || false
                                                        }

                                                        onChange={(e) =>

                                                            handleVariantSelectionChange(

                                                                attribute.attribute_name,

                                                                item,

                                                                e.target.checked

                                                            )

                                                        }

                                                    />

                                                    <span>

                                                        {item}

                                                    </span>

                                                </label>

                                            ))

                                        }

                                    </div>

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

                                        className={inputClass}

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

                                        className={inputClass}

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

                                        className={inputClass}

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

                                        className={inputClass}

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
                        */

                        case "color":

                            return (

                                <div key={attribute.id}>

                                    <ColorSwatchSelector

                                        label={attribute.attribute_name}

                                        colors={
                                            attributeData[
                                            attribute.attribute_name
                                            ] || []
                                        }

                                        selectedColors={
                                            selectedVariantValues[
                                            attribute.attribute_name
                                            ] || []
                                        }

                                        onSelectionChange={(
                                            color,
                                            checked
                                        ) =>

                                            handleVariantSelectionChange(

                                                attribute.attribute_name,

                                                color,

                                                checked

                                            )

                                        }

                                        onAddColor={() => {

                                            setActiveColorAttribute(

                                                attribute.attribute_name

                                            );

                                            setShowColorModal(true);

                                        }}

                                        onRemoveColor={(index) =>

                                            handleRemoveColor(

                                                attribute.attribute_name,

                                                index

                                            )

                                        }

                                    />

                                </div>

                            );

                        default:

                            return null;

                    }

                })

            }

        </div>

    );

}