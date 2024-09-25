import { NextResponse } from 'next/server';
import { currentUser, auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request){
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Get user's information
    const user = await currentUser();
    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }

    // Log user info for debugging
    console.log("Clerk user:", user);

    // Find or create the user in your database
    let dbUser = await prisma.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          clerkUserId: user.id,
          firstName: user.firstName ?? '',
          lastName: user.lastName ?? '',
          email: user.emailAddresses[0]?.emailAddress ?? '',
        },
      });
    }

    // Log dbUser for debugging
    console.log("Database user:", dbUser);

    // redirect user to dashboard
    // Get host from request headers
    const host = request.headers.get('host');
    const protocol = host?.includes('localhost') ? 'http' : 'https';
    const dashboardUrl = `${protocol}://${host}/dashboard`;

    // Redirect user to the dashboard
    return NextResponse.redirect(dashboardUrl);

    // Return a success message to the client
    // return new NextResponse(JSON.stringify({ message: 'User exists or was created successfully' }), {
    //     status: 200,
    //     headers: { 'Content-Type': 'application/json' },
    //   });


  } catch (error) {
    console.error("Error handling user:", error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}