import { render, screen } from '@/test/test-utils';
import { OperationClasses } from '.';
import { feasibilityStudyConfigMock } from '@/test/mocks/feasibilityStudyConfig';

const setup = () => {
  render(<OperationClasses config={feasibilityStudyConfigMock} />);
};

describe('The OperationClasses component', () => {
  it('displays all the operation classes', () => {
    setup();

    feasibilityStudyConfigMock.operationClasses.forEach((operationClass) => {
      expect(screen.getByText(operationClass.name)).toBeInTheDocument();
    });
  });
});
