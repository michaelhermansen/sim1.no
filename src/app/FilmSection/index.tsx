import FilmCard from "./FilmCard";

export default function FilmSection() {
  return (
    <div className="grid gap-12">
      <FilmCard
        title="kun for inviterte"
        description="composition · mix · master · foley"
        embedUrl="https://www.youtube.com/embed/XDQ-S0J4I6c?si=9QEtIh94aXUv2s8B"
      />
      <FilmCard
        title="kun for inviterte"
        description="composition · mix · master · foley"
        embedUrl="https://www.youtube.com/embed/ridlNGea62I?si=b_8tKwy-MXqMyiJp"
      />
    </div>
  );
}
