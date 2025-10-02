"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useActionState, useEffect, useRef, useState } from "react";
import { saveContactData, type ContactFormState } from "@/actions/contact";

export default function ContactUsForm() {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const initialState: ContactFormState = { success: false };
  const [state, formAction] = useActionState(saveContactData, initialState);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setSelectedSports([]);
      setSelectedFormats([]);
    }
  }, [state.success]);

  const errors = state.success ? undefined : state.errors;

  const sports = ["Futsal", "Cricket", "AFL"];
  const formats = ["Casual", "League", "Knockout", "Not sure"];

  const toggleSport = (sport: string) => {
    setSelectedSports((prev) =>
      prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport],
    );
  };

  const toggleFormat = (format: string) => {
    setSelectedFormats((prev) =>
      prev.includes(format)
        ? prev.filter((f) => f !== format)
        : [...prev, format],
    );
  };

  return (
    <div className="flex-2 rounded-2xl bg-[#151515] px-6 py-7">
      <h3 className="font-dm-sans text-primary pb-5 text-2xl font-semibold">
        Contact Us
      </h3>

      <form
        ref={formRef}
        className="font-inter flex flex-col gap-2"
        action={formAction}
      >
        <div className="flex flex-wrap items-center justify-between gap-5 sm:flex-nowrap">
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="first-name" className="text-background">
              First Name
            </label>
            <Input
              placeholder="Enter your first name"
              className="text-primary border-none bg-black"
              id="first-name"
              name="firstName"
            />
            {errors?.firstName ? (
              <p className="text-destructive text-sm">{errors.firstName}</p>
            ) : null}
          </div>
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="last-name" className="text-background">
              Last Name
            </label>
            <Input
              placeholder="Enter your last name"
              className="text-primary border-none bg-black"
              id="last-name"
              name="lastName"
            />
            {errors?.lastName ? (
              <p className="text-destructive text-sm">{errors.lastName}</p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:flex-nowrap">
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="email" className="text-background">
              E-mail
            </label>
            <Input
              placeholder="Enter your email"
              className="text-primary border-none bg-black"
              id="email"
              name="email"
            />
            {errors?.email ? (
              <p className="text-destructive text-sm">{errors.email}</p>
            ) : null}
          </div>
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="phone-number" className="text-background">
              Phone Number
            </label>
            <Input
              placeholder="Enter your phone number"
              className="text-primary border-none bg-black"
              id="phone-number"
              name="phoneNumber"
            />
            {errors?.phoneNumber ? (
              <p className="text-destructive text-sm">{errors.phoneNumber}</p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-background">Sport(s) of Interest</label>
          <div className="flex items-center justify-center gap-4">
            {sports.map((sport) => (
              <button
                key={sport}
                type="button"
                onClick={() => toggleSport(sport)}
                className={`w-full rounded-lg border px-4 py-2 transition-colors ${
                  selectedSports.includes(sport)
                    ? "border-green-500 bg-black text-green-500"
                    : "border-transparent bg-black text-white hover:border-gray-400"
                }`}
                aria-pressed={selectedSports.includes(sport)}
              >
                {sport}
              </button>
            ))}
          </div>
          {errors?.sports ? (
            <p className="text-destructive text-sm">{errors.sports}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-background">
            Which format excites you the most?
          </label>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap">
            {formats.map((format) => (
              <button
                key={format}
                type="button"
                onClick={() => toggleFormat(format)}
                className={`w-full rounded-lg border px-4 py-2 text-nowrap transition-colors ${
                  selectedFormats.includes(format)
                    ? "border-green-500 bg-black text-green-500"
                    : "border-transparent bg-black text-white hover:border-gray-400"
                }`}
                aria-pressed={selectedFormats.includes(format)}
              >
                {format}
              </button>
            ))}
          </div>
          {errors?.formats ? (
            <p className="text-destructive text-sm">{errors.formats}</p>
          ) : null}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <input
            type="checkbox"
            id="receive-updates"
            name="receive-updates"
            className="h-4 w-4 rounded border-gray-300 accent-green-500"
          />
          <label
            htmlFor="receive-updates"
            className="text-background cursor-pointer select-none"
          >
            I’d like to receive updates and launch discounts
          </label>
        </div>

        <input
          type="hidden"
          name="sports"
          value={JSON.stringify(selectedSports)}
        />
        <input
          type="hidden"
          name="formats"
          value={JSON.stringify(selectedFormats)}
        />

        <Button
          type="submit"
          className="bg-primary text-foreground font-roboto-condensed w-fit px-10 text-lg font-semibold"
        >
          Submit
        </Button>

        {state.message ? (
          <p
            className={
              state.success
                ? "mt-2 text-sm text-green-500"
                : "text-destructive mt-2 text-sm"
            }
          >
            {state.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
