
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export function MetricCard({ title, value, change, changeType, icon: Icon }: MetricCardProps) {
  const changeColor = {
    positive: "text-primary",
    negative: "text-red-500",
    neutral: "text-muted-foreground"
  };

  const changeBackground = {
    positive: "bg-green-50",
    negative: "bg-red-50",
    neutral: "bg-gray-50"
  };

  return (
    <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl"></div>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-poppins font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="p-2 bg-primary/10 rounded-xl">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-3xl font-poppins font-bold text-foreground">
          {value}
        </div>
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-quicksand font-medium ${changeColor[changeType]} ${changeBackground[changeType]}`}>
          {change} from last month
        </div>
      </CardContent>
    </Card>
  );
}
