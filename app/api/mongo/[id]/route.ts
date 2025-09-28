import Query from "@/app/_models/query";
import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } // 👈 sesuai error
): Promise<Response> {
  try {
    await db();

    const { id } = await context.params; // 👈 karena Promise, perlu await

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { ok: false, message: "Invalid ID" },
        { status: 400 }
      );
    }

    const query = await Query.findById(id);

    if (!query) {
      return NextResponse.json(
        { ok: false, message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { ok: true, data: JSON.parse(JSON.stringify(query)) },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching query:", error);
    return NextResponse.json(
      { ok: false, message: "Server error" },
      { status: 500 }
    );
  }
}
