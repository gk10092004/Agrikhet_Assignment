import { NextResponse } from 'next/server'

const products = [
  {
    id: 1,
    name: "Organic Almonds",
    image: ["/demo.webp","/demo2.webp"],
    price: 299,
    category: "Snacks",
    description: "Fresh organic almonds, perfect for snacking.Indulge in the wholesome goodness of our Organic Almonds, sourced from the finest organic farms and cultivated using sustainable farming practices. These premium-grade almonds are packed with essential nutrients, making them the perfect guilt-free snack for health-conscious individuals.",
    available: true,
    delivery: "30 mins",
  },
  {
    id: 2,
    name: "Cold Brew Coffee",
    image: ["/demo.webp","/demo2.webp"],
    price: 199,
    category: "Beverages",
    description: "Chilled cold brew coffee, ready to drink.",
    available: true,
    delivery: "20 mins",
  },
  {
    id: 3,
    name: "Protein Bar",
    image: ["/demo.webp","/demo2.webp"],
    price: 99,
    category: "Snacks",
    description: "High-protein bar for your fitness needs.",
    available: true,
    delivery: "N/A",
  },
  {
    id: 4,
    name: "Protein Bar",
    image: ["/demo.webp","/demo2.webp"],
    price: 99,
    category: "Wines",
    description: "High-protein bar for your fitness needs.",
    available: true,
    delivery: "N/A",
  },
  {
    id: 5,
    name: "Protein Bar",
    image: ["/demo.webp","/demo2.webp"],
    price: 99,
    category: "Beverages",
    description: "High-protein bar for your fitness needs.",
    available: true,
    delivery: "N/A",
  },
  {
    id:6,
    name: "Protein Bar Cocolate",
    image: ["/demo.webp","/demo2.webp"],
    price: 99,
    category: "Snacks",
    description: "High-protein bar for your fitness needs.",
    available: true,
    delivery: "N/A",
  },
  {
    id:7,
    name: "Bar Cocolate",
    image: ["/demo.webp","/demo2.webp"],
    price: 99,
    category: "Snacks",
    description: "High-protein bar for your fitness needs.",
    available: true,
    delivery: "N/A",
  },
  {
    id:8,
    name: "Protein  Cocolate",
    image: ["/demo.webp","/demo2.webp"],
    price: 99,
    category: "Snacks",
    description: "High-protein bar for your fitness needs.",
    available: true,
    delivery: "N/A",
  },
  {
    id:9,
    name: "Protein",
    image: ["/demo.webp","/demo2.webp"],
    price: 99,
    category: "Snacks",
    description: "High-protein bar for your fitness needs.",
    available: true,
    delivery: "N/A",
  },
  // Add more products as needed
]

export async function GET() {
  return NextResponse.json(products)
}
