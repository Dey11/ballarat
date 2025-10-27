import { ChevronUp, Clock, Mail, Phone } from "lucide-react";
import Image from "next/image";
import ContactUsForm from "./contact-us-form";
import Link from "next/link";
import { EMAIL, PHONE } from "@/lib/constants";

export default function ContactSection() {
  return (
    <div id="contact">
      <div className="mx-auto max-w-screen-2xl p-4 pt-16">
        <h2 className="font-dm-sans mt-5 text-center text-4xl font-semibold text-pretty">
          Contact Us
        </h2>
        <h3 className="font-inter mx-auto mt-3 max-w-xl px-4 text-center font-medium text-pretty">
          We're launching soon in Ballarat. Complete the form below to be the
          first to know when bookings and league registrations officially open.
        </h3>
      </div>

      <div className="mx-auto max-w-screen-xl p-4 pb-16">
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="flex flex-1 flex-col gap-5 rounded-lg bg-white p-4">
            <h4 className="font-roboto-condensed text-xl font-semibold">
              Contact us at
            </h4>

            <div className="font-inter flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="text-primary size-4" />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-primary size-4" />
                {PHONE ? (
                  <a href={`tel:${PHONE}`}>{PHONE}</a>
                ) : (
                  <p>Coming Soon</p>
                )}
              </div>
              <div className="flex max-w-xs items-center gap-2">
                <Clock className="text-primary size-4 shrink-0" />
                <p>
                  Staffed Hours: Every day from 5 PM – 10 PM (24/7 access model)
                </p>
              </div>
            </div>

            <div className="relative h-80 w-full">
              <Image
                src="/map.png"
                alt="map"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <ContactUsForm />
        </div>
      </div>

      <Link
        href="/#hero"
        className="font-inter flex items-center justify-center gap-1"
      >
        <span>Back to top</span>
        <ChevronUp className="size-5" />
      </Link>
    </div>
  );
}
