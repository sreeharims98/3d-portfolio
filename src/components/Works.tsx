import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import useIsMobile from "../hooks/useIsMobile";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  points: string[];
  tags: {
    name: string;
    color: string;
  }[];
  isMobile: boolean;
}

const ProjectCard = ({
  index,
  name,
  description,
  points,
  tags,
  isMobile,
}: ProjectCardProps) => {
  // Conditionally apply Framer Motion props for desktop only
  const motionProps = isMobile
    ? {}
    : {
        variants: fadeIn("up", "spring", index * 0.2, 0.75),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.1 },
      };

  return (
    <motion.div {...motionProps}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div>
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {points.map((point, index) => (
              <li key={index} className="text-secondary text-[14px] pl-1">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px] `}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const isMobile = useIsMobile();

  // Conditionally apply Framer Motion props for desktop only
  const motionProps = isMobile
    ? {}
    : {
        variants: textVariant(0),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.25 },
      };

  return (
    <>
      <motion.div {...motionProps}>
        <p className={styles.sectionSubText}>My works</p>
        <p className={styles.sectionHeadText}>Projects.</p>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          {...motionProps}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            {...project}
            isMobile={isMobile}
          />
        ))}
      </div>
    </>
  );
};

const WrappedWorks = SectionWrapper(Works, "projects");
export default WrappedWorks;
