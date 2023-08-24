import Container from "@/components/Container";
import FilmSection from "./FilmSection";
import MusicSection from "./MusicSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-8 pt-8">
      <Container>
        <h2 className="text-xl font-wide pb-4">Music</h2>
        <MusicSection />
      </Container>

      <div className="relative pt-14">
        <Image
          src="/assets/film.png"
          alt=""
          height={140}
          width={390}
          className="absolute top-0 left-1/2 -translate-x-1/2 -z-10"
        />
        <Container>
          <h2 className="text-xl font-wide pb-4 dark-stroke">Film</h2>
          <FilmSection />
        </Container>
      </div>

      <footer className="py-16">
        <Container>
          <h2 className="font-wide pb-2 text-lg">Contact</h2>
          <div className="font-condensed">
            <a href="tel:+4798171267">+47 981 71 267</a>
            <br />
            <a href="mailto:simenstenrod@gmail.com">simenstenrod@gmail.com</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
