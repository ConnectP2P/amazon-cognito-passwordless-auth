/* eslint-disable header/header */
export const getRemovedHtmlTemplate = (friendlyName: string) => `<head>
<style>
  body {
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #122337;
  }

  a {
    color: #D08859;
  }
</style>
</head>

<body>
<h1>
  Passkey Removed
</h1>
<p style="font-size: 20px">
  Passkey "${friendlyName}" has been removed from your ConnectP2P.com account
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
export const getRemovedTextTemplate = (friendlyName: string) => `Passkey Removed

Passkey "${friendlyName}" has been removed from your ConnectP2P.com account

Need help?

Contact our support team at: support@connectp2p.com.

The Connect P2P Team`;
