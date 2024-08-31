import { USER_NOT_EXIST } from "@/app/llb/constants";
import UserSchema from "@/app/llb/zod-schema/route";
import prisma from "@/prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { Id: string } }
) {
  const userId = parseInt(params.Id);
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  return NextResponse.json(
    { user, message: `Hien thi Id : ${params.Id} thành công` },
    { status: 200 }
  );
}

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: { Id: string } }
// ) {
//   const userId = Number(params.Id);
//   try {
//     const deleteUser = await prisma.user.delete({
//       where: { id: userId },
//     });
//     return NextResponse.json({ deleteUser }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json(
//       { error_code: USER_NOT_EXIST.error_code, cause: USER_NOT_EXIST.message },
//       { status: 400 }
//     );
//   }
// }

export async function DELETE(
  request: NextRequest,
  { params }: { params: { Id: string } }
) {
  const userId = Number(params.Id);
  try {
    const deleteUser = await prisma.user.delete({
      where: { id: userId },
    });
    return NextResponse.json({ deleteUser }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error_code: USER_NOT_EXIST.error_code, cause: USER_NOT_EXIST.message },
      { status: 400 }
    );
  }
}

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { Id: string } }
// ) {
//   const userId = parseInt(params.Id);
//   const body = await request.json();

//   const Check = UserSchema.safeParse({
//     email: body.email,
//     name: body.name,
//   });
//   if (!Check.success) {
//     return NextResponse.json({ error: Check.error }, { status: 200 });
//   }
//   const ue = await prisma.user.findUnique({
//     where: { email: body.email },
//   });
//   if (ue != null) {
//     return NextResponse.json({ error: "Email đã tồn tại" }, { status: 200 });
//   } else {
//     const user = await prisma.user.update({
//       where: { id: userId },
//       data: { email: body.email, name: body.name },
//     });
//     return NextResponse.json(
//       { message: `Cap nhat Id ${params.Id} thành công` },
//       { status: 400 }
//     );
//   }
// }
export async function PUT(
  request: NextRequest,
  { params }: { params: { Id: string } }
) {
  const body = await request.json();
  const userId = parseInt(params.Id);

  const Check = UserSchema.safeParse({
    email: body.email,
    name: body.name,
  });

  if (!Check.success) {
    return NextResponse.json({ error: Check.error }, { status: 200 });
  }
  const ue = await prisma.user.findUnique({
    where: { id: userId },
  });
  if (ue != null) {
    return NextResponse.json({ error: "Email da ton tai" }, { status: 400 });
  } else {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { email: body.email, name: body.name },
    });
    return NextResponse.json(
      { message: `Cap nhat Id ${params.Id} thanh cong` },
      { status: 200 }
    );
  }
}
