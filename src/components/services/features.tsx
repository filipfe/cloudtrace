type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: Feature[];
};

export default function Features({
  title,
  description,
  icon,
  features,
}: Props) {
  return (
    <section>
      <div className="w-full mx-auto max-w-7xl py-16 sm:py-24 px-6 flex flex-col gap-6">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight lg:leading-tight max-w-6xl mx-auto w-full">
          {title}
        </h2>
        <p className="text-center text-light text-sm sm:text-base">
          {description}
        </p>
        <div className="flex flex-col lg:grid grid-cols-3 gap-6 mt-8">
          {features.map((feat, k) => (
            <FeatureRef {...feat} icon={icon} key={`feat-${k}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureRef = ({
  title,
  description,
  icon,
}: Feature & Pick<Props, "icon">) => (
  <article className="rounded-2xl bg-[#F7F7F7] py-8 px-8 flex flex-col gap-4">
    <div className="h-8 sm:h-10 lg:h-12 w-max max-w-14">{icon}</div>
    <h3 className="font-bold sm:text-lg">{title}</h3>
    <p className="font-light text-sm sm:text-base">{description}</p>
  </article>
);
