import React, { useEffect, useRef, useState } from "react";
import imagePlacehloder from '../../assets/images/image-placeholder.svg';
import { useParams } from "react-router-dom";
import {
  FiUpload,
  FiImage,
  FiTrash2,
  FiX
} from "react-icons/fi";
import { CheckboxField, DisabledField, FormHeading, InputFields, LowStockAlertField, RadioField, SectionLabel, SelectField, TextareaFields } from "../../components/ui/FormFields";
const AddCatagories = ({
  onSave,
  womenWearProducts,
  onCancel,
}) => {
  const [step, setStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);


  const ageGroups = ["0-24m", "2-4y", "5-7y", "8-12y"];

  const [formData, setFormData] = useState({
    id: null,
    product: "",
    subProduct: "",
    category: "",
    subCategory: "",
    weight: "",
    lenght: "",
    width: "",
    height: "",
    shippingCharge: "",
    gender: "",
    price: "",
    discountPrice: "",
    taxInc: "",
    gst: "",
    maxStock: "",
    minStock: "",
    stock: "",
    status: "Active",
    images: [],
    brand: "",
    sku: "",
    ageGroup: "",
    taxRate: "",

    sizes: [], // add this
  });

  const taxOptions = [
    "Reduced VAT (5%)",
    "Standard VAT (15%)",
    "Zero VAT (0%)",
  ];

  const subCategoryMap = {
    "Ethnic Wear": [
      "Women's Kurtis",
      "Suit Sets",
      "Anarkali Suits",
    ],
    "Western Wear": [
      "Crop Tops",
      "Skirts",
      "Co-ord Sets",
    ],
    "Bridal Wear": [
      "Wedding Collection",
    ],
    "Bottom Wear": [
      "Palazzos",
      "Leggings",
    ],
    "Accessories": [
      "Dupattas",
    ],
  };

  const genderOptions = [
    { label: "Boys", value: "boys" },
    { label: "Girls", value: "girls" },
  ];

  const handleEdit = (product) => {
    setFormData(product);
    setShowModal(true);
  };
  const uploadRef = useRef(null);
  const { id } = useParams();
  const editProduct = womenWearProducts.find(
    (item) => item.id === Number(id)
  );
  // bind edit data to inputs
  useEffect(() => {
    if (editProduct) {
      setFormData(editProduct);
    }
  }, [editProduct]);

  useEffect(() => {
    if (editProduct) {
      setFormData(editProduct);
    }
  }, [editProduct]);

  const allSubCategories = Object.values(subCategoryMap).flat();

  const handleRemoveImage = (indexToRemove) => {
    const updatedImages = formData.images.filter(
      (_, index) => index !== indexToRemove
    );

    setFormData((prev) => ({
      ...prev,
      images: updatedImages,
    }));

    // reset selected image
    if (selectedImage >= updatedImages.length) {
      setSelectedImage(0);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) =>
      URL.createObjectURL(file)
    );

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...imageUrls],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setFormData({
        ...formData,
        category: value,
        subCategory: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }


  };

  // add/update product
  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="w-full ">
      {/* heading */}
      {/* <div className="mb-lg">
        <nav className="flex items-center gap-2 text-label-sm text-on-surface-variant mb-2">
          <span>Products</span>

          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>

          <span className="text-on-surface font-semibold">
            Add New Product
          </span>
        </nav>

        <h2 className="font-h1 text-h1 text-on-surface">
          {editProduct ? "Update Product" : "Add New Product"}
        </h2>
      </div> */}

      {/* steps */}
      <div className="bg-white px-8 pt-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto flex gap-12">

          {/* Step 1 */}
          <div
            className={`flex flex-col gap-2 pb-4 border-b-2 ${step === 1 ? "border-black" : "border-transparent"
              }`}
          >
            <div
              className={`uppercase text-xs ${step >= 1 ? "text-black" : "text-slate-400"
                }`}
            >
              Step 1
            </div>

            <span
              className={`font-title-sm text-sm font-bold ${step >= 1 ? "text-black" : "text-slate-400"
                }`}
            >
              Basic Info
            </span>
          </div>

          {/* Step 2 */}
          <div
            className={`flex flex-col gap-2 pb-4 border-b-2 ${step === 2 ? "border-black" : "border-transparent"
              }`}
          >
            <div
              className={`uppercase text-xs ${step >= 2 ? "text-black" : "text-slate-400"
                }`}
            >
              Step 2
            </div>

            <span
              className={`font-title-sm text-sm font-bold ${step >= 2 ? "text-black" : "text-slate-400"
                }`}
            >
              Pricing & Inventory
            </span>
          </div>

          {/* Step 3 */}
          <div
            className={`flex flex-col gap-2 pb-4 border-b-2 ${step === 3 ? "border-black" : "border-transparent"
              }`}
          >
            <div
              className={`uppercase text-xs ${step >= 3 ? "text-black" : "text-slate-400"
                }`}
            >
              Step 3
            </div>

            <span
              className={`font-title-sm text-sm font-bold ${step >= 3 ? "text-black" : "text-slate-400"
                }`}
            >
              Images & Media
            </span>
          </div>

          {/* Step 4 */}
          <div
            className={`flex flex-col gap-2 pb-4 border-b-2 ${step === 4 ? "border-black" : "border-transparent"
              }`}
          >
            <div
              className={`uppercase text-xs ${step >= 4 ? "text-black" : "text-slate-400"
                }`}
            >
              Step 4
            </div>

            <span
              className={`font-title-sm text-sm font-bold ${step >= 4 ? "text-black" : "text-slate-400"
                }`}
            >
              SEO & Tags
            </span>
          </div>

        </div>
      </div>

      <div className="flex-1 p-gutter max-w-6xl w-full mx-auto space-y-8 animate-in fade-in duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
          {/* left */}

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="lg:col-span-8 space-y-lg">
                <section className="bg-white rounded-xl ambient-shadow p-lg border border-outline-variant/30">
                  <FormHeading
                    icon="Description"
                    title="Product Details"
                  />

                  <div className="space-y-md">


                    <InputFields
                      className={`flex flex-col gap-2`}
                      label="product name"
                      name="product"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.product}
                      placeholder="Product Name"
                      inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />

                    <InputFields
                      className={`flex flex-col`}
                      label="Category"
                      name="category"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.category}
                      placeholder="Product Name"
                      inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />

                    <InputFields
                      className={`flex flex-col`}
                      label="Brand"
                      name="brand"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.brand}
                      placeholder="Product Name"
                      inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />

                    <InputFields
                      className={`flex flex-col`}
                      label="sku"
                      name="sku"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.sku}
                      placeholder="sku"
                      inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />

                    {/* 
                    <InputFields 
                    className={`flex flex-col gap-2`}
                    label="Sub Product" 
                    labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                    type="text" onChange={handleChange} 
                    value={formData.subProduct} 
                    placeholder="Sub Product" 
                    inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    /> */}


                    <TextareaFields
                      className={`flex flex-col gap-2`}
                      label="Description"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.description}
                      placeholder="Sub Product"
                      textareaClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />




                  </div>
                </section>

                <section className="bg-white rounded-xl ambient-shadow p-lg border border-outline-variant/30">
                  <FormHeading
                    icon="child_care"
                    title="Kids Specific Classification"
                  />



                  <div className="grid grid-cols-2 gap-md mb-8">


                    <SelectField
                      label="Sub Category"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      name="subCategory"
                      value={formData.subCategory}
                      onChange={handleChange}
                      options={
                        formData.category
                          ? subCategoryMap[formData.category] || []
                          : allSubCategories
                      }
                      placeholder="Select Status"
                      className="flex flex-col"
                      selectClass="w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    />






                  </div>
                  <div>
                    <SectionLabel
                      label="AGE GROUP (SELECT ALL THAT APPLY)"
                    />
                    <div className="grid grid-cols-4 gap-4">
                      {ageGroups.map((age) => (
                        <CheckboxField
                          key={age}
                          label={age}
                          checked={formData.ageRange?.value === age}
                          onChange={() =>
                            setFormData({
                              ...formData,
                              ageRange: { value: age },
                            })
                          }
                        />
                      ))}
                    </div>
                  </div>


                </section>
              </div>

              <div className="col-span-4 space-y-gutter">


                <section className="bg-white p-lg rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <span className="material-symbols-outlined text-primary">visibility</span>
                      </div>
                      <h2 className="font-title-sm text-title-sm text-primary">Visibility</h2>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase"></label>
                      <input className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm" placeholder="e.g. KID-TE-BL-01" type="text" />
                    </div>



                    <InputFields
                      className={`flex flex-col`}
                      label="Weight"
                      name="Weight"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.weight}
                      placeholder="Weight"
                      inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />

                    <InputFields
                      className={`flex flex-col`}
                      label="Length"
                      name="lenght"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.lenght}
                      placeholder="Length"
                      inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />

                    <InputFields
                      className={`flex flex-col`}
                      label="Width"
                      name="width"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.width}
                      placeholder="Width"
                      inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />

                    <InputFields
                      className={`flex flex-col`}
                      label="Height"
                      name="height"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.height}
                      placeholder="Height"
                      inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />

                    <InputFields
                      className={`flex flex-col`}
                      label="Height"
                      name="Shipping Charge"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.shippingCharge}
                      placeholder="Shipping Charge"
                      inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />




                  </div>















                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Publish Product</p>
                      <p className="text-xs text-slate-500">Enable to make live on store</p>
                    </div>

                    <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none bg-primary-container" id="visibility-toggle" onclick="toggleSwitch(this)">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>






                  <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">

                    <div className="flex gap-4">
                      {step < 4 ? (
                        <button
                          onClick={() => setStep((prev) => prev + 1)}
                          className="w-full py-4 px-6 bg-primary text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md cursor-pointer"
                        >
                          {step === 1
                            ? "Next: Pricing"
                            : "Next: Images"}

                          <span className="material-symbols-outlined text-[18px]">
                            arrow_forward
                          </span>
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmit}
                          className="px-8 py-3 bg-primary text-on-primary font-label-md rounded-lg ambient-shadow-mid flex items-center gap-2"
                        >
                          {editProduct ? "Update Product" : "Add Product"}
                        </button>
                      )}
                    </div>




                    <button className="w-full py-4 px-6 bg-white border border-slate-200 text-slate-600 rounded-lg font-bold text-sm hover:bg-slate-50 transition-colors">
                      Save as Draft
                    </button>
                  </div>
                </section>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <div className="lg:col-span-8 space-y-lg">
                <section className="bg-white rounded-xl ambient-shadow p-lg border border-outline-variant/30">
                  <FormHeading
                    icon="payments"
                    title="Pricing Details"
                  />

                  <div className="grid grid-cols-2 gap-md mb-6">
                    <div className="flex flex-col gap-2">




                      <InputFields
                        className={`flex flex-col`}
                        label="Price"
                        name="price"
                        labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                        type="text" onChange={handleChange}
                        value={formData.price}
                        placeholder="Product Name"
                        inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                      />

                    </div>

                    <div className="flex flex-col gap-2">


                      <InputFields
                        className="flex flex-col"
                        label="Discount Price"
                        name="discountPrice"
                        labelClass="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase"
                        type="text"
                        onChange={handleChange}
                        value={formData.discountPrice}
                        placeholder="Discount Price"
                        inputClass="w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      />
                    </div>



                  </div>
                  <SelectField
                    label="TAX RATE"
                    name="taxRate"
                    labelClass="block font-label-caps text-label-caps text-on-surface-variant mb-2"
                    value={formData.taxRate}
                    onChange={handleChange}
                    options={taxOptions}
                    placeholder="Select Tax Rate"
                    className="flex flex-col mb-8"
                    selectClass="w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />


                  <div className="bg-surface-container-low p-md rounded-lg border border-slate-100">
                    <div className="flex justify-between items-center mb-md">
                      <span className="text-label-caps font-label-caps text-on-surface-variant uppercase">Profit Margin Calculator</span>
                      <span className="material-symbols-outlined text-xs text-slate-400 cursor-help">info</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="space-y-1">
                        <p className="text-body-sm font-body-sm text-on-surface-variant">Estimated Profit</p>
                        <p className="text-headline-md font-headline-md text-secondary" id="profit-val">$0.00</p>
                      </div>
                      <div className="text-right">
                        <p className="text-body-sm font-body-sm text-on-surface-variant">Margin (%)</p>
                        <p className="text-title-sm font-title-sm text-primary" id="margin-val">0%</p>
                      </div>
                    </div>
                  </div>



                </section>

                <section className="bg-white p-lg rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <span className="material-symbols-outlined text-primary">
                          layers
                        </span>
                      </div>

                      <h2 className="font-title-sm text-title-sm text-primary">
                        Product Variations
                      </h2>
                    </div>

                    <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:underline">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                      Add Variant Group
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Sizes */}
                    <div className="p-4 bg-surface-bright rounded-lg border border-slate-100">
                      <h4 className="text-body-base font-semibold text-primary mb-1">
                        Sizes
                      </h4>

                      <p className="text-xs text-on-surface-variant mb-4">
                        Select applicable sizes for the kids category.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <button className="w-12 h-10 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-sm">
                          0-6m
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-on-surface-variant text-xs font-medium hover:border-primary/50">
                          6-12m
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-sm">
                          1-2y
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-on-surface-variant text-xs font-medium">
                          2-4y
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-on-surface-variant text-xs font-medium">
                          4-6y
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border-dashed border-2 border-slate-200 bg-transparent text-slate-400">
                          <span className="material-symbols-outlined">
                            add
                          </span>
                        </button>
                      </div>

                      <p className="text-xs text-on-surface-variant mt-6 mb-4">
                        Select applicable sizes for the kids category.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <button className="w-12 h-10 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-sm">
                          L
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-on-surface-variant text-xs font-medium hover:border-primary/50">
                          XL
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-on-surface-variant text-xs font-medium hover:border-primary/50">
                          XXL
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-on-surface-variant text-xs font-medium">
                          3XL
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-on-surface-variant text-xs font-medium">
                          4XL
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-on-surface-variant text-xs font-medium">
                          5XL
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-on-surface-variant text-xs font-medium">
                          6XL
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-on-surface-variant text-xs font-medium">
                          7XL
                        </button>

                        <button className="w-12 h-10 flex items-center justify-center rounded-lg border-dashed border-2 border-slate-200 bg-transparent text-slate-400">
                          <span className="material-symbols-outlined">
                            add
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Colors */}
                    <div className="p-4 bg-surface-bright rounded-lg border border-slate-100">
                      <h4 className="text-body-base font-semibold text-primary mb-1">
                        Colors
                      </h4>

                      <p className="text-xs text-on-surface-variant mb-4">
                        Add the available colors for this garment.
                      </p>

                      <div className="flex flex-wrap gap-6">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-full bg-slate-900 ring-2 ring-offset-2 ring-primary cursor-pointer shadow-sm"></div>

                          <span className="text-[10px] font-bold uppercase text-primary">
                            Navy
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-full bg-white border border-slate-200 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-slate-300"></div>

                          <span className="text-[10px] font-bold uppercase text-on-surface-variant">
                            White
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                          <div className="w-8 h-8 rounded-full bg-pink-500 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-pink-300"></div>

                          <span className="text-[10px] font-bold uppercase text-on-surface-variant">
                            Rose
                          </span>
                        </div>

                        <button className="w-8 h-8 flex items-center justify-center rounded-full border-dashed border-2 border-slate-200 text-slate-400">
                          <span className="material-symbols-outlined text-sm">
                            add
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Variant Table */}
                    <div className="overflow-hidden border border-slate-100 rounded-lg">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold uppercase text-on-surface-variant tracking-wider">
                          <tr>
                            <th className="px-4 py-3">Variant</th>
                            <th className="px-4 py-3">SKU</th>
                            <th className="px-4 py-3 text-center">In Stock</th>
                            <th className="px-4 py-3 text-right">
                              Price Adjust.
                            </th>
                            <th className="px-4 py-3"></th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-50">
                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-slate-900"></div>

                                <span className="font-medium">
                                  Navy / 0-6m
                                </span>
                              </div>
                            </td>

                            <td className="px-4 py-4 font-mono text-[11px] text-slate-500">
                              KID-TE-NV-06
                            </td>

                            <td className="px-4 py-4 text-center">
                              <input
                                className="w-12 text-center border border-slate-200 rounded p-1 text-xs"
                                type="number"
                                defaultValue={25}
                              />
                            </td>

                            <td className="px-4 py-4 text-right">
                              <span className="text-secondary font-mono text-[11px]">
                                +$0.00
                              </span>
                            </td>

                            <td className="px-4 py-4 text-right">
                              <button className="material-symbols-outlined text-slate-400 hover:text-error transition-colors text-lg">
                                delete
                              </button>
                            </td>
                          </tr>

                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-slate-900"></div>

                                <span className="font-medium">
                                  Navy / 1-2y
                                </span>
                              </div>
                            </td>

                            <td className="px-4 py-4 font-mono text-[11px] text-slate-500">
                              KID-TE-NV-12
                            </td>

                            <td className="px-4 py-4 text-center">
                              <input
                                className="w-12 text-center border border-slate-200 rounded p-1 text-xs"
                                type="number"
                                defaultValue={12}
                              />

                              <div className="mt-1">
                                <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-[9px] font-bold uppercase tracking-tight">
                                  Low Stock
                                </span>
                              </div>
                            </td>

                            <td className="px-4 py-4 text-right">
                              <span className="text-secondary font-mono text-[11px]">
                                +$2.00
                              </span>
                            </td>

                            <td className="px-4 py-4 text-right">
                              <button className="material-symbols-outlined text-slate-400 hover:text-error transition-colors text-lg">
                                delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-span-4 space-y-gutter">



                <section className="bg-white p-lg rounded-xl shadow-sm border border-slate-100">


                  <FormHeading
                    icon="label"
                    title="Organizationnnn"
                  />
                  <div className="space-y-6">

                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">GENDER</label>

                      <div className="flex flex-col gap-2">
                        {genderOptions.map((gender) => (
                          <RadioField
                            key={gender.value}
                            label={gender.label}
                            labelClass="flex items-center gap-3 cursor-pointer"
                            name="gender"
                            radioClass="w-4 h-4 text-primary focus:ring-primary"
                            value={gender.value}
                            checked={formData.gender === gender.value}
                            onChange={handleChange}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-3 mt-4 mb-6">
                        <div className="p-2 bg-slate-50 rounded-lg">
                          <span className="material-symbols-outlined text-primary">inventory</span>
                        </div>
                        <h2 className="font-title-sm text-title-sm text-primary">Inventory</h2>
                      </div>


                      <InputFields
                        className={`flex flex-col mb-6`}
                        label="Stock"
                        name="stock"
                        labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                        type="text" onChange={handleChange}
                        value={formData.stock}
                        placeholder="stock"
                        inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                      />
                      <InputFields
                        className={`flex flex-col mb-6`}
                        label="min stock"
                        name="minStock"
                        labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                        type="text" onChange={handleChange}
                        value={formData.minStock}
                        placeholder="stock"
                        inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                      />

                      <InputFields
                        className={`flex flex-col mb-6`}
                        label="max stock"
                        name="maxStock"
                        labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                        type="text" onChange={handleChange}
                        value={formData.maxStock}
                        placeholder="stock"
                        inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                      />


                      {formData.stock <= 10 && (
                        <LowStockAlertField
                          label="Low Stock Alert"
                          name="stock"
                          value={formData.stock}
                          onChange={handleChange}
                          className="mb-4"
                          labelClass="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase"
                          inputClass="w-20 px-3 py-2 border border-slate-200 rounded-lg text-sm"
                        />
                      )}

                    </div>
                  </div>
                </section>

                <section className="bg-white p-lg mt-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <span className="material-symbols-outlined text-primary">visibility</span>
                      </div>
                      <h2 className="font-title-sm text-title-sm text-primary">Visibility</h2>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Publish Product</p>
                      <p className="text-xs text-slate-500">Enable to make live on store</p>
                    </div>

                    <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none bg-primary-container" id="visibility-toggle" onclick="toggleSwitch(this)">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>






                  <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">



                    <div className="flex gap-4">
                      {step < 4 ? (
                        <button
                          onClick={() => setStep((prev) => prev + 1)}
                          className="w-full py-4 px-6 bg-primary text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md cursor-pointer"
                        >
                          {step === 1
                            ? "Next: Pricing"
                            : "Next: Images"}

                          <span className="material-symbols-outlined text-[18px]">
                            arrow_forward
                          </span>
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmit}
                          className="px-8 py-3 bg-primary text-on-primary font-label-md rounded-lg ambient-shadow-mid flex items-center gap-2"
                        >
                          {editProduct ? "Update Product" : "Add Product"}
                        </button>
                      )}
                    </div>




                    <button className="w-full py-4 px-6 bg-white border border-slate-200 text-slate-600 rounded-lg font-bold text-sm hover:bg-slate-50 transition-colors">
                      Save as Draft
                    </button>
                  </div>
                </section>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <div className="lg:col-span-8 space-y-lg">
                <section className="bg-white rounded-xl ambient-shadow p-lg border border-outline-variant/30">
                  <h3 className="font-h3 text-h3 text-on-surface mb-md">
                    Images & Media
                  </h3>

                  <div className="space-y-lg">

                    {/* MAIN IMAGE + THUMBNAILS */}
                    <div className="flex flex-col gap-4">

                      {/* MAIN PREVIEW */}
                      <div
                        onClick={() => uploadRef.current.click()}
                        className="relative flex-1 h-[320px] rounded-xl overflow-hidden border border-outline-variant/30 cursor-pointer group bg-surface-container-low"
                      >
                        {formData.images?.length > 0 ? (
                          <img
                            src={formData.images[selectedImage]}
                            alt="preview"
                            className="w-full  object-cover h-[300px]"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-on-surface-variant">
                            <FiImage size={60} />
                            <p>No Image Selected</p>
                          </div>
                        )}

                        {/* HOVER OVERLAY */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-3">
                          <FiUpload className="text-white" size={45} />

                          <p className="text-white font-semibold">
                            Upload Images
                          </p>
                        </div>

                        {/* hidden input */}
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          ref={uploadRef}
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </div>

                      {/* THUMBNAILS */}
                      <div className="flex gap-3 overflow-auto">
                        {formData.images?.map((img, index) => (
                          <div
                            key={index}
                            className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 flex-shrink-0 ${selectedImage === index
                              ? "border-primary"
                              : "border-outline-variant"
                              }`}
                          >
                            {/* THUMBNAIL IMAGE */}
                            <img
                              src={img}
                              alt={`thumb-${index}`}
                              onClick={() => setSelectedImage(index)}
                              className="w-full h-full object-cover cursor-pointer"
                            />

                            {/* DELETE BUTTON */}
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(index)}
                              className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-500 transition"
                            >
                              <FiX size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* STATUS */}
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface">
                        Status
                      </label>

                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg"
                      >
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                  </div>
                </section>
              </div>

              <div className="col-span-4 space-y-gutter">


                <section className="bg-white p-lg mt-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <span className="material-symbols-outlined text-primary">visibility</span>
                      </div>
                      <h2 className="font-title-sm text-title-sm text-primary">Visibility</h2>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Publish Product</p>
                      <p className="text-xs text-slate-500">Enable to make live on store</p>
                    </div>

                    <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none bg-primary-container" id="visibility-toggle" onclick="toggleSwitch(this)">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>






                  <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">

                    <div className="flex gap-4">
                      {step < 4 ? (
                        <button
                          onClick={() => setStep((prev) => prev + 1)}
                          className="w-full py-4 px-6 bg-primary text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md cursor-pointer"
                        >
                          {step === 4
                            ? "Next: Images"
                            : "Next: Images"}

                          <span className="material-symbols-outlined text-[18px]">
                            arrow_forward
                          </span>
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmit}
                          className="px-8 py-3 bg-primary text-on-primary font-label-md rounded-lg ambient-shadow-mid flex items-center gap-2"
                        >
                          {editProduct ? "Update Product" : "Add Product"}
                        </button>
                      )}
                    </div>




                    <button className="w-full py-4 px-6 bg-white border border-slate-200 text-slate-600 rounded-lg font-bold text-sm hover:bg-slate-50 transition-colors">
                      Save as Draft
                    </button>
                  </div>
                </section>
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <div className="lg:col-span-8 space-y-lg">
                <section className="bg-white rounded-xl ambient-shadow p-lg border border-outline-variant/30">
                  <h3 className="font-h3 text-h3 text-on-surface mb-md">
                    Images & Media 4
                  </h3>

                  <div className="space-y-lg">

                    {/* MAIN IMAGE + THUMBNAILS */}
                    <div className="flex flex-col gap-4">

                      {/* MAIN PREVIEW */}
                      <div
                        onClick={() => uploadRef.current.click()}
                        className="relative flex-1 h-[320px] rounded-xl overflow-hidden border border-outline-variant/30 cursor-pointer group bg-surface-container-low"
                      >
                        {formData.images?.length > 0 ? (
                          <img
                            src={formData.images[selectedImage]}
                            alt="preview"
                            className="w-full  object-cover h-[300px]"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-on-surface-variant">
                            <FiImage size={60} />
                            <p>No Image Selected</p>
                          </div>
                        )}

                        {/* HOVER OVERLAY */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-3">
                          <FiUpload className="text-white" size={45} />

                          <p className="text-white font-semibold">
                            Upload Images
                          </p>
                        </div>

                        {/* hidden input */}
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          ref={uploadRef}
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </div>

                      {/* THUMBNAILS */}
                      <div className="flex gap-3 overflow-auto">
                        {formData.images?.map((img, index) => (
                          <div
                            key={index}
                            className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 flex-shrink-0 ${selectedImage === index
                              ? "border-primary"
                              : "border-outline-variant"
                              }`}
                          >
                            {/* THUMBNAIL IMAGE */}
                            <img
                              src={img}
                              alt={`thumb-${index}`}
                              onClick={() => setSelectedImage(index)}
                              className="w-full h-full object-cover cursor-pointer"
                            />

                            {/* DELETE BUTTON */}
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(index)}
                              className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-500 transition"
                            >
                              <FiX size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* STATUS */}
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface">
                        Status
                      </label>

                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg"
                      >
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-span-4 space-y-gutter">


                <section className="bg-white p-lg mt-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <span className="material-symbols-outlined text-primary">visibility</span>
                      </div>
                      <h2 className="font-title-sm text-title-sm text-primary">Visibility</h2>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">Publish Product</p>
                      <p className="text-xs text-slate-500">Enable to make live on store</p>
                    </div>

                    <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none bg-primary-container" id="visibility-toggle" onclick="toggleSwitch(this)">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>






                  <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">

                    <div className="flex gap-4">
                      {step < 4 ? (
                        <button
                          onClick={() => setStep((prev) => prev + 1)}
                          className="w-full py-4 px-6 bg-primary text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md cursor-pointer"
                        >
                          {step === 1
                            ? "Next: Pricing"
                            : "Next: Images"}

                          <span className="material-symbols-outlined text-[18px]">
                            arrow_forward
                          </span>
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmit}
                          className="px-8 py-3 bg-primary text-on-primary font-label-md rounded-lg ambient-shadow-mid flex items-center gap-2"
                        >
                          {editProduct ? "Update Product" : "Add Product"}
                        </button>
                      )}
                    </div>




                    <button className="w-full py-4 px-6 bg-white border border-slate-200 text-slate-600 rounded-lg font-bold text-sm hover:bg-slate-50 transition-colors">
                      Save as Draft
                    </button>
                  </div>
                </section>
              </div>
            </>
          )}
        </div>

        {/* right */}
        {/* <div className="lg:col-span-4 space-y-lg">
            <div className="rounded-xl overflow-hidden border border-outline-variant/30 ambient-shadow">
              <div className="flex  gap-3 overflow-auto">
                {formData.images?.length > 0 ? (
                  <img
                    src={formData.images[selectedImage]}
                    alt="preview"
                    className="w-full  object-cover h-auto"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-on-surface-variant">
                    <FiImage size={60} />
                    <p>No Image Selected</p>
                  </div>
                )}
              </div>

              <div className="p-md bg-white">
                <p className="text-[10px] uppercase tracking-wider text-outline font-bold mb-1">
                  Preview Thumbnail
                </p>

                <p className="text-body-sm text-on-surface-variant">
                  <span className="font-bold">Name : </span>{formData.product || "Product Preview"}
                </p>
                <p className="text-body-sm text-on-surface-variant">
                  <span className="font-bold">Description : </span>{formData.description || "Product Description"}
                </p>
                <p className="text-body-sm text-on-surface-variant">
                  <span className="font-bold">Price : </span> <span className="font-medium">₹</span>{formData.price || "Price"}
                </p>
              </div>
            </div>
          </div> */}









      </div>
      {/* footer buttons */}
      <div className="mt-2xl flex items-center justify-between pt-lg border-t border-outline-variant/30">
        <button
          className="px-6 py-3 border border-outline text-on-surface-variant font-label-md rounded-lg"
          onClick={() => {
            if (step === 1) {
              onCancel();
            } else {
              setStep((prev) => Math.max(prev - 1, 1));
            }
          }}
        >
          {step === 1 ? "Cancel" : "Back"}
        </button>


      </div>
    </div>
  );
};

export default AddCatagories;