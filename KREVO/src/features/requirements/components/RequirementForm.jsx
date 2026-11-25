
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import AccountDetails from "./AccountDetails";
import BusinessDetails from "./BusinessDetails";

export default function RequirementForm() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    businessName: "",
    businessCategory: "",
    contactName: "",
    website: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }

    console.log("Registration Details:", {
      ...formData,
      password: "[HIDDEN]",
    });

    router.push("/dashboard");
  }

  function handleBack() {
    setCurrentStep(1);
  }

  return (
    <main className="min-h-screen bg-[#E6E3D6]">

      {/* Navbar */}
      <header className="h-[78px] border-b border-[#D5D1C5]">
        <div className="mx-auto flex h-full max-w-[1536px] items-center px-6 sm:px-12">
          <Link
            href="/"
            className="text-[22px] font-bold tracking-tight text-[#22201E]"
          >
            KREVO
          </Link>
        </div>
      </header>

      {/* Form Section */}
      <section className="flex min-h-[calc(100vh-78px)] items-center justify-center px-4 py-12">

        {/* Form Card */}
        <div className="w-full max-w-[650px] rounded-xl border border-[#DAD8D0] bg-[#F7F6F0] p-6 shadow-sm sm:p-[30px]">

          {/* Back to Home */}
          
{/* Back to Home - Only Step 1 */}
{currentStep === 1 && (
  <Link
    href="/"
    className="mb-7 inline-flex items-center gap-3 text-sm text-[#77746C] transition hover:text-[#22201E]"
  >
    <span>←</span>
    <span>Back to Home</span>
  </Link>
)}


          {/* Progress Section */}
          <div className="mb-6">

            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[2px] text-[#77746C]">
                Step {currentStep} of 2
              </p>

              <p className="text-xs text-[#77746C]">
                {currentStep === 1
                  ? "Account Details"
                  : "Business Details"}
              </p>
            </div>

            <div className="h-[3px] w-full bg-[#DAD8D0]">
              <div
                className="h-full bg-[#22201E] transition-all duration-300"
                style={{
                  width: currentStep === 1 ? "50%" : "100%",
                }}
              />
            </div>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>

            {currentStep === 1 && (
              <AccountDetails
                formData={formData}
                handleChange={handleChange}
              />
            )}

            {currentStep === 2 && (
              <BusinessDetails
                formData={formData}
                handleChange={handleChange}
              />
            )}

            {/* Buttons */}
            <div className="mt-6 flex gap-3">

              {currentStep === 2 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/2 rounded-lg border border-[#C8C5BB] py-3 text-sm font-medium text-[#22201E] transition hover:bg-[#EAE8DF]"
                >
                  Back
                </button>
              )}

              <button
                type="submit"
                className={`rounded-lg bg-[#22201E] py-3 text-sm font-semibold text-white transition hover:bg-[#393630] ${
                  currentStep === 1 ? "w-full" : "w-1/2"
                }`}
              >
                {currentStep === 1 ? "Continue" : "Create Account"}
              </button>

            </div>

          </form>

          {/* Step 1 Footer */}
          {currentStep === 1 && (
            <div className="mt-[10px]">

              <Link
                href="/join-as-creator"
                className="flex w-full items-center justify-center rounded-lg border border-[#C8C5BB] py-3 text-sm font-medium text-[#22201E] transition hover:bg-[#EAE8DF]"
              >
                Register as a Creator
              </Link>

              <p className="mt-3 text-center text-sm text-[#77746C]">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#22201E] underline underline-offset-4"
                >
                  Sign In
                </Link>
              </p>

            </div>
          )}

        </div>
      </section>
    </main>
  );
}
