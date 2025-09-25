import Query from "@/app/_models/query";
import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await db();

    const { id } = await params; // ✅ karena params dianggap Promise
    const query = await Query.findById(id);

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
