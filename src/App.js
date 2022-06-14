import "./App.css";
import CatList from "./components/CatList.js";
import DogList from "./components/DogList.js";

function App() {
  return (
    <main>
      <h1> List of Cats</h1>
      <CatList />
      <h2>List of Dogs</h2>
      <DogList />
    </main>
  );
}

export default App;
