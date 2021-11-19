import { FC } from 'react';

import DynamicField from './dynamic-field';
import { DynamicFieldsProps } from './dynamic-fields.types';

const DynamicFields: FC<DynamicFieldsProps> = ({ dataSet }) => {
  return (
    <div>
      {dataSet.map(field => (
        <DynamicField key={field.fieldName} {...field} />
      ))}
    </div>
  );
};

export default DynamicFields;
