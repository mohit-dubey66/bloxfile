import * as Progress from '@radix-ui/react-progress';
import { formatBytes } from '@/lib/utils';

interface StorageIndicatorProps {
  used: number;
  total: number;
}

export function StorageIndicator({ used, total }: StorageIndicatorProps) {
  const percentage = Math.min((used / total) * 100, 100);

  return (
    <div className="mt-2">
      <div className="flex justify-between text-sm mb-1">
        <span>{formatBytes(used)} used</span>
        <span>of {formatBytes(total)}</span>
      </div>
      <Progress.Root
        className="relative overflow-hidden bg-white/20 rounded-full w-full h-2"
        value={percentage}
      >
        <Progress.Indicator
          className="bg-white w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </Progress.Root>
    </div>
  );
}