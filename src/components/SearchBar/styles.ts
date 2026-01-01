import styled from "styled-components";

export const SC_Input = styled.input`
    border: none;
    outline: none;
    height: 50%;
    width: 70%;
    color: var(--text-color);
    margin-right: 3px;
    font-size: 14px;
    border-radius: 624.9375rem;
    padding: 2px 2px;
    margin: 6px 14px;
    background-color: inherit;
    text-align: center;

    &:focus {
        text-align: left;
    }
`;

export const SC_Wrapper = styled.div`
    position: relative;
    height: fit-content;
    width: 40%;
    z-index: 0;
    border-radius: 624.9375rem;
    background-color: var(--bg-color);
    color: var(--text-color);

    &:hover {
        background-color: var(--search-bar-hover);

        & input {
            background-color: var(--search-bar-hover);
        }
    }

    &::before {
        content: "";
        inset: -1px;
        position: absolute;
        border-radius: inherit;
        background: linear-gradient(90deg, rgb(255, 69, 0), rgb(255, 191, 11));
        z-index: -1;
    }
`

export const SC_MiniWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: inherit;
    background-color: inherit;
    padding: 0 6px;
    height: 42px;
`;

export const SC_SepVertical = styled.hr`
    height: 24px;
    width: 1px;
`;

export const SC_Button = styled.a`
    display: flex;
    align-items: center;
    gap: 6px;
    height: 80%;
    padding: 0 14px;
    margin: 0 0 0 4px;
    border-radius: inherit;
    user-select: none;
    font-size: 12px;
    font-weight: 500;;

    &:hover {
        background-color: var(--search-bar-button-hover);
        cursor: pointer;
    }
`;