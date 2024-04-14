import { OAuth2Client } from 'google-auth-library';
import { TokenPayload } from 'google-auth-library/build/src/auth/loginticket';
import config from '../config';
const client = new OAuth2Client();
const verifyGoogle = async (token: string) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: config.google.client_id, // Specify the CLIENT_ID of the app that accesses the backend
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload() as TokenPayload; ;
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
  console.log('verifyGoogle -> payload', payload);
};
// verify().catch(console.error);

export const verifySocialTokenHelper = {
  verifyGoogle,
};
