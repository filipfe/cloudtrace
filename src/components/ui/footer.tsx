export default function Footer() {
  return (
    <footer
      className="bg-[#262E45] bg-right bg-no-repeat z-10"
      style={{ backgroundImage: "url(/footer-bg.svg)" }}
    >
      <div className="mx-auto max-w-screen-xl space-y-8 sm:py-28 px-6 sm:space-y-24 py-12">
        <div className="sm:flex sm:items-center sm:justify-between gap-8">
          <div className="text-white font-Inter font-700 text-[66px] leading-[78px] font-bold max-:text-center ">
            <h2 className="text-4xl leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
              Protect your data in the cloud with Cloudtrace.
            </h2>
          </div>
          <ul className="mt-8 flex justify-start gap-3 sm:mt-0 sm:justify-end max-lg:flex-col max-sm:flex-row flex-wrap sm:flex-nowrap">
            <li>
              <button className="min-w-max py-2.5 px-10 font-semibold text-sm rounded-full text-white bg-primary">
                Get In Touch
              </button>
            </li>
            <li>
              <button className="min-w-max py-2.5 px-10 font-semibold text-sm rounded-full border border-white text-white">
                Request a Demo
              </button>
            </li>
          </ul>
        </div>
        <div className="flex items-start justify-between flex-wrap gap-8 border-t border-gray-100 pt-8 lg:pt-16">
          <div>
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/logo.svg" className="h-8" alt="cloudtrace Logo" />
              <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
                cloudtrace
              </span>
            </a>
            <ul className="mt-6 space-y-4 text-sm">
              {/* <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  Website Privacy Statement
                </a>
              </li> */}
              <li className="text-white transition hover:opacity-75">
                © {new Date().getFullYear()} Cloudtrace Pty Ltd
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-white">SECURITY SERVICES</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  24/7 Managed Security
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  Penetration Testing
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  PCI DSS Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  Rapid Incident Response
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white">INSIGHTS</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  Cyber Security Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-white ">COMPANY</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  Cloudtrace Careers
                </a>
              </li>

              <li>
                <a href="#" className="text-white transition hover:opacity-75">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 text-sm flex justify-end">
              <a
                href="#"
                className="flex items-center space-x-3 rtl:space-x-reverse max-md:invisible"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.986 19.9906H15.8023V19.663C15.8023 17.3591 15.8043 15.0552 15.8012 12.7512C15.7997 11.6798 15.2336 10.89 14.2627 10.5858C13.1022 10.2222 11.7532 11.1168 11.6362 12.3305C11.6187 12.5114 11.6135 12.6941 11.6134 12.8759C11.612 15.1343 11.6124 17.3927 11.6124 19.6511V19.986H7.44141V7.43498H11.6169V8.95128C12.0278 8.59415 12.4051 8.19778 12.8465 7.89485C14.5005 6.7597 16.3556 6.97012 17.8515 8.01571C19.2379 8.98478 19.9815 10.3373 19.992 12.0436C20.008 14.6297 19.9963 17.216 19.996 19.8022C19.996 19.8557 19.9905 19.9093 19.986 19.9905V19.9906Z"
                    fill="white"
                  />
                  <path
                    d="M4.59924 19.9901H0.443359V7.43848H4.59924V19.9901Z"
                    fill="white"
                  />
                  <path
                    d="M5.02756 2.52435C5.02307 3.91962 3.89438 5.03922 2.50354 5.02811C1.12037 5.01705 0.00924939 3.90582 5.30355e-05 2.52456C-0.0089791 1.1496 1.13684 0.000438048 2.51734 1.26506e-07C3.90177 -0.000437795 5.03205 1.13613 5.02756 2.52435Z"
                    fill="white"
                  />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
