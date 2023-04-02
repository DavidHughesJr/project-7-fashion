import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ProductAccordion = () => {
  return (
      <Box width='100%'>
          <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
              >
                  <Typography> Shipping & Handling </Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Standard 3 - 5 Business Days
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
              >
                  <Typography>Return Policy</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      We offer a 30 day Return Policy
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
              >
                  <Typography>Sizing</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      True To Size
                  </Typography>
              </AccordionDetails>
          </Accordion>
      </Box>
  )
}

export default ProductAccordion