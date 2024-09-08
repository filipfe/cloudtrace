type Props = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

export default function Hero({ title, subtitle, icon }: Props) {
  return (
    <section
      className="bg-[#262E45] bg-right bg-no-repeat"
      style={{ backgroundImage: "url(/footer-bg.svg)" }}
    >
      <div className="w-full mx-auto max-w-7xl pt-32 pb-16 lg:pt-40 lg:pb-20 px-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="relative h-8 sm:h-10 lg:h-12 max-w-14 text-white">
              {icon}
            </div>
            <h2 className="text-sm sm:text-base lg:text-lg font-bold uppercase text-white">
              Cloudtrace <span className="text-primary">{subtitle}</span>
            </h2>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold max-w-3xl leading-tight sm:leading-tight lg:leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
