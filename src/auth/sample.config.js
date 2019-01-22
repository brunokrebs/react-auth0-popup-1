export const config = {
  clientId: 'your-auth0-client-ID',
  domain: 'your-auth0-domain',
  redirect: 'http://localhost:3000/close-popup',
  // we will go over this redirect soon.
  logoutUrl: 'http://localhost:3000',
  audience: 'https://your-auth0-api',
}
