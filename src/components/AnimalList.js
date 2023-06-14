import './AnimalList.css'
import Animal from './animal';

const AnimalList = () => {
    const firstAnimal = {
        name: "Violet",
        species: "Pitbull Mix"
    }

    const secondAnimal = {
        name: "Norman",
        species: "Puppy"
    }

    const arrayOfAnimals = [
        firstAnimal,
        secondAnimal
    ]

    const renderedAnimals = arrayOfAnimals.map(creature => (
        <li>
            <Animal 
                name={creature.name} 
                species={creature.species}
            />
        </li>
    ))

    return (
        <section className="AnimalList">
            <h2>Animal List</h2>
            <ul className="AnimalList__list">
                { renderedAnimals }
            </ul>
        </section>
    )
};

export default AnimalList