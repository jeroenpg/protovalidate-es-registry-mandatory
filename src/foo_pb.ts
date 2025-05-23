// @generated by protoc-gen-es v2.3.0 with parameter "target=ts,json_types=true"
// @generated from file foo.proto (package playground, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_validate_validate } from "./buf/validate/validate_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file foo.proto.
 */
export const file_foo: GenFile = /*@__PURE__*/
  fileDesc("Cglmb28ucHJvdG8SCnBsYXlncm91bmQiTAoGUGVyc29uEhQKBG5hbWUYASABKAlCBrpIA8gBARIsCgdhZGRyZXNzGAIgASgLMhMucGxheWdyb3VuZC5BZGRyZXNzQga6SAPIAQEibAoHQWRkcmVzcxIXCgdhZGRyZXNzGAEgASgJQga6SAPIAQESFAoEY2l0eRgCIAEoCUIGukgDyAEBEhUKBXN0YXRlGAMgASgJQga6SAPIAQESGwoLcG9zdGFsX2NvZGUYBCABKAlCBrpIA8gBAWIGcHJvdG8z", [file_buf_validate_validate]);

/**
 * @generated from message playground.Person
 */
export type Person = Message<"playground.Person"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: playground.Address address = 2;
   */
  address?: Address;
};

/**
 * @generated from message playground.Person
 */
export type PersonJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * @generated from field: playground.Address address = 2;
   */
  address?: AddressJson;
};

/**
 * Describes the message playground.Person.
 * Use `create(PersonSchema)` to create a new message.
 */
export const PersonSchema: GenMessage<Person, PersonJson> = /*@__PURE__*/
  messageDesc(file_foo, 0);

/**
 * @generated from message playground.Address
 */
export type Address = Message<"playground.Address"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * @generated from field: string city = 2;
   */
  city: string;

  /**
   * @generated from field: string state = 3;
   */
  state: string;

  /**
   * @generated from field: string postal_code = 4;
   */
  postalCode: string;
};

/**
 * @generated from message playground.Address
 */
export type AddressJson = {
  /**
   * @generated from field: string address = 1;
   */
  address?: string;

  /**
   * @generated from field: string city = 2;
   */
  city?: string;

  /**
   * @generated from field: string state = 3;
   */
  state?: string;

  /**
   * @generated from field: string postal_code = 4;
   */
  postalCode?: string;
};

/**
 * Describes the message playground.Address.
 * Use `create(AddressSchema)` to create a new message.
 */
export const AddressSchema: GenMessage<Address, AddressJson> = /*@__PURE__*/
  messageDesc(file_foo, 1);

