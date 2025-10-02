import { z } from "zod";

export const sportsEnum = z.enum(["Futsal", "Cricket", "AFL"]);
export const formatEnum = z.enum(["Casual", "League", "Knockout", "Not sure"]);

export const ContactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(100, "First name is too long")
    .min(1, "First name is required"),
  lastName: z
    .string()
    .trim()
    .max(100, "Last name is too long")
    .min(1, "Last name is required"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .min(3, "Email is required"),
  phoneNumber: z
    .string()
    .trim()
    .optional()
    .transform((val: string | undefined) => val ?? "")
    .refine(
      (val: string) => val.length === 0 || /^[+\d][\d\s\-()]{6,20}$/.test(val),
      {
        message: "Enter a valid phone number",
      },
    ),
  receiveUpdates: z.boolean().optional().default(false),
  sports: z.array(sportsEnum).min(0).optional().default([]),
  formats: z.array(formatEnum).min(0).optional().default([]),
});

export type ContactSchemaInput = z.infer<typeof ContactSchema>;
