import {
  Navbar,
  Home,
  About,
  Skills,
  Services,
  Qualifications,
  Contact,
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
        <Services />
        <Qualifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
