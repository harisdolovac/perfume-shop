import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import "../css/ShopModal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    justifyContent: "space-between",
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "50%",
    height: "50%",
  },
}));

export default function ShopModal({
  products,
  openModal,
  setOpenModal,
  modalArray,
}) {
  const classes = useStyles();

  //{openModal,setOpenModal}

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <div>
              <img
                src={modalArray.img}
                alt="modal_image"
                style={{ width: "100px" }}
              />
            </div>
            <div>
              <p style={{ padding: "10px" }}>{modalArray.info}</p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
