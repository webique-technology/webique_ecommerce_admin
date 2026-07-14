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

                <button
                    onClick={() => navigate("/orders")}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Back
                </button>
            </div>
        );
    }

    return (
        <div className="p-5">

            <h2 className="text-2xl font-bold mb-4">
                {order.id}
            </h2>

            <div className="bg-white p-4 rounded border">

                <p>
                    <strong>Customer:</strong>{" "}
                    {order.customer.name}
                </p>

                <p>
                    <strong>Email:</strong>{" "}
                    {order.customer.email}
                </p>
                <p>
                    <strong>residence:</strong>{" "}
                    {order.shippingAddress.residence}
                </p>
                <p>
                    <strong>street:</strong>{" "}
                    {order.shippingAddress.street}
                </p>
                <p>
                    <strong>Phone:</strong>{" "}
                    {order.customer.phone}
                </p>

                <p>
                    <strong>Date:</strong>{" "}
                    {order.date}
                </p>

                <p>
                    <strong>Time:</strong>{" "}
                    {order.time}
                </p>

                <p>
                    <strong>Payment:</strong>{" "}
                    {order.payment}
                </p>

                <p>
                    <strong>Status:</strong>{" "}
                    {order.status}
                </p>

                <p>
                    <strong>Total:</strong> $
                    {order.total.toFixed(2)}
                </p>

            </div>
        </div>
    );
};

export default OrderDetails;