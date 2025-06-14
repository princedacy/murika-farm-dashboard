
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
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-2xl sm:rounded-bl-3xl"></div>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3 p-3 sm:p-4 lg:p-6">
        <CardTitle className="text-xs sm:text-sm font-poppins font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg sm:rounded-xl">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6 pt-0">
        <div className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold text-foreground">
          {value}
        </div>
        <div className={`inline-flex items-center px-2 py-1 sm:px-3 rounded-full text-xs font-quicksand font-medium ${changeColor[changeType]} ${changeBackground[changeType]}`}>
          <span className="hidden sm:inline">{change} from last month</span>
          <span className="sm:hidden">{change}</span>
        </div>
      </CardContent>
    </Card>
  );
}
