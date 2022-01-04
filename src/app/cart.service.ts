import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

interface shippingPayload {
  type: String;
  price: number;
}

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

const api_url = "http://localhost:5000";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private httpClient: HttpClient) {}

  addItemToCart(item: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${api_url}/cart`, item, httpOptions);
  }

  getItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${api_url}/cart`);
  }

  removeItemFromCart(item: Product): Observable<Product> {
    return this.httpClient.delete<Product>(`${api_url}/cart/${item.id}`);
  }

  clearCart(items: Product[]): Product[] {
    items.forEach((item) =>
      this.removeItemFromCart(item).subscribe((res) => {
        item = res;
      })
    );
    items = [];
    return items;
  }

  shipping(): Observable<shippingPayload[]> {
    return this.httpClient.get<shippingPayload[]>("/assets/shipping.json");
  }
}
