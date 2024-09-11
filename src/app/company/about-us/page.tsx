import AboutUsIcon from "@/assets/svg/about-us";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section
        className="bg-[#262E45] bg-right bg-no-repeat"
        style={{ backgroundImage: "url(/footer-bg.svg)" }}
      >
        <div className="w-full mx-auto max-w-7xl pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 grid lg:grid-cols-2 lg:items-center gap-16">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm sm:text-base lg:text-lg font-bold uppercase text-primary">
              About Us
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold max-w-xl leading-tight sm:leading-tight lg:leading-tight">
              Protecting your data in the cloud.
            </h1>
            <p className="text-white text-sm sm:text-base leading-relaxed sm:leading-relaxed mt-2 lg:max-w-lg">
              Cloudtrace is a cyber consultancy and managed security service
              provider focussed on protecting modern applications hosted in AWS.
              We understand the shared responsibility model and help AWS
              customers with their{" "}
              <span className="italic">Security in the Cloud</span>{" "}
              responsibilities.
            </p>
          </div>
          <div className="w-full max-w-xl lg:max-w-none mx-auto">
            <AboutUsIcon />
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <article className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-16">
          <figure className="flex flex-col items-center gap-6">
            <Image
              width={448}
              height={448}
              className="rounded-md object-contain w-full max-w-sm lg:max-w-md"
              src="/about-us/ceo.png"
              alt="The CEO of Cloudtrace in company t-shirt"
            />
            <figcaption className="text-primary uppercase font-bold text-sm sm:text-base text-center">
              Gareth Batchelor, Founder and CEO
            </figcaption>
          </figure>
          <div className="grid gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight lg:leading-tight">
              Experienced and Accredited
            </h2>
            <p className="text-sm sm:text-base text-light">
              Cloudtrace was founded by a industry veteran, Gareth Batchelor,
              who has 25 years’ experience in the field of cybersecurity, This
              experience has been gained across multiple sectors, including
              financial services, telecommunications, healthcare and fast moving
              consumer goods. This has brought a deep understanding of business
              risk to the Cloudtrace service portfolio and assembled a team of
              experts in offensive and defensive security to deliver those
              services for our customers.
            </p>
            <p className="text-sm sm:text-base text-light">
              Cloudtrace is an AWS Advanced Tier Services Partner accredited
              with the AWS Level 1 Managed Security Services Provider
              Competency. Cloudtrace is registered by the PCI Security Standards
              Council as Qualified Security Assessor Company (QSAC) for
              conducting Report on Compliance Assessments in Australia and the
              USA. Our 24/7 Security Operations Centre is ISO 27001 certified.
            </p>
          </div>
        </article>
      </section>
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="max-w-7xl mx-auto w-full px-6">
          <Image
            width={1280}
            height={640}
            className="rounded-2xl"
            src="/about-us/main.png"
            alt="A landscape of mountains covered with snow"
          />
        </div>
      </section>
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="w-full mx-auto max-w-7xl sm:px-6">
          <div className="bg-[#F7AD66] px-6 sm:px-16 lg:px-24 py-12 sm:py-16 sm:rounded-2xl relative overflow-hidden justify-between flex flex-col gap-6 md:flex-row md:items-center">
            {bg}
            <div className="grid gap-1 relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight sm:leading-tight lg:leading-tight">
                Interested in joining our team?
              </h2>
              <p className="text-sm sm:text-base">
                We’re always on the lookout for motivated technicians.
              </p>
            </div>
            <Link
              href="/company/careers"
              className="bg-white max-w-max rounded-full py-2.5 px-8 text-sm font-semibold relative z-10 [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]"
            >
              Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const bg = (
  <svg
    height="100%"
    viewBox="0 0 514 190"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-[60%] sm:-right-8"
  >
    <path
      d="M185.885 92.0875C172.293 87.7405 158.531 85.6997 144.967 85.6997C68.9191 85.6997 -0.938011 149.734 0.19124 229.999H46.096C45.8035 175.557 91.4021 131.475 144.286 131.815C197.048 131.659 242.763 175.462 242.477 229.999H288.382C288.382 165.013 245.116 109.992 185.892 92.0875H185.885Z"
      fill="#F3943A"
    />
    <path
      d="M474.813 122.401C457.119 32.8027 378.439 -19.9932 298.609 -20C250.398 -20 201.779 -0.755102 165.895 41.2721C184.065 43.3401 201.473 47.9456 217.731 54.7891C310.446 -20.1497 447.738 58.7755 431.003 175.912C475.684 153.02 535.112 181.286 546.153 230H592.922C583.554 171.653 534.792 126.374 474.813 122.401Z"
      fill="#F3943A"
    />
  </svg>
);
