import { Component } from "@angular/core";
import { windowWhen } from "rxjs";
import { Router } from "@angular/router";

import { Product, products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  constructor(private router: Router) {}
  products = products;

  share() {
    window.alert("This Product has been shared!");
  }
  onNotify() {
    window.alert("You will be notified when this product goes on sale");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
