// import logo from './logo.svg';
import './App.css';
import AnimalList from './components/AnimalList';

// Comments outside of JSX (but still JavaScript - AKA JS that is not returned)

const arrayOfAnimals = [
  {
    id: 101,  
    name: "Violet",
    species: "Pitbull Mix"  
  },
  {
    id: 102,
    name: "Norman",
    species: "Puppy",
    photo: "https://cdn.akc.org/content/hero/pyr_pup_hero.jpg"
  },
  {
    id: 103,
    name: "Furby",
    species: "Cat"
  },
  {
    id: 104,
    name: "Millie",
    species: "Cat"
  },
  {
    id: 105,
    name: "Millie"
  }
]

function App() {
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <h2>Animal Listings</h2>
      <AnimalList arrayOfAnimals={ arrayOfAnimals } />
      {/* I want to list a bunch of animals... */}
      {/* Each animal has its name and photo */}
    </section>
  );
}

export default App;
