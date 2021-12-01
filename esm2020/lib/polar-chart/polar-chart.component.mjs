import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { scaleLinear, scaleTime, scalePoint } from 'd3-scale';
import { curveCardinalClosed } from 'd3-shape';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { getScaleType } from '../common/domain.helper';
import { isDate } from '../utils/types';
import { LegendPosition } from '../common/types/legend.model';
import { ScaleType } from '../common/types/scale-type.enum';
import { Orientation } from '../common/types/orientation.enum';
import * as i0 from "@angular/core";
import * as i1 from "../common/charts/chart.component";
import * as i2 from "@angular/common";
import * as i3 from "../pie-chart/pie-label.component";
import * as i4 from "../common/axes/y-axis.component";
import * as i5 from "../common/axes/axis-label.component";
import * as i6 from "./polar-series.component";
const _c0 = ["tooltipTemplate"];
function PolarChartComponent__svg_g_4__svg_circle_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "circle", 8);
} if (rf & 2) {
    const r_r6 = ctx.$implicit;
    i0.ɵɵattribute("r", r_r6);
} }
function PolarChartComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵtemplate(1, PolarChartComponent__svg_g_4__svg_circle_1_Template, 1, 1, "circle", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.radiusTicks);
} }
function PolarChartComponent__svg_g_5__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "g", 10);
} if (rf & 2) {
    const tick_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", tick_r8)("radius", ctx_r7.outerRadius)("label", tick_r8.label)("max", ctx_r7.outerRadius)("value", ctx_r7.showGridLines ? 1 : ctx_r7.outerRadius)("explodeSlices", true)("animations", ctx_r7.animations)("labelTrim", ctx_r7.labelTrim)("labelTrimSize", ctx_r7.labelTrimSize);
} }
function PolarChartComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵtemplate(1, PolarChartComponent__svg_g_5__svg_g_1_Template, 1, 9, "g", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.thetaTicks);
} }
function PolarChartComponent__svg_g_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 11);
    i0.ɵɵlistener("dimensionsChanged", function PolarChartComponent__svg_g_6_Template__svg_g_dimensionsChanged_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.updateYAxisWidth($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("yScale", ctx_r2.yAxisScale)("dims", ctx_r2.yAxisDims)("showGridLines", ctx_r2.showGridLines)("showLabel", ctx_r2.showYAxisLabel)("labelText", ctx_r2.yAxisLabel)("trimTicks", ctx_r2.trimYAxisTicks)("maxTickLength", ctx_r2.maxYAxisTickLength)("tickFormatting", ctx_r2.yAxisTickFormatting);
    i0.ɵɵattribute("transform", ctx_r2.transformYAxis);
} }
function PolarChartComponent__svg_g_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "g", 12);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("label", ctx_r3.xAxisLabel)("offset", ctx_r3.labelOffset)("orient", ctx_r3.orientation.Bottom)("height", ctx_r3.dims.height)("width", ctx_r3.dims.width);
} }
function PolarChartComponent__svg_g_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelementStart(1, "g", 13);
    i0.ɵɵlistener("select", function PolarChartComponent__svg_g_9_Template__svg_g_select_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onClick($event); })("activate", function PolarChartComponent__svg_g_9_Template__svg_g_activate_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onActivate($event); })("deactivate", function PolarChartComponent__svg_g_9_Template__svg_g_deactivate_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onDeactivate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r11 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@animationState", "active");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("gradient", ctx_r4.gradient)("xScale", ctx_r4.xScale)("yScale", ctx_r4.yScale)("colors", ctx_r4.colors)("data", series_r11)("activeEntries", ctx_r4.activeEntries)("scaleType", ctx_r4.scaleType)("curve", ctx_r4.curve)("rangeFillOpacity", ctx_r4.rangeFillOpacity)("animations", ctx_r4.animations)("tooltipDisabled", ctx_r4.tooltipDisabled)("tooltipTemplate", ctx_r4.tooltipTemplate);
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
const twoPI = 2 * Math.PI;
export class PolarChartComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legendTitle = 'Legend';
        this.legendPosition = LegendPosition.Right;
        this.showGridLines = true;
        this.curve = curveCardinalClosed;
        this.activeEntries = [];
        this.rangeFillOpacity = 0.15;
        this.trimYAxisTicks = true;
        this.maxYAxisTickLength = 16;
        this.roundDomains = false;
        this.tooltipDisabled = false;
        this.showSeriesOnHover = true;
        this.gradient = false;
        this.yAxisMinScale = 0;
        this.labelTrim = true;
        this.labelTrimSize = 10;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        // series: any; // ???
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.orientation = Orientation;
    }
    update() {
        super.update();
        this.setDims();
        this.setScales();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.setTicks();
    }
    setDims() {
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
            legendPosition: this.legendPosition
        });
        const halfWidth = Math.floor(this.dims.width / 2);
        const halfHeight = Math.floor(this.dims.height / 2);
        const outerRadius = (this.outerRadius = Math.min(halfHeight / 1.5, halfWidth / 1.5));
        const yOffset = Math.max(0, halfHeight - outerRadius);
        this.yAxisDims = {
            ...this.dims,
            width: halfWidth
        };
        this.transform = `translate(${this.dims.xOffset}, ${this.margin[0]})`;
        this.transformYAxis = `translate(0, ${yOffset})`;
        this.labelOffset = this.dims.height + 40;
        this.transformPlot = `translate(${halfWidth}, ${halfHeight})`;
    }
    setScales() {
        const xValues = this.getXValues();
        this.scaleType = getScaleType(xValues);
        this.xDomain = this.filteredDomain || this.getXDomain(xValues);
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, twoPI);
        this.yScale = this.getYScale(this.yDomain, this.outerRadius);
        this.yAxisScale = this.getYScale(this.yDomain.reverse(), this.outerRadius);
    }
    setTicks() {
        let tickFormat;
        if (this.xAxisTickFormatting) {
            tickFormat = this.xAxisTickFormatting;
        }
        else if (this.xScale.tickFormat) {
            tickFormat = this.xScale.tickFormat.apply(this.xScale, [5]);
        }
        else {
            tickFormat = d => {
                if (isDate(d)) {
                    return d.toLocaleDateString();
                }
                return d.toLocaleString();
            };
        }
        const outerRadius = this.outerRadius;
        const s = 1.1;
        this.thetaTicks = this.xDomain.map(d => {
            const startAngle = this.xScale(d);
            const dd = s * outerRadius * (startAngle > Math.PI ? -1 : 1);
            const label = tickFormat(d);
            const startPos = [outerRadius * Math.sin(startAngle), -outerRadius * Math.cos(startAngle)];
            const pos = [dd, s * startPos[1]];
            return {
                innerRadius: 0,
                outerRadius,
                startAngle,
                endAngle: startAngle,
                value: outerRadius,
                label,
                startPos,
                pos
            };
        });
        const minDistance = 10;
        /* from pie chart, abstract out -*/
        for (let i = 0; i < this.thetaTicks.length - 1; i++) {
            const a = this.thetaTicks[i];
            for (let j = i + 1; j < this.thetaTicks.length; j++) {
                const b = this.thetaTicks[j];
                // if they're on the same side
                if (b.pos[0] * a.pos[0] > 0) {
                    // if they're overlapping
                    const o = minDistance - Math.abs(b.pos[1] - a.pos[1]);
                    if (o > 0) {
                        // push the second up or down
                        b.pos[1] += Math.sign(b.pos[0]) * o;
                    }
                }
            }
        }
        this.radiusTicks = this.yAxisScale.ticks(Math.floor(this.dims.height / 50)).map(d => this.yScale(d));
    }
    getXValues() {
        const values = [];
        for (const results of this.results) {
            for (const d of results.series) {
                if (!values.includes(d.name)) {
                    values.push(d.name);
                }
            }
        }
        return values;
    }
    getXDomain(values = this.getXValues()) {
        if (this.scaleType === ScaleType.Time) {
            const min = Math.min(...values);
            const max = Math.max(...values);
            return [min, max];
        }
        else if (this.scaleType === ScaleType.Linear) {
            values = values.map(v => Number(v));
            const min = Math.min(...values);
            const max = Math.max(...values);
            return [min, max];
        }
        return values;
    }
    getYValues() {
        const domain = [];
        for (const results of this.results) {
            for (const d of results.series) {
                if (domain.indexOf(d.value) < 0) {
                    domain.push(d.value);
                }
                if (d.min !== undefined) {
                    if (domain.indexOf(d.min) < 0) {
                        domain.push(d.min);
                    }
                }
                if (d.max !== undefined) {
                    if (domain.indexOf(d.max) < 0) {
                        domain.push(d.max);
                    }
                }
            }
        }
        return domain;
    }
    getYDomain(domain = this.getYValues()) {
        let min = Math.min(...domain);
        const max = Math.max(this.yAxisMinScale, ...domain);
        min = Math.max(0, min);
        if (!this.autoScale) {
            min = Math.min(0, min);
        }
        return [min, max];
    }
    getSeriesDomain() {
        return this.results.map(d => d.name);
    }
    getXScale(domain, width) {
        switch (this.scaleType) {
            case ScaleType.Time:
                return scaleTime().range([0, width]).domain(domain);
            case ScaleType.Linear:
                const scale = scaleLinear().range([0, width]).domain(domain);
                return this.roundDomains ? scale.nice() : scale;
            default:
                return scalePoint()
                    .range([0, width - twoPI / domain.length])
                    .padding(0)
                    .domain(domain);
        }
    }
    getYScale(domain, height) {
        const scale = scaleLinear().range([0, height]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    onClick(data, series) {
        if (series) {
            data.series = series.name;
        }
        this.select.emit(data);
    }
    setColors() {
        const domain = this.schemeType === ScaleType.Ordinal ? this.seriesDomain : this.yDomain.reverse();
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        if (this.schemeType === ScaleType.Ordinal) {
            return {
                scaleType: this.schemeType,
                colors: this.colors,
                domain: this.seriesDomain,
                title: this.legendTitle,
                position: this.legendPosition
            };
        }
        return {
            scaleType: this.schemeType,
            colors: this.colors.scale,
            domain: this.yDomain,
            title: undefined,
            position: this.legendPosition
        };
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onActivate(item) {
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = this.showSeriesOnHover ? [item, ...this.activeEntries] : this.activeEntries;
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
    deactivateAll() {
        this.activeEntries = [...this.activeEntries];
        for (const entry of this.activeEntries) {
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    }
    trackBy(index, item) {
        return `${item.name}`;
    }
}
PolarChartComponent.ɵfac = /*@__PURE__*/ function () { let ɵPolarChartComponent_BaseFactory; return function PolarChartComponent_Factory(t) { return (ɵPolarChartComponent_BaseFactory || (ɵPolarChartComponent_BaseFactory = i0.ɵɵgetInheritedFactory(PolarChartComponent)))(t || PolarChartComponent); }; }();
PolarChartComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PolarChartComponent, selectors: [["ngx-charts-polar-chart"]], contentQueries: function PolarChartComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", autoScale: "autoScale", showGridLines: "showGridLines", curve: "curve", activeEntries: "activeEntries", schemeType: "schemeType", rangeFillOpacity: "rangeFillOpacity", trimYAxisTicks: "trimYAxisTicks", maxYAxisTickLength: "maxYAxisTickLength", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", roundDomains: "roundDomains", tooltipDisabled: "tooltipDisabled", showSeriesOnHover: "showSeriesOnHover", gradient: "gradient", yAxisMinScale: "yAxisMinScale", labelTrim: "labelTrim", labelTrimSize: "labelTrimSize" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 18, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "polar-chart", "chart"], ["cx", "0", "cy", "0", 1, "polar-chart-background"], [4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "gridline-path radial-gridline-path", "cx", "0", "cy", "0", 4, "ngFor", "ngForOf"], ["cx", "0", "cy", "0", 1, "gridline-path", "radial-gridline-path"], ["ngx-charts-pie-label", "", 3, "data", "radius", "label", "max", "value", "explodeSlices", "animations", "labelTrim", "labelTrimSize", 4, "ngFor", "ngForOf"], ["ngx-charts-pie-label", "", 3, "data", "radius", "label", "max", "value", "explodeSlices", "animations", "labelTrim", "labelTrimSize"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "dimensionsChanged"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"], ["ngx-charts-polar-series", "", 3, "gradient", "xScale", "yScale", "colors", "data", "activeEntries", "scaleType", "curve", "rangeFillOpacity", "animations", "tooltipDisabled", "tooltipTemplate", "select", "activate", "deactivate"]], template: function PolarChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        i0.ɵɵlistener("legendLabelClick", function PolarChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function PolarChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event); })("legendLabelDeactivate", function PolarChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "g", 1);
        i0.ɵɵelementStart(2, "g");
        i0.ɵɵelement(3, "circle", 2);
        i0.ɵɵtemplate(4, PolarChartComponent__svg_g_4_Template, 2, 1, "g", 3);
        i0.ɵɵtemplate(5, PolarChartComponent__svg_g_5_Template, 2, 1, "g", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, PolarChartComponent__svg_g_6_Template, 1, 9, "g", 4);
        i0.ɵɵtemplate(7, PolarChartComponent__svg_g_7_Template, 1, 5, "g", 5);
        i0.ɵɵelementStart(8, "g");
        i0.ɵɵtemplate(9, PolarChartComponent__svg_g_9_Template, 2, 13, "g", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("view", i0.ɵɵpureFunction2(15, _c1, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transformPlot);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("r", ctx.outerRadius);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showGridLines);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.xAxis);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.yAxis);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.xAxis && ctx.showXAxisLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transformPlot);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.ChartComponent, i2.NgIf, i2.NgForOf, i3.PieLabelComponent, i4.YAxisComponent, i5.AxisLabelComponent, i6.PolarSeriesComponent], styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".pie-label{font-size:11px}.pie-label.animation{-webkit-animation:.75s ease-in fadeIn;animation:.75s ease-in fadeIn}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{-webkit-animation:3s linear drawOut;animation:3s linear drawOut;transition:d .75s}@-webkit-keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}@keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}\n", ".polar-chart .polar-chart-background{fill:none}.polar-chart .radial-gridline-path{stroke-dasharray:10 10;fill:none}.polar-chart .pie-label-line{stroke:#2f3646}.polar-charts-series .polar-series-area,.polar-series-path{pointer-events:none}\n"], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1
                    }),
                    animate(500, style({
                        opacity: 0
                    }))
                ])
            ])
        ] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolarChartComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-polar-chart', template: `
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
      <svg:g class="polar-chart chart" [attr.transform]="transform">
        <svg:g [attr.transform]="transformPlot">
          <svg:circle class="polar-chart-background" cx="0" cy="0" [attr.r]="this.outerRadius" />
          <svg:g *ngIf="showGridLines">
            <svg:circle
              *ngFor="let r of radiusTicks"
              class="gridline-path radial-gridline-path"
              cx="0"
              cy="0"
              [attr.r]="r"
            />
          </svg:g>
          <svg:g *ngIf="xAxis">
            <svg:g
              ngx-charts-pie-label
              *ngFor="let tick of thetaTicks"
              [data]="tick"
              [radius]="outerRadius"
              [label]="tick.label"
              [max]="outerRadius"
              [value]="showGridLines ? 1 : outerRadius"
              [explodeSlices]="true"
              [animations]="animations"
              [labelTrim]="labelTrim"
              [labelTrimSize]="labelTrimSize"
            ></svg:g>
          </svg:g>
        </svg:g>
        <svg:g
          ngx-charts-y-axis
          [attr.transform]="transformYAxis"
          *ngIf="yAxis"
          [yScale]="yAxisScale"
          [dims]="yAxisDims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          ngx-charts-axis-label
          *ngIf="xAxis && showXAxisLabel"
          [label]="xAxisLabel"
          [offset]="labelOffset"
          [orient]="orientation.Bottom"
          [height]="dims.height"
          [width]="dims.width"
        ></svg:g>
        <svg:g [attr.transform]="transformPlot">
          <svg:g *ngFor="let series of results; trackBy: trackBy" [@animationState]="'active'">
            <svg:g
              ngx-charts-polar-series
              [gradient]="gradient"
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [activeEntries]="activeEntries"
              [scaleType]="scaleType"
              [curve]="curve"
              [rangeFillOpacity]="rangeFillOpacity"
              [animations]="animations"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="tooltipTemplate"
              (select)="onClick($event)"
              (activate)="onActivate($event)"
              (deactivate)="onDeactivate($event)"
            />
          </svg:g>
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1
                            }),
                            animate(500, style({
                                opacity: 0
                            }))
                        ])
                    ])
                ], styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n", ".pie-label{font-size:11px}.pie-label.animation{-webkit-animation:.75s ease-in fadeIn;animation:.75s ease-in fadeIn}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{-webkit-animation:3s linear drawOut;animation:3s linear drawOut;transition:d .75s}@-webkit-keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}@keyframes drawOut{0%{stroke-dashoffset:100%}to{stroke-dashoffset:0}}\n", ".polar-chart .polar-chart-background{fill:none}.polar-chart .radial-gridline-path{stroke-dasharray:10 10;fill:none}.polar-chart .pie-label-line{stroke:#2f3646}.polar-charts-series .polar-series-area,.polar-series-path{pointer-events:none}\n"] }]
    }], null, { legend: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], autoScale: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], curve: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], schemeType: [{
            type: Input
        }], rangeFillOpacity: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showSeriesOnHover: [{
            type: Input
        }], gradient: [{
            type: Input
        }], yAxisMinScale: [{
            type: Input
        }], labelTrim: [{
            type: Input
        }], labelTrimSize: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sYXItY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL3BvbGFyLWNoYXJ0L3BvbGFyLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRS9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7OztJQXFCbkQsNEJBTUU7OztJQURBLHlCQUFZOzs7O0lBTmhCLHlCQUE2QjtJQUMzQix3RkFNRTtJQUNKLGlCQUFROzs7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Q0FDTCxHQUFHLEVBQ0gsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxDQUFDOzZCQUNYLENBQUMsQ0FDSDt5QkFDRixDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBR1EsTUFBTTtrQkFBZCxLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFFSSxRQUFRO2tCQUFqQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUUwQixlQUFlO2tCQUEvQyxZQUFZO21CQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbnRlbnRDaGlsZCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgc2NhbGVMaW5lYXIsIHNjYWxlVGltZSwgc2NhbGVQb2ludCB9IGZyb20gJ2QzLXNjYWxlJztcbmltcG9ydCB7IGN1cnZlQ2FyZGluYWxDbG9zZWQgfSBmcm9tICdkMy1zaGFwZSc7XG5cbmltcG9ydCB7IGNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3ZpZXctZGltZW5zaW9ucy5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBnZXRTY2FsZVR5cGUgfSBmcm9tICcuLi9jb21tb24vZG9tYWluLmhlbHBlcic7XG5pbXBvcnQgeyBpc0RhdGUgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBMZWdlbmRQb3NpdGlvbiB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9sZWdlbmQubW9kZWwnO1xuaW1wb3J0IHsgU2NhbGVUeXBlIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3NjYWxlLXR5cGUuZW51bSc7XG5pbXBvcnQgeyBWaWV3RGltZW5zaW9ucyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy92aWV3LWRpbWVuc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT3JpZW50YXRpb24gfSBmcm9tICcuLi9jb21tb24vdHlwZXMvb3JpZW50YXRpb24uZW51bSc7XG5cbmNvbnN0IHR3b1BJID0gMiAqIE1hdGguUEk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jaGFydHMtcG9sYXItY2hhcnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZ3gtY2hhcnRzLWNoYXJ0XG4gICAgICBbdmlld109XCJbd2lkdGgsIGhlaWdodF1cIlxuICAgICAgW3Nob3dMZWdlbmRdPVwibGVnZW5kXCJcbiAgICAgIFtsZWdlbmRPcHRpb25zXT1cImxlZ2VuZE9wdGlvbnNcIlxuICAgICAgW2FjdGl2ZUVudHJpZXNdPVwiYWN0aXZlRW50cmllc1wiXG4gICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICAgIChsZWdlbmRMYWJlbENsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAobGVnZW5kTGFiZWxBY3RpdmF0ZSk9XCJvbkFjdGl2YXRlKCRldmVudClcIlxuICAgICAgKGxlZ2VuZExhYmVsRGVhY3RpdmF0ZSk9XCJvbkRlYWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPHN2ZzpnIGNsYXNzPVwicG9sYXItY2hhcnQgY2hhcnRcIiBbYXR0ci50cmFuc2Zvcm1dPVwidHJhbnNmb3JtXCI+XG4gICAgICAgIDxzdmc6ZyBbYXR0ci50cmFuc2Zvcm1dPVwidHJhbnNmb3JtUGxvdFwiPlxuICAgICAgICAgIDxzdmc6Y2lyY2xlIGNsYXNzPVwicG9sYXItY2hhcnQtYmFja2dyb3VuZFwiIGN4PVwiMFwiIGN5PVwiMFwiIFthdHRyLnJdPVwidGhpcy5vdXRlclJhZGl1c1wiIC8+XG4gICAgICAgICAgPHN2ZzpnICpuZ0lmPVwic2hvd0dyaWRMaW5lc1wiPlxuICAgICAgICAgICAgPHN2ZzpjaXJjbGVcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHIgb2YgcmFkaXVzVGlja3NcIlxuICAgICAgICAgICAgICBjbGFzcz1cImdyaWRsaW5lLXBhdGggcmFkaWFsLWdyaWRsaW5lLXBhdGhcIlxuICAgICAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgICAgICBjeT1cIjBcIlxuICAgICAgICAgICAgICBbYXR0ci5yXT1cInJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2ZzpnPlxuICAgICAgICAgIDxzdmc6ZyAqbmdJZj1cInhBeGlzXCI+XG4gICAgICAgICAgICA8c3ZnOmdcbiAgICAgICAgICAgICAgbmd4LWNoYXJ0cy1waWUtbGFiZWxcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRpY2sgb2YgdGhldGFUaWNrc1wiXG4gICAgICAgICAgICAgIFtkYXRhXT1cInRpY2tcIlxuICAgICAgICAgICAgICBbcmFkaXVzXT1cIm91dGVyUmFkaXVzXCJcbiAgICAgICAgICAgICAgW2xhYmVsXT1cInRpY2subGFiZWxcIlxuICAgICAgICAgICAgICBbbWF4XT1cIm91dGVyUmFkaXVzXCJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cInNob3dHcmlkTGluZXMgPyAxIDogb3V0ZXJSYWRpdXNcIlxuICAgICAgICAgICAgICBbZXhwbG9kZVNsaWNlc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAgICAgICAgIFtsYWJlbFRyaW1dPVwibGFiZWxUcmltXCJcbiAgICAgICAgICAgICAgW2xhYmVsVHJpbVNpemVdPVwibGFiZWxUcmltU2l6ZVwiXG4gICAgICAgICAgICA+PC9zdmc6Zz5cbiAgICAgICAgICA8L3N2ZzpnPlxuICAgICAgICA8L3N2ZzpnPlxuICAgICAgICA8c3ZnOmdcbiAgICAgICAgICBuZ3gtY2hhcnRzLXktYXhpc1xuICAgICAgICAgIFthdHRyLnRyYW5zZm9ybV09XCJ0cmFuc2Zvcm1ZQXhpc1wiXG4gICAgICAgICAgKm5nSWY9XCJ5QXhpc1wiXG4gICAgICAgICAgW3lTY2FsZV09XCJ5QXhpc1NjYWxlXCJcbiAgICAgICAgICBbZGltc109XCJ5QXhpc0RpbXNcIlxuICAgICAgICAgIFtzaG93R3JpZExpbmVzXT1cInNob3dHcmlkTGluZXNcIlxuICAgICAgICAgIFtzaG93TGFiZWxdPVwic2hvd1lBeGlzTGFiZWxcIlxuICAgICAgICAgIFtsYWJlbFRleHRdPVwieUF4aXNMYWJlbFwiXG4gICAgICAgICAgW3RyaW1UaWNrc109XCJ0cmltWUF4aXNUaWNrc1wiXG4gICAgICAgICAgW21heFRpY2tMZW5ndGhdPVwibWF4WUF4aXNUaWNrTGVuZ3RoXCJcbiAgICAgICAgICBbdGlja0Zvcm1hdHRpbmddPVwieUF4aXNUaWNrRm9ybWF0dGluZ1wiXG4gICAgICAgICAgKGRpbWVuc2lvbnNDaGFuZ2VkKT1cInVwZGF0ZVlBeGlzV2lkdGgoJGV2ZW50KVwiXG4gICAgICAgID48L3N2ZzpnPlxuICAgICAgICA8c3ZnOmdcbiAgICAgICAgICBuZ3gtY2hhcnRzLWF4aXMtbGFiZWxcbiAgICAgICAgICAqbmdJZj1cInhBeGlzICYmIHNob3dYQXhpc0xhYmVsXCJcbiAgICAgICAgICBbbGFiZWxdPVwieEF4aXNMYWJlbFwiXG4gICAgICAgICAgW29mZnNldF09XCJsYWJlbE9mZnNldFwiXG4gICAgICAgICAgW29yaWVudF09XCJvcmllbnRhdGlvbi5Cb3R0b21cIlxuICAgICAgICAgIFtoZWlnaHRdPVwiZGltcy5oZWlnaHRcIlxuICAgICAgICAgIFt3aWR0aF09XCJkaW1zLndpZHRoXCJcbiAgICAgICAgPjwvc3ZnOmc+XG4gICAgICAgIDxzdmc6ZyBbYXR0ci50cmFuc2Zvcm1dPVwidHJhbnNmb3JtUGxvdFwiPlxuICAgICAgICAgIDxzdmc6ZyAqbmdGb3I9XCJsZXQgc2VyaWVzIG9mIHJlc3VsdHM7IHRyYWNrQnk6IHRyYWNrQnlcIiBbQGFuaW1hdGlvblN0YXRlXT1cIidhY3RpdmUnXCI+XG4gICAgICAgICAgICA8c3ZnOmdcbiAgICAgICAgICAgICAgbmd4LWNoYXJ0cy1wb2xhci1zZXJpZXNcbiAgICAgICAgICAgICAgW2dyYWRpZW50XT1cImdyYWRpZW50XCJcbiAgICAgICAgICAgICAgW3hTY2FsZV09XCJ4U2NhbGVcIlxuICAgICAgICAgICAgICBbeVNjYWxlXT1cInlTY2FsZVwiXG4gICAgICAgICAgICAgIFtjb2xvcnNdPVwiY29sb3JzXCJcbiAgICAgICAgICAgICAgW2RhdGFdPVwic2VyaWVzXCJcbiAgICAgICAgICAgICAgW2FjdGl2ZUVudHJpZXNdPVwiYWN0aXZlRW50cmllc1wiXG4gICAgICAgICAgICAgIFtzY2FsZVR5cGVdPVwic2NhbGVUeXBlXCJcbiAgICAgICAgICAgICAgW2N1cnZlXT1cImN1cnZlXCJcbiAgICAgICAgICAgICAgW3JhbmdlRmlsbE9wYWNpdHldPVwicmFuZ2VGaWxsT3BhY2l0eVwiXG4gICAgICAgICAgICAgIFthbmltYXRpb25zXT1cImFuaW1hdGlvbnNcIlxuICAgICAgICAgICAgICBbdG9vbHRpcERpc2FibGVkXT1cInRvb2x0aXBEaXNhYmxlZFwiXG4gICAgICAgICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgKHNlbGVjdCk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgICAoYWN0aXZhdGUpPVwib25BY3RpdmF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKGRlYWN0aXZhdGUpPVwib25EZWFjdGl2YXRlKCRldmVudClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2ZzpnPlxuICAgICAgICA8L3N2ZzpnPlxuICAgICAgPC9zdmc6Zz5cbiAgICA8L25neC1jaGFydHMtY2hhcnQ+XG4gIGAsXG4gIHN0eWxlVXJsczogW1xuICAgICcuLi9jb21tb24vYmFzZS1jaGFydC5jb21wb25lbnQuc2NzcycsXG4gICAgJy4uL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MnLFxuICAgICcuL3BvbGFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ1xuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2FuaW1hdGlvblN0YXRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICA1MDAsXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xhckNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbGVnZW5kOiBib29sZWFuO1xuICBASW5wdXQoKSBsZWdlbmRUaXRsZTogc3RyaW5nID0gJ0xlZ2VuZCc7XG4gIEBJbnB1dCgpIGxlZ2VuZFBvc2l0aW9uOiBMZWdlbmRQb3NpdGlvbiA9IExlZ2VuZFBvc2l0aW9uLlJpZ2h0O1xuICBASW5wdXQoKSB4QXhpczogYm9vbGVhbjtcbiAgQElucHV0KCkgeUF4aXM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dYQXhpc0xhYmVsOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93WUF4aXNMYWJlbDogYm9vbGVhbjtcbiAgQElucHV0KCkgeEF4aXNMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB5QXhpc0xhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF1dG9TY2FsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd0dyaWRMaW5lczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGN1cnZlOiBhbnkgPSBjdXJ2ZUNhcmRpbmFsQ2xvc2VkO1xuICBASW5wdXQoKSBhY3RpdmVFbnRyaWVzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBzY2hlbWVUeXBlOiBTY2FsZVR5cGU7XG4gIEBJbnB1dCgpIHJhbmdlRmlsbE9wYWNpdHk6IG51bWJlciA9IDAuMTU7XG4gIEBJbnB1dCgpIHRyaW1ZQXhpc1RpY2tzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbWF4WUF4aXNUaWNrTGVuZ3RoOiBudW1iZXIgPSAxNjtcbiAgQElucHV0KCkgeEF4aXNUaWNrRm9ybWF0dGluZzogKG86IGFueSkgPT4gYW55O1xuICBASW5wdXQoKSB5QXhpc1RpY2tGb3JtYXR0aW5nOiAobzogYW55KSA9PiBhbnk7XG4gIEBJbnB1dCgpIHJvdW5kRG9tYWluczogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1Nlcmllc09uSG92ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBncmFkaWVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB5QXhpc01pblNjYWxlOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBsYWJlbFRyaW06IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBsYWJlbFRyaW1TaXplOiBudW1iZXIgPSAxMDtcblxuICBAT3V0cHV0KCkgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZCgndG9vbHRpcFRlbXBsYXRlJykgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGRpbXM6IFZpZXdEaW1lbnNpb25zO1xuICB5QXhpc0RpbXM6IFZpZXdEaW1lbnNpb25zO1xuICBsYWJlbE9mZnNldDogbnVtYmVyO1xuICB4RG9tYWluOiBhbnk7XG4gIHlEb21haW46IGFueTtcbiAgc2VyaWVzRG9tYWluOiBhbnk7XG4gIHlTY2FsZTogYW55OyAvLyAtPiByU2NhbGVcbiAgeFNjYWxlOiBhbnk7IC8vIC0+IHRTY2FsZVxuICB5QXhpc1NjYWxlOiBhbnk7IC8vIC0+IHlTY2FsZVxuICBjb2xvcnM6IENvbG9ySGVscGVyO1xuICBzY2FsZVR5cGU6IFNjYWxlVHlwZTtcbiAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIHRyYW5zZm9ybVBsb3Q6IHN0cmluZztcbiAgdHJhbnNmb3JtWUF4aXM6IHN0cmluZztcbiAgdHJhbnNmb3JtWEF4aXM6IHN0cmluZztcbiAgLy8gc2VyaWVzOiBhbnk7IC8vID8/P1xuICBtYXJnaW46IG51bWJlcltdID0gWzEwLCAyMCwgMTAsIDIwXTtcbiAgeEF4aXNIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHlBeGlzV2lkdGg6IG51bWJlciA9IDA7XG4gIGZpbHRlcmVkRG9tYWluOiBhbnk7XG4gIGxlZ2VuZE9wdGlvbnM6IGFueTtcbiAgdGhldGFUaWNrczogYW55W107XG4gIHJhZGl1c1RpY2tzOiBudW1iZXJbXTtcbiAgb3V0ZXJSYWRpdXM6IG51bWJlcjtcblxuICBvcmllbnRhdGlvbiA9IE9yaWVudGF0aW9uO1xuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoKTtcblxuICAgIHRoaXMuc2V0RGltcygpO1xuXG4gICAgdGhpcy5zZXRTY2FsZXMoKTtcbiAgICB0aGlzLnNldENvbG9ycygpO1xuICAgIHRoaXMubGVnZW5kT3B0aW9ucyA9IHRoaXMuZ2V0TGVnZW5kT3B0aW9ucygpO1xuXG4gICAgdGhpcy5zZXRUaWNrcygpO1xuICB9XG5cbiAgc2V0RGltcygpIHtcbiAgICB0aGlzLmRpbXMgPSBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucyh7XG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBtYXJnaW5zOiB0aGlzLm1hcmdpbixcbiAgICAgIHNob3dYQXhpczogdGhpcy54QXhpcyxcbiAgICAgIHNob3dZQXhpczogdGhpcy55QXhpcyxcbiAgICAgIHhBeGlzSGVpZ2h0OiB0aGlzLnhBeGlzSGVpZ2h0LFxuICAgICAgeUF4aXNXaWR0aDogdGhpcy55QXhpc1dpZHRoLFxuICAgICAgc2hvd1hMYWJlbDogdGhpcy5zaG93WEF4aXNMYWJlbCxcbiAgICAgIHNob3dZTGFiZWw6IHRoaXMuc2hvd1lBeGlzTGFiZWwsXG4gICAgICBzaG93TGVnZW5kOiB0aGlzLmxlZ2VuZCxcbiAgICAgIGxlZ2VuZFR5cGU6IHRoaXMuc2NoZW1lVHlwZSxcbiAgICAgIGxlZ2VuZFBvc2l0aW9uOiB0aGlzLmxlZ2VuZFBvc2l0aW9uXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYWxmV2lkdGggPSBNYXRoLmZsb29yKHRoaXMuZGltcy53aWR0aCAvIDIpO1xuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBNYXRoLmZsb29yKHRoaXMuZGltcy5oZWlnaHQgLyAyKTtcblxuICAgIGNvbnN0IG91dGVyUmFkaXVzID0gKHRoaXMub3V0ZXJSYWRpdXMgPSBNYXRoLm1pbihoYWxmSGVpZ2h0IC8gMS41LCBoYWxmV2lkdGggLyAxLjUpKTtcblxuICAgIGNvbnN0IHlPZmZzZXQgPSBNYXRoLm1heCgwLCBoYWxmSGVpZ2h0IC0gb3V0ZXJSYWRpdXMpO1xuXG4gICAgdGhpcy55QXhpc0RpbXMgPSB7XG4gICAgICAuLi50aGlzLmRpbXMsXG4gICAgICB3aWR0aDogaGFsZldpZHRoXG4gICAgfTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMuZGltcy54T2Zmc2V0fSwgJHt0aGlzLm1hcmdpblswXX0pYDtcbiAgICB0aGlzLnRyYW5zZm9ybVlBeGlzID0gYHRyYW5zbGF0ZSgwLCAke3lPZmZzZXR9KWA7XG4gICAgdGhpcy5sYWJlbE9mZnNldCA9IHRoaXMuZGltcy5oZWlnaHQgKyA0MDtcbiAgICB0aGlzLnRyYW5zZm9ybVBsb3QgPSBgdHJhbnNsYXRlKCR7aGFsZldpZHRofSwgJHtoYWxmSGVpZ2h0fSlgO1xuICB9XG5cbiAgc2V0U2NhbGVzKCkge1xuICAgIGNvbnN0IHhWYWx1ZXMgPSB0aGlzLmdldFhWYWx1ZXMoKTtcbiAgICB0aGlzLnNjYWxlVHlwZSA9IGdldFNjYWxlVHlwZSh4VmFsdWVzKTtcbiAgICB0aGlzLnhEb21haW4gPSB0aGlzLmZpbHRlcmVkRG9tYWluIHx8IHRoaXMuZ2V0WERvbWFpbih4VmFsdWVzKTtcblxuICAgIHRoaXMueURvbWFpbiA9IHRoaXMuZ2V0WURvbWFpbigpO1xuICAgIHRoaXMuc2VyaWVzRG9tYWluID0gdGhpcy5nZXRTZXJpZXNEb21haW4oKTtcblxuICAgIHRoaXMueFNjYWxlID0gdGhpcy5nZXRYU2NhbGUodGhpcy54RG9tYWluLCB0d29QSSk7XG4gICAgdGhpcy55U2NhbGUgPSB0aGlzLmdldFlTY2FsZSh0aGlzLnlEb21haW4sIHRoaXMub3V0ZXJSYWRpdXMpO1xuICAgIHRoaXMueUF4aXNTY2FsZSA9IHRoaXMuZ2V0WVNjYWxlKHRoaXMueURvbWFpbi5yZXZlcnNlKCksIHRoaXMub3V0ZXJSYWRpdXMpO1xuICB9XG5cbiAgc2V0VGlja3MoKSB7XG4gICAgbGV0IHRpY2tGb3JtYXQ7XG4gICAgaWYgKHRoaXMueEF4aXNUaWNrRm9ybWF0dGluZykge1xuICAgICAgdGlja0Zvcm1hdCA9IHRoaXMueEF4aXNUaWNrRm9ybWF0dGluZztcbiAgICB9IGVsc2UgaWYgKHRoaXMueFNjYWxlLnRpY2tGb3JtYXQpIHtcbiAgICAgIHRpY2tGb3JtYXQgPSB0aGlzLnhTY2FsZS50aWNrRm9ybWF0LmFwcGx5KHRoaXMueFNjYWxlLCBbNV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWNrRm9ybWF0ID0gZCA9PiB7XG4gICAgICAgIGlmIChpc0RhdGUoZCkpIHtcbiAgICAgICAgICByZXR1cm4gZC50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZC50b0xvY2FsZVN0cmluZygpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBvdXRlclJhZGl1cyA9IHRoaXMub3V0ZXJSYWRpdXM7XG4gICAgY29uc3QgcyA9IDEuMTtcblxuICAgIHRoaXMudGhldGFUaWNrcyA9IHRoaXMueERvbWFpbi5tYXAoZCA9PiB7XG4gICAgICBjb25zdCBzdGFydEFuZ2xlID0gdGhpcy54U2NhbGUoZCk7XG4gICAgICBjb25zdCBkZCA9IHMgKiBvdXRlclJhZGl1cyAqIChzdGFydEFuZ2xlID4gTWF0aC5QSSA/IC0xIDogMSk7XG4gICAgICBjb25zdCBsYWJlbCA9IHRpY2tGb3JtYXQoZCk7XG5cbiAgICAgIGNvbnN0IHN0YXJ0UG9zID0gW291dGVyUmFkaXVzICogTWF0aC5zaW4oc3RhcnRBbmdsZSksIC1vdXRlclJhZGl1cyAqIE1hdGguY29zKHN0YXJ0QW5nbGUpXTtcbiAgICAgIGNvbnN0IHBvcyA9IFtkZCwgcyAqIHN0YXJ0UG9zWzFdXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlubmVyUmFkaXVzOiAwLFxuICAgICAgICBvdXRlclJhZGl1cyxcbiAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgZW5kQW5nbGU6IHN0YXJ0QW5nbGUsXG4gICAgICAgIHZhbHVlOiBvdXRlclJhZGl1cyxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHN0YXJ0UG9zLFxuICAgICAgICBwb3NcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBtaW5EaXN0YW5jZSA9IDEwO1xuXG4gICAgLyogZnJvbSBwaWUgY2hhcnQsIGFic3RyYWN0IG91dCAtKi9cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGhldGFUaWNrcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLnRoZXRhVGlja3NbaV07XG5cbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMudGhldGFUaWNrcy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBiID0gdGhpcy50aGV0YVRpY2tzW2pdO1xuICAgICAgICAvLyBpZiB0aGV5J3JlIG9uIHRoZSBzYW1lIHNpZGVcbiAgICAgICAgaWYgKGIucG9zWzBdICogYS5wb3NbMF0gPiAwKSB7XG4gICAgICAgICAgLy8gaWYgdGhleSdyZSBvdmVybGFwcGluZ1xuICAgICAgICAgIGNvbnN0IG8gPSBtaW5EaXN0YW5jZSAtIE1hdGguYWJzKGIucG9zWzFdIC0gYS5wb3NbMV0pO1xuICAgICAgICAgIGlmIChvID4gMCkge1xuICAgICAgICAgICAgLy8gcHVzaCB0aGUgc2Vjb25kIHVwIG9yIGRvd25cbiAgICAgICAgICAgIGIucG9zWzFdICs9IE1hdGguc2lnbihiLnBvc1swXSkgKiBvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucmFkaXVzVGlja3MgPSB0aGlzLnlBeGlzU2NhbGUudGlja3MoTWF0aC5mbG9vcih0aGlzLmRpbXMuaGVpZ2h0IC8gNTApKS5tYXAoZCA9PiB0aGlzLnlTY2FsZShkKSk7XG4gIH1cblxuICBnZXRYVmFsdWVzKCk6IGFueVtdIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHJlc3VsdHMgb2YgdGhpcy5yZXN1bHRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGQgb2YgcmVzdWx0cy5zZXJpZXMpIHtcbiAgICAgICAgaWYgKCF2YWx1ZXMuaW5jbHVkZXMoZC5uYW1lKSkge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKGQubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIGdldFhEb21haW4odmFsdWVzID0gdGhpcy5nZXRYVmFsdWVzKCkpOiBhbnlbXSB7XG4gICAgaWYgKHRoaXMuc2NhbGVUeXBlID09PSBTY2FsZVR5cGUuVGltZSkge1xuICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oLi4udmFsdWVzKTtcbiAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnZhbHVlcyk7XG4gICAgICByZXR1cm4gW21pbiwgbWF4XTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NhbGVUeXBlID09PSBTY2FsZVR5cGUuTGluZWFyKSB7XG4gICAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKHYgPT4gTnVtYmVyKHYpKTtcbiAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLnZhbHVlcyk7XG4gICAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi52YWx1ZXMpO1xuICAgICAgcmV0dXJuIFttaW4sIG1heF07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBnZXRZVmFsdWVzKCk6IGFueVtdIHtcbiAgICBjb25zdCBkb21haW4gPSBbXTtcblxuICAgIGZvciAoY29uc3QgcmVzdWx0cyBvZiB0aGlzLnJlc3VsdHMpIHtcbiAgICAgIGZvciAoY29uc3QgZCBvZiByZXN1bHRzLnNlcmllcykge1xuICAgICAgICBpZiAoZG9tYWluLmluZGV4T2YoZC52YWx1ZSkgPCAwKSB7XG4gICAgICAgICAgZG9tYWluLnB1c2goZC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGQubWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoZG9tYWluLmluZGV4T2YoZC5taW4pIDwgMCkge1xuICAgICAgICAgICAgZG9tYWluLnB1c2goZC5taW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZC5tYXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChkb21haW4uaW5kZXhPZihkLm1heCkgPCAwKSB7XG4gICAgICAgICAgICBkb21haW4ucHVzaChkLm1heCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb21haW47XG4gIH1cblxuICBnZXRZRG9tYWluKGRvbWFpbiA9IHRoaXMuZ2V0WVZhbHVlcygpKTogYW55W10ge1xuICAgIGxldCBtaW4gPSBNYXRoLm1pbiguLi5kb21haW4pO1xuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHRoaXMueUF4aXNNaW5TY2FsZSwgLi4uZG9tYWluKTtcblxuICAgIG1pbiA9IE1hdGgubWF4KDAsIG1pbik7XG4gICAgaWYgKCF0aGlzLmF1dG9TY2FsZSkge1xuICAgICAgbWluID0gTWF0aC5taW4oMCwgbWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW21pbiwgbWF4XTtcbiAgfVxuXG4gIGdldFNlcmllc0RvbWFpbigpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0cy5tYXAoZCA9PiBkLm5hbWUpO1xuICB9XG5cbiAgZ2V0WFNjYWxlKGRvbWFpbiwgd2lkdGg6IG51bWJlcik6IGFueSB7XG4gICAgc3dpdGNoICh0aGlzLnNjYWxlVHlwZSkge1xuICAgICAgY2FzZSBTY2FsZVR5cGUuVGltZTpcbiAgICAgICAgcmV0dXJuIHNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pLmRvbWFpbihkb21haW4pO1xuICAgICAgY2FzZSBTY2FsZVR5cGUuTGluZWFyOlxuICAgICAgICBjb25zdCBzY2FsZSA9IHNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSkuZG9tYWluKGRvbWFpbik7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdW5kRG9tYWlucyA/IHNjYWxlLm5pY2UoKSA6IHNjYWxlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHNjYWxlUG9pbnQoKVxuICAgICAgICAgIC5yYW5nZShbMCwgd2lkdGggLSB0d29QSSAvIGRvbWFpbi5sZW5ndGhdKVxuICAgICAgICAgIC5wYWRkaW5nKDApXG4gICAgICAgICAgLmRvbWFpbihkb21haW4pO1xuICAgIH1cbiAgfVxuXG4gIGdldFlTY2FsZShkb21haW4sIGhlaWdodDogbnVtYmVyKTogYW55IHtcbiAgICBjb25zdCBzY2FsZSA9IHNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIGhlaWdodF0pLmRvbWFpbihkb21haW4pO1xuXG4gICAgcmV0dXJuIHRoaXMucm91bmREb21haW5zID8gc2NhbGUubmljZSgpIDogc2NhbGU7XG4gIH1cblxuICBvbkNsaWNrKGRhdGEsIHNlcmllcz8pOiB2b2lkIHtcbiAgICBpZiAoc2VyaWVzKSB7XG4gICAgICBkYXRhLnNlcmllcyA9IHNlcmllcy5uYW1lO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0LmVtaXQoZGF0YSk7XG4gIH1cblxuICBzZXRDb2xvcnMoKTogdm9pZCB7XG4gICAgY29uc3QgZG9tYWluID0gdGhpcy5zY2hlbWVUeXBlID09PSBTY2FsZVR5cGUuT3JkaW5hbCA/IHRoaXMuc2VyaWVzRG9tYWluIDogdGhpcy55RG9tYWluLnJldmVyc2UoKTtcbiAgICB0aGlzLmNvbG9ycyA9IG5ldyBDb2xvckhlbHBlcih0aGlzLnNjaGVtZSwgdGhpcy5zY2hlbWVUeXBlLCBkb21haW4sIHRoaXMuY3VzdG9tQ29sb3JzKTtcbiAgfVxuXG4gIGdldExlZ2VuZE9wdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1lVHlwZSA9PT0gU2NhbGVUeXBlLk9yZGluYWwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNjYWxlVHlwZTogdGhpcy5zY2hlbWVUeXBlLFxuICAgICAgICBjb2xvcnM6IHRoaXMuY29sb3JzLFxuICAgICAgICBkb21haW46IHRoaXMuc2VyaWVzRG9tYWluLFxuICAgICAgICB0aXRsZTogdGhpcy5sZWdlbmRUaXRsZSxcbiAgICAgICAgcG9zaXRpb246IHRoaXMubGVnZW5kUG9zaXRpb25cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzY2FsZVR5cGU6IHRoaXMuc2NoZW1lVHlwZSxcbiAgICAgIGNvbG9yczogdGhpcy5jb2xvcnMuc2NhbGUsXG4gICAgICBkb21haW46IHRoaXMueURvbWFpbixcbiAgICAgIHRpdGxlOiB1bmRlZmluZWQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5sZWdlbmRQb3NpdGlvblxuICAgIH07XG4gIH1cblxuICB1cGRhdGVZQXhpc1dpZHRoKHsgd2lkdGggfTogeyB3aWR0aDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnlBeGlzV2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlWEF4aXNIZWlnaHQoeyBoZWlnaHQgfTogeyBoZWlnaHQ6IG51bWJlciB9KTogdm9pZCB7XG4gICAgdGhpcy54QXhpc0hlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgb25BY3RpdmF0ZShpdGVtKTogdm9pZCB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmRJbmRleChkID0+IHtcbiAgICAgIHJldHVybiBkLm5hbWUgPT09IGl0ZW0ubmFtZSAmJiBkLnZhbHVlID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSB0aGlzLnNob3dTZXJpZXNPbkhvdmVyID8gW2l0ZW0sIC4uLnRoaXMuYWN0aXZlRW50cmllc10gOiB0aGlzLmFjdGl2ZUVudHJpZXM7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHsgdmFsdWU6IGl0ZW0sIGVudHJpZXM6IHRoaXMuYWN0aXZlRW50cmllcyB9KTtcbiAgfVxuXG4gIG9uRGVhY3RpdmF0ZShpdGVtKTogdm9pZCB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmRJbmRleChkID0+IHtcbiAgICAgIHJldHVybiBkLm5hbWUgPT09IGl0ZW0ubmFtZSAmJiBkLnZhbHVlID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmVFbnRyaWVzLnNwbGljZShpZHgsIDEpO1xuICAgIHRoaXMuYWN0aXZlRW50cmllcyA9IFsuLi50aGlzLmFjdGl2ZUVudHJpZXNdO1xuXG4gICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyB2YWx1ZTogaXRlbSwgZW50cmllczogdGhpcy5hY3RpdmVFbnRyaWVzIH0pO1xuICB9XG5cbiAgZGVhY3RpdmF0ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSBbLi4udGhpcy5hY3RpdmVFbnRyaWVzXTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuYWN0aXZlRW50cmllcykge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyB2YWx1ZTogZW50cnksIGVudHJpZXM6IFtdIH0pO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSBbXTtcbiAgfVxuXG4gIHRyYWNrQnkoaW5kZXg6IG51bWJlciwgaXRlbSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2l0ZW0ubmFtZX1gO1xuICB9XG59XG4iXX0=