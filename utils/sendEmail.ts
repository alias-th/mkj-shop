import nodemailer from "nodemailer";
import { google } from "googleapis";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const { OAuth2 } = google.auth;

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAIL_OAUTH_CLIENT_ID,
  MAIL_OAUTH_CLIENT_SECRET,
  MAIL_OAUTH_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(MAIL_OAUTH_CLIENT_ID, MAIL_OAUTH_CLIENT_SECRET, OAUTH_PLAYGROUND);

export const sendEmail = async (
  to: string,
  subject: string,
  url: string,
  html: (to: any, url: any) => string
) => {
  oauth2Client.setCredentials({
    refresh_token: MAIL_OAUTH_REFRESH_TOKEN,
  });
  const accessToken = await oauth2Client.getAccessToken();

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAUTH2",
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAIL_OAUTH_CLIENT_ID,
      clientSecret: MAIL_OAUTH_CLIENT_SECRET,
      refreshToken: MAIL_OAUTH_REFRESH_TOKEN,
      accessToken: accessToken,
    },
  } as SMTPTransport.Options);

  const mailOptions = {
    from: SENDER_EMAIL_ADDRESS,
    to: to,
    subject: subject,
    html: html(to, url),
  };

  smtpTransport.sendMail(mailOptions, (err, infos) => {
    if (err) return err;
    return infos;
  });
};
