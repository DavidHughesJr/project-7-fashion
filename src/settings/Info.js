import Hoodies from "../img/section/hoodies.png";
import Coats from "../img/section/coats.png";
import Tshirts from "../img/section/t-shirts.png";
import Sales from '../img/section/sales.png'
import Trending from '../img/section/trending.png'

const NewArrivals = [
  {
    img: Hoodies,
    title: "Hoodies & Sweatshirts",
    subtitle: "explore now",
    link: "link",
    id: 1
  },
  {
    img: Coats,
    title: "Coats & Parkas",
    subtitle: "explore now",
    link: "link",
    id: 2
  },
  {
    img: Tshirts,
    title: "T-Shirts",
    subtitle: "explore now",
    link: "link",
    id: 3
  },
];

const CustomerFavorites = [
  {
    img: Trending,
    title: "Trending On Social Media",
    subtitle: "explore now",
    link: "link",
    id: 1
  },
  {
    img: Sales,
    title: "Under $40",
    subtitle: "explore now",
    link: "link",
    id: 2
  },
];

const allInfo = [NewArrivals, CustomerFavorites]

export default allInfo
