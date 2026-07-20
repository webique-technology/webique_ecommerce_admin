import {
    InputFields,
    SelectField,
} from "../../../components/ui/FormFields";

export default function PricingInventoryCard({

    form,
    setForm,
    errors = {},

}) {

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    return (

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

            <h2 className="text-lg font-semibold mb-6">

                Pricing & Inventory

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <InputFields

                    label="Price"

                    name="price"

                    type="number"

                    value={form.price}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"
                    error={errors.price?.[0]}
                    errorClass="text-red-500 text-sm mt-1 block"

                />

                <InputFields

                    label="Sale Price"

                    name="sale_price"

                    type="number"

                    value={form.sale_price}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"
                    error={errors.sale_price?.[0]}
                    errorClass="text-red-500 text-sm mt-1 block"

                />

                <InputFields

                    label="Cost Price"

                    name="cost_price"

                    type="number"

                    value={form.cost_price}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"
                    error={errors.cost_price?.[0]}
                    errorClass="text-red-500 text-sm mt-1 block"

                />

                <InputFields

                    label="Barcode"

                    name="barcode"

                    value={form.barcode}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"
                    error={errors.barcode?.[0]}
                    errorClass="text-red-500 text-sm mt-1 block"

                />

                <InputFields

                    label="Stock"

                    name="stock"

                    type="number"

                    value={form.stock}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"
                    error={errors.stock?.[0]}
                    errorClass="text-red-500 text-sm mt-1 block"

                />

                <InputFields

                    label="Low Stock Alert"

                    name="low_stock_alert"

                    type="number"

                    value={form.low_stock_alert}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"
                    error={errors.low_stock_alert?.[0]}
                    errorClass="text-red-500 text-sm mt-1 block"

                />

                <InputFields

                    label="Tax Percentage (%)"

                    name="tax_percentage"

                    type="number"

                    value={form.tax_percentage}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"
                    error={errors.tax_percentage?.[0]}
                    errorClass="text-red-500 text-sm mt-1 block"

                />

                <SelectField

                    label="Status"

                    name="status"

                    value={form.status}

                    onChange={handleChange}

                    options={[
                        {
                            label: "Active",
                            value: true,
                        },
                        {
                            label: "Inactive",
                            value: false,
                        },
                    ]}

                    labelClass="block mb-2 font-medium"

                    selectClass="w-full border rounded-lg px-4 py-3"

                />

            </div>

        </div>

    );

}