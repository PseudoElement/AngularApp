import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";

@Component({
     selector: "app-button",
     templateUrl: "./button.component.html",
     styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
     value: string = "Default";
     @ViewChild("btnRef") btnRef!: ElementRef;
     constructor(private renderer: Renderer2) {}
     public changeBackground() {
          const btn = this.btnRef.nativeElement as HTMLInputElement;
          btn.textContent = this._getRandomText();
     }
     private _getRandomText(): string {
          return Math.random().toString(32).slice(2);
     }
}
