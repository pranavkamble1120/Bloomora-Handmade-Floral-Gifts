import bouquetImage from "../images/bouquet.jpeg";
import bouquetImage1 from "../images/Bouquet-1.jpeg";
import bouquetImage2 from "../images/Bouquet-2.jpeg";
import bouquetImage3 from "../images/Bouquet-3.jpeg";
import bouquetImage4 from "../images/Bouquet-4.jpeg";
import bouquetImage5 from "../images/Bouquet-5.jpeg";
import bouquetImage6 from "../images/Bouquet-6.jpeg";
import bouquetImage7 from "../images/Bouquet-7.jpeg";
import bouquetImage8 from "../images/Bouquet-8.jpeg";

import keychainImage from "../images/keychain.jpeg";
import keychainImage1 from "../images/Keychain-1.jpeg";
import keychainImage2 from "../images/Keychain-2.jpeg";
import keychainImage3 from "../images/Keychain-3.jpeg";
import keychainImage4 from "../images/Keychain-5.jpeg";
import keychainImage5 from "../images/Keychain-6.jpeg";
import keychainImage6 from "../images/Keychain-7.jpeg";
import keychainImage7 from "../images/Keychain-8.jpeg";
import keychainImage8 from "../images/Keychain-9.jpeg";

import birthdayImage from "../images/Birthday Gift.jpeg";
import birthdayImage1 from "../images/BIrthday Gift -1.jpeg";

import harrImage from "../images/Chafa Harr.jpeg";
import harrImage1 from "../images/Harr-1.jpeg";
import harrImage2 from "../images/Harr-2.jpeg";


const products = [
  // Bouquet products
  {
    id: 1,
    name: "Floral Bouquet",
    category: "Bouquets",
    description: "Beautiful handmade flower bouquet crafted with love.",
    uses: "Birthdays, anniversaries and gifts.",
    images: [bouquetImage],
  },
  {
    id: 2,
    name: "Pink Rose Bouquet",
    category: "Bouquets",
    description: "An elegant pink-themed bouquet for special occasions.",
    uses: "Birthdays, proposals and anniversaries.",
    images: [bouquetImage1],
  },
  {
    id: 3,
    name: "Red Rose Bouquet",
    category: "Bouquets",
    description: "A lovely handmade bouquet with a romantic design.",
    uses: "Anniversaries, romantic gifts and celebrations.",
    images: [bouquetImage2],
  },
  {
    id: 4,
    name: "Luxury Flower Bouquet",
    category: "Bouquets",
    description: "A premium-looking handmade bouquet with creative wrapping.",
    uses: "Weddings, birthdays and special events.",
    images: [bouquetImage3],
  },
  {
    id: 5,
    name: "Pastel Bouquet",
    category: "Bouquets",
    description: "A soft-colored bouquet with a beautiful handmade finish.",
    uses: "Thank-you gifts, birthdays and celebrations.",
    images: [bouquetImage4],
  },
  {
    id: 6,
    name: "Crochet Flower Bouquet",
    category: "Bouquets",
    description: "A creative flower arrangement with a handmade aesthetic.",
    uses: "Keepsakes, home decoration and gifts.",
    images: [bouquetImage5],
  },
  {
    id: 7,
    name: "Mini Bouquet",
    category: "Bouquets",
    description: "A cute and compact bouquet for thoughtful gifting.",
    uses: "Small celebrations, surprises and return gifts.",
    images: [bouquetImage6],
  },
  {
    id: 8,
    name: "Designer Bouquet",
    category: "Bouquets",
    description: "A decorative bouquet with a unique presentation.",
    uses: "Festivals, parties and special occasions.",
    images: [bouquetImage7],
  },
  {
    id: 9,
    name: "Custom Gift Bouquet",
    category: "Bouquets",
    description: "A creative bouquet for personalized gifting.",
    uses: "Birthdays, celebrations and customized gifts.",
    images: [bouquetImage8],
  },

  // Keychain products
  {
    id: 10,
    name: "Resin Keychain Design 1",
    category: "Keychains",
    description: "A personalized keychain with a unique handmade design.",
    uses: "Keys, bags, return gifts and presents.",
    images: [keychainImage],
  },
  {
    id: 11,
    name: "Resin Keychain Design 2",
    category: "Keychains",
    description: "A handmade keychain designed for everyday use.",
    uses: "Keys, bags and personalized gifts.",
    images: [keychainImage1],
  },
  {
    id: 12,
    name: "Resin Keychain Design 3",
    category: "Keychains",
    description: "A creative keychain with a distinctive design.",
    uses: "Bags, keys and return gifts.",
    images: [keychainImage2],
  },
  {
    id: 13,
    name: "Resin Keychain Design 4",
    category: "Keychains",
    description: "A charming handmade accessory for your keys.",
    uses: "Everyday use and gifting.",
    images: [keychainImage3],
  },
  {
    id: 14,
    name: "Resin Keychain Design 5",
    category: "Keychains",
    description: "A unique handmade keychain for special occasions.",
    uses: "Personalized presents and return gifts.",
    images: [keychainImage4],
  },
  {
    id: 15,
    name: "Resin Keychain Design 6",
    category: "Keychains",
    description: "A decorative keychain made for thoughtful gifting.",
    uses: "Keys, bags and celebrations.",
    images: [keychainImage5],
  },
  {
    id: 16,
    name: "Resin Keychain Design 7",
    category: "Keychains",
    description: "A stylish handmade keychain with a creative finish.",
    uses: "Everyday accessories and gifts.",
    images: [keychainImage6],
  },
  {
    id: 17,
    name: "Resin Keychain Design 8",
    category: "Keychains",
    description: "A personalized accessory for your keys or bag.",
    uses: "Birthdays, return gifts and personal use.",
    images: [keychainImage7],
  },
  {
    id: 18,
    name: "Resin Keychain Design 9",
    category: "Keychains",
    description: "A handmade keychain that makes a thoughtful gift.",
    uses: "Keys, bags and special occasions.",
    images: [keychainImage8],
  },

  // Birthday gifts
  {
    id: 19,
    name: "Handmade Birthday Gift",
    category: "Birthday Gift",
    description: "A creative handmade gift for someone's special day.",
    uses: "Birthdays, surprises and celebrations.",
    images: [birthdayImage],
  },
  {
    id: 20,
    name: "Personalized Birthday Gift",
    category: "Birthday Gift",
    description: "A thoughtful gift to make a birthday memorable.",
    uses: "Birthday parties and special surprises.",
    images: [birthdayImage1],
  },
  {
    id: 21,
    name: "Personalized Birthday Gift",
    category: "Harr",
    description: "A thoughtful gift to make a birthday memorable.",
    uses: "Birthday parties and special surprises.",
    images: [harrImage],
  },
  {
    id: 22,
    name: "Personalized Birthday Gift",
    category: "Harr",
    description: "A thoughtful gift to make a birthday memorable.",
    uses: "Birthday parties and special surprises.",
    images: [harrImage1],
  },
  {
    id: 20,
    name: "Personalized Birthday Gift",
    category: "Harr",
    description: "A thoughtful gift to make a birthday memorable.",
    uses: "Birthday parties and special surprises.",
    images: [harrImage2],
  },
];

export default products;