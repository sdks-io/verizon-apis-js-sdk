
# Session Report Request

Request for obtaining a session report.

## Structure

`SessionReportRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | Account Number. |
| `imei` | `string` | Required | Device ids. |
| `startDate` | `string \| undefined` | Optional | Start date of session to include. If not specified  information will be shown from the earliest available (180 days). Can be either date in ISO 8601 format or predefined constants. |
| `endDate` | `string \| undefined` | Optional | End date of session to include. If not specified  information will be shown to the latest available. Can be either date in ISO 8601 format or predefined constants. |
| `durationLow` | `number \| undefined` | Optional | The Low value of session duration. |
| `durationHigh` | `number \| undefined` | Optional | The High value of session duration. |

## Example (as JSON)

```json
{
  "accountNumber": "0844021539-00001",
  "startDate": "2022-12-09T22:01:06.217Z",
  "endDate": "2022-12-09T22:01:08.734Z",
  "imei": "709312034493372",
  "durationLow": 60,
  "durationHigh": 192
}
```

