
# Network Resources Type

Network resources of a service profile.

## Structure

`NetworkResourcesType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `minBandwidthKbits` | `number \| undefined` | Optional | Minimum required connection bandwidth in Kbit/s for the application.<br>**Constraints**: `>= 1`, `<= 10000` |
| `serviceContinuitySupport` | `boolean \| undefined` | Optional | Indicates if service continuity support is required or not for the application. |
| `maxRequestRate` | `number \| undefined` | Optional | Maximum request rate that the application can handle.<br>**Constraints**: `>= 1`, `<= 100` |
| `maxLatencyMs` | `number` | Required | Maximum response time or latency that the application can handle, in milliseconds. Note: this value must be in multiples of 5.<br>**Constraints**: `>= 5`, `<= 1000` |
| `minAvailability` | `number \| undefined` | Optional | Minimum availability required for the server.<br>**Constraints**: `>= 1`, `<= 100` |

## Example (as JSON)

```json
{
  "minBandwidthKbits": 1,
  "serviceContinuitySupport": true,
  "maxRequestRate": 15,
  "maxLatencyMs": 20,
  "minAvailability": 1
}
```

