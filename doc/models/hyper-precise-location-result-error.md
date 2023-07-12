
# Hyper Precise Location Result Error

Error response.

## Structure

`HyperPreciseLocationResultError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responseCode` | [`ErrorResponseCodeEnum \| undefined`](../../doc/models/error-response-code-enum.md) | Optional | Error Code. |
| `message` | `string \| undefined` | Optional | Error message. |
| `fault` | [`HyperPreciseLocationFault \| undefined`](../../doc/models/hyper-precise-location-fault.md) | Optional | Fault occurred while responding. |
| `example` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "responseCode": "INVALID_ACCESS",
  "fault": {
    "code": "900906",
    "message": "No matching resource found in the API for the given request",
    "description": "Access failure for API. Check the API documentation and add a proper REST resource path to the invocation URL."
  },
  "message": "message0",
  "example": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

