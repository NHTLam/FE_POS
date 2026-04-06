
export function Legend({ color, label }: { color: string; label: string; }) {
  return (
    <div className="flex items-center gap-1">
      <span className={`w-2 h-2 rounded-full ${color}`}></span>
      <span>{label}</span>
    </div>
  );
}
