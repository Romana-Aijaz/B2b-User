import './header.css';
import logo from '../../logo.svg'
import Ellipse from '../../Ellipse.svg'
import menu from '../../menu.svg'
import Rectangle from '../../Rectangle.svg'

function Header() {
  return (
    <div className='header-main-container'>
        <div className='header-one-container'>
            <div className='logo-container'>
                <img alt='logo' src={logo} />
            </div>
            <div className='header-text-container'>Welcome to the fastest growing B2B Network</div>
            <div className='header-right-container'>
                <div className='subscription-plan-text'>Subscription Plan</div>
                <div className='language-change-container'>
                    <div className='language-logo'>
                        <img alt='ellipse' src={Ellipse} />
                    </div>
                    <div className='language-text'>Eng</div>
                </div>
            </div>
        </div>
        <div className='header-second-container'>
        <div className='categories-menu-container'>
            <div className='categories-menu-icon'>
                <img alt='menu' src={menu} />
            </div>
            <div className='categories-text'>Categories</div>
        </div>
        <div className='search-bar-container'>
            <div className='search-bar'>Search</div>
            <div className='search-btns'>
                <div className='btn-values'>Product</div>
                <div className='btn-values'>Supplier</div>
                <div className='btn-values'>Buyer</div>
                <div className='btn-values'>Services</div>
            </div>
        </div>
        <button className='sign-up-btn'>Sign Up</button>
        </div>
        <div className='header-img-container'>
            <img alt='Rectangle' src={Rectangle} className='header-img'/>
            <div className='circles-container'>
                <div className='colored-circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
        </div>
    </div>
  );
}

export default Header;