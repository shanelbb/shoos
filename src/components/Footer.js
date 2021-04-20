import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="footerContact">
               <Link to="/"><h3>shoos.</h3></Link> 
                <p>Call Us: 1.800.876.5432</p>
                <p>Email Us: information@shoos.com</p>
            </div>
            <div className="siteInfo">
                <p>Made at <a href="https://junocollege.com/">Juno College</a> by Shanel Beebe &#169; 2021</p>
                <p>Images courtesy of <a href="https://unsplash.com/">unsplash.com</a></p>
            </div>
        </footer>
    )
}

export default Footer


