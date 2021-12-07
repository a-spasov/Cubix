import logo from '../images/cubixLogo.jpg';
import styles from './Header.module.css';
import TopNavigation from './TopNavigation';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

export default function Header() {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
            <div className="col-2 text-center">
                <img src={logo} alt="cubixlogo" className={styles.logo} />              
            </div>
            <div className="col-8 justify-content-center">
                <TopNavigation/>
            </div>
            <div class="col-2 text-end">
                <LoginButton/>
                <RegisterButton/>
            </div>                  
        </header>
    )
}