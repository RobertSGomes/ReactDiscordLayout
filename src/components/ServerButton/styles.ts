import styled from "styled-components";

import { Props } from '.';

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;
    border-radius: ${props=> props.isHome ? '16px' : '50%'};

    margin-bottom: 8px;

    background-color: 
        ${props => props.isHome ? 'var(--discord)' : 'var(--primary)'};

    position: relative;
    cursor: pointer;

    > img {
        width: 24px;
        height: 24px;
    }

    &::before {
        width: 9px;
        height: 9px;
        
        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);

        background-color: var(--white);
        border-radius: 50%;

        content: '';

        display: 
            ${props=> props.hasNotifications ? 'inline' : 'none'};
    }

    &::after {
        background-color: var(--notification);

        width: auto;
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(--quaternary);

        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

        content: 
            '${props=> props.mentions && props.mentions}';
        display: 
            ${props=> props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    }

    transition: border-radius .2s, background-color .2s;

    &.active, &:hover {
        border-radius: 16px;
        background-color: var(--discord);
    }
`;

export const Img = styled.div`
    background-image: URL('https://cdn.discordapp.com/attachments/723365491149766680/728693947567833138/RocketDogs.PNG');
    background-size: 220%220%;
    background-repeat: no-repeat;
    background-position: 50% 27%;

    width: 100%;
    height: 100%;
    
    border-radius: 50%;
    
    &:hover {
        border-radius: 16px;
    }

    transition: .2s;
`;

