import CameraIcon from "@/assets/svg/camera";
import Benefits from "@/components/services/benefits";
import Features from "@/components/services/features";
import Hero from "@/components/services/hero";
import Quotes from "@/components/services/quotes";

const features: Feature[] = [
  {
    title: "Cloud Native SIEM deployed in your AWS environment",
    description:
      "Our SIEM solution lets you maintain control of your data using an Amazon Security Lake service in your AWS organisation. Threat analysis and incident investigation is performed inside your AWS environment to ensure data does not leave your accounts.",
  },
  {
    title: "Threat detection rules tailored for your applications",
    description:
      "We spend time understanding your  applications and developing custom rules to detect attack activity using logs from your software stack. Threat modelling is used during onboarding to identify attack vectors unique to your application.",
  },
  {
    title: "Out-of-the-box controls for speeding up your sales cycles",
    description:
      "B2B SaaS prospects often ask for assurance on the controls in place to protect their data. Our service lets you reference our monitoring controls when responding to security questionnaires during your sales process.",
  },
];

export default function Page() {
  return (
    <>
      <Hero
        title="Cloud Native 24/7 Managed Security"
        subtitle="sentry"
        icon={<CameraIcon />}
      />
      <Features
        title="Managed security designed for businesses in the cloud"
        description="Our managed security service deploys a cloud-native SIEM solution into your AWS environment that is monitored 24/7 by an ISO 27001 certified Security Operation Centre staffed with AWS certified cloud security specialists."
        icon={<CameraIcon />}
        features={features}
      />
      <Benefits
        image={{
          src: "managed-security.png",
          alt: "A digital map with numbers",
        }}
        benefits={[
          "Lower cost than recruiting and staffing an in-house 24/7 security monitoring team with security tooling",
          "Cost effective data storage allows you to ingest more event sources for improved security visibility",
          "Use of AWS native services with our curated detection rules means no additional SIEM licensing to pay for",
          "Access to a team of experienced cloud security experts in an increasingly tight talent pool",
          "Our 24/7 alert investigation prevents your staff being disturbed out of hours unless there is a validated security incident",
        ]}
      />
      <Quotes />
    </>
  );
}
