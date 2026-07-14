import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../../../public/download.png'

export default function Orders() {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState("All Orders");
  const [currentPage, setCurrentPage] = useState(1);


  const ordersData = [
    {
      id: "#ORD-90241",
      date: "Oct 24, 2023",
      time: "02:45 PM",
      customer: {
        initials: "SC",
        name: "Sarah Connor",
        email: "sarah.connor@example.com",
        phone: "+1 555-100-2553",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4B",
        street: "824A E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: img1,
          name: "Red Fusion Sneaker one",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5001,
        }
      ],
      subtotal: 411.00,
      shipping: 15,
      tax: 31.52,
      payment: "Paid",
      status: "Processing",
      total: 467.52,
    },

    {
      id: "#ORD-90242",
      date: "Oct 24, 2023",
      time: "15:30",
      customer: {
        initials: "JM",
        name: "James Miller",
        email: "james@example.com",
        phone: "+1 555-100-2002",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BC",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker two",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5002,
        }
      ],
      subtotal: 412.00,
      shipping: 17,
      tax: 40.52,
      payment: "Pending",
      status: "Shipped",
      total: 561.6,
    },

    {
      id: "#ORD-90243",
      date: "Oct 23, 2023",
      time: "10:15",
      customer: {
        initials: "EW",
        name: "Elena White",
        email: "elena@example.com",
        phone: "+1 555-100-2003",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BD",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 11:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 012:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 04:00 PM",
        OrderPlaced: "Oct 24, 2023 · 05:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Paid",
      status: "Delivered",
      total: 1429.92,
    },

    {
      id: "#ORD-90244",
      date: "Oct 23, 2023",
      time: "08:30",
      customer: {
        initials: "DK",
        name: "David King",
        email: "david@example.com",
        phone: "+1 555-100-2004",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BA",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 110:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 0112:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Failed",
      status: "Cancelled",
      total: 125,
    },

    {
      id: "#ORD-90245",
      date: "Oct 22, 2023",
      time: "09:10",
      customer: {
        initials: "AB",
        name: "Alex Brown",
        email: "alex@example.com",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BP",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Paid",
      status: "Delivered",
      total: 203.04,
    },

    {
      id: "#ORD-90246",
      date: "Oct 22, 2023",
      time: "12:20",
      customer: {
        initials: "MR",
        name: "Michael Ross",
        email: "michael@example.com",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BQ",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Paid",
      status: "Processing",
      total: 721.44,
    },

    {
      id: "#ORD-90247",
      date: "Oct 22, 2023",
      time: "16:40",
      customer: {
        initials: "LT",
        name: "Lisa Thompson",
        email: "lisa@example.com",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BR",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Pending",
      status: "Processing",
      total: 250.56,
    },

    {
      id: "#ORD-90248",
      date: "Oct 21, 2023",
      time: "11:00",
      customer: {
        initials: "RH",
        name: "Robert Hall",
        email: "robert@example.com",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BS",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Paid",
      status: "Shipped",
      total: 394.2,
    },

    {
      id: "#ORD-90249",
      date: "Oct 21, 2023",
      time: "14:25",
      customer: {
        initials: "KP",
        name: "Karen Parker",
        email: "karen@example.com",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BT",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Paid",
      status: "Delivered",
      total: 992.52,
    },

    {
      id: "#ORD-90250",
      date: "Oct 20, 2023",
      time: "17:30",
      customer: {
        initials: "TS",
        name: "Tom Smith",
        email: "tom@example.com",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BU",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Paid",
      status: "Delivered",
      total: 1652.4,
    },

    {
      id: "#ORD-90251",
      date: "Oct 20, 2023",
      time: "13:20",
      customer: {
        initials: "AM",
        name: "Anna Morgan",
        email: "anna@example.com",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BV",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Pending",
      status: "Processing",
      total: 351,
    },

    {
      id: "#ORD-90252",
      date: "Oct 19, 2023",
      time: "10:15",
      customer: {
        initials: "JW",
        name: "John Walker",
        email: "john@example.com",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BW",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Paid",
      status: "Delivered",
      total: 471.96,
    },

    {
      id: "#ORD-90253",
      date: "Oct 19, 2023",
      time: "18:05",
      customer: {
        initials: "SB",
        name: "Sophia Brown",
        email: "sophia@example.com",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BX",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Failed",
      status: "Cancelled",
      total: 95,
    },

    {
      id: "#ORD-90254",
      date: "Oct 18, 2023",
      time: "09:45",
      customer: {
        initials: "CH",
        name: "Chris Harris",
        email: "chris@example.com",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4BY",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Paid",
      status: "Shipped",
      total: 864,
    },

    {
      id: "#ORD-90255",
      date: "Oct 18, 2023",
      time: "15:50",
      customer: {
        initials: "NM",
        name: "Nancy Moore",
        email: "nancy@example.com",
      },
      shippingAddress: {
        residence: "High-Rise Loft Apt 4Bz",
        street: "824 E 9th St, New York NY 10009, United States",
      },
      orderTimeline: {
        orderdelivered: "Oct 26, 2023 · 10:30 AM",
        ShippedFromWarehouse: "Oct 25, 2023 · 02:15 PM",
        PaymentConfirmed: "Oct 24, 2023 · 03:00 PM",
        OrderPlaced: "Oct 24, 2023 · 02:45 PM",
      },
      productDetails: [
        {
          image: "https://dummyimage.com/100x100/e5e7eb/000000&text=Sneaker",
          name: "Red Fusion Sneaker",
          sku: "SNK-RF-102",
          price: 2500,
          quantity: 2,
          total: 5000,
        }
      ],
      subtotal: 419.00,
      shipping: 15,
      tax: 33.52,
      payment: "Paid",
      status: "Delivered",
      total: 621,
    },
  ];


  const statusFilters = [
    "All Orders",
    ...new Set(
      ordersData.map(
        (order) => order.status
      )
    ),
  ];




  const filteredOrders =
    selectedStatus === "All Orders"
      ? ordersData
      : ordersData.filter(
        (order) =>
          order.status === selectedStatus
      );


  const itemsPerPage = 4;

  const totalItems = filteredOrders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  const handleStatusFilter = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const currentOrders = filteredOrders.slice(
    startIndex,
    endIndex
  );
  // ===========================
  // Stats
  // ===========================

  const totalSales = ordersData.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const activeOrders = ordersData.filter(
    (order) => order.status === "Processing"
  ).length;

  const todaysOrders = ordersData.filter(
    (order) => order.date === "Oct 24, 2023"
  ).length;

  return (
    <div className="p-xl">

      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white p-4 rounded-xl border">
          <h6>Total Sales</h6>
          <h3>
            $
            {totalSales.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </h3>
        </div>

        <div className="bg-white p-4 rounded-xl border">
          <h6>Active Orders</h6>
          <h3>{activeOrders}</h3>
        </div>

        <div className="bg-white p-4 rounded-xl border">
          <h6>Today's Orders</h6>
          <h3>{todaysOrders}</h3>
        </div>

      </div>

      <section className="flex flex-col md:flex-row items-center justify-between gap-md bg-white p-sm rounded-xl border border-slate-100 mb-6">

        <div className="flex items-center gap-sm overflow-x-auto pb-sm md:pb-0 w-full md:w-auto">

          {statusFilters.map((status) => (
            <button
              key={status}
              onClick={() => handleStatusFilter(status)}
              className={`px-md py-2 rounded-lg font-label-md whitespace-nowrap transition-colors
          
          ${selectedStatus === status
                  ? "bg-primary text-white"
                  : "hover:bg-slate-50 text-on-surface-variant"
                }
        `}
            >
              {status}

              {status !== "All Orders" && (
                <span className="ms-2 text-xs">
                  (
                  {
                    ordersData.filter(
                      (order) =>
                        order.status === status
                    ).length
                  }
                  )
                </span>
              )}
            </button>
          ))}

        </div>

        <div className="flex items-center gap-sm w-full md:w-auto justify-end">

          <button className="flex items-center gap-2 px-md py-2 border border-slate-200 rounded-lg">
            <span className="material-symbols-outlined text-[18px]">
              calendar_today
            </span>
            Last 30 Days
          </button>

          <button className="flex items-center gap-2 px-md py-2 border border-slate-200 rounded-lg">
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            Export
          </button>

        </div>

      </section>
      {/* Orders Table */}

      <section className="bg-white rounded-xl border border-slate-100 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="p-4">Order ID</th>
                <th className="p-4">Date</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Status</th>
                <th className="p-4">Total</th>
                <th className="p-4 text-end">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>

              {currentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4 font-semibold text-primary">
                    {order.id}
                  </td>

                  <td className="p-4">
                    {order.date} • {order.time}
                  </td>

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        {order.customer.initials}
                      </div>

                      <div>
                        <div>
                          {order.customer.name}
                        </div>

                        <small className="text-gray-500">
                          {order.customer.email}
                        </small>
                      </div>

                    </div>

                  </td>

                  <td className="p-4">
                    {order.payment}
                  </td>

                  <td className="p-4">
                    {order.status}
                  </td>

                  <td className="p-4 font-bold">
                    $
                    {order.total.toLocaleString(
                      "en-US",
                      {
                        minimumFractionDigits: 2,
                      }
                    )}
                  </td>

                  <td className="p-4 text-end">
                    <button
                      onClick={() =>
                        navigate(`/view-order/${order.id.replace("#", "")}`, {
                          state: { order }
                        })
                      }
                    >
                      View Details
                    </button>



                  </td>

                </tr>
              ))}

            </tbody>

          </table>
          <div className="px-lg py-md border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">

            <span className="text-sm">
              Showing {startIndex + 1} to{" "}
              {Math.min(endIndex, totalItems)} of{" "}
              {totalItems} results
            </span>

            <div className="flex items-center gap-2">

              {/* Previous */}

              <button
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage(currentPage - 1)
                }
                className="w-8 h-8 border rounded-lg disabled:opacity-40"
              >
                &lt;
              </button>

              {/* Page Numbers */}

              {Array.from(
                { length: totalPages },
                (_, i) => i + 1
              ).map((page) => (
                <button
                  key={page}
                  onClick={() =>
                    setCurrentPage(page)
                  }
                  className={`w-8 h-8 rounded-lg text-sm
        ${currentPage === page
                      ? "bg-primary text-white"
                      : "border hover:bg-slate-50"
                    }`}
                >
                  {page}
                </button>
              ))}

              {/* Next */}

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage(currentPage + 1)
                }
                className="w-8 h-8 border rounded-lg disabled:opacity-40"
              >
                &gt;
              </button>

            </div>
          </div>

        </div>



      </section>

    </div>
  );
}