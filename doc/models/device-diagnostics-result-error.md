
# Device Diagnostics Result Error

All error messages are returned in this format. Error codes and messages are listed on the Error Codes page, along with explanations and suggestions for corrective actions.

## Structure

`DeviceDiagnosticsResultError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string` | Required | Simple error code. |
| `errorMessage` | `string` | Required | Detailed error message. |

## Example (as JSON)

```json
{
  "errorCode": "INTERNAL_SYSTEM_ERROR",
  "errorMessage": "The system encountered an internal error."
}
```

