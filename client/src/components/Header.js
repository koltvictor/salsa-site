import { Link } from 'react-router-dom';


export default function Header () {
    return(
        <div className="headerWrapper">
            <div className="header">Gabby's Salsa</div>
            <div className="navigation"><br/>
                <Link to="/">Home</Link>
                <Link to="/products">Menu</Link>                
                <Link to="/signUp">Newsletter</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>
            </div>    
        </div>
    )
}