import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, description, imageUrl } = req.body;

    try {
      const newHotel = await prisma.hotel.create({
        data: {
          title,
          description,
          imageUrl,
        },
      });
      res.status(201).json(newHotel);
    } catch (error) {
      res.status(500).json({ error: "Failed to create hotel" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
