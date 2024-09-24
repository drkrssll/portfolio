import { Card } from "../components/Card";
import HomePage from "../Home";

export default function Home() {
  const bioText = `I've been working on and showing off a lot of Web Projects, but I still set aside time for Low Level programming.`

  return (
    <HomePage
      title="Current Projects"
      body={bioText}
      primaryCard={<Card title="Vizhu" image="/vizhu.png" width={600} height={600} content="Python Library for OSINT investigations. Written in Rust using PyO3." />}
      secondaryCard={<Card title="Link Hub" image="/link_hub.png" width={400} height={300} content="A link hub for all my socials, simple but effective. Written in TypeScript using Next.js." />}
      infoCard={<Card title="My Portfolio" content="The source for this site was written in TypeScript using Next.js." />}
      button="My Github ->"
    />
  );
}
