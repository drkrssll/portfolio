import HomePage from "../Home";
import { Card } from "../components/Card";

export default function Home() {
  return (
    <HomePage
      title="Contact Me"
      body="These are my socials. For my phone number, email, and other contact methods, please refer to my Resume."
      primaryCard={<Card title="Twitter" content="@drkrssll" />}
      secondaryCard={<Card title="Instagram" content="@drkrssll" />}
    />
  );
}
