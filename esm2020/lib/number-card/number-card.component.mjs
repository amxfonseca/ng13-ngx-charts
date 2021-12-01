import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { gridLayout, gridSize } from '../common/grid-layout.helper';
import { ScaleType } from '../common/types/scale-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../common/charts/chart.component";
import * as i2 from "./card-series.component";
const _c0 = function (a0, a1) { return [a0, a1]; };
export class NumberCardComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.emptyColor = 'rgba(0, 0, 0, 0)';
        this.innerPadding = 15;
        this.margin = [10, 10, 10, 10];
    }
    get clickable() {
        return !!this.select.observers.length;
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin
        });
        this.formatDates();
        this.domain = this.getDomain();
        this.setColors();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
        const size = gridSize(this.dims, this.results.length, 150);
        const N = size[0] * size[1];
        const data = this.results.slice();
        while (data.length < N) {
            data.push({ value: null });
        }
        this.data = gridLayout(this.dims, data, 150, this.designatedTotal);
    }
    getDomain() {
        return this.results.map(d => d.label);
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, ScaleType.Ordinal, this.domain, this.customColors);
    }
}
NumberCardComponent.ɵfac = /*@__PURE__*/ function () { let ɵNumberCardComponent_BaseFactory; return function NumberCardComponent_Factory(t) { return (ɵNumberCardComponent_BaseFactory || (ɵNumberCardComponent_BaseFactory = i0.ɵɵgetInheritedFactory(NumberCardComponent)))(t || NumberCardComponent); }; }();
NumberCardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NumberCardComponent, selectors: [["ngx-charts-number-card"]], inputs: { cardColor: "cardColor", bandColor: "bandColor", emptyColor: "emptyColor", innerPadding: "innerPadding", textColor: "textColor", valueFormatting: "valueFormatting", labelFormatting: "labelFormatting", designatedTotal: "designatedTotal" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 20, consts: [[3, "view", "showLegend", "animations"], [1, "number-card", "chart"], ["ngx-charts-card-series", "", 3, "colors", "cardColor", "bandColor", "textColor", "emptyColor", "data", "dims", "innerPadding", "valueFormatting", "labelFormatting", "animations", "select"]], template: function NumberCardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "g", 1);
        i0.ɵɵelementStart(2, "g", 2);
        i0.ɵɵlistener("select", function NumberCardComponent_Template__svg_g_select_2_listener($event) { return ctx.onClick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("view", i0.ɵɵpureFunction2(17, _c0, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("clickable", ctx.clickable);
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("colors", ctx.colors)("cardColor", ctx.cardColor)("bandColor", ctx.bandColor)("textColor", ctx.textColor)("emptyColor", ctx.emptyColor)("data", ctx.data)("dims", ctx.dims)("innerPadding", ctx.innerPadding)("valueFormatting", ctx.valueFormatting)("labelFormatting", ctx.labelFormatting)("animations", ctx.animations);
    } }, directives: [i1.ChartComponent, i2.CardSeriesComponent], styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", "ngx-charts-number-card .cell .trimmed-label{font-size:12px;pointer-events:none;overflow:hidden;text-align:left;line-height:1em}ngx-charts-number-card .cell .trimmed-label p{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%;padding:0;margin:0}ngx-charts-number-card .cell .value-text{pointer-events:none}ngx-charts-number-card .number-card.clickable .cell .card,ngx-charts-number-card .number-card.clickable .cell .card-band{cursor:pointer}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberCardComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-number-card', template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
      <svg:g [attr.transform]="transform" class="number-card chart" [class.clickable]="clickable">
        <svg:g
          ngx-charts-card-series
          [colors]="colors"
          [cardColor]="cardColor"
          [bandColor]="bandColor"
          [textColor]="textColor"
          [emptyColor]="emptyColor"
          [data]="data"
          [dims]="dims"
          [innerPadding]="innerPadding"
          [valueFormatting]="valueFormatting"
          [labelFormatting]="labelFormatting"
          [animations]="animations"
          (select)="onClick($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", "ngx-charts-number-card .cell .trimmed-label{font-size:12px;pointer-events:none;overflow:hidden;text-align:left;line-height:1em}ngx-charts-number-card .cell .trimmed-label p{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%;padding:0;margin:0}ngx-charts-number-card .cell .value-text{pointer-events:none}ngx-charts-number-card .number-card.clickable .cell .card,ngx-charts-number-card .number-card.clickable .cell .card-band{cursor:pointer}\n"] }]
    }], null, { cardColor: [{
            type: Input
        }], bandColor: [{
            type: Input
        }], emptyColor: [{
            type: Input
        }], innerPadding: [{
            type: Input
        }], textColor: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], designatedTotal: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL251bWJlci1jYXJkL251bWJlci1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUdwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBNkI1RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsa0JBQWtCO0lBM0IzRDs7UUE4QlcsZUFBVSxHQUFXLGtCQUFrQixDQUFDO1FBQ3hDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBV25DLFdBQU0sR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBNkNyQztJQTNDQyxJQUFJLFNBQVM7UUFDWCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDeEMsQ0FBQztJQUVELE1BQU07UUFDSixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsSUFBSSxHQUFHLHVCQUF1QixDQUFDO1lBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3JCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUUvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUV2RSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBUSxDQUFDO0lBQzVFLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQUk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hHLENBQUM7O3VQQTNEVSxtQkFBbUIsU0FBbkIsbUJBQW1CO3NFQUFuQixtQkFBbUI7UUF4QjVCLDJDQUEwRjtRQUN4RixtQkFBNEY7UUFBNUYsNEJBQTRGO1FBQzFGLDRCQWNFO1FBREEsd0dBQVUsbUJBQWUsSUFBQztRQWI1QixpQkFjRTtRQUNKLGlCQUFRO1FBQ1YsaUJBQW1COztRQWxCRCx5RUFBd0IscUJBQUEsOEJBQUE7UUFDc0IsZUFBNkI7UUFBN0IsMENBQTZCO1FBQXBGLDBDQUE0QjtRQUcvQixlQUFpQjtRQUFqQixtQ0FBaUIsNEJBQUEsNEJBQUEsNEJBQUEsOEJBQUEsa0JBQUEsa0JBQUEsa0NBQUEsd0NBQUEsd0NBQUEsOEJBQUE7O3VGQW9CZCxtQkFBbUI7Y0EzQi9CLFNBQVM7MkJBQ0Usd0JBQXdCLFlBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVCxpQkFFYyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO2dCQUd0QyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IGNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3ZpZXctZGltZW5zaW9ucy5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmltcG9ydCB7IGdyaWRMYXlvdXQsIGdyaWRTaXplIH0gZnJvbSAnLi4vY29tbW9uL2dyaWQtbGF5b3V0LmhlbHBlcic7XG5pbXBvcnQgeyBDYXJkTW9kZWwgfSBmcm9tICcuL2NhcmQtc2VyaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3RGltZW5zaW9ucyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy92aWV3LWRpbWVuc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2NhbGVUeXBlIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3NjYWxlLXR5cGUuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jaGFydHMtbnVtYmVyLWNhcmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZ3gtY2hhcnRzLWNoYXJ0IFt2aWV3XT1cIlt3aWR0aCwgaGVpZ2h0XVwiIFtzaG93TGVnZW5kXT1cImZhbHNlXCIgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiPlxuICAgICAgPHN2ZzpnIFthdHRyLnRyYW5zZm9ybV09XCJ0cmFuc2Zvcm1cIiBjbGFzcz1cIm51bWJlci1jYXJkIGNoYXJ0XCIgW2NsYXNzLmNsaWNrYWJsZV09XCJjbGlja2FibGVcIj5cbiAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgbmd4LWNoYXJ0cy1jYXJkLXNlcmllc1xuICAgICAgICAgIFtjb2xvcnNdPVwiY29sb3JzXCJcbiAgICAgICAgICBbY2FyZENvbG9yXT1cImNhcmRDb2xvclwiXG4gICAgICAgICAgW2JhbmRDb2xvcl09XCJiYW5kQ29sb3JcIlxuICAgICAgICAgIFt0ZXh0Q29sb3JdPVwidGV4dENvbG9yXCJcbiAgICAgICAgICBbZW1wdHlDb2xvcl09XCJlbXB0eUNvbG9yXCJcbiAgICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgICBbZGltc109XCJkaW1zXCJcbiAgICAgICAgICBbaW5uZXJQYWRkaW5nXT1cImlubmVyUGFkZGluZ1wiXG4gICAgICAgICAgW3ZhbHVlRm9ybWF0dGluZ109XCJ2YWx1ZUZvcm1hdHRpbmdcIlxuICAgICAgICAgIFtsYWJlbEZvcm1hdHRpbmddPVwibGFiZWxGb3JtYXR0aW5nXCJcbiAgICAgICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICAgICAgICAoc2VsZWN0KT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgIC8+XG4gICAgICA8L3N2ZzpnPlxuICAgIDwvbmd4LWNoYXJ0cy1jaGFydD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzJywgJy4vY2FyZC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJDYXJkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2FyZENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJhbmRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBlbXB0eUNvbG9yOiBzdHJpbmcgPSAncmdiYSgwLCAwLCAwLCAwKSc7XG4gIEBJbnB1dCgpIGlubmVyUGFkZGluZzogbnVtYmVyID0gMTU7XG4gIEBJbnB1dCgpIHRleHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZUZvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgbGFiZWxGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIGRlc2lnbmF0ZWRUb3RhbDogbnVtYmVyO1xuXG4gIGRpbXM6IFZpZXdEaW1lbnNpb25zO1xuICBkYXRhOiBDYXJkTW9kZWxbXTtcbiAgY29sb3JzOiBDb2xvckhlbHBlcjtcbiAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIGRvbWFpbjogYW55W107XG4gIG1hcmdpbjogbnVtYmVyW10gPSBbMTAsIDEwLCAxMCwgMTBdO1xuXG4gIGdldCBjbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5zZWxlY3Qub2JzZXJ2ZXJzLmxlbmd0aDtcbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoKTtcblxuICAgIHRoaXMuZGltcyA9IGNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zKHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG1hcmdpbnM6IHRoaXMubWFyZ2luXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm1hdERhdGVzKCk7XG5cbiAgICB0aGlzLmRvbWFpbiA9IHRoaXMuZ2V0RG9tYWluKCk7XG5cbiAgICB0aGlzLnNldENvbG9ycygpO1xuICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMuZGltcy54T2Zmc2V0fSAsICR7dGhpcy5tYXJnaW5bMF19KWA7XG5cbiAgICBjb25zdCBzaXplID0gZ3JpZFNpemUodGhpcy5kaW1zLCB0aGlzLnJlc3VsdHMubGVuZ3RoLCAxNTApO1xuICAgIGNvbnN0IE4gPSBzaXplWzBdICogc2l6ZVsxXTtcblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VsdHMuc2xpY2UoKTtcblxuICAgIHdoaWxlIChkYXRhLmxlbmd0aCA8IE4pIHtcbiAgICAgIGRhdGEucHVzaCh7IHZhbHVlOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YSA9IGdyaWRMYXlvdXQodGhpcy5kaW1zLCBkYXRhLCAxNTAsIHRoaXMuZGVzaWduYXRlZFRvdGFsKSBhcyBhbnk7XG4gIH1cblxuICBnZXREb21haW4oKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdHMubWFwKGQgPT4gZC5sYWJlbCk7XG4gIH1cblxuICBvbkNsaWNrKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgc2V0Q29sb3JzKCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3JzID0gbmV3IENvbG9ySGVscGVyKHRoaXMuc2NoZW1lLCBTY2FsZVR5cGUuT3JkaW5hbCwgdGhpcy5kb21haW4sIHRoaXMuY3VzdG9tQ29sb3JzKTtcbiAgfVxufVxuIl19