import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Welcome to Moon Studio — your ultimate destination for all things cinema! At Moon Studio, we celebrate the magic of film by offering an extensive collection of movie reviews, trailers, and behind-the-scenes features. Whether you're searching for the latest blockbusters, timeless classics, or hidden gems, our curated lists and insightful articles will guide you to your next great watch.

            Join our vibrant community of movie enthusiasts to discuss your favorite films, discover new releases, and immerse yourself in the world of storytelling. With user-friendly navigation and engaging content, Moon Studio is your go-to source for everything film-related. Explore, connect, and let your cinematic journey begin!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />

            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@moomstudio.com</li>
                </ul>

            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 Moom Studio.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer