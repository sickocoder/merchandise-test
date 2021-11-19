import { FC } from 'react';

import DynamicFields from '@components/form/dynamic-fields';
import { useForm } from 'react-hook-form';
import { makeFormDataSet } from '../../../../../utils/form';
import { fieldsData } from './form-helper';

interface FormFields {
  name: string;
}

const CreateAddressForm: FC<{
  resourceName: string;
  onSubmit: (data: Record<string, any>) => void;
}> = ({ resourceName, onSubmit }) => {
  const { control, handleSubmit } = useForm<FormFields>();

  const formDataSet = makeFormDataSet<FormFields>(control, fieldsData);

  return (
    <form id={resourceName} onSubmit={handleSubmit(onSubmit)}>
      <DynamicFields dataSet={formDataSet} />
    </form>
  );
};

export default CreateAddressForm;
