import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section>
        <div className="w-full mx-auto max-w-7xl pt-32 pb-16 lg:pt-40 lg:pb-20 sm:px-6 flex flex-col gap-12 sm:gap-16">
          <div className="flex flex-col items-center gap-6 px-6 sm:px-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold max-w-3xl leading-tight sm:leading-tight lg:leading-tight">
              Secure the future
            </h1>
            <p className="text-light text-sm sm:text-base text-center">
              Join our experienced cyber team and fast-track your career in
              cloud security. Sharpen your skills in both offensive and
              defensive security with training on cloud application attack
              techniques. Learn the latest technologies by working with our
              global customer base of innovative cloud-native businesses.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-[#F7F7F7]">
        <article className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-16 xl:gap-32">
          <Image
            width={448}
            height={448}
            className="rounded-md object-contain w-full max-w-sm lg:max-w-none mx-auto"
            src="/careers/main.png"
            alt="A landscape of mountains covered with snow"
          />
          <div className="grid gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight lg:leading-tight">
              Help us protect our customers
            </h2>
            <p className="text-sm sm:text-base text-light">
              Here's why passionate cyber professionals choose to work with us:
            </p>
            <ul className="text-sm sm:text-base text-light list-disc pl-3.5">
              <li>
                <span className="font-bold">Make a real difference:</span> Your
                work directly protects people's data in the cloud, making the
                digital world a safer place.
              </li>
              <li>
                <span className="font-bold">
                  Join a leader in the evolving world of cloud security:
                </span>{" "}
                We're at the forefront of innovation, working with some of the
                brightest stars in technology to secure their cloud-native
                platforms.
              </li>
              <li>
                <span className="font-bold">
                  Shape the future of cloud-native threat detection:
                </span>{" "}
                Help us build a next generation threat detection service that
                changes the way modern applications are protected.
              </li>
              <li>
                <span className="font-bold">
                  Unlock your potential with continuous learning:
                </span>{" "}
                We invest in your growth with training programs, attendance at
                security conferences, and mentorship from cloud security
                experts.
              </li>
              <li>
                <span className="font-bold">
                  Collaborative fast-paced environment:
                </span>{" "}
                You'll work alongside brilliant minds who share your passion for
                cyber security and problem-solving.
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="py-16 lg:py-32">
        <div className="max-w-7xl mx-auto w-full px-6 grid gap-8 lg:gap-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight lg:leading-tight">
            Current Opportunities
          </h2>
          <ul>
            <li className="border-t border-[#E7E7E7] flex items-center justify-between gap-6 py-6">
              <div>
                <h4 className="font-bold sm:text-lg lg:text-xl">SOC Analyst</h4>
                <p className="text-[#979CAB] text-sm">Full-time, Remote</p>
              </div>
              <Link
                href="/contact-us"
                className="border border-foreground py-2 px-6 text-sm uppercase rounded-full"
              >
                READ MORE
              </Link>
            </li>
            <li className="border-t border-[#E7E7E7] flex items-center justify-between gap-6 py-4">
              <div>
                <h4 className="font-bold sm:text-lg lg:text-xl">
                  Data Engineer
                </h4>
                <p className="text-[#979CAB] text-sm">Full-time, Remote</p>
              </div>
              <Link
                href="/contact-us"
                className="border border-foreground py-2 px-6 text-sm uppercase rounded-full"
              >
                READ MORE
              </Link>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
            <p className="text-light text-sm sm:text-base max-w-2xl">
              No jobs listed suited to you? Get in touch via our contact form
              and attach your resume so we can keep your information on file for
              the next relevant job opportunity.
            </p>
            <Link
              href="/contact-us"
              className="min-w-max border border-foreground py-2.5 px-6 text-sm rounded-full sm:text-base font-semibold"
            >
              Express your Interest
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
