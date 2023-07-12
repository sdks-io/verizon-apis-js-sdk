/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface VersionInfo {
  edgeId?: string;
  organizationId?: string;
  partnerId?: string;
  createdAt?: string;
  modifiedAt?: string;
  id?: string;
  nodegroupId?: string;
}

export const versionInfoSchema: Schema<VersionInfo> = object({
  edgeId: ['edge_id', optional(string())],
  organizationId: ['organization_id', optional(string())],
  partnerId: ['partner_id', optional(string())],
  createdAt: ['created_at', optional(string())],
  modifiedAt: ['modified_at', optional(string())],
  id: ['id', optional(string())],
  nodegroupId: ['nodegroup_id', optional(string())],
});