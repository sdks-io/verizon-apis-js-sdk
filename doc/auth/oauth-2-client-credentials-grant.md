
# OAuth 2 Client Credentials Grant



Documentation for accessing and setting credentials for oAuth2.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| OAuthClientId | `string` | OAuth 2 Client ID | `oauthClientId` |
| OAuthClientSecret | `string` | OAuth 2 Client Secret | `oauthClientSecret` |
| OAuthToken | `OauthToken` | Object for storing information about the OAuth token | `oauthToken` |
| OAuthScopes | `OauthScopeEnum[]` | List of scopes that apply to the OAuth token | `oauthScopes` |



**Note:** Auth credentials can be set using `clientCredentialsAuthCredentials` object in the client.

## Usage Example

### Client Initialization

You must initialize the client with *OAuth 2.0 Client Credentials Grant* credentials as shown in the following code snippet.

```ts
const client = new Client({
  clientCredentialsAuthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret',
    oauthScopes: [
      OauthScopeEnum.Discoveryread,
      OauthScopeEnum.Serviceprofileread
    ]
  },
});
```



Your application must obtain user authorization before it can execute an endpoint call in case this SDK chooses to use *OAuth 2.0 Client Credentials Grant*. This authorization includes the following steps.

The `fetchToken` method will exchange the OAuth client credentials for an *access token*. The access token is an object containing information for authorizing client requests and refreshing the token itself.

You must have initialized the client with scopes for which you need permission to access.

```ts
try {
  const token = await client.clientCredentialsAuthManager?.fetchToken();
  if (token) {
    client.withConfiguration({
      clientCredentialsAuthCredentials: {
        ...config.clientCredentialsAuthCredentials,
        oauthToken: token
      }
    });
  }
} catch(error) {
  // handle ApiError or OAuthProviderError if needed
}
```

The client can now make authorized endpoint calls.

### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the [`OauthScopeEnum`](../../doc/models/oauth-scope-enum.md) enumeration.

| Scope Name | Description |
|  --- | --- |
| `Discoveryread` | Grant read-only access to discovery data |
| `Serviceprofileread` | Grant read-only access to service profile data |
| `Serviceprofilewrite` | Grant write access to service profile data |
| `Serviceregistryread` | Grant read-only access to Service registry data |
| `Serviceregistrywrite` | Grant write access to Service registry data |
| `TsMecFullaccess` | Full access for /serviceprofiles and /serviceendpoints. |
| `TsMecLimitaccess` | Limited access. Will not allow use of /serviceprofiles and /serviceendpoints but will allow discovery. |
| `TsApplicationRo` |  |
| `Read` | read access |
| `Write` | read/write access |

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

```ts
Store the token in session storage or local storage.
```

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token in Configuration along with the other configuration parameters before creating the client:

```ts
const newClient = client.withConfiguration({
  clientCredentialsAuthCredentials: {
    ...config.clientCredentialsAuthCredentials,
    oauthToken: token
  }
});
```

### Complete example



```ts
// function for storing token to database
async function saveTokenToDatabase(token: OAuthToken) {
  // Code to save the token to the database
}

// function for loading token from database
async function loadTokenFromDatabase(): Promise<OAuthToken | undefined> {
  // Load token from the database and return it (return undefined if no token exists)
  return undefined;
}

// create a new client from configuration
const client = new Client({
  clientCredentialsAuthCredentials: {
    oauthClientId: 'OAuthClientId',
    oauthClientSecret: 'OAuthClientSecret',
    oauthScopes: [
      OauthScopeEnum.Discoveryread,
      OauthScopeEnum.Serviceprofileread
    ]
  },
  vZM2mToken: 'VZ-M2M-Token',
  timeout: 0,
  environment: Environment.Production,
});

// obtain access token, needed for client to be authorized
const previousToken = await loadTokenFromDatabase();
if (previousToken) {
  // restore previous access token and update the cloned configuration with the token
  client.withConfiguration({
    clientCredentialsAuthCredentials: {
      ...config.clientCredentialsAuthCredentials,
      oauthToken: previousToken
    }
  });
} else {
  // obtain a new access token
  try {
    const token = await client.clientCredentialsAuthManager?.fetchToken();
    if (token) {
        await saveTokenToDatabase(token);
        client.withConfiguration({
          clientCredentialsAuthCredentials: {
            ...config.clientCredentialsAuthCredentials,
            oauthToken: token
          }
        });
    }
  } catch (error) {
      if (error instanceof OAuthProviderError) {
          // handle OAuthProviderError if needed
      }
    }
}
```


