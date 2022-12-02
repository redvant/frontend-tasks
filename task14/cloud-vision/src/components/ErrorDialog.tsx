import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { DialogContent, DialogContentText } from "@mui/material";

export interface ErrorDialogProps {
  handleClose: () => void;
  message?: string;
  open: boolean;
}

function ErrorDialog(props: ErrorDialogProps) {
  const { handleClose, message, open } = props;
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Error consulting the Cloud Vision API</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <Button variant="text" onClick={handleClose}>
        Ok
      </Button>
    </Dialog>
  );
}

export default ErrorDialog;
