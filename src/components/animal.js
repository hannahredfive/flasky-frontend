import './animal.css';

//The responsibility of this component is to be a reusable UI element that displays an Animal's:
// - name
// - species
// - age
// - photo

const Animal = (props) => {

    return (
        <section className="Animal">
            <h3>Animal name: {props.name}</h3>
            <p>Species: {props.species}</p>
            <img src="http://placekitten.com/g/200/300" alt="{props.name}"></img>
        </section>
    );
};

export default Animal;