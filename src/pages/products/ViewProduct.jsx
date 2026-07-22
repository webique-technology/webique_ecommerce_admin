import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button, { FormHeading } from "../../components/ui/FormFields";
import { getProduct } from "../../services/productService";
import VariantDetailsModal from "../products/components/VariantDetailsModal";

export default function ViewProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showVariantModal, setShowVariantModal] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const response = await getProduct(id);
            const data = response.data.data;

            setProduct(data);

            if (data.images?.length > 0) {
                setSelectedImage(data.images[0]);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="p-6">Loading...</div>;
    }

    if (!product) {
        return <div className="p-6">Product not found.</div>;
    }

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Product Details</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        View complete product information
                    </p>
                </div>

                <div className="flex gap-3">
                    <Button
                        type="button"
                        label="Back"
                        className="bg-slate-500 hover:bg-slate-600"
                        onClick={() => navigate("/products")}
                    />

                    <Button
                        type="button"
                        label="Edit Product"
                        onClick={() => navigate(`/products/edit/${product.id}`)}
                    />
                </div>
            </div>

            {/* Product Images */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <FormHeading icon="image" title="Product Images" />

                <div className="mt-5">
                    {product.images && product.images.length > 0 ? (
                        <div className="flex flex-col items-center">
                            {/* Main Image */}
                            <div className="w-72 h-72 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                                <img
                                    src={selectedImage}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Images */}
                            {product.images.length > 1 && (
                                <div className="flex flex-wrap justify-center gap-3 mt-4">
                                    {product.images.map((image, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedImage(image)}
                                            className={`
                                                w-20
                                                h-20
                                                rounded-lg
                                                overflow-hidden
                                                border-2
                                                cursor-pointer
                                                transition
                                                ${selectedImage === image
                                                    ? "border-primary"
                                                    : "border-slate-300"
                                                }
                                            `}
                                        >
                                            <img
                                                src={image}
                                                alt={`Product ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="h-60 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                            No Images Available
                        </div>
                    )}
                </div>
            </div>

            {/* Basic Information */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <FormHeading icon="category" title="Basic Information" />

                <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-5 text-sm">
                    <InfoRow label="Product Name" value={product.name} />
                    <InfoRow label="Slug" value={product.slug} />
                    <InfoRow label="Category" value={product.category?.full_path} />
                    <InfoRow label="Brand" value={product.brand} />
                    <InfoRow label="Product Type" value={product.product_type} />
                    <InfoRow label="SKU" value={product.sku} />

                    <div className="flex">
                        <div className="w-36 font-medium text-slate-600">Status</div>
                        <div>
                            <span
                                className={`
                                    px-3
                                    py-1
                                    rounded-full
                                    text-xs
                                    font-medium
                                    ${product.status
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                    }
                                `}
                            >
                                {product.status ? "Active" : "Inactive"}
                            </span>
                        </div>
                    </div>

                    <InfoRow
                        label="Featured"
                        value={product.featured ? "Yes" : "No"}
                    />
                    <InfoRow
                        label="Best Seller"
                        value={product.best_seller ? "Yes" : "No"}
                    />
                    <InfoRow label="Created At" value={product.created_at} />
                </div>
            </div>

            {/* Pricing & Inventory */}
            {product.product_type === "simple" && (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                    <FormHeading icon="category" title="Pricing & Inventory" />

                    <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-5 text-sm">
                        <InfoRow
                            label="Price"
                            value={product.price ? `₹ ${product.price}` : "-"}
                        />
                        <InfoRow
                            label="Sale Price"
                            value={product.sale_price ? `₹ ${product.sale_price}` : "-"}
                        />
                        <InfoRow
                            label="Cost Price"
                            value={product.cost_price ? `₹ ${product.cost_price}` : "-"}
                        />
                        <InfoRow
                            label="Tax"
                            value={
                                product.tax_percentage
                                    ? `${product.tax_percentage}%`
                                    : "-"
                            }
                        />
                        <InfoRow label="Stock" value={product.stock} />
                        <InfoRow label="Low Stock Alert" value={product.low_stock_alert} />
                        <InfoRow label="Barcode" value={product.barcode} />
                        <InfoRow label="Weight" value={product.weight} />
                        <InfoRow label="Length" value={product.length} />
                        <InfoRow label="Width" value={product.width} />
                        <InfoRow label="Height" value={product.height} />
                    </div>
                </div>
            )}

            {/* Product Attributes */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <FormHeading icon="category" title="Product Attributes" />

                <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-5 text-sm">
                    {product.attribute_data &&
                        Object.entries(product.attribute_data).map(([key, value]) => (
                            <InfoRow
                                key={key}
                                label={key}
                                value={
                                    Array.isArray(value)
                                        ? value
                                            .map((item) =>
                                                typeof item === "object"
                                                    ? item.name
                                                    : item
                                            )
                                            .join(", ")
                                        : value
                                }
                            />
                        ))}
                </div>
            </div>

            {/* Product Variants */}
            {product.product_type === "variable" && (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                    <FormHeading icon="category" title="Product Variants" />

                    {product.variants && product.variants.length > 0 ? (
                        <div className="overflow-x-auto mt-5">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b bg-slate-50">
                                        <th className="text-center p-3 w-12">Sr.</th>
                                        <th className="text-left p-3">Image</th>
                                        <th className="text-left p-3">SKU</th>
                                        <th className="text-left p-3">Attributes</th>
                                        <th className="text-left p-3">Price</th>
                                        <th className="text-left p-3">Stock</th>
                                        <th className="text-left p-3">Status</th>
                                        <th className="text-left p-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.variants.map((variant, index) => (
                                        <tr
                                            key={variant.id}
                                            className="border-b hover:bg-slate-50"
                                        >
                                            <td className="text-center p-3 font-medium text-slate-600">
                                                {index + 1}
                                            </td>

                                            {/* Image */}
                                            <td className="p-3">
                                                {variant.image ? (
                                                    <img
                                                        src={variant.image}
                                                        alt="Variant"
                                                        className="w-14 h-14 rounded-lg object-cover border"
                                                    />
                                                ) : (
                                                    <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center text-xs text-slate-400">
                                                        No Image
                                                    </div>
                                                )}
                                            </td>

                                            {/* SKU */}
                                            <td className="p-3">{variant.sku || "-"}</td>

                                            {/* Attributes */}
                                            <td className="p-3">
                                                {variant.attribute_data &&
                                                    Object.entries(variant.attribute_data).map(
                                                        ([key, value]) => (
                                                            <div key={key}>
                                                                <span className="font-medium">
                                                                    {key}
                                                                </span>
                                                                {" : "}
                                                                {Array.isArray(value)
                                                                    ? value.join(", ")
                                                                    : value}
                                                            </div>
                                                        )
                                                    )}
                                            </td>

                                            {/* Price */}
                                            <td className="p-3">₹ {variant.price || 0}</td>

                                            {/* Stock */}
                                            <td className="p-3">{variant.stock ?? 0}</td>

                                            {/* Status */}
                                            <td className="p-3">
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs ${variant.status
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                        }`}
                                                >
                                                    {variant.status ? "Active" : "Inactive"}
                                                </span>
                                            </td>
                                            <td className="p-3">
                                                <button
                                                    type="button"
                                                    className="px-3 py-1 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs"
                                                    onClick={() => {
                                                        setSelectedVariant(variant);
                                                        setShowVariantModal(true);
                                                    }}
                                                >
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-10 text-slate-500">
                            No Variants Available
                        </div>
                    )}
                </div>
            )}

            {/* Product Description */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <FormHeading icon="description" title="Description" />

                <div className="mt-5 space-y-6">
                    {/* Short Description */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">
                            Short Description
                        </h4>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 min-h-[70px]">
                            {product.short_description || "No Short Description"}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">
                            Description
                        </h4>
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 min-h-[150px] whitespace-pre-wrap">
                            {product.description || "No Description"}
                        </div>
                    </div>
                </div>
            </div>

            {/* SEO Information */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <FormHeading icon="seo" title="SEO Information" />

                <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-5 text-sm">
                    <InfoRow label="Meta Title" value={product.seo?.meta_title} />
                    <InfoRow label="Meta Keywords" value={product.seo?.meta_keywords} />

                    <div className="col-span-2">
                        <div className="flex">
                            <div className="w-36 font-medium text-slate-600">
                                Meta Description
                            </div>
                            <div className="flex-1 text-slate-800">
                                {product.seo?.meta_description || "-"}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="flex">
                            <div className="w-36 font-medium text-slate-600">
                                Canonical URL
                            </div>
                            <div className="flex-1 text-blue-600 break-all">
                                {product.seo?.canonical_url || "-"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Variant Details Modal */}
            <VariantDetailsModal
                show={showVariantModal}
                variant={selectedVariant}
                onClose={() => {
                    setShowVariantModal(false);
                    setSelectedVariant(null);
                }}
            />
        </div>
    );
}

function InfoRow({ label, value }) {
    return (
        <div className="flex">
            <div className="w-36 font-medium text-slate-600">{label}</div>
            <div className="flex-1 text-slate-800 break-all">{value || "-"}</div>
        </div>
    );
}