
import React from 'react'

const Footer = () => {
  return (
    <footer>
    <ul>
        <li><a href="http://instagram.com" className="instagram" target="_blank" rel="noreferrer" aria-label="instagram"><i className="fab fa-instagram"></i></a></li>
        <li><a href="http://facebook.com" target="_blank" className="facebook" rel="noreferrer" aria-label="facebook"><i className="fab fa-facebook-square"></i></a></li>
        <li><a href="mailto:sugoipc@gmail.com" target="_blank" className="email" rel="noreferrer" aria-label="email"><i className="fas fa-envelope-square"></i></a></li>
    </ul>
    <p className="copyright">Copyright &copy; Sugoi PC, すごい !</p>
  </footer>
  )
}

export default Footer