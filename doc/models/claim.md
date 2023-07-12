
# Claim

Users would provide CSP compatibility during service creation, which are nothing but declaring service compatibility with different cloud service providers like AWS or Azure. This API would help users to fetch all service claims using which user can initiate sandbox testing of the service.

## Structure

`Claim`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Auto-generated Id.<br>**Constraints**: *Maximum Length*: `200`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]!,+\-=_:.&*%\s]+$` |
| `name` | `string \| undefined` | Optional | Name of the claim.<br>**Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `claimStatus` | [`ClaimStatusEnum \| undefined`](../../doc/models/claim-status-enum.md) | Optional | Current status of the claim can have only two values eg: VERIFIED/UNVERIFIED. |
| `sandBoxState` | [`SandBoxStateEnum \| undefined`](../../doc/models/sand-box-state-enum.md) | Optional | State of sandbox can have value like - STARTED, NOT_STARTED, STOPPED, PAUSED, COMPLETED, DELETED, STOP_IN_PROGRESS, PAUSE_IN_PROGRESS, TEST_IN_PROGRESS, MARK_FOR_DELETEION. |
| `sandBoxStatus` | [`SandBoxStatusEnum \| undefined`](../../doc/models/sand-box-status-enum.md) | Optional | Status of sandbox can have value like - NA, INPROGRESS, SUCCESS, FAILED. |
| `environment` | `string \| undefined` | Optional | Claim environment in which it is deployed eg: AWS Public Cloud.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\- _]+$` |
| `claimType` | [`ClaimTypeEnum \| undefined`](../../doc/models/claim-type-enum.md) | Optional | Claim type can have values like - PUBLIC_MEC, PRIVATE_MEC. |
| `startTimeStamp` | `string \| undefined` | Optional | Start time when the claim got introduced. |
| `serviceInstanceId` | `string \| undefined` | Optional | Auto-generated Id of the service instance.<br>**Constraints**: *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]!,+\-=_:.&*%\s]+$` |
| `cspProfileId` | `string \| undefined` | Optional | CSP Profile ID in which service will be deployed.<br>**Constraints**: *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]!,+\-=_:.&*%\s]+$` |
| `serviceId` | `string \| undefined` | Optional | Auto-generated Id of the service which is to be deployed.<br>**Constraints**: *Maximum Length*: `36`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]!,+\-=_:.&*%\s]+$` |
| `endTimeStamp` | `string \| undefined` | Optional | End time when the claim got introduced. |
| `createdDate` | `string \| undefined` | Optional | Auto-derived time of creation. Part of response only. |
| `lastModifiedDate` | `string \| undefined` | Optional | Last modified time. Part of response only. |
| `createdBy` | `string \| undefined` | Optional | User who created the dropDown. Part of response only.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `lastModifiedBy` | `string \| undefined` | Optional | User who last modified the dropDown. Part of response only.<br>**Constraints**: *Maximum Length*: `32`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |

## Example (as JSON)

```json
{
  "claimStatus": "UNVERIFIED",
  "claimType": "PUBLIC_MEC",
  "createdBy": "acme-dev-api-user1",
  "createdDate": "2022-08-03T15:21:30.000Z",
  "endTimeStamp": "0001-01-01T00:00:00.000Z",
  "environment": "AWS_WL",
  "id": "09368e8f-97b6-462f-b309-57d23fd25073",
  "lastModifiedDate": "0001-01-01T00:00:00.000Z",
  "sandBoxState": "NOT_STARTED",
  "sandBoxStatus": "NA",
  "serviceId": "b32321d2-4ee3-458b-a70b-e956525d46c9",
  "startTimeStamp": "0001-01-01T00:00:00.000Z",
  "name": "name0"
}
```

