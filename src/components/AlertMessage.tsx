import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
export default function AlertMessage() {
  const [showAlert, setShowAlert] = useState(true);
  return (
      <AlertDialog open={showAlert} onOpenChange={(open) => setShowAlert(open)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Note:</AlertDialogTitle>
            <AlertDialogDescription>
              Not all the live links may work as expected as some of the
              projects are hosted on free-tier services, which may have
              restrictions on the number of requests they can handle. If you
              encounter any issues, please try again later.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Okay</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  );
}
