import React from 'react';

import { Button, Img } from './styles';

export interface Props {
    hasImage?: boolean;
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
    hasImage
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src='https://svgshare.com/i/Pb9.svg' alt='início' />}
            {hasImage && <Img />}
        </Button>
    )
}

export default ServerButton;