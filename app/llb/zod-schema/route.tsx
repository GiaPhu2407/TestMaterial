// import { z } from "zod";

import { z } from "zod";

// const UserSchema = z.object({
//   email: z.string().email({ message: "Email khong hop le" }),
//   name: z
//     .string()
//     .min(8, { message: "Tên cần dài hơn hoặc bằng 8 kí tự" })
//     .max(255, { message: "Tên có độ dài tối đa là 255 kí tự" }),
// });

// export default UserSchema;

// const UserSchema = z.object({
//   email: z.string().email({ message: "Email không hợp lệ" }),
//   name: z
//     .string()
//     .min(8, { message: "Tên cần dài hơn 8 ký tự" })
//     .max(255, { message: "Tên không được quá 255 ký tự" }),
// });

// export default UserSchema;

// const UserSchema = z.object({
//   email: z.string().email({ message: "Email không tồn tại" }),
//   name: z
//     .string()
//     .min(8, { message: "Tên dài hơn 8 ký tự" })
//     .max(255, { message: "Tên không được dài hơn 255 ký tự" }),
// });

// const UserSchema = z.object({
//   email: z.string().email({ message: "Email khong hop le" }),
//   name: z
//     .string()
//     .min(8, { message: "Do dai phai hon 8 ky tu" })
//     .max(255, { message: "Do dai khong qua 255 ky tu" }),
// });

const UserSchema = z.object({
  email: z.string().email({ message: "Email khong hop le" }),
  name: z
    .string()
    .min(8, { message: "Ten phai dai hon 8 ky tu" })
    .max(255, { message: "Ten khong duoc dai qua 255 ky tu" }),
});
export default UserSchema;
