export function ProgressBar({ step, total }: { step: number, total: number }) {
  const percent = (step / total) * 100;
  return (
    <div className="w-full bg-gray-200 h-2 rounded">
      <div className="bg-blue-500 h-2 rounded" style={{ width: percent + '%' }} />
    </div>
  );
}
