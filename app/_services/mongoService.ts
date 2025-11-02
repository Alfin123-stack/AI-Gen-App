import {
  GetQueriesResponse,
  GetQueryByIdResponse,
  SaveQueryPayload,
  SaveQueryResponse,
} from "@/lib/types";

// Save query
export async function saveQuery(
  payload: SaveQueryPayload
): Promise<SaveQueryResponse> {
  const res = await fetch("/api/mongo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Failed to save query: ${res.statusText}`);
  }

  return res.json();
}

// Get queries dengan pagination & filter
export async function getQueries(
  email: string,
  page: number,
  pageSize: number,
  keyword: string
): Promise<GetQueriesResponse> {
  const params = new URLSearchParams({
    email,
    page: String(page),
    pageSize: String(pageSize),
    history: keyword,
  });

  const res = await fetch(`/api/mongo?${params.toString()}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch queries: ${res.statusText}`);
  }

  return res.json();
}

// Get query by ID
export async function getQueryById(id: string): Promise<GetQueryByIdResponse> {
  const res = await fetch(`/api/mongo/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch query by id: ${res.statusText}`);
  }

  return res.json();
}
