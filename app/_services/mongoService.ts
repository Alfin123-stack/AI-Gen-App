// Struktur template yang disimpan di query
export interface TemplateInfo {
  name: string;
  desc: string;
  icon: string;
}

// Payload untuk menyimpan query
export interface SaveQueryPayload {
  template: TemplateInfo;
  email: string;
  query: string;
  content: string;
}

// Response untuk saveQuery
export interface SaveQueryResponse {
  ok: boolean;
  data?: {
    _id: string;
    template?: TemplateInfo;
    email: string;
    query: string;
    content: string;
    createdAt?: string;
  };
  message?: string;
}

// Struktur query di database
export interface Query {
  _id: string;
  template: { name: string; desc: string; icon: string };
  email: string;
  query: string;
  content: string;
  createdAt: string;
}

// Struktur pagination
export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// Response untuk getQueries
export interface GetQueriesResponse {
  ok: boolean;
  data?: Query[] | [];
  pagination?: Pagination;
  message?: string;
}

// Response untuk getQueryById
export interface GetQueryByIdResponse {
  ok: boolean;
  data?: Query;
  message?: string;
}

// ================= API FUNCTIONS =================

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
