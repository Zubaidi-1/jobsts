"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const addsth = (message: string) => void {};
  return (
    <div
      className="flex min-h-screen flex-col gap-2 lg:gap-4 items-center justify-center bg-[#E8D6CB] "
      dir="rtl"
    >
      <h1 className="text-[#5D2E46] text-3xl lg:text-5xl">وظيفتي</h1>
      <h3 className="text-[#5D2E46] lg:text-2xl">تصفح الوظائف يوميا!</h3>
      <div className="flex gap-2 mt-3 lg:text-2xl">
        <Link
          className="bg-[#5D2E46] px-4 py-2 rounded text-[#E8D6CB] hover:bg-transparent hover:border-2 hover:border-[#5D2E46] hover:text-[#5D2E46] transition duration-150 ease-in-out focus:scale-75"
          href={"/login"}
        >
          تسجيل دخول
        </Link>
        <Link
          className="border-2 border-[#5D2E46] px-4 py-2 text-[#5D2E46] rounded hover:scale-105 focus:scale-95 transition ease-in duration-75"
          href={"#"}
        >
          تصفح الأعلانات
        </Link>
      </div>
    </div>
  );
}
