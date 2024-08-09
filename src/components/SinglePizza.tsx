import {FC} from "react";
import Pizza from "../models/Pizza";
import {AiFillEdit, AiFillDelete} from "react-icons/ai";



interface SinglePizzaProps {
    pizza: Pizza;
}

const SinglePizza: FC<SinglePizzaProps> = ({pizza}) => {
    return (
        <div className="pizza">
            <img src={`/images/${pizza.img}`} alt={pizza.title}/>
            <h2> {pizza.title}</h2>
            <span>{pizza.price} ₽</span>
            <div className="pizza-controls">
                <AiFillEdit/>
                <AiFillDelete/>
            </div>
        </div>
    )
}

export default SinglePizza;