
import { Copy, Edit, FolderOpen, Trash2 } from "lucide-react";
import { Button } from "./Button";
import { cn } from "../../lib/utils";
import { Table,TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow, } from "./Table";

const defaultBuckets = [
  {
    id: "1",
    name: "Bucket4",
    url: "Bucket4.idrivee2-76.com",
    storageUsed: "10 MB",
    objectCount: 2,
    createdAt: "Jun 30, 2025, 08:58 AM",
    lastModified: "Jun 30, 2025, 08:58 AM",
  },
  {
    id: "2",
    name: "Bucket4",
    url: "Bucket4.idrivee2-76.com",
    storageUsed: "10 MB",
    objectCount: 2,
    createdAt: "Jun 30, 2025, 08:58 AM",
    lastModified: "Jun 30, 2025, 08:58 AM",
  },
];

export function BucketTable({ buckets = defaultBuckets, className }) {
  const handleEdit = (bucketId) => {
    console.log("Edit bucket:", bucketId);
  };

  const handleDelete = (bucketId) => {
    console.log("Delete bucket:", bucketId);
  };

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className={cn("w-full", className)}>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="font-medium text-foreground">
              Bucket name
            </TableHead>
            <TableHead className="font-medium text-foreground">
              Storage Used
            </TableHead>
            <TableHead className="font-medium text-foreground">
              Objects
            </TableHead>
            <TableHead className="font-medium text-foreground">
              Creation Date
            </TableHead>
            <TableHead className="font-medium text-foreground">
              Last Modified
            </TableHead>
            <TableHead className="font-medium text-foreground">
              Action Buttons
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {buckets.map((bucket, index) => (
            <TableRow
              key={bucket.id}
              className={cn(
                "transition-colors hover:bg-muted/50",
                index % 2 === 0 ? "bg-background" : "bg-muted/25",
              )}
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 shadow-sm">
                    <FolderOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm font-medium text-foreground">
                      {bucket.name}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span>{bucket.url}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 p-0 hover:bg-transparent"
                        onClick={() => handleCopyUrl(bucket.url)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-sm font-medium">
                {bucket.storageUsed}
              </TableCell>
              <TableCell className="text-sm font-medium">
                {bucket.objectCount}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {bucket.createdAt}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {bucket.lastModified}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-muted"
                    onClick={() => handleEdit(bucket.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-muted"
                    onClick={() => handleDelete(bucket.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}