import { useEffect, useState } from 'react';
import styles from "./GoToTopBtn.module.css";
import { FaChevronUp } from "react-icons/fa";

export default function GoToTopBtn() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            {showButton && (
                <button onClick={scrollToTop} className="btn btn-outline-danger fw-bold pt-0" id={styles.top}>
                    <FaChevronUp />
                    TOP
                </button>
            )}
        </>
    )
}