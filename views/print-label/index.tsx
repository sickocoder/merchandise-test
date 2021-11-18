import { Container } from '@material-ui/core';
import { FC, useState, useCallback } from 'react';

import setsDataSet from './steps';

const PrintLabel: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = useCallback((stepId: string) => {
    setExpanded(stepId);
  }, []);

  return (
    <Container style={{ padding: '5rem 0' }}>
      <div>
        {setsDataSet.map(step => (
          <step.component
            key={step.stepId}
            expanded={expanded == step.stepId}
            title={step.title}
            stepId={step.stepId}
            onFinish={data => console.log(data)}
            onChange={handleChange}
          />
        ))}
      </div>
    </Container>
  );
};

export default PrintLabel;
