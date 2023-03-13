import { Box, Stack, TextField, Button, Typography } from "@mui/material"

const styles = {
  customBox: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#EBD96B',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    paddingTop: '1rem',
    borderRadius: '10px'
  }
};


const Newsletter = () => {
  return (
    <Box style={styles.customBox}>
      <Stack alignItems='center' >
        <Typography variant="h3" fontWeight={900} textAlign='center'> JOIN OUR COMMUNITY </Typography>
        <Typography variant="h3" fontWeight={900} textAlign='center'>  TO GET MONTHLY PROMOS </Typography>
        <Typography p={2} variant="subtitle2" fontWeight={500} color="white"> Type your email down below </Typography>
          <Box
            component="form"
            p={2}
          >
            <TextField
              id="outlined-password-input"
              label="Type Email Here"
              autoComplete="current-password"
              sx={{ background: 'white' }}
              color='secondary'
              InputProps={{ endAdornment: <Button variant="contained" color="secondary"> Submit </Button> }}
            />
          </Box>
      </Stack>
    </Box>
  )
}

export default Newsletter