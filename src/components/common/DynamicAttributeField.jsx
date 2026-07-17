import {
    InputFields,
    SelectField,
    CheckboxField,
} from "../ui/FormFields";
import ColorPickerField from "./ColorPickerField";

export default function DynamicAttributeField({
    attribute,
    value,
    onChange,
}) {

    const {
        attribute_name,
        attribute_type,
        attribute_values = [],
    } = attribute;

    /*
    |--------------------------------------------------------------------------
    | Dropdown
    |--------------------------------------------------------------------------
    */

    if (attribute_type === "dropdown") {

        return (

            <SelectField
                label={attribute_name}
                value={value || ""}
                onChange={(e) =>
                    onChange(
                        attribute_name,
                        e.target.value
                    )
                }
                options={attribute_values.map((item) => ({
                    label: item,
                    value: item,
                }))}
                placeholder={`Select ${attribute_name}`}
                labelClass="block mb-2 font-medium"
                selectClass="w-full border rounded-lg px-4 py-3"
            />

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Text
    |--------------------------------------------------------------------------
    */

    if (attribute_type === "text") {

        return (

            <InputFields
                label={attribute_name}
                type="text"
                value={value || ""}
                onChange={(e) =>
                    onChange(
                        attribute_name,
                        e.target.value
                    )
                }
                placeholder={`Enter ${attribute_name}`}
                labelClass="block mb-2 font-medium"
                inputClass="w-full border rounded-lg px-4 py-3"
            />

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Number
    |--------------------------------------------------------------------------
    */

    if (attribute_type === "number") {

        return (

            <InputFields
                label={attribute_name}
                type="number"
                value={value || ""}
                onChange={(e) =>
                    onChange(
                        attribute_name,
                        e.target.value
                    )
                }
                placeholder={`Enter ${attribute_name}`}
                labelClass="block mb-2 font-medium"
                inputClass="w-full border rounded-lg px-4 py-3"
            />

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Date
    |--------------------------------------------------------------------------
    */

    if (attribute_type === "date") {

        return (

            <InputFields
                label={attribute_name}
                type="date"
                value={value || ""}
                onChange={(e) =>
                    onChange(
                        attribute_name,
                        e.target.value
                    )
                }
                labelClass="block mb-2 font-medium"
                inputClass="w-full border rounded-lg px-4 py-3"
            />

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Boolean
    |--------------------------------------------------------------------------
    */

    if (attribute_type === "boolean") {

        return (

            <CheckboxField
                label={attribute_name}
                checked={value || false}
                onChange={(e) =>
                    onChange(
                        attribute_name,
                        e.target.checked
                    )
                }
            />

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Color
    |--------------------------------------------------------------------------
    */

    if (attribute_type === "color") {

        return (

            <ColorPickerField
                label={attribute_name}
                colors={attribute_values}
                value={value}
                onChange={(values) =>
                    onChange(attribute_name, values)
                }
            />

        );

    }

    return null;

}