import { NextResponse } from "next/server";
import Query from "@/app/_models/query";
import db from "@/lib/db";

// Endpoint POST untuk menyimpan query ke database
export async function POST(req: Request) {
  try {
    const { template, email, query, content } = await req.json();

    // Pastikan DB terkoneksi
    await db();

    const newQuery = new Query({
      template,
      email,
      query,
      content,
    });

    await newQuery.save();

    return NextResponse.json({
      ok: true,
      message: "Query berhasil disimpan",
    });
  } catch (error) {
    console.error("Error saving query:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Gagal menyimpan query",
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    await db();

    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
    const history = searchParams.get("history");

    if (!email) {
      return NextResponse.json(
        { ok: false, message: "Email diperlukan" },
        { status: 400 }
      );
    }

    // 1. Ambil semua data user berdasarkan email
    const allQueries = await Query.find({ email }).sort({ createdAt: -1 });

    // 2. Filter lagi di memory kalau ada param "history"
    let filteredQueries = allQueries;
    if (history && history !== "") {
      filteredQueries = allQueries.filter((q) =>
        q.template.name.toLowerCase().includes(history.toLowerCase())
      );
    }

    // 3. Hitung ulang pagination
    const total = filteredQueries.length;
    const totalPages = Math.ceil(total / pageSize);
    const paginatedQueries = filteredQueries.slice(
      (page - 1) * pageSize,
      page * pageSize
    );

    return NextResponse.json({
      ok: true,
      data: paginatedQueries,
      pagination: {
        page,
        pageSize,
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error("Error fetching queries:", error);
    return NextResponse.json(
      { ok: false, message: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}
