import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "يرجى ادخال بريد الكتروني")
    .email("يرجى ادخال بريد الكتروني صحيح"),

  password: z
    .string()
    .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
    .max(128, "كلمة المرور طويلة جداً")
    .refine((password) => /[A-Z]/.test(password), {
      message: "يجب أن تحتوي كلمة المرور على حرف كبير على الأقل",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "يجب أن تحتوي كلمة المرور على حرف صغير على الأقل",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "يجب أن تحتوي كلمة المرور على رقم على الأقل",
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: "يجب أن تحتوي كلمة المرور على رمز خاص على الأقل",
    }),
});

export type LoginFormType = z.infer<typeof loginSchema>;
