import { z } from "zod";

export const registrationSchema = z.object({
    fullname: z.string().min(1),
    username: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    gender: z.enum(["male", "female"])
});

export const loginSchema = z.object({
    username: z.union([z.string().email(), z.string().min(1)]),
    password: z.string().min(1)
})
