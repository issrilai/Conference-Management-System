import React from 'react'
import '../../Header.css'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

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

class HeaderComponent extends React.Component
{
    constructor(props) {
        super(props);
    }


    render() {
        const {actionLogout} = this.props;

        function handleButtonClicked() {
            actionLogout();
        }

        const {btns} = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <div className="root">
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className="grow">
                                Logo
                            </Typography>
                            {
                                btns.map(function({name, path}) {
                                    return <Button color="inherit" className="menuButton"><Link to={path}>{name}</Link></Button>
                                })
                            }
                            <Button color="inherit" className="menuButton" onClick={handleButtonClicked}>LOG OUT</Button>

                        </Toolbar>
                    </AppBar>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default HeaderComponent;