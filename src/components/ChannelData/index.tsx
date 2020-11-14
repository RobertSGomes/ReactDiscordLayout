import React, { useRef, useEffect } from 'react';

import ChannelMesage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div .scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMesage
                    author="BrothersCtrls"
                    date="25/10/2020"
                    content="Isso obviamente é uma mensagem!"
                />

                <ChannelMesage
                    author="BrothersCtrls"
                    date="25/10/2020"
                    content="Isso obviamente é uma mensagem!"
                />

                <ChannelMesage
                    author="BrothersCtrls"
                    date="25/10/2020"
                    content="Isso obviamente é uma mensagem!"
                />

                <ChannelMesage
                    author="BrothersCtrls"
                    date="25/10/2020"
                    content="Isso obviamente é uma mensagem!"
                />

                <ChannelMesage
                    author="BrothersCtrls"
                    date="25/10/2020"
                    content="Isso obviamente é uma mensagem!"
                />

                <ChannelMesage
                    author="BrothersCtrls"
                    date="25/10/2020"
                    content="Isso obviamente é uma mensagem!"
                />

                <ChannelMesage
                    author="BrothersCtrls"
                    date="25/10/2020"
                    content="Isso obviamente é uma mensagem!"
                />

                <ChannelMesage
                    author="BrothersCtrls"
                    date="25/10/2020"
                    content="Isso obviamente é uma mensagem!"
                />

                <ChannelMesage
                    author="BrothersCtrls"
                    date="25/10/2020"
                    content="Isso obviamente é uma mensagem!"
                />
                
                <ChannelMesage
                    author="Rythm"
                    date="25/10/2020"
                    content={
                        <>
                            <Mention>@BrothersCtrls</Mention>, Oi, tudo bom?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;