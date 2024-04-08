
# Subrequest

## Structure

`Subrequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | [`GIODeviceId \| undefined`](../../doc/models/gio-device-id.md) | Optional | - |
| `status` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `8`, *Pattern*: `^[A-Za-z]{3,8}$` |

## Example (as JSON)

```json
{
  "status": "Success",
  "ids": {
    "kind": "kind2",
    "id": "id4"
  }
}
```

