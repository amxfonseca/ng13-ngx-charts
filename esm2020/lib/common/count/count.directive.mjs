import { Component, Input, Output, EventEmitter } from '@angular/core';
import { count, decimalChecker } from './count.helper';
import * as i0 from "@angular/core";
const _c0 = ["ngx-charts-count-up", ""];
/**
 * Count up component
 *
 * Loosely inspired by:
 *  - https://github.com/izupet/angular2-counto
 *  - https://inorganik.github.io/countUp.js/
 *
 * @export
 */
export class CountUpDirective {
    constructor(cd, element) {
        this.cd = cd;
        this.countDuration = 1;
        this.countPrefix = '';
        this.countSuffix = '';
        this.countChange = new EventEmitter();
        this.countFinish = new EventEmitter();
        this.value = '';
        this._countDecimals = 0;
        this._countTo = 0;
        this._countFrom = 0;
        this.nativeElement = element.nativeElement;
    }
    set countDecimals(val) {
        this._countDecimals = val;
    }
    get countDecimals() {
        if (this._countDecimals)
            return this._countDecimals;
        return decimalChecker(this.countTo);
    }
    set countTo(val) {
        this._countTo = parseFloat(val);
        this.start();
    }
    get countTo() {
        return this._countTo;
    }
    set countFrom(val) {
        this._countFrom = parseFloat(val);
        this.start();
    }
    get countFrom() {
        return this._countFrom;
    }
    ngOnDestroy() {
        cancelAnimationFrame(this.animationReq);
    }
    start() {
        cancelAnimationFrame(this.animationReq);
        const valueFormatting = this.valueFormatting || (value => `${this.countPrefix}${value.toLocaleString()}${this.countSuffix}`);
        const callback = ({ value, progress, finished }) => {
            this.value = valueFormatting(value);
            this.cd.markForCheck();
            if (!finished)
                this.countChange.emit({ value: this.value, progress });
            if (finished)
                this.countFinish.emit({ value: this.value, progress });
        };
        this.animationReq = count(this.countFrom, this.countTo, this.countDecimals, this.countDuration, callback);
    }
}
CountUpDirective.ɵfac = function CountUpDirective_Factory(t) { return new (t || CountUpDirective)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
CountUpDirective.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CountUpDirective, selectors: [["", "ngx-charts-count-up", ""]], inputs: { countDuration: "countDuration", countPrefix: "countPrefix", countSuffix: "countSuffix", valueFormatting: "valueFormatting", countDecimals: "countDecimals", countTo: "countTo", countFrom: "countFrom" }, outputs: { countChange: "countChange", countFinish: "countFinish" }, attrs: _c0, decls: 1, vars: 1, template: function CountUpDirective_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
    } if (rf & 2) {
        i0.ɵɵtextInterpolate1(" ", ctx.value, " ");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountUpDirective, [{
        type: Component,
        args: [{
                selector: '[ngx-charts-count-up]',
                template: ` {{ value }} `
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { countDuration: [{
            type: Input
        }], countPrefix: [{
            type: Input
        }], countSuffix: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], countDecimals: [{
            type: Input
        }], countTo: [{
            type: Input
        }], countFrom: [{
            type: Input
        }], countChange: [{
            type: Output
        }], countFinish: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2NvbW1vbi9jb3VudC9jb3VudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEMsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXZEOzs7Ozs7OztHQVFHO0FBS0gsTUFBTSxPQUFPLGdCQUFnQjtJQWtEM0IsWUFBb0IsRUFBcUIsRUFBRSxPQUFtQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQWpEaEMsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFpQ3hCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJM0MsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUtSLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUc3QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQTlDRCxJQUNJLGFBQWEsQ0FBQyxHQUFXO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3BELE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFDSSxPQUFPLENBQUMsR0FBRztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQ0ksU0FBUyxDQUFDLEdBQUc7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFvQkQsV0FBVztRQUNULG9CQUFvQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsS0FBSztRQUNILG9CQUFvQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV4QyxNQUFNLGVBQWUsR0FDbkIsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUV2RyxNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVE7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLElBQUksUUFBUTtnQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1RyxDQUFDOztnRkF4RVUsZ0JBQWdCO21FQUFoQixnQkFBZ0I7UUFGZixZQUFZOztRQUFaLDBDQUFZOzt1RkFFYixnQkFBZ0I7Y0FKNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxlQUFlO2FBQzFCOzZGQUVVLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFHRixhQUFhO2tCQURoQixLQUFLO1lBV0YsT0FBTztrQkFEVixLQUFLO1lBV0YsU0FBUztrQkFEWixLQUFLO1lBVUksV0FBVztrQkFBcEIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY291bnQsIGRlY2ltYWxDaGVja2VyIH0gZnJvbSAnLi9jb3VudC5oZWxwZXInO1xuXG4vKipcbiAqIENvdW50IHVwIGNvbXBvbmVudFxuICpcbiAqIExvb3NlbHkgaW5zcGlyZWQgYnk6XG4gKiAgLSBodHRwczovL2dpdGh1Yi5jb20vaXp1cGV0L2FuZ3VsYXIyLWNvdW50b1xuICogIC0gaHR0cHM6Ly9pbm9yZ2FuaWsuZ2l0aHViLmlvL2NvdW50VXAuanMvXG4gKlxuICogQGV4cG9ydFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmd4LWNoYXJ0cy1jb3VudC11cF0nLFxuICB0ZW1wbGF0ZTogYCB7eyB2YWx1ZSB9fSBgXG59KVxuZXhwb3J0IGNsYXNzIENvdW50VXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjb3VudER1cmF0aW9uOiBudW1iZXIgPSAxO1xuICBASW5wdXQoKSBjb3VudFByZWZpeDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGNvdW50U3VmZml4OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdmFsdWVGb3JtYXR0aW5nOiBhbnk7XG5cbiAgQElucHV0KClcbiAgc2V0IGNvdW50RGVjaW1hbHModmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jb3VudERlY2ltYWxzID0gdmFsO1xuICB9XG5cbiAgZ2V0IGNvdW50RGVjaW1hbHMoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fY291bnREZWNpbWFscykgcmV0dXJuIHRoaXMuX2NvdW50RGVjaW1hbHM7XG4gICAgcmV0dXJuIGRlY2ltYWxDaGVja2VyKHRoaXMuY291bnRUbyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY291bnRUbyh2YWwpIHtcbiAgICB0aGlzLl9jb3VudFRvID0gcGFyc2VGbG9hdCh2YWwpO1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIGdldCBjb3VudFRvKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50VG87XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY291bnRGcm9tKHZhbCkge1xuICAgIHRoaXMuX2NvdW50RnJvbSA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBnZXQgY291bnRGcm9tKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50RnJvbTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBjb3VudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNvdW50RmluaXNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5hdGl2ZUVsZW1lbnQ6IGFueTtcblxuICB2YWx1ZTogYW55ID0gJyc7XG4gIGZvcm1hdHRlZFZhbHVlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBhbmltYXRpb25SZXE6IGFueTtcblxuICBwcml2YXRlIF9jb3VudERlY2ltYWxzOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9jb3VudFRvOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9jb3VudEZyb206IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvblJlcSk7XG4gIH1cblxuICBzdGFydCgpOiB2b2lkIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvblJlcSk7XG5cbiAgICBjb25zdCB2YWx1ZUZvcm1hdHRpbmcgPVxuICAgICAgdGhpcy52YWx1ZUZvcm1hdHRpbmcgfHwgKHZhbHVlID0+IGAke3RoaXMuY291bnRQcmVmaXh9JHt2YWx1ZS50b0xvY2FsZVN0cmluZygpfSR7dGhpcy5jb3VudFN1ZmZpeH1gKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKHsgdmFsdWUsIHByb2dyZXNzLCBmaW5pc2hlZCB9KSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVGb3JtYXR0aW5nKHZhbHVlKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICBpZiAoIWZpbmlzaGVkKSB0aGlzLmNvdW50Q2hhbmdlLmVtaXQoeyB2YWx1ZTogdGhpcy52YWx1ZSwgcHJvZ3Jlc3MgfSk7XG4gICAgICBpZiAoZmluaXNoZWQpIHRoaXMuY291bnRGaW5pc2guZW1pdCh7IHZhbHVlOiB0aGlzLnZhbHVlLCBwcm9ncmVzcyB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5hbmltYXRpb25SZXEgPSBjb3VudCh0aGlzLmNvdW50RnJvbSwgdGhpcy5jb3VudFRvLCB0aGlzLmNvdW50RGVjaW1hbHMsIHRoaXMuY291bnREdXJhdGlvbiwgY2FsbGJhY2spO1xuICB9XG59XG4iXX0=