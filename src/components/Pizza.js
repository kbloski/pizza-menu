import "./Pizza.scss"

export default function Pizza( props ) {
    const soldOut = props.pizzaObj.soldOut;
    return (
        <li className={soldOut ? "pizza sold-out" : "pizza"}>
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}$</span>
                <p>{props.pizzaObj.soldOut ?? "Wyprzedana"}</p>
            </div>
        </li>
    );
}
 