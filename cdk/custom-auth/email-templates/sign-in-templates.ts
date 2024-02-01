/* eslint-disable header/header */
export const getHtmlTemplate = (
  secretLoginLink: string,
  minutesToExpiration: number
) => `<html>
<head>
  <style>
    body {
      padding: 20px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      color: #122337;
    }
    a { color: #D08859; }
  </style>
</head>
<body>
  <h1>
    Welcome to Connect P2P!
  </h1>
  <p style="font-size: 20px">
    To get started, simply click the link below:
  </p>
  <p style="font-size: x-large">
    👉 <a href="${secretLoginLink}">Sign In</a>
  </p>
  <p>
    This unique link will sign you in instantly and securely, without the need for a password.
  </p>
  <p>
    The link will expire in ${minutesToExpiration} minutes.
  </p>
  <p>
    Having trouble clicking the link? No problem! Just copy and paste it into your browser&apos;s address bar:<br />
    ${secretLoginLink}
  </p>
  <h3>
    Security
  </h3>
  <p>
    Your security is our top priority. This magic link is only valid for you and can only be used once. If you didn&apos;t
    request a sign-in, please ignore this email.
  </p>
  <h3>
    Need help?
  </h3>
  <p>
    Contact our support team at: <a href="mailto:support@connectp2p.com">support@connectp2p.com</a>.
  </p>
  <b style="font-weight: bolder;font-size:30px">
    The Connect P2P Team
  </b>
</body>
</html>`;

/* eslint-disable header/header */
export const getTextTemplate = (
  secretLoginLink: string,
  minutesToExpiration: number
) => `Welcome to Connect P2P!

To get started, simply click the link below:

${secretLoginLink}

This unique link will sign you in instantly and securely, without the need for a password.

The link will expire in ${minutesToExpiration} minutes.

Having trouble clicking the link? No problem! Just copy and paste it into your browser's address bar.

Security

Your security is our top priority. This magic link is only valid for you and can only be used once. If you didn't request a sign-in, please ignore this email.

Need help?

Contact our support team at: support@connectp2p.com.

The Connect P2P Team`;
