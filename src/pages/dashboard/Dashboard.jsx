import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-background font-body-md text-on-background flex">

      <div className="p-xl w-full mx-auto space-y-lg">
        <div className="flex flex-col gap-md">
          <div className="flex flex-col gap-md">
            <div
              className="bg-error-container/20 border border-error/10 text-on-error-container p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-error" data-icon="warning" data-weight="fill">warning</span>
                <p className="font-label-md">Inventory Alert: 12 products are currently below the safety threshold.
                </p>
              </div>
              <button className="text-sm font-bold underline decoration-error/30 hover:decoration-error">Manage
                Inventory</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div>
              <h1 className="font-h1 text-h1 text-primary">Store Overview</h1>
              <p className="text-on-surface-variant font-body-md mt-1">Review your performance for the current
                billing cycle.</p>
            </div>
            <div className="flex gap-sm">
              <div
                className="flex items-center gap-2 bg-white border border-outline-variant px-md py-sm rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-slate-400 text-[20px]">calendar_today</span>
                <span className="font-label-md text-on-surface">Oct 01 - Oct 31, 2023</span>
              </div>
              <button
                className="bg-primary text-on-primary px-lg py-sm rounded-lg font-label-md flex items-center gap-2 active:opacity-90">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Export
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">

            <div className="bg-white p-lg rounded-xl ambient-shadow border border-slate-50 flex flex-col gap-sm">
              <div className="flex justify-between items-start">
                <span className="p-2 bg-primary-fixed text-primary rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                  <span className="material-symbols-outlined">payments</span>
                </span>
                <div className="flex items-center gap-1 text-secondary text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  +12.5%
                </div>
              </div>
              <div>
                <span className="text-on-surface-variant font-label-sm uppercase tracking-wider">Total
                  Revenue</span>
                <h2 className="font-h2 text-h2 text-primary mt-1">$428,950.00</h2>
              </div>
            </div>

            <div className="bg-white p-lg rounded-xl ambient-shadow border border-slate-50 flex flex-col gap-sm">
              <div className="flex justify-between items-start">
                <span className="p-2 bg-secondary-fixed text-on-secondary-container rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                  <span className="material-symbols-outlined">shopping_bag</span>
                </span>
                <div className="flex items-center gap-1 text-secondary text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  +5.2%
                </div>
              </div>
              <div>
                <span className="text-on-surface-variant font-label-sm uppercase tracking-wider">Total Orders</span>
                <h2 className="font-h2 text-h2 text-primary mt-1">2,842</h2>
              </div>
            </div>

            <div className="bg-white p-lg rounded-xl ambient-shadow border border-slate-50 flex flex-col gap-sm">
              <div className="flex justify-between items-start">
                <span className="p-2 bg-tertiary-fixed text-on-tertiary-fixed rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                  <span className="material-symbols-outlined">person_add</span>
                </span>
                <div className="flex items-center gap-1 text-error text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px]">trending_down</span>
                  -2.1%
                </div>
              </div>
              <div>
                <span className="text-on-surface-variant font-label-sm uppercase tracking-wider">New
                  Customers</span>
                <h2 className="font-h2 text-h2 text-primary mt-1">512</h2>
              </div>
            </div>

            <div className="bg-white p-lg rounded-xl ambient-shadow border border-slate-50 flex flex-col gap-sm">
              <div className="flex justify-between items-start">
                <span className="p-2 bg-surface-container-high text-on-surface rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                  <span className="material-symbols-outlined">analytics</span>
                </span>
                <div className="flex items-center gap-1 text-secondary text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  +3.8%
                </div>
              </div>
              <div>
                <span className="text-on-surface-variant font-label-sm uppercase tracking-wider">Profit
                  Margin</span>
                <h2 className="font-h2 text-h2 text-primary mt-1">24.2%</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">

            <div className="lg:col-span-2 bg-white rounded-xl ambient-shadow border border-slate-50 flex flex-col">
              <div className="p-lg border-b border-slate-100 flex justify-between items-center">
                <div>
                  <h3 className="font-h3 text-h3 text-primary">Sales Performance</h3>
                  <p className="text-on-surface-variant font-body-sm">Weekly revenue trends across all channels
                  </p>
                </div>
                <select
                  className="bg-surface-container-low border-none rounded-lg text-sm font-label-md py-1 px-4 focus:ring-0">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="p-lg flex-1 relative min-h-[300px] flex items-end">

                <div
                  className="absolute inset-x-lg inset-y-xl flex flex-col justify-between pointer-events-none opacity-10">
                  <div className="w-full border-t border-slate-900"></div>
                  <div className="w-full border-t border-slate-900"></div>
                  <div className="w-full border-t border-slate-900"></div>
                  <div className="w-full border-t border-slate-900"></div>
                </div>

                <div className="w-full h-full flex items-end justify-between gap-1 pb-4">
                  <div className="flex-1 bg-primary/5 rounded-t-sm h-[40%]"></div>
                  <div className="flex-1 bg-primary/10 rounded-t-sm h-[60%]"></div>
                  <div className="flex-1 bg-primary/20 rounded-t-sm h-[45%]"></div>
                  <div className="flex-1 bg-primary/40 rounded-t-sm h-[80%]"></div>
                  <div className="flex-1 bg-primary rounded-t-sm h-[95%]"></div>
                  <div className="flex-1 bg-primary/60 rounded-t-sm h-[70%]"></div>
                  <div className="flex-1 bg-primary/10 rounded-t-sm h-[30%]"></div>
                </div>
              </div>
              <div className="px-lg pb-lg flex justify-between text-xs font-label-sm text-slate-400">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            <div className="bg-white rounded-xl ambient-shadow border border-slate-50 flex flex-col">
              <div className="p-lg border-b border-slate-100">
                <h3 className="font-h3 text-h3 text-primary">Best Sellers</h3>
                <p className="text-on-surface-variant font-body-sm">Top volume items this month</p>
              </div>
              <div className="p-lg space-y-md">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                    <img alt="Product" className="w-full h-full object-cover"
                      data-alt="A studio photograph of a premium minimalist wristwatch with a leather strap, presented on a clean white pedestal. The lighting is soft and even, highlighting the sleek textures and brushed metal finishes. The overall aesthetic is professional and high-end, fitting for a modern ecommerce dashboard's featured product list."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUdflARjECTZzhYwCWUSI2FftGS60-KPqmDSo_Af8H0rDKCSaDRp4ilX5iSdBmE01CTFMbAL0EKcvS2lSzu193DAFCS0zWaeLvfZcnVivvCfLObEXnPOmDjX78Iw2KeF6xPYy1O7W6GBgSduxf3ec1j24Y8Y5UGZC9yA3DmIUJFYNXkyZFWBXUzHYxwc_ez0DBNwCrJIREcuBl6rj_k3otIhCq4UjwL2JURICNnV9_8q6hwXwunP84UUp3jbmYJsrJEjz1S6LiHAGY" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-primary truncate">Aurelius Chronograph</p>
                    <p className="text-xs text-slate-500">1,240 units sold</p>
                  </div>
                  <span className="text-sm font-bold text-primary">$199</span>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                    <img alt="Product" class="w-full h-full object-cover"
                      data-alt="A professional product shot of a vibrant red sports sneaker against a neutral, high-key studio background. The focus is sharp on the textile weave and rubber sole details. The lighting is bright and clean, consistent with a modern corporate ecommerce interface's visual style."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZqSru8RtCRdAUUD0_WNK9V46IAKms8v_pA1H6-wzPjm3hF_NxyZjVAkG6A6I0w_SLv1SMp1-ah3IxB_4m6SAL744AJrzm02H1kBwl_ND9mwtllNwfB0Bs-zsCx-LSiQiKYvl190ZnbF4iSR9fcCFjkKZP5U8wagmCIjKBtVyvHChL5dXU2nYmfRgT20I5tS57jHc5jiLpvXPux5O-p7Ygfu39_TRNd2Xgb-jh40RcH6wwWQJh8CP2vslTq9VrNDG__II4h5WyrrUu" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-primary truncate">Velocity Racer X</p>
                    <p className="text-xs text-slate-500">982 units sold</p>
                  </div>
                  <span className="text-sm font-bold text-primary">$145</span>
                </div>
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                    <img alt="Product" className="w-full h-full object-cover"
                      data-alt="High-resolution product photography of matte black noise-canceling headphones resting on a minimalist desk surface. The composition is clean and centered, featuring soft ambient lighting that creates subtle highlights on the material's curved surfaces, suitable for a professional analytics display."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3cHIxP1eNG71BLEXSHJ_dZjyJzv28KpJkDTjH52uP0h0Jd424dF4vgAZ_An0euQMRIn0K_HEjXSPSeDy5qzc0m8P81WMhypBjW7brsaf5MT5YKJFK23-L6413oZF1u0hPNLnDYNto6n37y6X8XSFY_soKpmvaGOGI8dqBG6CL6XUhGlNQYaL1-DRvk0TZEc7gnrwvgECuk1zDaXW2G5PGKXddnb6Wc4tAWcZWGUSmFKqHg2t6Z_aycsl5BZa3HUCSS3MmHav5o2lM" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-primary truncate">Sonic Pro Wireless</p>
                    <p className="text-xs text-slate-500">850 units sold</p>
                  </div>
                  <span className="text-sm font-bold text-primary">$299</span>
                </div>
              </div>
              <div className="mt-auto p-lg border-t border-slate-100">
                <button
                  className="w-full py-2 text-primary font-label-md border border-outline-variant rounded-lg hover:bg-slate-50">View
                  Inventory Report</button>
              </div>
            </div>
          </div>

           <section className="bg-white rounded-xl ambient-shadow border border-slate-50 flex flex-col">
                <div className="p-lg border-b border-slate-100 flex justify-between items-center">
                    <div>
                        <h3 className="font-h3 text-h3 text-primary">Latest Orders</h3>
                        <p className="text-on-surface-variant font-body-sm">Manage and track your most recent customer
                            activity</p>
                    </div>
                    <button className="text-primary font-label-md flex items-center gap-1 hover:underline">
                        View All Orders
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr className="bg-surface-container-low">
                                <th
                                    className="text-left py-md px-lg font-label-sm text-slate-400 uppercase tracking-widest">
                                    Order ID</th>
                                <th
                                    className="text-left py-md px-lg font-label-sm text-slate-400 uppercase tracking-widest">
                                    Customer</th>
                                <th
                                    className="text-left py-md px-lg font-label-sm text-slate-400 uppercase tracking-widest">
                                    Date</th>
                                <th
                                    className="text-left py-md px-lg font-label-sm text-slate-400 uppercase tracking-widest">
                                    Amount</th>
                                <th
                                    className="text-left py-md px-lg font-label-sm text-slate-400 uppercase tracking-widest">
                                    Status</th>
                                <th
                                    className="text-right py-md px-lg font-label-sm text-slate-400 uppercase tracking-widest">
                                    Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-md px-lg font-bold text-primary">#ORD-9421</td>
                                <td className="py-md px-lg">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-xs font-bold text-primary">
                                            JS</div>
                                        <span className="text-on-surface font-label-md">James Smith</span>
                                    </div>
                                </td>
                                <td className="py-md px-lg text-on-surface-variant font-body-md">Oct 24, 2023</td>
                                <td className="py-md px-lg font-bold text-primary">$349.00</td>
                                <td className="py-md px-lg">
                                    <span
                                        className="px-2 py-1 bg-secondary-container/30 text-on-secondary-container text-xs font-bold rounded-full">Shipped</span>
                                </td>
                                <td className="py-md px-lg text-right">
                                    <button
                                        className="material-symbols-outlined text-slate-400 hover:text-primary">more_horiz</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-md px-lg font-bold text-primary">#ORD-9420</td>
                                <td className="py-md px-lg">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-xs font-bold text-primary">
                                            MB</div>
                                        <span className="text-on-surface font-label-md">Maria Belinsky</span>
                                    </div>
                                </td>
                                <td className="py-md px-lg text-on-surface-variant font-body-md">Oct 24, 2023</td>
                                <td className="py-md px-lg font-bold text-primary">$1,204.50</td>
                                <td className="py-md px-lg">
                                    <span
                                        className="px-2 py-1 bg-surface-container-high text-on-surface-variant text-xs font-bold rounded-full">Pending</span>
                                </td>
                                <td className="py-md px-lg text-right">
                                    <button
                                        className="material-symbols-outlined text-slate-400 hover:text-primary">more_horiz</button>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50 transition-colors">
                                <td className="py-md px-lg font-bold text-primary">#ORD-9419</td>
                                <td className="py-md px-lg">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-xs font-bold text-primary">
                                            DK</div>
                                        <span className="text-on-surface font-label-md">David Kim</span>
                                    </div>
                                </td>
                                <td className="py-md px-lg text-on-surface-variant font-body-md">Oct 23, 2023</td>
                                <td className="py-md px-lg font-bold text-primary">$89.99</td>
                                <td className="py-md px-lg">
                                    <span
                                        className="px-2 py-1 bg-secondary-container/30 text-on-secondary-container text-xs font-bold rounded-full">Delivered</span>
                                </td>
                                <td className="py-md px-lg text-right">
                                    <button
                                        className="material-symbols-outlined text-slate-400 hover:text-primary">more_horiz</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-md flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs text-slate-500 font-label-sm">Showing 1 to 3 of 42 entries</span>
                    <div className="flex gap-2">
                        <button
                            className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded-md hover:bg-slate-50">
                            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button
                            class="w-8 h-8 flex items-center justify-center border border-outline-variant rounded-md hover:bg-slate-50">
                            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </section>

            
        </div>
        </div>
      </div>

   
  );
};

export default Dashboard;