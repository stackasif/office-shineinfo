
const categories = [
  "Fashion & Apparel",
  "Beauty & Skincare",
  "Health & Wellness",
  "Food & Beverages",
  "Fitness & Sports",
  "Electronics & Gadgets",
  "Home & Lifestyle",
  "Travel & Hospitality",
  "Jewellery & Accessories",
  "Education & EdTech",
  "E-commerce & Retail",
  "Other",
];

export default function BusinessDetails({ formData, handleChange }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#22201E]">
          Tell us about your business
        </h2>

        <p className="mt-2 text-sm text-[#77746C]">
          Share a few details about your brand.
        </p>
      </div>

      <div className="space-y-5">
        {/* Business Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#22201E]">
            Business / Brand Name
          </label>

          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Enter your brand name"
            required
            className="w-full rounded-lg border border-[#D5D1C5] bg-transparent px-4 py-3 text-xs outline-none focus:border-[#22201E]"
          />
        </div>

        {/* Business Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#22201E]">
            Business Category
          </label>

          <select
            name="businessCategory"
            value={formData.businessCategory}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#D5D1C5] bg-transparent px-4 py-3 text-xs outline-none focus:border-[#22201E]"
          >
            <option value="" disabled>Select your category</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Contact Person */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#22201E]">
            Person Name
          </label>

          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full rounded-lg border border-[#D5D1C5] bg-transparent px-4 py-3 text-xs outline-none focus:border-[#22201E]"
          />
        </div>

        {/* Website */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#22201E]">
            Website URL <span className="text-[#99958B]">(Optional)</span>
          </label>

          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://yourwebsite.com"
            className="w-full rounded-lg border border-[#D5D1C5] bg-transparent px-4 py-3 text-xs outline-none focus:border-[#22201E]"
          />
        </div>
      </div>
    </div>
  );
}
