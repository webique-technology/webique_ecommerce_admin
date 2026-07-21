import Button from "../../../components/ui/FormFields";

export default function ColorSwatchSelector({

    label,

    colors = [],

    selectedColors = [],

    onSelectionChange,

    onAddColor,

    onRemoveColor,

}) {

    return (

        <>

            <label className="block mb-3 font-medium">

                {label}

            </label>

            <div className="flex flex-wrap gap-4">

                {

                    colors.map((color, index) => {

                        const selected = selectedColors.includes(color);

                        return (

                            <div
                                key={index}
                                className="relative group flex flex-col items-center"
                            >

                                <label className="cursor-pointer">

                                    <input

                                        type="checkbox"

                                        className="hidden"

                                        checked={selected}

                                        onChange={(e) =>

                                            onSelectionChange(

                                                color,

                                                e.target.checked

                                            )

                                        }

                                    />

                                    <div

                                        className={`
                                            w-8
                                            h-8
                                            rounded-full
                                            border-4
                                            transition-all
                                            duration-200
                                            ${selected
                                                ? "border-primary scale-110 shadow-lg"
                                                : "border-slate-300"
                                            }
                                        `}

                                        style={{

                                            backgroundColor: color.code,

                                        }}

                                    />

                                </label>

                                <button

                                    type="button"

                                    onClick={() =>

                                        onRemoveColor(index)

                                    }

                                    className="absolute -top-2 -right-2 hidden group-hover:flex w-5 h-5 rounded-full bg-red-500 text-white items-center justify-center text-xs"

                                >

                                    ×

                                </button>

                                <p className="text-xs mt-2 text-center">

                                    {color.name}

                                </p>

                            </div>

                        );

                    })

                }

            </div>

            <Button

                type="button"

                label="+ Add Color"

                className="mt-5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"

                onClick={onAddColor}

            />

        </>

    );

}