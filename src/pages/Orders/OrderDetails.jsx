import React from "react";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";
const OrderDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    const order = location.state?.order;

    if (!order) {
        return (
            <div className="p-5">
                <h3>No order data found</h3>
                <p>Order ID: {id}</p>

               
            </div>
        );
    }


    return (


        <main className="ml-64 p-xl max-w-[1200px]">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
                <div className="flex flex-col gap-xs">
                    <div className="flex items-center gap-sm">
        
                        <button
                    onClick={() => navigate("/orders")}
                    className="text-on-surface-variant hover:text-primary transition-colors items-center flex"
                >
                   <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                </button>
                        <h2 className="font-h1 text-h1 text-primary">{order.id}</h2>
                        <span
                            className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm">{order.status}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pl-8">Placed on {order.date} at {order.time}</p>
                </div>
                <div className="flex items-center gap-md">
                    <button
                        className="flex items-center gap-xs border border-outline px-md py-sm rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-colors active:scale-95">
                        <span className="material-symbols-outlined" data-icon="print">print</span>
                        Print
                    </button>
                    <button
                        className="flex items-center gap-xs bg-primary text-on-primary px-md py-sm rounded-xl font-label-md text-label-md hover:opacity-90 transition-all shadow-sm active:scale-95">
                        <span className="material-symbols-outlined" data-icon="download">download</span>
                        Download Invoice
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">

                <div className="lg:col-span-2 flex flex-col gap-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                        <div className="bg-white p-lg rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100">
                            <div className="flex items-center gap-sm mb-md">
                                <span className="material-symbols-outlined text-primary" data-icon="person">person</span>
                                <h3 className="font-h3 text-label-md text-primary uppercase tracking-wider">Customer Details
                                </h3>
                            </div>
                            <div className="space-y-sm">
                                <p className="font-label-md text-body-lg text-primary">{order.customer.name}</p>
                                <p className="font-body-md text-body-md text-on-surface-variant">{order.customer.email}</p>
                                <p className="font-body-md text-body-md text-on-surface-variant">{order.customer.phone}</p>
                            </div>
                        </div>
                        <div className="bg-white p-lg rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100">
                            <div className="flex items-center gap-sm mb-md">
                                <span className="material-symbols-outlined text-primary"
                                    data-icon="local_shipping">local_shipping</span>
                                <h3 className="font-h3 text-label-md text-primary uppercase tracking-wider">Shipping Address
                                </h3>
                            </div>
                            <div className="space-y-sm">
                                <p className="font-label-md text-body-lg text-primary">{order.shippingAddress.residence}</p>
                                <p className="font-body-md text-body-md text-on-surface-variant">{order.shippingAddress.street}</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
                        <div className="p-lg border-b border-slate-100">
                            <h3 className="font-h3 text-label-md text-primary uppercase tracking-wider">Order Items</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-surface-container-low border-b border-slate-200">
                                    <tr>
                                        <th
                                            className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase">
                                            Product</th>
                                        <th
                                            className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase">
                                            SKU</th>
                                        <th
                                            className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase">
                                            Price</th>
                                        <th
                                            className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase text-center">
                                            Qty</th>
                                        <th
                                            className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase text-right">
                                            Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.productDetails.map((product, index) => (
                                        <tr key={index}>
                                            <td className="px-lg py-md">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-12 h-12 rounded-lg object-cover"
                                                    />
                                                    <span>{product.name}</span>
                                                </div>
                                            </td>

                                            <td className="px-lg py-md">
                                                {product.sku}
                                            </td>

                                            <td className="px-lg py-md">
                                                ₹{product.price}
                                            </td>

                                            <td className="px-lg py-md text-center">
                                                {product.quantity}
                                            </td>

                                            <td className="px-lg py-md text-right">
                                                ₹{product.total}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-lg">

                    <div className="bg-primary text-on-primary p-lg rounded-xl shadow-lg">
                        <h3 className="font-h3 text-label-md text-on-primary-container uppercase tracking-wider mb-lg">Payment
                            Summary</h3>
                        <div className="space-y-md border-b border-on-primary-fixed-variant pb-md mb-md">
                            <div className="flex justify-between font-body-md text-on-primary-fixed">
                                <span>Subtotal</span>
                                <span>{order.subtotal}</span>
                            </div>
                            <div className="flex justify-between font-body-md text-on-primary-fixed">
                                <span>Shipping</span>
                                <span>{order.shipping}</span>
                            </div>
                            <div className="flex justify-between font-body-md text-on-primary-fixed">
                                <span>Tax (8%)</span>
                                <span>{order.tax}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-h2 text-h3">Total</span>
                            <span className="font-h2 text-h2">$467.52</span>
                        </div>
                    </div>

                    <div className="bg-white p-lg rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100">
                        <h3 className="font-h3 text-label-md text-primary uppercase tracking-wider mb-lg">Order Timeline</h3>
                        <div
                            className="relative space-y-lg before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">

                            <div className="relative pl-8">
                                <div
                                    className="absolute left-0 top-1 h-6 w-6 rounded-full bg-secondary-container border-4 border-white shadow-sm z-10">
                                </div>
                                <p className="font-label-md text-body-md text-primary">Order Delivered</p>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">{order.orderTimeline.orderdelivered}</p>
                            </div>

                            <div className="relative pl-8">
                                <div
                                    className="absolute left-0 top-1 h-6 w-6 rounded-full bg-slate-300 border-4 border-white shadow-sm z-10">
                                </div>
                                <p className="font-label-md text-body-md text-primary">Shipped from Warehouse</p>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">{order.orderTimeline.ShippedFromWarehouse}</p>
                            </div>

                            <div className="relative pl-8">
                                <div
                                    className="absolute left-0 top-1 h-6 w-6 rounded-full bg-slate-300 border-4 border-white shadow-sm z-10">
                                </div>
                                <p className="font-label-md text-body-md text-primary">Payment Confirmed</p>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">{order.orderTimeline.PaymentConfirmed}</p>
                            </div>

                            <div className="relative pl-8">
                                <div
                                    className="absolute left-0 top-1 h-6 w-6 rounded-full bg-slate-300 border-4 border-white shadow-sm z-10">
                                </div>
                                <p className="font-label-md text-body-md text-primary">Order Placed</p>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">{order.orderTimeline.OrderPlaced}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-container p-lg rounded-xl border border-outline-variant">
                        <h3 className="font-h3 text-label-md text-primary uppercase tracking-wider mb-sm">Order Notes</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">Customer requested eco-friendly
                            packaging if available. Package was left at the front desk per delivery instructions.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default OrderDetails