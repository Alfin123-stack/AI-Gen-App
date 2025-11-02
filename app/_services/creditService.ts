import { CreditResponse } from "@/lib/types";


// 🔹 Ambil data kredit
export async function getUserCredit(email: string): Promise<CreditResponse> {
  const res = await fetch(`/api/credit?email=${email}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch credit: ${res.statusText}`);
  }
  return res.json();
}

// 🔹 Tambah jumlah kata terpakai
export async function updateCredit(email: string, wordsUsed: number): Promise<CreditResponse> {
  const res = await fetch("/api/credit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, wordsUsed }),
  });

  if (!res.ok) {
    throw new Error(`Failed to update credit: ${res.statusText}`);
  }

  return res.json();
}
