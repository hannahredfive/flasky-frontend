import './animal.css';
import PropTypes from 'prop-types';

//The responsibility of this component is to be a reusable UI element that displays an Animal's:
// - name
// - species
// - age
// - photo

const Animal = (props) => {

    return (
        <section className="Animal">
            <h3>Name: { props.name }</h3>
            <p>Species: { props.species }</p>
            {/* <p>Species: { props.species ? props.species : "N/A" }</p> */}
            {/* 
            ^^^^^^^^ A ternery
            <p>Species: { props.species || "N/A" }</p>
            ^^^^^^^^ AN OR */}
            { props.photo ? <img src={ props.photo } alt="{props.name}"></img> : <img src="http://placekitten.com/g/200/300" alt="{props.name}"></img> }
        </section>
    );
};

Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    adopted: PropTypes.bool,
    age: PropTypes.number,
    photo: PropTypes.string
}

export default Animal;