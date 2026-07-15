import React from 'react'


export const FormHeading = ({
    icon,
    title,
    className = "",
}) => {
    return (
        <div
            className={`flex items-center gap-3 mb-6 ${className}`}
        >
            <div className="p-2 bg-slate-50 rounded-lg">
                <span className="material-symbols-outlined text-primary">
                    {icon}
                </span>
            </div>

            <h2 className="font-title-sm text-title-sm text-primary">
                {title}
            </h2>
        </div>
    );
};

export const SectionLabel = ({
    label,
    className = "",
}) => {
    return (
        <label
            className={`block font-label-caps text-label-caps text-on-surface-variant mb-4 ${className}`}
        >
            {label}
        </label>
    );
};

export const InputFields = ({ label, className, labelClass, inputClass, type, error, errorClass, placeholder, value, onChange, name }) => {
    return (
        <div className={className}>
            <label className={labelClass}>{label}</label>
            <input type={type} className={inputClass} placeholder={placeholder} value={value} onChange={onChange} name={name} />
            {error && (
                <span className={`error ${errorClass}`}>{error}</span>
            )}
        </div>
    )
}

export const LowStockAlertField = ({
    label,
    className,
    labelClass,
    inputClass,
    type = "number",
    placeholder,
    value,
    onChange,
    name,
    suffix = "units remaining",
    error,
    errorClass,
}) => {
    return (
        <div className={className}>
            <label className={labelClass}>{label}</label>

            <div className="flex items-center gap-3">
                <input
                    type={type}
                    className={inputClass}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                />

                <span className="text-xs text-slate-500">
                    {suffix}
                </span>
            </div>

            {error && (
                <span className={`error ${errorClass}`}>
                    {error}
                </span>
            )}
        </div>
    );
};

export const TextareaFields = ({
    label,
    className,
    labelClass,
    textareaClass,
    error,
    errorClass,
    placeholder,
    value,
    onChange,
    rows = 5,
    name,
}) => {
    return (
        <div className={className}>
            <label className={labelClass}>
                {label}
            </label>

            <textarea
                name={name}
                rows={rows}
                className={textareaClass}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

            {error && (
                <span className={`error ${errorClass}`}>
                    {error}
                </span>
            )}
        </div>
    );
};



const Button = ({
    label,
    onClick,
    className = "",
    type = "button",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200 ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;



export const SelectField = ({
    label,
    name,
    value,
    onChange,
    options = [],
    placeholder = "Select Option",
    className = "",
    labelClass = "",
    selectClass = "",
    error,
    errorClass = "",
}) => {
    return (
        <div className={className}>
            {label && (
                <label className={labelClass}>
                    {label}
                </label>
            )}

            <select
                name={name}
                value={value}
                onChange={onChange}
                options={[
                    "Active",
                    "Inactive",
                    "Draft",
                ]}
                className={selectClass}
            >
                <option value="">
                    {placeholder}
                </option>

                {options.map((option, index) => (
                    <option
                        key={index}
                        value={
                            typeof option === "object"
                                ? option.value
                                : option
                        }
                    >
                        {typeof option === "object"
                            ? option.label
                            : option}
                    </option>
                ))}
            </select>

            {error && (
                <span className={`error ${errorClass}`}>
                    {error}
                </span>
            )}
        </div>
    );
};


export const DisabledField = ({
    label,
    value,
    className = "",
    labelClass = "",
    inputClass = "",
}) => {
    return (
        <div className={className}>
            {label && (
                <label className={labelClass}>
                    {label}
                </label>
            )}

            <div
                className={`flex items-center gap-3 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg ${inputClass}`}
            >
                <span className="material-symbols-outlined text-slate-500">
                    lock
                </span>

                <span className="text-slate-500">
                    {value}
                </span>
            </div>
        </div>
    );
};


export const CheckboxField = ({
    label,
    name,
    checked,
    onChange,
    className = "",
    labelClass = "",
    checkboxClass = "",
    error,
    labelId,
    errorClass = "",
}) => {
    return (
        <div className={className}>
            <label
                className={`flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors group ${labelClass}`}
            >
                <input
                    type="checkbox"
                    name={name}
                    checked={checked ?? false}
                    onChange={onChange}
                    className={checkboxClass}
                />

                <span>{label}</span>
            </label>

            {error && (
                <span className={`error ${errorClass}`}>
                    {error}
                </span>
            )}
        </div>
    );
};


export const RadioField = ({
    label,
    name,
    value,
    checked,
    onChange,
    className = "",
    labelClass = "",
    radioClass = "",
    error,
    errorClass = "",
}) => {
    return (
        <div className={className}>
            <label
                className={labelClass}
            >
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked ?? false}
                    onChange={onChange}
                    className={radioClass}
                />

                <span>{label}</span>
            </label>

            {error && (
                <span className={`error ${errorClass}`}>
                    {error}
                </span>
            )}
        </div>
    );
};
