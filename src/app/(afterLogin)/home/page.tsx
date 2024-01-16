import style from "./home.module.css";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
      </TabProvider>
    </main>
  );
}
