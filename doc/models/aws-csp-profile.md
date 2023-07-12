
# Aws Csp Profile

Information related to manage resources in AWS infrastructure.

## Structure

`AwsCspProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `credType` | [`AwsCspProfileCredTypeEnum \| undefined`](../../doc/models/aws-csp-profile-cred-type-enum.md) | Optional | Credential type of AWS CSP profile.<br>**Constraints**: *Maximum Length*: `10`, *Pattern*: `^[a-zA-Z0-9-_.]+$` |
| `accessKey` | `string \| undefined` | Optional | AWS Access Key.<br>**Constraints**: *Maximum Length*: `128`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!\/,+\-=_:.&*%\s]+$` |
| `secretKey` | `string \| undefined` | Optional | AWS Secret Key.<br>**Constraints**: *Maximum Length*: `128`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!\/,+\-=_:.&*%\s]+$` |
| `roleARN` | `string \| undefined` | Optional | CSP AWS Role ARN.<br>**Constraints**: *Maximum Length*: `256`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!\/,+\-=_:.&*%\s]+$` |
| `accountId` | `string \| undefined` | Optional | AWS account ID.<br>**Constraints**: *Maximum Length*: `12`, *Pattern*: `^[0-9]+$` |
| `externalId` | `string \| undefined` | Optional | AWS external ID.<br>**Constraints**: *Maximum Length*: `128`, *Pattern*: `^[a-zA-Z0-9?$@#()\[\]'!\/,+\-=_:.&*%\s]+$` |

## Example (as JSON)

```json
{
  "accessKey": "XXXXX",
  "credType": "ACCESS_KEY",
  "secretKey": "XXXXX",
  "roleARN": "roleARN8",
  "accountId": "accountId0"
}
```

