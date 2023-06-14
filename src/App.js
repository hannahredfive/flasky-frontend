// import logo from './logo.svg';
import './App.css';
import AnimalList from './components/AnimalList';

// Comments outside of JSX (but still JavaScript - AKA JS that is not returned)

const arrayOfAnimals = [
  {
      name: "Violet",
      species: "Pitbull Mix"  
  },
  {
      name: "Norman",
      species: "Puppy"
  },
  {
      name: "Furby",
      species: "Cat"
  },
  {
      name: "Millie",
      species: "Cat"
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
