import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home">
        <div
          className="home__background overflow-hidden bg-no-repeat bg-top bg-cover min-h-screen grid place-content-center relative"
          style={{ backgroundImage: "url(background.png)" }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#102548] to-[50%]"></div>
          <div className="absolute inset-0 w-full h-full bg-[#102548]/25 z-10"></div>
          <div className="flex items-center gap-3 absolute left-8 bottom-8 z-10">
            <img className="h-[67px]" src="/aws.png" alt="description_1" />
            <img className="h-[67px]" src="/aws_Li.png" alt="description_2" />
          </div>
          <div className="flex items-center h-full justify-center flex-col px-5 text-center relative z-10">
            <div className=" text-white">
              <h1 className="text-7xl font-Inter font-bold leading-[78px] max-lg:text-6xl max-sm:text-5xl">
                Cloud Native Cyber Security
                <br />
                Services for AWS
              </h1>
            </div>
            <div className="pt-6">
              <div className="self-center text-center space-x-3">
                <button
                  id="Request_a_Demo"
                  type="button"
                  className="w-[164px] h-[44px] bg-[#F58500] text-white font-Inter font-[600] text-[15px] rounded-full leading-[28.8px]"
                >
                  Request a Demo
                </button>
                <button
                  id="Security_Services"
                  type="button"
                  className="w-[164px] h-[44px] bg-transparent text-white font-Inter font-[600] text-[15px] rounded-full border border-white leading-[28.8px]"
                >
                  Security Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto max-w-7xl sm:py-24 py-16 px-6">
        <div className=" relative flex flex-col justify-center items-center max-md:justify-center">
          <h3 className="text-center font-700 text-[50px] leading-[60.51px] text-[#262E45] font-bold pb-[23px]">
            Protecting your data in the cloud
          </h3>
          <p className="text-center font-Inter font-400 text-[18px] leading-[26px] text-[#565D72] pb-[41px]">
            At Cloudtrace, we’re agile. Choose how you work with our experienced
            AWS-certified team to protect your business data.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="px-[30px] pt-[39px] pb-[46px] bg-[#F7F7F7] rounded-[20px]">
              <div className="h-[62px] flex items-center mb-[23.19px]">
                <img
                  className="h-auto max-w-full"
                  src="/sentry.svg"
                  alt="image description"
                />
              </div>
              <h5 className="font-Inter font-700 text-[24px] leading-[29.05px] pb-[14px] font-bold text-[#262E45]">
                Cloudtrace <span className="text-primary">Sentry</span>
              </h5>
              <p className="font-Inter font-300 text-[16px] leading-[25px] pb-[21px] text-[#565D72]">
                24/7 Managed security providing you with an out-of-the-box cloud
                security team. Individually tailored, rapid onboarding
              </p>
              <button className="font-Inter font-500 text-[13px] leading-[15.73px] rounded-full w-[169px] h-[36px] border border-[#262E45] text-[#262E45] uppercase">
                Managed Security
              </button>
            </div>
            <div className="px-[30px] pt-[39px] bg-[#F7F7F7]  rounded-[20px] pb-[46px]">
              <div className="h-[62px] flex items-center mb-[23.19px] ">
                <img
                  className="h-auto max-w-full"
                  src="/offense.svg"
                  alt="image description"
                />
              </div>
              <h5 className="font-Inter font-700 text-[24px] leading-[29.05px] pb-[14px] font-bold text-[#262E45]">
                Cloudtrace <span className="text-primary">Offense</span>
              </h5>
              <p className="font-Inter font-300 text-[16px] leading-[25px] pb-[21px] text-[#565D72]">
                Penetration testing to find possible exploitable threats in your
                application environments –before anyone else does.
              </p>
              <button className="font-Inter font-500 text-[13px] leading-[15.73px] rounded-full w-[169px] h-[36px] border border-[#262E45] text-[#262E45] uppercase">
                PENETRATION TESTING
              </button>
            </div>
            <div className="px-[30px] pt-[39px] pb-[46px] bg-[#F7F7F7] rounded-[20px]">
              <div className="h-[62px] flex items-center mb-[23.19px]">
                <img
                  className="h-auto max-w-full"
                  src="/asse.svg"
                  alt="image description"
                />
              </div>
              <h5 className="font-Inter font-700 text-[24px] leading-[29.05px] pb-[14px] font-bold text-[#262E45]">
                Cloudtrace <span className="text-primary">Assess</span>
              </h5>
              <p className="font-Inter font-300 text-[16px] leading-[25px] pb-[21px] text-[#565D72]">
                Our AWS-certified staff can provide trusted compliance
                consulting advice and QSA compliance assessments.
              </p>
              <button className="font-Inter font-500 text-[13px] leading-[15.73px] rounded-full w-[169px] h-[36px] border border-[#262E45] text-[#262E45] uppercase">
                COMPLIANCE SERVICES
              </button>
            </div>
            <div className="px-[30px] pt-[39px] pb-[46px] bg-[#F7F7F7] rounded-[20px]">
              <div className="h-[62px] flex items-center mb-[23.19px]">
                <img
                  className="h-auto max-w-full"
                  src="/response.svg"
                  alt="image description"
                />
              </div>
              <h5 className="font-Inter font-700 text-[24px] leading-[29.05px] pb-[14px] font-bold text-[#262E45]">
                Cloudtrace <span className="text-primary">Response</span>
              </h5>
              <p className="font-Inter font-300 text-[16px] leading-[25px] pb-[21px] text-[#565D72]">
                24/7 Incident response to assist with rapid containment and
                recovery operations with automated incident toolsets.
              </p>
              <button className="font-Inter font-500 text-[13px] leading-[15.73px] rounded-full w-[169px] h-[36px] border border-[#262E45] text-[#262E45] uppercase">
                INCIDENT RESPONSE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F7]">
        <div className="container mx-auto max-w-7xl py-12 sm:px-6">
          <div
            className="overflow-hidden sm:rounded-3xl bg-[#262E45] bg-left bg-no-repeat flex flex-col lg:grid grid-cols-[3fr_2fr] lg:items-center gap-16 xl:gap-24 py-16 lg:py-28 px-6 sm:px-16 xl:px-32"
            style={{ backgroundImage: "url(/cloud.svg)" }}
          >
            <div className="relative overflow-hidden flex justify-center">
              <iframe
                className="w-full lg:w-[555px] h-96 lg:h-80 rounded-2xl"
                src="https://www.youtube.com/embed/QVOWmd0o4Os"
                frameBorder={0}
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <h3 className="font-Inter font-700 text-[40px] leading-[48.41px] pb-[14px] font-bold text-[#FFFFFF]">
                Introducing Cloudtrace Sentry
              </h3>
              <h4 className="font-Inter font-700 text-[16px] leading-[25px] pb-[21px] text-[#4AC9D4] font-bold">
                Managed Security for SaaS Businesses
              </h4>
              <p className="font-Inter font-300 text-[16px] leading-[25px] pb-[21px] text-[#FFFFFF]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="font-Inter font-500 text-[13px] leading-[15.73px] rounded-full w-[169px] h-[36px] border border-[#FFFFFF] text-[#FFFFFF] uppercase">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7]">
        <div className="container mx-auto max-w-7xl sm:py-24 py-16 px-6">
          <h2 className="text-center font-700 text-4xl lg:text-5xl text-[#262E45] font-bold mb-12 lg:mb-16">
            The Latest in Cloud Security
          </h2>
          <div className="flex flex-col md:grid grid-cols-3 gap-6 xl:gap-12">
            <div className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden h-64">
                <Image
                  width={400}
                  height={256}
                  className="object-cover w-full h-full"
                  src="/1.webp"
                  alt="avatar"
                />
              </div>
              <div className="text-start space-y-5">
                <p className="font-Inter font-400 text-[24px] leading-[32px] text-[#262E45] max-w-sm">
                  Lorem ipsum dolar nu nonummy siem ameit lorem ipsum
                </p>
                <button className="font-Inter font-500 text-[13px] leading-[15.73px] rounded-full px-[17px] py-[10px] border border-[#262E45] text-[#262E45] uppercase">
                  READ ARTICLE
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden h-64">
                <Image
                  width={400}
                  height={256}
                  className="object-cover w-full h-full"
                  src="/2_1.svg"
                  alt="avatar"
                />
              </div>
              <div className="text-start space-y-5">
                <p className="font-Inter font-400 text-[24px] leading-[32px] text-[#262E45] max-w-sm">
                  Lorem ipsum dolar nu nonummy siem ameit lorem ipsum
                </p>
                <button className="font-Inter font-500 text-[13px] leading-[15.73px] rounded-full px-[17px] py-[10px] border border-[#262E45] text-[#262E45] uppercase">
                  READ ARTICLE
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden h-64">
                <Image
                  width={400}
                  height={256}
                  className="object-cover w-full h-full"
                  src="/3.webp"
                  alt="avatar"
                />
              </div>
              <div className="text-start space-y-5">
                <p className="font-Inter font-400 text-[24px] leading-[32px] text-[#262E45] max-w-sm">
                  Lorem ipsum dolar nu nonummy siem ameit lorem ipsum
                </p>
                <button className="font-Inter font-500 text-[13px] leading-[15.73px] rounded-full px-[17px] py-[10px] border border-[#262E45] text-[#262E45] uppercase">
                  READ ARTICLE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#FFFFFF] overflow-hidden">
        <div className=" absolute top-[-200px] right-[10px] z-0">
          <img
            className="h-full"
            src="/background_about.svg"
            alt="description_1"
          />
        </div>
        <div className=" absolute bottom-[-100px] left-[30px] z-0">
          <img
            className="h-full"
            src="/background_about.svg"
            alt="description_1"
          />
        </div>
        <div className="container mx-auto max-w-7xl sm:py-24 py-16 pb-24 sm:pb-32 px-6 relative z-10">
          <div className="flex flex-col gap-12 items-center xl:grid grid-cols-[4fr_3fr] lg:gap-24">
            <div className="relative">
              <Image
                width={800}
                height={548}
                className="rounded-3xl max-w-2xl object-contain w-full"
                src="/4.webp"
                alt="image description_1"
              />
              <div className="flex gap-4 items-center absolute -bottom-8 right-8">
                <img className="h-[67px] " src="/aws.png" alt="description_1" />
                <img
                  className="h-[67px] "
                  src="/aws_Li.png"
                  alt="description_2"
                />
              </div>
            </div>
            <div>
              <h2 className="font-Inter font-700 text-[40px] leading-[48.41px] pb-[14px] font-bold text-[#262E45]">
                About Us
              </h2>
              <h3 className="font-Inter font-700 text-[16px] leading-[25px] pb-[21px] text-[#F58500] font-bold">
                5+ YEARS ASSISTING AWS CUSTOMERS WITH SECURITY IN THE CLOUD
              </h3>
              <p className="font-Inter font-300 text-[16px] leading-[25px] pb-[21px] text-[#565D72]">
                With a self-professed obsession of all things cloud security,
                we&apos;re a team of motivated, experienced, and highly-skilled
                security experts putting our minds (and keyboards) together to
                do great work.
                <br />
                <br />
                By focusing exclusively on securing AWS environments, we&apos;ve
                been able to fine tune our security senses and earn
                gold-standard credentials to ensure our customers get the best
                possible outcome, with the soundest peace of mind.
              </p>
              <button className="font-Inter font-bold font-500 text-[13px] leading-[15.73px] rounded-full w-[169px] h-[36px] border border-[#262E45] text-[#262E45] uppercase">
                More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
