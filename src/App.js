import { Navbar, Home, About } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
