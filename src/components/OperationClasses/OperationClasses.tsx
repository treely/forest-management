import { Box, Heading, Spacer } from 'boemly';
import FeasibilityStudyConfig from '../../models/FeasibilityStudyConfig';
import { OperationClass } from '../OperationClass';

export interface OperationClassesProps {
  config: FeasibilityStudyConfig;
}

export const OperationClasses = ({ config }: OperationClassesProps): JSX.Element => {
  return (
    <>
      <Spacer height="4" />
      {config.operationClasses
        .sort((operationClassA, operationClassB) =>
          operationClassA.name.localeCompare(operationClassB.name)
        )
        .map((operationClass, index) => {
          return (
            <Box key={`${operationClass.name.toLowerCase()}-${index}`}>
              <Heading>{operationClass.name}</Heading>
              <OperationClass
                rotationPeriod={operationClass.rotationPeriod}
                areaInHectare={operationClass.areaInHectare}
                listOfSpecies={operationClass.listOfSpecies}
              />
              <Spacer height="4" />
            </Box>
          );
        })}
    </>
  );
};
