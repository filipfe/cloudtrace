import CircleCheck from "@/assets/svg/circle-check";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

type Props = { benefits: string[]; image: ImageProps };

export default function Benefits({ benefits, image: { src, alt } }: Props) {
  return (
    <section className="pb-16">
      <div className="w-full mx-auto max-w-7xl sm:px-6">
        <div className="bg-[#F7AD66] px-6 sm:px-16 lg:px-12 xl:pl-24 py-16 lg:py-12 sm:rounded-3xl min-h-96 relative overflow-hidden flex flex-col gap-12 lg:gap-12 xl:gap-24 lg:grid grid-cols-2 lg:items-center">
          {bg}
          <div className="relative z-10 rounded-xl overflow-hidden">
            <Image
              width={1200}
              height={800}
              src={`/services/${src}`}
              alt={alt}
            />
          </div>
          <div className="flex flex-col gap-6 relative z-10">
            <h3 className="font-bold uppercase text-sm sm:text-base text-white">
              Service Benefits
            </h3>
            <ul>
              {benefits.map((benefit, k) => (
                <li
                  className="pt-2 first:pt-0 flex items-start gap-2 leading-relaxed text-sm sm:text-base sm:leading-relaxed"
                  key={`benefit-${k}`}
                >
                  <div className="h-4 w-4 mt-1.5">
                    <CircleCheck />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us"
              className="border rounded-full border-foreground py-2.5 px-10 max-w-max text-sm font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const bg = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 693 613"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="-left-16 -top-8 lg:left-0 lg:-inset-y-6 max-h-96 lg:max-h-none lg:h-[calc(100%+48px)] absolute max-w-max"
  >
    <path
      d="M347.205 0H347.062C299.921 0 252.867 6.34727 207.533 19.4539V75.1451C375.827 20.5316 571.745 71.5316 692.01 199.864V126.462C598.267 44.8667 472.574 0.0237726 347.205 0Z"
      fill="url(#paint0_linear_10_2724)"
    />
    <path
      d="M154.062 37.4811C98.2123 59.7797 46.293 91.7301 0.285156 132.516V205.854C45.1757 160.496 96.7621 120.772 154.062 95.6288V37.4811Z"
      fill="url(#paint1_linear_10_2724)"
    />
    <path
      d="M466.766 179.775V123.775C428.754 112.428 389.474 106.92 350.289 106.92C239.263 106.92 128.99 151.145 50.4293 232.043C31.7441 250.887 17.0922 261.759 0.292969 269.612V330.501C24.3191 316.27 46.2136 308.44 68.861 287.901C169.189 178.088 324.685 130.059 466.774 179.783L466.766 179.775Z"
      fill="url(#paint2_linear_10_2724)"
    />
    <path
      d="M520.24 143.206V202.511C560.749 223.771 597.255 252.655 627.716 287.902C649.452 312.792 664.516 341.311 692.013 361.945V283.306C647.574 221.283 588.032 173.318 520.24 143.206Z"
      fill="url(#paint3_linear_10_2724)"
    />
    <path
      d="M682.344 421.019C652.216 401.447 627.429 377.69 608.657 350.399C592.404 326.785 573.164 305.913 551.777 287.901C495.753 240.744 424.467 213.905 349.679 213.905C349.449 213.905 349.211 213.905 348.989 213.905C264.85 213.905 185.149 247.9 126.462 307.26C84.9393 352.943 43.892 362.372 0.285156 394.83V468.152C20.3175 444.744 45.7145 425.441 73.7028 412.216C104.702 397.286 134.41 375.257 164.474 344.86C236.981 269.572 355.083 246.323 450.569 287.893C495.959 307.022 535.786 338.83 564.59 380.701C587.364 413.792 617.167 442.446 653.214 465.854C667.7 475.268 680.632 486.37 692.011 498.7V427.771C688.818 425.489 685.664 423.167 682.352 421.011L682.344 421.019Z"
      fill="url(#paint4_linear_10_2724)"
    />
    <path
      d="M216.322 451.812C200.49 446.749 184.459 444.372 168.658 444.372C80.0738 444.372 -1.29968 518.962 0.0157324 612.459H53.4882C53.1474 549.042 106.263 497.693 167.866 498.09C229.326 497.907 282.576 548.931 282.244 612.459H335.716C335.716 536.76 285.318 472.669 216.33 451.812H216.322Z"
      fill="url(#paint5_linear_10_2724)"
    />
    <path
      d="M552.877 487.124C532.266 382.755 440.615 321.255 347.624 321.247C291.465 321.247 234.831 343.665 193.031 392.62C214.197 395.029 234.475 400.394 253.414 408.366C361.412 321.073 521.338 413.009 501.845 549.456C553.891 522.791 623.117 555.716 635.977 612.461H690.456C679.545 544.495 622.744 491.752 552.877 487.124Z"
      fill="url(#paint6_linear_10_2724)"
    />
    <path
      d="M386.845 446.742C377.106 433.033 362.185 427.898 346.598 427.898C331.938 427.898 316.692 432.431 304.584 438.628C357.304 479.889 389.484 545.43 389.175 612.461H442.647C442.631 586.469 438.978 560.946 431.815 536.278C422.337 503.519 406.964 473.249 386.845 446.742Z"
      fill="url(#paint7_linear_10_2724)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_10_2724"
        x1="223.294"
        y1="103.768"
        x2="705.941"
        y2="107.995"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E9923E" />
        <stop offset="0.811948" stop-color="#F7AD66" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_10_2724"
        x1="5.28777"
        y1="124.899"
        x2="158.494"
        y2="125.405"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E9923E" />
        <stop offset="0.811948" stop-color="#F7AD66" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_10_2724"
        x1="15.4684"
        y1="223.002"
        x2="480.196"
        y2="226.505"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E9923E" />
        <stop offset="0.811948" stop-color="#F7AD66" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_10_2724"
        x1="525.828"
        y1="256.774"
        x2="696.964"
        y2="257.26"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E9923E" />
        <stop offset="0.811948" stop-color="#F7AD66" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_10_2724"
        x1="22.7881"
        y1="361.769"
        x2="711.901"
        y2="367.815"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E9923E" />
        <stop offset="0.811948" stop-color="#F7AD66" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_10_2724"
        x1="10.9214"
        y1="531.642"
        x2="345.377"
        y2="534.055"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E9923E" />
        <stop offset="0.811948" stop-color="#F7AD66" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_10_2724"
        x1="209.213"
        y1="472.444"
        x2="704.778"
        y2="475.501"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E9923E" />
        <stop offset="0.811948" stop-color="#F7AD66" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_10_2724"
        x1="309.075"
        y1="523.722"
        x2="446.626"
        y2="524.094"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E9923E" />
        <stop offset="0.811948" stop-color="#F7AD66" />
      </linearGradient>
    </defs>
  </svg>
);
