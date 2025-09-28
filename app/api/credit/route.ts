import { NextResponse } from "next/server";
import db from "@/lib/db";
import UserCredit from "@/app/_models/userCredit";

export async function GET(req: Request) {
  try {
    await db();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { ok: false, message: "Email diperlukan" },
        { status: 400 }
      );
    }

    let credit = await UserCredit.findOne({ email });

    // kalau belum ada record, otomatis bikin dengan default 100000
    if (!credit) {
      credit = await UserCredit.create({
        email,
        wordCredits: 1000,
        usedWords: 0,
      });
    }

    return NextResponse.json({ ok: true, data: credit });
  } catch (error) {
    console.error("Error fetching credits:", error);
    return NextResponse.json(
      { ok: false, message: "Gagal mengambil kredit" },
      { status: 500 }
    );
  }
}

// POST -> update pemakaian (tambah usedWords)
export async function POST(req: Request) {
  try {
    await db();
    const { email, wordsUsed } = await req.json();

    if (!email || !wordsUsed) {
      return NextResponse.json(
        { ok: false, message: "Email dan wordsUsed diperlukan" },
        { status: 400 }
      );
    }

    const credit = await UserCredit.findOneAndUpdate(
      { email },
      { $inc: { usedWords: wordsUsed } },
      { new: true, upsert: true }
    );

    return NextResponse.json({ ok: true, data: credit });
  } catch (error) {
    console.error("Error updating credits:", error);
    return NextResponse.json(
      { ok: false, message: "Gagal update kredit" },
      { status: 500 }
    );
  }
}
