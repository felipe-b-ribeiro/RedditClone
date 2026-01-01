import {SC_ToggleButton} from "./styles";


export default function ToggleButton({theme, onClick}: {theme: 'light' | 'dark', onClick: () => void}) {
    return (
        <SC_ToggleButton onClick={() => onClick()}>
            {theme === 'light' ? '🌑' : '☀️'}
        </SC_ToggleButton>
    );
}