import { NextResponse } from 'next/server'

type CartItem = {
    id: number
    name: string
    price: number
    quantity: number
    image?: string 
  }
  
  let cart: CartItem[] = []

export async function GET() {
  return NextResponse.json(cart)
}

export async function POST(request: Request) {
  const item = await request.json()
  const existing = cart.find(i => i.id === item.id)
  if (existing) {
    existing.quantity += item.quantity
  } else {
    cart.push({ ...item, quantity: item.quantity })
  }
  return NextResponse.json(cart)
}

export async function PUT(request: Request) {
  const { id, quantity } = await request.json()
  cart = cart.map(item => item.id === id ? { ...item, quantity } : item)
  return NextResponse.json(cart)
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  cart = cart.filter(item => item.id !== id)
  return NextResponse.json(cart)
}
