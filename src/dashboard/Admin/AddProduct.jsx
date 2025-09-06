import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [preview, setPreview] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // checkboxes come as arrays automatically
    console.log("Form Data:", data);

    // reset form after submit
    reset();
    setPreview("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
          <div className="px-6 sm:px-8 py-6 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              🛍️ Add New Product
            </h2>
            <p className="text-indigo-100 mt-1 text-sm">
              Fill in the details below to add a new product to your shop
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Title */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Title
              </label>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                placeholder="Premium Cotton Sharee"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3"
              />
              {errors.title && (
                <span className="text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3"
              >
                <option value="">Select category</option>
                <option value="Lungi">Lungi</option>
                <option value="Sharee">Sharee</option>
                <option value="Gamsa">Gamsa</option>
                <option value="3 Pich">3 Pich</option>
              </select>
              {errors.category && (
                <span className="text-red-500 text-sm">
                  {errors.category.message}
                </span>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (৳)
              </label>
              <input
                type="number"
                {...register("price", {
                  required: "Price is required",
                  min: 1,
                })}
                placeholder="1500"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3"
              />
              {errors.price && (
                <span className="text-red-500 text-sm">
                  {errors.price.message}
                </span>
              )}
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                {...register("quantity", {
                  required: "Quantity is required",
                  min: 1,
                })}
                placeholder="10"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3"
              />
              {errors.quantity && (
                <span className="text-red-500 text-sm">
                  {errors.quantity.message}
                </span>
              )}
            </div>

            {/* ✅ Size (Radio Buttons) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Size
              </label>
              <div className="flex flex-wrap gap-3 mt-2">
                {["S", "M", "L", "XL", "XXL", "Free"].map((size) => (
                  <label
                    key={size}
                    className="flex items-center space-x-2 w-1/3 sm:w-auto"
                  >
                    <input
                      type="checkbox"
                      value={size}
                      {...register("size", { required: "Size is required" })}
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">{size}</span>
                  </label>
                ))}
              </div>
              {errors.size && (
                <span className="text-red-500 text-sm">
                  {errors.size.message}
                </span>
              )}
            </div>

            {/* Color Checkboxes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Color
              </label>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Red", "Blue", "Green", "Yellow", "Black", "White"].map(
                  (color) => (
                    <label
                      key={color}
                      className="flex items-center space-x-2 w-1/2 sm:w-auto"
                    >
                      <input
                        type="checkbox"
                        value={color}
                        {...register("colors")}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <span className="text-gray-700">{color}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Material Checkboxes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Material
              </label>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Cotton", "Silk", "Polyester", "Wool"].map((material) => (
                  <label
                    key={material}
                    className="flex items-center space-x-2 w-1/2 sm:w-auto"
                  >
                    <input
                      type="checkbox"
                      value={material}
                      {...register("materials")}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">{material}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Image Upload with Preview */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Image
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("image")}
                className="file-input file-input-secondary"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />
              {preview && (
                <div className="mt-3 flex justify-center">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-40 sm:w-56 h-40 sm:h-56 object-cover rounded-lg border shadow-md"
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows="4"
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Write detailed description..."
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3"
              ></textarea>
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <div className="col-span-1 sm:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
              >
                🚀 Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
