import Button, { FormHeading } from "../../../components/ui/FormFields";

export default function VariantDetailsModal({

    show,

    variant,

    onClose,

}) {

    if (!show || !variant) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">

                {/* Header */}

                <div className="flex items-center justify-between border-b px-6 py-4">

                    <FormHeading

                        icon="inventory"

                        title="Variant Details"

                    />

                    <button

                        onClick={onClose}

                        className="text-2xl text-slate-500 hover:text-red-500"

                    >

                        ×

                    </button>

                </div>

                {/* Body */}

                <div className="p-6 space-y-6">

                    {/* Images */}

                    <div>

                        <h4 className="font-semibold mb-3">

                            Images

                        </h4>

                        {

                            variant.images?.length > 0 ? (

                                <div className="flex gap-3 flex-wrap">

                                    {

                                        variant.images.map((image, index) => (

                                            <img

                                                key={index}

                                                src={image}

                                                alt="Variant"

                                                className="w-24 h-24 rounded-lg border object-cover"

                                            />

                                        ))

                                    }

                                </div>

                            ) : (

                                <div className="text-slate-500">

                                    No Images

                                </div>

                            )

                        }

                    </div>

                    {/* Variant Attributes */}

                    <div>

                        <h4 className="font-semibold mb-3">

                            Variant Attributes

                        </h4>

                        <div className="grid grid-cols-2 gap-4">

                            {

                                Object.entries(

                                    variant.variant_data || {}

                                ).map(([key, value]) => (

                                    <div key={key}>

                                        <span className="font-medium text-slate-600">

                                            {key}

                                        </span>

                                        <div className="mt-1">

                                            {value}

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

                    </div>

                    {/* General Information */}

                    <div>

                        <h4 className="font-semibold mb-3">

                            General Information

                        </h4>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                            <InfoItem label="SKU" value={variant.sku} />

                            <InfoItem label="Barcode" value={variant.barcode} />

                            <InfoItem label="Price" value={`₹ ${variant.price}`} />

                            <InfoItem label="Sale Price" value={`₹ ${variant.sale_price}`} />

                            <InfoItem label="Cost Price" value={`₹ ${variant.cost_price}`} />

                            <InfoItem label="Tax %" value={variant.tax_percentage} />

                            <InfoItem label="Stock" value={variant.stock} />

                            <InfoItem label="Low Stock" value={variant.low_stock_alert} />

                            <InfoItem label="Weight" value={variant.weight} />

                            <InfoItem label="Length" value={variant.length} />

                            <InfoItem label="Width" value={variant.width} />

                            <InfoItem label="Height" value={variant.height} />

                        </div>

                    </div>

                    {/* Status */}

                    <div>

                        <h4 className="font-semibold mb-3">

                            Status

                        </h4>

                        <span

                            className={`px-3 py-1 rounded-full text-sm font-medium ${variant.status

                                    ? "bg-green-100 text-green-700"

                                    : "bg-red-100 text-red-700"

                                }`}

                        >

                            {

                                variant.status

                                    ? "Active"

                                    : "Inactive"

                            }

                        </span>

                    </div>

                </div>

                {/* Footer */}

                <div className="border-t px-6 py-4 flex justify-end">

                    <Button

                        type="button"

                        label="Close"

                        onClick={onClose}

                        className="bg-slate-600 hover:bg-slate-700"

                    />

                </div>

            </div>

        </div>

    );

}

/*
|--------------------------------------------------------------------------
| Small Info Component
|--------------------------------------------------------------------------
*/

function InfoItem({

    label,

    value,

}) {

    return (

        <div>

            <div className="text-xs text-slate-500">

                {label}

            </div>

            <div className="font-medium mt-1">

                {value || "-"}

            </div>

        </div>

    );

}