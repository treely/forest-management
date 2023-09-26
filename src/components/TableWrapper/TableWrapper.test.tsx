import { render, screen } from '../../test/test-utils';
import { TableWrapper } from '.';
import { Text } from 'boemly';

const setup = () => {
  render(
    <TableWrapper>
      <Text>Child</Text>
    </TableWrapper>
  );
};

describe('The TableWrapper component', () => {
  it('displays its children', () => {
    setup();

    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});
