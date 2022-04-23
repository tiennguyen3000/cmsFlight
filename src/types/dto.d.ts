/**
 *
 *
 */
export interface RequestDTO {
  readonly requestVersion: number;
}
/**
 * Abstract class for all data transfer objects.
 * @abstract
 */
export declare abstract class AbstractDataObject {
  abstract getDataTypeName(): string;

  toString(): string;
}
