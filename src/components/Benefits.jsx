import Section from "./Section";
import Heading from "./Heading";
import Arrow from "../components/svg/Arrow";
import ClipPath from "./svg/ClipPath";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container z-2">
        <Heading
          className="flex justify-center text-center md:max-w-xl lg:max-w-5xl"
          title="Chat smarter, not Harder with MindCraft"
        />
        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {benefits.map((benefit) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%]
              md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${benefit.backgroundUrl})`,
              }}
              key={benefit.id}
            >
              <div
                className="relative z-2 flex flex-col
              min-h-[22rem] p-[2.4rem] pointer-events-none"
              >
                <h5 className="h5 mb-5">{benefit.title}</h5>
                <p className="body-2 mb-6 text-n-3">{benefit.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={benefit.iconUrl}
                    width={48}
                    height={48}
                    alt={benefit.title}
                  />
                  <p
                    className="ml-auto font-code
                  text-xs font-bold uppercase
                  tracking-wider"
                  >
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
              {benefit.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div
                  className="absolute 
                  opacity-0 transition-opacity
                hover:opacity-10"
                >
                  {benefit.imageUrl && (
                    <img
                      src={benefit.imageUrl}
                      width={380}
                      height={380}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
