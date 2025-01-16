import '../styles/Navbar.css';
import {Link} from "react-router-dom"

const Navbar = () => {
   const currentPage = window.location.pathname;
   return (
      <Navbar id="Navbar" className="Navbar-section">
         <nav>
            <ul>
               <li>
                  <Link to="/" className={currentPage === '/Home' ? 'nav-link active' : 'nav-link'} >
                     Home
                  </Link>
                </li>
                
                <li>
                  <Link to="/" className={currentPage=== '/About' ? 'nav-link active' : 'nav-link'} >
                     About
                  </Link>
               </li>  

               <li>
               <Link to= "/" className={ currentPage ==='/Portfolio' ? 'nav-link active' : ' nav-link'} >  
                     Portfolio
               </Link>
              </li>

               <li>
               <Link to= "/" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'  } >
                     Resume
               </Link>
               </li>

               <li>
               <Link to= "/" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'  } >
                     Contact
               </Link>
               </li>
            </ul>
         </nav>
      </Navbar>
);
}
            export default Navbar;