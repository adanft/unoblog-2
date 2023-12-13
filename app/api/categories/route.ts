import { db } from "@/lib/server/db";
import { Category } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await db.category.findMany({
      skip: 0,
      // take: 10, // uncomment this line to limit the number of categories returned
    });

    return new Response(JSON.stringify(categories));
  } catch (err) {
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      status: 500,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const category: Category = await req.json();

    console.log("HERE");
    console.log({ category });

    const categoryResponse = await db.category.create({
      data: {
        title: category.title,
        slug: category.slug,
        color: category.color,
      },
    });

    return new Response(JSON.stringify(categoryResponse));
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong!" }), {
      status: 500,
    });
  }
};
