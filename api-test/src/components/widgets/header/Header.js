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
                <p>Catalogs</p>
                <p>Genres</p>
                
            </nav>
        </header>
    
    )
}

export default Header