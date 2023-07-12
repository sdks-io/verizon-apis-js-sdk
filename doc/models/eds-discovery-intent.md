
# Eds Discovery Intent

## Structure

`EdsDiscoveryIntent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ueIdentity` | `string \| undefined` | Optional | UEIdentity to discover EDS location service.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `ueIdentityType` | [`UEIdentityTypeEnum \| undefined`](../../doc/models/ue-identity-type-enum.md) | Optional | Default type for ueIdentityType.<br>**Default**: `UEIdentityTypeEnum.IPAddress` |

## Example (as JSON)

```json
{
  "ueIdentityType": "IPAddress",
  "ueIdentity": "ueIdentity0"
}
```

