import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, ContentChild, Output, EventEmitter } from '@angular/core';
import { min } from 'd3-array';
import { format } from 'd3-format';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { trimLabel } from '../common/trim-label.helper';
import { gridLayout } from '../common/grid-layout.helper';
import { formatLabel } from '../common/label.helper';
import { PlacementTypes } from '../common/tooltip/position';
import { StyleTypes } from '../common/tooltip/style.type';
import { ScaleType } from '../common/types/scale-type.enum';
import * as i0 from "@angular/core";
const _c0 = ["tooltipTemplate"];
function PieGridComponent__svg_g_2__svg_text_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "text", 10);
} if (rf & 2) {
    const series_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("countTo", series_r1.percent)("countSuffix", "%");
} }
function PieGridComponent__svg_g_2__svg_text_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", series_r1.percent.toLocaleString(), " ");
} }
function PieGridComponent__svg_g_2__svg_text_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "text", 12);
} if (rf & 2) {
    const series_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("countTo", series_r1.total)("countPrefix", ctx_r4.label + ": ");
    i0.ɵɵattribute("y", series_r1.outerRadius);
} }
function PieGridComponent__svg_g_2__svg_text_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵattribute("y", series_r1.outerRadius);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", ctx_r5.label, ": ", series_r1.total.toLocaleString(), " ");
} }
const _c1 = function (a0) { return { data: a0 }; };
function PieGridComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 3);
    i0.ɵɵelementStart(1, "g", 4);
    i0.ɵɵlistener("select", function PieGridComponent__svg_g_2_Template__svg_g_select_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onClick($event); })("activate", function PieGridComponent__svg_g_2_Template__svg_g_activate_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onActivate($event); })("deactivate", function PieGridComponent__svg_g_2_Template__svg_g_deactivate_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onDeactivate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, PieGridComponent__svg_g_2__svg_text_2_Template, 1, 2, "text", 5);
    i0.ɵɵtemplate(3, PieGridComponent__svg_g_2__svg_text_3_Template, 2, 1, "text", 6);
    i0.ɵɵelementStart(4, "text", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PieGridComponent__svg_g_2__svg_text_6_Template, 1, 3, "text", 8);
    i0.ɵɵtemplate(7, PieGridComponent__svg_g_2__svg_text_7_Template, 2, 3, "text", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("transform", series_r1.transform);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("colors", series_r1.colors)("data", series_r1.data)("innerRadius", series_r1.innerRadius)("outerRadius", series_r1.outerRadius)("animations", ctx_r0.animations)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", ctx_r0.placementTypes.Top)("tooltipType", ctx_r0.styleTypes.tooltip)("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : ctx_r0.tooltipText(i0.ɵɵpureFunction1(17, _c1, series_r1)))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", series_r1.data[0].data);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.animations);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.animations);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", series_r1.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.animations);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.animations);
} }
const _c2 = function (a0, a1) { return [a0, a1]; };
export class PieGridComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.tooltipDisabled = false;
        this.label = 'Total';
        this.minWidth = 150;
        this.activeEntries = [];
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [20, 20, 20, 20];
        this.placementTypes = PlacementTypes;
        this.styleTypes = StyleTypes;
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
        this.data = gridLayout(this.dims, this.results, this.minWidth, this.designatedTotal);
        this.transform = `translate(${this.margin[3]} , ${this.margin[0]})`;
        this.series = this.getSeries();
        this.setColors();
        this.tooltipText = this.tooltipText || this.defaultTooltipText;
    }
    defaultTooltipText({ data }) {
        const label = trimLabel(formatLabel(data.name));
        const val = data.value.toLocaleString();
        return `
      <span class="tooltip-label">${label}</span>
      <span class="tooltip-val">${val}</span>
    `;
    }
    getDomain() {
        return this.results.map(d => d.label);
    }
    getSeries() {
        const total = this.designatedTotal ? this.designatedTotal : this.getTotal();
        return this.data.map(d => {
            const baselineLabelHeight = 20;
            const padding = 10;
            const name = d.data.name;
            const label = formatLabel(name);
            const value = d.data.value;
            const radius = min([d.width - padding, d.height - baselineLabelHeight]) / 2 - 5;
            const innerRadius = radius * 0.9;
            let count = 0;
            const colors = () => {
                count += 1;
                if (count === 1) {
                    return 'rgba(100,100,100,0.3)';
                }
                else {
                    return this.colorScale.getColor(label);
                }
            };
            const xPos = d.x + (d.width - padding) / 2;
            const yPos = d.y + (d.height - baselineLabelHeight) / 2;
            return {
                transform: `translate(${xPos}, ${yPos})`,
                colors,
                innerRadius,
                outerRadius: radius,
                name,
                label: trimLabel(label),
                total: value,
                value,
                percent: format('.1%')(d.data.percent),
                data: [
                    d,
                    {
                        data: {
                            other: true,
                            value: total - value,
                            name: d.data.name
                        }
                    }
                ]
            };
        });
    }
    getTotal() {
        return this.results.map(d => d.value).reduce((sum, d) => sum + d, 0);
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        this.colorScale = new ColorHelper(this.scheme, ScaleType.Ordinal, this.domain, this.customColors);
    }
    onActivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item, fromLegend = false) {
        item = this.results.find(d => {
            if (fromLegend) {
                return d.label === item.name;
            }
            else {
                return d.name === item.name;
            }
        });
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
PieGridComponent.ɵfac = /*@__PURE__*/ function () { let ɵPieGridComponent_BaseFactory; return function PieGridComponent_Factory(t) { return (ɵPieGridComponent_BaseFactory || (ɵPieGridComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PieGridComponent)))(t || PieGridComponent); }; }();
PieGridComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PieGridComponent, selectors: [["ngx-charts-pie-grid"]], contentQueries: function PieGridComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { designatedTotal: "designatedTotal", tooltipDisabled: "tooltipDisabled", tooltipText: "tooltipText", label: "label", minWidth: "minWidth", activeEntries: "activeEntries" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 8, consts: [[3, "view", "showLegend", "animations"], [1, "pie-grid", "chart"], ["class", "pie-grid-item", 4, "ngFor", "ngForOf"], [1, "pie-grid-item"], ["ngx-charts-pie-grid-series", "", "ngx-tooltip", "", 3, "colors", "data", "innerRadius", "outerRadius", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate"], ["class", "label percent-label", "dy", "-0.5em", "x", "0", "y", "5", "ngx-charts-count-up", "", "text-anchor", "middle", 3, "countTo", "countSuffix", 4, "ngIf"], ["class", "label percent-label", "dy", "-0.5em", "x", "0", "y", "5", "text-anchor", "middle", 4, "ngIf"], ["dy", "0.5em", "x", "0", "y", "5", "text-anchor", "middle", 1, "label"], ["class", "label", "dy", "1.23em", "x", "0", "text-anchor", "middle", "ngx-charts-count-up", "", 3, "countTo", "countPrefix", 4, "ngIf"], ["class", "label", "dy", "1.23em", "x", "0", "text-anchor", "middle", 4, "ngIf"], ["dy", "-0.5em", "x", "0", "y", "5", "ngx-charts-count-up", "", "text-anchor", "middle", 1, "label", "percent-label", 3, "countTo", "countSuffix"], ["dy", "-0.5em", "x", "0", "y", "5", "text-anchor", "middle", 1, "label", "percent-label"], ["dy", "1.23em", "x", "0", "text-anchor", "middle", "ngx-charts-count-up", "", 1, "label", 3, "countTo", "countPrefix"], ["dy", "1.23em", "x", "0", "text-anchor", "middle", 1, "label"]], template: function PieGridComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "g", 1);
        i0.ɵɵtemplate(2, PieGridComponent__svg_g_2_Template, 8, 19, "g", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("view", i0.ɵɵpureFunction2(5, _c2, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.series);
    } }, styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".pie-grid .arc1{opacity:.4}.pie-grid .percent-label{font-size:16px;font-weight:400}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PieGridComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-pie-grid', template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
      <svg:g [attr.transform]="transform" class="pie-grid chart">
        <svg:g *ngFor="let series of series" class="pie-grid-item" [attr.transform]="series.transform">
          <svg:g
            ngx-charts-pie-grid-series
            [colors]="series.colors"
            [data]="series.data"
            [innerRadius]="series.innerRadius"
            [outerRadius]="series.outerRadius"
            [animations]="animations"
            (select)="onClick($event)"
            ngx-tooltip
            [tooltipDisabled]="tooltipDisabled"
            [tooltipPlacement]="placementTypes.Top"
            [tooltipType]="styleTypes.tooltip"
            [tooltipTitle]="tooltipTemplate ? undefined : tooltipText({ data: series })"
            [tooltipTemplate]="tooltipTemplate"
            [tooltipContext]="series.data[0].data"
            (activate)="onActivate($event)"
            (deactivate)="onDeactivate($event)"
          />
          <svg:text
            *ngIf="animations"
            class="label percent-label"
            dy="-0.5em"
            x="0"
            y="5"
            ngx-charts-count-up
            [countTo]="series.percent"
            [countSuffix]="'%'"
            text-anchor="middle"
          ></svg:text>
          <svg:text *ngIf="!animations" class="label percent-label" dy="-0.5em" x="0" y="5" text-anchor="middle">
            {{ series.percent.toLocaleString() }}
          </svg:text>
          <svg:text class="label" dy="0.5em" x="0" y="5" text-anchor="middle">
            {{ series.label }}
          </svg:text>
          <svg:text
            *ngIf="animations"
            class="label"
            dy="1.23em"
            x="0"
            [attr.y]="series.outerRadius"
            text-anchor="middle"
            ngx-charts-count-up
            [countTo]="series.total"
            [countPrefix]="label + ': '"
          ></svg:text>
          <svg:text
            *ngIf="!animations"
            class="label"
            dy="1.23em"
            x="0"
            [attr.y]="series.outerRadius"
            text-anchor="middle"
          >
            {{ label }}: {{ series.total.toLocaleString() }}
          </svg:text>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".pie-grid .arc1{opacity:.4}.pie-grid .percent-label{font-size:16px;font-weight:400}\n"] }]
    }], null, { designatedTotal: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], tooltipText: [{
            type: Input
        }], label: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL3BpZS1jaGFydC9waWUtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixZQUFZLEVBRVosTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7OztJQWtDbEQsMkJBVVk7OztJQUhWLDJDQUEwQixvQkFBQTs7OztJQUk1QixnQ0FBdUc7SUFDckcsWUFDRjtJQUFBLGlCQUFXOzs7SUFEVCxlQUNGO0lBREUsbUVBQ0Y7Ozs7SUFJQSwyQkFVWTs7OztJQUZWLHlDQUF3QixvQ0FBQTtJQUh4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aUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO2dCQUd0QyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUVJLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBYTBCLGVBQWU7a0JBQS9DLFlBQVk7bUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb250ZW50Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1pbiB9IGZyb20gJ2QzLWFycmF5JztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2QzLWZvcm1hdCc7XG5cbmltcG9ydCB7IGNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3ZpZXctZGltZW5zaW9ucy5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0cmltTGFiZWwgfSBmcm9tICcuLi9jb21tb24vdHJpbS1sYWJlbC5oZWxwZXInO1xuaW1wb3J0IHsgZ3JpZExheW91dCB9IGZyb20gJy4uL2NvbW1vbi9ncmlkLWxheW91dC5oZWxwZXInO1xuaW1wb3J0IHsgZm9ybWF0TGFiZWwgfSBmcm9tICcuLi9jb21tb24vbGFiZWwuaGVscGVyJztcbmltcG9ydCB7IERhdGFJdGVtLCBQaWVHcmlkRGF0YUl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvY2hhcnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBQbGFjZW1lbnRUeXBlcyB9IGZyb20gJy4uL2NvbW1vbi90b29sdGlwL3Bvc2l0aW9uJztcbmltcG9ydCB7IFN0eWxlVHlwZXMgfSBmcm9tICcuLi9jb21tb24vdG9vbHRpcC9zdHlsZS50eXBlJztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3ZpZXctZGltZW5zaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTY2FsZVR5cGUgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvc2NhbGUtdHlwZS5lbnVtJztcblxuZXhwb3J0IGludGVyZmFjZSBQaWVHcmlkRGF0YSB7XG4gIGRhdGE6IFBpZUdyaWREYXRhSXRlbTtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtY2hhcnRzLXBpZS1ncmlkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LWNoYXJ0cy1jaGFydCBbdmlld109XCJbd2lkdGgsIGhlaWdodF1cIiBbc2hvd0xlZ2VuZF09XCJmYWxzZVwiIFthbmltYXRpb25zXT1cImFuaW1hdGlvbnNcIj5cbiAgICAgIDxzdmc6ZyBbYXR0ci50cmFuc2Zvcm1dPVwidHJhbnNmb3JtXCIgY2xhc3M9XCJwaWUtZ3JpZCBjaGFydFwiPlxuICAgICAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IHNlcmllcyBvZiBzZXJpZXNcIiBjbGFzcz1cInBpZS1ncmlkLWl0ZW1cIiBbYXR0ci50cmFuc2Zvcm1dPVwic2VyaWVzLnRyYW5zZm9ybVwiPlxuICAgICAgICAgIDxzdmc6Z1xuICAgICAgICAgICAgbmd4LWNoYXJ0cy1waWUtZ3JpZC1zZXJpZXNcbiAgICAgICAgICAgIFtjb2xvcnNdPVwic2VyaWVzLmNvbG9yc1wiXG4gICAgICAgICAgICBbZGF0YV09XCJzZXJpZXMuZGF0YVwiXG4gICAgICAgICAgICBbaW5uZXJSYWRpdXNdPVwic2VyaWVzLmlubmVyUmFkaXVzXCJcbiAgICAgICAgICAgIFtvdXRlclJhZGl1c109XCJzZXJpZXMub3V0ZXJSYWRpdXNcIlxuICAgICAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAgICAgICAoc2VsZWN0KT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICBuZ3gtdG9vbHRpcFxuICAgICAgICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0b29sdGlwRGlzYWJsZWRcIlxuICAgICAgICAgICAgW3Rvb2x0aXBQbGFjZW1lbnRdPVwicGxhY2VtZW50VHlwZXMuVG9wXCJcbiAgICAgICAgICAgIFt0b29sdGlwVHlwZV09XCJzdHlsZVR5cGVzLnRvb2x0aXBcIlxuICAgICAgICAgICAgW3Rvb2x0aXBUaXRsZV09XCJ0b29sdGlwVGVtcGxhdGUgPyB1bmRlZmluZWQgOiB0b29sdGlwVGV4dCh7IGRhdGE6IHNlcmllcyB9KVwiXG4gICAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgICBbdG9vbHRpcENvbnRleHRdPVwic2VyaWVzLmRhdGFbMF0uZGF0YVwiXG4gICAgICAgICAgICAoYWN0aXZhdGUpPVwib25BY3RpdmF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgIChkZWFjdGl2YXRlKT1cIm9uRGVhY3RpdmF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzdmc6dGV4dFxuICAgICAgICAgICAgKm5nSWY9XCJhbmltYXRpb25zXCJcbiAgICAgICAgICAgIGNsYXNzPVwibGFiZWwgcGVyY2VudC1sYWJlbFwiXG4gICAgICAgICAgICBkeT1cIi0wLjVlbVwiXG4gICAgICAgICAgICB4PVwiMFwiXG4gICAgICAgICAgICB5PVwiNVwiXG4gICAgICAgICAgICBuZ3gtY2hhcnRzLWNvdW50LXVwXG4gICAgICAgICAgICBbY291bnRUb109XCJzZXJpZXMucGVyY2VudFwiXG4gICAgICAgICAgICBbY291bnRTdWZmaXhdPVwiJyUnXCJcbiAgICAgICAgICAgIHRleHQtYW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICA+PC9zdmc6dGV4dD5cbiAgICAgICAgICA8c3ZnOnRleHQgKm5nSWY9XCIhYW5pbWF0aW9uc1wiIGNsYXNzPVwibGFiZWwgcGVyY2VudC1sYWJlbFwiIGR5PVwiLTAuNWVtXCIgeD1cIjBcIiB5PVwiNVwiIHRleHQtYW5jaG9yPVwibWlkZGxlXCI+XG4gICAgICAgICAgICB7eyBzZXJpZXMucGVyY2VudC50b0xvY2FsZVN0cmluZygpIH19XG4gICAgICAgICAgPC9zdmc6dGV4dD5cbiAgICAgICAgICA8c3ZnOnRleHQgY2xhc3M9XCJsYWJlbFwiIGR5PVwiMC41ZW1cIiB4PVwiMFwiIHk9XCI1XCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgICAgICAgIHt7IHNlcmllcy5sYWJlbCB9fVxuICAgICAgICAgIDwvc3ZnOnRleHQ+XG4gICAgICAgICAgPHN2Zzp0ZXh0XG4gICAgICAgICAgICAqbmdJZj1cImFuaW1hdGlvbnNcIlxuICAgICAgICAgICAgY2xhc3M9XCJsYWJlbFwiXG4gICAgICAgICAgICBkeT1cIjEuMjNlbVwiXG4gICAgICAgICAgICB4PVwiMFwiXG4gICAgICAgICAgICBbYXR0ci55XT1cInNlcmllcy5vdXRlclJhZGl1c1wiXG4gICAgICAgICAgICB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgICBuZ3gtY2hhcnRzLWNvdW50LXVwXG4gICAgICAgICAgICBbY291bnRUb109XCJzZXJpZXMudG90YWxcIlxuICAgICAgICAgICAgW2NvdW50UHJlZml4XT1cImxhYmVsICsgJzogJ1wiXG4gICAgICAgICAgPjwvc3ZnOnRleHQ+XG4gICAgICAgICAgPHN2Zzp0ZXh0XG4gICAgICAgICAgICAqbmdJZj1cIiFhbmltYXRpb25zXCJcbiAgICAgICAgICAgIGNsYXNzPVwibGFiZWxcIlxuICAgICAgICAgICAgZHk9XCIxLjIzZW1cIlxuICAgICAgICAgICAgeD1cIjBcIlxuICAgICAgICAgICAgW2F0dHIueV09XCJzZXJpZXMub3V0ZXJSYWRpdXNcIlxuICAgICAgICAgICAgdGV4dC1hbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGxhYmVsIH19OiB7eyBzZXJpZXMudG90YWwudG9Mb2NhbGVTdHJpbmcoKSB9fVxuICAgICAgICAgIDwvc3ZnOnRleHQ+XG4gICAgICAgIDwvc3ZnOmc+XG4gICAgICA8L3N2ZzpnPlxuICAgIDwvbmd4LWNoYXJ0cy1jaGFydD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzJywgJy4vcGllLWdyaWQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGllR3JpZENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRlc2lnbmF0ZWRUb3RhbDogbnVtYmVyO1xuICBASW5wdXQoKSB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbHRpcFRleHQ6IChvOiBhbnkpID0+IGFueTtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICdUb3RhbCc7XG4gIEBJbnB1dCgpIG1pbldpZHRoOiBudW1iZXIgPSAxNTA7XG4gIEBJbnB1dCgpIGFjdGl2ZUVudHJpZXM6IGFueVtdID0gW107XG5cbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGRpbXM6IFZpZXdEaW1lbnNpb25zO1xuICBkYXRhOiBQaWVHcmlkRGF0YVtdO1xuICB0cmFuc2Zvcm06IHN0cmluZztcbiAgc2VyaWVzOiBhbnlbXTtcbiAgZG9tYWluOiBzdHJpbmdbXTtcbiAgY29sb3JTY2FsZTogQ29sb3JIZWxwZXI7XG4gIG1hcmdpbjogbnVtYmVyW10gPSBbMjAsIDIwLCAyMCwgMjBdO1xuXG4gIHBsYWNlbWVudFR5cGVzID0gUGxhY2VtZW50VHlwZXM7XG4gIHN0eWxlVHlwZXMgPSBTdHlsZVR5cGVzO1xuXG4gIEBDb250ZW50Q2hpbGQoJ3Rvb2x0aXBUZW1wbGF0ZScpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlKCk7XG5cbiAgICB0aGlzLmRpbXMgPSBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucyh7XG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBtYXJnaW5zOiB0aGlzLm1hcmdpblxuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JtYXREYXRlcygpO1xuXG4gICAgdGhpcy5kb21haW4gPSB0aGlzLmdldERvbWFpbigpO1xuXG4gICAgdGhpcy5kYXRhID0gZ3JpZExheW91dCh0aGlzLmRpbXMsIHRoaXMucmVzdWx0cywgdGhpcy5taW5XaWR0aCwgdGhpcy5kZXNpZ25hdGVkVG90YWwpO1xuICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMubWFyZ2luWzNdfSAsICR7dGhpcy5tYXJnaW5bMF19KWA7XG5cbiAgICB0aGlzLnNlcmllcyA9IHRoaXMuZ2V0U2VyaWVzKCk7XG4gICAgdGhpcy5zZXRDb2xvcnMoKTtcblxuICAgIHRoaXMudG9vbHRpcFRleHQgPSB0aGlzLnRvb2x0aXBUZXh0IHx8IHRoaXMuZGVmYXVsdFRvb2x0aXBUZXh0O1xuICB9XG5cbiAgZGVmYXVsdFRvb2x0aXBUZXh0KHsgZGF0YSB9KTogc3RyaW5nIHtcbiAgICBjb25zdCBsYWJlbCA9IHRyaW1MYWJlbChmb3JtYXRMYWJlbChkYXRhLm5hbWUpKTtcbiAgICBjb25zdCB2YWwgPSBkYXRhLnZhbHVlLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC1sYWJlbFwiPiR7bGFiZWx9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLXZhbFwiPiR7dmFsfTwvc3Bhbj5cbiAgICBgO1xuICB9XG5cbiAgZ2V0RG9tYWluKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHRzLm1hcChkID0+IGQubGFiZWwpO1xuICB9XG5cbiAgZ2V0U2VyaWVzKCk6IGFueVtdIHtcbiAgICBjb25zdCB0b3RhbCA9IHRoaXMuZGVzaWduYXRlZFRvdGFsID8gdGhpcy5kZXNpZ25hdGVkVG90YWwgOiB0aGlzLmdldFRvdGFsKCk7XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcChkID0+IHtcbiAgICAgIGNvbnN0IGJhc2VsaW5lTGFiZWxIZWlnaHQgPSAyMDtcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSAxMDtcbiAgICAgIGNvbnN0IG5hbWUgPSBkLmRhdGEubmFtZTtcbiAgICAgIGNvbnN0IGxhYmVsID0gZm9ybWF0TGFiZWwobmFtZSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGQuZGF0YS52YWx1ZTtcbiAgICAgIGNvbnN0IHJhZGl1cyA9IG1pbihbZC53aWR0aCAtIHBhZGRpbmcsIGQuaGVpZ2h0IC0gYmFzZWxpbmVMYWJlbEhlaWdodF0pIC8gMiAtIDU7XG4gICAgICBjb25zdCBpbm5lclJhZGl1cyA9IHJhZGl1cyAqIDAuOTtcblxuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGNvbnN0IGNvbG9ycyA9ICgpID0+IHtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuICdyZ2JhKDEwMCwxMDAsMTAwLDAuMyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yU2NhbGUuZ2V0Q29sb3IobGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB4UG9zID0gZC54ICsgKGQud2lkdGggLSBwYWRkaW5nKSAvIDI7XG4gICAgICBjb25zdCB5UG9zID0gZC55ICsgKGQuaGVpZ2h0IC0gYmFzZWxpbmVMYWJlbEhlaWdodCkgLyAyO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHt4UG9zfSwgJHt5UG9zfSlgLFxuICAgICAgICBjb2xvcnMsXG4gICAgICAgIGlubmVyUmFkaXVzLFxuICAgICAgICBvdXRlclJhZGl1czogcmFkaXVzLFxuICAgICAgICBuYW1lLFxuICAgICAgICBsYWJlbDogdHJpbUxhYmVsKGxhYmVsKSxcbiAgICAgICAgdG90YWw6IHZhbHVlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgcGVyY2VudDogZm9ybWF0KCcuMSUnKShkLmRhdGEucGVyY2VudCksXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICBkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgb3RoZXI6IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiB0b3RhbCAtIHZhbHVlLFxuICAgICAgICAgICAgICBuYW1lOiBkLmRhdGEubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRvdGFsKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0cy5tYXAoZCA9PiBkLnZhbHVlKS5yZWR1Y2UoKHN1bSwgZCkgPT4gc3VtICsgZCwgMCk7XG4gIH1cblxuICBvbkNsaWNrKGRhdGE6IERhdGFJdGVtKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcbiAgfVxuXG4gIHNldENvbG9ycygpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yU2NhbGUgPSBuZXcgQ29sb3JIZWxwZXIodGhpcy5zY2hlbWUsIFNjYWxlVHlwZS5PcmRpbmFsLCB0aGlzLmRvbWFpbiwgdGhpcy5jdXN0b21Db2xvcnMpO1xuICB9XG5cbiAgb25BY3RpdmF0ZShpdGVtLCBmcm9tTGVnZW5kID0gZmFsc2UpIHtcbiAgICBpdGVtID0gdGhpcy5yZXN1bHRzLmZpbmQoZCA9PiB7XG4gICAgICBpZiAoZnJvbUxlZ2VuZCkge1xuICAgICAgICByZXR1cm4gZC5sYWJlbCA9PT0gaXRlbS5uYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGQubmFtZSA9PT0gaXRlbS5uYW1lO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaWR4ID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmRJbmRleChkID0+IHtcbiAgICAgIHJldHVybiBkLm5hbWUgPT09IGl0ZW0ubmFtZSAmJiBkLnZhbHVlID09PSBpdGVtLnZhbHVlICYmIGQuc2VyaWVzID09PSBpdGVtLnNlcmllcztcbiAgICB9KTtcbiAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSBbaXRlbSwgLi4udGhpcy5hY3RpdmVFbnRyaWVzXTtcbiAgICB0aGlzLmFjdGl2YXRlLmVtaXQoeyB2YWx1ZTogaXRlbSwgZW50cmllczogdGhpcy5hY3RpdmVFbnRyaWVzIH0pO1xuICB9XG5cbiAgb25EZWFjdGl2YXRlKGl0ZW0sIGZyb21MZWdlbmQgPSBmYWxzZSkge1xuICAgIGl0ZW0gPSB0aGlzLnJlc3VsdHMuZmluZChkID0+IHtcbiAgICAgIGlmIChmcm9tTGVnZW5kKSB7XG4gICAgICAgIHJldHVybiBkLmxhYmVsID09PSBpdGVtLm5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZC5uYW1lID09PSBpdGVtLm5hbWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBpZHggPSB0aGlzLmFjdGl2ZUVudHJpZXMuZmluZEluZGV4KGQgPT4ge1xuICAgICAgcmV0dXJuIGQubmFtZSA9PT0gaXRlbS5uYW1lICYmIGQudmFsdWUgPT09IGl0ZW0udmFsdWUgJiYgZC5zZXJpZXMgPT09IGl0ZW0uc2VyaWVzO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmVFbnRyaWVzLnNwbGljZShpZHgsIDEpO1xuICAgIHRoaXMuYWN0aXZlRW50cmllcyA9IFsuLi50aGlzLmFjdGl2ZUVudHJpZXNdO1xuXG4gICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyB2YWx1ZTogaXRlbSwgZW50cmllczogdGhpcy5hY3RpdmVFbnRyaWVzIH0pO1xuICB9XG59XG4iXX0=