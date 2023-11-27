import { Slideshow } from "./(components)";
import Hero from "./(components)/hero/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8">
      <Hero />
      <Slideshow />
    </main>
  );
}
