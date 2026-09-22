import GioMoCuaVaDuongToiTiem from "@/components/GioMoCuaVaDuongToiTiem";
import { lienHePageData } from "@/lib/mock/gi-m-c-a-v-ng-t-i-ti-m";

export default function LienHePage() {
  return (
    <main>
      <GioMoCuaVaDuongToiTiem data={lienHePageData} />
    </main>
  );
}
