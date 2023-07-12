
# Security Subscription

Subscription of the device.

## Structure

`SecuritySubscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `extendedAttributes` | [`ExtendedAttributes[] \| undefined`](../../doc/models/extended-attributes.md) | Optional | Attributes of the subscription.<br>**Constraints**: *Maximum Items*: `5` |
| `licenseAssigned` | `number \| undefined` | Optional | The total number of licenses for this license type that are assigned to device SIMs.<br>**Constraints**: `>= 0`, `<= 10` |
| `licenseAvailable` | `number \| undefined` | Optional | The total number of licenses for this license type that are available to assign to device SIMs.<br>**Constraints**: `>= 0`, `<= 10` |
| `licensePurchased` | `number \| undefined` | Optional | The total number of licenses purchased for the license type.<br>**Constraints**: `>= 0`, `<= 10` |
| `licenseType` | `string \| undefined` | Optional | The license type associated with the skuNumber. |
| `skuNumber` | `string \| undefined` | Optional | The skuNumber that identifies the license type. |

## Example (as JSON)

```json
{
  "skuNumber": "TS-BUNDLE-KTO-SIMSEC-MRC",
  "licenseType": "Flexible Bundle",
  "licensePurchased": 9,
  "licenseAssigned": 7,
  "licenseAvailable": 1,
  "extendedAttributes": [
    {
      "key": "key9",
      "value": "value1"
    },
    {
      "key": "key0",
      "value": "value2"
    }
  ]
}
```

