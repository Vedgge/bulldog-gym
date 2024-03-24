import React from 'react'
import {Html, Body, Head, Heading, Hr, Container, Preview, Section, Text} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message: string,
    senderEmail: string;
}

export default function ContactFormEmail({message, senderEmail}: ContactFormEmailProps) {
  return (
    <Html>
        <Head></Head>
        <Preview>Nuevo mensaje desde la página web Bulldog Gym</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white border border-black/80 my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>Recibiste el siguiente message desde el form de contacto de Bulldog Gym</Heading>
                        <Text>{message}</Text>
                        <Hr></Hr>
                        <Text>El email del remitente es: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
