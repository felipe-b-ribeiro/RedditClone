import useNavigateCustom from "../../hooks/useNavigateCustom";
import { useRef } from "react";
import { SC_Input, SC_Wrapper, SC_MiniWrapper, SC_SepVertical, SC_Button } from "./styles";
import RedditIcon from '../icons/Reddit';
import AnswersIcon from "../icons/Answers";

export default function SearchBar() {
    
    const { goTo } = useNavigateCustom();

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <SC_Wrapper onClick={() => inputRef.current?.focus()}>
            <SC_MiniWrapper>
                <RedditIcon className='imutable' />
                <SC_Input ref={inputRef} placeholder="Find anything"  />
                <SC_SepVertical />
                <SC_Button onClick={() => goTo("https://www.reddit.com/answers/")}>
                    <AnswersIcon className='imutable' />
                    <span>Ask</span>
                </SC_Button>
            </SC_MiniWrapper>
        </SC_Wrapper>
    );
}   