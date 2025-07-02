// import { DemoResponse } from "@shared/api";
// import { Button } from "@/components/ui/button";
import { DeleteAccessKeyDialog } from "../components/ui/DeleteAccessKeyDialog";
import { Button } from "../components/ui/Button";
import { useState } from "react";

export default function AccessKey() {
  const [exampleFromServer, setExampleFromServer] = useState("");

  // Fetch users on component mount
//   useEffect(() => {
//     fetchDemo();
//   }, []);

  // Example of how to fetch data from the server (if needed)
//   const fetchDemo = async () => {
//     try {
//       const response = await fetch("/api/demo");
//       const data = (await response.json()) as DemoResponse;
//       setExampleFromServer(data.message);
//     } catch (error) {
//       console.error("Error fetching hello:", error);
//     }
//   };

  const handleDeleteConfirm = () => {
    console.log("Access key deleted!");
    // Here you would typically make an API call to delete the access key
  };

  const handleDeleteCancel = () => {
    console.log("Delete action cancelled");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="text-center space-y-8">
        <DeleteAccessKeyDialog
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        >
          <Button variant="destructive" size="lg">
            Click
          </Button>
        </DeleteAccessKeyDialog>

        <p className="mt-4 hidden max-w-md">{exampleFromServer}</p>
      </div>
    </div>
  );
}
