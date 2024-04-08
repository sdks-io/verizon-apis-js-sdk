
# Sms Messages Response

## Structure

`SmsMessagesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messages` | [`GIOSmsMessage[] \| undefined`](../../doc/models/gio-sms-message.md) | Optional | **Constraints**: *Maximum Items*: `5` |
| `hasMoreData` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "hasMoreData": false,
  "messages": [
    {
      "deviceIds": [
        {
          "kind": "kind8",
          "id": "id0"
        },
        {
          "kind": "kind8",
          "id": "id0"
        }
      ],
      "message": "message8",
      "timestamp": "2016-03-13T12:52:32.123Z"
    },
    {
      "deviceIds": [
        {
          "kind": "kind8",
          "id": "id0"
        },
        {
          "kind": "kind8",
          "id": "id0"
        }
      ],
      "message": "message8",
      "timestamp": "2016-03-13T12:52:32.123Z"
    }
  ]
}
```

