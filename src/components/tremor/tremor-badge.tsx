import { Badge } from '@tremor/react';
import { ElementType, PropsWithChildren } from 'react';
const sizeValues = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
type Size = (typeof sizeValues)[number];
const colorValues = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;
type Color = (typeof colorValues)[number];
type Props = PropsWithChildren & {
  color?: Color;
  icon?: ElementType;
  tooltip?: string;
  size?: Size;
  className?: string;
};

export const TremorBadge: React.FC<Props> = ({
  color = 'blue',
  icon = undefined,
  tooltip = undefined,
  size,
  className,
  children,
}) => {
  return (
    <Badge
      size={size}
      color={color}
      icon={icon}
      tooltip={tooltip}
      className={className}
    >
      {children}
    </Badge>
  );
};
