"use client";
import Hero from "../components/hero";
import Users from "../components/users";
import Collaborate from "../components/Colabrate";
import Info from "../components/Info";
import Built from "../components/Built";
import Statistica from "../components/statistica";
import Stories from "../components/Stories";
import CurrentUsers from "../components/CurrentUsers";
import { useEffect, useState } from "react";

const builtItems = {
  title: "Built for the way you work",
  items: [
    { subTitle: "Brainstorming" },
    { subTitle: "Diagramming" },
    { subTitle: "Meetings & Workshops" },
    { subTitle: "Scrum Events" },
    { subTitle: "Mapping" },
    { subTitle: "Research & Design" },
    { subTitle: "Strategic Planning" },
  ],
  descriptionTitle: "Brainstorming",
  description:
    "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
  imgUrl: "/image copy 4.png",
};

const builtItemKins = {
  title: "Built for all kinds of teams",
  items: [
    { subTitle: "UX & Design" },
    { subTitle: "Marketing" },
    { subTitle: "Product Management" },
    { subTitle: "Engineering" },
    { subTitle: "Consultants" },
    { subTitle: "Agile Coaches" },
    { subTitle: "Sales" },
  ],
  facts: [
    { fact: "Build low-fi wireframes" },
    { fact: "Involve stakeholders in the design process" },
    { fact: "Run engaging design workshops" },
  ],
  imgUrl: "/image copy 5.png",
};

const statisticaData = [
  {
    title: "ISO",
    description: "ISO-27001 enterprise-grade security compliant",
  },
  {
    title: "#1",
    description: "Visual Collaboration Platform on G2",
  },
  {
    title: "99%",
    description: "of the Fortune 100 are customers",
  },
  {
    title: "1,000+",
    description: "community- and expert-built templates",
  },
  {
    title: "45M+",
    description: "users around the world",
  },
  {
    title: "100+",
    description: "integrations with technology partners",
  },
];

const storiesData = [
  {
    title: "vmware",
    description: `“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”`,
    avatar: "image copy 6.png",
    name: "Roxanne Mustafa",
    profesion: "Design Team Lead at VMware",
  },
  {
    title: "DocuSign",
    description: `“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”`,
    avatar: "image copy 7.png",
    name: "Jane Ashley",
    profesion: "Head of Design at DocuSign",
  },
  {
    title: "frog",
    description: `“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”`,
    avatar: "image copy 8.png",
    name: "Laura Baird",
    profesion: "Associate Design Director at frog",
  },
  ];

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_BASE_URL;
        const res = await fetch(`${url}/api/informations`);
        const json = await res.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };
    fetchData();
  }, []);

  const blob = process.env.NEXT_PUBLIC_BLOB_URL;

  return (
    <div className="flex  flex-col w-full items-center min-h-screen py-4  bg-white font-sans">
      <div className="w-[1200px] px-[45px]">
        <Hero />
        <Users />
        <Collaborate />
        {data &&
          data.docs.map((item: any, index: number) => (
            <Info
              key={index}
              title={item.title}
              description={item.description}
              imgsrc={blob + item.img.filename}
              className={`flex ${
                item.isImageRight === true ? "flex-row" : "flex-row-reverse"
              }`}
            />
          ))}

        <Built item={builtItems} />
        <Built item={builtItemKins} />
      </div>
      <Statistica items={statisticaData} />
      <div className="">
        <Stories story={storiesData} />
        <CurrentUsers />
      </div>
    </div>
  );
}
