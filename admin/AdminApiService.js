// AdminApiService.js

import { API_BASE_URL, endpoints } from "./apiRoutes.js";

export default class AdminApiService {
  constructor() {
    this.token = localStorage.getItem("token");
  }

  async request(url, method = "GET", data = null) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    const config = {
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

  async login(email, password) {
    const res = await this.request(endpoints.login, "POST", {
      email,
      password,
    });
    this.token = res.access_token;
    localStorage.setItem("token", res.access_token);
    return res.user;
  }

  async logout() {
    await this.request(endpoints.logout, "POST");
    this.token = null;
    localStorage.removeItem("token");
  }

  async getCurrentUser() {
    return this.request(endpoints.me);
  }

  async getUsers() {
    return this.request(endpoints.users);
  }

  async getProducts() {
    return this.request(endpoints.products);
  }

  async deleteProduct(id) {
    return this.request(`${endpoints.products}/${id}`, "DELETE");
  }

  // يمكنك إضافة المزيد من الوظائف حسب الحاجة
}
