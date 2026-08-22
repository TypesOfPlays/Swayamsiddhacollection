import fs from "node:fs";
import path from "node:path";
import { CUSTODY } from "@/lib/site";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ritual } from "@/components/Ritual";
import { Custody } from "@/components/Custody";
import { Catalogue } from "@/components/Catalogue";
import { NotHere } from "@/components/NotHere";
import { Services } from "@/components/Services";
import { Visit } from "@/components/Visit";
import { Close } from "@/components/Close";
import { ActionBar } from "@/components/ActionBar";
import { Boot } from "@/components/Boot";
import { Stats } from "@/components/Stats";
import { SectionStack } from "@/components/SectionStack";

/**
 * Which custody photographs have actually been supplied.
 *
 * Checked here, on the server, so the browser never requests a file that is
 * not there — six 404s on every page load is a real cost paid for nothing.
 * Drop a photo into `public/custody/` and it appears on the next build.
 */
function suppliedCustodyImages(): string[] {
  const dir = path.join(process.cwd(), "public", "custody");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return CUSTODY.map((c) => c.image).filter((src) =>
    files.includes(path.basename(src))
  );
}

export default function Page() {
  const custodyImages = suppliedCustodyImages();

  return (
    <>
      <Boot />
      <SectionStack />
      <a className="skip" href="#tests">
        Skip to the test list
      </a>
      <Header />
      <main>
        <Hero />
        <Ritual />
        <Custody images={custodyImages} />
        <Stats />
        <Catalogue />
        <NotHere />
        <Services />
        <Visit />
        <Close />
      </main>
      <ActionBar />
    </>
  );
}
