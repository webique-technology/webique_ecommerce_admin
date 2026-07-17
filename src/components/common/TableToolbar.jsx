import { FiPlus, FiRefreshCw, FiSearch } from "react-icons/fi";

export default function TableToolbar({
    title,
    description,

    search = "",
    onSearchChange,

    filters = [],

    onRefresh,

    addLabel,
    onAdd,
}) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6">

            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">

                <div>
                    <h1 className="text-2xl font-semibold text-slate-800">
                        {title}
                    </h1>

                    {description && (
                        <p className="text-sm text-slate-500 mt-1">
                            {description}
                        </p>
                    )}
                </div>

                {onAdd && (
                    <button
                        onClick={onAdd}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
                    >
                        <FiPlus size={18} />
                        {addLabel}
                    </button>
                )}
            </div>

            {/* Toolbar */}

            <div className="px-6 py-4 flex flex-wrap items-center gap-3">

                {/* Search */}

                <div className="relative min-w-[260px] flex-1">

                    <FiSearch
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) =>
                            onSearchChange(e.target.value)
                        }
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                </div>

                {/* Dynamic Filters */}

                {filters.map((filter) => (

                    <select
                        key={filter.key}
                        value={filter.value}
                        onChange={(e) =>
                            filter.onChange(e.target.value)
                        }
                        className="px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >

                        <option value="">
                            {filter.placeholder}
                        </option>

                        {filter.options.map((option) => (

                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>

                        ))}

                    </select>

                ))}

                {/* Refresh */}

                <button
                    onClick={onRefresh}
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
                >
                    <FiRefreshCw />

                    Refresh
                </button>

            </div>

        </div>
    );
}