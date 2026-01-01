import Logo from "../Logo";
import SearchBar from "../SearchBar";
import ProfileMenu from "../ProfileMenu";
import { SC_Header, SC_HeaderWrapper, SC_LogoWrapper } from "./styles";
import ToggleButton from "../ToggleButton";
import { useThemeContext } from "../../contexts/Theme";

export default function Header() {
    const {theme, toggleTheme} = useThemeContext();
    return (
            <SC_Header>
                <SC_HeaderWrapper>
                    <SC_LogoWrapper>
                        <Logo onClick={() => window.location.reload()} />
                        <ToggleButton theme={theme} onClick={() => toggleTheme()}/>
                    </SC_LogoWrapper>
                    <SearchBar />
                    <ProfileMenu />
                </SC_HeaderWrapper>
                <hr />
            </SC_Header>
    );
} 