import HomePage, { Card } from "../Home";

export default function Home() {
  return (
    <HomePage
      title="Contact Me"
      body="These are my socials. For my phone number, email, and other contact methods, please refer to my Resume."
      alignType="justify-between"
      primaryCard={<Card title="Twitter" content="@drkrssll" />}
      secondaryCard={<Card title="Instagram" content="@drkrssll" />}
    />
  );
}
