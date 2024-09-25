import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '@clerk/nextjs/server';
import { ObjectId }from 'mongodb'

const prisma = new PrismaClient();

// Create a Skill (POST request)
export async function POST(req: Request) {
  try {
    const { userId } = auth();

    const { skillName, progressLevel } = await req.json();

    if (!userId || !skillName || !progressLevel) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const skill = await prisma.skill.create({
      data: {
        userId,
        skillName,
        progressLevel,
      },
    });

    return NextResponse.json(skill, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating skill' }, { status: 500 });
  }
}

// Get all Skills for a specific user (GET request)
export async function GET(req: Request) {
  try {
    // Assuming we get the userId from the request's query params or headers
    const { searchParams } = new URL(req.url);
    const { userId } = auth()
    //console.log(userId)

    if (!userId) {
      return NextResponse.json({ message: 'Missing userId' }, { status: 400 });
    }

    const skills = await prisma.skill.findMany({
      where: { userId },
    });

    //console.log(skills)

    return NextResponse.json(skills, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error retrieving skills' }, { status: 500 });
  }
}

// Update a Skill (PUT request)
export async function PUT(req: Request) {
  try {
    const { id, skillName, progressLevel, lastPracticed } = await req.json();

    if (!id) {
      return NextResponse.json({ message: 'Skill ID is required' }, { status: 400 });
    }

    const updatedSkill = await prisma.skill.update({
      where: { id },
      data: {
        skillName,
        progressLevel,
        lastPracticed,
      },
    });

    return NextResponse.json(updatedSkill, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error updating skill' }, { status: 500 });
  }
}

// Delete a Skill (DELETE request)
export async function DELETE(req: Request) {
  try {
    console.log("Received DELETE request");
    
    const { id } = await req.json();
    console.log("Received ID for deletion:", id); // Add this log

    if (!id) {
      return NextResponse.json({ message: 'Skill ID is required' }, { status: 400 });
    }

    const objectId = new ObjectId(id); 
    console.log("Converted ObjectId:", objectId);  // Log the ObjectId

    const skill = await prisma.skill.delete({
      where: { id: objectId.toString() },
    });

    return NextResponse.json({ message: 'Skill deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting skill:', error);
    return NextResponse.json({ message: 'Error deleting skill', error }, { status: 500 });
  }
}

