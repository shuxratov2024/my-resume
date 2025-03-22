import React from 'react'
import "../styles/_header.scss"
import ava from"/public/portfolio.jpg"
function Header() {
  return (
    <>
    <header className='header'>
        <div className="header-item">
            <div className="header-logo">
                <img src={ava} alt="" />
                <h2 className='header-fullname'>Amir Shukhratov</h2>
            </div>
            <nav className="header-link">
                <a href="https://t.me/shukhratov_amir">Telegram</a>
                <a href="https://x.com/shuxratov_amir">X</a>
                <a href="https://github.com/shuxratov2024">Github</a>

            </nav>
        </div>
    </header>

    </>
  )
}

export default Header