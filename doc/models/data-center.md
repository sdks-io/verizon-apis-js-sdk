
# Data Center

## Structure

`DataCenter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `packageType` | [`DataCenterPackageTypeEnum \| undefined`](../../doc/models/data-center-package-type-enum.md) | Optional | Packages are optimized for various operating environments. Prepackaged images are available in OVA and QCOW formats. |
| `distribution` | [`DataCenterDistributionEnum \| undefined`](../../doc/models/data-center-distribution-enum.md) | Optional | Supported Kubernetes distribution for the selected cloud provider. |
| `location` | `string \| undefined` | Optional | Indicate geo-location of cluster if you wish to use location based policies. |
| `k8sVersion` | [`K8sVersionEnum \| undefined`](../../doc/models/k8-s-version-enum.md) | Optional | Version of K8s platform.<br>**Default**: `K8sVersionEnum.Enum118` |
| `operatingSystem` | `string \| undefined` | Optional | Operating System for the master and worker nodes. |
| `tags` | [`EdgeServiceLaunchParams[] \| undefined`](../../doc/models/edge-service-launch-params.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example (as JSON)

```json
{
  "packageType": "Linux",
  "distribution": "Upstream Kubernetes",
  "k8sVersion": "1.18",
  "tags": [
    {
      "key": "key",
      "value": "value"
    }
  ],
  "location": "location4",
  "operatingSystem": "operatingSystem4"
}
```

