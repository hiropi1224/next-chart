import { Card } from '@tremor/react';
import { PropsWithChildren } from 'react';

type CardProps = {
  className?: string;
};

type Props = CardProps & PropsWithChildren;

export const TremorCard: React.FC<Props> = ({ children, ...props }) => {
  return <Card className={props.className}>{children}</Card>;
};
