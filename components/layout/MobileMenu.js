import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileMenu({ isMobileMenu, setShowMenu }) {
    const router = useRouter();

    const handleClose = () => {
        setShowMenu(false);
    };

    return (
        <div className={`mobile-menu ${isMobileMenu ? "show" : ""}`}>
            <div className="menu-backdrop" onClick={handleClose}></div>
            <div className="menu-box">
                <div className="close-btn" onClick={handleClose}><i className="flaticon-close"></i></div>

                <nav className="menu-outer">
                    <ul className="navigation">
                        <li>
                            <Link href="/" onClick={handleClose}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={handleClose}>About</Link>
                        </li>
                        <li>
                            <Link href="/courses" onClick={handleClose}>Courses</Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={handleClose}>Contact</Link>
                        </li>
                        {/* Add more links here if needed */}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
