
import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
//Internals
//import PRODUCTS from '../../Data';
import axios from 'axios';

export function getProducts()  {

  let axiosConfig = {
    headers: {

        "Access-Control-Allow-Origin": "*",
        "Accept": "*/*",
        "Authorization": "Bearer 0b3c389a-3389-380d-9f6a-9efbd09321d4"
  }
  };


  return axios.get("https://localhost:8243/itemapi/1.0.0/order/all", axiosConfig) //FRONTEND_URL
  .then(function(res){
    console.log("RESPONSE RECEIVED: ", res);
    console.log("RESPONSE data: ", res.data);
    let products = res.data;
    return(products);
  }).catch((err) => {
    console.log("AXIOS ERROR: ", err);

  });
}










// products = [
//   {
//     id: 1,
//     name: "Brown Shirt",
//     description: "Brown T-Shirt for Women",
//     price: 16.99,
//     gender: "women",
//     type: "shirt",
//     img: "https://image.ibb.co/kOhL6k/img1.jpg",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 2,
//     name: "Light Brown Shirt",
//     description: "Light Brown Shirt for Women",
//     price: 4.99,
//     gender: "women",
//     type: "shirt",
//     img: "https://image.ibb.co/nNmKz5/img2.jpg",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 3,
//     name: "Women Grey Shirt",
//     description: "Grey Shirt for Women",
//     price: 14.99,
//     gender: "women",
//     type: "shirt",
//     img: "https://image.ibb.co/n6iMCQ/img3.jpg",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 4,
//     name: "Warm Shirt Women",
//     description: "Woolen Hoodie Women",
//     price: 20.00,
//     gender: "women",
//     type: "shirt",
//     img: "https://image.ibb.co/dVfORk/img4.jpg",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 5,
//     name: "Women Grey Shirt",
//     description: "Light Grey Shirt for Women",
//     price: 4.99,
//     gender: "women",
//     type: "shirt",
//     img: "https://image.ibb.co/jpMxmk/img5.jpg",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 6,
//     name: "Women Red/Brown Shirt",
//     description: "Red/Brown Blouse for Women",
//     price: 19.99,
//     gender: "women",
//     type: "blouse",
//     img: "https://image.ibb.co/mJppz5/img6.jpg",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 7,
//     name: "Dark Grey Shirt Women",
//     description: "Dark Grey Shirt for Women",
//     price: 6.00,
//     gender: "women",
//     type: "shirt",
//     img: "https://image.ibb.co/eZiSmk/img7.jpg",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 8,
//     name: "White Shirt Women",
//     description: "White Shirt for Women",
//     price: 14.99,
//     gender: "women",
//     type: "shirt",
//     img: "https://image.ibb.co/jWiMnJ/download.jpg",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 9,
//     name: "Black Shirt Women",
//     description: "Black Shirt for Women",
//     price: 20.99,
//     gender: "women",
//     type: "shirt",
//     img: "https://image.ibb.co/eOYre5/img10.jpg",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 10,
//     name: "No Shoulder Hoodie",
//     description: "Hoodie for Women",
//     price: 4.99,
//     gender: "women",
//     type: "shirt",
//     img: "https://image.ibb.co/f6gcK5/img9.jpg",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 11,
//     name: "Women Watch Gold",
//     description: "Golden Watch for Women",
//     price: 45.99,
//     gender: "women",
//     type: "watch",
//     img: "https://images.pexels.com/photos/69046/watch-wrist-watch-packshot-time-69046.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
//     inCart: false,
//     category: "accessories"
//   },
//   {
//     id: 12,
//     name: "Black Pearl Necklace",
//     description: "Black Pearl Necklace for Women",
//     price: 14.99,
//     gender: "women",
//     type: "necklace",
//     img: "https://images.pexels.com/photos/221550/pexels-photo-221550.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
//     inCart: false,
//     category: "accessories"
//   },
//   {
//     id: 13,
//     name: "Man Black Shirt",
//     description: "Black T-Shirt for Men",
//     price: 10.99,
//     gender: "men",
//     type: "shirt",
//     img: "http://media.istockphoto.com/photos/smiling-young-man-in-blank-black-tshirt-picture-id464946525?k=6&m=464946525&s=612x612&w=0&h=KAjCFoJGDcFcx8R33Tq1vzqbfixh1XwGpFeiRNoTkRQ=",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 14,
//     name: "Man Grey Tanktop",
//     description: "Grey Tanktop for Men",
//     price: 14.99,
//     gender: "men",
//     type: "shirt",
//     img: "http://media.istockphoto.com/photos/portrait-of-young-man-wearing-tshirt-picture-id465207699?k=6&m=465207699&s=612x612&w=0&h=wSacC0bmcrekig1DW8lOwH7y3X0e4R9266-TuivVQJA=",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 15,
//     name: "Man White Shirt",
//     description: "White Shirt for Men",
//     price: 20.99,
//     gender: "men",
//     type: "shirt",
//     img: "http://media.istockphoto.com/photos/young-man-wearing-a-white-shirt-picture-id465331977?k=6&m=465331977&s=612x612&w=0&h=-K3c5eE2dZGmg6d5BrBfxOvcHRP7PwHrylyjuEVjbZo=",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 16,
//     name: "Man Brown Shirt",
//     description: "Brown Shirt for Men",
//     price: 13.99,
//     gender: "men",
//     type: "shirt",
//     img: "http://www.theethicalman.com/uploads/4/8/0/0/4800645/3035404_orig.png",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 17,
//     name: "Man Black Tie",
//     description: "Black Tie for Men",
//     price: 13.99,
//     gender: "men",
//     type: "tie",
//     img: "http://www.theethicalman.com/uploads/4/8/0/0/4800645/3035404_orig.png",
//     inCart: false,
//     category: "accessories"
//   },
//   {
//     id: 18,
//     name: "Black Shirt Men",
//     description: "Black Shirt for Men",
//     price: 9.99,
//     gender: "men",
//     type: "shirt",
//     img: "http://media.istockphoto.com/photos/smiling-man-in-a-black-t-shirt-picture-id520883622?k=6&m=520883622&s=612x612&w=0&h=XuxfQE0EOo_uWqA8SzNJvZ9Vn-sKR_cT4J9GRIudE4U=",
//     inCart: false,
//     category: "clothes"
//   },
//   {
//     id: 19,
//     name: "4-Pack Man Ties",
//     description: "Ties for Men",
//     price: 35.99,
//     gender: "men",
//     type: "tie",
//     img: "http://www.theethicalman.com/uploads/4/8/0/0/4800645/3035404_orig.png",
//     inCart: false,
//     category: "accessories"
//   },
//   {
//     id: 20,
//     name: "Man Black Tie",
//     description: "Black Tie for Men",
//     price: 15.99,
//     gender: "men",
//     type: "tie",
//     img: "http://static.becomegorgeous.com/img/articles/what_does_your_mans_tie_tell_about_his_personality_.jpg",
//     inCart: false,
//     category: "accessories"
//   },
// ];

// export default getProducts;
 //export default products;
