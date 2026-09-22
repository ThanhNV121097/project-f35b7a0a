import GioMoCuaVaDuongToiTiem from "@/components/GioMoCuaVaDuongToiTiem";
import { lienHePageData } from "@/lib/mock/gi-m-c-a-v-ng-t-i-ti-m";
import { MauHoa } from "../components/MauHoa";

export default function HomePage() {
  return (
    <main>
      <GioMoCuaVaDuongToiTiem data={lienHePageData} />
      <MauHoa />
    </main>
  );
}
