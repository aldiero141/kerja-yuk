import api from "@/lib/axios";

type LoginCredentials = {
  username: string;
  password: string;
  expiresInMins?: number;
};

export async function login(credentials: LoginCredentials) {
  const { data } = await api.post("/auth/login", credentials);
  return data;
}
