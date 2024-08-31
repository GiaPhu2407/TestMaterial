import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  const user = await prisma.user.findMany();
  return NextResponse.json(
    { user, message: `OK` },
    { status: 200, statusText: `OKE ` }
  );
}
// export async function POST(request: NextRequest) {
//   const body = await request.json();

//   const UserSchema = z.object({
//     email: z.string().email({ message: "Email khong hop le" }),
//     name: z
//       .string()
//       .min(8, { message: "Tên cần dài hơn hoặc bằng 8 kí tự" })
//       .max(255, { message: "Tên có độ dài tối đa là 255 kí tự" }),
//   });

//   const userValidateCheck = UserSchema.safeParse({
//     email: body.email,
//     name: body.name,
//   });

//   if (!userValidateCheck.success) {
//     return NextResponse.json(userValidateCheck.error.errors, { status: 200 });
//   } else {
//     const ue = await prisma.user.findUnique({
//       where: { email: body.email },
//     });
//     if (ue == null) {
//       const user = await prisma.user.create({
//         data: {
//           email: body.email,
//           name: body.name,
//         },
//       });
//       return NextResponse.json(
//         { user, message: `Thêm mới thành công` },
//         { status: 201 }
//       );
//     } else {
//       return NextResponse.json(
//         { message: "Email đã tồn tại" },
//         { status: 200 }
//       );
//     }
//     //   // c. Tiến hành thêm mới dữ liệu vào DB sử dụng prisma client
//     //   const user = await prisma.user.create({
//     //     data: {
//     //       email: body.email,
//     //       name: body.name,
//     //     },
//     //   });
//     //   //d. Trả về kết quả là dữ liệu vừa được tạo cùng với status:201
//     //   return NextResponse.json(
//     //     { user, message: `Thêm mới thành công` },
//     //     { status: 201 }
//     //   );
//     // }
//   }
// }

export async function POST(request: NextRequest) {
  const body = await request.json();

  const UserSchema = z.object({
    email: z.string().email({ message: "Email khong hop le" }),
    name: z
      .string()
      .min(8, { message: "Ten phai dai hon 8 ky" })
      .max(255, { message: "Ten khong duoc qua 255 ky tu" }),
  });
  const Check = UserSchema.safeParse({
    email: body.email,
    name: body.name,
  });
  if (!Check.success) {
    return NextResponse.json(Check.error.errors, { status: 201 });
  } else {
    const ue = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (ue == null) {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
        },
      });
      return NextResponse.json(
        { user, message: `Them moi thanh cong` },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: `Email da ton tai` },
        { status: 200 }
      );
    }
  }
}

export async function DELETE(request: NextRequest) {
  const user = await prisma.user.deleteMany();
  return NextResponse.json(
    { user, message: `Xoa thanh cong` },
    { status: 200 }
  );
}

export async function PUT(request: NextRequest) {
  
}
