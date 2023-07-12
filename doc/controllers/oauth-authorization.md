# OAuth Authorization

```ts
const oauthAuthorizationController = new OauthAuthorizationController(client);
```

## Class Name

`OauthAuthorizationController`


# Request Token

Create a new OAuth 2 token.

:information_source: **Note** This endpoint does not require authentication.

```ts
async requestToken(
  authorization: string,
  scope?: string,
  fieldParameters?: Record<string, unknown>,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OauthToken>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string` | Header, Required | Authorization header in Basic auth format |
| `scope` | `string \| undefined` | Form, Optional | Requested scopes as a space-delimited list. |
| `fieldParameters` | `Record<string, string>` | Optional | Pass additional field parameters. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OauthToken`](../../doc/models/oauth-token.md)

## Example Usage

```ts
const authorization = 'Authorization8';

const fieldParameters: Record<string, string> = {
  'key0': 'additionalFieldParams9'
};

try {
  const { result, ...httpResponse } = await oauthAuthorizationController.requestToken(
    authorization,
    fieldParameters
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | OAuth 2 provider returned an error. | [`OauthProviderError`](../../doc/models/oauth-provider-error.md) |
| 401 | OAuth 2 provider says client authentication failed. | [`OauthProviderError`](../../doc/models/oauth-provider-error.md) |

