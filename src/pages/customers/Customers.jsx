import React from 'react'

const Customers = () => {
  return (
    <div className='p-xl flex-1 flex flex-col gap-lg'>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
        <div>
          <h2 className="font-h1 text-h1 text-on-surface">Customers</h2>
          <p className="text-body-md font-body-md text-on-surface-variant">Manage and analyze your store's customer relationships.</p>
        </div>
        <button
          className="bg-primary text-on-primary font-label-md text-label-md px-lg py-md rounded-xl flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm">
          <span class="material-symbols-outlined text-[20px]"
            data-icon="person_add">person_add</span>
          New Customer
        </button>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-lg">
        <div
          className="col-span-1 p-lg bg-white rounded-xl shadow-[0_2px_2px_rgba(0,0,0,0.05)] border border-slate-100">
          <p
            className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
            Total Customers</p>
          <div className="flex items-baseline gap-2">
            <h2 className="font-h2 text-h2 text-primary">12,482</h2>
            <span className="text-secondary font-label-sm text-label-sm">+4.2%</span>
          </div>
        </div>
        <div
          className="col-span-1 p-lg bg-white rounded-xl shadow-[0_2px_2px_rgba(0,0,0,0.05)] border border-slate-100">
          <p
            className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
            Active Users</p>
          <div className="flex items-baseline gap-2">
            <h2 className="font-h2 text-h2 text-primary">3,105</h2>
            <span className="text-secondary font-label-sm text-label-sm">+1.8%</span>
          </div>
        </div>
        <div
          className="col-span-1 p-lg bg-white rounded-xl shadow-[0_2px_2px_rgba(0,0,0,0.05)] border border-slate-100">
          <p
            className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
            New Today</p>
          <div className="flex items-baseline gap-2">
            <h2 className="font-h2 text-h2 text-primary">84</h2>
            <span className="text-error font-label-sm text-label-sm">-12%</span>
          </div>
        </div>
        <div
          className="col-span-1 p-lg bg-white rounded-xl shadow-[0_2px_2px_rgba(0,0,0,0.05)] border border-slate-100">
          <p
            className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
            VIP Members</p>
          <div className="flex items-baseline gap-2">
            <h2 className="font-h2 text-h2 text-primary">512</h2>
            <span className="text-secondary font-label-sm text-label-sm">+0.5%</span>
          </div>
        </div>
      </section>
      <section
        className="bg-white p-md rounded-xl shadow-[0_2px_2px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-wrap items-center justify-between gap-md">
        <div class="flex flex-wrap items-center gap-md">
          <div class="relative min-w-[180px]">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg"
              data-icon="location_on">location_on</span>
            <select
              class="appearance-none w-full bg-surface-container-low border border-outline-variant rounded-xl pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option>All Locations</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>Canada</option>
            </select>
          </div>
          <div class="relative min-w-[180px]">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg"
              data-icon="filter_alt">filter_alt</span>
            <select
              class="appearance-none w-full bg-surface-container-low border border-outline-variant rounded-xl pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option>All Types</option>
              <option>New</option>
              <option>Returning</option>
              <option>VIP</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-sm">
          <button
            className="p-2 border border-outline-variant rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined"
              data-icon="file_download">file_download</span>
          </button>
          <button
            className="p-2 border border-outline-variant rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined" data-icon="refresh">refresh</span>
          </button>
        </div>
      </section>

      <section
        className="bg-white rounded-xl shadow-[0_2px_2px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low">
              <tr>
                <th
                  className="px-lg py-md border-b border-slate-200 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox" />
                    Customer
                  </div>
                </th>
                <th
                  className="px-lg py-md border-b border-slate-200 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Status</th>
                <th
                  className="px-lg py-md border-b border-slate-200 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Location</th>
                <th
                  className="px-lg py-md border-b border-slate-200 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">
                  Orders</th>
                <th
                  className="px-lg py-md border-b border-slate-200 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">
                  Total Spent</th>
                <th
                  className="px-lg py-md border-b border-slate-200 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Last Seen</th>
                <th className="px-lg py-md border-b border-slate-200"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">

              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox" />
                    <div
                      className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                      <img className="w-full h-full object-cover"
                        data-alt="A clean, vibrant profile portrait of a smiling woman in a professional attire. The lighting is bright and airy with a neutral white-gray studio background. The visual style is crisp and modern, matching a premium ecommerce CRM aesthetic with natural skin tones and a friendly, approachable mood."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdvNzH6lJwhvc9-kMyfU6tQe2ObIMOf6Z58qNmU9sm_vsGln53-Av7HIbC9u8UjhBpD24tU0yil80kosz6B1pnTvMEQ51KpCaKeIO3Fz1oWDZ9lDpGc1ictL6uCuDfp3sNI_OGAJ6f1bHaC6pp10WTeFL4EczIP1rm20NyR5nMJMdnY67dJM0xWU83HSlMDc6cSii5NL-akG61k1Mk-FIbdytLnGdI5zkWTQ6tcH4ryo-lF1VLR50w8JLLAnGI3V4KRqeFIzTLgYne" />
                    </div>
                    <div>
                      <p
                        className="font-label-md text-label-md text-on-surface">
                        Elena Rodriguez</p>
                      <p
                        className="text-body-sm text-on-surface-variant">
                        elena.r@example.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <span
                    className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[11px] font-bold uppercase tracking-tight">VIP</span>
                </td>
                <td className="px-lg py-md text-body-md text-on-surface-variant">
                  Madrid, Spain</td>
                <td
                  className="px-lg py-md text-body-md text-on-surface text-right font-medium">
                  42</td>
                <td
                  className="px-lg py-md text-body-md text-on-surface text-right font-bold">
                  $2,840.50</td>
                <td className="px-lg py-md text-body-sm text-on-surface-variant">2
                  hours ago</td>
                <td className="px-lg py-md text-right">
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                    data-icon="more_vert">more_vert</button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox" />
                    <div
                      className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                      <img className="w-full h-full object-cover"
                        data-alt="A professional headshot of a middle-aged male executive looking confident and friendly. High-quality corporate photography with soft natural window lighting. The background is a clean, minimalist architectural space with soft grays. The overall aesthetic is professional, sharp, and perfectly balanced for a modern SaaS administrative interface."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPIWsX838rUtLtBxAf2mYoqCv1gMzjseUCZ9UPfDkSd7jxCmbbiSVj5WzzZYH8Th8t4RSLGQo48eiGqYk3Oq7Y6qaOZkWPw6usiS3aXnSu82I3BW1cdQgs3e2aHoeJDFfm381CLgfDZd27zghsYujheJmGJRtYTzhqKbSNSRtrRC7gHhTNixam5OELX-Wy-AeGptUu99TlxO_SosKYq0gJKi5KcEWIaS6vj3QydpsmGUCLIyBV7cwGHWOLfxjlWtDZBwqHq0KFZHO8" />
                    </div>
                    <div>
                      <p
                        className="font-label-md text-label-md text-on-surface">
                        Marcus Thorne</p>
                      <p
                        className="text-body-sm text-on-surface-variant">
                        m.thorne@company.org</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <span
                    className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-[11px] font-bold uppercase tracking-tight">Returning</span>
                </td>
                <td className="px-lg py-md text-body-md text-on-surface-variant">
                  London, UK</td>
                <td
                  className="px-lg py-md text-body-md text-on-surface text-right font-medium">
                  15</td>
                <td
                  className="px-lg py-md text-body-md text-on-surface text-right font-bold">
                  $1,120.00</td>
                <td className="px-lg py-md text-body-sm text-on-surface-variant">
                  Yesterday, 4:20 PM</td>
                <td className="px-lg py-md text-right">
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                    data-icon="more_vert">more_vert</button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox" />
                    <div
                      className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                      <img className="w-full h-full object-cover"
                        data-alt="A portrait of a young female professional with a warm smile, featuring sharp focus and beautiful bokeh. The lighting is bright and uniform, suggesting a modern high-end office environment. The style is professional and realistic, using a neutral color palette that complements a clean, modern SaaS UI design."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUOGkAHT0iKsPP7--aLjdIcs4KHPveJz-69qodIEicdjdNuKIz6j4e0ptf6TWybj3LigINpRlhk1aP5xsXRAuZwHNdKH92O84_JYP9NBx8ex59dgBMoDesWac0pt3o_rX1A5ZCnGIqSJmF6GdFm2jrxdY3p2pzqbNZkDDMt_FTgjN-JR-m8rgKLpBqbifkEKQU1LC8sJsFBg08EM2mjqsiYuaLv0jce9UdxEoIv3uszwmdAhKPHpJS0vZ5IAb1jKfrOCc3OHPnxJ06" />
                    </div>
                    <div>
                      <p
                        className="font-label-md text-label-md text-on-surface">
                        Sarah Jenkins</p>
                      <p
                        className="text-body-sm text-on-surface-variant">
                        sjenk@webmail.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <span
                    className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-[11px] font-bold uppercase tracking-tight">New</span>
                </td>
                <td className="px-lg py-md text-body-md text-on-surface-variant">New
                  York, US</td>
                <td
                  className="px-lg py-md text-body-md text-on-surface text-right font-medium">
                  1</td>
                <td
                  className="px-lg py-md text-body-md text-on-surface text-right font-bold">
                  $45.99</td>
                <td className="px-lg py-md text-body-sm text-on-surface-variant">
                  Just now</td>
                <td className="px-lg py-md text-right">
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                    data-icon="more_vert">more_vert</button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox" />
                    <div
                      className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                      <img className="w-full h-full object-cover"
                        data-alt="Close-up headshot of a stylish professional man with a neat beard and a focused look. Professional studio lighting with a clean light blue background. The photography is sharp and high-resolution, evoking a sense of reliability and trust, specifically designed for a high-performance CRM management dashboard."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk0z7xLjIxL-x5zbg4MvwPqYjfea8smBAdJa8Y19kQRa857I2-KoWD7PHFTAEjRaQ5FxgwAuaW_ehzzgIrer_yO2Zd-BtcTsrT4GYdlf-w73di2P97e4kPzuC76-3FOMRy4JP569kHkEvsJ1CfRjnoyrt0NE6DbQsfz2eYyiDTi5RIz-toh-KoieNI4O8U28wxKHxu-Ou5hTMJngmmB9Zrxu4sg7_T-gVndPmlZfMC8XWuEUNNPT_x1KtVy_rwwbOpwbSpwUZ6dbHK" />
                    </div>
                    <div>
                      <p
                        className="font-label-md text-label-md text-on-surface">
                        David Chen</p>
                      <p
                        className="text-body-sm text-on-surface-variant">
                        d.chen@global-tech.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <span
                    className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[11px] font-bold uppercase tracking-tight">VIP</span>
                </td>
                <td className="px-lg py-md text-body-md text-on-surface-variant">
                  Toronto, Canada</td>
                <td
                  className="px-lg py-md text-body-md text-on-surface text-right font-medium">
                  89</td>
                <td
                  className="px-lg py-md text-body-md text-on-surface text-right font-bold">
                  $12,450.00</td>
                <td className="px-lg py-md text-body-sm text-on-surface-variant">5
                  mins ago</td>
                <td className="px-lg py-md text-right">
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                    data-icon="more_vert">more_vert</button>
                </td>
              </tr>

              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-lg py-md">
                  <div className="flex items-center gap-3">
                    <input className="rounded border-outline-variant text-primary focus:ring-primary"
                      type="checkbox" />
                    <div
                      className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                      <img className="w-full h-full object-cover"
                        data-alt="A portrait of an elegantly dressed professional woman with a calm and confident expression. Soft, warm natural light creates a premium feel against a minimalist, light-toned office interior. The high-end photographic style ensures clarity and a professional aesthetic suitable for a high-scale ecommerce admin panel customer list."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsDNxyYKtIKdgZ2oqKa-HMyL49rYU1OkxxQrH8LagSi9MruAdzeZoKKtuMuv-z6jeRqbAtdGEf7PJwoeRjMuW6QPz9LHoeNsYd-UHsvvdEgydHWvANslE5J5L5ozQ4o3ZnFGEM7wBXDcTU1VYrtZUsvPgYSnPuAaFyc2n5Zo1LhpMuTDfZRVPRxt9FffmQsJGEleK24Jw1wmDmphXJCX0opnWGgpPcrBPe7FR39HxYYrIgLHeOoepqaxb5rgTI-mZp_Cy-Bepp67f0" />
                    </div>
                    <div>
                      <p
                        className="font-label-md text-label-md text-on-surface">
                        Aria Vane</p>
                      <p
                        className="text-body-sm text-on-surface-variant">
                        aria@vanestudio.io</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <span
                    className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-[11px] font-bold uppercase tracking-tight">Returning</span>
                </td>
                <td className="px-lg py-md text-body-md text-on-surface-variant">
                  Paris, France</td>
                <td
                  className="px-lg py-md text-body-md text-on-surface text-right font-medium">
                  23</td>
                <td
                  className="px-lg py-md text-body-md text-on-surface text-right font-bold">
                  $3,150.75</td>
                <td className="px-lg py-md text-body-sm text-on-surface-variant">3
                  days ago</td>
                <td className="px-lg py-md text-right">
                  <button className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                    data-icon="more_vert">more_vert</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-lg flex items-center justify-between border-t border-slate-200">
          <p className="text-body-sm text-on-surface-variant">Showing <span
            className="font-bold text-on-surface">1-5</span> of <span
              className="font-bold text-on-surface">12,482</span> customers</p>
          <div className="flex items-center gap-1">
            <button
              className="p-2 border border-outline-variant rounded-lg text-on-surface-variant disabled:opacity-30 disabled:cursor-not-allowed">
              <span className="material-symbols-outlined"
                data-icon="chevron_left">chevron_left</span>
            </button>
            <button
              className="w-10 h-10 bg-primary text-on-primary rounded-lg font-label-md text-label-md">1</button>
            <button
              className="w-10 h-10 hover:bg-slate-50 text-on-surface rounded-lg font-label-md text-label-md">2</button>
            <button
              className="w-10 h-10 hover:bg-slate-50 text-on-surface rounded-lg font-label-md text-label-md">3</button>
            <span className="px-2 text-on-surface-variant">...</span>
            <button
              className="w-10 h-10 hover:bg-slate-50 text-on-surface rounded-lg font-label-md text-label-md">250</button>
            <button
              className="p-2 border border-outline-variant rounded-lg text-on-surface-variant">
              <span className="material-symbols-outlined"
                data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Customers