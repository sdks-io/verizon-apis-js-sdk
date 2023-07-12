
# Metadata

## Structure

`Metadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `displayName` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `modifiedAt` | `string \| undefined` | Optional | - |
| `labels` | [`MetadataLabel \| undefined`](../../doc/models/metadata-label.md) | Optional | - |
| `annotations` | [`MetadataAnnotation \| undefined`](../../doc/models/metadata-annotation.md) | Optional | - |
| `organizationID` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `partnerID` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `projectID` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 1024` |
| `id` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name0",
  "displayName": "displayName2",
  "createdAt": "createdAt6",
  "modifiedAt": "modifiedAt6",
  "labels": {
    "alpha.rafay.io/cluster-name": "alpha.rafay.io/cluster-name4",
    "alpha.rafay.io/instance-id": "alpha.rafay.io/instance-id6",
    "alpha.rafay.io/nodegroup-name": "alpha.rafay.io/nodegroup-name2",
    "beta.kubernetes.io/arch": "beta.kubernetes.io/arch6",
    "beta.kubernetes.io/instance-type": "beta.kubernetes.io/instance-type6"
  }
}
```

