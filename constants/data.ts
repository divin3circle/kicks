import icons from "./icons";
import images from "./images";

interface Shoe {
  title: string;
  image: string;
  price: string;
  sizes: number[];
  colors: string[];
  brand: string;
  rating: number;
  pairsAvailable: number;
}

export const shoes: Shoe[] = [
  {
    title: "Jordan IV",
    image: images.jordan_iv,
    price: "$160",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#F1F1F1", "#FFC700", "#000000"],
    brand: "Jordan",
    rating: 4.8,
    pairsAvailable: 5,
  },
  {
    title: "Airmax 90",
    image: images.airmax_90,
    price: "$120",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#F1F1F1", "#000", "#FFC700", "#0061ff"],
    brand: "Nike",
    rating: 4.7,
    pairsAvailable: 14,
  },
  {
    title: "Samba",
    image: images.samba,
    price: "$90",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#F1F1F1"],
    brand: "Samba",
    rating: 4.2,
    pairsAvailable: 5,
  },
  {
    title: "Vans",
    image: images.vans,
    price: "$70",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#fff", "#000000"],
    brand: "Vans",
    rating: 4.5,
    pairsAvailable: 15,
  },
  {
    title: "Dr. Martens",
    image: images.dr_martens,
    price: "$180",
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["#000000"],
    brand: "Dr Martens",
    rating: 4.0,
    pairsAvailable: 5,
  },
  {
    title: "Nike Dunk Low Anthracite",
    image: images.nike_dunk_low_anthracite,
    price: "$120",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#F1F1F1", "#006ff1", "#000000"],
    brand: "Nike",
    rating: 4.4,
    pairsAvailable: 7,
  },
  {
    title: "Travis Scott x Jordan Jumpman Cut",
    image: images.travis_scott_x_jordan_jumpman_cut,
    price: "$190",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#F1F1F1", "#036145", "#000000"],
    brand: "Nike",
    rating: 4.3,
    pairsAvailable: 5,
  },
  {
    title: "Jordan I Low Cut",
    image: images.jordan_i_low_cut,
    price: "$150",
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["#F1F1F1", "#006ff1", "#000000"],
    brand: "Jordan",
    rating: 4.9,
    pairsAvailable: 19,
  },
  {
    title: "Jordan IX",
    image: images.jordan_ix,
    price: "$199",
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["#F1F1F1", "#000000"],
    brand: "Jordan",
    rating: 4.0,
    pairsAvailable: 9,
  },
  {
    title: "Nola",
    image: images.nola,
    price: "$170",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#FDC8C8FF", "#fff", "#000000"],
    brand: "Nike",
    rating: 4.8,
    pairsAvailable: 4,
  },
  {
    title: "Airforce",
    image: images.airforce,
    price: "$90",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#fff", "#000000"],
    brand: "Nike",
    rating: 4.9,
    pairsAvailable: 16,
  },
  {
    title: "Jordan VII",
    image: images.jordan_vii,
    price: "$90",
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#fff", "#000000"],
    brand: "Jordan",
    rating: 4.2,
    pairsAvailable: 14,
  },
  {
    title: "Jordan VI Travis Scott British Khaki",
    image: images.jordan_vi,
    price: "$145",
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["#036145"],
    brand: "Jordan",
    rating: 4.3,
    pairsAvailable: 7,
  },
  {
    title: "Nike SB Dunk Low Kobe Blue",
    image: images.nike_sb_dunk,
    price: "$120",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#fff", "#0061ff"],
    brand: "Nike",
    rating: 4.9,
    pairsAvailable: 11,
  },
  {
    title: "Reebok Club C Revenge Vintage",
    image: images.reebok_club_c_revenge_vintage,
    price: "$90",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#fff"],
    brand: "Reebok",
    rating: 4.7,
    pairsAvailable: 6,
  },
];

export const featuredShoes: Shoe[] = [
  {
    title: "Travis Scott x Jordan Jumpman Cut",
    image: images.travis_scott_x_jordan_jumpman_cut,
    price: "$190",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#F1F1F1", "#036145", "#000000"],
    brand: "Nike",
    rating: 4.3,
    pairsAvailable: 5,
  },
  {
    title: "Reebok Club C Revenge Vintage",
    image: images.reebok_club_c_revenge_vintage,
    price: "$90",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["#fff"],
    brand: "Reebok",
    rating: 4.7,
    pairsAvailable: 6,
  },
  {
    title: "Jordan VI Travis Scott British Khaki",
    image: images.jordan_vi,
    price: "$145",
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["#036145"],
    brand: "Jordan",
    rating: 4.3,
    pairsAvailable: 7,
  },
];

export const cards = [
  {
    title: "Card 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    category: "house",
    image: images.newYork,
  },
  {
    title: "Card 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    category: "house",
    image: images.japan,
  },
  {
    title: "Card 3",
    location: "Location 3",
    price: "$300",
    rating: 2,
    category: "flat",
    image: images.newYork,
  },
  {
    title: "Card 4",
    location: "Location 4",
    price: "$400",
    rating: 5,
    category: "villa",
    image: images.japan,
  },
];

export const featuredCards = [
  {
    title: "Featured 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    image: images.newYork,
    category: "house",
  },
  {
    title: "Featured 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    image: images.japan,
    category: "flat",
  },
];

export const categories = [
  { title: "All", category: "All" },
  { title: "Jordan", category: "Jordan" },
  { title: "Nike", category: "Nike" },
  { title: "Adidas", category: "Adidas" },
  { title: "Samba", category: "Samba" },
  { title: "Vans", category: "Vans" },
  { title: "Converse", category: "Converse" },
  { title: "Reebok", category: "Reebok" },
  { title: "Others", category: "Others" },
];

export const settings = [
  {
    title: "My Bookings",
    icon: icons.calendar,
  },
  {
    title: "Payments",
    icon: icons.wallet,
  },
  {
    title: "Profile",
    icon: icons.person,
  },
  {
    title: "Notifications",
    icon: icons.bell,
  },
  {
    title: "Security",
    icon: icons.shield,
  },
  {
    title: "Language",
    icon: icons.language,
  },
  {
    title: "Help Center",
    icon: icons.info,
  },
  {
    title: "Invite Friends",
    icon: icons.people,
  },
];

export const facilities = [
  {
    title: "Laundry",
    icon: icons.laundry,
  },
  {
    title: "Car Parking",
    icon: icons.carPark,
  },
  {
    title: "Sports Center",
    icon: icons.run,
  },
  {
    title: "Cutlery",
    icon: icons.cutlery,
  },
  {
    title: "Gym",
    icon: icons.dumbell,
  },
  {
    title: "Swimming pool",
    icon: icons.swim,
  },
  {
    title: "Wifi",
    icon: icons.wifi,
  },
  {
    title: "Pet Center",
    icon: icons.dog,
  },
];

export const gallery = [
  {
    id: 1,
    image: images.newYork,
  },
  {
    id: 2,
    image: images.japan,
  },
  {
    id: 3,
    image: images.newYork,
  },
  {
    id: 4,
    image: images.japan,
  },
  {
    id: 5,
    image: images.newYork,
  },
  {
    id: 6,
    image: images.japan,
  },
];
