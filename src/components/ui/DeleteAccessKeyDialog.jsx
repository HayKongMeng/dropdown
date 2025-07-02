import { AlertTriangle } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { AlertDialog,AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger, } from "./alert-dialog";

export function DeleteAccessKeyDialog({
  onConfirm,
  onCancel,
  children,
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-sm rounded-3xl border-0 p-0 overflow-hidden">
        {/* Red progress bar at top */}
        <div className="h-1 w-full bg-red-500" />

        <div className="p-6 flex flex-col items-center text-center space-y-6">
          {/* Warning icon with shadow */}
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>

          {/* Header with title and description */}
          <AlertDialogHeader className="space-y-3 ">
            <AlertDialogTitle className="text-2xl font-bold text-foreground text-center">
              Delete Access Key
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base text-muted-foreground leading-relaxed">
              This action can not be undo after proceed it.
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* Action buttons */}
          <AlertDialogFooter className="flex flex-row w-full gap-3 mt-6">
            <AlertDialogCancel
              className="flex-1 rounded-xl border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100"
              onClick={onCancel}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="flex-1 rounded-xl bg-red-500 text-white hover:bg-red-600"
              onClick={onConfirm}
            >
              Delete Access Key
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}