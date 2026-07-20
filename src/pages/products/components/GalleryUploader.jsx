import { useRef } from "react";

export default function GalleryUploader({

    images,

    setImages,

    setForm,
    errors = {}

}) {

    const inputRef = useRef(null);

    /*
    |--------------------------------------------------------------------------
    | Upload Images
    |--------------------------------------------------------------------------
    */

    const handleFiles = (e) => {

        const files = Array.from(e.target.files);

        if (!files.length) return;

        const previewImages = files.map(file => ({

            file,

            preview: URL.createObjectURL(file),

        }));

        setImages(prev => [

            ...prev,

            ...previewImages,

        ]);

        setForm(prev => ({

            ...prev,

            gallery_images: [

                ...(prev.gallery_images || []),

                ...files,

            ],

        }));

        inputRef.current.value = "";

    };

    /*
    |--------------------------------------------------------------------------
    | Remove Image
    |--------------------------------------------------------------------------
    */

    const removeImage = (index) => {

        setImages(prev =>
            prev.filter((_, i) => i !== index)
        );

        setForm(prev => ({

            ...prev,

            gallery_images: prev.gallery_images.filter(
                (_, i) => i !== index
            ),

        }));

    };

    return (

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-lg font-semibold">

                    Gallery Images

                </h2>

                <button

                    type="button"

                    onClick={() => inputRef.current.click()}

                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"

                >

                    Add Images

                </button>

            </div>

            <input

                ref={inputRef}

                type="file"

                multiple

                accept="image/*"

                onChange={handleFiles}

                className="hidden"

            />

            {

                images.length === 0 ? (

                    <div className="border-2 border-dashed border-slate-300 rounded-xl h-52 flex items-center justify-center text-slate-400">

                        No Gallery Images

                    </div>

                ) : (

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">

                        {

                            images.map((image, index) => (

                                <div

                                    key={index}

                                    className="relative group"

                                >

                                    <img

                                        src={image.preview}

                                        alt=""

                                        className="w-full h-36 object-cover rounded-lg border"

                                    />

                                    <button

                                        type="button"

                                        onClick={() => removeImage(index)}

                                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-7 h-7 hidden group-hover:flex items-center justify-center"

                                    >

                                        ×

                                    </button>

                                </div>

                            ))

                        }

                    </div>

                )

            }
            {
                errors.gallery_images?.[0] && (

                    <p className="text-red-500 text-sm mt-2">

                        {errors.gallery_images[0]}

                    </p>

                )
            }

        </div>

    );

}