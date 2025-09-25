export interface GeneratePayload {
  prompt: string;
}

export interface GenerateResponse {
  text: string;
}

export async function generateText(payload: GeneratePayload): Promise<GenerateResponse> {
  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Failed to generate text: ${res.statusText}`);
  }

  return res.json();
}
