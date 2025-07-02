// import { DashboardWidget } from "@/components/ui/dashboard-widget";

import { DashboardWidget } from "../components/ui/DashboardWidgetProps";

export default function Data() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-8">
      <div className="text-center">
        <div className="flex flex-wrap gap-8 justify-center items-center">
          <DashboardWidget title="CPU Usage" value="64%" />
        </div>
      </div>
    </div>
  );
}
