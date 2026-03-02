import { GenericRecord } from "#types/api/global/GenericRecord";
import { Locale } from "../locale/Locale";
import { Media } from "../media/Media";
import { UserAccessKey } from "./UserAccessKey";
import { UserConfig } from "./UserConfig";
import { AclRole } from "../acl/AclRole";

export interface User {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  active?: boolean;
  timeZone?: string;
  username: string;
  email: string;
  title?: string;
  admin?: boolean;
  aclRoles?: Array<AclRole>;
  configs?: Array<UserConfig>;
  lastUpdatedPasswordAt?: string;
  firstName: string;
  lastName: string;
  localeId: string;
  locale?: Locale;
  avatarId?: string;
  avatarMedia?: Media;
  accessKeys?: Array<UserAccessKey>;
  customFields?: GenericRecord;
}
