import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { formatLabel } from '../common/label.helper';
import * as i0 from "@angular/core";
const _c0 = ["ngx-charts-bar-label", ""];
export class BarLabelComponent {
    constructor(element) {
        this.dimensionsChanged = new EventEmitter();
        this.horizontalPadding = 2;
        this.verticalPadding = 5;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        this.update();
    }
    getSize() {
        const h = this.element.getBoundingClientRect().height;
        const w = this.element.getBoundingClientRect().width;
        return { height: h, width: w, negative: this.value < 0 };
    }
    ngAfterViewInit() {
        this.dimensionsChanged.emit(this.getSize());
    }
    update() {
        if (this.valueFormatting) {
            this.formatedValue = this.valueFormatting(this.value);
        }
        else {
            this.formatedValue = formatLabel(this.value);
        }
        if (this.orientation === 'horizontal') {
            this.x = this.barX + this.barWidth;
            // if the value is negative then it's on the left of the x0.
            // we need to put the data label in front of the bar
            if (this.value < 0) {
                this.x = this.x - this.horizontalPadding;
                this.textAnchor = 'end';
            }
            else {
                this.x = this.x + this.horizontalPadding;
                this.textAnchor = 'start';
            }
            this.y = this.barY + this.barHeight / 2;
        }
        else {
            // orientation must be "vertical"
            this.x = this.barX + this.barWidth / 2;
            this.y = this.barY + this.barHeight;
            if (this.value < 0) {
                this.y = this.y + this.verticalPadding;
                this.textAnchor = 'end';
            }
            else {
                this.y = this.y - this.verticalPadding;
                this.textAnchor = 'start';
            }
            this.transform = `rotate(-45, ${this.x} , ${this.y})`;
        }
    }
}
BarLabelComponent.ɵfac = function BarLabelComponent_Factory(t) { return new (t || BarLabelComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
BarLabelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BarLabelComponent, selectors: [["g", "ngx-charts-bar-label", ""]], inputs: { value: "value", valueFormatting: "valueFormatting", barX: "barX", barY: "barY", barWidth: "barWidth", barHeight: "barHeight", orientation: "orientation" }, outputs: { dimensionsChanged: "dimensionsChanged" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 5, consts: [["alignment-baseline", "middle", 1, "textDataLabel"]], template: function BarLabelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "text", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("text-anchor", ctx.textAnchor)("transform", ctx.transform)("x", ctx.x)("y", ctx.y);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.formatedValue, " ");
    } }, styles: [".textDataLabel[_ngcontent-%COMP%]{font-size:11px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarLabelComponent, [{
        type: Component,
        args: [{ selector: 'g[ngx-charts-bar-label]', template: `
    <svg:text
      class="textDataLabel"
      alignment-baseline="middle"
      [attr.text-anchor]="textAnchor"
      [attr.transform]="transform"
      [attr.x]="x"
      [attr.y]="y"
    >
      {{ formatedValue }}
    </svg:text>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".textDataLabel{font-size:11px}\n"] }]
    }], function () { return [{ type: i0.ElementRef }]; }, { value: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], barX: [{
            type: Input
        }], barY: [{
            type: Input
        }], barWidth: [{
            type: Input
        }], barHeight: [{
            type: Input
        }], orientation: [{
            type: Input
        }], dimensionsChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9iYXItY2hhcnQvYmFyLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCx1QkFBdUIsRUFFdkIsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQW9CckQsTUFBTSxPQUFPLGlCQUFpQjtJQW9CNUIsWUFBWSxPQUFtQjtRQVhyQixzQkFBaUIsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUtwRSxzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFNMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUN0RCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkQ7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxZQUFZLEVBQUU7WUFDckMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbkMsNERBQTREO1lBQzVELG9EQUFvRDtZQUNwRCxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQzthQUMzQjtZQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0wsaUNBQWlDO1lBQ2pDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUVwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQzs7a0ZBdkVVLGlCQUFpQjtvRUFBakIsaUJBQWlCO1FBZDFCLG1CQU9DO1FBUEQsK0JBT0M7UUFDQyxZQUNGO1FBQUEsaUJBQVc7O1FBTlQsNkNBQStCLDRCQUFBLFlBQUEsWUFBQTtRQUsvQixlQUNGO1FBREUsa0RBQ0Y7O3VGQUtTLGlCQUFpQjtjQWpCN0IsU0FBUzsyQkFDRSx5QkFBeUIsWUFDekI7Ozs7Ozs7Ozs7O0dBV1QsbUJBRWdCLHVCQUF1QixDQUFDLE1BQU07NkRBR3RDLEtBQUs7a0JBQWIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFFSSxpQkFBaUI7a0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdExhYmVsIH0gZnJvbSAnLi4vY29tbW9uL2xhYmVsLmhlbHBlcic7XG5pbXBvcnQgeyBCYXJPcmllbnRhdGlvbiB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9iYXItb3JpZW50YXRpb24uZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbbmd4LWNoYXJ0cy1iYXItbGFiZWxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOnRleHRcbiAgICAgIGNsYXNzPVwidGV4dERhdGFMYWJlbFwiXG4gICAgICBhbGlnbm1lbnQtYmFzZWxpbmU9XCJtaWRkbGVcIlxuICAgICAgW2F0dHIudGV4dC1hbmNob3JdPVwidGV4dEFuY2hvclwiXG4gICAgICBbYXR0ci50cmFuc2Zvcm1dPVwidHJhbnNmb3JtXCJcbiAgICAgIFthdHRyLnhdPVwieFwiXG4gICAgICBbYXR0ci55XT1cInlcIlxuICAgID5cbiAgICAgIHt7IGZvcm1hdGVkVmFsdWUgfX1cbiAgICA8L3N2Zzp0ZXh0PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9iYXItbGFiZWwuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQmFyTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB2YWx1ZTtcbiAgQElucHV0KCkgdmFsdWVGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIGJhclg7XG4gIEBJbnB1dCgpIGJhclk7XG4gIEBJbnB1dCgpIGJhcldpZHRoO1xuICBASW5wdXQoKSBiYXJIZWlnaHQ7XG4gIEBJbnB1dCgpIG9yaWVudGF0aW9uOiBCYXJPcmllbnRhdGlvbjtcblxuICBAT3V0cHV0KCkgZGltZW5zaW9uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGVsZW1lbnQ6IGFueTtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGhvcml6b250YWxQYWRkaW5nOiBudW1iZXIgPSAyO1xuICB2ZXJ0aWNhbFBhZGRpbmc6IG51bWJlciA9IDU7XG4gIGZvcm1hdGVkVmFsdWU6IHN0cmluZztcbiAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIHRleHRBbmNob3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBnZXRTaXplKCk6IGFueSB7XG4gICAgY29uc3QgaCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgY29uc3QgdyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICByZXR1cm4geyBoZWlnaHQ6IGgsIHdpZHRoOiB3LCBuZWdhdGl2ZTogdGhpcy52YWx1ZSA8IDAgfTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRpbWVuc2lvbnNDaGFuZ2VkLmVtaXQodGhpcy5nZXRTaXplKCkpO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlRm9ybWF0dGluZykge1xuICAgICAgdGhpcy5mb3JtYXRlZFZhbHVlID0gdGhpcy52YWx1ZUZvcm1hdHRpbmcodGhpcy52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybWF0ZWRWYWx1ZSA9IGZvcm1hdExhYmVsKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMueCA9IHRoaXMuYmFyWCArIHRoaXMuYmFyV2lkdGg7XG4gICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgbmVnYXRpdmUgdGhlbiBpdCdzIG9uIHRoZSBsZWZ0IG9mIHRoZSB4MC5cbiAgICAgIC8vIHdlIG5lZWQgdG8gcHV0IHRoZSBkYXRhIGxhYmVsIGluIGZyb250IG9mIHRoZSBiYXJcbiAgICAgIGlmICh0aGlzLnZhbHVlIDwgMCkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLnggLSB0aGlzLmhvcml6b250YWxQYWRkaW5nO1xuICAgICAgICB0aGlzLnRleHRBbmNob3IgPSAnZW5kJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMuaG9yaXpvbnRhbFBhZGRpbmc7XG4gICAgICAgIHRoaXMudGV4dEFuY2hvciA9ICdzdGFydCc7XG4gICAgICB9XG4gICAgICB0aGlzLnkgPSB0aGlzLmJhclkgKyB0aGlzLmJhckhlaWdodCAvIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG9yaWVudGF0aW9uIG11c3QgYmUgXCJ2ZXJ0aWNhbFwiXG4gICAgICB0aGlzLnggPSB0aGlzLmJhclggKyB0aGlzLmJhcldpZHRoIC8gMjtcbiAgICAgIHRoaXMueSA9IHRoaXMuYmFyWSArIHRoaXMuYmFySGVpZ2h0O1xuXG4gICAgICBpZiAodGhpcy52YWx1ZSA8IDApIHtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy52ZXJ0aWNhbFBhZGRpbmc7XG4gICAgICAgIHRoaXMudGV4dEFuY2hvciA9ICdlbmQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55IC0gdGhpcy52ZXJ0aWNhbFBhZGRpbmc7XG4gICAgICAgIHRoaXMudGV4dEFuY2hvciA9ICdzdGFydCc7XG4gICAgICB9XG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IGByb3RhdGUoLTQ1LCAke3RoaXMueH0gLCAke3RoaXMueX0pYDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==