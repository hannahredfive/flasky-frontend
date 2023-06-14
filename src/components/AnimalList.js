import './AnimalList.css'
import Animal from './animal';
import PropTypes from 'prop-types';

const AnimalList = ({ arrayOfAnimals }) => {

    // const { arrayOfAnimals } = props;
    // const arrayOfAnimals = props.arrayOfAnimals;
    // ^^^ BOTH WORK, the top is the shorter way to say the same thing of these two
    // Both can be replaced with line 4 where we pass set Props to being the destructure arrayOfAnimals

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
                        <li key={creature.id}>
                            <Animal 
                                name={ creature.name } 
                                species={ creature.species }
                                photo={ creature.photo }
                            />
                            {/* <Animal 
                                {...creature}
                            /> 
                            THIS WORKS THE SAME, BUT IS VERY CONFUSING FOR PEOPLE TO READ*/}
                            
                        </li> 
                    )) 
                    // arrayOfAnimals.map(({ name, species }) => (
                    //     <li>
                    //         <Animal 
                    //             name={ name } 
                    //             species={ species }
                    //         />
                    //     </li> 
                    // ))
                    // This works too! BUT if you added more key value pairs to the 
                }
            </ul>

            {/*
            The above could be written as below because if you use {} it needs to be an expression that RETURNS something:
            <ul className="AnimalList__list">
                { 
                    arrayOfAnimals.map(creature => {
                        return (
                            <li>
                                <Animal 
                                    name={ creature.name } 
                                    species={ creature.species }
                                />
                            </li>
                        )
                    }) 
                }
            </ul> 
             */}
            
        </section>
    )
};

AnimalList.propTypes = {
    arrayOfAnimals: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            species: PropTypes.string,
            adopted: PropTypes.bool,
            age: PropTypes.number,
            photo: PropTypes.string
        })
    )
}

export default AnimalList