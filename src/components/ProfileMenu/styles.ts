import styled from "styled-components";

export const SC_MenuWrapper = styled.div`
    display: flex;
    gap: 12px;
`;

type IconWrapperProps = {
    back?: string;
    pill?: boolean;
}

export const SC_IconWrapper = styled.div<IconWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: ${props => props.pill ? '999px' : '50%'};
    background-color: ${props => props.back ? props.back : 'none'};
    font-size: 12px;
    gap: 6px;

    &:nth-child(3) {
        border-radius: 624.9375rem;
        
        & span {
            font-weight: 500;
            font-size: 14px;
        }
    }

    &:hover {
        background-color: rgba(212, 212, 212, 1);
        cursor: pointer;

        & svg, span {
            fill: black;
            color: black;
        }
    }
`;

export const SC_AvatarWrapper = styled.div`
    border-radius: 50%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 4px;
    height: 32px;
    width: 32px;
    box-sizing: content-box !important;

    & img {
        border-radius: inherit;
        transform: scaleX(-1);
    }

    & span {
        background-color: green;
        border-radius: inherit;
        width: 8px;
        height: 8px;
        position: absolute;
        left: 5px;
        bottom: 5px;
        border: 1px solid white;
    }

    &:hover {
        background-color: rgba(212, 212, 212, 1);
        cursor: pointer;
    }
`