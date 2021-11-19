import { FC } from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { DynamicFieldProps } from './dynamic-fields.types';

const DynamicField: FC<DynamicFieldProps> = ({
  label,
  defaultValue,
  fieldName,
  control,
  ariaLabel,
}) => {
  return (
    <Controller
      name={fieldName}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <TextField
          label={label}
          variant="filled"
          defaultValue={defaultValue}
          fullWidth
          type="text"
          inputProps={{ 'aria-label': ariaLabel }}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};

export default DynamicField;
