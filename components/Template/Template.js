import Footer from "./Footer";
import Navbar from "./Navbar";

function Template({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Template;
