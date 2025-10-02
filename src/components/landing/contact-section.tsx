import { ChevronUp, Clock, Mail, Phone } from "lucide-react";
import Image from "next/image";
import ContactUsForm from "./contact-us-form";
import Link from "next/link";

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
                <p>hello@ballaratbox.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-primary size-4" />
                <p>+41-912-159-1294</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-primary size-4" />
                <p>Monday - Friday, 8 AM - 5 PM</p>
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
