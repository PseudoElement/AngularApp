import { FormControl } from "@angular/forms";

export interface ProductFormControls {
     title: FormControl<string | null>;
     price: FormControl<string | null>;
}
