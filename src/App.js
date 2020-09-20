import React from 'react';
import Home from './views/Home/Home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.scss';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00BFFF'
        }
    }
});

function App() {
    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <Home/>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
