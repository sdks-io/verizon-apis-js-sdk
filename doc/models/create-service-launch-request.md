
# Create Service Launch Request

## Structure

`CreateServiceLaunchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Name of the received request.<br>**Constraints**: *Maximum Length*: `50`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `serviceName` | `string \| undefined` | Optional | Service being deployed.<br>**Constraints**: *Maximum Length*: `50`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `cspProfileId` | `string` | Required | **Constraints**: *Maximum Length*: `50`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `serviceProfileId` | `string` | Required | The service profile ID that is created during the post-service API.<br>**Constraints**: *Maximum Length*: `50`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `serviceVersion` | `string \| undefined` | Optional | Service version being deployed.<br>**Constraints**: *Maximum Length*: `50`, *Pattern*: `^(.*)$` |

## Example (as JSON)

```json
{
  "name": "MdpTest3",
  "serviceName": "mongodbdemo0710",
  "serviceVersion": "2.5.6",
  "serviceProfileId": "6789409c-12c3-4fc9-b64f-71d1611c4f09",
  "cspProfileId": "6789409c-12c3-4fc9-b64f-71d1611c4f09"
}
```

