import { useEffect, useState } from "react"
import { Box, Stack, Container, Typography, CircularProgress } from "@mui/material"
import commerce from "../lib/commerce"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"



const CheckoutPage = () => {

  const { cart } = useContext(CartContext)
  const { setCart } = useContext(CartContext)
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate()


  const [checkoutToken, setCheckoutToken] = useState('')
  const [shippingCountries, setShippingCountries] = useState('')
  const [country, setCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [subdivision, setSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])


  console.log(cart.line_items)

  useEffect(() => {
    if (cart.line_items) {
      const generateCheckoutToken = async () => {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
        setCheckoutToken(token)
      }
      generateCheckoutToken()
    }

  }, [cart])



  const fetchShippingCounties = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
    setShippingCountries(countries)
  }

  const countriesList = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
    setShippingSubdivisions(subdivisions)

  }

  const subdivisionList = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))


  const fetchShippingOptions = async (checkoutTokenId, country, subdivision = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country: country, stateProvince: subdivision })
    setShippingOptions(options)
  }

  console.log(shippingCountries)

  useEffect(() => {
    if (checkoutToken?.id) {
      fetchShippingCounties(checkoutToken?.id)
    }
  }, [checkoutToken?.id])

  const handleCountryChange = (value) => {
    setCountry(value)
  }

  useEffect(() => {
    if (country)
      fetchSubdivisions(country)
  }, [country])

  useEffect(() => {
    if (subdivision)
      fetchShippingOptions(checkoutToken?.id, country, subdivision)
  }, [subdivision, checkoutToken.id, country])


  console.log(shippingOptions)

  const onSubmit = async (data) => {
    try {
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: {
          firstname: data.firstName,
          lastname: data.lastName,
          email: data.email,
        },
        shipping: {
          name: `${data.firstName} ${data.lastName}`,
          street: data.shippingStreet,
          town_city: data.shippingCity,
          county_state: data.shippingSubdivisions,
          postal_zip_code: data.Zip,
          country: data.shippingCountries,
        },
        fulfillment: {
          shipping_method: data.shippingOptions
        },
        payment: {
          gateway: "test_gateway",
          card: {
            number: '4242 4242 4242 4242',
            expiry_month: '101010',
            expiry_year: '2020',
            cvc: '222',
            postal_zip_code: '2022',
          },
        },
        billing: {
          name: 'Test',
          street: 'Somewhere',
          town_city: 'Billing again',
          postal_zip_code: '12234',
          county_state: 'AL',
          country: 'Alabama'
        }
      };

      const order = await commerce.checkout.capture(checkoutToken.id, orderData)
      const newCart = await commerce.cart.refresh()
      setCart(newCart)
      window.sessionStorage.setItem('order_receipt', JSON.stringify(order));
      navigate('/confirmation')
    } catch (error) {
    }
  };


  return (
    <Container maxWidth='x'>
      {
        !checkoutToken ? <Stack margin={50} justifyContent='center' alignItems='center'> <CircularProgress size='100px' />  </Stack> :
          <>
            <Typography variant='h4' mb={4} align='center'> Checkout </Typography>
            <Box>
              <Typography variant="subtitle2" mb={2}> Contact Information Required* </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap={2}>
                  <input required {...register("firstName")} placeholder='First name' />
                  <input required  {...register("lastName")} placeholder='Last name' />
                  <input required  {...register("email")} placeholder='Email' />
                </Stack>
                <Stack mt={2} spacing={2} direction={{ xs: 'column', md: 'row' }}>
                  <Box width={{ xs: '100%', md: '50%' }}>
                    <Typography variant="subtitle2" mb={2}> Shipping Information Required* </Typography>
                    <Stack gap={2}>
                      <input required  {...register("shippingStreet")} placeholder='Street Address' />
                      <input required  {...register("shippingCity")} placeholder='City' />
                      <input required  {...register("shippingZip")} placeholder='Zip Code' />
                      <select defaultValue="" required {...register("shippingCountries")} onChange={(e) => handleCountryChange(e.target.value)}>
                        <option value="" disabled hidden>Select Country</option>
                        {
                          countriesList?.reverse().map((item) => (
                            <option key={item.id} value={item.id}>{item.label}</option>
                          ))
                        }
                      </select>
                      <select defaultValue="" required {...register("shippingSubdivisions")} onChange={(e) => setSubdivision(e.target.value)}>
                        <option value="" disabled hidden>Select State / Province</option>
                        {
                          subdivisionList?.map((item) => (
                            <option key={item.id} value={item.id}>{item.label}</option>
                          ))
                        }
                      </select>
                      <select defaultValue="" required {...register("shippingOptions")}>
                        <option value="" disabled hidden> <Typography variant="subtitle2"> Select Shipping Option </Typography></option>
                        {
                          shippingOptions.length === 0 ? <option value="" disabled > <Typography variant="subtitle2"> Loading... </Typography></option> :
                            shippingOptions?.map((item) => (
                              <option key={item.id} value={item.id}>{item.description} : {item.price.formatted_with_symbol}</option>
                            ))
                        }                        {
                        }
                      </select>
                    </Stack>
                  </Box>
                  <Box width={{ xs: '100%', md: '50%' }}>
                    <Typography variant="subtitle2" mb={2}> Credit Card Information Required* </Typography>
                    <Stack gap={2}>

                    </Stack>
                  </Box>
                </Stack>
                <input className="submit-button" type="submit" />
              </form>
            </Box>
          </>
      }
    </Container>
  )
}

export default CheckoutPage

