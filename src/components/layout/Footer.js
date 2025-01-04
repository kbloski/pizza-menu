import './Footer.css'

export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = openHour <= hour && hour < closeHour;

    if (!isOpen) return (
        <footer className="footer">
            <p style={{textAlign: 'center'}}>© Fast React Pizza Co.</p>
            <p>
                We are closed! Come to us between {openHour}:00 and {closeHour}:00.
            </p>
        </footer>
    ); 

    return <Order closeHour={closeHour} />;
}

function Order( { closeHour} ){
    return (
        <footer className="footer">
            <p style={{ textAlign: "center" }}>© Fast React Pizza Co.</p>:{" "}
            <div className="order">
                <p>We are open until {closeHour} PM. Hurry up!</p>
                <button className="btn">Order now</button>
            </div>
        </footer>
    );
}