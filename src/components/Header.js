import logo from '../images/cubixLogo.jpg';
import styles from './Header.module.css';
import TopNavigation from './TopNavigation';

export default function Header() {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
            <div className="col-2 text-center">
                <img id={styles.logo} src={logo} alt="cubixlogo" className={styles.logo} />              
            </div>
            <div className="col-8 justify-content-center">
                <TopNavigation/>
            </div>
            <div class="col-2 text-end">
                <button type="button" class="btn btn-outline-primary me-2">Login</button>
                <button type="button" class="btn btn-primary">Sign-up</button>
            </div>                  
        </header>
    )
}