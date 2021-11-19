import { FC, SyntheticEvent, useCallback } from 'react';

import Typography from '@mui/material/Typography';

import { StepComponentProps } from '../steps.types';
import BasicAccordion from '../../shared/basic-accordion';
import CreateAddressForm from './form';

const ParcelsStep: FC<StepComponentProps> = ({
  expanded,
  stepId,
  title,
  onChange,
  resourceName,
  onFinish,
  panelLoading,
}) => {
  const handleChange = useCallback(
    (panel: string) => (_event: SyntheticEvent, _newExpanded: boolean) => {
      onChange(panel);
    },
    [onChange]
  );

  const onSubmit = (data: Record<string, any>) => onFinish(data);

  return (
    <BasicAccordion
      expanded={expanded}
      onChange={handleChange}
      stepId={stepId}
      title={title}
      resourceName={resourceName}
      panelLoading={panelLoading}
    >
      <CreateAddressForm resourceName={resourceName} onSubmit={onSubmit} />
    </BasicAccordion>
  );
};

export default ParcelsStep;
