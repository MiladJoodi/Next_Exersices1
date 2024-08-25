import DarkMode from "./DarkMode";
import HamburgerComponent from "./HamburgerComponent";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4">
            <DarkMode />
            <HamburgerComponent />
        </header>
    );
}

export default Header;