import { ComponentProps } from 'react';
import { Box } from 'boemly';

export const TableWrapper = (props: ComponentProps<typeof Box>) => (
  <Box
    bg="white"
    borderRadius="xl"
    borderWidth="1px"
    py="2"
    px="4"
    borderColor="gray.200"
    {...props}
  />
);
