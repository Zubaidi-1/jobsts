"use client";
import { registerSchema, RegisterFormType } from "@/schemas/auth.schema";
import { registerUser } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Signup() {
  // ! Error Handling
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // *  Form Handling
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormType>({ resolver: zodResolver(registerSchema) });

  const onSubmit: SubmitHandler<RegisterFormType> = async (values) => {
    const { error } = await registerUser(values.email, values.password);
    if (error) {
      setErrorMessage(error.message);
      return;
    }
    alert("الرجاء التحقق من بريدك الالكتروني لأستكمال الأنشاء");
    setErrorMessage(null);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E8D6CB] via-[#f3e7df] to-[#E8D6CB] px-4"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        {/* Title */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#5D2E46]">انشاء حساب</h1>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="example@example.com"
              className="rounded-lg border border-gray-300 text-[#5D2E46] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D2E46] focus:border-transparent transition"
            />
            {errors.email ? (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            ) : (
              ""
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 ">
            <label className="text-sm font-medium text-gray-700">
              كلمة المرور
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="********"
              className="rounded-lg border text-[#5D2E46] border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D2E46] focus:border-transparent transition"
            />
            {errors.password ? (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-sm font-medium text-gray-700">
              تأكيد كلمة المرور
            </label>
            <input
              {...register("confirm_password")}
              type="password"
              placeholder="********"
              className="rounded-lg border text-[#5D2E46] border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5D2E46] focus:border-transparent transition"
            />
            {errors.confirm_password ? (
              <p className="text-red-500 text-xs">
                {errors.confirm_password.message}
              </p>
            ) : (
              ""
            )}
          </div>

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-[#5D2E46] text-white py-2.5 rounded-lg font-medium hover:bg-[#4b2338] transition duration-200"
          >
            انشاء حساب{" "}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-600">
          لديك حساب؟{" "}
          <Link
            href="/login"
            className="text-[#5D2E46] font-semibold hover:underline"
          >
            تسجيل دخول
          </Link>
        </p>
      </div>
    </div>
  );
}
