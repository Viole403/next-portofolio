import { NextResponse } from 'next/server';
import prisma from '@lib/prisma';

export async function GET() {
  const contacts = await prisma.contactForm.findMany();

  return NextResponse.json(contacts);
}

export async function POST(req: { body: any }) {
  const { name, email, subject, contact, message } = req.body;

  const contactForm = await prisma.contactForm.create({
    data: {
      name,
      email,
      subject,
      contact,
      message,
    },
  });

  return NextResponse.json(contactForm);
}
