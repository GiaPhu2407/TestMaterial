import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: body.authorId,
      },
    });
    return NextResponse.json(
      { post, message: `Them moi thanh cong` },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: `Them moi that bai` }, { status: 201 });
  }
}
