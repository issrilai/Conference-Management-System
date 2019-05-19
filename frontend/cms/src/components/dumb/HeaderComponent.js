import React from 'react'
import '../../Header.css'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: "#725AC1",
      },
      secondary: {
          main: '#8D86C9',
      },
      inherit: {
          main: '#AA9FCE',
        },
    },
  });

  
  const HeaderComponent = ({btns}) =>  (
        <MuiThemeProvider theme={theme}>
      <div className="root">
        <AppBar position="static" color="primary">
          <Toolbar>
            {/* <IconButton className="menuButton" color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" color="inherit" className="grow">
              Logo
            </Typography>
            <Button color="inherit" className="menuButton">{btns[0]}</Button>
            <Button color="inherit" className="menuButton">{btns[1]}</Button>
            <Button color="inherit" className="menuButton">fsfsd</Button>
            <Button color="inherit" className="menuButton">Sign out</Button>
          </Toolbar>
        </AppBar>
      </div>
      </MuiThemeProvider>
    );
  
  
  export default HeaderComponent;