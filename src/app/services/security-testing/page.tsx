import CubeIcon from "@/assets/svg/cube";
import Benefits from "@/components/services/benefits";
import Features from "@/components/services/features";
import Hero from "@/components/services/hero";
import Quotes from "@/components/services/quotes";

const features: Feature[] = [
  {
    title: "Web and mobile app penetration testing focussed on exploitability ",
    description:
      "Because we know how modern applications are constructed, we ensure the full attack surface of your software stack is tested. Our reports provide an non-theoretical view of business risk based on real world exploitability. If a finding can’t be exploited it’s not included, we don’t waste your time with “filler” content.",
  },
  {
    title: "Red teaming for businesses that have moved to the cloud",
    description:
      "If your IT environment has moved to the cloud it is important to have visibility of the risk of unauthorised access to your IaaS and SaaS hosted data. We emulate the latest attack methods to qualify that risk, including sophisticated social engineering and MFA bypass techniques.",
  },
  {
    title: "Purple teaming exercises to fine-tune your security ops",
    description:
      "It’s hard to know how to defend against the latest attack methods, with many security operations teams relying on real incident investigations to identify new TTPs. Our red teams emulate current adversary behaviour and work with you to implement detection controls that alert on initial access events and reduce dwell time. ",
  },
];

export default function Page() {
  return (
    <>
      <Hero
        title="Cloud Native Penetration Testing and Red Teaming"
        subtitle="offence"
        icon={<CubeIcon />}
      />
      <Features
        title="Security testing for modern application environments"
        description='Our AWS and OSCP certified offensive security team specialises in finding exploitable threats in cloud hosted applications.
We understand the shared responsibility model and help our clients verify the effectiveness of their "security in the cloud" controls.'
        icon={<CubeIcon />}
        features={features}
      />
      <Benefits
        benefits={[
          "Focussing our reporting on exploitable threats lets you prioritise your security efforts based on actual risk",
          "We demonstrate findings being exploited in your environment to help your remediation teams understand the impact",
          "Our managed security service experience with blue team tooling means we can provide system specific recommendations",
          "We use AWS APIs to accurately define your test scope and provide a fixed price based on your attack surface",
          "Understanding AWS services lets us focus our testing on the areas within your responsibility and reduce the test duration",
        ]}
        image={{
          src: "security-testing.png",
          alt: "A wooden cube with padlock on a keyboard",
        }}
      />
      <Quotes />
    </>
  );
}
