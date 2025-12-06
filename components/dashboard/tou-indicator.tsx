import { Clock } from "lucide-react"

interface TouIndicatorProps {
  rate: {
    period: string
    rate: number
  }
}

export function TouIndicator({ rate }: TouIndicatorProps) {
  const colorClass =
    rate.period === "Peak"
      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      : rate.period === "Standard"
        ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${colorClass}`}>
      <Clock className="h-4 w-4" />
      <span className="font-medium">{rate.period}</span>
      <span>₹{rate.rate}/kWh</span>
    </div>
  )
}
