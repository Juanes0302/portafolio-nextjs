"use client";
import Job from "@/components/icons/Job";
import CubeIcon from "@/components/icons/CubeIcon";
import NextJSIcon from "@/components/icons/NextJSIcon";
import ExpressIcon from "@/components/icons/ExpressIcon";
import TailwindCSS from "@/components/icons/TailwindCSS";
import TypeScript from "@/components/icons/TypeScript";
import AzureIcon from "@/components/icons/AzureIcon";
import PhpIcon from "@/components/icons/PhpIcon";
import WordPressIcon from "@/components/icons/WordPressIcon";
import CodeIcon from "@/components/icons/CodeIcon";
import SubTitle from "@/components/typography/SubTitle";
import TimeLineComponent from "@/components/timeline/TimeLineComponent";
import CardProjects from "@/components/cards/CardProjects";
import Container from "@/components/container/Container";
import CardStacks from "@/components/cards/CardStacks";
import CSharp from "@/components/icons/CSharp";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
import HTMLIcon from "@/components/icons/HTMLIcon";
import CSSIcon from "@/components/icons/CSSIcon";
import NodeJSIcon from "@/components/icons/NodeJSIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import NetIcon from "@/components/icons/NetIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import AngularIcon from "@/components/icons/AngularIcon";
import JavaIcon from "@/components/icons/JavaIcon";
import ReactNativeIcon from "@/components/icons/ReactNativeIcon";
import MySQLIcon from "@/components/icons/MySQLIcon";
import PostgreSQLIcon from "@/components/icons/PostgreSQLIcon";
import GitIcon from "@/components/icons/GitIcon";
import DockerIcon from "@/components/icons/DockerIcon";
import LinuxIcon from "@/components/icons/LinuxIcon";
import DevicePhoneIcon from "@/components/icons/DevicePhoneIcon";
import FooterComponent from "@/components/footer/FooterComponent";
import HeaderComponent from "@/components/header/HeaderComponent";
import ContactComponent from "@/components/contact/ContactComponent";
import { Divider } from "@nextui-org/react";

const listStack = [
  {
    name: "C#",
    icon: <CSharp />,
  },
  {
    name: "PHP",
    icon: <PhpIcon />,
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcon />,
  },
  {
    name: "Node.js",
    icon: <NodeJSIcon />,
  },
  {
    name: ".NET",
    icon: <NetIcon />,
  },
  {
    name: "Express.js",
    icon: <ExpressIcon />,
  },
  {
    name: "React",
    icon: <ReactIcon />,
  },
  {
    name: "Angular",
    icon: <AngularIcon />,
  },
  {
    name: "Next.js",
    icon: <NextJSIcon />,
  },
  {
    name: "Java",
    icon: <JavaIcon />,
  },
  {
    name: "MySQL",
    icon: <MySQLIcon />,
  },
  {
    name: "TypeScript",
    icon: <TypeScript />,
  },
  {
    name: "HTML",
    icon: <HTMLIcon />,
  },
  {
    name: "CSS",
    icon: <CSSIcon />,
  },
  {
    name: "Azure",
    icon: <AzureIcon />,
  },
  {
    name: "Git",
    icon: <GitIcon />,
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCSS />,
  },
];

const listTimeLine = [
  {
    time: "Enero 2023 - Noviembre 2023",
    title: "Diseñador CAD",
    list: [
      "Lidere el proceso de diseño en 3D de restauraciones dentales utilizando EXOCAD, Garantizando la precisión y estética requeridas",
      "Colabore estrechamente con odontólogos y otros profesionales para comprender las necesidades específicas del paciente y proporcionar soluciones personalizadas.",
    ],
  },
  {
    time: "Junio 2022 - Diciembre 2022",
    title: "Auxiliar IT",
    list: [
      "Proporcione soporte técnico a usuarios internos, resolviendo problemas de hardware y software de manera eficiente",
      "Configuración y mantenimiento de la infraestructura de red para garantizar la conectividad y eficiencia del sistema.",
    ],
  },
];

const listProjects = [
  {
    image: "/images/aviv-page.png",
    name: "Aviv",
    description:
      "Gestión, administración y comunicación de propiedades horizontales.",
    icons: [
      {
        icon: <NextJSIcon />,
        name: "Next.js",
      },
      {
        icon: <TailwindCSS />,
        name: "Tailwind CSS",
      },
      {
        icon: <ExpressIcon />,
        name: "Express",
      },
      {
        icon: <TypeScript />,
        name: "TypeScript",
      },
      {
        icon: <AzureIcon />,
        name: "Azure",
      },
    ],
    url: "https://aviv.connectics.co/",
  },
];

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <Divider />
      <main className="p-5 flex flex-col gap-8">
        <Container>
          <SubTitle text="Experiencia laboral" icon={<Job />} />
          <TimeLineComponent items={listTimeLine} />
        </Container>
        <Container className="gap-3">
          <SubTitle text="Proyectos" icon={<CubeIcon />} />
          <CardProjects projects={listProjects} />
        </Container>
        <Container>
          <SubTitle text="Stack" icon={<CodeIcon />} />
          <CardStacks stacks={listStack} />
        </Container>
        <Container>
          <SubTitle text="Contacto" icon={<DevicePhoneIcon />} />
          <ContactComponent />
        </Container>
        <Container>
          <FooterComponent />
        </Container>
      </main>
    </>
  );
}
