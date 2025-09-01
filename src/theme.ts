// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
  primary: {
    main: "#41A3DC", // Azul
  },
  secondary: {
    main: "#F8706F", // Rojo
  },
  text: {
    primary: "#44414C", // Gris oscuro
    secondary: "#989898", // Gris claro
  },
  background: {
    default: "#E5E9EC", // Fondo general
    paper: "#FFFFFF",   // Cajas
  },
},
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "#44414C", 
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#989898", 
          },
        },
      },
    },
  },
});

export default theme;
