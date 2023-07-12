
# I Error Message

Error message.

## Structure

`IErrorMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | [`ErrorResponseCodeEnum \| undefined`](../../doc/models/error-response-code-enum.md) | Optional | Error Code. |
| `errorMessage` | `string \| undefined` | Optional | Details and additional information about the error code. |
| `httpStatusCode` | [`HttpStatusCodeEnum \| undefined`](../../doc/models/http-status-code-enum.md) | Optional | HTML error code and description. |
| `detailErrorMessage` | `string \| undefined` | Optional | More detail and information about the HTML error code. |

## Example (as JSON)

```json
{
  "httpStatusCode": "200 OK",
  "errorCode": "INVALID_ACCESS",
  "errorMessage": "errorMessage8",
  "detailErrorMessage": "detailErrorMessage2"
}
```

