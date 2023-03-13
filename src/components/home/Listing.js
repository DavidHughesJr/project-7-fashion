import {
  Box,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Stack } from "@mui/system";
import Vector from '../../img/common/vector.png'


const Listing = ({ heading, data }) => {

  return (
    <Box pt={5} pb={5}>
      <Box sx={{position: 'relative'}}>
      <Typography className="listing-heading" variant="h5" fontWeight={900}  mb={4}> {heading} </Typography>
      <img className="listing-vector" src={Vector}   alt="vector"/>
      </Box>
      <Stack direction="row" justifyContent={{xs: 'center', md: 'space-between' }} flexWrap='wrap' spacing={1}>
        {data?.map((item) => (
          <Card
            elevation={0}
            sx={{
              maxWidth: 490,
              minWidth: 290,
              borderRadius: 5,
              background: "",
            }}
            key={item.id}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={375}
                width="100%"
                image={item.img}
                alt="listing info"
                sx={{ borderRadius: 5 }}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2" component="div">
                  {item.title}
                </Typography>
                <Typography variant="subtitle" color="text.secondary">
                  {item.subtitle}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Listing;
