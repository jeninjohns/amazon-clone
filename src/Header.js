import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
  return (
    <nav className='header'>
      {/* logo on the left - > amazon */}
      <Link to='/'>
        <img
          className='header__logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='logo'
        />
      </Link>

      {/* search box */}
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      {/* 3 links */}
      <div className='header__nav'>
        {/* 1st Link */}
        <Link to='/login' className='header__link'>
          <div className='header__options'>
            <span className='header__optionLineOne'>Hello</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>
        {/* 2st Link */}
        <Link to='/' className='header__link'>
          <div className='header__options'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        {/* 3st Link */}
        <Link to='/' className='header__link'>
          <div className='header__options'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
        {/* 4st Link */}
        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            {/* basket icon */}
            <ShoppingBasketIcon />
            {/* number of items */}
            <span className='header__optionLineTwo header__basketCount'>0</span>
          </div>
        </Link>
      </div>
      {/* cart with number */}
    </nav>
  )
}

export default Header
