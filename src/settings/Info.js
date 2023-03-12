import Hoodies from "../img/section/hoodies.png";
import Coats from "../img/section/coats.png";
import Tshirts from "../img/section/t-shirts.png";

const NewArrivals = [
  {
    img: Hoodies,
    title: "Hoodies & Sweatshirts",
    subtitle: "explore now",
    link: "link",
  },
  {
    img: Coats,
    title: "Coats & Parkas",
    subtitle: "explore now",
    link: "link",
  },
  {
    img: Tshirts,
    title: "T-Shirts",
    subtitle: "explore now",
    link: "link",
  },
];

const CustomerFavorites = [];

const allInfo = [...NewArrivals, ...CustomerFavorites]

export default allInfo
