export class EnumMapper {
  /**
   * Checks if a string value can be mapped to an enum
   * @param value The string value to check
   * @param enumType The enum type to check against
   * @returns True if the value can be mapped, false otherwise
   */
  private static isValid<T extends Record<string, string | number>>(
    value: string, 
    enumType: T
  ): boolean {
    return this.getValidValues(enumType).includes(value as T[keyof T]);
  }

  /**
   * Gets all valid values for an enum
   * @param enumType The enum type
   * @returns Array of valid enum values
   */
  private static getValidValues<T extends Record<string, string | number>>(
    enumType: T
  ): Array<string | number> {
    return Object.values(enumType);
  }
  
  /**
   * Maps a string value to an enum value
   * @param value The string value to map
   * @param enumType The enum type to map to
   * @returns The mapped enum value
   * @throws Error if the string cannot be mapped to the enum
   */
  static map<T extends Record<string, string | number>>(
    value: string, 
    enumType: T
  ): T[keyof T] {
    if (!this.isValid(value, enumType)) {
      const validValues = this.getValidValues(enumType).join(', ');
      throw new Error(`Invalid value: ${value}. Valid values are: ${validValues}`);
    }
    return value as T[keyof T];
  }

  /**
   * Maps an array of strings to an array of enum values
   * @param values Array of string values to map
   * @param enumType The enum type to map to
   * @returns Array of mapped enum values
   * @throws Error if any string cannot be mapped to the enum
   */
  static mapArray<T extends Record<string, string | number>>(
    values: string[], 
    enumType: T
  ): T[keyof T][] {
    return values.map(value => this.map(value, enumType));
  }
}
