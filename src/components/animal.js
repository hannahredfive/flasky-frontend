import './animal.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

/*
X Make the element that the user interacts with
X make the event handler for that element
Config a piece of state:
    Decide what the state is [name, type, avail values for this]
        isBookmarked ... is true or false only
        setIsBookmarked is the setter
    Render the piece of state with an initial value
        useState(false)
    make the event handler update the state
test it
style it/add polish

refactor to toggle
    toggle
*/

const Animal = (props) => {

    const altText = `Photo of ${ props.name }`;

    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    // If the animal is bookmarked, the css class name should be .bookmarked
    // if the animal is not bookmarked, no css class
    let animalStyle = 'Animal';
    if (isBookmarked) {
        animalStyle = 'Animal bookmarked';
    }

    return (
        <section className={animalStyle}>
            <h3>Name: { props.name }</h3>
            <p>Species: { props.species }</p>
            {/* <p>Species: { props.species ? props.species : "N/A" }</p> */}
            {/* 
            ^^^^^^^^ A ternery
            <p>Species: { props.species || "N/A" }</p>
            ^^^^^^^^ AN OR */}
            { props.photo ? <img src={ props.photo } alt={ altText }></img> : <img src="http://placekitten.com/g/200/300" alt="Stock Cat"></img> }
            <button onClick={toggleBookmark}>Bookmark!</button>
            <p>Is bookmarked? {isBookmarked ? "True" : "False"}</p>
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