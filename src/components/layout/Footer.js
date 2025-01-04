import './Footer.css'

export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = openHour <= hour && hour < closeHour;

    return <footer className="footer">
        <p>© Fast React Pizza Co.</p>
        { !isOpen ? <p>We are closed!</p> : <div className='order'>
                <p>
                    We are open until {closeHour} PM. Hurry up!
                </p>
                <button className='btn'>Order now</button>
            </div>
        }
    </footer>
}