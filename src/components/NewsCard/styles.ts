import styled from "styled-components";

export const SC_NewsCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 16px 16px 16px;
`;

export const SC_NewsCardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    font-size: 12px;
`

export const SC_NewsCardJoinButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    background-color: var(--text-color);
    border-radius: 999px;
    color: var(--bg-color);
    padding: 0 11px;
    width: 48px;
    height: 24px;
    font-size: 12px;

    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }
`

export const SC_NewsCardBody = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    gap: 5px;
`

export const SC_NewsCardBodyContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 80%;
`;

export const SC_NewsCardBodyImage = styled.img`
    width: 130px;
    height: 100px;
    border-radius: 8px;
`;

export const SC_NewsCardFooter = styled.footer`
    display: flex;
    gap: 7px;
    align-items: center;
    justify-content: baseline;
`

