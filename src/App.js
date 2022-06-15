import "./App.css";
import "./components/DogList.css";
import CatList from "./components/CatList.js";
// import DogList from "./components/DogList.js";
// import ParrotList from "./components/ParrotList";
import Cat from "./components/Cat";

function App() {
  const catData = [
    {
      name: "Whiskers",
      caretaker: "Farah",
      petCount: 1357,
    },
    {
      name: "Fang",
      caretaker: "Luciana",
      petCount: 8267,
    },
    {
      name: "Beetle",
      caretaker: "Aya",
      petCount: 2468,
    },
  ];

  const dogData = [
    {
      name: "Wishbone",
      favoriteToy: "Squeaker",
      chipNumber: "82373",
    },
    {
      name: "Appa",
      favoriteToy: "Ball",
      chipNumber: "29238",
    },
    {
      name: "Jimminy",
      favoriteToy: "Bone",
      chipNumber: "72902",
    },
  ];

  return (
    <main>
      <h1>List of Cats</h1>
      <CatList catData={catData} />
    </main>
  );
}

export default App;
