export default function Quotes() {
  return (
    <section className="py-8">
      <div className="flex flex-col items-center gap-6 bg-[#F9F9F9] py-12 sm:py-16">
        <figure className="max-w-4xl w-full px-6 mx-auto flex flex-col gap-6 items-center text-center">
          <blockquote className="text-lg sm:text-xl lg:text-2xl leading-normal sm:leading-normal lg:leading-normal font-light italic">
            “Our organisation manually stitched together DevSecOps with 10 or
            more disparate security tools — some new and some old — each with
            siloed responsibilities and a limited view of application risk.
            Cloudtrace is the antidote to that; an agile team who lead the way
            in cloud-native security with a systematic approach and innovative
            edge.”
          </blockquote>
          <figcaption className="font-medium text-sm">
            NAME, COMPANY POSITION
          </figcaption>
        </figure>
        <div className="flex items-center gap-2 mt-3">
          <div className="rounded-full h-2.5 w-2.5 bg-[#D9D9D9]" />
          <div className="rounded-full h-2.5 w-2.5 bg-[#D9D9D9]/50" />
          <div className="rounded-full h-2.5 w-2.5 bg-[#D9D9D9]/50" />
        </div>
      </div>
    </section>
  );
}
