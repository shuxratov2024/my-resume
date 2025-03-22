import React from 'react'
import ava from"/public/portfolio.jpg"
import "../styles/_footer.scss"
function Footer() {
  return (
    <>
    <footer className="footer">
        <div className="footer-item">
            <div className="footer-ava">
            </div>
            <ul>Social
                <li>
                    <a href="https://t.me/shukhratov_amir">Telegram</a>
                </li>
                <li>
                    <a href="https://t.me/shuxratov_developer">Telegram Channel</a>
                </li>
                <li>
                    <a href="https://x.com/shuxratov_amir">X</a>
                </li>
            </ul>
            <div className="footer-name">
            <h1>Amir Shukhratov</h1>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer