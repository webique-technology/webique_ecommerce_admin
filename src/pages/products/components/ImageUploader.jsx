import { useRef } from "react";

export default function ImageUploader({

    thumbnail,

    preview,

    setPreview,

    setForm,

}) {

    const inputRef = useRef(null);

    /*
    |--------------------------------------------------------------------------
    | Choose Image
    |--------------------------------------------------------------------------
    */

    const handleFile = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setForm((prev) => ({

            ...prev,

            thumbnail: file,

        }));

        setPreview(URL.createObjectURL(file));

    };

    /*
    |--------------------------------------------------------------------------
    | Remove Image
    |--------------------------------------------------------------------------
    */

    const removeImage = () => {

        setForm((prev) => ({

            ...prev,

            thumbnail: null,

        }));

        setPreview(null);

        if (inputRef.current) {

            inputRef.current.value = "";

        }

    };

    return (

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

            <h2 className="text-lg font-semibold mb-6">

                Product Thumbnail

            </h2>

            <input

                ref={inputRef}

                type="file"

                accept="image/*"

                onChange={handleFile}

                className="hidden"

            />

            {

                preview ? (

                    <div>

                        <img

                            src={preview}

                            alt="Thumbnail"

                            className="w-52 h-52 object-cover rounded-xl border"

                        />

                        <div className="flex gap-3 mt-4">

                            <button

                                type="button"

                                onClick={() => inputRef.current.click()}

                                className="px-4 py-2 rounded-lg bg-blue-600 text-white"

                            >

                                Replace

                            </button>

                            <button

                                type="button"

                                onClick={removeImage}

                                className="px-4 py-2 rounded-lg bg-red-600 text-white"

                            >

                                Remove

                            </button>

                        </div>

                    </div>

                ) : (

                    <div

                        onClick={() => inputRef.current.click()}

                        className="cursor-pointer border-2 border-dashed border-slate-300 rounded-xl h-56 flex flex-col justify-center items-center hover:border-blue-500 transition"

                    >

                        <span className="material-symbols-outlined text-5xl text-slate-400">

                            image

                        </span>

                        <p className="mt-3 text-slate-600">

                            Click to Upload Thumbnail

                        </p>

                        <p className="text-xs text-slate-400 mt-1">

                            JPG, PNG, WEBP

                        </p>

                    </div>

                )

            }

        </div>

    );

}