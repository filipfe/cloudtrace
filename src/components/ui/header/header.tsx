import LogoIcon from "@/assets/svg/logo";
import Link from "next/link";
import HeaderWrapper from "./wrapper";
import LinkedInIcon from "@/assets/svg/linkedin";
import Submenu from "./submenu";
import Dropdown from "./dropdown";

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
        <nav className="border-gray-200 px-6 pt-4 flex max-md:flex max-md:justify-between pb-4 flex-wrap">
          <Link
            href="/"
            className="logo flex flex-1 justify-start items-center space-x-3 rtl:space-x-reverse max-w-max"
          >
            <LogoIcon />
            <span className="self-center text-2xl sm:text-3xl font-bold whitespace-nowrap">
              cloudtrace
            </span>
          </Link>
          <Dropdown>
            {pages.map(
              (page) =>
                (!page.pages || page.pages.length === 0) && (
                  <Link
                    className="py-2 text-white text-sm"
                    href={`/${page.href}`}
                  >
                    {page.title}
                  </Link>
                )
            )}
          </Dropdown>
          <div className="hidden lg:block w-full md:w-auto bg-[#FFFFFF] max-lg:bg-[#f1eeee4a] py-[5px] pl-[34px] pr-[6px] lg:rounded-full">
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
