// src/app/api/auth/signup/route.js

import { NextResponse, NextRequest  } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import User from '@/models/user';

export async function POST(req: NextRequest ) {
  try {
    const { name, email, password } = await req.json();
    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong',err }, { status: 500 });
  }
}
