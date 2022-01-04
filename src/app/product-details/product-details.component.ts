import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const idFromParams = Number(params.get("productId"));
    this.product = products.find((product) => product.id === idFromParams);
  }

  addToCart(item: Product) {
    this.cartService.addItemToCart(item).subscribe((item) => {
      this.product = item;
    });
    alert(item.name + " added to cart");
  }
}
