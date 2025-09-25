import Query from "@/app/_models/query";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await db();

    const query = await Query.findById(params.id);

    if (!query) {
      return NextResponse.json(
        { ok: false, message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      data: JSON.parse(JSON.stringify(query)),
    });
  } catch (error) {
    console.error("Error fetching query:", error);
    return NextResponse.json(
      { ok: false, message: "Server error" },
      { status: 500 }
    );
  }
}
