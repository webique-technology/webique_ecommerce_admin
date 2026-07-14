import React from 'react'

const Analytics = () => {
  return (

    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-h1 text-on-surface">Sales Performance Report</h2>
          <p className="text-body-md text-on-surface-variant">In-depth analysis of revenue,
            orders, and customer acquisition metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="flex bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
            <button
              className="px-4 py-2 text-label-md hover:bg-surface-container-low border-r border-outline-variant transition-colors">Last
              30 Days</button>
            <button
              className="px-4 py-2 text-label-md bg-primary text-white transition-colors">This
              Year</button>
            <button
              className="px-4 py-2 text-label-md hover:bg-surface-container-low transition-colors flex items-center gap-2">
              Custom <span className="material-symbols-outlined text-sm"
                data-icon="calendar_today">calendar_today</span>
            </button>
          </div>
          <button
            className="flex items-center gap-2 bg-white border border-outline-variant px-4 py-2 rounded-xl text-label-md shadow-sm hover:shadow-md transition-all active:scale-95">
            <span className="material-symbols-outlined text-sm"
              data-icon="download">download</span>
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div
          className="bg-white p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-primary-fixed rounded-lg">
              <span className="material-symbols-outlined text-primary"
                data-icon="payments">payments</span>
            </div>
            <div className="flex items-center gap-1 text-secondary font-label-sm">
              <span className="material-symbols-outlined text-sm"
                data-icon="trending_up">trending_up</span>
              12.5%
            </div>
          </div>
          <div>
            <p className="text-body-sm text-on-surface-variant">Gross Sales</p>
            <h3 className="text-h2 text-on-surface">$124,592.00</h3>
          </div>
          <div className="h-8 w-full bg-slate-50 rounded flex items-end px-1 gap-1">
            <div className="h-3 w-full bg-primary-fixed-dim rounded-t-sm"></div>
            <div className="h-5 w-full bg-primary-fixed-dim rounded-t-sm"></div>
            <div className="h-4 w-full bg-primary-fixed-dim rounded-t-sm"></div>
            <div className="h-6 w-full bg-primary-fixed-dim rounded-t-sm"></div>
            <div className="h-7 w-full bg-primary-fixed-dim rounded-t-sm"></div>
            <div className="h-5 w-full bg-primary rounded-t-sm"></div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-secondary-fixed rounded-lg">
              <span className="material-symbols-outlined text-on-secondary-fixed-variant"
                data-icon="account_balance_wallet">account_balance_wallet</span>
            </div>
            <div className="flex items-center gap-1 text-secondary font-label-sm">
              <span className="material-symbols-outlined text-sm"
                data-icon="trending_up">trending_up</span>
              8.2%
            </div>
          </div>
          <div>
            <p className="text-body-sm text-on-surface-variant">Net Sales</p>
            <h3 className="text-h2 text-on-surface">$108,245.50</h3>
          </div>
          <div className="h-8 w-full bg-slate-50 rounded flex items-end px-1 gap-1">
            <div className="h-4 w-full bg-secondary-fixed-dim rounded-t-sm"></div>
            <div className="h-6 w-full bg-secondary-fixed-dim rounded-t-sm"></div>
            <div className="h-5 w-full bg-secondary-fixed-dim rounded-t-sm"></div>
            <div className="h-3 w-full bg-secondary-fixed-dim rounded-t-sm"></div>
            <div className="h-8 w-full bg-secondary-fixed-dim rounded-t-sm"></div>
            <div className="h-6 w-full bg-secondary rounded-t-sm"></div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-tertiary-fixed rounded-lg">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant"
                data-icon="shopping_basket">shopping_basket</span>
            </div>
            <div className="flex items-center gap-1 text-error font-label-sm">
              <span className="material-symbols-outlined text-sm"
                data-icon="trending_down">trending_down</span>
              2.4%
            </div>
          </div>
          <div>
            <p className="text-body-sm text-on-surface-variant">Avg. Order Value</p>
            <h3 className="text-h2 text-on-surface">$84.20</h3>
          </div>
          <div className="h-8 w-full bg-slate-50 rounded flex items-end px-1 gap-1">
            <div className="h-7 w-full bg-tertiary-fixed-dim rounded-t-sm"></div>
            <div className="h-5 w-full bg-tertiary-fixed-dim rounded-t-sm"></div>
            <div className="h-6 w-full bg-tertiary-fixed-dim rounded-t-sm"></div>
            <div className="h-8 w-full bg-tertiary-fixed-dim rounded-t-sm"></div>
            <div className="h-4 w-full bg-tertiary-fixed-dim rounded-t-sm"></div>
            <div className="h-3 w-full bg-tertiary-container rounded-t-sm"></div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-surface-container rounded-lg">
              <span className="material-symbols-outlined text-on-surface"
                data-icon="conversion_path">conversion_path</span>
            </div>
            <div className="flex items-center gap-1 text-secondary font-label-sm">
              <span className="material-symbols-outlined text-sm"
                data-icon="trending_up">trending_up</span>
              0.5%
            </div>
          </div>
          <div>
            <p className="text-body-sm text-on-surface-variant">Conversion Rate</p>
            <h3 className="text-h2 text-on-surface">3.42%</h3>
          </div>
          <div className="h-8 w-full bg-slate-50 rounded flex items-end px-1 gap-1">
            <div className="h-3 w-full bg-on-primary-container rounded-t-sm"></div>
            <div className="h-4 w-full bg-on-primary-container rounded-t-sm"></div>
            <div className="h-6 w-full bg-on-primary-container rounded-t-sm"></div>
            <div className="h-5 w-full bg-on-primary-container rounded-t-sm"></div>
            <div className="h-7 w-full bg-on-primary-container rounded-t-sm"></div>
            <div className="h-8 w-full bg-primary-container rounded-t-sm"></div>
          </div>
        </div>
      </div>

      <div
        className="bg-white p-8 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-h3 text-on-surface">Revenue vs. Orders Volume</h3>
            <p className="text-body-sm text-on-surface-variant">Correlation between
              total earnings and order counts over time.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="text-label-sm text-on-surface-variant">Revenue
                ($)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span className="text-label-sm text-on-surface-variant">Orders
                (Qty)</span>
            </div>
          </div>
        </div>
        <div className="relative h-80 w-full flex items-end gap-1">

          <div className="absolute inset-0 grid grid-rows-4">
            <div className="border-t border-slate-50"></div>
            <div className="border-t border-slate-50"></div>
            <div className="border-t border-slate-50"></div>
            <div className="border-t border-slate-100"></div>
          </div>

          <div className="relative flex-1 h-full flex items-end justify-center group">
            <div
              className="w-12 bg-secondary/20 rounded-t-lg h-[40%] absolute bottom-0">
            </div>
            <div className="w-4 bg-primary rounded-t-lg h-[65%] z-10"></div>
            <span
              className="absolute -bottom-6 text-[10px] text-on-surface-variant font-bold uppercase">Jan</span>
          </div>
          <div className="relative flex-1 h-full flex items-end justify-center group">
            <div
              className="w-12 bg-secondary/20 rounded-t-lg h-[45%] absolute bottom-0">
            </div>
            <div className="w-4 bg-primary rounded-t-lg h-[72%] z-10"></div>
            <span
              className="absolute -bottom-6 text-[10px] text-on-surface-variant font-bold uppercase">Feb</span>
          </div>
          <div className="relative flex-1 h-full flex items-end justify-center group">
            <div
              className="w-12 bg-secondary/20 rounded-t-lg h-[55%] absolute bottom-0">
            </div>
            <div className="w-4 bg-primary rounded-t-lg h-[85%] z-10"></div>
            <span
              className="absolute -bottom-6 text-[10px] text-on-surface-variant font-bold uppercase">Mar</span>
          </div>
          <div className="relative flex-1 h-full flex items-end justify-center group">
            <div
              className="w-12 bg-secondary/20 rounded-t-lg h-[50%] absolute bottom-0">
            </div>
            <div className="w-4 bg-primary rounded-t-lg h-[60%] z-10"></div>
            <span
              className="absolute -bottom-6 text-[10px] text-on-surface-variant font-bold uppercase">Apr</span>
          </div>
          <div className="relative flex-1 h-full flex items-end justify-center group">
            <div
              className="w-12 bg-secondary/20 rounded-t-lg h-[65%] absolute bottom-0">
            </div>
            <div className="w-4 bg-primary rounded-t-lg h-[92%] z-10"></div>
            <span
              className="absolute -bottom-6 text-[10px] text-on-surface-variant font-bold uppercase">May</span>
          </div>
          <div className="relative flex-1 h-full flex items-end justify-center group">
            <div
              className="w-12 bg-secondary/20 rounded-t-lg h-[48%] absolute bottom-0">
            </div>
            <div className="w-4 bg-primary rounded-t-lg h-[78%] z-10"></div>
            <span
              className="absolute -bottom-6 text-[10px] text-on-surface-variant font-bold uppercase">Jun</span>
          </div>
          <div className="relative flex-1 h-full flex items-end justify-center group">
            <div
              className="w-12 bg-secondary/20 rounded-t-lg h-[70%] absolute bottom-0">
            </div>
            <div className="w-4 bg-primary rounded-t-lg h-[95%] z-10"></div>
            <span
              className="absolute -bottom-6 text-[10px] text-on-surface-variant font-bold uppercase">Jul</span>
          </div>
          <div className="relative flex-1 h-full flex items-end justify-center group">
            <div
              className="w-12 bg-secondary/20 rounded-t-lg h-[62%] absolute bottom-0">
            </div>
            <div className="w-4 bg-primary rounded-t-lg h-[82%] z-10"></div>
            <span
              className="absolute -bottom-6 text-[10px] text-on-surface-variant font-bold uppercase">Aug</span>
          </div>
          <div className="relative flex-1 h-full flex items-end justify-center group">
            <div
              className="w-12 bg-secondary/20 rounded-t-lg h-[55%] absolute bottom-0">
            </div>
            <div className="w-4 bg-primary rounded-t-lg h-[70%] z-10"></div>
            <span
              className="absolute -bottom-6 text-[10px] text-on-surface-variant font-bold uppercase">Sep</span>
          </div>
          <div className="relative flex-1 h-full flex items-end justify-center group">
            <div
              className="w-12 bg-secondary/20 rounded-t-lg h-[75%] absolute bottom-0">
            </div>
            <div className="w-4 bg-primary rounded-t-lg h-[88%] z-10"></div>
            <span
              className="absolute -bottom-6 text-[10px] text-on-surface-variant font-bold uppercase">Oct</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div
          className="lg:col-span-1 bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col">
          <h3 className="text-h3 text-on-surface mb-1">Sales by Category</h3>
          <p className="text-body-sm text-on-surface-variant mb-8">Revenue distribution across
            product lines.</p>
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            <div
              className="relative w-48 h-48 rounded-full border-[16px] border-slate-100 flex items-center justify-center">
              <div className="absolute inset-[-16px] rounded-full border-[16px] border-primary"
                style={{
                  clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)"
                }}>
              </div>
              <div className="absolute inset-[-16px] rounded-full border-[16px] border-secondary"
                style={{clipPath: "polygon(50% 50%, 0% 100%, 50% 100%)"}}>
              </div>
              <div className="text-center">
                <p className="text-h2 text-on-surface">58%</p>
                <p
                  className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
                  Main Share</p>
              </div>
            </div>
            <div className="w-full space-y-3">
              <div className="flex justify-between items-center text-body-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full bg-primary"></span>
                  Electronics
                </div>
                <span className="font-bold text-on-surface">$72.2k</span>
              </div>
              <div className="flex justify-between items-center text-body-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full bg-secondary"></span>
                  Fashion
                </div>
                <span className="font-bold text-on-surface">$28.4k</span>
              </div>
              <div className="flex justify-between items-center text-body-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                  Home &amp; Living
                </div>
                <span className="font-bold text-on-surface">$14.1k</span>
              </div>
              <div className="flex justify-between items-center text-body-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full bg-slate-200"></span>
                  Others
                </div>
                <span className="font-bold text-on-surface">$9.8k</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="lg:col-span-2 bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-h3 text-on-surface">Top Performing Products</h3>
              <p className="text-body-sm text-on-surface-variant">Products with
                the highest contribution to revenue.</p>
            </div>
            <button className="text-primary text-label-md hover:underline">View All
              Products</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-slate-100">
                <tr>
                  <th
                    className="py-4 font-label-sm text-on-primary-container uppercase tracking-wider">
                    Product Name</th>
                  <th
                    className="py-4 font-label-sm text-on-primary-container uppercase tracking-wider">
                    Sales Vol.</th>
                  <th
                    className="py-4 font-label-sm text-on-primary-container uppercase tracking-wider">
                    Revenue</th>
                  <th
                    className="py-4 font-label-sm text-on-primary-container uppercase tracking-wider">
                    Conversion</th>
                  <th
                    className="py-4 font-label-sm text-on-primary-container uppercase tracking-wider">
                    Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                        <img alt="Premium Headphones"
                          className="w-full h-full object-cover"
                          data-alt="A pair of premium noise-canceling headphones in matte black, placed on a minimalist wooden desk. The background is a brightly lit, modern studio setting with clean lines and soft shadows, reflecting a high-end light-mode aesthetic. The composition is professional, highlighting the product's sleek design and texture."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEvKwPphnF-urot7RABgTey8E2GHby3AH7-fQb4xZiUcsSue1lTOn1sLLSFAxCmugkix1kh3DUw8Hd6D1JMhdeyh0Z9wQe9RvVoQbmeS4cffBN_kRkZl2uXSj7OpbsTLBpSMGCOUyb64QCcelCtvNdM9T6dQx3qjMNB8v9pxN7w791X85J2E2ShN1Km6iDm9qqolxnp6XNNLxKI-zX26dN0kFBPbbu_hkIE6kAbQGVEg4hR0eo5rRBi-BPQQ4nuETSz09R3K58mZzK" />
                      </div>
                      <div>
                        <p
                          className="text-body-md font-bold text-on-surface">
                          Pro Audio
                          Headphones</p>
                        <p
                          className="text-[10px] text-on-surface-variant font-medium">
                          SKU: AUD-PRO-01
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-body-md text-on-surface">
                    1,248 units</td>
                  <td
                    className="py-4 text-body-md font-bold text-on-surface">
                    $42,432.00</td>
                  <td className="py-4 text-body-md text-on-surface">
                    4.8%</td>
                  <td className="py-4 text-secondary">
                    <span className="material-symbols-outlined"
                      data-icon="trending_up">trending_up</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                        <img alt="Smart Watch X"
                          className="w-full h-full object-cover"
                          data-alt="A luxury analog wristwatch with a silver metal band and a deep blue dial, shown against a bright and clean marble surface. The lighting is diffused and bright, creating a premium light-mode feeling. The image is crisp, emphasizing the fine craftsmanship and high-end materials of the product."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK07R2qYFaJOf10S69v2ocrwAgLRYSvzjYPMUSa9jTwXfq55mKb4lJk9zXvLbkw_9TJCoEVshOuIPUOOqmV6otPgjof-Uvqb8jd2m3b2vG1PxOC8v1hFAb8wyw229hcTN1-hvbEc8dshiWxGM4riwTS_yiLsqX0OG9ZlRj5rXLhbgb8iwGsMuI111uQpVIeGuAIhXd7zLxqZNCcK2uleq1XffVnqHeWnMnS6uX0Dj-5uA99pTYBZLARQhWiDM0j9mxF4tREQXDDd1u" />
                      </div>
                      <div>
                        <p
                          className="text-body-md font-bold text-on-surface">
                          Minimalist
                          Wristwatch</p>
                        <p
                          className="text-[10px] text-on-surface-variant font-medium">
                          SKU: WCH-MIN-02
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-body-md text-on-surface">
                    856 units</td>
                  <td
                    className="py-4 text-body-md font-bold text-on-surface">
                    $28,248.00</td>
                  <td className="py-4 text-body-md text-on-surface">
                    3.2%</td>
                  <td className="py-4 text-secondary">
                    <span className="material-symbols-outlined"
                      data-icon="trending_up">trending_up</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                        <img alt="Running Shoes"
                          className="w-full h-full object-cover"
                          data-alt="A pair of bright red athletic running shoes positioned on a white reflective platform. The scene is illuminated with high-key studio lighting, creating a vibrant and clean look. The background is a subtle gradient of light grays, ensuring the products pop with energy and modern style."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3u2Zuj21jtI3paoHJp8B9p6BmQWTjAc9m-Wr68wqGXxyssDIyDKr731sACOdjKdNYv8fwj5E4bzj1poh6FHwjYtxAB0ogksZtwiJ-tqq1FiW3eVa06_d9Y-IXhChLAdhZL5YABRbD-K_QvdI0ecOMSG11E_QLM9sPmG2i0K-NbaVxZs7en6GxAxS5oyR9P4xixB32Qdf_t3v5G7_H7y6H1jWZlD0P-IEnCU-4g0AYWTRnF3uG1DSAnN1uLudD4ocEftUtM_crjiwj" />
                      </div>
                      <div>
                        <p
                          className="text-body-md font-bold text-on-surface">
                          Velocity Runners
                        </p>
                        <p
                          className="text-[10px] text-on-surface-variant font-medium">
                          SKU: SHO-VEL-09
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-body-md text-on-surface">
                    612 units</td>
                  <td
                    className="py-4 text-body-md font-bold text-on-surface">
                    $12,240.00</td>
                  <td className="py-4 text-body-md text-on-surface">
                    2.1%</td>
                  <td className="py-4 text-error">
                    <span className="material-symbols-outlined"
                      data-icon="trending_down">trending_down</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                        <img alt="Polaroid Camera"
                          className="w-full h-full object-cover"
                          data-alt="A modern instant film camera in a soft pastel blue shade, sitting on a clean white surface with a minimalist aesthetic. The image is captured with soft focus and bright, airy lighting, embodying a trendy and modern corporate creative style. The colors are muted yet distinct, perfect for a high-end UI layout."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcWMH52v30Lj-H_cv3FjowJhISt95c6ByJbAT7OFtBKb9j5eE-s1rBreKwztDHJa0rHKd8_St0mFGkwkiAh9txfwaEGaGFExfnUrCSNGN3fs76FRrZMjxvlCPAfJ8-0KdY8DghpTxCYbIeunLxR9Alx-Ck1PvBVhBp1dps94o6MLDG7Z2o0073wZ-54l2GPnjws2D-pUCtZgszOkzVzG5CLAoD5DZQRyfia3ipldAvLOAySjKl_8jIN399cN4t4Piwkl70FJKzYcG9" />
                      </div>
                      <div>
                        <p
                          className="text-body-md font-bold text-on-surface">
                          Neo Instant
                          Camera</p>
                        <p
                          className="text-[10px] text-on-surface-variant font-medium">
                          SKU: CAM-NEO-04
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-body-md text-on-surface">
                    432 units</td>
                  <td
                    className="py-4 text-body-md font-bold text-on-surface">
                    $8,640.00</td>
                  <td className="py-4 text-body-md text-on-surface">
                    5.5%</td>
                  <td className="py-4 text-secondary">
                    <span className="material-symbols-outlined"
                      data-icon="trending_up">trending_up</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Analytics