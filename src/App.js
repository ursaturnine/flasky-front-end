import "./App.css";
import "./components/DogList.css";
import CatList from "./components/CatList.js";
import DogList from "./components/DogList.js";
import ParrotList from "./components/ParrotList";

function App() {
  return (
    <main>
      <h1> List of Cats</h1>
      <CatList />
      <h2>List of Dogs</h2>
      <DogList />
      <h2>List of Parrots</h2>
      <ParrotList />
    </main>
  );
}

export default App;
