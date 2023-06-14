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

    // const renderedAnimals = arrayOfAnimals.map(creature => (
    //     <li>
    //         <Animal 
    //             name={creature.name} 
    //             species={creature.species}
    //         />
    //     </li>
    // ))
    // ^^^ This works, but embedding (below) is better and industry standard

    return (
        <section className="AnimalList">
            <h2>Animal List</h2>
            <ul className="AnimalList__list">
                { arrayOfAnimals.map(creature => (
                    <li>
                        <Animal 
                            name={creature.name} 
                            species={creature.species}
                        />
                    </li> 
                ))}
            </ul>
        </section>
    )
};

export default AnimalList