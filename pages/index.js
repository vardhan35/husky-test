import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import HeadComponent from "../components/HeadComponent";
import Main from "../components/Home/Main";

export default function Home() {
  return (
    <>
      <HeadComponent value={"Home"} />
      <Main />
      <About />
      <Contact />
    </>
  );
}
