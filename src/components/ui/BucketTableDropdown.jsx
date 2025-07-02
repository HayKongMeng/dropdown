import { ChevronDown, Copy, FolderOpen, MoreVertical } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { cn } from "../../lib/utils";

const defaultBucket = {
  id: "2",
  name: "Bucket2",
  url: "Bucket2.idrivee2-76.com",
  storageUsed: "10 MB",
  objectCount: 2,
  createdAt: "Jun 30, 2025, 08:58 AM",
  lastModified: "Jun 30, 2025, 08:58 AM",
};

export function BucketTableDropdown({
  bucket = defaultBucket,
  className,
  onMenuClick,
  defaultExpanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url);
  };

  const detailRows = [
    {
      label: "End point",
      value: bucket.url,
      showCopy: true,
    },
    {
      label: "Storage Used",
      value: bucket.storageUsed,
    },
    {
      label: "Objects",
      value: bucket.objectCount.toString(),
    },
    {
      label: "Creation Date",
      value: bucket.createdAt,
      valueClass: "text-muted-foreground",
    },
    {
      label: "Last Modified",
      value: bucket.lastModified,
      valueClass: "text-muted-foreground",
    },
  ];

  return (
    <div className={cn("flex max-w-md flex-col bg-background", className)}>
      {/* Header section */}
      <div
        className="flex w-full cursor-pointer items-center justify-between bg-muted/50 px-4 py-3 transition-colors hover:bg-muted/70"
        onClick={handleToggle}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 shadow-sm">
            <FolderOpen className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-medium text-foreground">
              {bucket.name}
            </div>
            <div className="text-xs text-muted-foreground">{bucket.url}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation();
              onMenuClick?.();
            }}
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isExpanded && "rotate-180",
            )}
          />
        </div>
      </div>

      {/* Detail section */}
      {isExpanded && (
        <div className="flex w-full flex-col bg-background px-5 py-4">
          {detailRows.map((row, index) => (
            <div
              key={row.label}
              className={cn(
                "flex min-h-[50px] w-full items-center justify-between border-b border-muted/50 py-3",
                index === detailRows.length - 1 && "border-b-0",
              )}
            >
              <div className="text-sm font-medium text-foreground">
                {row.label}
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "text-sm font-medium",
                    row.valueClass || "text-foreground",
                  )}
                >
                  {row.value}
                </div>
                {row.showCopy && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyUrl(row.value);
                    }}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}