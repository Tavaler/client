import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import  React, {useState} from 'react'; 
import Catalog from '../../features/catalog/Catalog';
import Header from "./Header"; 



export default function ButtonAppBar() {
    const [mode,setMode] = useState(false)
    const displayMode = mode ? 'dark' : 'light';

    const darkTheme = createTheme({
        palette: {
          mode: displayMode
        },
      });

    const handleMode=()=> setMode(!mode)
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Header handleMode={handleMode} />
                <Container>
                    <Catalog/>
                </Container>
            </ThemeProvider>
        </>

    )   
}
