import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { IoPersonOutline } from "react-icons/io5";
import Modal from "./Modal";

export default function ModalDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IoPersonOutline
        className="shoppingCart"
        onClick={handleClickOpen}
        color="#7c287d"
      />
      <Dialog open={open} onClose={handleClose}>
        <Modal onCancel={handleClose} />
      </Dialog>
    </div>
  );
}
