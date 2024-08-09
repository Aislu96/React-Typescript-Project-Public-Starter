import React, {FC} from 'react';
import './App.css';
import AddPizzaForm from "./components/AddPizzaForm";

const App: FC = () => {
    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">Наша пиццерия</span>
                <AddPizzaForm />
            </div>
        </div>
    );
}

export default App;
