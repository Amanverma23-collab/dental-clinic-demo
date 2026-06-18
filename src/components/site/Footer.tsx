import { Logo } from "./icons";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.02_250)] text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <div className="text-white"><Logo /></div>
          <p className="text-sm leading-relaxed text-white/60">
            Creating confident & healthy smiles for the families of Sikar with modern dentistry and gentle care.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-serif text-xl text-white">Visit</h4>
          <p className="text-sm leading-relaxed">Piprali Road<br/>Sikar, Rajasthan 332001</p>
        </div>
        <div>
          <h4 className="mb-4 font-serif text-xl text-white">Contact</h4>
          <p className="text-sm leading-relaxed">
            <a href="tel:9783204194" className="hover:text-white">+91 97832 04194</a><br/>
            hello@ashirwaddental.in
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-serif text-xl text-white">Hours</h4>
          <p className="text-sm leading-relaxed">Mon – Sat · 9:00 – 8:00<br/>Sunday · By appointment</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Ashirwad Dental Sikar · All rights reserved
      </div>
    </footer>
  );
}
