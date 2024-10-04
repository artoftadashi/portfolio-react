import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Header />
      <div className="w-[100vw] flex items-center mb-16">
        <h1 className="text-[110px] font-bold uppercase tracking-tight text-center">
          Hi, i'm samuel. Creative Software Developer
        </h1>
      </div>
      <About />

      <Navbar />
    </>
  );
}

export default App;
