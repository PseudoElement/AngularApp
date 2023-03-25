import { Product } from "./../types/products";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
     providedIn: "root",
})
export class ProductsService {
     constructor(private http: HttpClient) {}

     getAll(limit: number, sortType: string = "asc"): Observable<Product[]> {
          return this.http.get<Product[]>("https://fakestoreapi.com/products", {
               params: {
                    limit: limit,
                    sort: sortType,
               },
               //    params: new HttpParams().append("limit", 4), //<----------------2nd variant to add params
               //    params: new HttpParams({
               //         fromString: `limit=${limit}&sort=${sortType}`,       //////<------------------3th var
               //    }),
          });
     }
}
