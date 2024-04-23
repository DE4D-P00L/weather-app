import Home from "./pages/Home";
import bgImg from "./assets/bg.jpg";

function App() {
  return (
    <div className="text-slate-200 min-h-[100dvh]">
      <img
        src={bgImg}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <Home />
    </div>
  );
}

export default App;
