import React from 'react'

const Settings = () => {
  return (
    <main className="p-8 space-y-8">
                <div className="w-full mx-auto">
                     
                        <div className="flex items-end justify-between mb-lg">
                                <div>
                                        <h2 className="font-h1 text-h1 text-primary">Settings</h2>
                                        <p className="text-body-lg text-on-surface-variant mt-1">Manage your store's global
                                                configuration and preferences.</p>
                                </div>
                                <div className="flex items-center gap-md">
                                        <button
                                                className="px-md py-sm border border-outline-variant rounded-xl font-label-md text-on-surface hover:bg-surface-container-low transition-colors">Discard
                                                changes</button>
                                        <button
                                                className="px-md py-sm bg-primary text-on-primary rounded-xl font-label-md hover:opacity-90 transition-opacity shadow-lg shadow-primary/10">Save
                                                Settings</button>
                                </div>
                        </div>
                        <div className="flex gap-xl">
                               
                                <aside className="w-64 flex-shrink-0">
                                        <nav className="space-y-sm">
                                                <a className="flex items-center gap-md px-md mt-2 py-sm rounded-xl bg-primary text-on-primary font-label-md shadow-md shadow-primary/5 transition-all"
                                                        href="#">
                                                        <span className="material-symbols-outlined text-md">store</span>
                                                        General
                                                </a>
                                                <a className="flex items-center gap-md px-md mt-2 py-sm rounded-xl text-on-surface-variant hover:bg-surface-container transition-all group"
                                                        href="#">
                                                        <span
                                                                className="material-symbols-outlined text-md text-outline">payments</span>
                                                        Payments
                                                </a>
                                                <a className="flex items-center gap-md px-md py-sm mt-2 rounded-xl text-on-surface-variant hover:bg-surface-container transition-all"
                                                        href="#">
                                                        <span
                                                                className="material-symbols-outlined text-md text-outline">local_shipping</span>
                                                        Shipping
                                                </a>
                                                <a className="flex items-center gap-md px-md py-sm mt-2 rounded-xl text-on-surface-variant hover:bg-surface-container transition-all"
                                                        href="#">
                                                        <span
                                                                className="material-symbols-outlined text-md text-outline">percent</span>
                                                        Taxes
                                                </a>
                                                <a className="flex items-center gap-md px-md py-sm mt-2 rounded-xl text-on-surface-variant hover:bg-surface-container transition-all"
                                                        href="#">
                                                        <span
                                                                className="material-symbols-outlined text-md text-outline">notifications_active</span>
                                                        Notifications
                                                </a>
                                                <a className="flex items-center gap-md px-md py-sm mt-2 rounded-xl text-on-surface-variant hover:bg-surface-container transition-all"
                                                        href="#">
                                                        <span
                                                                className="material-symbols-outlined text-md text-outline">api</span>
                                                        API &amp; Webhooks
                                                </a>
                                        </nav>
                                        <div
                                                className="mt-xl p-md bg-secondary-container/10 border border-secondary-container/20 rounded-xl">
                                                <div className="flex items-center gap-sm mb-xs">
                                                        <span
                                                                className="material-symbols-outlined text-secondary text-sm">bolt</span>
                                                        <p className="text-label-sm text-on-secondary-container">Pro Plan
                                                                Active</p>
                                                </div>
                                                <p className="text-body-sm text-on-surface-variant">Your current plan
                                                        expires in 24 days. Manage billing in <a
                                                                className="underline font-medium" href="#">Subscription</a>.
                                                </p>
                                        </div>
                                </aside>
                              
                                <div className="flex-1 space-y-lg">
                         
                                        <section
                                                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                                                <div
                                                        className="p-lg border-b border-slate-100 flex items-center justify-between">
                                                        <div>
                                                                <h3 className="font-h3 text-h3 text-primary">Store
                                                                        Information</h3>
                                                                <p className="text-body-sm text-on-surface-variant">Basic
                                                                        details about your online business.</p>
                                                        </div>
                                                        <span className="material-symbols-outlined text-outline">info</span>
                                                </div>
                                                <div className="p-lg grid grid-cols-2 gap-lg">
                                                        <div className="col-span-2 space-y-xs">
                                                                <label className="text-label-md text-on-surface">Store
                                                                        Name</label>
                                                                <input className="w-full mt-1 px-md py-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-body-md text-on-surface"
                                                                        type="text"
                                                                        value="Modern Lifestyle Collective" />
                                                        </div>
                                                        <div className="space-y-xs">
                                                                <label className="text-label-md text-on-surface">Support
                                                                        Email</label>
                                                                <input className="w-full mt-1 px-md py-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-body-md text-on-surface"
                                                                        type="email"
                                                                        value="support@lifestylecollective.co" />
                                                        </div>
                                                        <div className="space-y-xs">
                                                                <label className="text-label-md text-on-surface">Support
                                                                        Phone</label>
                                                                <input className="w-full mt-1 px-md py-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-body-md text-on-surface"
                                                                        type="tel" value="+1 (555) 234-5678" />
                                                        </div>
                                                </div>
                                        </section>
                                   
                                        <section
                                                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                                                <div className="p-lg border-b border-slate-100">
                                                        <h3 className="font-h3 text-h3 text-primary">Store Address</h3>
                                                        <p className="text-body-sm text-on-surface-variant">The legal
                                                                address of your business operations.</p>
                                                </div>
                                                <div className="p-lg space-y-lg">
                                                        <div className="space-y-xs">
                                                                <label className="text-label-md text-on-surface">Address
                                                                        Line 1</label>
                                                                <input className="w-full mt-1 px-md py-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-body-md text-on-surface"
                                                                        type="text" value="742 Evergreen Terrace" />
                                                        </div>
                                                        <div className="grid grid-cols-3 gap-md">
                                                                <div className="space-y-xs">
                                                                        <label
                                                                                className="text-label-md text-on-surface">City</label>
                                                                        <input className="w-full mt-1 px-md py-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-body-md text-on-surface"
                                                                                type="text" value="Springfield" />
                                                                </div>
                                                                <div className="space-y-xs">
                                                                        <label
                                                                                className="text-label-md text-on-surface">State/Province</label>
                                                                        <select
                                                                                className="w-full mt-1 px-md py-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-body-md text-on-surface">
                                                                                <option>Oregon</option>
                                                                                <option>California</option>
                                                                                <option>Washington</option>
                                                                        </select>
                                                                </div>
                                                                <div className="space-y-xs">
                                                                        <label className="text-label-md text-on-surface">Postal
                                                                                Code</label>
                                                                        <input className="w-full mt-1 px-md py-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all font-body-md text-on-surface"
                                                                                type="text" value="97401" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </section>
                                       
                                        <section
                                                className="bg-white mt-1 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                                                <div className="p-lg border-b border-slate-100">
                                                        <h3 className="font-h3 text-h3 text-primary">Localization</h3>
                                                        <p className="text-body-sm text-on-surface-variant">Define how your
                                                                store displays currency and time.</p>
                                                </div>
                                                <div className="p-lg grid grid-cols-2 gap-lg">
                                                        <div className="space-y-xs">
                                                                <label className="text-label-md text-on-surface">Store
                                                                        Currency</label>
                                                                <div className="relative">
                                                                        <select
                                                                                className="w-full mt-1 px-md py-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary appearance-none transition-all font-body-md text-on-surface">
                                                                                <option>USD ($) - US Dollar</option>
                                                                                <option>EUR (€) - Euro</option>
                                                                                <option>GBP (£) - British Pound</option>
                                                                        </select>
                                                                        <span
                                                                                className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">unfold_more</span>
                                                                </div>
                                                        </div>
                                                        <div className="space-y-xs">
                                                                <label
                                                                        className="text-label-md text-on-surface">Timezone</label>
                                                                <div className="relative">
                                                                        <select
                                                                                className="w-full mt-1 px-md py-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary appearance-none transition-all font-body-md text-on-surface">
                                                                                <option>(GMT-08:00) Pacific Time (US
                                                                                        &amp; Canada)</option>
                                                                                <option>(GMT-05:00) Eastern Time (US
                                                                                        &amp; Canada)</option>
                                                                                <option>(GMT+00:00) London</option>
                                                                        </select>
                                                                        <span
                                                                                className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">unfold_more</span>
                                                                </div>
                                                        </div>
                                                        <div className="space-y-xs">
                                                                <label className="text-label-md text-on-surface">Store
                                                                        Language</label>
                                                                <div className="relative">
                                                                        <select
                                                                                className="w-full mt-1 px-md py-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary appearance-none transition-all font-body-md text-on-surface">
                                                                                <option>English (US)</option>
                                                                                <option>Spanish</option>
                                                                                <option>French</option>
                                                                        </select>
                                                                        <span
                                                                                className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">unfold_more</span>
                                                                </div>
                                                        </div>
                                                        <div className="space-y-xs">
                                                                <label className="text-label-md text-on-surface">Weight
                                                                        Unit</label>
                                                                <div className="flex gap-md mt-sm">
                                                                        <label
                                                                                className="flex items-center gap-sm cursor-pointer group">
                                                                                <input checked=""
                                                                                        className="w-5 h-5 mt-1 text-primary focus:ring-primary/20 border-outline-variant"
                                                                                        name="weight" type="radio" />
                                                                                <span
                                                                                        className="text-body-md text-on-surface">Kilograms
                                                                                        (kg)</span>
                                                                        </label>
                                                                        <label
                                                                                className="flex items-center gap-sm cursor-pointer group">
                                                                                <input className="w-5 h-5 mt-1 text-primary focus:ring-primary/20 border-outline-variant"
                                                                                        name="weight" type="radio" />
                                                                                <span
                                                                                        className="text-body-md text-on-surface">Pounds
                                                                                        (lb)</span>
                                                                        </label>
                                                                </div>
                                                        </div>
                                                </div>
                                        </section>
                                    
                                        <section
                                                className="bg-error-container/20 rounded-xl border border-error/20 overflow-hidden">
                                                <div className="p-lg flex items-center justify-between">
                                                        <div className="flex gap-md items-start">
                                                                <span
                                                                        className="material-symbols-outlined text-error mt-1">warning</span>
                                                                <div>
                                                                        <h3
                                                                                className="font-h3 text-h3 text-on-error-container">
                                                                                Deactivate Store</h3>
                                                                        <p
                                                                                className="text-body-sm text-on-error-container/70">
                                                                                Temporarily take your store offline.
                                                                                Customers will not be able to browse or
                                                                                purchase.</p>
                                                                </div>
                                                        </div>
                                                        <button
                                                                className="px-md py-sm bg-error text-on-error rounded-xl font-label-md hover:opacity-90 transition-opacity">Deactivate</button>
                                                </div>
                                        </section>
                                </div>
                        </div>
                </div>
        </main>
  )
}

export default Settings