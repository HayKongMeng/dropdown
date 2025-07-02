// import { BucketTable } from "@/components/BucketTable";
// import { BucketTableDropdown } from "@/components/BucketTableDropdown";

import { BucketTableDropdown } from "../components/ui/BucketTableDropdown";
import { BucketTable } from "../components/ui/BucketTable"; 
export default function Table() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground">
            Storage Buckets
          </h1>
          <p className="text-muted-foreground">
            Manage your storage buckets and monitor usage
          </p>
        </div>

        <div className="space-y-8">
          {/* Desktop: Show table */}
          <div className="hidden md:block">
            <BucketTable />
          </div>

          {/* Mobile: Show dropdown cards */}
          <div className="space-y-4 md:hidden">
            <BucketTableDropdown />
            <BucketTableDropdown
              bucket={{
                id: "1",
                name: "Bucket4",
                url: "Bucket4.idrivee2-76.com",
                storageUsed: "10 MB",
                objectCount: 2,
                createdAt: "Jun 30, 2025, 08:58 AM",
                lastModified: "Jun 30, 2025, 08:58 AM",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
