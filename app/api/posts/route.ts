import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   //Nếu trên URL ko có search page param thì gán bằng 1
//   const page: number = searchParams.get("page")
//     ? Number(searchParams.get("page"))
//     : 1;
//   const limit_size: number = searchParams.get("limit_size")
//     ? Number(searchParams.get("limit_size"))
//     : 10;

//   const skip = (page - 1) * limit_size;

//   //Tính tổng số trang
//   // 1. Đếm xem có bao nhiêu bản ghi hiện tại trong CSDL

//   const totalRecords = await prisma.post.count();
//   const totalPage = Math.ceil(totalRecords / limit_size);
//   //Lấy dữ liệu tại trang chỉ định
//   const data = await prisma.post.findMany({
//     skip: 0,
//     take: limit_size,
//   });
//   return NextResponse.json(
//     {
//       data,
//       meta: {
//         // totalPage: 200,
//         // current_page: page,
//         // limit_size: limit_size,
//         // skip: skip,
//         totalRecords,
//         totalPage,
//         page,
//         limit_size,
//         skip,
//       },
//     },
//     { status: 200 }

//   );
// }
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page: number = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const limit_size: number = searchParams.get("limit_size")
    ? Number(searchParams.get("limit_size"))
    : 10;

  const skip = (page - 1) * limit_size;

  const totalRecords = await prisma.post.count();
  const totalPage = Math.ceil(totalRecords / limit_size);

  const data =await prisma.post.findMany({
    skip,
    take:limit_size
  })
  return NextResponse.json({
    data,
    meta :{
      totalRecords,
      totalPage,
      page,
      limit_size,
      skip,
    }
  })
}
