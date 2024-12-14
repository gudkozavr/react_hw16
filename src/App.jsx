import { useState } from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  function handleOpen() {
    setIsVisible(true);
  }
  function handleClose() {
    setIsVisible(false);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ p: 1 }}>
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="sm"
        sx={{ p: 3, display: "flex", flexDirection: "column", gap: "18px" }}
      >
        <Typography variant="h4" component="div">
          Welcome to my MUI App
        </Typography>
        <Button
          sx={{ maxWidth: "250px" }}
          onClick={handleOpen}
          variant="contained"
        >
          Open Modal Window
        </Button>
        <Dialog
          open={isVisible}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Use Material UI?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is simple React Application with Materia UI library. You can
              customize it by yourself.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Disagree
            </Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}

export default App;
