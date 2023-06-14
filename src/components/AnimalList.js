import './AnimalList.css'
import Animal from './animal';

const AnimalList = () => {
    return (
        <section className="AnimalList">
            <h2>Animal List</h2>
            <Animal name="Furby" species="Cat"></Animal>
        </section>
    )
};

export default AnimalList