"use client";
import { loginSchema, LoginFormType } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({ resolver: zodResolver(loginSchema) });

  //   const onSubmit: SubmitHandler<LoginFormType> = (values) => {};

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E8D6CB] via-[#f3e7df] to-[#E8D6CB] px-4"
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        {/* Title */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#5D2E46]">تسجيل الدخول</h1>
        </div>

        {/* Form */}
        <form className="space-y-4">
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
          </div>

          {/* Forgot Password */}
          <div className="text-left">
            <a
              href="#"
              className="text-sm text-[#5D2E46] hover:underline font-medium"
            >
              هل نسيت كلمة المرور؟
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#5D2E46] text-white py-2.5 rounded-lg font-medium hover:bg-[#4b2338] transition duration-200"
          >
            تسجيل الدخول
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-600">
          ليس لديك حساب؟{" "}
          <Link
            href="/register"
            className="text-[#5D2E46] font-semibold hover:underline"
          >
            إنشاء حساب جديد
          </Link>
        </p>
      </div>
    </div>
  );
}
