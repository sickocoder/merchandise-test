import { FC, SyntheticEvent, useCallback } from 'react';

import Typography from '@material-ui/core/Typography';

import { StepComponentProps } from '../steps.types';
import BasicAccordion from '../../shared/basic-accordion';

const AddressesStep: FC<StepComponentProps> = ({ expanded, stepId, title, onChange }) => {
  const handleChange = useCallback(
    (panel: string) => (_event: SyntheticEvent, _newExpanded: boolean) => {
      onChange(panel);
    },
    [onChange]
  );

  return (
    <BasicAccordion expanded={expanded} onChange={handleChange} stepId={stepId} title={title}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
        amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </BasicAccordion>
  );
};

export default AddressesStep;
