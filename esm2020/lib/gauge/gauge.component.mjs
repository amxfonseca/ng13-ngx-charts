import { Component, Input, ViewChild, ChangeDetectionStrategy, Output, EventEmitter, ViewEncapsulation, ContentChild } from '@angular/core';
import { scaleLinear } from 'd3-scale';
import { BaseChartComponent } from '../common/base-chart.component';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { LegendPosition } from '../common/types/legend.model';
import { ScaleType } from '../common/types/scale-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../common/charts/chart.component";
import * as i2 from "@angular/common";
import * as i3 from "./gauge-arc.component";
import * as i4 from "./gauge-axis.component";
const _c0 = ["tooltipTemplate"];
const _c1 = ["textEl"];
function GaugeComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelementStart(1, "g", 5);
    i0.ɵɵlistener("select", function GaugeComponent__svg_g_2_Template__svg_g_select_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onClick($event); })("activate", function GaugeComponent__svg_g_2_Template__svg_g_activate_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onActivate($event); })("deactivate", function GaugeComponent__svg_g_2_Template__svg_g_deactivate_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onDeactivate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const arc_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("transform", ctx_r0.rotation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("backgroundArc", arc_r3.backgroundArc)("valueArc", arc_r3.valueArc)("cornerRadius", ctx_r0.cornerRadius)("colors", ctx_r0.colors)("isActive", ctx_r0.isActive(arc_r3.valueArc.data))("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipTemplate", ctx_r0.tooltipTemplate)("valueFormatting", ctx_r0.valueFormatting)("animations", ctx_r0.animations);
} }
function GaugeComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "g", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("bigSegments", ctx_r1.bigSegments)("smallSegments", ctx_r1.smallSegments)("min", ctx_r1.min)("max", ctx_r1.max)("radius", ctx_r1.outerRadius)("angleSpan", ctx_r1.angleSpan)("valueScale", ctx_r1.valueScale)("startAngle", ctx_r1.startAngle)("tickFormatting", ctx_r1.axisTickFormatting);
} }
function GaugeComponent__svg_text_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 7, 8);
    i0.ɵɵelementStart(2, "tspan", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "tspan", 10);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("text-anchor", "middle");
    i0.ɵɵattribute("transform", ctx_r2.textTransform);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.displayValue);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.units);
} }
const _c2 = function (a0, a1) { return [a0, a1]; };
export class GaugeComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = LegendPosition.Right;
        this.min = 0;
        this.max = 100;
        this.bigSegments = 10;
        this.smallSegments = 5;
        this.showAxis = true;
        this.startAngle = -120;
        this.angleSpan = 240;
        this.activeEntries = [];
        this.tooltipDisabled = false;
        this.showText = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.resizeScale = 1;
        this.rotation = '';
        this.textTransform = 'scale(1, 1)';
        this.cornerRadius = 10;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        setTimeout(() => this.scaleText());
    }
    update() {
        super.update();
        if (!this.showAxis) {
            if (!this.margin) {
                this.margin = [10, 20, 10, 20];
            }
        }
        else {
            if (!this.margin) {
                this.margin = [60, 100, 60, 100];
            }
        }
        // make the starting angle positive
        if (this.startAngle < 0) {
            this.startAngle = (this.startAngle % 360) + 360;
        }
        this.angleSpan = Math.min(this.angleSpan, 360);
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showLegend: this.legend,
            legendPosition: this.legendPosition
        });
        this.domain = this.getDomain();
        this.valueDomain = this.getValueDomain();
        this.valueScale = this.getValueScale();
        this.displayValue = this.getDisplayValue();
        this.outerRadius = Math.min(this.dims.width, this.dims.height) / 2;
        this.arcs = this.getArcs();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        const xOffset = this.margin[3] + this.dims.width / 2;
        const yOffset = this.margin[0] + this.dims.height / 2;
        this.transform = `translate(${xOffset}, ${yOffset})`;
        this.rotation = `rotate(${this.startAngle})`;
        setTimeout(() => this.scaleText(), 50);
    }
    getArcs() {
        const arcs = [];
        const availableRadius = this.outerRadius * 0.7;
        const radiusPerArc = Math.min(availableRadius / this.results.length, 10);
        const arcWidth = radiusPerArc * 0.7;
        this.textRadius = this.outerRadius - this.results.length * radiusPerArc;
        this.cornerRadius = Math.floor(arcWidth / 2);
        let i = 0;
        for (const d of this.results) {
            const outerRadius = this.outerRadius - i * radiusPerArc;
            const innerRadius = outerRadius - arcWidth;
            const backgroundArc = {
                endAngle: (this.angleSpan * Math.PI) / 180,
                innerRadius,
                outerRadius,
                data: {
                    value: this.max,
                    name: d.name
                }
            };
            const valueArc = {
                endAngle: (Math.min(this.valueScale(d.value), this.angleSpan) * Math.PI) / 180,
                innerRadius,
                outerRadius,
                data: {
                    value: d.value,
                    name: d.name
                }
            };
            const arc = {
                backgroundArc,
                valueArc
            };
            arcs.push(arc);
            i++;
        }
        return arcs;
    }
    getDomain() {
        return this.results.map(d => d.name);
    }
    getValueDomain() {
        const values = this.results.map(d => d.value);
        const dataMin = Math.min(...values);
        const dataMax = Math.max(...values);
        if (this.min !== undefined) {
            this.min = Math.min(this.min, dataMin);
        }
        else {
            this.min = dataMin;
        }
        if (this.max !== undefined) {
            this.max = Math.max(this.max, dataMax);
        }
        else {
            this.max = dataMax;
        }
        return [this.min, this.max];
    }
    getValueScale() {
        return scaleLinear().range([0, this.angleSpan]).nice().domain(this.valueDomain);
    }
    getDisplayValue() {
        const value = this.results.map(d => d.value).reduce((a, b) => a + b, 0);
        if (this.textValue && 0 !== this.textValue.length) {
            return this.textValue.toLocaleString();
        }
        if (this.valueFormatting) {
            return this.valueFormatting(value);
        }
        return value.toLocaleString();
    }
    scaleText(repeat = true) {
        if (!this.showText) {
            return;
        }
        const { width } = this.textEl.nativeElement.getBoundingClientRect();
        const oldScale = this.resizeScale;
        if (width === 0) {
            this.resizeScale = 1;
        }
        else {
            const availableSpace = this.textRadius;
            this.resizeScale = Math.floor((availableSpace / (width / this.resizeScale)) * 100) / 100;
        }
        if (this.resizeScale !== oldScale) {
            this.textTransform = `scale(${this.resizeScale}, ${this.resizeScale})`;
            this.cd.markForCheck();
            if (repeat) {
                setTimeout(() => this.scaleText(false), 50);
            }
        }
    }
    onClick(data) {
        this.select.emit(data);
    }
    getLegendOptions() {
        return {
            scaleType: ScaleType.Ordinal,
            colors: this.colors,
            domain: this.domain,
            title: this.legendTitle,
            position: this.legendPosition
        };
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, ScaleType.Ordinal, this.domain, this.customColors);
    }
    onActivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item, ...this.activeEntries];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = [...this.activeEntries];
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name && entry.series === d.series;
        });
        return item !== undefined;
    }
    trackBy(index, item) {
        return item.valueArc.data.name;
    }
}
GaugeComponent.ɵfac = /*@__PURE__*/ function () { let ɵGaugeComponent_BaseFactory; return function GaugeComponent_Factory(t) { return (ɵGaugeComponent_BaseFactory || (ɵGaugeComponent_BaseFactory = i0.ɵɵgetInheritedFactory(GaugeComponent)))(t || GaugeComponent); }; }();
GaugeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GaugeComponent, selectors: [["ngx-charts-gauge"]], contentQueries: function GaugeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, viewQuery: function GaugeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textEl = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", min: "min", max: "max", textValue: "textValue", units: "units", bigSegments: "bigSegments", smallSegments: "smallSegments", results: "results", showAxis: "showAxis", startAngle: "startAngle", angleSpan: "angleSpan", activeEntries: "activeEntries", axisTickFormatting: "axisTickFormatting", tooltipDisabled: "tooltipDisabled", valueFormatting: "valueFormatting", showText: "showText", margin: "margin" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 13, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "gauge", "chart"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-gauge-axis", "", 3, "bigSegments", "smallSegments", "min", "max", "radius", "angleSpan", "valueScale", "startAngle", "tickFormatting", 4, "ngIf"], ["alignment-baseline", "central", 3, "textAnchor", 4, "ngIf"], ["ngx-charts-gauge-arc", "", 3, "backgroundArc", "valueArc", "cornerRadius", "colors", "isActive", "tooltipDisabled", "tooltipTemplate", "valueFormatting", "animations", "select", "activate", "deactivate"], ["ngx-charts-gauge-axis", "", 3, "bigSegments", "smallSegments", "min", "max", "radius", "angleSpan", "valueScale", "startAngle", "tickFormatting"], ["alignment-baseline", "central"], ["textEl", ""], ["x", "0", "dy", "0"], ["x", "0", "dy", "1.2em"]], template: function GaugeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        i0.ɵɵlistener("legendLabelClick", function GaugeComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function GaugeComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event); })("legendLabelDeactivate", function GaugeComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "g", 1);
        i0.ɵɵtemplate(2, GaugeComponent__svg_g_2_Template, 2, 10, "g", 2);
        i0.ɵɵtemplate(3, GaugeComponent__svg_g_3_Template, 1, 9, "g", 3);
        i0.ɵɵtemplate(4, GaugeComponent__svg_text_4_Template, 6, 5, "text", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("view", i0.ɵɵpureFunction2(10, _c2, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.arcs)("ngForTrackBy", ctx.trackBy);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showAxis);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showText);
    } }, directives: [i1.ChartComponent, i2.NgForOf, i2.NgIf, i3.GaugeArcComponent, i4.GaugeAxisComponent], styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".gauge .background-arc path{fill:#0000000d}.gauge .gauge-tick path{stroke:#666}.gauge .gauge-tick text{font-size:12px;fill:#666;font-weight:700}.gauge .gauge-tick-large path{stroke-width:2px}.gauge .gauge-tick-small path{stroke-width:1px}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GaugeComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-gauge', template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:g [attr.transform]="transform" class="gauge chart">
        <svg:g *ngFor="let arc of arcs; trackBy: trackBy" [attr.transform]="rotation">
          <svg:g
            ngx-charts-gauge-arc
            [backgroundArc]="arc.backgroundArc"
            [valueArc]="arc.valueArc"
            [cornerRadius]="cornerRadius"
            [colors]="colors"
            [isActive]="isActive(arc.valueArc.data)"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [valueFormatting]="valueFormatting"
            [animations]="animations"
            (select)="onClick($event)"
            (activate)="onActivate($event)"
            (deactivate)="onDeactivate($event)"
          ></svg:g>
        </svg:g>

        <svg:g
          ngx-charts-gauge-axis
          *ngIf="showAxis"
          [bigSegments]="bigSegments"
          [smallSegments]="smallSegments"
          [min]="min"
          [max]="max"
          [radius]="outerRadius"
          [angleSpan]="angleSpan"
          [valueScale]="valueScale"
          [startAngle]="startAngle"
          [tickFormatting]="axisTickFormatting"
        ></svg:g>

        <svg:text
          #textEl
          *ngIf="showText"
          [style.textAnchor]="'middle'"
          [attr.transform]="textTransform"
          alignment-baseline="central"
        >
          <tspan x="0" dy="0">{{ displayValue }}</tspan>
          <tspan x="0" dy="1.2em">{{ units }}</tspan>
        </svg:text>
      </svg:g>
    </ngx-charts-chart>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".gauge .background-arc path{fill:#0000000d}.gauge .gauge-tick path{stroke:#666}.gauge .gauge-tick text{font-size:12px;fill:#666;font-weight:700}.gauge .gauge-tick-large path{stroke-width:2px}.gauge .gauge-tick-small path{stroke-width:1px}\n"] }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], textValue: [{
            type: Input
        }], units: [{
            type: Input
        }], bigSegments: [{
            type: Input
        }], smallSegments: [{
            type: Input
        }], results: [{
            type: Input
        }], showAxis: [{
            type: Input
        }], startAngle: [{
            type: Input
        }], angleSpan: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], axisTickFormatting: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], showText: [{
            type: Input
        }], margin: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }], textEl: [{
            type: ViewChild,
            args: ['textEl']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2dhdWdlL2dhdWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxTQUFTLEVBRVQsdUJBQXVCLEVBQ3ZCLE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFlBQVksRUFFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7Ozs7SUFxQnBELHlCQUE4RTtJQUM1RSw0QkFjQztJQUhDLHNLQUFVLHNCQUFlLElBQUMsNkpBQ2QseUJBQWtCLElBREosaUtBRVosMkJBQW9CLElBRlI7SUFHM0IsaUJBQVE7SUFDWCxpQkFBUTs7OztJQWhCMEMsNENBQTJCO0lBR3pFLGVBQW1DO0lBQW5DLG9EQUFtQyw2QkFBQSxxQ0FBQSx5QkFBQSxtREFBQSwyQ0FBQSwyQ0FBQSwyQ0FBQSxpQ0FBQTs7OztJQWV2Qyx1QkFZUzs7O0lBVFAsZ0RBQTJCLHVDQUFBLG1CQUFBLG1CQUFBLDhCQUFBLCtCQUFBLGlDQUFBLGlDQUFBLDZDQUFBOzs7O0lBVzdCLGtDQU1DO0lBQ0MsZ0NBQW9CO0lBQUEsWUFBa0I7SUFBQSxpQkFBUTtJQUM5QyxpQ0FBd0I7SUFB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SztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFHRyxNQUFNO2tCQUFkLEtBQUs7WUFFSSxRQUFRO2tCQUFqQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUUwQixlQUFlO2tCQUEvQyxZQUFZO21CQUFDLGlCQUFpQjtZQUVWLE1BQU07a0JBQTFCLFNBQVM7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29udGVudENoaWxkLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNjYWxlTGluZWFyIH0gZnJvbSAnZDMtc2NhbGUnO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vYmFzZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgY2FsY3VsYXRlVmlld0RpbWVuc2lvbnMgfSBmcm9tICcuLi9jb21tb24vdmlldy1kaW1lbnNpb25zLmhlbHBlcic7XG5pbXBvcnQgeyBDb2xvckhlbHBlciB9IGZyb20gJy4uL2NvbW1vbi9jb2xvci5oZWxwZXInO1xuaW1wb3J0IHsgQXJjSXRlbSB9IGZyb20gJy4vZ2F1Z2UtYXJjLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWdlbmRPcHRpb25zLCBMZWdlbmRQb3NpdGlvbiB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9sZWdlbmQubW9kZWwnO1xuaW1wb3J0IHsgVmlld0RpbWVuc2lvbnMgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvdmlldy1kaW1lbnNpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IFNjYWxlVHlwZSB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9zY2FsZS10eXBlLmVudW0nO1xuXG5pbnRlcmZhY2UgQXJjcyB7XG4gIGJhY2tncm91bmRBcmM6IEFyY0l0ZW07XG4gIHZhbHVlQXJjOiBBcmNJdGVtO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtY2hhcnRzLWdhdWdlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LWNoYXJ0cy1jaGFydFxuICAgICAgW3ZpZXddPVwiW3dpZHRoLCBoZWlnaHRdXCJcbiAgICAgIFtzaG93TGVnZW5kXT1cImxlZ2VuZFwiXG4gICAgICBbbGVnZW5kT3B0aW9uc109XCJsZWdlbmRPcHRpb25zXCJcbiAgICAgIFthY3RpdmVFbnRyaWVzXT1cImFjdGl2ZUVudHJpZXNcIlxuICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAobGVnZW5kTGFiZWxDbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgKGxlZ2VuZExhYmVsQWN0aXZhdGUpPVwib25BY3RpdmF0ZSgkZXZlbnQpXCJcbiAgICAgIChsZWdlbmRMYWJlbERlYWN0aXZhdGUpPVwib25EZWFjdGl2YXRlKCRldmVudClcIlxuICAgID5cbiAgICAgIDxzdmc6ZyBbYXR0ci50cmFuc2Zvcm1dPVwidHJhbnNmb3JtXCIgY2xhc3M9XCJnYXVnZSBjaGFydFwiPlxuICAgICAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IGFyYyBvZiBhcmNzOyB0cmFja0J5OiB0cmFja0J5XCIgW2F0dHIudHJhbnNmb3JtXT1cInJvdGF0aW9uXCI+XG4gICAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgICBuZ3gtY2hhcnRzLWdhdWdlLWFyY1xuICAgICAgICAgICAgW2JhY2tncm91bmRBcmNdPVwiYXJjLmJhY2tncm91bmRBcmNcIlxuICAgICAgICAgICAgW3ZhbHVlQXJjXT1cImFyYy52YWx1ZUFyY1wiXG4gICAgICAgICAgICBbY29ybmVyUmFkaXVzXT1cImNvcm5lclJhZGl1c1wiXG4gICAgICAgICAgICBbY29sb3JzXT1cImNvbG9yc1wiXG4gICAgICAgICAgICBbaXNBY3RpdmVdPVwiaXNBY3RpdmUoYXJjLnZhbHVlQXJjLmRhdGEpXCJcbiAgICAgICAgICAgIFt0b29sdGlwRGlzYWJsZWRdPVwidG9vbHRpcERpc2FibGVkXCJcbiAgICAgICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgICAgIFt2YWx1ZUZvcm1hdHRpbmddPVwidmFsdWVGb3JtYXR0aW5nXCJcbiAgICAgICAgICAgIFthbmltYXRpb25zXT1cImFuaW1hdGlvbnNcIlxuICAgICAgICAgICAgKHNlbGVjdCk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgKGFjdGl2YXRlKT1cIm9uQWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAoZGVhY3RpdmF0ZSk9XCJvbkRlYWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgPjwvc3ZnOmc+XG4gICAgICAgIDwvc3ZnOmc+XG5cbiAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgbmd4LWNoYXJ0cy1nYXVnZS1heGlzXG4gICAgICAgICAgKm5nSWY9XCJzaG93QXhpc1wiXG4gICAgICAgICAgW2JpZ1NlZ21lbnRzXT1cImJpZ1NlZ21lbnRzXCJcbiAgICAgICAgICBbc21hbGxTZWdtZW50c109XCJzbWFsbFNlZ21lbnRzXCJcbiAgICAgICAgICBbbWluXT1cIm1pblwiXG4gICAgICAgICAgW21heF09XCJtYXhcIlxuICAgICAgICAgIFtyYWRpdXNdPVwib3V0ZXJSYWRpdXNcIlxuICAgICAgICAgIFthbmdsZVNwYW5dPVwiYW5nbGVTcGFuXCJcbiAgICAgICAgICBbdmFsdWVTY2FsZV09XCJ2YWx1ZVNjYWxlXCJcbiAgICAgICAgICBbc3RhcnRBbmdsZV09XCJzdGFydEFuZ2xlXCJcbiAgICAgICAgICBbdGlja0Zvcm1hdHRpbmddPVwiYXhpc1RpY2tGb3JtYXR0aW5nXCJcbiAgICAgICAgPjwvc3ZnOmc+XG5cbiAgICAgICAgPHN2Zzp0ZXh0XG4gICAgICAgICAgI3RleHRFbFxuICAgICAgICAgICpuZ0lmPVwic2hvd1RleHRcIlxuICAgICAgICAgIFtzdHlsZS50ZXh0QW5jaG9yXT1cIidtaWRkbGUnXCJcbiAgICAgICAgICBbYXR0ci50cmFuc2Zvcm1dPVwidGV4dFRyYW5zZm9ybVwiXG4gICAgICAgICAgYWxpZ25tZW50LWJhc2VsaW5lPVwiY2VudHJhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8dHNwYW4geD1cIjBcIiBkeT1cIjBcIj57eyBkaXNwbGF5VmFsdWUgfX08L3RzcGFuPlxuICAgICAgICAgIDx0c3BhbiB4PVwiMFwiIGR5PVwiMS4yZW1cIj57eyB1bml0cyB9fTwvdHNwYW4+XG4gICAgICAgIDwvc3ZnOnRleHQ+XG4gICAgICA8L3N2ZzpnPlxuICAgIDwvbmd4LWNoYXJ0cy1jaGFydD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzJywgJy4vZ2F1Z2UuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgR2F1Z2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbGVnZW5kOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxlZ2VuZFRpdGxlOiBzdHJpbmcgPSAnTGVnZW5kJztcbiAgQElucHV0KCkgbGVnZW5kUG9zaXRpb246IExlZ2VuZFBvc2l0aW9uID0gTGVnZW5kUG9zaXRpb24uUmlnaHQ7XG4gIEBJbnB1dCgpIG1pbjogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbWF4OiBudW1iZXIgPSAxMDA7XG4gIEBJbnB1dCgpIHRleHRWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSB1bml0czogc3RyaW5nO1xuICBASW5wdXQoKSBiaWdTZWdtZW50czogbnVtYmVyID0gMTA7XG4gIEBJbnB1dCgpIHNtYWxsU2VnbWVudHM6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgpIHJlc3VsdHM6IGFueVtdO1xuICBASW5wdXQoKSBzaG93QXhpczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHN0YXJ0QW5nbGU6IG51bWJlciA9IC0xMjA7XG4gIEBJbnB1dCgpIGFuZ2xlU3BhbjogbnVtYmVyID0gMjQwO1xuICBASW5wdXQoKSBhY3RpdmVFbnRyaWVzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBheGlzVGlja0Zvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgdG9vbHRpcERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHZhbHVlRm9ybWF0dGluZzogKHZhbHVlOiBhbnkpID0+IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1RleHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vIFNwZWNpZnkgbWFyZ2luc1xuICBASW5wdXQoKSBtYXJnaW46IG51bWJlcltdO1xuXG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkKCd0b29sdGlwVGVtcGxhdGUnKSB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQFZpZXdDaGlsZCgndGV4dEVsJykgdGV4dEVsOiBFbGVtZW50UmVmO1xuXG4gIGRpbXM6IFZpZXdEaW1lbnNpb25zO1xuICBkb21haW46IGFueVtdO1xuICB2YWx1ZURvbWFpbjogW251bWJlciwgbnVtYmVyXTtcbiAgdmFsdWVTY2FsZTogYW55O1xuXG4gIGNvbG9yczogQ29sb3JIZWxwZXI7XG4gIHRyYW5zZm9ybTogc3RyaW5nO1xuXG4gIG91dGVyUmFkaXVzOiBudW1iZXI7XG4gIHRleHRSYWRpdXM6IG51bWJlcjsgLy8gbWF4IGF2YWlsYWJsZSByYWRpdXMgZm9yIHRoZSB0ZXh0XG4gIHJlc2l6ZVNjYWxlOiBudW1iZXIgPSAxO1xuICByb3RhdGlvbjogc3RyaW5nID0gJyc7XG4gIHRleHRUcmFuc2Zvcm06IHN0cmluZyA9ICdzY2FsZSgxLCAxKSc7XG4gIGNvcm5lclJhZGl1czogbnVtYmVyID0gMTA7XG4gIGFyY3M6IEFyY3NbXTtcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmc7XG4gIGxlZ2VuZE9wdGlvbnM6IExlZ2VuZE9wdGlvbnM7XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY2FsZVRleHQoKSk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlKCk7XG5cbiAgICBpZiAoIXRoaXMuc2hvd0F4aXMpIHtcbiAgICAgIGlmICghdGhpcy5tYXJnaW4pIHtcbiAgICAgICAgdGhpcy5tYXJnaW4gPSBbMTAsIDIwLCAxMCwgMjBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMubWFyZ2luKSB7XG4gICAgICAgIHRoaXMubWFyZ2luID0gWzYwLCAxMDAsIDYwLCAxMDBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1ha2UgdGhlIHN0YXJ0aW5nIGFuZ2xlIHBvc2l0aXZlXG4gICAgaWYgKHRoaXMuc3RhcnRBbmdsZSA8IDApIHtcbiAgICAgIHRoaXMuc3RhcnRBbmdsZSA9ICh0aGlzLnN0YXJ0QW5nbGUgJSAzNjApICsgMzYwO1xuICAgIH1cblxuICAgIHRoaXMuYW5nbGVTcGFuID0gTWF0aC5taW4odGhpcy5hbmdsZVNwYW4sIDM2MCk7XG5cbiAgICB0aGlzLmRpbXMgPSBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucyh7XG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBtYXJnaW5zOiB0aGlzLm1hcmdpbixcbiAgICAgIHNob3dMZWdlbmQ6IHRoaXMubGVnZW5kLFxuICAgICAgbGVnZW5kUG9zaXRpb246IHRoaXMubGVnZW5kUG9zaXRpb25cbiAgICB9KTtcblxuICAgIHRoaXMuZG9tYWluID0gdGhpcy5nZXREb21haW4oKTtcbiAgICB0aGlzLnZhbHVlRG9tYWluID0gdGhpcy5nZXRWYWx1ZURvbWFpbigpO1xuICAgIHRoaXMudmFsdWVTY2FsZSA9IHRoaXMuZ2V0VmFsdWVTY2FsZSgpO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdGhpcy5nZXREaXNwbGF5VmFsdWUoKTtcblxuICAgIHRoaXMub3V0ZXJSYWRpdXMgPSBNYXRoLm1pbih0aGlzLmRpbXMud2lkdGgsIHRoaXMuZGltcy5oZWlnaHQpIC8gMjtcblxuICAgIHRoaXMuYXJjcyA9IHRoaXMuZ2V0QXJjcygpO1xuXG4gICAgdGhpcy5zZXRDb2xvcnMoKTtcbiAgICB0aGlzLmxlZ2VuZE9wdGlvbnMgPSB0aGlzLmdldExlZ2VuZE9wdGlvbnMoKTtcblxuICAgIGNvbnN0IHhPZmZzZXQgPSB0aGlzLm1hcmdpblszXSArIHRoaXMuZGltcy53aWR0aCAvIDI7XG4gICAgY29uc3QgeU9mZnNldCA9IHRoaXMubWFyZ2luWzBdICsgdGhpcy5kaW1zLmhlaWdodCAvIDI7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4T2Zmc2V0fSwgJHt5T2Zmc2V0fSlgO1xuICAgIHRoaXMucm90YXRpb24gPSBgcm90YXRlKCR7dGhpcy5zdGFydEFuZ2xlfSlgO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY2FsZVRleHQoKSwgNTApO1xuICB9XG5cbiAgZ2V0QXJjcygpOiBhbnlbXSB7XG4gICAgY29uc3QgYXJjcyA9IFtdO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlUmFkaXVzID0gdGhpcy5vdXRlclJhZGl1cyAqIDAuNztcblxuICAgIGNvbnN0IHJhZGl1c1BlckFyYyA9IE1hdGgubWluKGF2YWlsYWJsZVJhZGl1cyAvIHRoaXMucmVzdWx0cy5sZW5ndGgsIDEwKTtcbiAgICBjb25zdCBhcmNXaWR0aCA9IHJhZGl1c1BlckFyYyAqIDAuNztcbiAgICB0aGlzLnRleHRSYWRpdXMgPSB0aGlzLm91dGVyUmFkaXVzIC0gdGhpcy5yZXN1bHRzLmxlbmd0aCAqIHJhZGl1c1BlckFyYztcbiAgICB0aGlzLmNvcm5lclJhZGl1cyA9IE1hdGguZmxvb3IoYXJjV2lkdGggLyAyKTtcblxuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGNvbnN0IGQgb2YgdGhpcy5yZXN1bHRzKSB7XG4gICAgICBjb25zdCBvdXRlclJhZGl1cyA9IHRoaXMub3V0ZXJSYWRpdXMgLSBpICogcmFkaXVzUGVyQXJjO1xuICAgICAgY29uc3QgaW5uZXJSYWRpdXMgPSBvdXRlclJhZGl1cyAtIGFyY1dpZHRoO1xuXG4gICAgICBjb25zdCBiYWNrZ3JvdW5kQXJjID0ge1xuICAgICAgICBlbmRBbmdsZTogKHRoaXMuYW5nbGVTcGFuICogTWF0aC5QSSkgLyAxODAsXG4gICAgICAgIGlubmVyUmFkaXVzLFxuICAgICAgICBvdXRlclJhZGl1cyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLm1heCxcbiAgICAgICAgICBuYW1lOiBkLm5hbWVcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgdmFsdWVBcmMgPSB7XG4gICAgICAgIGVuZEFuZ2xlOiAoTWF0aC5taW4odGhpcy52YWx1ZVNjYWxlKGQudmFsdWUpLCB0aGlzLmFuZ2xlU3BhbikgKiBNYXRoLlBJKSAvIDE4MCxcbiAgICAgICAgaW5uZXJSYWRpdXMsXG4gICAgICAgIG91dGVyUmFkaXVzLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdmFsdWU6IGQudmFsdWUsXG4gICAgICAgICAgbmFtZTogZC5uYW1lXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGFyYyA9IHtcbiAgICAgICAgYmFja2dyb3VuZEFyYyxcbiAgICAgICAgdmFsdWVBcmNcbiAgICAgIH07XG5cbiAgICAgIGFyY3MucHVzaChhcmMpO1xuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiBhcmNzO1xuICB9XG5cbiAgZ2V0RG9tYWluKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHRzLm1hcChkID0+IGQubmFtZSk7XG4gIH1cblxuICBnZXRWYWx1ZURvbWFpbigpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnJlc3VsdHMubWFwKGQgPT4gZC52YWx1ZSk7XG4gICAgY29uc3QgZGF0YU1pbiA9IE1hdGgubWluKC4uLnZhbHVlcyk7XG4gICAgY29uc3QgZGF0YU1heCA9IE1hdGgubWF4KC4uLnZhbHVlcyk7XG5cbiAgICBpZiAodGhpcy5taW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5taW4gPSBNYXRoLm1pbih0aGlzLm1pbiwgZGF0YU1pbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWluID0gZGF0YU1pbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tYXggPSBNYXRoLm1heCh0aGlzLm1heCwgZGF0YU1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWF4ID0gZGF0YU1heDtcbiAgICB9XG5cbiAgICByZXR1cm4gW3RoaXMubWluLCB0aGlzLm1heF07XG4gIH1cblxuICBnZXRWYWx1ZVNjYWxlKCk6IGFueSB7XG4gICAgcmV0dXJuIHNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHRoaXMuYW5nbGVTcGFuXSkubmljZSgpLmRvbWFpbih0aGlzLnZhbHVlRG9tYWluKTtcbiAgfVxuXG4gIGdldERpc3BsYXlWYWx1ZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZXN1bHRzLm1hcChkID0+IGQudmFsdWUpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuXG4gICAgaWYgKHRoaXMudGV4dFZhbHVlICYmIDAgIT09IHRoaXMudGV4dFZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dFZhbHVlLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmFsdWVGb3JtYXR0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZUZvcm1hdHRpbmcodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZygpO1xuICB9XG5cbiAgc2NhbGVUZXh0KHJlcGVhdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2hvd1RleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy50ZXh0RWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBvbGRTY2FsZSA9IHRoaXMucmVzaXplU2NhbGU7XG5cbiAgICBpZiAod2lkdGggPT09IDApIHtcbiAgICAgIHRoaXMucmVzaXplU2NhbGUgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhdmFpbGFibGVTcGFjZSA9IHRoaXMudGV4dFJhZGl1cztcbiAgICAgIHRoaXMucmVzaXplU2NhbGUgPSBNYXRoLmZsb29yKChhdmFpbGFibGVTcGFjZSAvICh3aWR0aCAvIHRoaXMucmVzaXplU2NhbGUpKSAqIDEwMCkgLyAxMDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVzaXplU2NhbGUgIT09IG9sZFNjYWxlKSB7XG4gICAgICB0aGlzLnRleHRUcmFuc2Zvcm0gPSBgc2NhbGUoJHt0aGlzLnJlc2l6ZVNjYWxlfSwgJHt0aGlzLnJlc2l6ZVNjYWxlfSlgO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIGlmIChyZXBlYXQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjYWxlVGV4dChmYWxzZSksIDUwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgZ2V0TGVnZW5kT3B0aW9ucygpOiBMZWdlbmRPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGVUeXBlOiBTY2FsZVR5cGUuT3JkaW5hbCxcbiAgICAgIGNvbG9yczogdGhpcy5jb2xvcnMsXG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgdGl0bGU6IHRoaXMubGVnZW5kVGl0bGUsXG4gICAgICBwb3NpdGlvbjogdGhpcy5sZWdlbmRQb3NpdGlvblxuICAgIH07XG4gIH1cblxuICBzZXRDb2xvcnMoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xvcnMgPSBuZXcgQ29sb3JIZWxwZXIodGhpcy5zY2hlbWUsIFNjYWxlVHlwZS5PcmRpbmFsLCB0aGlzLmRvbWFpbiwgdGhpcy5jdXN0b21Db2xvcnMpO1xuICB9XG5cbiAgb25BY3RpdmF0ZShpdGVtKTogdm9pZCB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmRJbmRleChkID0+IHtcbiAgICAgIHJldHVybiBkLm5hbWUgPT09IGl0ZW0ubmFtZSAmJiBkLnZhbHVlID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlRW50cmllcyA9IFtpdGVtLCAuLi50aGlzLmFjdGl2ZUVudHJpZXNdO1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh7IHZhbHVlOiBpdGVtLCBlbnRyaWVzOiB0aGlzLmFjdGl2ZUVudHJpZXMgfSk7XG4gIH1cblxuICBvbkRlYWN0aXZhdGUoaXRlbSk6IHZvaWQge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuYWN0aXZlRW50cmllcy5maW5kSW5kZXgoZCA9PiB7XG4gICAgICByZXR1cm4gZC5uYW1lID09PSBpdGVtLm5hbWUgJiYgZC52YWx1ZSA9PT0gaXRlbS52YWx1ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuYWN0aXZlRW50cmllcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSBbLi4udGhpcy5hY3RpdmVFbnRyaWVzXTtcblxuICAgIHRoaXMuZGVhY3RpdmF0ZS5lbWl0KHsgdmFsdWU6IGl0ZW0sIGVudHJpZXM6IHRoaXMuYWN0aXZlRW50cmllcyB9KTtcbiAgfVxuXG4gIGlzQWN0aXZlKGVudHJ5KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUVudHJpZXMpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmQoZCA9PiB7XG4gICAgICByZXR1cm4gZW50cnkubmFtZSA9PT0gZC5uYW1lICYmIGVudHJ5LnNlcmllcyA9PT0gZC5zZXJpZXM7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW0gIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRyYWNrQnkoaW5kZXg6IG51bWJlciwgaXRlbTogQXJjcyk6IGFueSB7XG4gICAgcmV0dXJuIGl0ZW0udmFsdWVBcmMuZGF0YS5uYW1lO1xuICB9XG59XG4iXX0=