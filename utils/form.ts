import { DynamicFieldProps } from '@components/form/dynamic-fields/dynamic-fields.types';
import { Control } from 'react-hook-form';

export const makeFormDataSet = <T>(
  control: Control<T>,
  fieldsData: ReadonlyArray<Omit<DynamicFieldProps, 'control'>>
) => fieldsData.map(field => ({ ...field, control })) as ReadonlyArray<DynamicFieldProps>;
