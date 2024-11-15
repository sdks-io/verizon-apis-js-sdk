
# V2 Campaign Device

List of devices in a campaign.

## Structure

`V2CampaignDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalDevice` | `number \| undefined` | Optional | Total device count. |
| `hasMoreData` | `boolean` | Required | Has more report flag. |
| `lastSeenDeviceId` | `string \| undefined` | Optional | Device identifier. |
| `maxPageSize` | `number` | Required | Maximum page size. |
| `deviceList` | [`V2DeviceStatus[]`](../../doc/models/v2-device-status.md) | Required | List of devices with id in IMEI. |

## Example (as JSON)

```json
{
  "totalDevice": 1148,
  "hasMoreData": true,
  "lastSeenDeviceId": "15-digit IMEI",
  "maxPageSize": 1000,
  "deviceList": [
    {
      "deviceId": "15-digit IMEI",
      "status": "UpgradeSuccess",
      "resultReason": "DownloadInstallSucceeded"
    },
    {
      "deviceId": "15-digit IMEI",
      "status": "UpgradeSuccess",
      "resultReason": "DownloadInstallSucceeded"
    },
    {
      "deviceId": "15-digit IMEI",
      "status": "UpgradeSuccess",
      "resultReason": "DownloadInstallSucceeded"
    }
  ]
}
```

