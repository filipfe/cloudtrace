export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 mx-auto">
      <nav className=" border-gray-200 px-[36px] pt-4 flex max-md:flex max-md:justify-between pb-4 flex-wrap">
        <a
          href="#"
          className="logo flex flex-1 justify-start items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.svg" className=" h-8" alt="cloudtrace Logo" />
          <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
            cloudtrace
          </span>
        </a>
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
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="text-[#262E45] hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
              >
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="hidden max-lg:bg-[#262E45] bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
              >
                <ul className="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:bg-gray-100 text-[#262E45] max-lg:text-white block px-4 py-2"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:bg-gray-100 text-[#262E45] max-lg:text-white block px-4 py-2"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:bg-gray-100 text-[#262E45] max-lg:text-white block px-4 py-2"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-[#262E45] max-lg:text-white block px-4 py-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="text-[#262E45] hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Case Studies
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="text-[#262E45] hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
              >
                Company
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="hidden max-lg:bg-[#262E45] bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
              >
                <ul className="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:bg-gray-100 text-[#262E45] max-lg:text-white block px-4 py-2"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:bg-gray-100 text-[#262E45] max-lg:text-white block px-4 py-2"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:bg-gray-100 text-[#262E45] max-lg:text-white block px-4 py-2"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-[#262E45] max-lg:text-white block px-4 py-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="text-[#262E45] hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
              >
                Insights
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" px-5 py-2 bg-[#262E45] rounded-full text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block md:hover:text-blue-700 md:p-4px"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="flex flex-1 justify-end items-center min-md:block max-md:hidden px-5 py-2   text-white text-sm font-Inter"
        >
          <img src="/logo_in.svg" className="h-5" alt="logo_in" id="cloud_in" />
        </a>
      </nav>
    </header>
  );
}
