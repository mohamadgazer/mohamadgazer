import { API_BASE_URL, endpoints } from "./apiRoutes";

interface LoginResponse {
  access_token: string;
  token_type: string;
  user: {
    id: number;
    name: string;
    email: string;
    is_admin: boolean;
    role: string;
    phone: string | null;
    address: string | null;
    created_at: string;
    updated_at: string;
  };
}

export default class AdminApiService {
  private token: string | null;

  constructor() {
    this.token = localStorage.getItem("token");
  }

  private async request<T>(
    url: string,
    method: string = "GET",
    data: any = null
  ): Promise<T> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    const config: RequestInit = {
      method,
      headers,
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}${url}`, config);

    if (!response.ok) {
      if (response.status === 401) {
        alert("Unauthorized. Please login again.");
        localStorage.removeItem("token");
        location.reload();
      }
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  }

  async login(email: string, password: string): Promise<LoginResponse["user"]> {
    const res = await this.request<LoginResponse>(endpoints.login, "POST", {
      email,
      password,
    });
    this.token = res.access_token;
    localStorage.setItem("token", res.access_token);
    return res.user;
  }

  async logout(): Promise<void> {
    await this.request(endpoints.logout, "POST");
    this.token = null;
    localStorage.removeItem("token");
  }

  async getCurrentUser(): Promise<LoginResponse["user"]> {
    return this.request(endpoints.me);
  }

  async getProducts(): Promise<any[]> {
    return this.request(endpoints.products);
  }

  async deleteProduct(id: number): Promise<void> {
    return this.request(`${endpoints.products}/${id}`, "DELETE");
  }

  // ممكن تضيف أنواع مخصصة للـ Product و Order لو حبيت
}
