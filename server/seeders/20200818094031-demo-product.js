'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Products', [
       {
         "id": "1",
         "product": "Computer",
         "image": "http://lorempixel.com/640/480/transport",
         "description": "Legacy Personal Loan Account Steel",
         "price": "316.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "2",
         "product": "Car",
         "image": "http://lorempixel.com/640/480/transport",
         "description": "Ameliorated",
         "price": "909.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "3",
         "product": "Shirt",
         "image": "http://lorempixel.com/640/480/food",
         "description": "heuristic",
         "price": "223.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "4",
         "product": "Chips",
         "image": "http://lorempixel.com/640/480/nightlife",
         "description": "Licensed Granite Salad Kids",
         "price": "926.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "5",
         "product": "Salad",
         "image": "http://lorempixel.com/640/480/city",
         "description": "Function-based",
         "price": "814.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "6",
         "product": "Car",
         "image": "http://lorempixel.com/640/480/food",
         "description": "platforms Haiti",
         "price": "570.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "7",
         "product": "Sausages",
         "image": "http://lorempixel.com/640/480/fashion",
         "description": "Licensed",
         "price": "498.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "8",
         "product": "Mouse",
         "image": "http://lorempixel.com/640/480/technics",
         "description": "haptic copying Hat",
         "price": "195.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "9",
         "product": "Shirt",
         "image": "http://lorempixel.com/640/480/nightlife",
         "description": "Beauty",
         "price": "695.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "10",
         "product": "Chicken",
         "image": "http://lorempixel.com/640/480/nightlife",
         "description": "Mississippi",
         "price": "84.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "11",
         "product": "Table",
         "image": "http://lorempixel.com/640/480/fashion",
         "description": "Plastic firewall Automotive",
         "price": "778.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "12",
         "product": "Pizza",
         "image": "http://lorempixel.com/640/480/city",
         "description": "withdrawal mint green Ford",
         "price": "432.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "13",
         "product": "Soap",
         "image": "http://lorempixel.com/640/480/technics",
         "description": "e-business Investment Account",
         "price": "892.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "14",
         "product": "Soap",
         "image": "http://lorempixel.com/640/480/fashion",
         "description": "mint green program",
         "price": "291.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "15",
         "product": "Hat",
         "image": "http://lorempixel.com/640/480/city",
         "description": "lime",
         "price": "119.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "16",
         "product": "Gloves",
         "image": "http://lorempixel.com/640/480/people",
         "description": "Facilitator Rapid",
         "price": "410.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "17",
         "product": "Sausages",
         "image": "http://lorempixel.com/640/480/transport",
         "description": "black payment copying",
         "price": "695.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "18",
         "product": "Pants",
         "image": "http://lorempixel.com/640/480/nature",
         "description": "port",
         "price": "574.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "19",
         "product": "Table",
         "image": "http://lorempixel.com/640/480/animals",
         "description": "target Buckinghamshire",
         "price": "626.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "20",
         "product": "Cheese",
         "image": "http://lorempixel.com/640/480/food",
         "description": "Fantastic Metal Cheese sticky Virtual",
         "price": "325.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "21",
         "product": "Table",
         "image": "http://lorempixel.com/640/480/fashion",
         "description": "Intelligent streamline Connecticut",
         "price": "396.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "22",
         "product": "Tuna",
         "image": "http://lorempixel.com/640/480/business",
         "description": "Clothing",
         "price": "393.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "23",
         "product": "Towels",
         "image": "http://lorempixel.com/640/480/nature",
         "description": "Oklahoma",
         "price": "228.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "24",
         "product": "Chair",
         "image": "http://lorempixel.com/640/480/cats",
         "description": "pixel protocol",
         "price": "380.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "25",
         "product": "Hat",
         "image": "http://lorempixel.com/640/480/sports",
         "description": "firewall",
         "price": "220.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "26",
         "product": "Table",
         "image": "http://lorempixel.com/640/480/city",
         "description": "communities Garden Identity",
         "price": "667.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "27",
         "product": "Computer",
         "image": "http://lorempixel.com/640/480/nightlife",
         "description": "input Applications",
         "price": "773.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "28",
         "product": "Sausages",
         "image": "http://lorempixel.com/640/480/transport",
         "description": "Massachusetts",
         "price": "171.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "29",
         "product": "Sausages",
         "image": "http://lorempixel.com/640/480/nature",
         "description": "directional Supervisor",
         "price": "887.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "30",
         "product": "Pizza",
         "image": "http://lorempixel.com/640/480/business",
         "description": "Viaduct Fresh",
         "price": "645.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "31",
         "product": "Pizza",
         "image": "http://lorempixel.com/640/480/food",
         "description": "Buckinghamshire Executive motivating",
         "price": "902.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "32",
         "product": "Bike",
         "image": "http://lorempixel.com/640/480/food",
         "description": "Versatile",
         "price": "18.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "33",
         "product": "Computer",
         "image": "http://lorempixel.com/640/480/transport",
         "description": "Florida Licensed Plastic Car copy",
         "price": "847.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "34",
         "product": "Chair",
         "image": "http://lorempixel.com/640/480/abstract",
         "description": "capacitor Health Mobility",
         "price": "810.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "35",
         "product": "Ball",
         "image": "http://lorempixel.com/640/480/people",
         "description": "Money Market Account Refined Metal Tuna",
         "price": "589.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "36",
         "product": "Shirt",
         "image": "http://lorempixel.com/640/480/people",
         "description": "Agent content",
         "price": "416.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "37",
         "product": "Chair",
         "image": "http://lorempixel.com/640/480/people",
         "description": "Frozen Lithuanian Litas",
         "price": "493.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "38",
         "product": "Sausages",
         "image": "http://lorempixel.com/640/480/nature",
         "description": "Mexican Peso Mexican Unidad de Inversion (UDI) Iowa",
         "price": "378.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "39",
         "product": "Pizza",
         "image": "http://lorempixel.com/640/480/technics",
         "description": "Handcrafted Profound",
         "price": "715.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "40",
         "product": "Table",
         "image": "http://lorempixel.com/640/480/city",
         "description": "paradigms SMTP International",
         "price": "762.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "41",
         "product": "Pants",
         "image": "http://lorempixel.com/640/480/city",
         "description": "bandwidth Chips",
         "price": "615.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "42",
         "product": "Car",
         "image": "http://lorempixel.com/640/480/nightlife",
         "description": "Response virtual",
         "price": "26.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "43",
         "product": "Fish",
         "image": "http://lorempixel.com/640/480/fashion",
         "description": "systematic Associate Officer",
         "price": "288.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "44",
         "product": "Soap",
         "image": "http://lorempixel.com/640/480/abstract",
         "description": "multimedia",
         "price": "687.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "45",
         "product": "Fish",
         "image": "http://lorempixel.com/640/480/transport",
         "description": "Upgradable input",
         "price": "887.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "46",
         "product": "Pizza",
         "image": "http://lorempixel.com/640/480/technics",
         "description": "National Shirt bleeding-edge",
         "price": "15.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "47",
         "product": "Chicken",
         "image": "http://lorempixel.com/640/480/city",
         "description": "Islands",
         "price": "422.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "48",
         "product": "Fish",
         "image": "http://lorempixel.com/640/480/nightlife",
         "description": "pixel FTP copy",
         "price": "864.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "49",
         "product": "Bacon",
         "image": "http://lorempixel.com/640/480/people",
         "description": "Money Market Account green",
         "price": "285.00",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         "id": "50",
         "product": "Fish",
         "image": "http://lorempixel.com/640/480/nature",
         "description": "tan vortals Credit Card Account",
         "price": "505.00",
         createdAt: new Date(),
         updatedAt: new Date()
       }
     ], {});

  },

  down: async (queryInterface, Sequelize) => {


      await queryInterface.bulkDelete('Products', null, {});

  }
};
