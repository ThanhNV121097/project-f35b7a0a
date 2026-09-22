import DatHoaTruoc from "../components/DatHoaTruoc";
import { datHoaTruocContent } from "../lib/mock/t-hoa-tr-c";

export default function HomePage() {
  return (
    <main>
      <DatHoaTruoc content={datHoaTruocContent} />
    </main>
  );
}
