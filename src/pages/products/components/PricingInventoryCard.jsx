import {
    InputFields,
    SelectField,
} from "../../../components/ui/FormFields";

export default function PricingInventoryCard({

    form,

    setForm,

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

                />

                <InputFields

                    label="Sale Price"

                    name="sale_price"

                    type="number"

                    value={form.sale_price}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"

                />

                <InputFields

                    label="Cost Price"

                    name="cost_price"

                    type="number"

                    value={form.cost_price}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"

                />

                <InputFields

                    label="Barcode"

                    name="barcode"

                    value={form.barcode}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"

                />

                <InputFields

                    label="Stock"

                    name="stock"

                    type="number"

                    value={form.stock}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"

                />

                <InputFields

                    label="Low Stock Alert"

                    name="low_stock_alert"

                    type="number"

                    value={form.low_stock_alert}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"

                />

                <InputFields

                    label="Tax Percentage (%)"

                    name="tax_percentage"

                    type="number"

                    value={form.tax_percentage}

                    onChange={handleChange}

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"

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