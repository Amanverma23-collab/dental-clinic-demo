import d1 from "@/assets/doctor1.jpg";
import d2 from "@/assets/doctor2.jpg";
import d3 from "@/assets/doctor3.jpg";

const team = [
  { img: d1, name: "Dr. Anjali Sharma", role: "Senior Dentist · BDS, MDS" },
  { img: d2, name: "Dr. Karan Mehta", role: "Implantologist · BDS" },
  { img: d3, name: "Dr. Neha Verma", role: "Cosmetic Dentist · BDS" },
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((d) => (
            <div key={d.name} className="overflow-hidden rounded-2xl bg-white shadow-sm">
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
