import styled from "styled-components";

export const SC_LeftMenu = styled.aside`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 0;
    padding: 0 24px 0 16px;
    width: 250px;
    height: 100%;

    & .sep {
        margin: 12px 0;
    }

    & p {
        font-size: 10px;
        position: fixed;
        bottom: 24px;
        left: 30px
    }

    & ul {
        padding-top: 16px;
    }

     & .featured {
        justify-content: space-between;
        letter-spacing: 1.2px;
        font-size: 12px;
        text-transform: uppercase;
    }
`

export const SC_LeftMenuItem = styled.li`
    font-size: 14px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    border-radius: 8px;

    &:hover {
        cursor: pointer;
        background-color: rgb(246, 248, 249);
        color: black !important;

        & svg {
            fill: black !important;
        }
    }

`

export const SC_HrVertical = styled.hr`
    border: none;
    border-left: 1px solid #E6E6E6;
    height: 100%;
    width: 1px;
    position: absolute;
    right: 0;
`

export const SC_MenuButton = styled.div`
    border-radius: 50%;
    padding: 6px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-color);
    border: 1px solid var(--text-color);
    z-index: 1;
    position: absolute;
    right: -16px;
    top: 30px;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;  