import { Card } from "../components/Card";
import HomePage from "../Home";

export default function Home() {
  const bioText = `I've been working on and showing off a lot of Web Projects, but I still set aside time for Low Level programming.`

  return (
    <HomePage
      title="Current Projects"
      body={bioText}
      fourthCard={<Card title="Vizhu" image="https://utfs.io/f/PoxZDyeHhCtaOAn4K6BDtWQL0dI3Owi8rYSopMF9qeVlasRn" width={600} height={600} content="Python Library for OSINT investigations. Written in Rust using PyO3." />}
      secondCard={<Card title="Link Hub" image="https://utfs.io/f/PoxZDyeHhCtaplYj3fPL97l4FMBNV6q1tgXIudem0a5kficT" width={400} height={300} content="A link hub for all my socials, simple but effective. Written in TypeScript using Next.js." />}
      thirdCard={<Card title="My Portfolio" content="The source for this site was written in TypeScript using Next.js." />}
      firstCard={<Card title="Chunks-rs" image="https://utfs.io/f/PoxZDyeHhCtabgy0VzoQdlTk3xUr5i1L2JoZHwgyIPqzMBmt" width={400} height={200} content="A Rust library for building widgets & taskbars on Wayland Compositors." />}
      fifthCard={<Card title="Parser" image="https://utfs.io/f/PoxZDyeHhCtazUxm2zS6gJOjTdoMuExt57CLV8eZyvc24fRs" width={400} height={200} content="One of the pieces needed for a Compiler I'm building. Tokenizes an input and returns an AST." />}
      button="My Github ->"
    />
  );
}
