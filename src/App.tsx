import React, { FC, useState, useEffect } from 'react';
import './App.css';
import AddPizzaForm from "./components/AddPizzaForm";
import Pizza from "./models/Pizza";
import DisplayPizzas from "./components/DisplayPizzas";

const App: FC = () => {

    // Инициализация состояния с использованием данных из localStorage
    const [pizzasList, setPizzasList] = useState<Pizza[]>(() => {
        const savedPizzas = localStorage.getItem('pizzasList');
        return savedPizzas ? JSON.parse(savedPizzas) : [];
    });

    // Сохранение состояния в localStorage при каждом его обновлении
    useEffect(() => {
        localStorage.setItem('pizzasList', JSON.stringify(pizzasList));
    }, [pizzasList]);

    const addPizza = (newPizza: Pizza) => {
        setPizzasList(prevPizzasList => [...prevPizzasList, newPizza]);
    }

    const updatePizza = (newPizza: Pizza) => {
        setPizzasList(prevPizzasList =>
            prevPizzasList.map(pizza => pizza.id === newPizza.id ? newPizza : pizza)
        );
    }

    const deletePizza = (id: number) => {
        setPizzasList(prevPizzasList =>
            prevPizzasList.filter(pizza => pizza.id !== id)
        );
    }


    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">Наша пиццерия</span>
                <AddPizzaForm addPizza={addPizza} />
                <DisplayPizzas pizzasList={pizzasList} updatePizza={updatePizza} deletePizza={deletePizza} />
            </div>
        </div>
    );
};

export default App;
