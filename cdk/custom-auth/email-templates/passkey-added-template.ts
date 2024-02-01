/* eslint-disable header/header */
export const getAddedHtmlTemplate = (friendlyName: string) => `<head>
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
  Passkey Added
</h1>
<p style="font-size: 20px">
  A new passkey has been created for your ConnectP2P.com account named "${friendlyName}".
</p>
<p>
  Your passkey will sign you in instantly and securely, without the need for a password.
</p>
<h3>
  Security
</h3>
<p>
  FIDO2 is a set of standards that enables passwordless authentication options like biometrics (fingerprint, face ID)
  or physical security keys (YubiKey).
</p>
<p>
  With FIDO2, your sign-in is tied to your unique biometrics or security key, not a text password that can be forgotten,
  stolen or cracked. This makes your account much more secure.
</p>
<p>
  A passkey is a type of credential that can be used for FIDO2 authentication.
</p>
<p>
  A passkey works by storing a cryptographic key pair on your device and with the relying party (members.connectp2p.com).
  The private key stays on your device only.
</p>
<p>
  During authentication, your device signs a challenge from the relying party using the private key. This
  signature can be verified against the public key for authentication.
</p>
<p>
  Some key advantages of FIDO2 authentication:
</p>
<ul>
  <li>
    No passwords to forget or reset - Your sign-in relies on your fingerprint or security key, which only you possess.
  </li>
  <li>
    Resistant to phishing - It uses public key cryptography to verify your sign-in, so breaches don't reveal any
    reusable credentials.
  </li>
  <li>
    No replay attacks - Each sign-in attempt generates a new cryptographic key, preventing replay of stolen keys.
  </li>
  <li>
    Convenience - FIDO2 sign-ins are often faster and easier than passwords. Just tap your fingerprint or plug in your
    security key.
  </li>
  <li>
    By adding FIDO2 authentication options, we are giving you stronger account security and convenience, for a sign-in
    experience that is both secure and hassle-free. Your account is now protected against many common password
    problems.
</ul>
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
export const getAddedTextTemplate = (friendlyName: string) => `Passkey Added

A new passkey has been created for your ConnectP2P.com account named "${friendlyName}".

Your passkey will sign you in instantly and securely, without the need for a password.

Security

FIDO2 is a set of standards that enables passwordless authentication options like biometrics (fingerprint, face ID) or physical security keys (YubiKey).

With FIDO2, your sign-in is tied to your unique biometrics or security key, not a text password that can be forgotten, stolen or cracked. This makes your account much more secure.

A passkey is a type of credential that can be used for FIDO2 authentication.

A passkey works by storing a cryptographic key pair on your device and with the relying party (members.connectp2p.com). The private key stays on your device only.

During authentication, your device signs a challenge from the relying party using the private key. This signature can be verified against the public key for authentication.

Some key advantages of FIDO2 authentication:

- No passwords to forget or reset - Your sign-in relies on your fingerprint or security key, which only you possess.
- Resistant to phishing - It uses public key cryptography to verify your sign-in, so breaches don't reveal any reusable credentials.
- No replay attacks - Each sign-in attempt generates a new cryptographic key, preventing replay of stolen keys.
- Convenience - FIDO2 sign-ins are often faster and easier than passwords. Just tap your fingerprint or plug in your security key.
- By adding FIDO2 authentication options, we are giving you stronger account security and convenience, for a sign-in experience that is both secure and hassle-free. Your account is now protected against many common password problems.

Need help?

Contact our support team at: support@connectp2p.com.

The Connect P2P Team`;
