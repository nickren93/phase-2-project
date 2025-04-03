import './Footer.css'

function Footer(){

    return(
        <footer id="footer">
        <div>
            <h3>Links</h3>
            <p>
                <a href="#" target="_blank">UFC Official Website</a><br/>
                <a href="#" target="_blank">ESPN+</a><br/>
                <a href="#" target="_blank">YouTube Page</a>
            </p>
        </div>

        <div>
            <h3>Follow Us</h3>
            <p>
                <a href="#" target="_blank">Youtube</a><br/>
                <a href="#" target="_blank">Facebook</a><br/>
                <a href="#" target="_blank">Twitter</a>
            </p>
        </div>
        <div>
            <h3>Contact</h3>
            <p>
                email: <a href="mailto:info@xxxxxxxx.com">info@xxxxxxxx.com</a><br/>
                phone: +1 xxx xxx xxxx<br/>
                fax: xxx-xxx-xxxx
            </p>
        </div>
        <div>
            <h3>Correspondence</h3>
            <address>
                xxxxxxxxx<br/>
                P.O.Box 5555<br/>
                Brooklyn, NY 11201
            </address>
            <details>
                <summary>&copy; 2024 Fighter Finder.</summary>
                <p>All Rights Reserved.</p>
            </details>
        </div>
      </footer>
    )
}

export default Footer