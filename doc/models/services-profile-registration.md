
# Services Profile Registration

## Structure

`ServicesProfileRegistration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Id of the service profile. |
| `name` | `string \| undefined` | Optional | Name for a service profile.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `serviceName` | `string \| undefined` | Optional | Service being deployed.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `serviceVersion` | `string \| undefined` | Optional | Service version being deployed.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `currentVersion` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `version` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[\w\d_\.\#\$\%\|^\&\*\@\!\-]{1,64}$` |
| `state` | [`ServicesProfileRegistrationStateEnum \| undefined`](../../doc/models/services-profile-registration-state-enum.md) | Optional | - |
| `customerID` | `string \| undefined` | Optional | Id of particular customer.<br>**Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `createdBy` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `createdAt` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `lastUpdatedBy` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `lastUpdatedAt` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `linkedServiceInstances` | [`LinkedServiceInstance[] \| undefined`](../../doc/models/linked-service-instance.md) | Optional | - |
| `accessIntents` | [`AccessIntents \| undefined`](../../doc/models/access-intents.md) | Optional | - |
| `placementIntents` | [`PlacementIntents \| undefined`](../../doc/models/placement-intents.md) | Optional | - |
| `deploymentLocations` | [`DeploymentLocation[] \| undefined`](../../doc/models/deployment-location.md) | Optional | - |

## Example (as JSON)

```json
{
  "accessIntents": {},
  "createdAt": "2022-08-03T03:43:17.504Z",
  "createdBy": "acme-user",
  "customerID": "acme",
  "deploymentLocations": [],
  "id": "6789409c-12c3-4fc9-b64f-71d1611c4f09",
  "lastUpdatedAt": "2022-08-03T03:43:17.504Z",
  "linkedServiceInstances": [],
  "name": "mongo-pmec-profile-mdp7",
  "placementIntents": {
    "intentChain": [
      {
        "input": {
          "deploymentLocations": [
            {
              "csp": "AWS_WL",
              "region": "US_WEST_2",
              "zoneId": [
                "us-west-2-wl1-den-wlz-1"
              ]
            }
          ]
        },
        "name": "Compliance"
      }
    ]
  },
  "serviceName": "mongodb-customer-prerun",
  "serviceVersion": "1.0.0",
  "state": "DRAFT",
  "version": "1.0.0",
  "currentVersion": "currentVersion0"
}
```

