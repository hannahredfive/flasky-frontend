import './animal.css';

//The responsibility of this component is to be a reusable UI element that displays an Animal's:
// - name
// - species
// - photo
const Animal = () => {


    return (
        <section className="Animal">
            <h3>Animal name: Millie</h3>
            <p>Species: Cat</p>
            <img src="http://placekitten.com/g/200/300" alt="Furby"></img>
        </section>
    );
};

export default Animal;