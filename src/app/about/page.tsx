import HomePage, { Card } from "../Home";

export default function Home() {
  const bioText = `I've been working on and showing off a lot of Web Projects, but I still set aside time for Low Level programming.`

  return (
    <HomePage
      title="Current Projects"
      body={bioText}
      primaryCard={<Card title="My Portfolio" content="This website was written using TypeScript and Next.js" />}
      secondaryCard={<Card title="Notes App" content="A static website written in React.js, hosted using Rocket.rs" />}
      button="My Github ->"
    />
  );
}
