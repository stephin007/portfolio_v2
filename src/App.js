import { Navbar, Home } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Home />
      </main>
    </>
  );
}

export default App;
