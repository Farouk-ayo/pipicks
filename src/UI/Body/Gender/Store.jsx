// MEN DRESS

import GreyBrownShirt from "../../../assets/men/GreyBrownShirt.png";
import GreyRusticLinen from "../../../assets/men/GreyRusticLinen.png";
import GreyTShirt from "../../../assets/men/GreyTShirt.png";
import longsleevedTshirt from "../../../assets/men/longsleevedTshirt.png";
import RedPlainLong from "../../../assets/men/RedPlainLong.png";
import sepiaBrownSuit from "../../../assets/men/sepiaBrownSuit.png";
import whiteHoodie from "../../../assets/men/whiteHoodie.png";
import BlackHoodie from "../../../assets/men/BlackHoodie.png";
import BlueLongsleeveTshirt from "../../../assets/men/BlueLongsleeveTshirt.png";

import Bedroom from "../../../assets/men/Bedroom.png";
import BarberChair from "../../../assets/men/BarberChair.png";
import chair from "../../../assets/men/chair.png";
import Dinningtable from "../../../assets/men/Dinningtable.png";

import digitalclock from "../../../assets/men/digitalclock.png";
import DjSpeaker from "../../../assets/men/DjSpeaker.png";
import GameController from "../../../assets/men/GameController.png";
import Headphone from "../../../assets/men/Headphone.png";
import Loudspeaker from "../../../assets/men/Loudspeaker.png";

import sneakers from "../../../assets/men/sneakers.png";
import timberland from "../../../assets/men/timberland.png";
import shoe1 from "../../../assets/shoe1.png";
import shoeflash from "../../../assets/shoeflash.png";

// WOMEN DRESS

import Navyandwhite from "../../../assets/women/Navyandwhite.png";
import wnavyBlue from "../../../assets/women/wnavyBlue.png";
import wnavysuit from "../../../assets/women/wnavysuit.png";
import skirt from "../../../assets/women/skirt.png";
import wpolo from "../../../assets/women/wpolo.png";

import blackDior from "../../../assets/women/blackDior.png";
import cartierBag from "../../../assets/women/cartierBag.png";
import nikeGym from "../../../assets/women/nikeGym.png";
import shoulderbag from "../../../assets/women/shoulderbag.png";
import sunMountain from "../../../assets/women/sunMountain.png";
import whitebag from "../../../assets/women/whitebag.png";

import blackShoe from "../../../assets/women/blackShoe.png";
import candycane from "../../../assets/women/candycane.png";
import livewireride from "../../../assets/women/livewireride.png";
import TonyBiancoBrazen from "../../../assets/women/TonyBiancoBrazen.png";
import winterFashion from "../../../assets/women/winterFashion.png";

import silverware from "../../../assets/women/silverware.png";

//KIDS
import Blackgown from "../../../assets/kids/Blackgown.png";
import DreamSleepSuit from "../../../assets/kids/DreamSleepSuit.png";
import LikeABossCamouflage from "../../../assets/kids/LikeABossCamouflage.png";
import ny from "../../../assets/kids/ny.png";
import rompersuit from "../../../assets/kids/rompersuit.png";
import cartoon from "../../../assets/kids/cartoon.png";

import assortmentkidstoys from "../../../assets/kids/assortmentkidstoys.png";
import babytoy from "../../../assets/kids/babytoy.png";
import fishercornpopper from "../../../assets/kids/fishercornpopper.png";
import girafeehead from "../../../assets/kids/girafeehead.png";
import leapfrogspin from "../../../assets/kids/Blackgown.png";
import playingtoys from "../../../assets/kids/playingtoys.png";
import polyTurtle from "../../../assets/kids/polyTurtle.png";
import toysTop from "../../../assets/kids/toysTop.png";
import toytrain from "../../../assets/kids/toytrain.png";
import toyvector from "../../../assets/kids/toyvector.png";
import { MdCable, MdCheckroom, MdToys, MdWeekend } from "react-icons/md";
import { GiGoldNuggets, GiRunningShoe } from "react-icons/gi";
import { BsHandbagFill } from "react-icons/bs";
import SlidesFlashStore from "../flashdeals/SlidesFlashStore";

export const Store = {
  men: {
    Fashion: "Men",
    sections: [
      { id: 1, type: "Clothes", img: <MdCheckroom size={40} /> },
      { id: 2, type: "Furniture", img: <MdWeekend size={40} /> },
      { id: 3, type: "Electronics", img: <MdCable size={40} /> },
      { id: 4, type: "Shoes", img: <GiRunningShoe size={40} /> },
    ],
    Clothes: [
      ["1", GreyBrownShirt, "Grey Brown Shirt", "20", "12"],
      ["2", GreyRusticLinen, "Grey Rustic Linen", "40", "10"],
      ["3", GreyTShirt, "Grey Tshirt", "45", "34"],
      ["4", longsleevedTshirt, "Long Sleeved Tshirt", "75", "23"],
      ["5", RedPlainLong, "Red Plain Long", "50", "11"],
      ["6", sepiaBrownSuit, "Sepia Brown Suit", "65", "7"],
      ["7", whiteHoodie, "White Hoodie", "10", "8"],
      ["8", BlackHoodie, "Black Hoodie", "58", "10"],
      ["9", BlueLongsleeveTshirt, "Blue Longsleeve", "90", "45"],
    ],
    Furniture: [
      ["10", Bedroom, "Bedroom", "120", "15"],
      ["11", BarberChair, "Barber Chair", "10", "24"],
      ["12", chair, "Chair", "10", "12"],
      ["13", Dinningtable, "Dinning Table", "33", "25"],
    ],
    Electronics: [
      ["14", digitalclock, "Digital Clock", "45", "10"],
      ["15", DjSpeaker, "Dj Speaker", "45", "9"],
      ["16", GameController, "Game Controller", "23", "12"],
      ["17", Headphone, "Headphone", "12", "19"],
      ["18", Loudspeaker, "LoudSpeaker", "35", "30"],
    ],
    Shoes: [
      ["19", sneakers, "Sneakers", "45", "15"],
      ["20", timberland, "Timberland", "34", "7"],
      ["21", shoe1, "Shoe", "45", "12"],
      ["22", shoeflash, "Shoe sleek", "34", "23"],
    ],
  },
  women: {
    Fashion: "Women",
    sections: [
      { id: 1, type: "Clothes", img: <MdCheckroom size={40} /> },
      { id: 5, type: "Bags", img: <BsHandbagFill size={40} /> },
      { id: 4, type: "Shoes", img: <GiRunningShoe size={40} /> },
      { id: 6, type: "Jewelry", img: <GiGoldNuggets size={40} /> },
    ],
    Clothes: [
      ["23", Navyandwhite, "Navy and White", "40", "14"],
      ["24", wnavyBlue, "Navy Blue", "55", "10"],
      ["25", wnavysuit, "Navy Suit", "47", "24"],
      ["26", skirt, "Skirt", "12", "14"],
      ["27", wpolo, "Polo", "32", "10"],
    ],
    Bags: [
      ["28", sunMountain, "Sun Mountain", "45", "16"],
      ["29", blackDior, "Black Dior", "55", "34"],
      ["30", cartierBag, "Cartier Bag", "45", "23"],
      ["31", whitebag, "White Bag", "35", "15"],
      ["32", shoulderbag, "Shoulder", "25", "7"],
      ["33", nikeGym, "Nike GymBag", "50", "15"],
    ],
    Shoes: [
      ["34", blackShoe, "Black Shoe", "15", "10"],
      ["35", candycane, "Candy Cane", "24", "13"],
      ["36", livewireride, "LiveWire Ride", "23", "12"],
      ["37", TonyBiancoBrazen, "Tony Bianco", "55", "34"],
      ["38", winterFashion, "Winter Fashion", "45", "15"],
    ],
    Jewelry: [["39", silverware, "SilverWare", "15", "12"]],
  },

  kids: {
    Fashion: "Kids",
    sections: [
      { id: 1, type: "Clothes", img: <MdCheckroom size={40} /> },
      { id: 7, type: "Toys", img: <MdToys size={40} /> },
    ],
    Clothes: [
      ["40", Blackgown, "Black Gown", "18", "5"],
      ["41", DreamSleepSuit, "Dream Sleep Suit", "7", "15"],
      ["42", LikeABossCamouflage, "Boss Camouflage", "22", "20"],
      ["43", ny, "Newyork", "10", "10"],
      ["44", rompersuit, "RomperSuit", "20", "14"],
      ["45", cartoon, "Cartoon", "45", "9"],
    ],
    Toys: [
      ["46", assortmentkidstoys, "Assortment Toys", "40", "14"],
      ["47", babytoy, "Baby Toy", "30", "14"],
      ["48", fishercornpopper, "Corn Popper", "45", "10"],
      ["49", girafeehead, "Girafee Head", "19", "18"],
      ["50", leapfrogspin, "Leap Frog Spin", "60", "19"],
      ["51", playingtoys, "Playing Toys", "45", "22"],
      ["52", polyTurtle, "Poly Turtle", "20", "10"],
      ["53", toysTop, "Toys Top", "120", "11"],
      ["54", toytrain, "Train", "230", "20"],
      ["55", toyvector, "Toys Vector", "110", "33"],
    ],
  },
};

// Men random clothes
// const menClothes =
//   Store.men.Clothes[Math.round(Math.random() * (Store.men.Clothes.length - 1))];
// const menFurniture =
//   Store.men.Furniture[
//     Math.round(Math.random() * (Store.men.Furniture.length - 1))
//   ];
// const menElectronics =
//   Store.men.Electronics[
//     Math.round(Math.random() * (Store.men.Electronics.length - 1))
//   ];
// const menShoes =
//   Store.men.Shoes[Math.round(Math.random() * (Store.men.Shoes.length - 1))];

const menClothes = Store.men.Clothes[0];
const menFurniture = Store.men.Furniture[0];
const menElectronics = Store.men.Electronics[0];
const menShoes = Store.men.Shoes[0];
const menShoes2 = Store.men.Shoes[1];
const menClothes2 = Store.men.Clothes[1];

export const allRandomMen = [
  [menClothes[0], menClothes[1], menClothes[2], menClothes[3], menClothes[4]],
  [
    menFurniture[0],
    menFurniture[1],
    menFurniture[2],
    menFurniture[3],
    menFurniture[4],
  ],
  [
    menElectronics[0],
    menElectronics[1],
    menElectronics[2],
    menElectronics[3],
    menElectronics[4],
  ],
  [menShoes[0], menShoes[1], menShoes[2], menShoes[3], menShoes[4]],

  [
    menClothes2[0],
    menClothes2[1],
    menClothes2[2],
    menClothes2[3],
    menClothes2[4],
  ],
  [menShoes2[0], menShoes2[1], menShoes2[2], menShoes2[3], menShoes2[4]],
];

// women random clothes

// const womenClothes =
//   Store.women.Clothes[
//     Math.round(Math.random() * (Store.women.Clothes.length - 1))
//   ];
// const womenJewelry = Store.women.Jewelry[0]; // Math.round(Math.random() * Store.women.Jewelry.length - 1)

// const womenBags =
//   Store.women.Bags[Math.round(Math.random() * (Store.women.Bags.length - 1))];

// const womenShoes =
//   Store.women.Shoes[Math.round(Math.random() * (Store.women.Shoes.length - 1))];

const womenClothes = Store.women.Clothes[1];
const womenJewelry = Store.women.Jewelry[0]; // Math.round(Math.random() * Store.women.Jewelry.length - 1)
const womenBags = Store.women.Bags[0];
const womenShoes = Store.women.Shoes[0];
const womenClothes2 = Store.women.Clothes[2];
const womenBags2 = Store.women.Bags[1];

export const allRandomWomen = [
  [
    womenClothes[0],
    womenClothes[1],
    womenClothes[2],
    womenClothes[3],
    womenClothes[4],
  ],
  [
    womenJewelry[0],
    womenJewelry[1],
    womenJewelry[2],
    womenJewelry[3],
    womenJewelry[4],
  ],
  [womenBags[0], womenBags[1], womenBags[2], womenBags[3], womenBags[4]],

  [womenShoes[0], womenShoes[1], womenShoes[2], womenShoes[3], womenShoes[4]],
  [
    womenClothes2[0],
    womenClothes2[1],
    womenClothes2[2],
    womenClothes2[3],
    womenClothes2[4],
  ],
  [womenBags2[0], womenBags2[1], womenBags2[2], womenBags2[3], womenBags2[4]],
];

// kids random
// const kidsClothes =
//   Store.kids.Clothes[
//     Math.round(Math.random() * (Store.kids.Clothes.length - 1))
//   ];
// const kidsToys =
//   Store.kids.Toys[Math.round(Math.random() * (Store.kids.Toys.length - 1))];

const kidsClothes = Store.kids.Clothes[0];
const kidsToys = Store.kids.Toys[0];
const kidsClothes2 = Store.kids.Clothes[1];
const kidsToys2 = Store.kids.Toys[1];
const kidsClothes3 = Store.kids.Clothes[2];
const kidsToys3 = Store.kids.Toys[2];

export const allRandomKids = [
  [
    kidsClothes[0],
    kidsClothes[1],
    kidsClothes[2],
    kidsClothes[3],
    kidsClothes[4],
  ],
  [kidsToys[0], kidsToys[1], kidsToys[2], kidsToys[3], kidsToys[4]],
  [
    kidsClothes2[0],
    kidsClothes2[1],
    kidsClothes2[2],
    kidsClothes2[3],
    kidsClothes2[4],
  ],
  [kidsToys2[0], kidsToys2[1], kidsToys2[2], kidsToys2[3], kidsToys2[4]],
  [
    kidsClothes3[0],
    kidsClothes3[1],
    kidsClothes3[2],
    kidsClothes3[3],
    kidsClothes3[4],
  ],
  [kidsToys3[0], kidsToys3[1], kidsToys3[2], kidsToys3[3], kidsToys3[4]],
];

const allWomenProducts = [
  ...Store.women.Bags,
  ...Store.women.Jewelry,
  ...Store.women.Clothes,
  ...Store.women.Shoes,
];

const allMenProducts = [
  ...Store.men.Clothes,
  ...Store.men.Furniture,
  ...Store.men.Electronics,
  ...Store.men.Shoes,
];

const allKidsProducts = [...Store.kids.Clothes, ...Store.kids.Toys];

// ALL PRODUCTS ///////////////////////////////
let flash = [];
SlidesFlashStore.forEach((item) => {
  return flash.push([
    item.id,
    item.productImage,
    item.product,
    item.price,
    item.quantity,
  ]);
});
export const AllProducts = [
  ...allWomenProducts,
  ...allMenProducts,
  ...allKidsProducts,
  ...flash,
];
