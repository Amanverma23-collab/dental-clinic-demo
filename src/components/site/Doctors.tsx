import d1 from "@/assets/doctor1.jpg";
import d2 from "@/assets/doctor2.jpg";
import d3 from "@/assets/doctor3.jpg";

const team = [
  { img: d2, name: "Dr. Sunil Rulaniya", role: "MBBS, MD (Consultant Physician)" },
  { img: d2, name: "Dr. Naveen Kumar", role: "BDS, MDS (Orthodontics)" },
  { img: d3, name: "Dr. Poonam Jakhar", role: "BDS" },
  { img: d1, name: "Dr. Aishwarya", role: "BDS" },
  { img: d2, name: "Dr. Pawan K Jangir", role: "BDS" },
];

export function Doctors() {
  return (
    <section className="bg-background px-6 py-24" id="team">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.25em] text-sand-deep">THE TEAM</p>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">Meet Our Dentists</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            A small, dedicated team of professional doctors who combine modern technique with genuine warmth.
          </p>
        </div>
        <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin">
          {team.map((d) => (
            <div key={d.name} className="min-w-[280px] w-[280px] snap-start overflow-hidden rounded-2xl bg-white shadow-sm shrink-0">
              <img src={d.img} alt={d.name} loading="lazy" width={640} height={800} className="h-80 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-serif text-xl">{d.name}</h3>
                <p className="mt-1 text-xs tracking-wider text-muted-foreground">{d.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
