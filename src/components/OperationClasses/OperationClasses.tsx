import { Box, Heading, Spacer } from 'boemly';
import FeasibilityStudyConfig from '@/models/FeasibilityStudyConfig';
import { OperationClass } from '@/components/OperationClass';

export interface OperationClassesProps {
  config: FeasibilityStudyConfig;
}

export const OperationClasses = ({ config }: OperationClassesProps): JSX.Element => {
  return (
    <>
      <Spacer height="4" />
      {config.operationClasses.map((operationClass, index) => {
        return (
          <Box key={`${operationClass.name.toLowerCase()}-${index}`}>
            <Heading>{operationClass.name}</Heading>
            <OperationClass
              rotationPeriod={operationClass.rotationPeriod}
              listOfSpecies={operationClass.listOfSpecies}
            />
            <Spacer height="4" />
          </Box>
        );
      })}
    </>
  );
};
