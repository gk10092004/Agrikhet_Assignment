import { NextResponse } from 'next/server'




/*
const moreCategories: string[] = [
  "Cleaning Supplies",
  "Stationery",
  "Electronics",
  "Gardening Tools",
  "Home Decor",
  "Kitchen Appliances",
  "Poultry & Eggs",
  "Dry Fruits & Nuts",
  "Baking Essentials",
  "Canned & Jarred Foods",
  "Energy Drinks",
  "Ready-to-Eat Meals",
  "Cooking Oils",
  "Pasta & Noodles",
  "Herbal Products"
];

sample_products = {
    "Snacks": ["Potato Chips", "Popcorn", "Granola Bars", "Trail Mix", "Pretzels", "Crackers", "Nachos", "Energy Bites", "Rice Cakes", "Corn Puffs"],
    "Beverages": ["Cold Brew Coffee", "Lemonade", "Iced Tea", "Fruit Juice", "Sparkling Water", "Smoothie", "Soda", "Milkshake", "Energy Drink", "Herbal Tea"],
    "Fruits & Vegetables": ["Apple", "Banana", "Carrot", "Broccoli", "Tomato", "Spinach", "Orange", "Grapes", "Lettuce", "Cucumber"],
    "Dairy Products": ["Milk", "Cheese", "Butter", "Yogurt", "Cream", "Paneer", "Ghee", "Buttermilk", "Curd", "Condensed Milk"],
    "Bakery Items": ["Bread", "Croissant", "Muffin", "Bagel", "Cake", "Pastry", "Donut", "Bun", "Roll", "Tart"],
    "Personal Care": ["Shampoo", "Soap", "Toothpaste", "Face Wash", "Moisturizer", "Deodorant", "Conditioner", "Sunscreen", "Lotion", "Lip Balm"],
    "Household Essentials": ["Dish Soap", "Laundry Detergent", "Toilet Paper", "Tissues", "Disinfectant", "Garbage Bags", "Mop", "Broom", "Air Freshener", "Cleaner"],
    "Health & Wellness": ["Vitamins", "Protein Powder", "First Aid Kit", "Hand Sanitizer", "Thermometer", "Bandages", "Supplements", "Pain Reliever", "Mask", "Gloves"],
    "Organic Foods": ["Organic Rice", "Organic Lentils", "Organic Flour", "Organic Sugar", "Organic Vegetables", "Organic Fruits", "Organic Milk", "Organic Honey", "Organic Tea", "Organic Coffee"],
    "Frozen Foods": ["Frozen Peas", "Frozen Corn", "Frozen Pizza", "Frozen Fries", "Frozen Berries", "Frozen Chicken", "Frozen Fish", "Frozen Paratha", "Frozen Nuggets", "Frozen Vegetables"],
    "Grains & Cereals": ["Rice", "Wheat Flour", "Oats", "Barley", "Millet", "Quinoa", "Cornmeal", "Broken Wheat", "Semolina", "Cereal Mix"],
    "Spices & Condiments": ["Salt", "Pepper", "Cumin", "Turmeric", "Chili Powder", "Garam Masala", "Coriander", "Cinnamon", "Mustard", "Soy Sauce"],
    "Baby Care": ["Baby Shampoo", "Diapers", "Baby Lotion", "Baby Powder", "Baby Oil", "Baby Wipes", "Baby Food", "Nipple Cream", "Teether", "Pacifier"],
    "Pet Supplies": ["Dog Food", "Cat Food", "Pet Shampoo", "Litter Box", "Pet Toys", "Leash", "Pet Bed", "Pet Bowl", "Bird Feed", "Aquarium Cleaner"],
    "Meat & Seafood": ["Chicken Breast", "Prawns", "Salmon", "Mutton", "Crab", "Fish Fillet", "Bacon", "Sausages", "Lobster", "Turkey"]
}

 */



type Product = {
  id: number;
  name: string;
  image: string[];
  price: number;
  category: string;
  description: string;
  available: boolean;
  delivery: string;
};

type DeliveryTime = string[];


const products : Product[] = [
  {
    "id": 1,
    "name": "Potato Chips",
    "image": [
      "/snacks/001_potato_chips/1.jpg",
      "/snacks/001_potato_chips/2.jpg",
      "/snacks/001_potato_chips/3.jpg",
      "/snacks/001_potato_chips/4.jpg",
    ],
    "price": 220,
    "category": "Snacks",
    "description": "Potato Chips is a top choice in our Snacks section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 2,
    "name": "Popcorn",
    "image": [
      "/snacks/002_popcorn/1.jpg",
      "/snacks/002_popcorn/2.jpg",
      "/snacks/002_popcorn/3.jpg",
      
    ],
    "price": 244,
    "category": "Snacks",
    "description": "Popcorn is a top choice in our Snacks section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": false,
    "delivery": "N/A"
  },
  {
    "id": 3,
    "name": "Granola Bars",
    "image": [
      "/snacks/003_granola_bars/1.jpg",
  "/snacks/003_granola_bars/2.jpg",
  "/snacks/003_granola_bars/3.jpg",
  
    ],
    "price": 110,
    "category": "Snacks",
    "description": "Granola Bars is a top choice in our Snacks section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 4,
    "name": "Trail Mix",
    "image": [
      "/snacks/004_trail_mix/1.jpg",
  "/snacks/004_trail_mix/2.jpg",
  "/snacks/004_trail_mix/3.jpg",
  "/snacks/004_trail_mix/4.jpg",
    ],
    "price": 390,
    "category": "Snacks",
    "description": "Trail Mix is a top choice in our Snacks section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 5,
    "name": "Pretzels",
    "image": [
      "/snacks/005_pretzels/1.jpg",
  "/snacks/005_pretzels/2.jpg",
  "/snacks/005_pretzels/3.jpg",
  
    ],
    "price": 378,
    "category": "Snacks",
    "description": "Pretzels is a top choice in our Snacks section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 6,
    "name": "Crackers",
    "image": [
      
  "/snacks/006_crackers/1.jpg",
  "/snacks/006_crackers/2.jpg",
  "/snacks/006_crackers/3.jpg",
  
    ],
    "price": 157,
    "category": "Snacks",
    "description": "Crackers is a top choice in our Snacks section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 7,
    "name": "Nachos",
    "image": [
      
  "/snacks/007_nachos/1.jpg",
  "/snacks/007_nachos/2.jpg",
  "/snacks/007_nachos/3.jpg",
  
    ],
    "price": 155,
    "category": "Snacks",
    "description": "Nachos is a top choice in our Snacks section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 8,
    "name": "Energy Bites",
    "image": [
      "/snacks/008_energy_bites/1.jpg",
  "/snacks/008_energy_bites/2.jpg",
  
    ],
    "price": 472,
    "category": "Snacks",
    "description": "Energy Bites is a top choice in our Snacks section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 9,
    "name": "Rice Cakes",
    "image": [
      "/snacks/009_rice_cakes/1.jpg",
  "/snacks/009_rice_cakes/2.jpg",
  "/snacks/009_rice_cakes/3.jpg",
  
    ],
    "price": 392,
    "category": "Snacks",
    "description": "Rice Cakes is a top choice in our Snacks section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 10,
    "name": "Corn Puffs",
    "image": [
      
  "/snacks/010_corn_puffs/1.jpg",
  "/snacks/010_corn_puffs/2.jpg",
  "/snacks/010_corn_puffs/3.jpg",
  "/snacks/010_corn_puffs/4.jpg"
    ],
    "price": 360,
    "category": "Snacks",
    "description": "Corn Puffs is a top choice in our Snacks section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 11,
    "name": "Cold Brew Coffee",
    "image": [
      "/beverages/001_cold_brew_coffee/1.jpg",
  "/beverages/001_cold_brew_coffee/2.jpg",
  "/beverages/001_cold_brew_coffee/3.jpg",
  
    ],
    "price": 179,
    "category": "Beverages",
    "description": "Cold Brew Coffee is a top choice in our Beverages section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 12,
    "name": "Lemonade",
    "image": [
      "/beverages/002_lemonade/1.jpg",
  "/beverages/002_lemonade/2.jpg",
  "/beverages/002_lemonade/3.jpg",
  
    ],
    "price": 321,
    "category": "Beverages",
    "description": "Lemonade is a top choice in our Beverages section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 13,
    "name": "Iced Tea",
    "image": [
      
  "/beverages/003_iced_tea/1.jpg",
  "/beverages/003_iced_tea/2.jpg",
  
    ],
    "price": 136,
    "category": "Beverages",
    "description": "Iced Tea is a top choice in our Beverages section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 14,
    "name": "Fruit Juice",
    "image": [
      "/beverages/004_fruit_juice/1.jpg",
  "/beverages/004_fruit_juice/2.jpg",
  
    ],
    "price": 331,
    "category": "Beverages",
    "description": "Fruit Juice is a top choice in our Beverages section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 15,
    "name": "Sparkling Water",
    "image": [
      
  "/beverages/005_sparkling_water/1.jpg",
  "/beverages/005_sparkling_water/2.jpg",
  
    ],
    "price": 402,
    "category": "Beverages",
    "description": "Sparkling Water is a top choice in our Beverages section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 16,
    "name": "Smoothie",
    "image": [
      
  "/beverages/006_smoothie/1.jpg",
  "/beverages/006_smoothie/2.jpg",
  

    ],
    "price": 335,
    "category": "Beverages",
    "description": "Smoothie is a top choice in our Beverages section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 17,
    "name": "Soda",
    "image": [
      "/beverages/007_soda/1.jpg",
  "/beverages/007_soda/2.jpg",
  
    ],
    "price": 237,
    "category": "Beverages",
    "description": "Soda is a top choice in our Beverages section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 18,
    "name": "Milkshake",
    "image": [
      
  "/beverages/008_milkshake/1.jpg",
  "/beverages/008_milkshake/2.jpg",
  

    ],
    "price": 457,
    "category": "Beverages",
    "description": "Milkshake is a top choice in our Beverages section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 19,
    "name": "Energy Drink",
    "image": [
      "/beverages/009_energy_drink/1.jpg",
      "/beverages/009_energy_drink/2.jpg",
      "/beverages/009_energy_drink/3.jpg",
      
    
    ],
    "price": 209,
    "category": "Beverages",
    "description": "Energy Drink is a top choice in our Beverages section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 20,
    "name": "Herbal Tea",
    "image": [
      "/beverages/010_herbal_tea/1.jpg",
  "/beverages/010_herbal_tea/2.jpg",
  "/beverages/010_herbal_tea/3.jpg",
  
    ],
    "price": 387,
    "category": "Beverages",
    "description": "Herbal Tea is a top choice in our Beverages section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 21,
    "name": "Apple",
    "image": [
      "/fruits_vegetables/001_apple/1.jpg",
  "/fruits_vegetables/001_apple/2.jpg",
  

    ],
    "price": 244,
    "category": "Fruits & Vegetables",
    "description": "Apple is a top choice in our Fruits & Vegetables section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 22,
    "name": "Banana",
    "image": [
      "/fruits_vegetables/002_banana/1.jpg",
  "/fruits_vegetables/002_banana/2.jpg",
  "/fruits_vegetables/002_banana/3.jpg",
  
    ],
    "price": 413,
    "category": "Fruits & Vegetables",
    "description": "Banana is a top choice in our Fruits & Vegetables section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 23,
    "name": "Carrot",
    "image": [
      
  "/fruits_vegetables/003_carrot/1.jpg",
  "/fruits_vegetables/003_carrot/2.jpg",
  "/fruits_vegetables/003_carrot/3.jpg",
  
    ],
    "price": 486,
    "category": "Fruits & Vegetables",
    "description": "Carrot is a top choice in our Fruits & Vegetables section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 24,
    "name": "Broccoli",
    "image": [
      "/fruits_vegetables/004_broccoli/1.jpg",
  "/fruits_vegetables/004_broccoli/2.jpg",
  "/fruits_vegetables/004_broccoli/3.jpg",
  

    ],
    "price": 226,
    "category": "Fruits & Vegetables",
    "description": "Broccoli is a top choice in our Fruits & Vegetables section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 25,
    "name": "Tomato",
    "image": [
      "/fruits_vegetables/005_tomato/1.jpg",
  "/fruits_vegetables/005_tomato/2.jpg",
  "/fruits_vegetables/005_tomato/3.jpg",
  "/fruits_vegetables/005_tomato/4.jpg",
    ],
    "price": 162,
    "category": "Fruits & Vegetables",
    "description": "Tomato is a top choice in our Fruits & Vegetables section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 31,
    "name": "Milk",
    "image": [
      "/dairy_products/001_milk/1.jpg",
  "/dairy_products/001_milk/2.jpg",
  "/dairy_products/001_milk/3.jpg",
  
    ],
    "price": 388,
    "category": "Dairy Products",
    "description": "Milk is a top choice in our Dairy Products section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 32,
    "name": "Cheese",
    "image": [
      "/dairy_products/002_cheese/1.jpg",
  "/dairy_products/002_cheese/2.jpg",
  "/dairy_products/002_cheese/3.jpg",
  
    ],
    "price": 364,
    "category": "Dairy Products",
    "description": "Cheese is a top choice in our Dairy Products section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 33,
    "name": "Butter",
    "image": [
      "/dairy_products/003_butter/1.jpg",
  "/dairy_products/003_butter/2.jpg",
  "/dairy_products/003_butter/3.jpg",
  
    ],
    "price": 465,
    "category": "Dairy Products",
    "description": "Butter is a top choice in our Dairy Products section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 34,
    "name": "Yogurt",
    "image": [
      
  "/dairy_products/004_yogurt/1.jpg",
  "/dairy_products/004_yogurt/2.jpg",
  "/dairy_products/004_yogurt/3.jpg",
  
    ],
    "price": 412,
    "category": "Dairy Products",
    "description": "Yogurt is a top choice in our Dairy Products section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 35,
    "name": "Cream",
    "image": [
      "/dairy_products/005_cream/1.jpg",
  "/dairy_products/005_cream/2.jpg",
  "/dairy_products/005_cream/3.jpg",
  
    ],
    "price": 274,
    "category": "Dairy Products",
    "description": "Cream is a top choice in our Dairy Products section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 41,
    "name": "Bread",
    "image": [
      "/bakery_items/001_bread/1.jpg",
  "/bakery_items/001_bread/2.jpg",
  "/bakery_items/001_bread/3.jpg",
  
    ],
    "price": 65,
    "category": "Bakery Items",
    "description": "Bread is a top choice in our Bakery Items section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 42,
    "name": "Croissant",
    "image": [
      "/bakery_items/002_croissant/1.jpg",
  "/bakery_items/002_croissant/2.jpg",
  "/bakery_items/002_croissant/3.jpg",
  
    ],
    "price": 75,
    "category": "Bakery Items",
    "description": "Croissant is a top choice in our Bakery Items section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 43,
    "name": "Muffin",
    "image": [
      "/bakery_items/003_muffin/1.jpg",
  "/bakery_items/003_muffin/2.jpg",
  "/bakery_items/003_muffin/3.jpg",
  
    ],
    "price": 352,
    "category": "Bakery Items",
    "description": "Muffin is a top choice in our Bakery Items section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 44,
    "name": "Bagel",
    "image": [
      "/bakery_items/004_bagel/1.jpg",
  "/bakery_items/004_bagel/2.jpg",
  "/bakery_items/004_bagel/3.jpg",
  

    ],
    "price": 251,
    "category": "Bakery Items",
    "description": "Bagel is a top choice in our Bakery Items section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 45,
    "name": "Cake",
    "image": [
      "/bakery_items/005_cake/1.jpg",
      "/bakery_items/005_cake/2.jpg",
      "/bakery_items/005_cake/3.jpg",
      
    
    ],
    "price": 340,
    "category": "Bakery Items",
    "description": "Cake is a top choice in our Bakery Items section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 46,
    "name": "Pastry",
    "image": [
      "/bakery_items/006_pastry/1.jpg",
      "/bakery_items/006_pastry/2.jpg",
      "/bakery_items/006_pastry/3.jpg",
      "/bakery_items/006_pastry/4.jpg",
    ],
    "price": 173,
    "category": "Bakery Items",
    "description": "Pastry is a top choice in our Bakery Items section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 51,
    "name": "Shampoo",
    "image": [
      "/personal_care/001_shampoo/1.jpg",
  "/personal_care/001_shampoo/2.jpg",
  "/personal_care/001_shampoo/3.jpg",
  
    ],
    "price": 143,
    "category": "Personal Care",
    "description": "Shampoo is a top choice in our Personal Care section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 52,
    "name": "Soap",
    "image": [
      
  "/personal_care/002_soap/1.jpg",
  "/personal_care/002_soap/2.jpg",
  "/personal_care/002_soap/3.jpg",
  "/personal_care/002_soap/4.jpg",
    ],
    "price": 114,
    "category": "Personal Care",
    "description": "Soap is a top choice in our Personal Care section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  
  {
    "id": 72,
    "name": "Protein Powder",
    "image": [
      
  "/health_wellness/001_protein_powder/1.jpg",
  "/health_wellness/001_protein_powder/2.jpg",
  
    ],
    "price": 147,
    "category": "Health & Wellness",
    "description": "Protein Powder is a top choice in our Health & Wellness section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 73,
    "name": "First Aid Kit",
    "image": [
      "/health_wellness/003_first_aid_kit/1.jpg",
      "/health_wellness/003_first_aid_kit/2.jpg",
      "/health_wellness/003_first_aid_kit/3.jpg",
      
    ],
    "price": 486,
    "category": "Health & Wellness",
    "description": "First Aid Kit is a top choice in our Health & Wellness section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 74,
    "name": "Hand Sanitizer",
    "image": [
      
  "/health_wellness/004_hand_sanitizer/1.jpg",
  "/health_wellness/004_hand_sanitizer/2.jpg",
  "/health_wellness/004_hand_sanitizer/3.jpg",
  
    ],
    "price": 159,
    "category": "Health & Wellness",
    "description": "Hand Sanitizer is a top choice in our Health & Wellness section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 75,
    "name": "Thermometer",
    "image": [
      
  "/health_wellness/005_thermometer/1.jpg",
  "/health_wellness/005_thermometer/2.jpg",
  "/health_wellness/005_thermometer/3.jpg",
  
    ],
    "price": 170,
    "category": "Health & Wellness",
    "description": "Thermometer is a top choice in our Health & Wellness section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 101,
    "name": "Rice",
    "image": [
"/grains_cereals/001_rice/1.jpg",
  "/grains_cereals/001_rice/2.jpg",
  "/grains_cereals/001_rice/3.jpg",
    ],
    "price": 444,
    "category": "Grains & Cereals",
    "description": "Rice is a top choice in our Grains & Cereals section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 102,
    "name": "Wheat Flour",
    "image": [
      
  "/grains_cereals/002_wheat_flour/1.jpg",
  "/grains_cereals/002_wheat_flour/2.jpg",
  "/grains_cereals/002_wheat_flour/3.jpg",
  
    ],
    "price": 379,
    "category": "Grains & Cereals",
    "description": "Wheat Flour is a top choice in our Grains & Cereals section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 103,
    "name": "Oats",
    "image": [
      
  "/grains_cereals/003_oats/1.jpg",
  "/grains_cereals/003_oats/2.jpg",
  "/grains_cereals/003_oats/3.jpg",
  
    ],
    "price": 438,
    "category": "Grains & Cereals",
    "description": "Oats is a top choice in our Grains & Cereals section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 104,
    "name": "Barley",
    "image": [
      
  "/grains_cereals/004_barley/1.jpg",
  "/grains_cereals/004_barley/2.jpg",
    ],
    "price": 472,
    "category": "Grains & Cereals",
    "description": "Barley is a top choice in our Grains & Cereals section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 105,
    "name": "Millet",
    "image": [
"/grains_cereals/005_millet/1.jpg",
  "/grains_cereals/005_millet/2.jpg",
  "/grains_cereals/005_millet/3.jpg",
  

    ],
    "price": 272,
    "category": "Grains & Cereals",
    "description": "Millet is a top choice in our Grains & Cereals section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 106,
    "name": "Quinoa",
    "image": [
      "/grains_cereals/006_quinoa/1.jpg",
  "/grains_cereals/006_quinoa/2.jpg",
  "/grains_cereals/006_quinoa/3.jpg",
  
    ],
    "price": 108,
    "category": "Grains & Cereals",
    "description": "Quinoa is a top choice in our Grains & Cereals section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 131,
    "name": "Dog Food",
    "image": [
      "/pet_supplies/001_dog_food/1.jpg",
  "/pet_supplies/001_dog_food/2.jpg",
  "/pet_supplies/001_dog_food/3.jpg",
  "/pet_supplies/001_dog_food/4.jpg",
    ],
    "price": 320,
    "category": "Pet Supplies",
    "description": "Dog Food is a top choice in our Pet Supplies section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  },
  {
    "id": 132,
    "name": "Cat Food",
    "image": [
      "/pet_supplies/002_cat_food/1.jpg",
  "/pet_supplies/002_cat_food/2.jpg",
  "/pet_supplies/002_cat_food/3.jpg"
    ],
    "price": 346,
    "category": "Pet Supplies",
    "description": "Cat Food is a top choice in our Pet Supplies section. Carefully selected to provide you with the best experience in terms of quality, taste, and value. Perfect for everyday use or special occasions.",
    "available": true,
    "delivery": "N/A"
  }
];

const deliveryTimes :DeliveryTime = [
  "10 min",
  "15 min",
  "20 min",
  "25 min",
  "30 min",
  "35 min",
  "40 min",
  "45 min",
  "50 min",
  "1 hour"
];

const updateDeliveryTimes = (products: Product[], deliveryTimes: DeliveryTime): Product[] => {
  return products.map(product => ({
    ...product,
    delivery: deliveryTimes[Math.floor(Math.random() * deliveryTimes.length)]
  }));
}
  


const finalProduct = updateDeliveryTimes(products, deliveryTimes);


export async function GET() {
  return NextResponse.json(finalProduct)
}
