import './Footer.css'

export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = openHour <= hour && hour < closeHour;

    return <footer className="footer">
        <p>© Fast React Pizza Co.</p>
        { isOpen }
        { isOpen ? <p>We are open!</p> : <p>We are closed!</p> }
    </footer>
}