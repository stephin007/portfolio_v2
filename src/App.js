import { Navbar, Home, About, Skills } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
