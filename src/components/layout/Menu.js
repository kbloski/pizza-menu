import "./Menu.scss"
import pizzaData from '../../storage/data.js'
import Pizza from "../Pizza.js"

export default function Menu() {
    return <main className='menu'>
        <h2>Our menu</h2>

        <ul className="pizzas">
            {pizzaData.map(
                (pizza, index) =>  
                    <Pizza key={index} pizzaObj={pizza}></Pizza> 
                )
            }
        </ul>

    </main>
}