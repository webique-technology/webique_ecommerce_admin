import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Button, {
  FormHeading,
  InputFields,
  TextareaFields,
  CheckboxField,
} from "../../components/ui/FormFields";

import {
  createCategory,
  updateCategory,
  getCategory,
} from "../../services/categoryService";

export default function CategoryForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEdit = !!id;

  const [loading, setLoading] = useState(false);

  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: null,
    status: true,
    sort_order: "",

    subcategories: [
      {
        id: "",
        name: "",
        description: "",
        status: true,
        sort_order: 1,
      },
    ],
  });

  // -----------------------------
  // Load Category (Edit)
  // -----------------------------

  useEffect(() => {
    if (isEdit) {
      loadCategory();
    }
  }, [id]);

  const loadCategory = async () => {
    try {
      setLoading(true);

      const response = await getCategory(id);

      const category = response.data.data;

      setForm({
        name: category.name || "",
        description: category.description || "",
        image: null,
        status: category.status,
        sort_order: category.sort_order,

        subcategories:
          category.children?.length > 0
            ? category.children.map((item) => ({
              id: item.id,
              name: item.name,
              description: item.description || "",
              status: item.status,
              sort_order: item.sort_order,
            }))
            : [
              {
                id: "",
                name: "",
                description: "",
                status: true,
                sort_order: 1,
              },
            ],
      });

      if (category.image) {
        setPreview(category.image);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Category Input
  // -----------------------------

  const handleChange = (e) => {
    const { name, value, type, checked, files } =
      e.target;

    if (type === "file") {
      const file = files[0];

      setForm((prev) => ({
        ...prev,
        image: file,
      }));

      if (file) {
        setPreview(URL.createObjectURL(file));
      }

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  // -----------------------------
  // Sub Category Change
  // -----------------------------

  const handleSubCategoryChange = (
    index,
    field,
    value
  ) => {
    const list = [...form.subcategories];

    list[index][field] = value;

    setForm({
      ...form,
      subcategories: list,
    });
  };

  // -----------------------------
  // Add Row
  // -----------------------------

  const addRow = () => {
    setForm({
      ...form,

      subcategories: [
        ...form.subcategories,

        {
          id: "",
          name: "",
          description: "",
          status: true,
          sort_order:
            form.subcategories.length + 1,
        },
      ],
    });
  };

  // -----------------------------
  // Delete Row
  // -----------------------------

  const removeRow = (index) => {
    const list = [...form.subcategories];

    list.splice(index, 1);

    setForm({
      ...form,
      subcategories:
        list.length > 0
          ? list
          : [
            {
              id: "",
              name: "",
              description: "",
              status: true,
              sort_order: 1,
            },
          ],
    });
  };

  // -----------------------------
  // Submit
  // -----------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("name", form.name);
      data.append(
        "description",
        form.description
      );

      data.append(
        "status",
        form.status ? 1 : 0
      );

      data.append(
        "sort_order",
        form.sort_order
      );

      if (form.image) {
        data.append(
          "image",
          form.image
        );
      }

      // Only send filled subcategories
      const validSubCategories = form.subcategories.filter(
        (item) =>
          item.name.trim() !== "" ||
          item.description.trim() !== ""
      );

      validSubCategories.forEach((item, index) => {

        if (item.id) {
          data.append(
            `subcategories[${index}][id]`,
            item.id
          );
        }

        data.append(
          `subcategories[${index}][name]`,
          item.name
        );

        data.append(
          `subcategories[${index}][description]`,
          item.description || ""
        );

        data.append(
          `subcategories[${index}][status]`,
          item.status ? 1 : 0
        );

        data.append(
          `subcategories[${index}][sort_order]`,
          item.sort_order || 0
        );
      });

      if (isEdit) {
        await updateCategory(id, data);
      } else {
        await createCategory(data);
      }

      navigate("/categories");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h1 className="text-2xl font-bold text-slate-800">
            {isEdit ? "Edit Category" : "Add Category"}
          </h1>

          <p className="text-slate-500 mt-1">
            {isEdit
              ? "Update category details"
              : "Create a new category with subcategories"}
          </p>

        </div>

        <Button
          label="Back"
          className="bg-slate-500 hover:bg-slate-600"
          onClick={() => navigate("/categories")}
        />

      </div>

      <form onSubmit={handleSubmit}>

        {/* Category Details */}

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">

          <FormHeading
            icon="category"
            title="Category Details"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <InputFields
              label="Category Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Category Name"
              labelClass="block mb-2 font-medium"
              inputClass="w-full border rounded-lg px-4 py-3"
            />

            <InputFields
              label="Sort Order"
              name="sort_order"
              type="number"
              value={form.sort_order}
              onChange={handleChange}
              labelClass="block mb-2 font-medium"
              inputClass="w-full border rounded-lg px-4 py-3"
            />

          </div>

          <div className="mt-5">

            <TextareaFields
              label="Description"
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              placeholder="Category Description"
              labelClass="block mb-2 font-medium"
              textareaClass="w-full border rounded-lg px-4 py-3"
            />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

            <div>

              <label className="block mb-2 font-medium">
                Category Image
              </label>

              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />

              {preview && (

                <img
                  src={preview}
                  alt=""
                  className="mt-4 w-40 h-40 object-cover rounded-lg border"
                />

              )}

            </div>

            <div className="flex items-end">

              <CheckboxField
                label="Active"
                name="status"
                checked={form.status}
                onChange={handleChange}
              />

            </div>

          </div>

        </div>

        {/* Sub Categories */}

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">

          <div className="flex items-center justify-between mb-5">

            <FormHeading
              icon="list"
              title="Sub Categories"
              className="mb-0"
            />

            <Button
              label="+ Add Sub Category"
              onClick={addRow}
            />

          </div>

          <div className="overflow-x-auto">

            <table className="w-full border border-slate-200 rounded-lg">

              <thead className="bg-slate-100">

                <tr>

                  <th className="p-3 text-left">
                    Name
                  </th>

                  <th className="p-3 text-left">
                    Description
                  </th>

                  <th className="p-3 text-center">
                    Status
                  </th>

                  <th className="p-3 text-center">
                    Sort
                  </th>

                  <th className="p-3 text-center">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>
                {form.subcategories.map((sub, index) => (

                  <tr key={sub.id || index} className="border-t">

                    <td className="p-3">

                      <input
                        type="text"
                        value={sub.name}
                        placeholder="Sub Category Name"
                        onChange={(e) =>
                          handleSubCategoryChange(
                            index,
                            "name",
                            e.target.value
                          )
                        }
                        className="w-full border rounded-lg px-3 py-2"
                      />

                    </td>

                    <td className="p-3">

                      <input
                        type="text"
                        value={sub.description}
                        placeholder="Description"
                        onChange={(e) =>
                          handleSubCategoryChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        className="w-full border rounded-lg px-3 py-2"
                      />

                    </td>

                    <td className="p-3 text-center">

                      <input
                        type="checkbox"
                        checked={sub.status}
                        onChange={(e) =>
                          handleSubCategoryChange(
                            index,
                            "status",
                            e.target.checked
                          )
                        }
                      />

                    </td>

                    <td className="p-3">

                      <input
                        type="number"
                        value={sub.sort_order}
                        onChange={(e) =>
                          handleSubCategoryChange(
                            index,
                            "sort_order",
                            e.target.value
                          )
                        }
                        className="w-24 border rounded-lg px-3 py-2 mx-auto block"
                      />

                    </td>

                    <td className="p-3 text-center">

                      <Button
                        label="Delete"
                        className="bg-red-600 hover:bg-red-700"
                        onClick={() => removeRow(index)}
                      />

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 mt-6">

          <Button
            label="Cancel"
            className="bg-slate-500 hover:bg-slate-600"
            onClick={() => navigate("/categories")}
          />

          <Button
            type="submit"
            disabled={loading}
            label={
              loading
                ? "Saving..."
                : isEdit
                  ? "Update Category"
                  : "Save Category"
            }
          />

        </div>

      </form>

    </div>
  );
}