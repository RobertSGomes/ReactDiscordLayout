import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton hasImage />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton mentions={5}/>
            <ServerButton hasNotifications/>
            <ServerButton />
        </Container>
    )
};

export default ServerList;