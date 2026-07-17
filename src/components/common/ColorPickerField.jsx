import React from "react";
import { FiCheck } from "react-icons/fi";

const DEFAULT_COLORS = {
    Red: "#EF4444",
    Black: "#111827",
    White: "#FFFFFF",
    Blue: "#2563EB",
    Green: "#22C55E",
    Yellow: "#FACC15",
    Orange: "#F97316",
    Purple: "#9333EA",
    Pink: "#EC4899",
    Brown: "#8B5E3C",
    Grey: "#9CA3AF",
    Gray: "#9CA3AF",
};

export default function ColorPickerField({
    label,
    colors = [],
    value = [],
    onChange,
}) {

    const selected = Array.isArray(value) ? value : [];

    const toggleColor = (color) => {

        let values = [...selected];

        if (values.includes(color)) {

            values = values.filter((item) => item !== color);

        } else {

            values.push(color);

        }

        onChange(values);

    };

    return (

        <div>

            <label className="block mb-3 font-medium">

                {label}

            </label>

            <div className="flex flex-wrap gap-4">

                {colors.map((color) => {

                    const active = selected.includes(color);

                    return (

                        <button
                            type="button"
                            key={color}
                            onClick={() => toggleColor(color)}
                            className={`relative flex flex-col items-center gap-2 transition-all
                                ${active ? "scale-105" : "hover:scale-105"}`}
                        >

                            <div
                                className={`w-11 h-11 rounded-full border-2 flex items-center justify-center
                                    ${active
                                        ? "border-blue-600"
                                        : "border-slate-300"
                                    }`}
                                style={{
                                    backgroundColor:
                                        DEFAULT_COLORS[color] ||
                                        "#CBD5E1",
                                }}
                            >

                                {active && (
                                    <FiCheck
                                        className={`text-lg ${color === "White"
                                                ? "text-black"
                                                : "text-white"
                                            }`}
                                    />
                                )}

                            </div>

                            <span className="text-sm text-slate-700">

                                {color}

                            </span>

                        </button>

                    );

                })}

            </div>

        </div>

    );

}