import "../css/navbar.css"; 

export default function Navbar () {
    return ( 
        <div className="container">
            <ul className="nav-items">
                <li className="font-effect-emboss">Home</li>
                <li className="font-effect-shadow-multiple">Product</li>
                <li className="font-effect-shadow-multiple">Contact Us</li>
            </ul>
        </div>
     );
}