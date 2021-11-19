/**
 * @jest-environment jsdom
 */

import BasicAccordion from './index';
import { render, screen, userEvent } from '@test-suite';

const mockOnChange = jest.fn();
const mockTitle = 'Basic-Accordion-Test-Title';
const mockStepId = 'basic-accordion-test-step-id';
const mockChildText = 'this is mocked child';

const makeSut = (isExpanded: boolean = true) =>
  render(
    <BasicAccordion
      expanded={isExpanded}
      onChange={mockOnChange}
      stepId={mockStepId}
      title={mockTitle}
      resourceName="addresses"
      panelLoading="addresses"
    >
      <h1>{mockChildText}</h1>
    </BasicAccordion>
  );

describe(BasicAccordion.name, () => {
  test('should render properly', () => {
    makeSut();
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.getByText(mockChildText)).toBeInTheDocument();
  });

  test('should call mockOnChange with the step id when accordion title cliced', () => {
    makeSut();

    const accordionTitle = screen.getByText(mockTitle);
    userEvent.click(accordionTitle);

    expect(mockOnChange).toHaveBeenCalledWith(mockStepId);
  });
});
