import { Control } from 'react-hook-form';

export interface DynamicFieldProps {
  label: string;
  defaultValue?: any;
  fieldName: string;
  control: Control;
  ariaLabel: string;
}

export interface DynamicFieldsProps {
  dataSet: ReadonlyArray<DynamicFieldProps>;
}
