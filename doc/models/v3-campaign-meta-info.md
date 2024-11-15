
# V3 Campaign Meta Info

Campaign and campaign details.

## Structure

`V3CampaignMetaInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier. |
| `id` | `string` | Required | Campaign identifier. |
| `campaignName` | `string \| undefined` | Optional | Campaign name. |
| `firmwareName` | `string \| undefined` | Optional | Firmware name. |
| `firmwareFrom` | `string \| undefined` | Optional | Old firmware version. |
| `firmwareTo` | `string \| undefined` | Optional | New software version. |
| `protocol` | [`CampaignMetaInfoProtocolEnum \| undefined`](../../doc/models/campaign-meta-info-protocol-enum.md) | Optional | Firmware protocol. Valid values include: LWM2M, OMD-DM.<br>**Default**: `CampaignMetaInfoProtocolEnum.LWM2m` |
| `make` | `string` | Required | Device make. |
| `model` | `string` | Required | Device model. |
| `startDate` | `string` | Required | Campaign start date. |
| `endDate` | `string` | Required | Campaign end date. |
| `campaignTimeWindowList` | [`V3TimeWindow[] \| undefined`](../../doc/models/v3-time-window.md) | Optional | List of allowed campaign time windows. |
| `status` | `string` | Required | Firmware upgrade status. |

## Example (as JSON)

```json
{
  "accountName": "0000123456-00001",
  "id": "60b5d639-ccdc-4db8-8824-069bd94c95bf",
  "campaignName": "FOTA_Verizon_Upgrade",
  "firmwareName": "FOTA_Verizon_Model-A_02To03_HF",
  "firmwareFrom": "FOTA_Verizon_Model-A_00To01_HF",
  "firmwareTo": "FOTA_Verizon_Model-A_02To03_HF",
  "make": "Verizon",
  "model": "Model-A",
  "status": "CampaignEnded",
  "startDate": "2020-08-21",
  "endDate": "2020-08-22",
  "campaignTimeWindowList": [
    {
      "startTime": 20,
      "endTime": 21
    }
  ],
  "protocol": "LWM2M"
}
```

