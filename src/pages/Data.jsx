// import { DashboardWidget } from "@/components/ui/dashboard-widget";

import { DashboardWidget } from "../components/ui/DashboardWidgetProps";

export default function Data() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          IoT Dashboard Widgets
        </h1>

        <div className="flex flex-wrap gap-8 justify-center items-center">
          {/* Original widget from Figma design */}
          <DashboardWidget />

          {/* Additional examples showing different data */}
          <DashboardWidget title="CPU Usage" value="64%" />
          <DashboardWidget title="Memory" value="92%" />
          <DashboardWidget title="Network" value="23%" />
        </div>

        <p className="mt-8 text-slate-600 max-w-2xl mx-auto">
          Responsive IoT dashboard widgets converted from Figma design. These
          widgets adapt to different screen sizes while maintaining their
          circular design.
        </p>
      </div>
    </div>
  );
}
