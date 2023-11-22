import { Card, Text, Flex, Metric, ProgressBar } from '@tremor/react';

export const TremorCard: React.FC = () => {
  return (
    <Card className='mx-auto max-w-xs rounded'>
      <Text>Sales</Text>
      <Metric>$ 71,465</Metric>
      <Flex className='mt-4'>
        <Text>32% of annual target</Text>
        <Text>$ 225,000</Text>
      </Flex>
      <ProgressBar value={32} className='mt-2' />
    </Card>
  );
};
