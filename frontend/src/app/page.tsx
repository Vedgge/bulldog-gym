import Classes from "./components/classes-section";
import Hero from "./components/hero";
import InstagramFeed from "./components/ig-feed";
import Ready from "./components/ready-section";
import Sections from "./components/sections";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <Sections></Sections>
      <Classes></Classes>
      <InstagramFeed></InstagramFeed>
      <Ready></Ready>
    </main>
  );
}
