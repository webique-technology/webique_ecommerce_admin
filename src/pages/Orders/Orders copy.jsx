import React from 'react'
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="p-xl w-full mx-auto space-y-lg">
      {/* Header & Stats Bento Section */}
      <section className="grid grid-cols-12 gap-lg">
        <div className="col-span-12 md:col-span-6 flex flex-col justify-end pb-2">
          <h1 className="font-h1 text-h1 text-on-surface">Orders</h1>
          <p className="font-body-md text-on-surface-variant mt-xs">
            Manage and track your customer purchase history.
          </p>
        </div>

        <div className="col-span-12 md:col-span-2 p-md bg-white border border-slate-100 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] flex flex-col gap-xs">
          <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
            Total Sales
          </span>
          <span className="font-h2 text-h2">$128,430</span>
          <span className="text-secondary font-label-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              trending_up
            </span>{" "}
            +12%
          </span>
        </div>

        <div className="col-span-12 md:col-span-2 p-md bg-white border border-slate-100 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] flex flex-col gap-xs">
          <span className="font-label-sm text-on-surface-variant uppercase tracking-wider">
            Active Orders
          </span>
          <span className="font-h2 text-h2">48</span>
          <span className="text-on-surface-variant font-label-sm">
            Processing items
          </span>
        </div>

        <div className="col-span-12 md:col-span-2 p-md bg-primary text-white rounded-xl shadow-lg flex flex-col gap-xs">
          <span className="font-label-sm text-slate-400 uppercase tracking-wider">
            New Today
          </span>
          <span className="font-h2 text-h2">12</span>
          <span className="text-secondary-fixed font-label-sm">
            Top performance
          </span>
        </div>
      </section>

      {/* Filters & Actions */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-md bg-white p-sm rounded-xl border border-slate-100">
        <div className="flex items-center gap-sm overflow-x-auto pb-sm md:pb-0 w-full md:w-auto">
          <button className="px-md py-2 bg-primary text-white rounded-lg font-label-md whitespace-nowrap">
            All Orders
          </button>
          <button className="px-md py-2 hover:bg-slate-50 text-on-surface-variant rounded-lg font-label-md whitespace-nowrap transition-colors">
            Pending
          </button>
          <button className="px-md py-2 hover:bg-slate-50 text-on-surface-variant rounded-lg font-label-md whitespace-nowrap transition-colors">
            Processing
          </button>
          <button className="px-md py-2 hover:bg-slate-50 text-on-surface-variant rounded-lg font-label-md whitespace-nowrap transition-colors">
            Shipped
          </button>
          <button className="px-md py-2 hover:bg-slate-50 text-on-surface-variant rounded-lg font-label-md whitespace-nowrap transition-colors">
            Delivered
          </button>
          <button className="px-md py-2 hover:bg-slate-50 text-on-surface-variant rounded-lg font-label-md whitespace-nowrap transition-colors">
            Cancelled
          </button>
        </div>

        <div className="flex items-center gap-sm w-full md:w-auto justify-end">
          <button className="flex items-center gap-2 px-md py-2 border border-slate-200 rounded-lg font-label-md text-on-surface hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-[18px]">
              calendar_today
            </span>
            Last 30 Days
          </button>

          <button className="flex items-center gap-2 px-md py-2 border border-slate-200 rounded-lg font-label-md text-on-surface hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            Export
          </button>
        </div>
      </section>

      {/* Data Table */}
      <section className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase tracking-widest">
                  Order ID
                </th>
                <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase tracking-widest">
                  Date
                </th>
                <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase tracking-widest">
                  Customer
                </th>
                <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase tracking-widest">
                  Payment
                </th>
                <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase tracking-widest">
                  Status
                </th>
                <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase tracking-widest">
                  Total
                </th>
                <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-50">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-lg py-md font-body-md text-primary font-semibold">
                  #ORD-90241
                </td>
                <td className="px-lg py-md font-body-sm text-on-surface-variant">
                  Oct 24, 2023 • 14:20
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-label-sm text-primary">
                      SC
                    </div>
                    <span className="font-body-md text-on-surface font-medium">
                      Sarah Connor
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-secondary-container"></span>
                    Paid
                  </span>
                </td>
                <td className="px-lg py-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm">
                    Processing
                  </span>
                </td>
                <td className="px-lg py-md font-body-md text-on-surface font-bold">
                  $1,240.00
                </td>
                <td className="px-lg py-md text-right">
                  <button onClick={() => navigate("/view-order")} className="cursor-pointer font-label-md text-primary hover:underline underline-offset-4">
                    View Details
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-lg py-md font-body-md text-primary font-semibold">
                  #ORD-90240
                </td>
                <td className="px-lg py-md font-body-sm text-on-surface-variant">
                  Oct 24, 2023 • 12:05
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-label-sm text-primary">
                      JM
                    </div>
                    <span className="font-body-md text-on-surface font-medium">
                      James Miller
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-fixed-variant"></span>
                    Pending
                  </span>
                </td>
                <td className="px-lg py-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm">
                    Shipped
                  </span>
                </td>
                <td className="px-lg py-md font-body-md text-on-surface font-bold">
                  $450.50
                </td>
                <td className="px-lg py-md text-right">
                  <button onClick={() => navigate("/view-order")} className="cursor-pointer font-label-md text-primary hover:underline underline-offset-4">
                    View Details
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-lg py-md font-body-md text-primary font-semibold">
                  #ORD-90239
                </td>
                <td className="px-lg py-md font-body-sm text-on-surface-variant">
                  Oct 23, 2023 • 09:15
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-label-sm text-primary">
                      EW
                    </div>
                    <span className="font-body-md text-on-surface font-medium">
                      Elena White
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-secondary-container"></span>
                    Paid
                  </span>
                </td>
                <td className="px-lg py-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 font-label-sm">
                    Delivered
                  </span>
                </td>
                <td className="px-lg py-md font-body-md text-on-surface font-bold">
                  $3,890.00
                </td>
                <td className="px-lg py-md text-right">
                  <button onClick={() => navigate("/view-order")} className="cursor-pointer font-label-md text-primary hover:underline underline-offset-4">
                    View Details
                  </button>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-lg py-md font-body-md text-primary font-semibold">
                  #ORD-90238
                </td>
                <td className="px-lg py-md font-body-sm text-on-surface-variant">
                  Oct 23, 2023 • 08:30
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-label-sm text-primary">
                      DK
                    </div>
                    <span className="font-body-md text-on-surface font-medium">
                      David King
                    </span>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-error-container"></span>
                    Failed
                  </span>
                </td>
                <td className="px-lg py-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 font-label-sm">
                    Cancelled
                  </span>
                </td>
                <td className="px-lg py-md font-body-md text-on-surface font-bold">
                  $125.00
                </td>
                <td className="px-lg py-md text-right">
                  <button onClick={() => navigate("/view-order")} className="cursor-pointer font-label-md text-primary hover:underline underline-offset-4">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-lg py-md border-t border-slate-100 flex items-center justify-between">
          <span className="font-body-sm text-on-surface-variant">
            Showing 1 to 4 of 1,240 results
          </span>

          <div className="flex items-center gap-sm">
            <button
              className="p-2 border border-slate-200 rounded-lg text-on-surface-variant hover:bg-slate-50 disabled:opacity-50"
              disabled
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-lg font-label-sm">
              1
            </button>

            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-50 text-on-surface-variant rounded-lg font-label-sm">
              2
            </button>

            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-50 text-on-surface-variant rounded-lg font-label-sm">
              3
            </button>

            <span className="text-on-surface-variant">...</span>

            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-50 text-on-surface-variant rounded-lg font-label-sm">
              124
            </button>

            <button className="p-2 border border-slate-200 rounded-lg text-on-surface-variant hover:bg-slate-50">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Orders