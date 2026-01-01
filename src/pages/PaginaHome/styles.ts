import styled from 'styled-components';

export const SC_MainWrapper = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    width: 100vw;
`;

export const SC_TermsWrapper = styled.div`
    position: absolute;
    width: 20%;
    bottom: 75px;
    right: 50px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--text-color);

    & a:hover {
        &:not(#github-icon) {
            cursor: pointer;
            text-decoration: underline !important;
        }
    }
`