"use server";

import { ContactSchema } from "@/schema/contact";

export type ContactFormState = {
  success: boolean;
  message?: string;
  errors?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    sports?: string;
    formats?: string;
  };
};

export async function saveContactData(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");
    const receiveUpdates = formData.get("receive-updates") === "on";
    const sportsRaw = formData.get("sports");
    const formatsRaw = formData.get("formats");

    const sports = sportsRaw ? (JSON.parse(String(sportsRaw)) as string[]) : [];
    const formats = formatsRaw
      ? (JSON.parse(String(formatsRaw)) as string[])
      : [];

    const parsed = ContactSchema.safeParse({
      firstName: typeof firstName === "string" ? firstName : "",
      lastName: typeof lastName === "string" ? lastName : "",
      email: typeof email === "string" ? email : "",
      phoneNumber: typeof phoneNumber === "string" ? phoneNumber : "",
      receiveUpdates,
      sports,
      formats,
    });

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Please fix the errors and try again",
        errors: {
          firstName: fieldErrors.firstName?.[0],
          lastName: fieldErrors.lastName?.[0],
          email: fieldErrors.email?.[0],
          phoneNumber: fieldErrors.phoneNumber?.[0],
          sports: fieldErrors.sports?.[0],
          formats: fieldErrors.formats?.[0],
        },
      };
    }

    const data = parsed.data;
    console.log("Contact form submission:", data);

    // Persist data here (DB/email). On success, return success state
    return { success: true, message: "Thanks! We'll be in touch soon." };
  } catch (error) {
    console.error("Error saving contact data:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again",
    };
  }
}
