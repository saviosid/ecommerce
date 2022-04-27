import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss'
import { ReactComponent as Logo } from '../../assets/bulogLogo.svg'

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        Shop
                    </Link>
                    <Link className='nav-link' to='/sign-In'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};
export default Navigation;
