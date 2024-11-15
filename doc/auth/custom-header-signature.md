
# Custom Header Signature



Documentation for accessing and setting credentials for vz-m2m-session_token.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| VZ-M2M-Token | `string` | The VZ-M2M session token from [Getting Started](/content/thingspace-portal/documentation/apis/connectivity-management/get-started.html) | `vZM2MToken` |



**Note:** Auth credentials can be set using `vzM2mSessionTokenCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  vzM2mSessionTokenCredentials: {
    'VZ-M2M-Token': 'VZ-M2M-Token'
  },
});
```


