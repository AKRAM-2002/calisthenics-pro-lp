import { NextResponse } from 'next/server';
import { currentUser, auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // Get user's information
  const user = await currentUser();
  if (!user) {
    return new NextResponse('User not exist', { status: 404 });
  }

  let dbUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkUserId: user.id,
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        email: user.emailAddresses[0].emailAddress ?? '',
      },
    });
  }
  
      
      

//   if (!dbUser) {
//     return new NextResponse(null, {
//       status: 302, // 302 Found - temporary redirect
//       headers: {
//         Location: 'https://calisthenics-pro-lp.vercel.app/api/auth/new-user',
//       },
//     });
//   }
  // Perform your Route Handler's logic with the returned user object

//   return new NextResponse(null, {
//     status: 302, // 302 Found - temporary redirect
//     headers: {
//       Location: 'https://calisthenics-pro-lp.vercel.app/dashboard',
//     },
//   });

}