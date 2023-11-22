import { TremorCard } from '@/components/tremor/tremor-card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      Hello, world!
      <TremorCard />
      <Button variant='destructive'>Button</Button>
    </main>
  );
}
