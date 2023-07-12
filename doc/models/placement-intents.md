
# Placement Intents

## Structure

`PlacementIntents`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isPlacementAtLaunchEnabled` | `boolean \| undefined` | Optional | **Default**: `false` |
| `groupId` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `500`, *Pattern*: `^(.*)$` |
| `intentChain` | [`IntentChainItem[] \| undefined`](../../doc/models/intent-chain-item.md) | Optional | - |

## Example (as JSON)

```json
{
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
  ],
  "isPlacementAtLaunchEnabled": false,
  "groupId": "groupId2"
}
```

