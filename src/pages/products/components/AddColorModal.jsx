import { useState, useEffect } from "react";
import Button, {
    InputFields,
} from "../../../components/ui/FormFields";

export default function AddColorModal({

    show,
    onClose,
    onSave,

}) {

    const [name, setName] = useState("");

    const [code, setCode] = useState("#000000");

    useEffect(() => {

        if (show) {

            setName("");

            setCode("#000000");

        }

    }, [show]);

    if (!show) return null;

    const handleSave = () => {

        if (!name.trim()) {

            return;

        }

        onSave({

            name: name.trim(),

            code,

        });


    };

    return (

        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">

            <div className="bg-white rounded-xl w-full max-w-md shadow-xl p-6">

                <h2 className="text-xl font-semibold mb-6">

                    Add New Color

                </h2>

                <InputFields

                    label="Color Name"

                    value={name}

                    onChange={(e) =>
                        setName(e.target.value)
                    }

                    placeholder="Crimson"

                    labelClass="block mb-2 font-medium"

                    inputClass="w-full border rounded-lg px-4 py-3"

                />

                <div className="mt-5">

                    <label className="block mb-2 font-medium">

                        Color

                    </label>

                    <div className="flex items-center gap-4">

                        <input

                            type="color"

                            value={code}

                            onChange={(e) =>
                                setCode(e.target.value)
                            }

                            className="w-16 h-12 border rounded cursor-pointer"

                        />

                        <span className="font-medium">

                            {code}

                        </span>

                    </div>

                </div>

                <div className="flex justify-end gap-3 mt-8">

                    <Button

                        type="button"

                        label="Cancel"

                        className="bg-white text-slate-700 border border-slate-300"

                        onClick={onClose}

                    />

                    <Button

                        type="button"

                        label="Save Color"

                        onClick={handleSave}

                    />

                </div>

            </div>

        </div>

    );

}