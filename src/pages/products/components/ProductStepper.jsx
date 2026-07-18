import {
    FiCheck,
} from "react-icons/fi";

const steps = [
    {
        id: 1,
        title: "Basic Information",
    },
    {
        id: 2,
        title: "Category & Attributes",
    },
    {
        id: 3,
        title: "Inventory",
    },
    {
        id: 4,
        title: "SEO & Publish",
    },
];

export default function ProductStepper({
    currentStep,
}) {

    return (

        <div className="bg-white rounded-xl shadow-sm border border-slate-200  px-6 py-2">

            <div className="flex items-center justify-between">

                {steps.map((step, index) => {

                    const completed = currentStep > step.id;

                    const active = currentStep === step.id;

                    return (

                        <div
                            key={step.id}
                            className="flex items-center flex-1"
                        >

                            <div className="flex flex-col items-center">

                                <div
                                    className={`
                                        w-8
                                        h-8
                                        rounded-full
                                        flex
                                        items-center
                                        justify-center
                                        text-sm
                                        font-semibold
                                        transition-all
                                        
                                        ${completed
                                            ? "bg-green-600 text-white"
                                            : active
                                                ? "bg-indigo-600 text-white"
                                                : "bg-slate-200 text-slate-600"
                                        }
                                    `}
                                >

                                    {completed ? (
                                        <FiCheck size={18} />
                                    ) : (
                                        step.id
                                    )}

                                </div>

                                <p
                                    className={`
                                        mt-1
                                        text-sm
                                        text-center
                                        font-medium

                                        ${active
                                            ? "text-indigo-600"
                                            : "text-slate-600"
                                        }
                                    `}
                                >
                                    {step.title}
                                </p>

                            </div>

                            {index !== steps.length - 1 && (

                                <div
                                    className={`
                                        flex-1
                                        h-[2px]
                                        mx-4
                                        
                                        ${completed
                                            ? "bg-green-600"
                                            : "bg-slate-300"
                                        }
                                    `}
                                />

                            )}

                        </div>

                    );

                })}

            </div>

        </div>

    );

}