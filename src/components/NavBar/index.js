import React, { useState, useContext } from "react";
import { ContainerTop, ContainerText, UserStyle, ImageStyle } from "../styles";
import PersonIcon from "@mui/icons-material/Person";
import { Modal, Box, Typography, Button } from "@mui/material";
import UserContext from "../../context/context";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/reducers";

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  const { name } = useSelector(selectUser);

  const { userDefault } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  // const redirectSearch = () => {
  //   window.location.href = "/search";
  //   console.log( "login");
  // };
  // const redirectLogin = () => {
  //   window.location.href = "/login";
  // };
  // const redirectPokemon = () => {
  //   window.location.href = "/pokemonpage";
  // };
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: " 8px",
  };

  return (
    <>
      <ContainerTop>
        <ContainerText>
          <img
            // onClick={redirectSearch}
            alt="Poké Ball icon"
            src="//upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png"
            decoding="async"
            width="42px"
          />
        </ContainerText>
        <ImageStyle>
          <img
            // onClick={redirectPokemon}
            alt="imagem pokemon"
            src="https://miro.medium.com/max/1400/1*9AKstnSeE3MfApcKeXnKsg.png"
            width="150px"
          />
        </ImageStyle>
        <UserStyle>
          <Button onClick={handleOpen}>
            <PersonIcon fontSize="large" />
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <p>{userDefault && userDefault.name}</p>

                <p>{name && name}</p>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Button>Buscar pokemon</Button>
                <br></br>

                <Button >Login</Button>
                <br></br>
              </Typography>
            </Box>
          </Modal>
        </UserStyle>
      </ContainerTop>
    </>
  );
};
export default NavBar;
