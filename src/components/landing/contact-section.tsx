import Image from "next/image";

export default function ContactSection() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl p-4 pt-16">
        <h2 className="font-dm-sans mt-5 text-center text-4xl font-semibold text-pretty">
          Contact Us
        </h2>
        <h3 className="font-inter mx-auto mt-3 max-w-xl px-4 text-center font-medium text-pretty">
          We're launching soon in Ballarat. Complete the form below to be the
          first to know when bookings and league registrations officially open.
        </h3>
      </div>

      <div className="mx-auto max-w-screen-xl p-4 pb-16"></div>
    </div>
  );
}
