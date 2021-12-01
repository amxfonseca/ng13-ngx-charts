import { Component, Input, Output, EventEmitter, ViewEncapsulation, HostListener, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { scaleLinear, scaleTime, scalePoint } from 'd3-scale';
import { curveLinear } from 'd3-shape';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { id } from '../utils/id';
import { getUniqueXDomainValues, getScaleType } from '../common/domain.helper';
import { LegendPosition } from '../common/types/legend.model';
import { ScaleType } from '../common/types/scale-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../common/charts/chart.component";
import * as i2 from "@angular/common";
import * as i3 from "../common/axes/x-axis.component";
import * as i4 from "../common/axes/y-axis.component";
import * as i5 from "./line-series.component";
import * as i6 from "../common/tooltip-area.component";
import * as i7 from "../common/circle-series.component";
import * as i8 from "../common/timeline/timeline.component";
const _c0 = ["tooltipTemplate"];
const _c1 = ["seriesTooltipTemplate"];
function LineChartComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 7);
    i0.ɵɵlistener("dimensionsChanged", function LineChartComponent__svg_g_5_Template__svg_g_dimensionsChanged_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.updateXAxisHeight($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showGridLines", ctx_r0.showGridLines)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function LineChartComponent__svg_g_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 8);
    i0.ɵɵlistener("dimensionsChanged", function LineChartComponent__svg_g_6_Template__svg_g_dimensionsChanged_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.updateYAxisWidth($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks)("referenceLines", ctx_r1.referenceLines)("showRefLines", ctx_r1.showRefLines)("showRefLabels", ctx_r1.showRefLabels);
} }
function LineChartComponent__svg_g_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelement(1, "g", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@animationState", "active");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("xScale", ctx_r2.xScale)("yScale", ctx_r2.yScale)("colors", ctx_r2.colors)("data", series_r9)("activeEntries", ctx_r2.activeEntries)("scaleType", ctx_r2.scaleType)("curve", ctx_r2.curve)("rangeFillOpacity", ctx_r2.rangeFillOpacity)("hasRange", ctx_r2.hasRange)("animations", ctx_r2.animations);
} }
function LineChartComponent__svg_g_9__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelementStart(1, "g", 13);
    i0.ɵɵlistener("select", function LineChartComponent__svg_g_9__svg_g_2_Template__svg_g_select_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onClick($event); })("activate", function LineChartComponent__svg_g_9__svg_g_2_Template__svg_g_activate_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.onActivate($event); })("deactivate", function LineChartComponent__svg_g_9__svg_g_2_Template__svg_g_deactivate_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onDeactivate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r11 = ctx.$implicit;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("xScale", ctx_r10.xScale)("yScale", ctx_r10.yScale)("colors", ctx_r10.colors)("data", series_r11)("scaleType", ctx_r10.scaleType)("visibleValue", ctx_r10.hoveredVertical)("activeEntries", ctx_r10.activeEntries)("tooltipDisabled", ctx_r10.tooltipDisabled)("tooltipTemplate", ctx_r10.tooltipTemplate);
} }
function LineChartComponent__svg_g_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 10);
    i0.ɵɵlistener("mouseleave", function LineChartComponent__svg_g_9_Template__svg_g_mouseleave_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.hideCircles(); });
    i0.ɵɵelementStart(1, "g", 11);
    i0.ɵɵlistener("hover", function LineChartComponent__svg_g_9_Template__svg_g_hover_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.updateHoveredVertical($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, LineChartComponent__svg_g_9__svg_g_2_Template, 2, 9, "g", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dims", ctx_r3.dims)("xSet", ctx_r3.xSet)("xScale", ctx_r3.xScale)("yScale", ctx_r3.yScale)("results", ctx_r3.results)("colors", ctx_r3.colors)("tooltipDisabled", ctx_r3.tooltipDisabled)("tooltipTemplate", ctx_r3.seriesTooltipTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.results);
} }
function LineChartComponent__svg_g_10__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelement(1, "g", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const series_r20 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("xScale", ctx_r19.timelineXScale)("yScale", ctx_r19.timelineYScale)("colors", ctx_r19.colors)("data", series_r20)("scaleType", ctx_r19.scaleType)("curve", ctx_r19.curve)("hasRange", ctx_r19.hasRange)("animations", ctx_r19.animations);
} }
const _c2 = function (a0, a1) { return [a0, a1]; };
function LineChartComponent__svg_g_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 14);
    i0.ɵɵlistener("onDomainChange", function LineChartComponent__svg_g_10_Template__svg_g_onDomainChange_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.updateDomain($event); });
    i0.ɵɵtemplate(1, LineChartComponent__svg_g_10__svg_g_1_Template, 2, 8, "g", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("results", ctx_r4.results)("view", i0.ɵɵpureFunction2(10, _c2, ctx_r4.timelineWidth, ctx_r4.height))("height", ctx_r4.timelineHeight)("scheme", ctx_r4.scheme)("customColors", ctx_r4.customColors)("scaleType", ctx_r4.scaleType)("legend", ctx_r4.legend);
    i0.ɵɵattribute("transform", ctx_r4.timelineTransform);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.results)("ngForTrackBy", ctx_r4.trackBy);
} }
export class LineChartComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legendTitle = 'Legend';
        this.legendPosition = LegendPosition.Right;
        this.showGridLines = true;
        this.curve = curveLinear;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.roundDomains = false;
        this.tooltipDisabled = false;
        this.showRefLines = false;
        this.showRefLabels = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.timelineHeight = 50;
        this.timelinePadding = 10;
    }
    update() {
        super.update();
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
        if (this.timeline) {
            this.dims.height -= this.timelineHeight + this.margin[2] + this.timelinePadding;
        }
        this.xDomain = this.getXDomain();
        if (this.filteredDomain) {
            this.xDomain = this.filteredDomain;
        }
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
        this.updateTimeline();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
        this.clipPathId = 'clip' + id().toString();
        this.clipPath = `url(#${this.clipPathId})`;
    }
    updateTimeline() {
        if (this.timeline) {
            this.timelineWidth = this.dims.width;
            this.timelineXDomain = this.getXDomain();
            this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
            this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
            this.timelineTransform = `translate(${this.dims.xOffset}, ${-this.margin[2]})`;
        }
    }
    getXDomain() {
        let values = getUniqueXDomainValues(this.results);
        this.scaleType = getScaleType(values);
        let domain = [];
        if (this.scaleType === ScaleType.Linear) {
            values = values.map(v => Number(v));
        }
        let min;
        let max;
        if (this.scaleType === ScaleType.Time || this.scaleType === ScaleType.Linear) {
            min = this.xScaleMin ? this.xScaleMin : Math.min(...values);
            max = this.xScaleMax ? this.xScaleMax : Math.max(...values);
        }
        if (this.scaleType === ScaleType.Time) {
            domain = [new Date(min), new Date(max)];
            this.xSet = [...values].sort((a, b) => {
                const aDate = a.getTime();
                const bDate = b.getTime();
                if (aDate > bDate)
                    return 1;
                if (bDate > aDate)
                    return -1;
                return 0;
            });
        }
        else if (this.scaleType === ScaleType.Linear) {
            domain = [min, max];
            // Use compare function to sort numbers numerically
            this.xSet = [...values].sort((a, b) => a - b);
        }
        else {
            domain = values;
            this.xSet = values;
        }
        return domain;
    }
    getYDomain() {
        const domain = [];
        for (const results of this.results) {
            for (const d of results.series) {
                if (domain.indexOf(d.value) < 0) {
                    domain.push(d.value);
                }
                if (d.min !== undefined) {
                    this.hasRange = true;
                    if (domain.indexOf(d.min) < 0) {
                        domain.push(d.min);
                    }
                }
                if (d.max !== undefined) {
                    this.hasRange = true;
                    if (domain.indexOf(d.max) < 0) {
                        domain.push(d.max);
                    }
                }
            }
        }
        const values = [...domain];
        if (!this.autoScale) {
            values.push(0);
        }
        const min = this.yScaleMin ? this.yScaleMin : Math.min(...values);
        const max = this.yScaleMax ? this.yScaleMax : Math.max(...values);
        return [min, max];
    }
    getSeriesDomain() {
        return this.results.map(d => d.name);
    }
    getXScale(domain, width) {
        let scale;
        if (this.scaleType === ScaleType.Time) {
            scale = scaleTime().range([0, width]).domain(domain);
        }
        else if (this.scaleType === ScaleType.Linear) {
            scale = scaleLinear().range([0, width]).domain(domain);
            if (this.roundDomains) {
                scale = scale.nice();
            }
        }
        else if (this.scaleType === ScaleType.Ordinal) {
            scale = scalePoint().range([0, width]).padding(0.1).domain(domain);
        }
        return scale;
    }
    getYScale(domain, height) {
        const scale = scaleLinear().range([height, 0]).domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    }
    updateDomain(domain) {
        this.filteredDomain = domain;
        this.xDomain = this.filteredDomain;
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
    }
    updateHoveredVertical(item) {
        this.hoveredVertical = item.value;
        this.deactivateAll();
    }
    hideCircles() {
        this.hoveredVertical = null;
        this.deactivateAll();
    }
    onClick(data) {
        this.select.emit(data);
    }
    trackBy(index, item) {
        return `${item.name}`;
    }
    setColors() {
        let domain;
        if (this.schemeType === ScaleType.Ordinal) {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    getLegendOptions() {
        const opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined,
            position: this.legendPosition
        };
        if (opts.scaleType === ScaleType.Ordinal) {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.yDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
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
        this.deactivateAll();
        const idx = this.activeEntries.findIndex(d => {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item];
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
}
LineChartComponent.ɵfac = /*@__PURE__*/ function () { let ɵLineChartComponent_BaseFactory; return function LineChartComponent_Factory(t) { return (ɵLineChartComponent_BaseFactory || (ɵLineChartComponent_BaseFactory = i0.ɵɵgetInheritedFactory(LineChartComponent)))(t || LineChartComponent); }; }();
LineChartComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LineChartComponent, selectors: [["ngx-charts-line-chart"]], contentQueries: function LineChartComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, 5);
        i0.ɵɵcontentQuery(dirIndex, _c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.seriesTooltipTemplate = _t.first);
    } }, hostBindings: function LineChartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseleave", function LineChartComponent_mouseleave_HostBindingHandler() { return ctx.hideCircles(); });
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", autoScale: "autoScale", timeline: "timeline", gradient: "gradient", showGridLines: "showGridLines", curve: "curve", activeEntries: "activeEntries", schemeType: "schemeType", rangeFillOpacity: "rangeFillOpacity", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", roundDomains: "roundDomains", tooltipDisabled: "tooltipDisabled", showRefLines: "showRefLines", referenceLines: "referenceLines", showRefLabels: "showRefLabels", xScaleMin: "xScaleMin", xScaleMax: "xScaleMax", yScaleMin: "yScaleMin", yScaleMax: "yScaleMax" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 20, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "line-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "referenceLines", "showRefLines", "showRefLabels", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "mouseleave", 4, "ngIf"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "scaleType", "legend", "onDomainChange", 4, "ngIf"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "referenceLines", "showRefLines", "showRefLabels", "dimensionsChanged"], ["ngx-charts-line-series", "", 3, "xScale", "yScale", "colors", "data", "activeEntries", "scaleType", "curve", "rangeFillOpacity", "hasRange", "animations"], [3, "mouseleave"], ["ngx-charts-tooltip-area", "", 3, "dims", "xSet", "xScale", "yScale", "results", "colors", "tooltipDisabled", "tooltipTemplate", "hover"], [4, "ngFor", "ngForOf"], ["ngx-charts-circle-series", "", 3, "xScale", "yScale", "colors", "data", "scaleType", "visibleValue", "activeEntries", "tooltipDisabled", "tooltipTemplate", "select", "activate", "deactivate"], ["ngx-charts-timeline", "", 3, "results", "view", "height", "scheme", "customColors", "scaleType", "legend", "onDomainChange"], ["ngx-charts-line-series", "", 3, "xScale", "yScale", "colors", "data", "scaleType", "curve", "hasRange", "animations"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        i0.ɵɵlistener("legendLabelClick", function LineChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function LineChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event); })("legendLabelDeactivate", function LineChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "defs");
        i0.ɵɵelementStart(2, "clipPath");
        i0.ɵɵelement(3, "rect");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "g", 1);
        i0.ɵɵtemplate(5, LineChartComponent__svg_g_5_Template, 1, 10, "g", 2);
        i0.ɵɵtemplate(6, LineChartComponent__svg_g_6_Template, 1, 12, "g", 3);
        i0.ɵɵelementStart(7, "g");
        i0.ɵɵtemplate(8, LineChartComponent__svg_g_8_Template, 2, 11, "g", 4);
        i0.ɵɵtemplate(9, LineChartComponent__svg_g_9_Template, 3, 9, "g", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, LineChartComponent__svg_g_10_Template, 2, 13, "g", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("view", i0.ɵɵpureFunction2(17, _c2, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        i0.ɵɵadvance(2);
        i0.ɵɵattribute("id", ctx.clipPathId);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("width", ctx.dims.width + 10)("height", ctx.dims.height + 10)("transform", "translate(-5, -5)");
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.xAxis);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.yAxis);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("clip-path", ctx.clipPath);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.tooltipDisabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.timeline && ctx.scaleType != "ordinal");
    } }, directives: [i1.ChartComponent, i2.NgIf, i2.NgForOf, i3.XAxisComponent, i4.YAxisComponent, i5.LineSeriesComponent, i6.TooltipArea, i7.CircleSeriesComponent, i8.Timeline], styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"], encapsulation: 2, data: { animation: [
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineChartComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-line-chart', template: `
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
      <svg:defs>
        <svg:clipPath [attr.id]="clipPathId">
          <svg:rect
            [attr.width]="dims.width + 10"
            [attr.height]="dims.height + 10"
            [attr.transform]="'translate(-5, -5)'"
          />
        </svg:clipPath>
      </svg:defs>
      <svg:g [attr.transform]="transform" class="line-chart chart">
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="xScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="yScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          [referenceLines]="referenceLines"
          [showRefLines]="showRefLines"
          [showRefLabels]="showRefLabels"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g [attr.clip-path]="clipPath">
          <svg:g *ngFor="let series of results; trackBy: trackBy" [@animationState]="'active'">
            <svg:g
              ngx-charts-line-series
              [xScale]="xScale"
              [yScale]="yScale"
              [colors]="colors"
              [data]="series"
              [activeEntries]="activeEntries"
              [scaleType]="scaleType"
              [curve]="curve"
              [rangeFillOpacity]="rangeFillOpacity"
              [hasRange]="hasRange"
              [animations]="animations"
            />
          </svg:g>

          <svg:g *ngIf="!tooltipDisabled" (mouseleave)="hideCircles()">
            <svg:g
              ngx-charts-tooltip-area
              [dims]="dims"
              [xSet]="xSet"
              [xScale]="xScale"
              [yScale]="yScale"
              [results]="results"
              [colors]="colors"
              [tooltipDisabled]="tooltipDisabled"
              [tooltipTemplate]="seriesTooltipTemplate"
              (hover)="updateHoveredVertical($event)"
            />

            <svg:g *ngFor="let series of results">
              <svg:g
                ngx-charts-circle-series
                [xScale]="xScale"
                [yScale]="yScale"
                [colors]="colors"
                [data]="series"
                [scaleType]="scaleType"
                [visibleValue]="hoveredVertical"
                [activeEntries]="activeEntries"
                [tooltipDisabled]="tooltipDisabled"
                [tooltipTemplate]="tooltipTemplate"
                (select)="onClick($event)"
                (activate)="onActivate($event)"
                (deactivate)="onDeactivate($event)"
              />
            </svg:g>
          </svg:g>
        </svg:g>
      </svg:g>
      <svg:g
        ngx-charts-timeline
        *ngIf="timeline && scaleType != 'ordinal'"
        [attr.transform]="timelineTransform"
        [results]="results"
        [view]="[timelineWidth, height]"
        [height]="timelineHeight"
        [scheme]="scheme"
        [customColors]="customColors"
        [scaleType]="scaleType"
        [legend]="legend"
        (onDomainChange)="updateDomain($event)"
      >
        <svg:g *ngFor="let series of results; trackBy: trackBy">
          <svg:g
            ngx-charts-line-series
            [xScale]="timelineXScale"
            [yScale]="timelineYScale"
            [colors]="colors"
            [data]="series"
            [scaleType]="scaleType"
            [curve]="curve"
            [hasRange]="hasRange"
            [animations]="animations"
          />
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
                ], styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"] }]
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
        }], timeline: [{
            type: Input
        }], gradient: [{
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
        }], trimXAxisTicks: [{
            type: Input
        }], trimYAxisTicks: [{
            type: Input
        }], rotateXAxisTicks: [{
            type: Input
        }], maxXAxisTickLength: [{
            type: Input
        }], maxYAxisTickLength: [{
            type: Input
        }], xAxisTickFormatting: [{
            type: Input
        }], yAxisTickFormatting: [{
            type: Input
        }], xAxisTicks: [{
            type: Input
        }], yAxisTicks: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], showRefLines: [{
            type: Input
        }], referenceLines: [{
            type: Input
        }], showRefLabels: [{
            type: Input
        }], xScaleMin: [{
            type: Input
        }], xScaleMax: [{
            type: Input
        }], yScaleMin: [{
            type: Input
        }], yScaleMax: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }], seriesTooltipTemplate: [{
            type: ContentChild,
            args: ['seriesTooltipTemplate']
        }], hideCircles: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLFlBQVksRUFFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9FLE9BQU8sRUFBaUIsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUEwQnBELDRCQWNDO0lBREMsZ01BQXFCLGdDQUF5QixJQUFDO0lBQ2hELGlCQUFROzs7SUFYUCxzQ0FBaUIscUJBQUEsdUNBQUEsb0NBQUEsZ0NBQUEsb0NB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ckIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFFSSxRQUFRO2tCQUFqQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUUwQixlQUFlO2tCQUEvQyxZQUFZO21CQUFDLGlCQUFpQjtZQUNRLHFCQUFxQjtrQkFBM0QsWUFBWTttQkFBQyx1QkFBdUI7WUFxTXJDLFdBQVc7a0JBRFYsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBIb3N0TGlzdGVuZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb250ZW50Q2hpbGQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IHNjYWxlTGluZWFyLCBzY2FsZVRpbWUsIHNjYWxlUG9pbnQgfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQgeyBjdXJ2ZUxpbmVhciB9IGZyb20gJ2QzLXNoYXBlJztcblxuaW1wb3J0IHsgY2FsY3VsYXRlVmlld0RpbWVuc2lvbnMgfSBmcm9tICcuLi9jb21tb24vdmlldy1kaW1lbnNpb25zLmhlbHBlcic7XG5pbXBvcnQgeyBDb2xvckhlbHBlciB9IGZyb20gJy4uL2NvbW1vbi9jb2xvci5oZWxwZXInO1xuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IGlkIH0gZnJvbSAnLi4vdXRpbHMvaWQnO1xuaW1wb3J0IHsgZ2V0VW5pcXVlWERvbWFpblZhbHVlcywgZ2V0U2NhbGVUeXBlIH0gZnJvbSAnLi4vY29tbW9uL2RvbWFpbi5oZWxwZXInO1xuaW1wb3J0IHsgTGVnZW5kT3B0aW9ucywgTGVnZW5kUG9zaXRpb24gfSBmcm9tICcuLi9jb21tb24vdHlwZXMvbGVnZW5kLm1vZGVsJztcbmltcG9ydCB7IFNjYWxlVHlwZSB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9zY2FsZS10eXBlLmVudW0nO1xuaW1wb3J0IHsgVmlld0RpbWVuc2lvbnMgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvdmlldy1kaW1lbnNpb24uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNoYXJ0cy1saW5lLWNoYXJ0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LWNoYXJ0cy1jaGFydFxuICAgICAgW3ZpZXddPVwiW3dpZHRoLCBoZWlnaHRdXCJcbiAgICAgIFtzaG93TGVnZW5kXT1cImxlZ2VuZFwiXG4gICAgICBbbGVnZW5kT3B0aW9uc109XCJsZWdlbmRPcHRpb25zXCJcbiAgICAgIFthY3RpdmVFbnRyaWVzXT1cImFjdGl2ZUVudHJpZXNcIlxuICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAobGVnZW5kTGFiZWxDbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgKGxlZ2VuZExhYmVsQWN0aXZhdGUpPVwib25BY3RpdmF0ZSgkZXZlbnQpXCJcbiAgICAgIChsZWdlbmRMYWJlbERlYWN0aXZhdGUpPVwib25EZWFjdGl2YXRlKCRldmVudClcIlxuICAgID5cbiAgICAgIDxzdmc6ZGVmcz5cbiAgICAgICAgPHN2ZzpjbGlwUGF0aCBbYXR0ci5pZF09XCJjbGlwUGF0aElkXCI+XG4gICAgICAgICAgPHN2ZzpyZWN0XG4gICAgICAgICAgICBbYXR0ci53aWR0aF09XCJkaW1zLndpZHRoICsgMTBcIlxuICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImRpbXMuaGVpZ2h0ICsgMTBcIlxuICAgICAgICAgICAgW2F0dHIudHJhbnNmb3JtXT1cIid0cmFuc2xhdGUoLTUsIC01KSdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnOmNsaXBQYXRoPlxuICAgICAgPC9zdmc6ZGVmcz5cbiAgICAgIDxzdmc6ZyBbYXR0ci50cmFuc2Zvcm1dPVwidHJhbnNmb3JtXCIgY2xhc3M9XCJsaW5lLWNoYXJ0IGNoYXJ0XCI+XG4gICAgICAgIDxzdmc6Z1xuICAgICAgICAgIG5neC1jaGFydHMteC1heGlzXG4gICAgICAgICAgKm5nSWY9XCJ4QXhpc1wiXG4gICAgICAgICAgW3hTY2FsZV09XCJ4U2NhbGVcIlxuICAgICAgICAgIFtkaW1zXT1cImRpbXNcIlxuICAgICAgICAgIFtzaG93R3JpZExpbmVzXT1cInNob3dHcmlkTGluZXNcIlxuICAgICAgICAgIFtzaG93TGFiZWxdPVwic2hvd1hBeGlzTGFiZWxcIlxuICAgICAgICAgIFtsYWJlbFRleHRdPVwieEF4aXNMYWJlbFwiXG4gICAgICAgICAgW3RyaW1UaWNrc109XCJ0cmltWEF4aXNUaWNrc1wiXG4gICAgICAgICAgW3JvdGF0ZVRpY2tzXT1cInJvdGF0ZVhBeGlzVGlja3NcIlxuICAgICAgICAgIFttYXhUaWNrTGVuZ3RoXT1cIm1heFhBeGlzVGlja0xlbmd0aFwiXG4gICAgICAgICAgW3RpY2tGb3JtYXR0aW5nXT1cInhBeGlzVGlja0Zvcm1hdHRpbmdcIlxuICAgICAgICAgIFt0aWNrc109XCJ4QXhpc1RpY2tzXCJcbiAgICAgICAgICAoZGltZW5zaW9uc0NoYW5nZWQpPVwidXBkYXRlWEF4aXNIZWlnaHQoJGV2ZW50KVwiXG4gICAgICAgID48L3N2ZzpnPlxuICAgICAgICA8c3ZnOmdcbiAgICAgICAgICBuZ3gtY2hhcnRzLXktYXhpc1xuICAgICAgICAgICpuZ0lmPVwieUF4aXNcIlxuICAgICAgICAgIFt5U2NhbGVdPVwieVNjYWxlXCJcbiAgICAgICAgICBbZGltc109XCJkaW1zXCJcbiAgICAgICAgICBbc2hvd0dyaWRMaW5lc109XCJzaG93R3JpZExpbmVzXCJcbiAgICAgICAgICBbc2hvd0xhYmVsXT1cInNob3dZQXhpc0xhYmVsXCJcbiAgICAgICAgICBbbGFiZWxUZXh0XT1cInlBeGlzTGFiZWxcIlxuICAgICAgICAgIFt0cmltVGlja3NdPVwidHJpbVlBeGlzVGlja3NcIlxuICAgICAgICAgIFttYXhUaWNrTGVuZ3RoXT1cIm1heFlBeGlzVGlja0xlbmd0aFwiXG4gICAgICAgICAgW3RpY2tGb3JtYXR0aW5nXT1cInlBeGlzVGlja0Zvcm1hdHRpbmdcIlxuICAgICAgICAgIFt0aWNrc109XCJ5QXhpc1RpY2tzXCJcbiAgICAgICAgICBbcmVmZXJlbmNlTGluZXNdPVwicmVmZXJlbmNlTGluZXNcIlxuICAgICAgICAgIFtzaG93UmVmTGluZXNdPVwic2hvd1JlZkxpbmVzXCJcbiAgICAgICAgICBbc2hvd1JlZkxhYmVsc109XCJzaG93UmVmTGFiZWxzXCJcbiAgICAgICAgICAoZGltZW5zaW9uc0NoYW5nZWQpPVwidXBkYXRlWUF4aXNXaWR0aCgkZXZlbnQpXCJcbiAgICAgICAgPjwvc3ZnOmc+XG4gICAgICAgIDxzdmc6ZyBbYXR0ci5jbGlwLXBhdGhdPVwiY2xpcFBhdGhcIj5cbiAgICAgICAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IHNlcmllcyBvZiByZXN1bHRzOyB0cmFja0J5OiB0cmFja0J5XCIgW0BhbmltYXRpb25TdGF0ZV09XCInYWN0aXZlJ1wiPlxuICAgICAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgICAgIG5neC1jaGFydHMtbGluZS1zZXJpZXNcbiAgICAgICAgICAgICAgW3hTY2FsZV09XCJ4U2NhbGVcIlxuICAgICAgICAgICAgICBbeVNjYWxlXT1cInlTY2FsZVwiXG4gICAgICAgICAgICAgIFtjb2xvcnNdPVwiY29sb3JzXCJcbiAgICAgICAgICAgICAgW2RhdGFdPVwic2VyaWVzXCJcbiAgICAgICAgICAgICAgW2FjdGl2ZUVudHJpZXNdPVwiYWN0aXZlRW50cmllc1wiXG4gICAgICAgICAgICAgIFtzY2FsZVR5cGVdPVwic2NhbGVUeXBlXCJcbiAgICAgICAgICAgICAgW2N1cnZlXT1cImN1cnZlXCJcbiAgICAgICAgICAgICAgW3JhbmdlRmlsbE9wYWNpdHldPVwicmFuZ2VGaWxsT3BhY2l0eVwiXG4gICAgICAgICAgICAgIFtoYXNSYW5nZV09XCJoYXNSYW5nZVwiXG4gICAgICAgICAgICAgIFthbmltYXRpb25zXT1cImFuaW1hdGlvbnNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2ZzpnPlxuXG4gICAgICAgICAgPHN2ZzpnICpuZ0lmPVwiIXRvb2x0aXBEaXNhYmxlZFwiIChtb3VzZWxlYXZlKT1cImhpZGVDaXJjbGVzKClcIj5cbiAgICAgICAgICAgIDxzdmc6Z1xuICAgICAgICAgICAgICBuZ3gtY2hhcnRzLXRvb2x0aXAtYXJlYVxuICAgICAgICAgICAgICBbZGltc109XCJkaW1zXCJcbiAgICAgICAgICAgICAgW3hTZXRdPVwieFNldFwiXG4gICAgICAgICAgICAgIFt4U2NhbGVdPVwieFNjYWxlXCJcbiAgICAgICAgICAgICAgW3lTY2FsZV09XCJ5U2NhbGVcIlxuICAgICAgICAgICAgICBbcmVzdWx0c109XCJyZXN1bHRzXCJcbiAgICAgICAgICAgICAgW2NvbG9yc109XCJjb2xvcnNcIlxuICAgICAgICAgICAgICBbdG9vbHRpcERpc2FibGVkXT1cInRvb2x0aXBEaXNhYmxlZFwiXG4gICAgICAgICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwic2VyaWVzVG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgKGhvdmVyKT1cInVwZGF0ZUhvdmVyZWRWZXJ0aWNhbCgkZXZlbnQpXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxzdmc6ZyAqbmdGb3I9XCJsZXQgc2VyaWVzIG9mIHJlc3VsdHNcIj5cbiAgICAgICAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgICAgICAgbmd4LWNoYXJ0cy1jaXJjbGUtc2VyaWVzXG4gICAgICAgICAgICAgICAgW3hTY2FsZV09XCJ4U2NhbGVcIlxuICAgICAgICAgICAgICAgIFt5U2NhbGVdPVwieVNjYWxlXCJcbiAgICAgICAgICAgICAgICBbY29sb3JzXT1cImNvbG9yc1wiXG4gICAgICAgICAgICAgICAgW2RhdGFdPVwic2VyaWVzXCJcbiAgICAgICAgICAgICAgICBbc2NhbGVUeXBlXT1cInNjYWxlVHlwZVwiXG4gICAgICAgICAgICAgICAgW3Zpc2libGVWYWx1ZV09XCJob3ZlcmVkVmVydGljYWxcIlxuICAgICAgICAgICAgICAgIFthY3RpdmVFbnRyaWVzXT1cImFjdGl2ZUVudHJpZXNcIlxuICAgICAgICAgICAgICAgIFt0b29sdGlwRGlzYWJsZWRdPVwidG9vbHRpcERpc2FibGVkXCJcbiAgICAgICAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgKHNlbGVjdCk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChhY3RpdmF0ZSk9XCJvbkFjdGl2YXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChkZWFjdGl2YXRlKT1cIm9uRGVhY3RpdmF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnOmc+XG4gICAgICAgICAgPC9zdmc6Zz5cbiAgICAgICAgPC9zdmc6Zz5cbiAgICAgIDwvc3ZnOmc+XG4gICAgICA8c3ZnOmdcbiAgICAgICAgbmd4LWNoYXJ0cy10aW1lbGluZVxuICAgICAgICAqbmdJZj1cInRpbWVsaW5lICYmIHNjYWxlVHlwZSAhPSAnb3JkaW5hbCdcIlxuICAgICAgICBbYXR0ci50cmFuc2Zvcm1dPVwidGltZWxpbmVUcmFuc2Zvcm1cIlxuICAgICAgICBbcmVzdWx0c109XCJyZXN1bHRzXCJcbiAgICAgICAgW3ZpZXddPVwiW3RpbWVsaW5lV2lkdGgsIGhlaWdodF1cIlxuICAgICAgICBbaGVpZ2h0XT1cInRpbWVsaW5lSGVpZ2h0XCJcbiAgICAgICAgW3NjaGVtZV09XCJzY2hlbWVcIlxuICAgICAgICBbY3VzdG9tQ29sb3JzXT1cImN1c3RvbUNvbG9yc1wiXG4gICAgICAgIFtzY2FsZVR5cGVdPVwic2NhbGVUeXBlXCJcbiAgICAgICAgW2xlZ2VuZF09XCJsZWdlbmRcIlxuICAgICAgICAob25Eb21haW5DaGFuZ2UpPVwidXBkYXRlRG9tYWluKCRldmVudClcIlxuICAgICAgPlxuICAgICAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IHNlcmllcyBvZiByZXN1bHRzOyB0cmFja0J5OiB0cmFja0J5XCI+XG4gICAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgICBuZ3gtY2hhcnRzLWxpbmUtc2VyaWVzXG4gICAgICAgICAgICBbeFNjYWxlXT1cInRpbWVsaW5lWFNjYWxlXCJcbiAgICAgICAgICAgIFt5U2NhbGVdPVwidGltZWxpbmVZU2NhbGVcIlxuICAgICAgICAgICAgW2NvbG9yc109XCJjb2xvcnNcIlxuICAgICAgICAgICAgW2RhdGFdPVwic2VyaWVzXCJcbiAgICAgICAgICAgIFtzY2FsZVR5cGVdPVwic2NhbGVUeXBlXCJcbiAgICAgICAgICAgIFtjdXJ2ZV09XCJjdXJ2ZVwiXG4gICAgICAgICAgICBbaGFzUmFuZ2VdPVwiaGFzUmFuZ2VcIlxuICAgICAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc6Zz5cbiAgICAgIDwvc3ZnOmc+XG4gICAgPC9uZ3gtY2hhcnRzLWNoYXJ0PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi4vY29tbW9uL2Jhc2UtY2hhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhbmltYXRpb25TdGF0ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoXG4gICAgICAgICAgNTAwLFxuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbGVnZW5kOiBib29sZWFuO1xuICBASW5wdXQoKSBsZWdlbmRUaXRsZTogc3RyaW5nID0gJ0xlZ2VuZCc7XG4gIEBJbnB1dCgpIGxlZ2VuZFBvc2l0aW9uOiBMZWdlbmRQb3NpdGlvbiA9IExlZ2VuZFBvc2l0aW9uLlJpZ2h0O1xuICBASW5wdXQoKSB4QXhpczogYm9vbGVhbjtcbiAgQElucHV0KCkgeUF4aXM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dYQXhpc0xhYmVsOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93WUF4aXNMYWJlbDogYm9vbGVhbjtcbiAgQElucHV0KCkgeEF4aXNMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB5QXhpc0xhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF1dG9TY2FsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgdGltZWxpbmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGdyYWRpZW50OiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93R3JpZExpbmVzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgY3VydmU6IGFueSA9IGN1cnZlTGluZWFyO1xuICBASW5wdXQoKSBhY3RpdmVFbnRyaWVzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBzY2hlbWVUeXBlOiBTY2FsZVR5cGU7XG4gIEBJbnB1dCgpIHJhbmdlRmlsbE9wYWNpdHk6IG51bWJlcjtcbiAgQElucHV0KCkgdHJpbVhBeGlzVGlja3M6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB0cmltWUF4aXNUaWNrczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHJvdGF0ZVhBeGlzVGlja3M6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBtYXhYQXhpc1RpY2tMZW5ndGg6IG51bWJlciA9IDE2O1xuICBASW5wdXQoKSBtYXhZQXhpc1RpY2tMZW5ndGg6IG51bWJlciA9IDE2O1xuICBASW5wdXQoKSB4QXhpc1RpY2tGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIHlBeGlzVGlja0Zvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgeEF4aXNUaWNrczogYW55W107XG4gIEBJbnB1dCgpIHlBeGlzVGlja3M6IGFueVtdO1xuICBASW5wdXQoKSByb3VuZERvbWFpbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbHRpcERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dSZWZMaW5lczogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSByZWZlcmVuY2VMaW5lczogYW55O1xuICBASW5wdXQoKSBzaG93UmVmTGFiZWxzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgeFNjYWxlTWluOiBudW1iZXI7XG4gIEBJbnB1dCgpIHhTY2FsZU1heDogbnVtYmVyO1xuICBASW5wdXQoKSB5U2NhbGVNaW46IG51bWJlcjtcbiAgQElucHV0KCkgeVNjYWxlTWF4OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBDb250ZW50Q2hpbGQoJ3Rvb2x0aXBUZW1wbGF0ZScpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZCgnc2VyaWVzVG9vbHRpcFRlbXBsYXRlJykgc2VyaWVzVG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGRpbXM6IFZpZXdEaW1lbnNpb25zO1xuICB4U2V0OiBhbnk7XG4gIHhEb21haW46IGFueTtcbiAgeURvbWFpbjogW251bWJlciwgbnVtYmVyXTtcbiAgc2VyaWVzRG9tYWluOiBhbnk7XG4gIHlTY2FsZTogYW55O1xuICB4U2NhbGU6IGFueTtcbiAgY29sb3JzOiBDb2xvckhlbHBlcjtcbiAgc2NhbGVUeXBlOiBTY2FsZVR5cGU7XG4gIHRyYW5zZm9ybTogc3RyaW5nO1xuICBjbGlwUGF0aDogc3RyaW5nO1xuICBjbGlwUGF0aElkOiBzdHJpbmc7XG4gIGFyZWFQYXRoOiBhbnk7XG4gIG1hcmdpbjogbnVtYmVyW10gPSBbMTAsIDIwLCAxMCwgMjBdO1xuICBob3ZlcmVkVmVydGljYWw6IGFueTsgLy8gdGhlIHZhbHVlIG9mIHRoZSB4IGF4aXMgdGhhdCBpcyBob3ZlcmVkIG92ZXJcbiAgeEF4aXNIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHlBeGlzV2lkdGg6IG51bWJlciA9IDA7XG4gIGZpbHRlcmVkRG9tYWluOiBhbnk7XG4gIGxlZ2VuZE9wdGlvbnM6IGFueTtcbiAgaGFzUmFuZ2U6IGJvb2xlYW47IC8vIHdoZXRoZXIgdGhlIGxpbmUgaGFzIGEgbWluLW1heCByYW5nZSBhcm91bmQgaXRcbiAgdGltZWxpbmVXaWR0aDogYW55O1xuICB0aW1lbGluZUhlaWdodDogbnVtYmVyID0gNTA7XG4gIHRpbWVsaW5lWFNjYWxlOiBhbnk7XG4gIHRpbWVsaW5lWVNjYWxlOiBhbnk7XG4gIHRpbWVsaW5lWERvbWFpbjogYW55O1xuICB0aW1lbGluZVRyYW5zZm9ybTogYW55O1xuICB0aW1lbGluZVBhZGRpbmc6IG51bWJlciA9IDEwO1xuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoKTtcblxuICAgIHRoaXMuZGltcyA9IGNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zKHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG1hcmdpbnM6IHRoaXMubWFyZ2luLFxuICAgICAgc2hvd1hBeGlzOiB0aGlzLnhBeGlzLFxuICAgICAgc2hvd1lBeGlzOiB0aGlzLnlBeGlzLFxuICAgICAgeEF4aXNIZWlnaHQ6IHRoaXMueEF4aXNIZWlnaHQsXG4gICAgICB5QXhpc1dpZHRoOiB0aGlzLnlBeGlzV2lkdGgsXG4gICAgICBzaG93WExhYmVsOiB0aGlzLnNob3dYQXhpc0xhYmVsLFxuICAgICAgc2hvd1lMYWJlbDogdGhpcy5zaG93WUF4aXNMYWJlbCxcbiAgICAgIHNob3dMZWdlbmQ6IHRoaXMubGVnZW5kLFxuICAgICAgbGVnZW5kVHlwZTogdGhpcy5zY2hlbWVUeXBlLFxuICAgICAgbGVnZW5kUG9zaXRpb246IHRoaXMubGVnZW5kUG9zaXRpb25cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnRpbWVsaW5lKSB7XG4gICAgICB0aGlzLmRpbXMuaGVpZ2h0IC09IHRoaXMudGltZWxpbmVIZWlnaHQgKyB0aGlzLm1hcmdpblsyXSArIHRoaXMudGltZWxpbmVQYWRkaW5nO1xuICAgIH1cblxuICAgIHRoaXMueERvbWFpbiA9IHRoaXMuZ2V0WERvbWFpbigpO1xuICAgIGlmICh0aGlzLmZpbHRlcmVkRG9tYWluKSB7XG4gICAgICB0aGlzLnhEb21haW4gPSB0aGlzLmZpbHRlcmVkRG9tYWluO1xuICAgIH1cblxuICAgIHRoaXMueURvbWFpbiA9IHRoaXMuZ2V0WURvbWFpbigpO1xuICAgIHRoaXMuc2VyaWVzRG9tYWluID0gdGhpcy5nZXRTZXJpZXNEb21haW4oKTtcblxuICAgIHRoaXMueFNjYWxlID0gdGhpcy5nZXRYU2NhbGUodGhpcy54RG9tYWluLCB0aGlzLmRpbXMud2lkdGgpO1xuICAgIHRoaXMueVNjYWxlID0gdGhpcy5nZXRZU2NhbGUodGhpcy55RG9tYWluLCB0aGlzLmRpbXMuaGVpZ2h0KTtcblxuICAgIHRoaXMudXBkYXRlVGltZWxpbmUoKTtcblxuICAgIHRoaXMuc2V0Q29sb3JzKCk7XG4gICAgdGhpcy5sZWdlbmRPcHRpb25zID0gdGhpcy5nZXRMZWdlbmRPcHRpb25zKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLmRpbXMueE9mZnNldH0gLCAke3RoaXMubWFyZ2luWzBdfSlgO1xuXG4gICAgdGhpcy5jbGlwUGF0aElkID0gJ2NsaXAnICsgaWQoKS50b1N0cmluZygpO1xuICAgIHRoaXMuY2xpcFBhdGggPSBgdXJsKCMke3RoaXMuY2xpcFBhdGhJZH0pYDtcbiAgfVxuXG4gIHVwZGF0ZVRpbWVsaW5lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVsaW5lKSB7XG4gICAgICB0aGlzLnRpbWVsaW5lV2lkdGggPSB0aGlzLmRpbXMud2lkdGg7XG4gICAgICB0aGlzLnRpbWVsaW5lWERvbWFpbiA9IHRoaXMuZ2V0WERvbWFpbigpO1xuICAgICAgdGhpcy50aW1lbGluZVhTY2FsZSA9IHRoaXMuZ2V0WFNjYWxlKHRoaXMudGltZWxpbmVYRG9tYWluLCB0aGlzLnRpbWVsaW5lV2lkdGgpO1xuICAgICAgdGhpcy50aW1lbGluZVlTY2FsZSA9IHRoaXMuZ2V0WVNjYWxlKHRoaXMueURvbWFpbiwgdGhpcy50aW1lbGluZUhlaWdodCk7XG4gICAgICB0aGlzLnRpbWVsaW5lVHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMuZGltcy54T2Zmc2V0fSwgJHstdGhpcy5tYXJnaW5bMl19KWA7XG4gICAgfVxuICB9XG5cbiAgZ2V0WERvbWFpbigpOiBhbnlbXSB7XG4gICAgbGV0IHZhbHVlcyA9IGdldFVuaXF1ZVhEb21haW5WYWx1ZXModGhpcy5yZXN1bHRzKTtcblxuICAgIHRoaXMuc2NhbGVUeXBlID0gZ2V0U2NhbGVUeXBlKHZhbHVlcyk7XG4gICAgbGV0IGRvbWFpbiA9IFtdO1xuXG4gICAgaWYgKHRoaXMuc2NhbGVUeXBlID09PSBTY2FsZVR5cGUuTGluZWFyKSB7XG4gICAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKHYgPT4gTnVtYmVyKHYpKTtcbiAgICB9XG5cbiAgICBsZXQgbWluO1xuICAgIGxldCBtYXg7XG4gICAgaWYgKHRoaXMuc2NhbGVUeXBlID09PSBTY2FsZVR5cGUuVGltZSB8fCB0aGlzLnNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLkxpbmVhcikge1xuICAgICAgbWluID0gdGhpcy54U2NhbGVNaW4gPyB0aGlzLnhTY2FsZU1pbiA6IE1hdGgubWluKC4uLnZhbHVlcyk7XG5cbiAgICAgIG1heCA9IHRoaXMueFNjYWxlTWF4ID8gdGhpcy54U2NhbGVNYXggOiBNYXRoLm1heCguLi52YWx1ZXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLlRpbWUpIHtcbiAgICAgIGRvbWFpbiA9IFtuZXcgRGF0ZShtaW4pLCBuZXcgRGF0ZShtYXgpXTtcbiAgICAgIHRoaXMueFNldCA9IFsuLi52YWx1ZXNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgYURhdGUgPSBhLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgYkRhdGUgPSBiLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKGFEYXRlID4gYkRhdGUpIHJldHVybiAxO1xuICAgICAgICBpZiAoYkRhdGUgPiBhRGF0ZSkgcmV0dXJuIC0xO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZVR5cGUgPT09IFNjYWxlVHlwZS5MaW5lYXIpIHtcbiAgICAgIGRvbWFpbiA9IFttaW4sIG1heF07XG4gICAgICAvLyBVc2UgY29tcGFyZSBmdW5jdGlvbiB0byBzb3J0IG51bWJlcnMgbnVtZXJpY2FsbHlcbiAgICAgIHRoaXMueFNldCA9IFsuLi52YWx1ZXNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tYWluID0gdmFsdWVzO1xuICAgICAgdGhpcy54U2V0ID0gdmFsdWVzO1xuICAgIH1cblxuICAgIHJldHVybiBkb21haW47XG4gIH1cblxuICBnZXRZRG9tYWluKCk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgIGNvbnN0IGRvbWFpbiA9IFtdO1xuICAgIGZvciAoY29uc3QgcmVzdWx0cyBvZiB0aGlzLnJlc3VsdHMpIHtcbiAgICAgIGZvciAoY29uc3QgZCBvZiByZXN1bHRzLnNlcmllcykge1xuICAgICAgICBpZiAoZG9tYWluLmluZGV4T2YoZC52YWx1ZSkgPCAwKSB7XG4gICAgICAgICAgZG9tYWluLnB1c2goZC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGQubWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhhc1JhbmdlID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZG9tYWluLmluZGV4T2YoZC5taW4pIDwgMCkge1xuICAgICAgICAgICAgZG9tYWluLnB1c2goZC5taW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZC5tYXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaGFzUmFuZ2UgPSB0cnVlO1xuICAgICAgICAgIGlmIChkb21haW4uaW5kZXhPZihkLm1heCkgPCAwKSB7XG4gICAgICAgICAgICBkb21haW4ucHVzaChkLm1heCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVzID0gWy4uLmRvbWFpbl07XG4gICAgaWYgKCF0aGlzLmF1dG9TY2FsZSkge1xuICAgICAgdmFsdWVzLnB1c2goMCk7XG4gICAgfVxuXG4gICAgY29uc3QgbWluID0gdGhpcy55U2NhbGVNaW4gPyB0aGlzLnlTY2FsZU1pbiA6IE1hdGgubWluKC4uLnZhbHVlcyk7XG5cbiAgICBjb25zdCBtYXggPSB0aGlzLnlTY2FsZU1heCA/IHRoaXMueVNjYWxlTWF4IDogTWF0aC5tYXgoLi4udmFsdWVzKTtcblxuICAgIHJldHVybiBbbWluLCBtYXhdO1xuICB9XG5cbiAgZ2V0U2VyaWVzRG9tYWluKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHRzLm1hcChkID0+IGQubmFtZSk7XG4gIH1cblxuICBnZXRYU2NhbGUoZG9tYWluLCB3aWR0aDogbnVtYmVyKTogYW55IHtcbiAgICBsZXQgc2NhbGU7XG5cbiAgICBpZiAodGhpcy5zY2FsZVR5cGUgPT09IFNjYWxlVHlwZS5UaW1lKSB7XG4gICAgICBzY2FsZSA9IHNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pLmRvbWFpbihkb21haW4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZVR5cGUgPT09IFNjYWxlVHlwZS5MaW5lYXIpIHtcbiAgICAgIHNjYWxlID0gc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oZG9tYWluKTtcblxuICAgICAgaWYgKHRoaXMucm91bmREb21haW5zKSB7XG4gICAgICAgIHNjYWxlID0gc2NhbGUubmljZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZVR5cGUgPT09IFNjYWxlVHlwZS5PcmRpbmFsKSB7XG4gICAgICBzY2FsZSA9IHNjYWxlUG9pbnQoKS5yYW5nZShbMCwgd2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKGRvbWFpbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgZ2V0WVNjYWxlKGRvbWFpbiwgaGVpZ2h0OiBudW1iZXIpOiBhbnkge1xuICAgIGNvbnN0IHNjYWxlID0gc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGRvbWFpbik7XG5cbiAgICByZXR1cm4gdGhpcy5yb3VuZERvbWFpbnMgPyBzY2FsZS5uaWNlKCkgOiBzY2FsZTtcbiAgfVxuXG4gIHVwZGF0ZURvbWFpbihkb21haW4pOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlcmVkRG9tYWluID0gZG9tYWluO1xuICAgIHRoaXMueERvbWFpbiA9IHRoaXMuZmlsdGVyZWREb21haW47XG4gICAgdGhpcy54U2NhbGUgPSB0aGlzLmdldFhTY2FsZSh0aGlzLnhEb21haW4sIHRoaXMuZGltcy53aWR0aCk7XG4gIH1cblxuICB1cGRhdGVIb3ZlcmVkVmVydGljYWwoaXRlbSk6IHZvaWQge1xuICAgIHRoaXMuaG92ZXJlZFZlcnRpY2FsID0gaXRlbS52YWx1ZTtcbiAgICB0aGlzLmRlYWN0aXZhdGVBbGwoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBoaWRlQ2lyY2xlcygpOiB2b2lkIHtcbiAgICB0aGlzLmhvdmVyZWRWZXJ0aWNhbCA9IG51bGw7XG4gICAgdGhpcy5kZWFjdGl2YXRlQWxsKCk7XG4gIH1cblxuICBvbkNsaWNrKGRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgdHJhY2tCeShpbmRleDogbnVtYmVyLCBpdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7aXRlbS5uYW1lfWA7XG4gIH1cblxuICBzZXRDb2xvcnMoKTogdm9pZCB7XG4gICAgbGV0IGRvbWFpbjtcbiAgICBpZiAodGhpcy5zY2hlbWVUeXBlID09PSBTY2FsZVR5cGUuT3JkaW5hbCkge1xuICAgICAgZG9tYWluID0gdGhpcy5zZXJpZXNEb21haW47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbWFpbiA9IHRoaXMueURvbWFpbjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbG9ycyA9IG5ldyBDb2xvckhlbHBlcih0aGlzLnNjaGVtZSwgdGhpcy5zY2hlbWVUeXBlLCBkb21haW4sIHRoaXMuY3VzdG9tQ29sb3JzKTtcbiAgfVxuXG4gIGdldExlZ2VuZE9wdGlvbnMoKTogTGVnZW5kT3B0aW9ucyB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIHNjYWxlVHlwZTogdGhpcy5zY2hlbWVUeXBlIGFzIGFueSxcbiAgICAgIGNvbG9yczogdW5kZWZpbmVkLFxuICAgICAgZG9tYWluOiBbXSxcbiAgICAgIHRpdGxlOiB1bmRlZmluZWQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5sZWdlbmRQb3NpdGlvblxuICAgIH07XG4gICAgaWYgKG9wdHMuc2NhbGVUeXBlID09PSBTY2FsZVR5cGUuT3JkaW5hbCkge1xuICAgICAgb3B0cy5kb21haW4gPSB0aGlzLnNlcmllc0RvbWFpbjtcbiAgICAgIG9wdHMuY29sb3JzID0gdGhpcy5jb2xvcnM7XG4gICAgICBvcHRzLnRpdGxlID0gdGhpcy5sZWdlbmRUaXRsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0cy5kb21haW4gPSB0aGlzLnlEb21haW47XG4gICAgICBvcHRzLmNvbG9ycyA9IHRoaXMuY29sb3JzLnNjYWxlO1xuICAgIH1cbiAgICByZXR1cm4gb3B0cztcbiAgfVxuXG4gIHVwZGF0ZVlBeGlzV2lkdGgoeyB3aWR0aCB9OiB7IHdpZHRoOiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMueUF4aXNXaWR0aCA9IHdpZHRoO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGVYQXhpc0hlaWdodCh7IGhlaWdodCB9OiB7IGhlaWdodDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnhBeGlzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBvbkFjdGl2YXRlKGl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLmRlYWN0aXZhdGVBbGwoKTtcblxuICAgIGNvbnN0IGlkeCA9IHRoaXMuYWN0aXZlRW50cmllcy5maW5kSW5kZXgoZCA9PiB7XG4gICAgICByZXR1cm4gZC5uYW1lID09PSBpdGVtLm5hbWUgJiYgZC52YWx1ZSA9PT0gaXRlbS52YWx1ZTtcbiAgICB9KTtcbiAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSBbaXRlbV07XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHsgdmFsdWU6IGl0ZW0sIGVudHJpZXM6IHRoaXMuYWN0aXZlRW50cmllcyB9KTtcbiAgfVxuXG4gIG9uRGVhY3RpdmF0ZShpdGVtKTogdm9pZCB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmRJbmRleChkID0+IHtcbiAgICAgIHJldHVybiBkLm5hbWUgPT09IGl0ZW0ubmFtZSAmJiBkLnZhbHVlID09PSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmVFbnRyaWVzLnNwbGljZShpZHgsIDEpO1xuICAgIHRoaXMuYWN0aXZlRW50cmllcyA9IFsuLi50aGlzLmFjdGl2ZUVudHJpZXNdO1xuXG4gICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyB2YWx1ZTogaXRlbSwgZW50cmllczogdGhpcy5hY3RpdmVFbnRyaWVzIH0pO1xuICB9XG5cbiAgZGVhY3RpdmF0ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSBbLi4udGhpcy5hY3RpdmVFbnRyaWVzXTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuYWN0aXZlRW50cmllcykge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyB2YWx1ZTogZW50cnksIGVudHJpZXM6IFtdIH0pO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSBbXTtcbiAgfVxufVxuIl19