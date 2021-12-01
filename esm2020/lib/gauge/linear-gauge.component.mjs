import { Component, Input, ViewChild, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { scaleLinear } from 'd3-scale';
import { BaseChartComponent } from '../common/base-chart.component';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { calculateTextWidth } from '../utils/calculate-width';
import { VERDANA_FONT_WIDTHS_16_PX } from '../common/constants/font-widths';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { BarOrientation } from '../common/types/bar-orientation.enum';
import { ScaleType } from '../common/types/scale-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../common/charts/chart.component";
import * as i2 from "../bar-chart/bar.component";
import * as i3 from "@angular/common";
const _c0 = ["valueTextEl"];
const _c1 = ["unitsTextEl"];
function LinearGaugeComponent__svg_line_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "line", 10);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("transform", ctx_r0.transformLine)("stroke", ctx_r0.colors.getColor(ctx_r0.units));
} }
function LinearGaugeComponent__svg_line_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "line", 11);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("transform", ctx_r1.transformLine)("stroke", ctx_r1.colors.getColor(ctx_r1.units));
} }
const _c2 = function (a0, a1) { return [a0, a1]; };
const _c3 = function () { return {}; };
var ElementType;
(function (ElementType) {
    ElementType["Value"] = "value";
    ElementType["Units"] = "units";
})(ElementType || (ElementType = {}));
export class LinearGaugeComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.min = 0;
        this.max = 100;
        this.value = 0;
        this.margin = [10, 20, 10, 20];
        this.valueResizeScale = 1;
        this.unitsResizeScale = 1;
        this.valueTextTransform = '';
        this.valueTranslate = '';
        this.unitsTextTransform = '';
        this.unitsTranslate = '';
        this.barOrientation = BarOrientation;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        setTimeout(() => {
            this.scaleText(ElementType.Value);
            this.scaleText(ElementType.Units);
        });
    }
    update() {
        super.update();
        this.hasPreviousValue = this.previousValue !== undefined;
        this.max = Math.max(this.max, this.value);
        this.min = Math.min(this.min, this.value);
        if (this.hasPreviousValue) {
            this.max = Math.max(this.max, this.previousValue);
            this.min = Math.min(this.min, this.previousValue);
        }
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin
        });
        this.valueDomain = this.getValueDomain();
        this.valueScale = this.getValueScale();
        this.displayValue = this.getDisplayValue();
        this.setColors();
        const xOffset = this.margin[3] + this.dims.width / 2;
        const yOffset = this.margin[0] + this.dims.height / 2;
        this.transform = `translate(${xOffset}, ${yOffset})`;
        this.transformLine = `translate(${this.margin[3] + this.valueScale(this.previousValue)}, ${yOffset})`;
        this.valueTranslate = `translate(0, -15)`;
        this.unitsTranslate = `translate(0, 15)`;
        if (isPlatformServer(this.platformId)) {
            this.scaleTextSSR('value');
            this.scaleTextSSR('units');
        }
        else {
            setTimeout(() => this.scaleText(ElementType.Value), 50);
            setTimeout(() => this.scaleText(ElementType.Units), 50);
        }
    }
    getValueDomain() {
        return [this.min, this.max];
    }
    getValueScale() {
        return scaleLinear().range([0, this.dims.width]).domain(this.valueDomain);
    }
    getDisplayValue() {
        if (this.valueFormatting) {
            return this.valueFormatting(this.value);
        }
        return this.value.toLocaleString();
    }
    scaleText(element, repeat = true) {
        let el;
        let resizeScale;
        if (element === ElementType.Value) {
            el = this.valueTextEl;
            resizeScale = this.valueResizeScale;
        }
        else {
            el = this.unitsTextEl;
            resizeScale = this.unitsResizeScale;
        }
        const { width, height } = el.nativeElement.getBoundingClientRect();
        if (width === 0 || height === 0)
            return;
        const oldScale = resizeScale;
        const availableWidth = this.dims.width;
        const availableHeight = Math.max(this.dims.height / 2 - 15, 0);
        const resizeScaleWidth = Math.floor((availableWidth / (width / resizeScale)) * 100) / 100;
        const resizeScaleHeight = Math.floor((availableHeight / (height / resizeScale)) * 100) / 100;
        resizeScale = Math.min(resizeScaleHeight, resizeScaleWidth);
        if (resizeScale !== oldScale) {
            if (element === ElementType.Value) {
                this.valueResizeScale = resizeScale;
                this.valueTextTransform = `scale(${resizeScale}, ${resizeScale})`;
            }
            else {
                this.unitsResizeScale = resizeScale;
                this.unitsTextTransform = `scale(${resizeScale}, ${resizeScale})`;
            }
            this.cd.markForCheck();
            if (repeat && isPlatformBrowser(this.platformId)) {
                setTimeout(() => {
                    this.scaleText(element, false);
                }, 50);
            }
        }
    }
    scaleTextSSR(element) {
        let resizeScale = 1;
        const value = element === 'value' ? this.displayValue : this.units;
        const width = calculateTextWidth(VERDANA_FONT_WIDTHS_16_PX, value, 10);
        const height = 25;
        const availableWidth = this.dims.width;
        const availableHeight = Math.max(this.dims.height / 2 - 15, 0);
        const resizeScaleWidth = Math.floor((availableWidth / (width / resizeScale)) * 100) / 100;
        const resizeScaleHeight = Math.floor((availableHeight / (height / resizeScale)) * 100) / 100;
        resizeScale = Math.min(resizeScaleHeight, resizeScaleWidth);
        if (element === 'value') {
            this.valueResizeScale = resizeScale;
            this.valueTextTransform = `scale(${resizeScale}, ${resizeScale})`;
        }
        else {
            this.unitsResizeScale = resizeScale;
            this.unitsTextTransform = `scale(${resizeScale}, ${resizeScale})`;
        }
        this.cd.markForCheck();
    }
    onClick() {
        this.select.emit({
            name: 'Value',
            value: this.value
        });
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, ScaleType.Ordinal, [this.value], this.customColors);
    }
}
LinearGaugeComponent.ɵfac = /*@__PURE__*/ function () { let ɵLinearGaugeComponent_BaseFactory; return function LinearGaugeComponent_Factory(t) { return (ɵLinearGaugeComponent_BaseFactory || (ɵLinearGaugeComponent_BaseFactory = i0.ɵɵgetInheritedFactory(LinearGaugeComponent)))(t || LinearGaugeComponent); }; }();
LinearGaugeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LinearGaugeComponent, selectors: [["ngx-charts-linear-gauge"]], viewQuery: function LinearGaugeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.valueTextEl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.unitsTextEl = _t.first);
    } }, inputs: { min: "min", max: "max", value: "value", units: "units", previousValue: "previousValue", valueFormatting: "valueFormatting" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 15, vars: 38, consts: [[3, "view", "showLegend", "animations", "click"], [1, "linear-gauge", "chart"], ["ngx-charts-bar", "", 1, "background-bar", 3, "width", "height", "x", "y", "data", "orientation", "roundEdges", "animations"], ["ngx-charts-bar", "", 3, "width", "height", "x", "y", "fill", "data", "orientation", "roundEdges", "animations"], ["x1", "0", "y1", "5", "x2", "0", "y2", "15", 4, "ngIf"], ["x1", "0", "y1", "-5", "x2", "0", "y2", "-15", 4, "ngIf"], ["alignment-baseline", "after-edge", 1, "value"], ["valueTextEl", ""], ["alignment-baseline", "before-edge", 1, "units"], ["unitsTextEl", ""], ["x1", "0", "y1", "5", "x2", "0", "y2", "15"], ["x1", "0", "y1", "-5", "x2", "0", "y2", "-15"]], template: function LinearGaugeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        i0.ɵɵlistener("click", function LinearGaugeComponent_Template_ngx_charts_chart_click_0_listener() { return ctx.onClick(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "g", 1);
        i0.ɵɵelement(2, "g", 2);
        i0.ɵɵelement(3, "g", 3);
        i0.ɵɵtemplate(4, LinearGaugeComponent__svg_line_4_Template, 1, 2, "line", 4);
        i0.ɵɵtemplate(5, LinearGaugeComponent__svg_line_5_Template, 1, 2, "line", 5);
        i0.ɵɵelementStart(6, "g");
        i0.ɵɵelementStart(7, "g");
        i0.ɵɵelementStart(8, "text", 6, 7);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "g");
        i0.ɵɵelementStart(12, "text", 8, 9);
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("view", i0.ɵɵpureFunction2(33, _c2, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("width", ctx.dims.width)("height", 3)("x", ctx.margin[3])("y", ctx.dims.height / 2 + ctx.margin[0] - 2)("data", i0.ɵɵpureFunction0(36, _c3))("orientation", ctx.barOrientation.Horizontal)("roundEdges", true)("animations", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("width", ctx.valueScale(ctx.value))("height", 3)("x", ctx.margin[3])("y", ctx.dims.height / 2 + ctx.margin[0] - 2)("fill", ctx.colors.getColor(ctx.units))("data", i0.ɵɵpureFunction0(37, _c3))("orientation", ctx.barOrientation.Horizontal)("roundEdges", true)("animations", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasPreviousValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasPreviousValue);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.valueTranslate);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("text-anchor", "middle");
        i0.ɵɵattribute("transform", ctx.valueTextTransform);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.displayValue, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.unitsTranslate);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("text-anchor", "middle");
        i0.ɵɵattribute("transform", ctx.unitsTextTransform);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.units, " ");
    } }, directives: [i1.ChartComponent, i2.BarComponent, i3.NgIf], styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".linear-gauge{cursor:pointer}.linear-gauge .background-bar path{fill:#0000000d}.linear-gauge .units{fill:#666}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LinearGaugeComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-linear-gauge', template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations" (click)="onClick()">
      <svg:g class="linear-gauge chart">
        <svg:g
          ngx-charts-bar
          class="background-bar"
          [width]="dims.width"
          [height]="3"
          [x]="margin[3]"
          [y]="dims.height / 2 + margin[0] - 2"
          [data]="{}"
          [orientation]="barOrientation.Horizontal"
          [roundEdges]="true"
          [animations]="animations"
        ></svg:g>
        <svg:g
          ngx-charts-bar
          [width]="valueScale(value)"
          [height]="3"
          [x]="margin[3]"
          [y]="dims.height / 2 + margin[0] - 2"
          [fill]="colors.getColor(units)"
          [data]="{}"
          [orientation]="barOrientation.Horizontal"
          [roundEdges]="true"
          [animations]="animations"
        ></svg:g>

        <svg:line
          *ngIf="hasPreviousValue"
          [attr.transform]="transformLine"
          x1="0"
          y1="5"
          x2="0"
          y2="15"
          [attr.stroke]="colors.getColor(units)"
        />

        <svg:line
          *ngIf="hasPreviousValue"
          [attr.transform]="transformLine"
          x1="0"
          y1="-5"
          x2="0"
          y2="-15"
          [attr.stroke]="colors.getColor(units)"
        />

        <svg:g [attr.transform]="transform">
          <svg:g [attr.transform]="valueTranslate">
            <svg:text
              #valueTextEl
              class="value"
              [style.textAnchor]="'middle'"
              [attr.transform]="valueTextTransform"
              alignment-baseline="after-edge"
            >
              {{ displayValue }}
            </svg:text>
          </svg:g>

          <svg:g [attr.transform]="unitsTranslate">
            <svg:text
              #unitsTextEl
              class="units"
              [style.textAnchor]="'middle'"
              [attr.transform]="unitsTextTransform"
              alignment-baseline="before-edge"
            >
              {{ units }}
            </svg:text>
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".linear-gauge{cursor:pointer}.linear-gauge .background-bar path{fill:#0000000d}.linear-gauge .units{fill:#666}\n"] }]
    }], null, { min: [{
            type: Input
        }], max: [{
            type: Input
        }], value: [{
            type: Input
        }], units: [{
            type: Input
        }], previousValue: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], valueTextEl: [{
            type: ViewChild,
            args: ['valueTextEl']
        }], unitsTextEl: [{
            type: ViewChild,
            args: ['unitsTextEl']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyLWdhdWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9nYXVnZS9saW5lYXItZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7OztJQXFDcEQsMkJBUUU7OztJQU5BLGlEQUFnQyxnREFBQTs7OztJQVFsQywyQkFRRTs7O0lBTkEsaURBQWdDLGdEQUFBOzs7O0FBL0MxQyxJQUFLLFdBR0o7QUFIRCxXQUFLLFdBQVc7SUFDZCw4QkFBZSxDQUFBO0lBQ2YsOEJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSEksV0FBVyxLQUFYLFdBQVcsUUFHZjtBQW9GRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsa0JBQWtCO0lBbEY1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QWE7WUFDRSxXQUFXO2tCQUFwQyxTQUFTO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNjYWxlTGluZWFyIH0gZnJvbSAnZDMtc2NhbGUnO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vYmFzZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgY2FsY3VsYXRlVmlld0RpbWVuc2lvbnMgfSBmcm9tICcuLi9jb21tb24vdmlldy1kaW1lbnNpb25zLmhlbHBlcic7XG5pbXBvcnQgeyBDb2xvckhlbHBlciB9IGZyb20gJy4uL2NvbW1vbi9jb2xvci5oZWxwZXInO1xuaW1wb3J0IHsgY2FsY3VsYXRlVGV4dFdpZHRoIH0gZnJvbSAnLi4vdXRpbHMvY2FsY3VsYXRlLXdpZHRoJztcbmltcG9ydCB7IFZFUkRBTkFfRk9OVF9XSURUSFNfMTZfUFggfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2ZvbnQtd2lkdGhzJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3ZpZXctZGltZW5zaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBCYXJPcmllbnRhdGlvbiB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9iYXItb3JpZW50YXRpb24uZW51bSc7XG5pbXBvcnQgeyBTY2FsZVR5cGUgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvc2NhbGUtdHlwZS5lbnVtJztcblxuZW51bSBFbGVtZW50VHlwZSB7XG4gIFZhbHVlID0gJ3ZhbHVlJyxcbiAgVW5pdHMgPSAndW5pdHMnXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jaGFydHMtbGluZWFyLWdhdWdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LWNoYXJ0cy1jaGFydCBbdmlld109XCJbd2lkdGgsIGhlaWdodF1cIiBbc2hvd0xlZ2VuZF09XCJmYWxzZVwiIFthbmltYXRpb25zXT1cImFuaW1hdGlvbnNcIiAoY2xpY2spPVwib25DbGljaygpXCI+XG4gICAgICA8c3ZnOmcgY2xhc3M9XCJsaW5lYXItZ2F1Z2UgY2hhcnRcIj5cbiAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgbmd4LWNoYXJ0cy1iYXJcbiAgICAgICAgICBjbGFzcz1cImJhY2tncm91bmQtYmFyXCJcbiAgICAgICAgICBbd2lkdGhdPVwiZGltcy53aWR0aFwiXG4gICAgICAgICAgW2hlaWdodF09XCIzXCJcbiAgICAgICAgICBbeF09XCJtYXJnaW5bM11cIlxuICAgICAgICAgIFt5XT1cImRpbXMuaGVpZ2h0IC8gMiArIG1hcmdpblswXSAtIDJcIlxuICAgICAgICAgIFtkYXRhXT1cInt9XCJcbiAgICAgICAgICBbb3JpZW50YXRpb25dPVwiYmFyT3JpZW50YXRpb24uSG9yaXpvbnRhbFwiXG4gICAgICAgICAgW3JvdW5kRWRnZXNdPVwidHJ1ZVwiXG4gICAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAgID48L3N2ZzpnPlxuICAgICAgICA8c3ZnOmdcbiAgICAgICAgICBuZ3gtY2hhcnRzLWJhclxuICAgICAgICAgIFt3aWR0aF09XCJ2YWx1ZVNjYWxlKHZhbHVlKVwiXG4gICAgICAgICAgW2hlaWdodF09XCIzXCJcbiAgICAgICAgICBbeF09XCJtYXJnaW5bM11cIlxuICAgICAgICAgIFt5XT1cImRpbXMuaGVpZ2h0IC8gMiArIG1hcmdpblswXSAtIDJcIlxuICAgICAgICAgIFtmaWxsXT1cImNvbG9ycy5nZXRDb2xvcih1bml0cylcIlxuICAgICAgICAgIFtkYXRhXT1cInt9XCJcbiAgICAgICAgICBbb3JpZW50YXRpb25dPVwiYmFyT3JpZW50YXRpb24uSG9yaXpvbnRhbFwiXG4gICAgICAgICAgW3JvdW5kRWRnZXNdPVwidHJ1ZVwiXG4gICAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAgID48L3N2ZzpnPlxuXG4gICAgICAgIDxzdmc6bGluZVxuICAgICAgICAgICpuZ0lmPVwiaGFzUHJldmlvdXNWYWx1ZVwiXG4gICAgICAgICAgW2F0dHIudHJhbnNmb3JtXT1cInRyYW5zZm9ybUxpbmVcIlxuICAgICAgICAgIHgxPVwiMFwiXG4gICAgICAgICAgeTE9XCI1XCJcbiAgICAgICAgICB4Mj1cIjBcIlxuICAgICAgICAgIHkyPVwiMTVcIlxuICAgICAgICAgIFthdHRyLnN0cm9rZV09XCJjb2xvcnMuZ2V0Q29sb3IodW5pdHMpXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8c3ZnOmxpbmVcbiAgICAgICAgICAqbmdJZj1cImhhc1ByZXZpb3VzVmFsdWVcIlxuICAgICAgICAgIFthdHRyLnRyYW5zZm9ybV09XCJ0cmFuc2Zvcm1MaW5lXCJcbiAgICAgICAgICB4MT1cIjBcIlxuICAgICAgICAgIHkxPVwiLTVcIlxuICAgICAgICAgIHgyPVwiMFwiXG4gICAgICAgICAgeTI9XCItMTVcIlxuICAgICAgICAgIFthdHRyLnN0cm9rZV09XCJjb2xvcnMuZ2V0Q29sb3IodW5pdHMpXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8c3ZnOmcgW2F0dHIudHJhbnNmb3JtXT1cInRyYW5zZm9ybVwiPlxuICAgICAgICAgIDxzdmc6ZyBbYXR0ci50cmFuc2Zvcm1dPVwidmFsdWVUcmFuc2xhdGVcIj5cbiAgICAgICAgICAgIDxzdmc6dGV4dFxuICAgICAgICAgICAgICAjdmFsdWVUZXh0RWxcbiAgICAgICAgICAgICAgY2xhc3M9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgIFtzdHlsZS50ZXh0QW5jaG9yXT1cIidtaWRkbGUnXCJcbiAgICAgICAgICAgICAgW2F0dHIudHJhbnNmb3JtXT1cInZhbHVlVGV4dFRyYW5zZm9ybVwiXG4gICAgICAgICAgICAgIGFsaWdubWVudC1iYXNlbGluZT1cImFmdGVyLWVkZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBkaXNwbGF5VmFsdWUgfX1cbiAgICAgICAgICAgIDwvc3ZnOnRleHQ+XG4gICAgICAgICAgPC9zdmc6Zz5cblxuICAgICAgICAgIDxzdmc6ZyBbYXR0ci50cmFuc2Zvcm1dPVwidW5pdHNUcmFuc2xhdGVcIj5cbiAgICAgICAgICAgIDxzdmc6dGV4dFxuICAgICAgICAgICAgICAjdW5pdHNUZXh0RWxcbiAgICAgICAgICAgICAgY2xhc3M9XCJ1bml0c1wiXG4gICAgICAgICAgICAgIFtzdHlsZS50ZXh0QW5jaG9yXT1cIidtaWRkbGUnXCJcbiAgICAgICAgICAgICAgW2F0dHIudHJhbnNmb3JtXT1cInVuaXRzVGV4dFRyYW5zZm9ybVwiXG4gICAgICAgICAgICAgIGFsaWdubWVudC1iYXNlbGluZT1cImJlZm9yZS1lZGdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgdW5pdHMgfX1cbiAgICAgICAgICAgIDwvc3ZnOnRleHQ+XG4gICAgICAgICAgPC9zdmc6Zz5cbiAgICAgICAgPC9zdmc6Zz5cbiAgICAgIDwvc3ZnOmc+XG4gICAgPC9uZ3gtY2hhcnRzLWNoYXJ0PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi4vY29tbW9uL2Jhc2UtY2hhcnQuY29tcG9uZW50LnNjc3MnLCAnLi9saW5lYXItZ2F1Z2UuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGluZWFyR2F1Z2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbWluOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBtYXg6IG51bWJlciA9IDEwMDtcbiAgQElucHV0KCkgdmFsdWU6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIHVuaXRzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByZXZpb3VzVmFsdWU6IG51bWJlcjtcbiAgQElucHV0KCkgdmFsdWVGb3JtYXR0aW5nOiBhbnk7XG5cbiAgQFZpZXdDaGlsZCgndmFsdWVUZXh0RWwnKSB2YWx1ZVRleHRFbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndW5pdHNUZXh0RWwnKSB1bml0c1RleHRFbDogRWxlbWVudFJlZjtcblxuICBkaW1zOiBWaWV3RGltZW5zaW9ucztcbiAgdmFsdWVEb21haW46IFtudW1iZXIsIG51bWJlcl07XG4gIHZhbHVlU2NhbGU6IGFueTtcblxuICBjb2xvcnM6IENvbG9ySGVscGVyO1xuICB0cmFuc2Zvcm06IHN0cmluZztcbiAgbWFyZ2luOiBudW1iZXJbXSA9IFsxMCwgMjAsIDEwLCAyMF07XG4gIHRyYW5zZm9ybUxpbmU6IHN0cmluZztcblxuICB2YWx1ZVJlc2l6ZVNjYWxlOiBudW1iZXIgPSAxO1xuICB1bml0c1Jlc2l6ZVNjYWxlOiBudW1iZXIgPSAxO1xuICB2YWx1ZVRleHRUcmFuc2Zvcm06IHN0cmluZyA9ICcnO1xuICB2YWx1ZVRyYW5zbGF0ZTogc3RyaW5nID0gJyc7XG4gIHVuaXRzVGV4dFRyYW5zZm9ybTogc3RyaW5nID0gJyc7XG4gIHVuaXRzVHJhbnNsYXRlOiBzdHJpbmcgPSAnJztcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmc7XG4gIGhhc1ByZXZpb3VzVmFsdWU6IGJvb2xlYW47XG5cbiAgYmFyT3JpZW50YXRpb24gPSBCYXJPcmllbnRhdGlvbjtcblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNjYWxlVGV4dChFbGVtZW50VHlwZS5WYWx1ZSk7XG4gICAgICB0aGlzLnNjYWxlVGV4dChFbGVtZW50VHlwZS5Vbml0cyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlKCk7XG5cbiAgICB0aGlzLmhhc1ByZXZpb3VzVmFsdWUgPSB0aGlzLnByZXZpb3VzVmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1heCA9IE1hdGgubWF4KHRoaXMubWF4LCB0aGlzLnZhbHVlKTtcbiAgICB0aGlzLm1pbiA9IE1hdGgubWluKHRoaXMubWluLCB0aGlzLnZhbHVlKTtcbiAgICBpZiAodGhpcy5oYXNQcmV2aW91c1ZhbHVlKSB7XG4gICAgICB0aGlzLm1heCA9IE1hdGgubWF4KHRoaXMubWF4LCB0aGlzLnByZXZpb3VzVmFsdWUpO1xuICAgICAgdGhpcy5taW4gPSBNYXRoLm1pbih0aGlzLm1pbiwgdGhpcy5wcmV2aW91c1ZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpbXMgPSBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucyh7XG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBtYXJnaW5zOiB0aGlzLm1hcmdpblxuICAgIH0pO1xuXG4gICAgdGhpcy52YWx1ZURvbWFpbiA9IHRoaXMuZ2V0VmFsdWVEb21haW4oKTtcbiAgICB0aGlzLnZhbHVlU2NhbGUgPSB0aGlzLmdldFZhbHVlU2NhbGUoKTtcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHRoaXMuZ2V0RGlzcGxheVZhbHVlKCk7XG5cbiAgICB0aGlzLnNldENvbG9ycygpO1xuXG4gICAgY29uc3QgeE9mZnNldCA9IHRoaXMubWFyZ2luWzNdICsgdGhpcy5kaW1zLndpZHRoIC8gMjtcbiAgICBjb25zdCB5T2Zmc2V0ID0gdGhpcy5tYXJnaW5bMF0gKyB0aGlzLmRpbXMuaGVpZ2h0IC8gMjtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3hPZmZzZXR9LCAke3lPZmZzZXR9KWA7XG4gICAgdGhpcy50cmFuc2Zvcm1MaW5lID0gYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luWzNdICsgdGhpcy52YWx1ZVNjYWxlKHRoaXMucHJldmlvdXNWYWx1ZSl9LCAke3lPZmZzZXR9KWA7XG4gICAgdGhpcy52YWx1ZVRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUoMCwgLTE1KWA7XG4gICAgdGhpcy51bml0c1RyYW5zbGF0ZSA9IGB0cmFuc2xhdGUoMCwgMTUpYDtcblxuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuc2NhbGVUZXh0U1NSKCd2YWx1ZScpO1xuICAgICAgdGhpcy5zY2FsZVRleHRTU1IoJ3VuaXRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY2FsZVRleHQoRWxlbWVudFR5cGUuVmFsdWUpLCA1MCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2NhbGVUZXh0KEVsZW1lbnRUeXBlLlVuaXRzKSwgNTApO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlRG9tYWluKCk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgIHJldHVybiBbdGhpcy5taW4sIHRoaXMubWF4XTtcbiAgfVxuXG4gIGdldFZhbHVlU2NhbGUoKTogYW55IHtcbiAgICByZXR1cm4gc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgdGhpcy5kaW1zLndpZHRoXSkuZG9tYWluKHRoaXMudmFsdWVEb21haW4pO1xuICB9XG5cbiAgZ2V0RGlzcGxheVZhbHVlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMudmFsdWVGb3JtYXR0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZUZvcm1hdHRpbmcodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlLnRvTG9jYWxlU3RyaW5nKCk7XG4gIH1cblxuICBzY2FsZVRleHQoZWxlbWVudDogRWxlbWVudFR5cGUsIHJlcGVhdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBsZXQgZWw7XG4gICAgbGV0IHJlc2l6ZVNjYWxlO1xuICAgIGlmIChlbGVtZW50ID09PSBFbGVtZW50VHlwZS5WYWx1ZSkge1xuICAgICAgZWwgPSB0aGlzLnZhbHVlVGV4dEVsO1xuICAgICAgcmVzaXplU2NhbGUgPSB0aGlzLnZhbHVlUmVzaXplU2NhbGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsID0gdGhpcy51bml0c1RleHRFbDtcbiAgICAgIHJlc2l6ZVNjYWxlID0gdGhpcy51bml0c1Jlc2l6ZVNjYWxlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSByZXR1cm47XG4gICAgY29uc3Qgb2xkU2NhbGUgPSByZXNpemVTY2FsZTtcbiAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IHRoaXMuZGltcy53aWR0aDtcbiAgICBjb25zdCBhdmFpbGFibGVIZWlnaHQgPSBNYXRoLm1heCh0aGlzLmRpbXMuaGVpZ2h0IC8gMiAtIDE1LCAwKTtcbiAgICBjb25zdCByZXNpemVTY2FsZVdpZHRoID0gTWF0aC5mbG9vcigoYXZhaWxhYmxlV2lkdGggLyAod2lkdGggLyByZXNpemVTY2FsZSkpICogMTAwKSAvIDEwMDtcbiAgICBjb25zdCByZXNpemVTY2FsZUhlaWdodCA9IE1hdGguZmxvb3IoKGF2YWlsYWJsZUhlaWdodCAvIChoZWlnaHQgLyByZXNpemVTY2FsZSkpICogMTAwKSAvIDEwMDtcbiAgICByZXNpemVTY2FsZSA9IE1hdGgubWluKHJlc2l6ZVNjYWxlSGVpZ2h0LCByZXNpemVTY2FsZVdpZHRoKTtcblxuICAgIGlmIChyZXNpemVTY2FsZSAhPT0gb2xkU2NhbGUpIHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBFbGVtZW50VHlwZS5WYWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlUmVzaXplU2NhbGUgPSByZXNpemVTY2FsZTtcbiAgICAgICAgdGhpcy52YWx1ZVRleHRUcmFuc2Zvcm0gPSBgc2NhbGUoJHtyZXNpemVTY2FsZX0sICR7cmVzaXplU2NhbGV9KWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVuaXRzUmVzaXplU2NhbGUgPSByZXNpemVTY2FsZTtcbiAgICAgICAgdGhpcy51bml0c1RleHRUcmFuc2Zvcm0gPSBgc2NhbGUoJHtyZXNpemVTY2FsZX0sICR7cmVzaXplU2NhbGV9KWA7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgaWYgKHJlcGVhdCAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2NhbGVUZXh0KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgfSwgNTApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNjYWxlVGV4dFNTUihlbGVtZW50KSB7XG4gICAgbGV0IHJlc2l6ZVNjYWxlID0gMTtcblxuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudCA9PT0gJ3ZhbHVlJyA/IHRoaXMuZGlzcGxheVZhbHVlIDogdGhpcy51bml0cztcbiAgICBjb25zdCB3aWR0aCA9IGNhbGN1bGF0ZVRleHRXaWR0aChWRVJEQU5BX0ZPTlRfV0lEVEhTXzE2X1BYLCB2YWx1ZSwgMTApO1xuICAgIGNvbnN0IGhlaWdodCA9IDI1O1xuXG4gICAgY29uc3QgYXZhaWxhYmxlV2lkdGggPSB0aGlzLmRpbXMud2lkdGg7XG4gICAgY29uc3QgYXZhaWxhYmxlSGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5kaW1zLmhlaWdodCAvIDIgLSAxNSwgMCk7XG4gICAgY29uc3QgcmVzaXplU2NhbGVXaWR0aCA9IE1hdGguZmxvb3IoKGF2YWlsYWJsZVdpZHRoIC8gKHdpZHRoIC8gcmVzaXplU2NhbGUpKSAqIDEwMCkgLyAxMDA7XG4gICAgY29uc3QgcmVzaXplU2NhbGVIZWlnaHQgPSBNYXRoLmZsb29yKChhdmFpbGFibGVIZWlnaHQgLyAoaGVpZ2h0IC8gcmVzaXplU2NhbGUpKSAqIDEwMCkgLyAxMDA7XG4gICAgcmVzaXplU2NhbGUgPSBNYXRoLm1pbihyZXNpemVTY2FsZUhlaWdodCwgcmVzaXplU2NhbGVXaWR0aCk7XG5cbiAgICBpZiAoZWxlbWVudCA9PT0gJ3ZhbHVlJykge1xuICAgICAgdGhpcy52YWx1ZVJlc2l6ZVNjYWxlID0gcmVzaXplU2NhbGU7XG4gICAgICB0aGlzLnZhbHVlVGV4dFRyYW5zZm9ybSA9IGBzY2FsZSgke3Jlc2l6ZVNjYWxlfSwgJHtyZXNpemVTY2FsZX0pYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bml0c1Jlc2l6ZVNjYWxlID0gcmVzaXplU2NhbGU7XG4gICAgICB0aGlzLnVuaXRzVGV4dFRyYW5zZm9ybSA9IGBzY2FsZSgke3Jlc2l6ZVNjYWxlfSwgJHtyZXNpemVTY2FsZX0pYDtcbiAgICB9XG5cbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHtcbiAgICAgIG5hbWU6ICdWYWx1ZScsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0Q29sb3JzKCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3JzID0gbmV3IENvbG9ySGVscGVyKHRoaXMuc2NoZW1lLCBTY2FsZVR5cGUuT3JkaW5hbCwgW3RoaXMudmFsdWVdLCB0aGlzLmN1c3RvbUNvbG9ycyk7XG4gIH1cbn1cbiJdfQ==