import SearchForm from "../_component/SearchForm";
import style from "./explore.module.css";
import Trend from "@/app/(afterLogin)/_component/Trend";

export default function Home() {
  return (
    <main className={style.mainZone}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>Trends for you</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  );
}
