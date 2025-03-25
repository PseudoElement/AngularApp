import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
    selector: 'app-spin-number',
    templateUrl: './spin-number.component.html',
    styleUrl: './spin-number.component.scss',
})
export class SpinNumberComponent {
    @Input({ required: true }) set num(value: number) {
        console.log(value);
        this.reset();
        this.numsArray = this.parseEveryCharUntilNine(value);
        setTimeout(() => this.spin(), 500);
    }

    @Input() size: string = '32px';

    public get wrapperWidth(): number {
        return (parseInt(this.size) / 2) * 7;
    }

    public numsArray: number[][];

    public spinIdx: number = 0;

    private parseEveryCharUntilNine(num: number): number[][] {
        const res = [] as number[][];
        const str = num.toString();
        const splitted = str.split('');

        for (const char of splitted) {
            const fromZerotoNum = [] as number[];
            for (let i = 0; i <= Number(char); i++) {
                fromZerotoNum.push(i);
            }
            res.push(fromZerotoNum);
        }

        return res;
    }

    private async spin(): Promise<void> {
        const columns = document.querySelectorAll('.column');
        for (let i = 0; i < columns.length; i++) {
            const el = columns[i] as HTMLElement;
            const numsCountInColumn = this.numsArray[i].length - 1;

            const height = parseInt(this.size);
            const offsetY = numsCountInColumn * height;

            el.style.transform = `translateY(-${offsetY}px)`;

            await new Promise((res) => setTimeout(res, 200));
        }
    }

    private reset(): void {
        const columns = document.querySelectorAll('.column');
        for (let i = 0; i < columns.length; i++) {
            const el = columns[i] as HTMLElement;
            el.style.transform = `translateY(0)`;
        }
    }
}
