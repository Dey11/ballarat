import { Input } from "../ui/input";

export default function ContactUsForm() {
  return (
    <div className="bg-foreground rounded-brand flex-2 p-6">
      <h3 className="font-dm-sans text-primary pb-5 text-2xl font-semibold">
        Contact Us
      </h3>

      <form className="font-inter flex flex-col gap-2">
        <div className="flex items-center justify-between gap-5">
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="first-name" className="text-background">
              First Name
            </label>
            <Input
              placeholder="Enter your first name"
              className="border-none"
              id="first-name"
            />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="last-name" className="text-background">
              Last Name
            </label>
            <Input
              placeholder="Enter your last name"
              className="border-none"
              id="last-name"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="email" className="text-background">
              E-mail
            </label>
            <Input
              placeholder="Enter your email"
              className="border-none"
              id="email"
            />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="phone-number" className="text-background">
              Phone Number
            </label>
            <Input
              placeholder="Enter your phone number"
              className="border-none"
              id="phone-number"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
