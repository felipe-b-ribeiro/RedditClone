import styled from "styled-components";

export const SC_MainContainer = styled.main`
    margin: 24px;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
`;

export const SC_PostsContainer = styled.div`
    border-radius: 16px;
    border: 1px solid #E6E6E6;
    width: 750px;
    margin-bottom: 50px;
`

export const SC_MenuContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
`;

export const SC_MenuItem = styled.div`
    display: flex;
    padding: 10px;
    border-radius: 8px;
    background-color: var(--bg-color);
    font-size: 12px;
    transition: 0.5 ease;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const SC_MenuItem2 = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    border-radius: 9999px;
    font-size: 12px;
    background-color: var(--bg-color);
    transition: 0.5 ease;

    &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.1);
        }
`