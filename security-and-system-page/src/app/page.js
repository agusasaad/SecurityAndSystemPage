import SectionOne from "@/Components/sectionone/SectionOne";
import HomePage from "./../Components/homePage/HomePage";
import NavBar from "./../Components/navbar/NavBar";
import styles from "./page.module.css";
import SectionTwo from "@/Components/sectiontwo/SectionTwo";
import SectionThree from "@/Components/sectionthree/SectionThree";
import ContactUs from "@/Components/contactus/ContactUs";

export default function Home() {
  return (
    <div className={styles.containerApp}>
      <header className={styles.header}>
        <NavBar />
        <HomePage />
      </header>
      <main className={styles.main}>
        <SectionOne />
        {/* <SectionTwo /> */}
        <SectionThree />
        <ContactUs />
      </main>
    </div>
  );
}
