import "./Pizza.scss"

export default function Pizza( { pizzaObj } ) {
    const soldOut = pizzaObj.soldOut;

    // if (soldOut) return null;
    const { photoName, name, ingredients, price } = pizzaObj;

    return (
        <li className={soldOut ? "pizza sold-out" : "pizza"}>
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{price}$</span>
                <p>{!!soldOut && "SOLD OUT"}</p>
            </div>
        </li>
    );
}
 