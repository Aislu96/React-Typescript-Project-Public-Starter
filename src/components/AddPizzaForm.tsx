import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import './styles.css';

const initState = {
    title: '',
    price: '',
    img: '',
}
const AddPizzaForm: FC = () => {
    const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string}>(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('handel change >>', e.target)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('handel change >>', e.target)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="title"
            type="text"
            placeholder="Название"
            onChange={handleChange}
            value = {newPizza.title}/>
            <input name="price"
                   type="text"
                   placeholder="Стоимость"
                   onChange={handleChange}
                   value = {newPizza.price}/>
            <input name="img"
                   type="text"
                   placeholder="Изображение"
                   onChange={handleChange}
                   value = {newPizza.img}/>
            <button type="submit">+ Добавить в меню</button>
        </form>
    )
}

export default AddPizzaForm;