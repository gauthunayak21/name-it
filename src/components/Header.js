import headerImg from '../assets/header.png'
import './Header.css';

const Header = ({headerExpanded}) => {
    return (
        <div className="flex flex-col items-center justify-center m-7">
            <img className={`header-image ${headerExpanded ? "header-out" : "header-in"}`} src={headerImg} alt="Header" />
            <h1 className={`text-white font-mono italic transition duration-100 text-size ${headerExpanded ? 'text-in': 'text-out'}`}>Name it!</h1>
        </div>
    )
}

export default Header;