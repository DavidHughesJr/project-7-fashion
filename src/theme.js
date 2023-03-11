import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#EBD96B',
        },
        secondary: {
            main: '#000000',
        },
        text: {
            primary: '#00000',
            secondary: 'rgba(55,55,55,0.6)',
        },
    },
});

export default theme