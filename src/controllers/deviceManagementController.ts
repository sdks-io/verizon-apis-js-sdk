/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ConnectivityManagementResultError,
} from '../errors/connectivityManagementResultError';
import { RestErrorResponseError } from '../errors/restErrorResponseError';
import {
  AccountDeviceListRequest,
  accountDeviceListRequestSchema,
} from '../models/accountDeviceListRequest';
import {
  AccountDeviceListResult,
  accountDeviceListResultSchema,
} from '../models/accountDeviceListResult';
import {
  AddDevicesRequest,
  addDevicesRequestSchema,
} from '../models/addDevicesRequest';
import {
  AddDevicesResult,
  addDevicesResultSchema,
} from '../models/addDevicesResult';
import {
  AssociateLabelRequest,
  associateLabelRequestSchema,
} from '../models/associateLabelRequest';
import {
  BilledusageListRequest,
  billedusageListRequestSchema,
} from '../models/billedusageListRequest';
import {
  CarrierActionsRequest,
  carrierActionsRequestSchema,
} from '../models/carrierActionsRequest';
import {
  CarrierActivateRequest,
  carrierActivateRequestSchema,
} from '../models/carrierActivateRequest';
import {
  CarrierDeactivateRequest,
  carrierDeactivateRequestSchema,
} from '../models/carrierDeactivateRequest';
import {
  ChangeDeviceIdRequest,
  changeDeviceIdRequestSchema,
} from '../models/changeDeviceIdRequest';
import {
  CheckOrderStatusRequest,
  checkOrderStatusRequestSchema,
} from '../models/checkOrderStatusRequest';
import {
  ConnectionHistoryResult,
  connectionHistoryResultSchema,
} from '../models/connectionHistoryResult';
import {
  ContactInfoUpdateRequest,
  contactInfoUpdateRequestSchema,
} from '../models/contactInfoUpdateRequest';
import {
  CustomFieldsUpdateRequest,
  customFieldsUpdateRequestSchema,
} from '../models/customFieldsUpdateRequest';
import {
  DeleteDevicesRequest,
  deleteDevicesRequestSchema,
} from '../models/deleteDevicesRequest';
import {
  DeleteDevicesResult,
  deleteDevicesResultSchema,
} from '../models/deleteDevicesResult';
import {
  DeviceActivationRequest,
  deviceActivationRequestSchema,
} from '../models/deviceActivationRequest';
import {
  DeviceAggregateUsageListRequest,
  deviceAggregateUsageListRequestSchema,
} from '../models/deviceAggregateUsageListRequest';
import {
  DeviceConnectionListRequest,
  deviceConnectionListRequestSchema,
} from '../models/deviceConnectionListRequest';
import {
  DeviceCostCenterRequest,
  deviceCostCenterRequestSchema,
} from '../models/deviceCostCenterRequest';
import {
  DeviceExtendedDiagnosticsRequest,
  deviceExtendedDiagnosticsRequestSchema,
} from '../models/deviceExtendedDiagnosticsRequest';
import {
  DeviceExtendedDiagnosticsResult,
  deviceExtendedDiagnosticsResultSchema,
} from '../models/deviceExtendedDiagnosticsResult';
import {
  DeviceManagementResult,
  deviceManagementResultSchema,
} from '../models/deviceManagementResult';
import {
  DeviceMismatchListRequest,
  deviceMismatchListRequestSchema,
} from '../models/deviceMismatchListRequest';
import {
  DeviceMismatchListResult,
  deviceMismatchListResultSchema,
} from '../models/deviceMismatchListResult';
import {
  DevicePrlListRequest,
  devicePrlListRequestSchema,
} from '../models/devicePrlListRequest';
import {
  DeviceProvisioningHistoryListRequest,
  deviceProvisioningHistoryListRequestSchema,
} from '../models/deviceProvisioningHistoryListRequest';
import {
  DeviceProvisioningHistoryListResult,
  deviceProvisioningHistoryListResultSchema,
} from '../models/deviceProvisioningHistoryListResult';
import {
  DeviceSuspensionStatusRequest,
  deviceSuspensionStatusRequestSchema,
} from '../models/deviceSuspensionStatusRequest';
import {
  DeviceUploadRequest,
  deviceUploadRequestSchema,
} from '../models/deviceUploadRequest';
import {
  DeviceUsageListRequest,
  deviceUsageListRequestSchema,
} from '../models/deviceUsageListRequest';
import {
  DeviceUsageListResult,
  deviceUsageListResultSchema,
} from '../models/deviceUsageListResult';
import {
  GoToStateRequest,
  goToStateRequestSchema,
} from '../models/goToStateRequest';
import {
  MoveDeviceRequest,
  moveDeviceRequestSchema,
} from '../models/moveDeviceRequest';
import {
  RequestResponse,
  requestResponseSchema,
} from '../models/requestResponse';
import {
  ServicePlanUpdateRequest,
  servicePlanUpdateRequestSchema,
} from '../models/servicePlanUpdateRequest';
import {
  UploadsActivatesDeviceRequest,
  uploadsActivatesDeviceRequestSchema,
} from '../models/uploadsActivatesDeviceRequest';
import { array, string } from '../schema';
import { BaseController } from './baseController';

export class DeviceManagementController extends BaseController {
  /**
   * Use this API if you want to manage some device settings before you are ready to activate service for
   * the devices.
   *
   * @param body         Devices to add.
   * @return Response from the API call
   */
  async addDevices(
    body: AddDevicesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AddDevicesResult[]>> {
    const req = this.createRequest('POST', '/v1/devices/actions/add');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({ body: [body, addDevicesRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(array(addDevicesResultSchema), requestOptions);
  }

  /**
   * Restores service to one or more suspended devices.
   *
   * @param body         Request to restore services of one or more suspended devices.
   * @return Response from the API call
   */
  async restoreServiceForSuspendedDevices(
    body: CarrierActionsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('POST', '/v1/devices/actions/restore');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, carrierActionsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Changes or removes the CostCenterCode value or customer name and address (Primary Place of Use) for
   * one or more devices.
   *
   * @param body         Request to update cost center code value for one or more
   *                                                       devices.
   * @return Response from the API call
   */
  async updateDevicesCostCenterCode(
    body: DeviceCostCenterRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('PUT', '/v1/devices/costCenter');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, deviceCostCenterRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Returns the provisioning history of a specified device during a specified time period.
   *
   * @param body         Query to obtain device provisioning history.
   * @return Response from the API call
   */
  async listDevicesProvisioningHistory(
    body: DeviceProvisioningHistoryListRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceProvisioningHistoryListResult[]>> {
    const req = this.createRequest('POST', '/v1/devices/history/actions/list');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, deviceProvisioningHistoryListRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(
      array(deviceProvisioningHistoryListResultSchema),
      requestOptions
    );
  }

  /**
   * Returns DeviceSuspensionStatus callback messages containing the current device state and information
   * on how many days a device has been suspended and can continue to be suspended.
   *
   * @param body         Request to obtain service suspenstion status for a
   *                                                             device.
   * @return Response from the API call
   */
  async getDeviceServiceSuspensionStatus(
    body: DeviceSuspensionStatusRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('POST', '/v1/devices/suspension/status');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, deviceSuspensionStatusRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Returns the network data usage history of a device during a specified time period.
   *
   * @param body         Request to obtain usage history for a specific device.
   * @return Response from the API call
   */
  async listDevicesUsageHistory(
    body: DeviceUsageListRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceUsageListResult>> {
    const req = this.createRequest('POST', '/v1/devices/usage/actions/list');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, deviceUsageListRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceUsageListResultSchema, requestOptions);
  }

  /**
   * The information is returned in a callback response, so you must register a URL for DeviceUsage
   * callback messages using the POST /callbacks API.
   *
   * @param body         A request to retrieve aggregated device usage
   *                                                               history information.
   * @return Response from the API call
   */
  async retrieveAggregateDeviceUsageHistory(
    body: DeviceAggregateUsageListRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest(
      'POST',
      '/v1/devices/usage/actions/list/aggregate'
    );
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, deviceAggregateUsageListRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Sends a CarrierService callback message for each device in the request when the contact information
   * has been changed, or if there was a problem and the change could not be completed.
   *
   * @param body         Request to update contact information for devices.
   * @return Response from the API call
   */
  async updateDevicesContactInformation(
    body: ContactInfoUpdateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('PUT', '/v1/devices/actions/contactinfo');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, contactInfoUpdateRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Sends a CarrierService callback message for each device in the request when the custom fields have
   * been changed, or if there was a problem and the change could not be completed.
   *
   * @param body         Request to update custom field of devices.
   * @return Response from the API call
   */
  async updateDevicesCustomFields(
    body: CustomFieldsUpdateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('PUT', '/v1/devices/actions/customFields');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, customFieldsUpdateRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Returns a list of all 4G devices with an ICCID (SIM) that was not activated with the expected IMEI
   * (hardware) during a specified time frame.
   *
   * @param body         Request to list devices with mismatched IMEIs and ICCIDs.
   * @return Response from the API call
   */
  async listDevicesWithImeiIccidMismatch(
    body: DeviceMismatchListRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceMismatchListResult>> {
    const req = this.createRequest(
      'POST',
      '/v1/devices/actions/list/imeiiccidmismatch'
    );
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, deviceMismatchListRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceMismatchListResultSchema, requestOptions);
  }

  /**
   * Changes the provisioning state of one or more devices to a specified customer-defined service and
   * state.
   *
   * @param body         Request to change device state to one defined by the user.
   * @return Response from the API call
   */
  async updateDevicesState(
    body: GoToStateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('PUT', '/v1/devices/actions/gotostate');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({ body: [body, goToStateRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Changes the service plan for one or more devices.
   *
   * @param body         Request to change device service plan.
   * @return Response from the API call
   */
  async changeDevicesServicePlan(
    body: ServicePlanUpdateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('PUT', '/v1/devices/actions/plan');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, servicePlanUpdateRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Checks whether specified devices are registered by the manufacturer with the Verizon network and are
   * available to be activated.
   *
   * @param body         Request to check if devices can be activated or not.
   * @return Response from the API call
   */
  async checkDevicesAvailabilityForActivation(
    body: DeviceActivationRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest(
      'POST',
      '/v1/devices/availability/actions/list'
    );
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, deviceActivationRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Each response includes a maximum of 500 records. To obtain more records, you can call the API
   * multiple times, adjusting the earliest value each time to start where the previous request finished.
   *
   * @param body         Query to retrieve device connection history.
   * @return Response from the API call
   */
  async retrieveDeviceConnectionHistory(
    body: DeviceConnectionListRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ConnectionHistoryResult>> {
    const req = this.createRequest(
      'POST',
      '/v1/devices/connections/actions/listHistory'
    );
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, deviceConnectionListRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(connectionHistoryResultSchema, requestOptions);
  }

  /**
   * Returns extended diagnostic information about a specified device, including connectivity,
   * provisioning, billing and location status.
   *
   * @param body         Request to query extended diagnostics information
   *                                                                for a device.
   * @return Response from the API call
   */
  async getDeviceExtendedDiagnosticInformation(
    body: DeviceExtendedDiagnosticsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceExtendedDiagnosticsResult>> {
    const req = this.createRequest(
      'POST',
      '/v1/devices/extendeddiagnostics/actions/list'
    );
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, deviceExtendedDiagnosticsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(
      deviceExtendedDiagnosticsResultSchema,
      requestOptions
    );
  }

  /**
   * Allows you to associate your own usage segmentation label with a device.
   *
   * @param body         Request to associate a label to a device.
   * @return Response from the API call
   */
  async usageSegmentationLabelAssociation(
    body: AssociateLabelRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest(
      'POST',
      '/v1/devices/actions/usagesegmentationlabels'
    );
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, associateLabelRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Uploads and activates device identifiers and SKUs for new devices from OEMs to Verizon.
   *
   * @param body         Request to Uploads and activates device.
   * @return Response from the API call
   */
  async activationOrderStatus(
    body: UploadsActivatesDeviceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest(
      'POST',
      '/v1/devices/actions/uploadactivate'
    );
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, uploadsActivatesDeviceRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * If the devices do not already exist in the account, this API resource adds them before activation.
   *
   * @param body         Request for activating a service on devices.
   * @return Response from the API call
   */
  async activateServiceForDevices(
    body: CarrierActivateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('POST', '/v1/devices/actions/activate');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, carrierActivateRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Deactivating service for a device may result in an early termination fee (ETF) being charged to the
   * account, depending on the terms of the contract with Verizon. If your contract allows ETF waivers
   * and if you want to use one for a particular deactivation, set the etfWaiver value to True.
   *
   * @param body         Request to deactivate service for one or more devices.
   * @return Response from the API call
   */
  async deactivateServiceForDevices(
    body: CarrierDeactivateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('POST', '/v1/devices/actions/deactivate');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, carrierDeactivateRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * 4G and GSM devices do not have a PRL.
   *
   * @param body         Request to query device PRL.
   * @return Response from the API call
   */
  async listCurrentDevicesPRLVersion(
    body: DevicePrlListRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('POST', '/v1/devices/prl/actions/list');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, devicePrlListRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Changes the identifier of a 3G or 4G device to match hardware changes made for a line of service.
   * Use this request to transfer the line of service and the MDN to new hardware, or to change the MDN.
   *
   * @param serviceType  Identifier type.
   * @param body         Request to update device id.
   * @return Response from the API call
   */
  async updateDeviceId(
    serviceType: string,
    body: ChangeDeviceIdRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('PUT');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      serviceType: [serviceType, string()],
      body: [body, changeDeviceIdRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v1/devices/${mapped.serviceType}/actions/deviceId`;
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * This corresponds to the M2M-MC SOAP interface, ```DeviceUploadService```.
   *
   * @param body         Device Upload Query
   * @return Response from the API call
   */
  async deviceUpload(
    body: DeviceUploadRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RequestResponse>> {
    const req = this.createRequest('POST', '/v1/devices/actions/upload');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({ body: [body, deviceUploadRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, RestErrorResponseError, 'Error Response');
    return req.callAsJson(requestResponseSchema, requestOptions);
  }

  /**
   * Gets billed usage for for either multiple devices or an entire billing account.
   *
   * @param body         Request to list devices with mismatched IMEIs and ICCIDs.
   * @return Response from the API call
   */
  async billedUsageInfo(
    body: BilledusageListRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest(
      'POST',
      '/v1/devices/usage/actions/billedusage/list'
    );
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, billedusageListRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Use this API to remove unneeded devices from an account.
   *
   * @param body         Devices to delete.
   * @return Response from the API call
   */
  async deleteDeactivatedDevices(
    body: DeleteDevicesRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteDevicesResult[]>> {
    const req = this.createRequest('POST', '/v1/devices/actions/delete');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, deleteDevicesRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(array(deleteDevicesResultSchema), requestOptions);
  }

  /**
   * Returns information about a single device or information about all devices that match the given
   * parameters. Returned information includes device provisioning state, service plan, MDN, MIN, and IP
   * address.
   *
   * @param body         Device information query.
   * @return Response from the API call
   */
  async listDevicesInformation(
    body: AccountDeviceListRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AccountDeviceListResult>> {
    const req = this.createRequest('POST', '/v1/devices/actions/list');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, accountDeviceListRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(accountDeviceListResultSchema, requestOptions);
  }

  /**
   * Move active devices from one billing account to another within a customer profile.
   *
   * @param body         Request to move devices between accounts.
   * @return Response from the API call
   */
  async moveDevicesWithinAccountsOfProfile(
    body: MoveDeviceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('PUT', '/v1/devices/actions/move');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({ body: [body, moveDeviceRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Suspends service for one or more devices.
   *
   * @param body         Request to suspend service for one or more devices.
   * @return Response from the API call
   */
  async suspendServiceForDevices(
    body: CarrierActionsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('POST', '/v1/devices/actions/suspend');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, carrierActionsRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Allow customers to remove the associated label from a device.
   *
   * @param accountName The numeric name of the account.
   * @return Response from the API call
   */
  async usageSegmentationLabelDeletion(
    accountName: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest(
      'DELETE',
      '/v1/devices/actions/usagesegmentationlabels'
    );
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({ accountName: [accountName, string()] });
    req.query('accountName', mapped.accountName);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }

  /**
   * Checks the status of an activation order and lists where the order is in the provisioning process.
   *
   * @param body         The request body identifies the device and reporting period
   *                                                       that you want included in the report.
   * @return Response from the API call
   */
  async uploadDeviceIdentifier(
    body: CheckOrderStatusRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeviceManagementResult>> {
    const req = this.createRequest('POST', '/v1/devices/requests/status');
    req.baseUrl('M2M');
    const mapped = req.prepareArgs({
      body: [body, checkOrderStatusRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ConnectivityManagementResultError, 'Error response.');
    return req.callAsJson(deviceManagementResultSchema, requestOptions);
  }
}
