
export default function AccountDetails({ formData, handleChange }) {
  return (
    <div>

      {/* Heading */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-[#22201E]">
          Create your account
        </h2>

        <p className="mt-2 text-sm text-[#77746C]">
          Enter your email and create a password to get started.
        </p>
      </div>

      <div className="space-y-4">

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#22201E]">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full border-b border-[#C8C5BB] bg-transparent px-0 py-2 text-xs text-[#22201E] outline-none placeholder:text-[#99958B] focus:border-[#22201E]"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#22201E]">
            Create a password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            minLength={8}
            required
            className="w-full border-b border-[#C8C5BB] bg-transparent px-0 py-2 text-xs text-[#22201E] outline-none placeholder:text-[#99958B] focus:border-[#22201E]"
          />

          <p className="mt-2 text-xs text-[#99958B]">
            Password must be at least 8 characters.
          </p>
        </div>

      </div>
    </div>
  );
}
