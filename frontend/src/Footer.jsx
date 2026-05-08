import insta from './img/insta.png'

function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} HeniCake</p>
            <a target='blank' href="https://www.instagram.com/mentes_tortak/"><img className='social-link' src={insta} alt="" /></a>
        </footer>
    )
}

export default Footer