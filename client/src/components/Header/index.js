import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import "../../fonts/BancoRegular.woff";
import logo from '../../images/logo-04.jpg'

// const resizeImage = () => {
//     this.style.maxwidth=10;
// }

// export default class ScrollTest extends React.Component {
//     componentDidMount() {
//       window.addEventListener("scroll", this.resizeHeaderOnScroll);
//     }
//     resizeHeaderOnScroll() {
//       const distanceY = window.pageYOffset || document.documentElement.scrollTop,
//         shrinkOn = 200,
//         headerEl = document.getElementById("js-header");
  
//       if (distanceY > shrinkOn) {
//         headerEl.classList.add("smaller");
//       } else {
//         headerEl.classList.remove("smaller");
//       }
//     }

 const Header = () => {
        return (
          <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <Link to='/'>
              <h1>MARKET ZERO.</h1>
              <img src= {logo} className='logo' alt="logo for market zero" />
              </Link>

            <nav className="text-center">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            </nav>

            </div>
          </header>
        );
      };

export default Header;
