import { ErrorService } from './error.service';
import { Product } from '../shared/types/products';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, delay, lastValueFrom, Observable, tap, throwError } from 'rxjs';
import { endpoints } from '../api/endpoints';
import { IAccordeonOption } from '../core/model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    public products: Product[] = [];
    private apiUrl: string = 'http://localhost:3000';

    constructor(private http: HttpClient, private errorService: ErrorService) {}

    public async loadAccordeons(): Promise<IAccordeonOption[]> {
        return await lastValueFrom(this.http.get<IAccordeonOption[]>(`${this.apiUrl}/accordeons`));
    }
    public async updateAccordeons(accordeons: IAccordeonOption[]): Promise<any> {
        return await lastValueFrom(this.http.post<IAccordeonOption[]>(`${this.apiUrl}/accordeons`, accordeons));
    }
    getAll(limit: number, sortType: string = 'asc'): Observable<Product[]> {
        return this.http
            .get<Product[]>(endpoints.products, {
                params: {
                    limit: limit,
                    sort: sortType,
                },
                //    params: new HttpParams().append("limit", 4), //<----------------2nd variant to add params
                //    params: new HttpParams({
                //         fromString: `limit=${limit}&sort=${sortType}`,       //////<------------------3th var
                //    }),
            })
            .pipe(
                delay(2000),
                tap((products) => {
                    this.products = products;
                }),
                catchError(this.handleError.bind(this))
            );
    }

    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(endpoints.products, product).pipe(tap((product) => (this.products = [...this.products, product])));
    }

    private handleError(e: HttpErrorResponse) {
        this.errorService.handle(e.message);
        return throwError(() => e.message);
    }
}
