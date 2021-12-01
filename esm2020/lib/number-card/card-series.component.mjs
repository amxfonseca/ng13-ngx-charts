import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { invertColor } from '../utils/color-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./card.component";
const _c0 = ["ngx-charts-card-series", ""];
function CardSeriesComponent__svg_rect_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "rect", 2);
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("fill", ctx_r0.emptyColor);
    i0.ɵɵattribute("x", c_r2.x)("y", c_r2.y)("width", c_r2.width)("height", c_r2.height);
} }
function CardSeriesComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 3);
    i0.ɵɵlistener("select", function CardSeriesComponent__svg_g_1_Template__svg_g_select_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("x", c_r3.x)("y", c_r3.y)("width", c_r3.width)("height", c_r3.height)("color", c_r3.color)("bandColor", c_r3.bandColor)("textColor", c_r3.textColor)("data", c_r3.data)("label", c_r3.label)("medianSize", ctx_r1.medianSize)("valueFormatting", ctx_r1.valueFormatting)("labelFormatting", ctx_r1.labelFormatting)("animations", ctx_r1.animations);
} }
export class CardSeriesComponent {
    constructor() {
        this.innerPadding = 15;
        this.emptyColor = 'rgba(0, 0, 0, 0)';
        this.animations = true;
        this.select = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        if (this.data.length > 2) {
            const valueFormatting = this.valueFormatting || (card => card.value.toLocaleString());
            const sortedLengths = this.data
                .map(d => {
                const hasValue = d && d.data && typeof d.data.value !== 'undefined' && d.data.value !== null;
                return hasValue
                    ? valueFormatting({
                        data: d.data,
                        label: d ? d.data.name : '',
                        value: d && d.data ? d.data.value : ''
                    }).length
                    : 0;
            })
                .sort((a, b) => b - a);
            const idx = Math.ceil(this.data.length / 2);
            this.medianSize = sortedLengths[idx];
        }
        const cards = this.getCards();
        this.cards = cards.filter(d => d.data.value !== null);
        this.emptySlots = cards.filter(d => d.data.value === null);
    }
    getCards() {
        const yPadding = typeof this.innerPadding === 'number' ? this.innerPadding : this.innerPadding[0] + this.innerPadding[2];
        const xPadding = typeof this.innerPadding === 'number' ? this.innerPadding : this.innerPadding[1] + this.innerPadding[3];
        return this.data.map((d, index) => {
            let label = d.data.name;
            if (label && label.constructor.name === 'Date') {
                label = label.toLocaleDateString();
            }
            else {
                label = label ? label.toLocaleString() : label;
            }
            const value = d.data.value;
            const valueColor = label ? this.colors.getColor(label) : this.emptyColor;
            const color = this.cardColor || valueColor || '#000';
            return {
                x: d.x,
                y: d.y,
                width: d.width - xPadding,
                height: d.height - yPadding,
                color,
                bandColor: this.bandColor || valueColor,
                textColor: this.textColor || invertColor(color),
                label,
                data: d.data,
                tooltipText: `${label}: ${value}`
            };
        });
    }
    trackBy(index, card) {
        return card.label;
    }
    onClick(data) {
        this.select.emit(data);
    }
}
CardSeriesComponent.ɵfac = function CardSeriesComponent_Factory(t) { return new (t || CardSeriesComponent)(); };
CardSeriesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardSeriesComponent, selectors: [["g", "ngx-charts-card-series", ""]], inputs: { data: "data", dims: "dims", colors: "colors", innerPadding: "innerPadding", cardColor: "cardColor", bandColor: "bandColor", emptyColor: "emptyColor", textColor: "textColor", valueFormatting: "valueFormatting", labelFormatting: "labelFormatting", animations: "animations" }, outputs: { select: "select" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 4, consts: [["class", "card-empty", "rx", "3", "ry", "3", 3, "fill", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-card", "", 3, "x", "y", "width", "height", "color", "bandColor", "textColor", "data", "label", "medianSize", "valueFormatting", "labelFormatting", "animations", "select", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["rx", "3", "ry", "3", 1, "card-empty"], ["ngx-charts-card", "", 3, "x", "y", "width", "height", "color", "bandColor", "textColor", "data", "label", "medianSize", "valueFormatting", "labelFormatting", "animations", "select"]], template: function CardSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CardSeriesComponent__svg_rect_0_Template, 1, 6, "rect", 0);
        i0.ɵɵtemplate(1, CardSeriesComponent__svg_g_1_Template, 1, 13, "g", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.emptySlots)("ngForTrackBy", ctx.trackBy);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.cards)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.NgForOf, i2.CardComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-card-series]',
                template: `
    <svg:rect
      *ngFor="let c of emptySlots; trackBy: trackBy"
      class="card-empty"
      [attr.x]="c.x"
      [attr.y]="c.y"
      [style.fill]="emptyColor"
      [attr.width]="c.width"
      [attr.height]="c.height"
      rx="3"
      ry="3"
    />
    <svg:g
      ngx-charts-card
      *ngFor="let c of cards; trackBy: trackBy"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [color]="c.color"
      [bandColor]="c.bandColor"
      [textColor]="c.textColor"
      [data]="c.data"
      [label]="c.label"
      [medianSize]="medianSize"
      [valueFormatting]="valueFormatting"
      [labelFormatting]="labelFormatting"
      [animations]="animations"
      (select)="onClick($event)"
    />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { data: [{
            type: Input
        }], dims: [{
            type: Input
        }], colors: [{
            type: Input
        }], innerPadding: [{
            type: Input
        }], cardColor: [{
            type: Input
        }], bandColor: [{
            type: Input
        }], emptyColor: [{
            type: Input
        }], textColor: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zZXJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL251bWJlci1jYXJkL2NhcmQtc2VyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztJQWdCL0MsbUJBVUU7SUFWRiwwQkFVRTs7OztJQUxBLHlDQUF5QjtJQUZ6QiwyQkFBYyxhQUFBLHFCQUFBLHVCQUFBOzs7O0lBUWhCLG1CQWlCRTtJQWpCRiw0QkFpQkU7SUFEQSwyS0FBVSxzQkFBZSxJQUFDO0lBaEI1QixpQkFpQkU7Ozs7SUFkQSwwQkFBUyxhQUFBLHFCQUFBLHVCQUFBLHFCQUFBLDZCQUFBLDZCQUFBLG1CQUFBLHFCQUFBLGlDQUFBLDJDQUFBLDJDQUFBLGlDQUFBOztBQWtCZixNQUFNLE9BQU8sbUJBQW1CO0lBbkNoQztRQXVDVyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUkxQixlQUFVLEdBQUcsa0JBQWtCLENBQUM7UUFJaEMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUUxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQTBFdkM7SUFwRUMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFL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QUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFFVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBRUcsU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaW52ZXJ0Q29sb3IgfSBmcm9tICcuLi91dGlscy9jb2xvci11dGlscyc7XG5pbXBvcnQgeyBHcmlkSXRlbSwgR3JpZERhdGEgfSBmcm9tICcuLi9jb21tb24vZ3JpZC1sYXlvdXQuaGVscGVyJztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yLmhlbHBlcic7XG5pbXBvcnQgeyBWaWV3RGltZW5zaW9ucyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy92aWV3LWRpbWVuc2lvbi5pbnRlcmZhY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRNb2RlbCBleHRlbmRzIEdyaWRJdGVtIHtcbiAgY29sb3I6IHN0cmluZztcbiAgdG9vbHRpcFRleHQ6IHN0cmluZztcbiAgdGV4dENvbG9yOiBzdHJpbmc7XG4gIGJhbmRDb2xvcjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtY2FyZC1zZXJpZXNdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOnJlY3RcbiAgICAgICpuZ0Zvcj1cImxldCBjIG9mIGVtcHR5U2xvdHM7IHRyYWNrQnk6IHRyYWNrQnlcIlxuICAgICAgY2xhc3M9XCJjYXJkLWVtcHR5XCJcbiAgICAgIFthdHRyLnhdPVwiYy54XCJcbiAgICAgIFthdHRyLnldPVwiYy55XCJcbiAgICAgIFtzdHlsZS5maWxsXT1cImVtcHR5Q29sb3JcIlxuICAgICAgW2F0dHIud2lkdGhdPVwiYy53aWR0aFwiXG4gICAgICBbYXR0ci5oZWlnaHRdPVwiYy5oZWlnaHRcIlxuICAgICAgcng9XCIzXCJcbiAgICAgIHJ5PVwiM1wiXG4gICAgLz5cbiAgICA8c3ZnOmdcbiAgICAgIG5neC1jaGFydHMtY2FyZFxuICAgICAgKm5nRm9yPVwibGV0IGMgb2YgY2FyZHM7IHRyYWNrQnk6IHRyYWNrQnlcIlxuICAgICAgW3hdPVwiYy54XCJcbiAgICAgIFt5XT1cImMueVwiXG4gICAgICBbd2lkdGhdPVwiYy53aWR0aFwiXG4gICAgICBbaGVpZ2h0XT1cImMuaGVpZ2h0XCJcbiAgICAgIFtjb2xvcl09XCJjLmNvbG9yXCJcbiAgICAgIFtiYW5kQ29sb3JdPVwiYy5iYW5kQ29sb3JcIlxuICAgICAgW3RleHRDb2xvcl09XCJjLnRleHRDb2xvclwiXG4gICAgICBbZGF0YV09XCJjLmRhdGFcIlxuICAgICAgW2xhYmVsXT1cImMubGFiZWxcIlxuICAgICAgW21lZGlhblNpemVdPVwibWVkaWFuU2l6ZVwiXG4gICAgICBbdmFsdWVGb3JtYXR0aW5nXT1cInZhbHVlRm9ybWF0dGluZ1wiXG4gICAgICBbbGFiZWxGb3JtYXR0aW5nXT1cImxhYmVsRm9ybWF0dGluZ1wiXG4gICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICAgIChzZWxlY3QpPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAvPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkU2VyaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGF0YTogQ2FyZE1vZGVsW107XG4gIEBJbnB1dCgpIGRpbXM6IFZpZXdEaW1lbnNpb25zO1xuICBASW5wdXQoKSBjb2xvcnM6IENvbG9ySGVscGVyO1xuICBASW5wdXQoKSBpbm5lclBhZGRpbmc6IG51bWJlciA9IDE1O1xuXG4gIEBJbnB1dCgpIGNhcmRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBiYW5kQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZW1wdHlDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDApJztcbiAgQElucHV0KCkgdGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlRm9ybWF0dGluZzogYW55O1xuICBASW5wdXQoKSBsYWJlbEZvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgYW5pbWF0aW9uczogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjYXJkczogQ2FyZE1vZGVsW107XG4gIGVtcHR5U2xvdHM6IGFueVtdO1xuICBtZWRpYW5TaXplOiBudW1iZXI7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAyKSB7XG4gICAgICBjb25zdCB2YWx1ZUZvcm1hdHRpbmcgPSB0aGlzLnZhbHVlRm9ybWF0dGluZyB8fCAoY2FyZCA9PiBjYXJkLnZhbHVlLnRvTG9jYWxlU3RyaW5nKCkpO1xuXG4gICAgICBjb25zdCBzb3J0ZWRMZW5ndGhzID0gdGhpcy5kYXRhXG4gICAgICAgIC5tYXAoZCA9PiB7XG4gICAgICAgICAgY29uc3QgaGFzVmFsdWUgPSBkICYmIGQuZGF0YSAmJiB0eXBlb2YgZC5kYXRhLnZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiBkLmRhdGEudmFsdWUgIT09IG51bGw7XG4gICAgICAgICAgcmV0dXJuIGhhc1ZhbHVlXG4gICAgICAgICAgICA/IHZhbHVlRm9ybWF0dGluZyh7XG4gICAgICAgICAgICAgICAgZGF0YTogZC5kYXRhLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBkID8gZC5kYXRhLm5hbWUgOiAnJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZCAmJiBkLmRhdGEgPyBkLmRhdGEudmFsdWUgOiAnJ1xuICAgICAgICAgICAgICB9KS5sZW5ndGhcbiAgICAgICAgICAgIDogMDtcbiAgICAgICAgfSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcbiAgICAgIGNvbnN0IGlkeCA9IE1hdGguY2VpbCh0aGlzLmRhdGEubGVuZ3RoIC8gMik7XG4gICAgICB0aGlzLm1lZGlhblNpemUgPSBzb3J0ZWRMZW5ndGhzW2lkeF07XG4gICAgfVxuXG4gICAgY29uc3QgY2FyZHMgPSB0aGlzLmdldENhcmRzKCk7XG4gICAgdGhpcy5jYXJkcyA9IGNhcmRzLmZpbHRlcihkID0+IGQuZGF0YS52YWx1ZSAhPT0gbnVsbCk7XG4gICAgdGhpcy5lbXB0eVNsb3RzID0gY2FyZHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09PSBudWxsKTtcbiAgfVxuXG4gIGdldENhcmRzKCk6IENhcmRNb2RlbFtdIHtcbiAgICBjb25zdCB5UGFkZGluZyA9XG4gICAgICB0eXBlb2YgdGhpcy5pbm5lclBhZGRpbmcgPT09ICdudW1iZXInID8gdGhpcy5pbm5lclBhZGRpbmcgOiB0aGlzLmlubmVyUGFkZGluZ1swXSArIHRoaXMuaW5uZXJQYWRkaW5nWzJdO1xuICAgIGNvbnN0IHhQYWRkaW5nID1cbiAgICAgIHR5cGVvZiB0aGlzLmlubmVyUGFkZGluZyA9PT0gJ251bWJlcicgPyB0aGlzLmlubmVyUGFkZGluZyA6IHRoaXMuaW5uZXJQYWRkaW5nWzFdICsgdGhpcy5pbm5lclBhZGRpbmdbM107XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCgoZCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBsYWJlbCA9IGQuZGF0YS5uYW1lIGFzIGFueTtcbiAgICAgIGlmIChsYWJlbCAmJiBsYWJlbC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRGF0ZScpIHtcbiAgICAgICAgbGFiZWwgPSBsYWJlbC50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gbGFiZWwgPyBsYWJlbC50b0xvY2FsZVN0cmluZygpIDogbGFiZWw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gZC5kYXRhLnZhbHVlO1xuICAgICAgY29uc3QgdmFsdWVDb2xvciA9IGxhYmVsID8gdGhpcy5jb2xvcnMuZ2V0Q29sb3IobGFiZWwpIDogdGhpcy5lbXB0eUNvbG9yO1xuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNhcmRDb2xvciB8fCB2YWx1ZUNvbG9yIHx8ICcjMDAwJztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IGQueCxcbiAgICAgICAgeTogZC55LFxuICAgICAgICB3aWR0aDogZC53aWR0aCAtIHhQYWRkaW5nLFxuICAgICAgICBoZWlnaHQ6IGQuaGVpZ2h0IC0geVBhZGRpbmcsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBiYW5kQ29sb3I6IHRoaXMuYmFuZENvbG9yIHx8IHZhbHVlQ29sb3IsXG4gICAgICAgIHRleHRDb2xvcjogdGhpcy50ZXh0Q29sb3IgfHwgaW52ZXJ0Q29sb3IoY29sb3IpLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgZGF0YTogZC5kYXRhLFxuICAgICAgICB0b29sdGlwVGV4dDogYCR7bGFiZWx9OiAke3ZhbHVlfWBcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICB0cmFja0J5KGluZGV4LCBjYXJkKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY2FyZC5sYWJlbDtcbiAgfVxuXG4gIG9uQ2xpY2soZGF0YSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoZGF0YSk7XG4gIH1cbn1cbiJdfQ==