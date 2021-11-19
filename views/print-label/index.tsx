import { Container } from '@mui/material';
import { FC, useState, useCallback } from 'react';

import setsDataSet from './steps';
import { fetchers } from './print-label-fetchers';

const PrintLabel: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [panelLoading, setPanelLoading] = useState<string>('');
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [responsesData, setResponsesData] = useState<Record<string, any>>({});

  const handleChange = useCallback((stepId: string) => {
    setExpanded(stepId);
  }, []);

  const postResourceData = useCallback(
    async (data: Record<string, any>, resource: string, object: string) => {
      setPanelLoading(resource);

      try {
        const response = await fetchers[resource as keyof typeof fetchers]({
          ...data,
          object,
        } as any);
        setResponsesData({ ...responsesData, [resource]: response.data?.id });

        setFormData({ ...formData, ...data });
      } catch (error) {
        alert('something went wrong');
      } finally {
        setPanelLoading('');
      }
    },
    [formData, responsesData]
  );

  return (
    <Container style={{ padding: '5rem 0' }}>
      <div>
        {setsDataSet.map(step => (
          <step.component
            key={step.stepId}
            resourceName={step.resourceName}
            expanded={expanded == step.stepId}
            title={step.title}
            stepId={step.stepId}
            panelLoading={panelLoading}
            onFinish={data =>
              postResourceData({ [step.resourceName]: data }, step.resourceName, step.object)
            }
            onChange={handleChange}
          />
        ))}
      </div>
    </Container>
  );
};

export default PrintLabel;
