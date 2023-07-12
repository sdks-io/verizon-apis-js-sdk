
# Create Service Profile Request

## Structure

`CreateServiceProfileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name for a service profile.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `serviceName` | `string \| undefined` | Optional | Service being deployed.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `serviceVersion` | `string \| undefined` | Optional | Service version being deployed.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `customerID` | `string \| undefined` | Optional | Id of particular customer.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `linkedServiceInstances` | [`LinkedServiceInstance[] \| undefined`](../../doc/models/linked-service-instance.md) | Optional | - |
| `accessIntents` | [`AccessIntents \| undefined`](../../doc/models/access-intents.md) | Optional | - |
| `placementIntents` | [`PlacementIntents \| undefined`](../../doc/models/placement-intents.md) | Optional | - |
| `deploymentLocations` | [`DeploymentLocation[] \| undefined`](../../doc/models/deployment-location.md) | Optional | - |

## Example (as JSON)

```json
{
  "name": "mongo-pmec-profile-mdp7",
  "serviceName": "mongodb-customer-prerun",
  "serviceVersion": "1.0.0",
  "customerID": "customerID8",
  "linkedServiceInstances": [
    {
      "id": "00000a3b-0000-0000-0000-000000000000"
    },
    {
      "id": "00000a3c-0000-0000-0000-000000000000"
    }
  ]
}
```

