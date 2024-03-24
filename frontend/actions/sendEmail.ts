"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateStrings } from "../lib/utils";
import ContactFormEmail from "../email/email-contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const mensaje = formData.get("message");

  //Validación desde el servidor
  if (!validateStrings(senderEmail, 500)) {
    return {
      error: "Email invalido",
    };
  }

  if (!validateStrings(mensaje, 5000)) {
    return {
      error: "Mensaje invalido",
    };
  }

  let data;
  try {
    //Enviar email
    data = await resend.emails.send({
      from: "Form de contacto <onboarding@resend.dev>",
      to: "facundosavanco@gmail.com",
      subject: "Mensaje desde el form de contacto",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
