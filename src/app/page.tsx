import { Text, Metric, Flex, ProgressBar } from '@tremor/react';

import { TremorCard } from '@/components/tremor/tremor-card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      Hello, world!
      <TremorCard className='mx-auto max-w-xs rounded'>
        <Text>Sales</Text>
        <Metric>$ 71,465</Metric>
        <Flex className='mt-4'>
          <Text>32% of annual target</Text>
          <Text>$ 225,000</Text>
        </Flex>
        <ProgressBar value={32} className='mt-2' />
      </TremorCard>
      <Button variant='destructive'>Button</Button>
    </main>
  );
}
