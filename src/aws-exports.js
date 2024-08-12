const awsmobile = {
    Auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_Hd6MkeogO',
        userPoolWebClientId: '3cebekstv3u1djhei7v1ka4nm9',
        oauth: {
            domain: 'bookslogintest.auth.us-east-1.amazoncognito.com',
            scope: ['email', 'openid', 'phone'],
            redirectSignIn: 'https://master.ddbowehfmoqde.amplifyapp.com',
            redirectSignOut: 'https://master.ddbowehfmoqde.amplifyapp.com',
            responseType: 'code'
        }
    }
};

export default awsmobile;
