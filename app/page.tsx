import Banner from "./components/Banner";
import Cook from "./components/Cook";
import Expert from "./components/Expert";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Work from "./components/Work";
import Sign from "./components/Sign/page";


export default function Home() {
  return (
    <main >
      <Banner/>
      <Work/>
      <Cook/>
      <Expert/>
      <Gallery/>
      <Newsletter/>
      <Sign/>
     
    </main>
  );
}
