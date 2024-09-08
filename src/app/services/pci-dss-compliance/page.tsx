import CardIcon from "@/assets/svg/card";
import Benefits from "@/components/services/benefits";
import Features from "@/components/services/features";
import Hero from "@/components/services/hero";
import Quotes from "@/components/services/quotes";

const features: Feature[] = [
  {
    title: "Level 1 service provider assessments for Fintechs",
    description:
      "Fintechs offering card payment solutions provide assurance to their customers and investors by being attested as a PCI DSS compliant level 1 service provider. Our Fintech experience and cloud expertise ensures your level 1 assessment is conducted effectively and you don’t spend unnecessary time explaining cloud services.",
  },
  {
    title: "Level 1 service provider assessments for ISVs",
    description:
      "ISVs that provide services for entities with PCI DSS compliance obligations are often required to issue an AOC to their customers on an annual basis.  Using a QSA with cloud expertise lets you fulfil your annual compliance assessment requirements effectively without having to educate your assessor on cloud services.",
  },
  {
    title: "Level 1 merchant assessments for online business",
    description:
      "If your annual payment card transaction volumes categorise your business as a level 1 merchant (or your acquirer requests an onsite assessment), you will need to engage a QSA to assess your PCI DSS compliance. For cloud hosted online business, it is important that your QSA has deep knowledge of the cloud services that you use .",
  },
];

export default function Page() {
  return (
    <>
      <Hero
        title="Cloud Native PCI DSS Compliance Services"
        subtitle="verify"
        icon={<CardIcon />}
      />
      <Features
        title="AWS certified QSAs for your cloud hosted CDE"
        description="We are a PCI Security Standards Council Qualified Security Assessor (QSA) company with AWS certified staff that have in-depth knowledge of cloud security controls. Registered to conduct Report on Compliance assessments in Australia and the USA, we understand AWS services and the shared responsibility model."
        icon={<CardIcon />}
        features={features}
      />
      <Benefits
        image={{
          src: "pci-dss-compliance.png",
          alt: "Numbers on a credit card",
        }}
        benefits={[
          "We value your time, our understanding of AWS services means you don’t need to spend time explaining those to your assessor",
          "Understanding AWS services lets us focus on the areas within your responsibility and can reduce assessment duration",
          "Our assessment processes are optimised for AWS environments, we use AWS APIs to collect evidence where applicable",
          "We have experience with compliance automation tools such as Drata and Vanta and can use those during assessments",
          "We understand cloud-native application architectures so are able to get up to speed quickly on your CDE scope",
        ]}
      />
      <Quotes />
    </>
  );
}
