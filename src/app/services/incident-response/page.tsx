import ShieldIcon from "@/assets/svg/shield";
import Benefits from "@/components/services/benefits";
import Features from "@/components/services/features";
import Hero from "@/components/services/hero";
import Quotes from "@/components/services/quotes";

const features: Feature[] = [
  {
    title: "Rapid investigations using AWS APIs",
    description:
      "Time is of the essence when you have a breach, which is why we automate a lot of our evidence gathering activities with toolkits that use the AWS APIs.",
  },
  {
    title: "Responders that are specialists in AWS",
    description:
      "All members of our incident response team are AWS certified and have in depth knowledge of AWS services. We know how to investigate and contain breaches in AWS.",
  },
  {
    title: "Responders that know how attackers think ",
    description:
      "Our incident response team are experienced penetration testers and red teamers. We understand the mindset of an attacker and what tracks to look for.",
  },
];

export default function Page() {
  return (
    <>
      <Hero
        title="Cloud Native 24/7 Incident Response"
        subtitle="mobilise"
        icon={<ShieldIcon />}
      />
      <Features
        title="On-call cloud security specialists for emergencies"
        description="In the event of a cloud security breach, our AWS certified incident responders are available 24/7 to assist with urgent containment and recovery operations. We assist with ensuring duty of care for protection of customer data during an attack and eradicating persistent threats."
        icon={<ShieldIcon />}
        features={features}
      />
      <Benefits
        image={{
          src: "incident-response.png",
          alt: "A person working as surveillance security",
        }}
        benefits={[
          "We help you meet your regulatory and cyber insurance requirements for incident response capabilities",
          "Our focus on AWS security ensures you have access to a skilled team that can rapidly contain a breach and reduce downtime",
          "Evidence collection is automated using AWS APIs to accelerate the response process and get your systems back online quickly",
          "Our managed security service experience means we know how to collect data from your existing security tooling",
          "Regular reporting is provided to help you keep your customers  updated and provide assurance during a breach event",
        ]}
      />
      <Quotes />
    </>
  );
}
