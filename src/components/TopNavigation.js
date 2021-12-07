import styles from './TopNavigation.module.css';

export default function TopNavigation() {
    return (
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li className={styles.links}><a href="#" class="nav-link px-2">Home</a></li>
            <li className={styles.links}><a href="#" class="nav-link px-2">About us</a></li>
            <li className={styles.links}><a href="#" class="nav-link px-2 ">Puzzles</a></li>
            <li className={styles.links}><a href="#" class="nav-link px-2">Solutions</a></li>
            <li className={styles.links}><a href="#" class="nav-link px-2 ">Collections</a></li>
            <li className={styles.links}><a href="#" class="nav-link px-2">Marketplace</a></li>
        </ul>
    )
}