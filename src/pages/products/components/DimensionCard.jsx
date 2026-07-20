import { InputFields } from "../../../components/ui/FormFields";

export default function DimensionCard({

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

                Shipping Dimensions

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                <InputFields

                    label="Weight (kg)"

                    name="weight"

                    type="number"

                    value={form.weight}

                    onChange={handleChange}

                    placeholder="Enter Weight"

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"
                    error={errors.weight?.[0]}
                    errorClass="text-red-500 text-sm mt-1 block"

                />

                <InputFields

                    label="Length (cm)"

                    name="length"

                    type="number"

                    value={form.length}

                    onChange={handleChange}

                    placeholder="Enter Length"

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"
                    error={errors.length?.[0]}
                    errorClass="text-red-500 text-sm mt-1 block"

                />

                <InputFields

                    label="Width (cm)"

                    name="width"

                    type="number"

                    value={form.width}

                    onChange={handleChange}

                    placeholder="Enter Width"

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"
                    error={errors.width?.[0]}
                    errorClass="text-red-500 text-sm mt-1 block"

                />

                <InputFields

                    label="Height (cm)"

                    name="height"

                    type="number"

                    value={form.height}

                    onChange={handleChange}

                    placeholder="Enter Height"

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"
                    error={errors.height?.[0]}
                    errorClass="text-red-500 text-sm mt-1 block"

                />

            </div>

        </div>

    );

}