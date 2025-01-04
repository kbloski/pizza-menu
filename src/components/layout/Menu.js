import "./Menu.scss"
import pizzaData from '../../storage/data.js'
import Pizza from "../Pizza.js"

export default function Menu() {
    const pizzas = [...pizzaData];

    return <main className='menu'>
        <h2>Our menu</h2>

        {
            !!pizzas.length ?
            <ul className="pizzas">
                {!!pizzas.length && pizzas.map(
                    (pizza, index) =>  
                        <Pizza key={index} pizzaObj={pizza}></Pizza> 
                    )
                }
            </ul>
            : <p>We are still working on our menu!</p>
    }

    </main>
}