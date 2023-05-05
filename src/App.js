import {
  Navbar,
  Home,
  About,
  Skills,
  Services,
  Qualifications,
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
      </main>
    </>
  );
}

export default App;
