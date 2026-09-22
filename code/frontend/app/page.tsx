import { TiMHoaCL } from "../components/TiMHoaCL";
import { homeContent } from "../lib/mock/ti-m-hoa-c-l";

export default function HomePage() {
  return (
    <main>
      <TiMHoaCL content={homeContent} />
    </main>
  );
}
