import DatHoaTruoc from "../components/DatHoaTruoc";
import GioMoCuaVaDuongToiTiem from "@/components/GioMoCuaVaDuongToiTiem";
import { datHoaTruocContent } from "../lib/mock/t-hoa-tr-c";
import { lienHePageData } from "@/lib/mock/gi-m-c-a-v-ng-t-i-ti-m";

export default function HomePage() {
  return (
    <main>
      <DatHoaTruoc content={datHoaTruocContent} />
      <GioMoCuaVaDuongToiTiem data={lienHePageData} />
    </main>
  );
}
