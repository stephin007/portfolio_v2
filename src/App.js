import {
  Navbar,
  Home,
  About,
  Skills,
  // Services,
  Qualifications,
  Contact,
  Footer,
} from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
