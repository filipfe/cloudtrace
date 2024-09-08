import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="w-full mx-auto max-w-7xl pt-32 pb-16 lg:pt-40 lg:pb-20 sm:px-6 flex flex-col gap-12 sm:gap-16">
        <div className="flex flex-col items-center gap-3 px-6 sm:px-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold max-w-3xl leading-tight sm:leading-tight lg:leading-tight">
            Contact Us
          </h1>
          <p className="text-light text-sm sm:text-base lg:text-lg text-center">
            Get in touch with us to find out more about our services
          </p>
        </div>
        <form action="">
          <div className="rounded-2xl bg-[#F7F7F7] px-6 sm:px-14 py-8 sm:py-12 max-w-3xl w-full mx-auto flex flex-col sm:grid grid-cols-2 gap-x-5 gap-y-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="first-name"
                className="w-full pr-2 text-sm text-light pb-1.5"
              >
                First Name*
              </label>
              <input
                id="first-name"
                type="text"
                name="first-name"
                className="rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="last-name"
                className="w-full pr-2 text-sm text-light pb-1.5"
              >
                Last Name*
              </label>
              <input
                id="last-name"
                type="text"
                name="last-name"
                className="rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="w-full pr-2 text-sm text-light pb-1.5"
              >
                Email*
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="company"
                className="w-full pr-2 text-sm text-light pb-1.5"
              >
                Company*
              </label>
              <input
                id="company"
                type="text"
                name="company"
                className="rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <label
                htmlFor="message"
                className="w-full pr-2 text-sm text-light pb-1.5"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                className="rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-32 resize-none"
                required
              />
            </div>
            <button className="text-sm rounded-full py-3 px-9 font-semibold text-white bg-primary max-w-max mt-6 col-span-2">
              Submit Enquiry
            </button>
          </div>
        </form>
        <div className="flex flex-wrap gap-6 sm:grid grid-cols-2 max-w-3xl mx-auto w-full px-6 sm:px-0">
          <div className="flex flex-col gap-2">
            <p className="text-[#9EA6B7] font-bold text-sm sm:text-base uppercase">
              MAILING ADDRESS
            </p>
            <address className="font-normal not-italic text-sm sm:text-base">
              International Tower 3,
              <br />
              Level 17/300 Barangaroo Ave,
              <br />
              Barangaroo NSW 2000
              <br />
              Australia
            </address>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#9EA6B7] font-bold text-sm sm:text-base uppercase">
              CONTACT US
            </p>
            <address className="font-normal not-italic text-sm sm:text-base">
              sales@cloudtrace.com.au
              <br />
              +61 2 8188 3773
            </address>
          </div>
        </div>
        <Image
          width={1280}
          height={485}
          className="object-contain sm:rounded-2xl mt-6"
          src="/contact-us.png"
          alt="Sydney view"
        />
      </div>
    </section>
  );
}
