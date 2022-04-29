import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import useCountry from "../../hooks/useCountry";
import "../../styles/modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  outline: "none",
  boxShadow: 24,
  p: 4,

  ["@media (max-width:500px)"]: {
    width: 300,
  },

  ["@media (max-width:350px)"]: {
    width: 250,
  },
};

const ModalCard = ({ handleClickOpen }) => {
  const [open, setOpen] = useState(true);
  const { captureId } = useCountry();
  return (
    <Modal
      open={open}
      onClose={handleClickOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal__close" onClick={handleClickOpen}>
          <p>X</p>
        </div>
        <div className="modal">
          <img src={captureId.img} alt={captureId.name} />
          <div>
            <h1>{captureId.name}</h1>
            <p>Native Name: {captureId.nativename}</p>
            <p>Population: {captureId.population}</p>
            <p>Region: {captureId.region}</p>
            <p>Subregion: {captureId.subregion}</p>
            <p>Capital: {captureId.capital}</p>
            <p>Top Level Domain: {captureId.topLevelDomain}</p>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalCard;
