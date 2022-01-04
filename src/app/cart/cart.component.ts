import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";
import { Product } from "../products";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });

  faTimes = faTimes;

  items: Product[] = [];

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cartService.getItems().subscribe((items) => {
      this.items = items;
    });
  }

  onDelete(item: Product) {
    this.cartService.removeItemFromCart(item).subscribe((res) => {
      this.items = this.items.filter((itm) => itm.id !== item.id);
    });
  }

  onSubmit() {
    this.items = this.cartService.clearCart(this.items);
    console.warn("Your order has beeen submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
    // window.location.reload();
  }
}
