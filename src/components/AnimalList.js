import './AnimalList.css'
import Animal from './animal';

const AnimalList = () => {

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
        }
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
                { 
                    arrayOfAnimals.map(creature => (
                        <li>
                            <Animal 
                                name={ creature.name } 
                                species={ creature.species }
                            />
                        </li> 
                    )) 
                }
            </ul>
        </section>
    )
};

export default AnimalList