
# V3 Campaign Device

Campaign history.

## Structure

`V3CampaignDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalDevice` | `number \| undefined` | Optional | Total device count. |
| `hasMoreData` | `boolean` | Required | Has more report flag. |
| `lastSeenDeviceId` | `string \| undefined` | Optional | Device identifier. |
| `maxPageSize` | `number` | Required | Maximum page size. |
| `deviceList` | [`V3DeviceStatus[]`](../../doc/models/v3-device-status.md) | Required | List of devices with id in IMEI. |

## Example (as JSON)

```json
{
  "totalDevice": 2689,
  "hasMoreData": true,
  "lastSeenDeviceId": "15-digit IMEI",
  "maxPageSize": 1000,
  "deviceList": [
    {
      "deviceId": "15-digit IMEI",
      "status": "UpgradePending",
      "resultReason": "Upgrade pending, the device upgrade is estimated to be scheduled for 06 Oct 22 18:05 UTC",
      "updatedTime": "2022-08-05T21:05:27.129Z",
      "recentAttemptTime": "2022-10-05T21:05:01.19Z",
      "nextAttemptTime": "2022-10-06T18:35:00Z"
    }
  ]
}
```

