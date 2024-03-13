import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Backend System Design",
    "UI/UX Design",
    "API Integration",
  ];

  const toolBoxItems = [
    "HTML/CSS/JS",
    "TailwindCSS",
    "ReactJS",
    "GSAP",
    "ExpressJS",
    "NodeJS",
    "MongoDB",
    "Figma",
  ];

  const dataCloudItems= [
    "SQL",
    "Python",
    "Django",
    "Flask",
    "TensorFlow",
    "PyTorch",
    "AWS",
    "Power BI",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="skills" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all things web related. With each of my
          skills, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="web magic kit."
          description="Spinning web wonders with my unique mix of languages and design tools. Constantly concocting new ideas for a delightful online experience."
          items={toolBoxItems}
        />
        <ServiceUi
          title="data & cloud playfield:"
          description="In my digital playground, blending the power of data and cloud technologies. Constantly exploring new ways to make information dance and projects shine!"
          items={dataCloudItems}
        />
      </div>
    </section>
  );
}
