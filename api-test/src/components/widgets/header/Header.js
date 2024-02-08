import './header.scss'
import Movie from './../../../assets/images/Movie.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <a href='#'>
                    <img src={Movie}/>
                   
                </a>
            </div>
            <nav className='nav'>
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
            </nav>
        </header>
    
    )
}

export default Header