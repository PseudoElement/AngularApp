import { ProductFormControls } from "../types/productForm";

export const getAlertText = (controls: ProductFormControls) => {
     return `Fill inputs ${Object.keys(controls)
          .map((key) => key[0].toUpperCase() + key.slice(1))
          .join(", ")}.`;
};
