import Oidc from 'oidc-client';

var mgr = new Oidc.UserManager({
    authority: 'http://localhost:5001',
    client_id: 'portal_web',
    redirect_uri: 'http://localhost:3000/callback',
    response_type: 'id_token token',
    scope: 'rest.auth profile openid',
    post_logout_redirect_uri: 'http://localhost:3000/',
    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
    filterProtocolClaims: true,
    loadUserInfo: true,
    automaticSilentRenew: true,
    silent_redirect_uri: 'http://localhost:3000/static/silent-renew.html',
    accessTokenExpiringNotificationTime: 10,
    //   filterProtocolClaims: true,
   //loadUserInfo: true
})

export default mgr;