import React from 'react'
import './NavBar.css'

function NavBar() {
  
  return (
    
    <div className="navbar">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        <img  className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
        <div class="topnav">

          <a class="active" href="#home">Home</a>
          <a href="#Movies">Movies</a>
          <a href="#Tv shows">Tv Shows</a>
          <a href="#resently add">Recently added</a>
</div>

    </div>
  )
}

export default NavBar