import { BoxProps } from '@chakra-ui/layout';
import { Box } from 'boemly';

export const TableWrapper = (props: BoxProps) => (
  <Box bg="white" borderRadius="xl" border="1px" py="2" px="4" borderColor="gray.200" {...props} />
);
