import LogoIcon from "@/assets/svg/logo";
import Link from "next/link";
import HeaderWrapper from "./wrapper";
import LinkedInIcon from "@/assets/svg/linkedin";
import Submenu from "./submenu";

const pages: Page[] = [
  {
    title: "Services",
    href: "services",
    pages: [
      {
        title: "Managed Security",
        href: "managed-security",
      },
      {
        title: "Security Testing",
        href: "security-testing",
      },
      {
        title: "PCI DSS Compliance",
        href: "pci-dss-compliance",
      },
      {
        title: "Incident Response",
        href: "incident-response",
      },
    ],
  },
  {
    title: "Case Studies",
    href: "case-studies",
  },
  {
    title: "Company",
    href: "company",
    pages: [
      {
        title: "About Us",
        href: "about-us",
      },
      {
        title: "Careers",
        href: "careers",
      },
    ],
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 mx-auto">
      <HeaderWrapper>
        <nav className=" border-gray-200 px-8 pt-4 flex max-md:flex max-md:justify-between pb-4 flex-wrap">
          <Link
            href="/"
            className="logo flex flex-1 justify-start items-center space-x-3 rtl:space-x-reverse"
          >
            <LogoIcon />
            <span className="self-center text-3xl font-bold whitespace-nowrap">
              cloudtrace
            </span>
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="md:hidden ml-3 text-white-400 hover:text-white-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden lg:block w-full md:w-auto bg-[#FFFFFF] max-lg:bg-[#f1eeee4a] py-[5px] pl-[34px] pr-[6px] lg:rounded-full"
            id="mobile-menu"
          >
            <ul className="flex-1 justify-center items-center flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              {pages.map((page) =>
                page.pages && page.pages.length > 0 ? (
                  <Submenu {...page} key={page.href}>
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200 "
                      aria-labelledby="dropdownDefaultButton"
                      key={`list-${page.href}`}
                    >
                      {page.pages.map(({ title, href }) => (
                        <li key={`list-item-${href}`}>
                          <Link
                            className="block text-sm min-w-max px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            href={`/${page.href}/${href}`}
                            key={`link-${href}`}
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Submenu>
                ) : (
                  <Link
                    className="text-[#262E45] relative hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-primary md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                    href={`/${page.href}`}
                    key={page.href}
                  >
                    {page.title}
                  </Link>
                )
              )}
              <li>
                <Link
                  href="/contact-us"
                  className="px-5 py-2 bg-[#262E45] rounded-full text-white hover:bg-primary transition-colors block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="#"
            className="flex flex-1 justify-end items-center min-md:block max-md:hidden px-5 py-2 text-sm font-Inter"
          >
            <LinkedInIcon />
          </Link>
        </nav>
      </HeaderWrapper>
    </header>
  );
}
