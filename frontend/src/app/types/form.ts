export type FieldType = 'TEXT' | 'LIST' | 'RADIO';

export interface FieldConfig {
    name: string;
    label: string;
    fieldType: FieldType;
    required?: boolean;
    options?: string[];
}