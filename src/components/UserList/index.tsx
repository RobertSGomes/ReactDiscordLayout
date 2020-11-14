import React from 'react';

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string;
    isBot?: boolean;
    isPro?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot, isPro}) => {
    return (
        <User>
            <Avatar className = {isBot ? 'bot' : isPro ? 'pro' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span id='bot'>Bot</span>}
            {isPro && <span id='pro'>Pro</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="BrothersCtrls" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Rythm" isBot />
            <UserRow nickname="PaozindeForma" isPro />
            <UserRow nickname="Bittinner" />
            <UserRow nickname="Kayquera565" />
            <UserRow nickname="ferb" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
            <UserRow nickname="fulano" />
        </Container>
    )
};

export default UserList;