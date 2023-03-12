import {
  Box,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Stack } from "@mui/system";
import Vector from '../img/vector.png'


const Listing = ({ heading, data }) => {

  return (
    <Box pt={5} pb={5}>
      <Typography className="listing-heading" variant="h5" fontWeight={900} mb={4}> {heading} </Typography>
      <img className="listing-vector" src={Vector}   alt="vector"/>
      <Stack direction="row" justifyContent="space-between" flexWrap='wrap'>
        {data?.map((item) => (
          <Card
            elevation={0}
            sx={{
              maxWidth: 500,
              minWidth: 300,
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
