import { Component, Input, Output, ViewEncapsulation, EventEmitter, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { scaleBand, scaleLinear } from 'd3-scale';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { LegendPosition } from '../common/types/legend.model';
import { ScaleType } from '../common/types/scale-type.enum';
import { BarOrientation } from '../common/types/bar-orientation.enum';
import * as i0 from "@angular/core";
import * as i1 from "../common/charts/chart.component";
import * as i2 from "../common/grid-panel-series.component";
import * as i3 from "@angular/common";
import * as i4 from "../common/axes/x-axis.component";
import * as i5 from "../common/axes/y-axis.component";
import * as i6 from "./series-vertical.component";
const _c0 = ["tooltipTemplate"];
function BarVertical2DComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 6);
    i0.ɵɵlistener("dimensionsChanged", function BarVertical2DComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.updateXAxisHeight($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("xScale", ctx_r0.groupScale)("dims", ctx_r0.dims)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks)("xAxisOffset", ctx_r0.dataLabelMaxHeight.negative);
} }
function BarVertical2DComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 7);
    i0.ɵɵlistener("dimensionsChanged", function BarVertical2DComponent__svg_g_4_Template__svg_g_dimensionsChanged_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.updateYAxisWidth($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("yScale", ctx_r1.valueScale)("dims", ctx_r1.dims)("showGridLines", ctx_r1.showGridLines)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function BarVertical2DComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 8);
    i0.ɵɵlistener("select", function BarVertical2DComponent__svg_g_5_Template__svg_g_select_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r10); const group_r7 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onClick($event, group_r7); })("activate", function BarVertical2DComponent__svg_g_5_Template__svg_g_activate_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r10); const group_r7 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onActivate($event, group_r7); })("deactivate", function BarVertical2DComponent__svg_g_5_Template__svg_g_deactivate_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r10); const group_r7 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.onDeactivate($event, group_r7); })("dataLabelHeightChanged", function BarVertical2DComponent__svg_g_5_Template__svg_g_dataLabelHeightChanged_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r10); const index_r8 = restoredCtx.index; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onDataLabelMaxHeightChanged($event, index_r8); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@animationState", "active")("activeEntries", ctx_r2.activeEntries)("xScale", ctx_r2.innerScale)("yScale", ctx_r2.valueScale)("colors", ctx_r2.colors)("series", group_r7.series)("dims", ctx_r2.dims)("gradient", ctx_r2.gradient)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipTemplate", ctx_r2.tooltipTemplate)("showDataLabel", ctx_r2.showDataLabel)("dataLabelFormatting", ctx_r2.dataLabelFormatting)("seriesName", group_r7.name)("roundEdges", ctx_r2.roundEdges)("animations", ctx_r2.animations)("noBarWhenZero", ctx_r2.noBarWhenZero);
    i0.ɵɵattribute("transform", ctx_r2.groupTransform(group_r7));
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
export class BarVertical2DComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = LegendPosition.Right;
        this.tooltipDisabled = false;
        this.scaleType = ScaleType.Ordinal;
        this.showGridLines = true;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.groupPadding = 16;
        this.barPadding = 8;
        this.roundDomains = false;
        this.roundEdges = true;
        this.showDataLabel = false;
        this.noBarWhenZero = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.dataLabelMaxHeight = { negative: 0, positive: 0 };
        this.barOrientation = BarOrientation;
        this.trackBy = (index, item) => {
            return item.name;
        };
    }
    update() {
        super.update();
        if (!this.showDataLabel) {
            this.dataLabelMaxHeight = { negative: 0, positive: 0 };
        }
        this.margin = [10 + this.dataLabelMaxHeight.positive, 20, 10 + this.dataLabelMaxHeight.negative, 20];
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
        if (this.showDataLabel) {
            this.dims.height -= this.dataLabelMaxHeight.negative;
        }
        this.formatDates();
        this.groupDomain = this.getGroupDomain();
        this.innerDomain = this.getInnerDomain();
        this.valueDomain = this.getValueDomain();
        this.groupScale = this.getGroupScale();
        this.innerScale = this.getInnerScale();
        this.valueScale = this.getValueScale();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0] + this.dataLabelMaxHeight.negative})`;
    }
    onDataLabelMaxHeightChanged(event, groupIndex) {
        if (event.size.negative) {
            this.dataLabelMaxHeight.negative = Math.max(this.dataLabelMaxHeight.negative, event.size.height);
        }
        else {
            this.dataLabelMaxHeight.positive = Math.max(this.dataLabelMaxHeight.positive, event.size.height);
        }
        if (groupIndex === this.results.length - 1) {
            setTimeout(() => this.update());
        }
    }
    getGroupScale() {
        const spacing = this.groupDomain.length / (this.dims.height / this.groupPadding + 1);
        return scaleBand()
            .rangeRound([0, this.dims.width])
            .paddingInner(spacing)
            .paddingOuter(spacing / 2)
            .domain(this.groupDomain);
    }
    getInnerScale() {
        const width = this.groupScale.bandwidth();
        const spacing = this.innerDomain.length / (width / this.barPadding + 1);
        return scaleBand().rangeRound([0, width]).paddingInner(spacing).domain(this.innerDomain);
    }
    getValueScale() {
        const scale = scaleLinear().range([this.dims.height, 0]).domain(this.valueDomain);
        return this.roundDomains ? scale.nice() : scale;
    }
    getGroupDomain() {
        const domain = [];
        for (const group of this.results) {
            if (!domain.includes(group.label)) {
                domain.push(group.label);
            }
        }
        return domain;
    }
    getInnerDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.label)) {
                    domain.push(d.label);
                }
            }
        }
        return domain;
    }
    getValueDomain() {
        const domain = [];
        for (const group of this.results) {
            for (const d of group.series) {
                if (!domain.includes(d.value)) {
                    domain.push(d.value);
                }
            }
        }
        const min = Math.min(0, ...domain);
        const max = this.yScaleMax ? Math.max(this.yScaleMax, ...domain) : Math.max(0, ...domain);
        return [min, max];
    }
    groupTransform(group) {
        return `translate(${this.groupScale(group.label)}, 0)`;
    }
    onClick(data, group) {
        if (group) {
            data.series = group.name;
        }
        this.select.emit(data);
    }
    setColors() {
        let domain;
        if (this.schemeType === ScaleType.Ordinal) {
            domain = this.innerDomain;
        }
        else {
            domain = this.valueDomain;
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
            opts.domain = this.innerDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.valueDomain;
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
    onActivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        const items = this.results
            .map(g => g.series)
            .flat()
            .filter(i => {
            if (fromLegend) {
                return i.label === item.name;
            }
            else {
                return i.name === item.name && i.series === item.series;
            }
        });
        this.activeEntries = [...items];
        this.activate.emit({ value: item, entries: this.activeEntries });
    }
    onDeactivate(event, group, fromLegend = false) {
        const item = Object.assign({}, event);
        if (group) {
            item.series = group.name;
        }
        this.activeEntries = this.activeEntries.filter(i => {
            if (fromLegend) {
                return i.label !== item.name;
            }
            else {
                return !(i.name === item.name && i.series === item.series);
            }
        });
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    }
}
BarVertical2DComponent.ɵfac = /*@__PURE__*/ function () { let ɵBarVertical2DComponent_BaseFactory; return function BarVertical2DComponent_Factory(t) { return (ɵBarVertical2DComponent_BaseFactory || (ɵBarVertical2DComponent_BaseFactory = i0.ɵɵgetInheritedFactory(BarVertical2DComponent)))(t || BarVertical2DComponent); }; }();
BarVertical2DComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BarVertical2DComponent, selectors: [["ngx-charts-bar-vertical-2d"]], contentQueries: function BarVertical2DComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", tooltipDisabled: "tooltipDisabled", scaleType: "scaleType", gradient: "gradient", showGridLines: "showGridLines", activeEntries: "activeEntries", schemeType: "schemeType", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", groupPadding: "groupPadding", barPadding: "barPadding", roundDomains: "roundDomains", roundEdges: "roundEdges", yScaleMax: "yScaleMax", showDataLabel: "showDataLabel", dataLabelFormatting: "dataLabelFormatting", noBarWhenZero: "noBarWhenZero" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 18, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "bar-chart", "chart"], ["ngx-charts-grid-panel-series", "", 3, "xScale", "yScale", "data", "dims", "orient"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-series-vertical", "", 3, "activeEntries", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "roundEdges", "animations", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelHeightChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "xAxisOffset", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-series-vertical", "", 3, "activeEntries", "xScale", "yScale", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "showDataLabel", "dataLabelFormatting", "seriesName", "roundEdges", "animations", "noBarWhenZero", "select", "activate", "deactivate", "dataLabelHeightChanged"]], template: function BarVertical2DComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        i0.ɵɵlistener("legendLabelActivate", function BarVertical2DComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event, undefined, true); })("legendLabelDeactivate", function BarVertical2DComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event, undefined, true); })("legendLabelClick", function BarVertical2DComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "g", 1);
        i0.ɵɵelement(2, "g", 2);
        i0.ɵɵtemplate(3, BarVertical2DComponent__svg_g_3_Template, 1, 10, "g", 3);
        i0.ɵɵtemplate(4, BarVertical2DComponent__svg_g_4_Template, 1, 9, "g", 4);
        i0.ɵɵtemplate(5, BarVertical2DComponent__svg_g_5_Template, 1, 17, "g", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("view", i0.ɵɵpureFunction2(15, _c1, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("xScale", ctx.groupScale)("yScale", ctx.valueScale)("data", ctx.results)("dims", ctx.dims)("orient", ctx.barOrientation.Vertical);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.xAxis);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.yAxis);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.ChartComponent, i2.GridPanelSeriesComponent, i3.NgIf, i3.NgForOf, i4.XAxisComponent, i5.YAxisComponent, i6.SeriesVerticalComponent], styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1,
                        transform: '*'
                    }),
                    animate(500, style({ opacity: 0, transform: 'scale(0)' }))
                ])
            ])
        ] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarVertical2DComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-bar-vertical-2d', template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [activeEntries]="activeEntries"
      [animations]="animations"
      (legendLabelActivate)="onActivate($event, undefined, true)"
      (legendLabelDeactivate)="onDeactivate($event, undefined, true)"
      (legendLabelClick)="onClick($event)"
    >
      <svg:g [attr.transform]="transform" class="bar-chart chart">
        <svg:g
          ngx-charts-grid-panel-series
          [xScale]="groupScale"
          [yScale]="valueScale"
          [data]="results"
          [dims]="dims"
          [orient]="barOrientation.Vertical"
        ></svg:g>
        <svg:g
          ngx-charts-x-axis
          *ngIf="xAxis"
          [xScale]="groupScale"
          [dims]="dims"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          [trimTicks]="trimXAxisTicks"
          [rotateTicks]="rotateXAxisTicks"
          [maxTickLength]="maxXAxisTickLength"
          [tickFormatting]="xAxisTickFormatting"
          [ticks]="xAxisTicks"
          [xAxisOffset]="dataLabelMaxHeight.negative"
          (dimensionsChanged)="updateXAxisHeight($event)"
        ></svg:g>
        <svg:g
          ngx-charts-y-axis
          *ngIf="yAxis"
          [yScale]="valueScale"
          [dims]="dims"
          [showGridLines]="showGridLines"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          ngx-charts-series-vertical
          *ngFor="let group of results; let index = index; trackBy: trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)"
          [activeEntries]="activeEntries"
          [xScale]="innerScale"
          [yScale]="valueScale"
          [colors]="colors"
          [series]="group.series"
          [dims]="dims"
          [gradient]="gradient"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [showDataLabel]="showDataLabel"
          [dataLabelFormatting]="dataLabelFormatting"
          [seriesName]="group.name"
          [roundEdges]="roundEdges"
          [animations]="animations"
          [noBarWhenZero]="noBarWhenZero"
          (select)="onClick($event, group)"
          (activate)="onActivate($event, group)"
          (deactivate)="onDeactivate($event, group)"
          (dataLabelHeightChanged)="onDataLabelMaxHeightChanged($event, index)"
        />
      </svg:g>
    </ngx-charts-chart>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1,
                                transform: '*'
                            }),
                            animate(500, style({ opacity: 0, transform: 'scale(0)' }))
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
        }], tooltipDisabled: [{
            type: Input
        }], scaleType: [{
            type: Input
        }], gradient: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], schemeType: [{
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
        }], groupPadding: [{
            type: Input
        }], barPadding: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], roundEdges: [{
            type: Input
        }], yScaleMax: [{
            type: Input
        }], showDataLabel: [{
            type: Input
        }], dataLabelFormatting: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLXZlcnRpY2FsLTJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9iYXItY2hhcnQvYmFyLXZlcnRpY2FsLTJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsWUFBWSxFQUdiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFpQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7Ozs7SUF3QjlELDRCQWNDO0lBREMsb01BQXFCLGdDQUF5QixJQUFDO0lBQ2hELGlCQUFROzs7SUFYUCwwQ0FBcUIscUJBQUEsb0NBQUEsZ0NBQUEsb0NBQUEsd0NBQUEsNENBQUEsOENBQUEsNEJBQUEsbURBQUE7Ozs7O0lBWXZCLDRCQWFDO0lBREMsb01BQXFCLCtCQUF3QixJQUFDO0lBQy9DLGlCQUFROzs7SUFWUCwwQ0FBcUIscUJBQUEsdUNBQUEsb0NB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QXJCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFFSSxRQUFRO2tCQUFqQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUUwQixlQUFlO2tCQUEvQyxZQUFZO21CQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbnRlbnRDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIFRyYWNrQnlGdW5jdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBzY2FsZUJhbmQsIHNjYWxlTGluZWFyIH0gZnJvbSAnZDMtc2NhbGUnO1xuXG5pbXBvcnQgeyBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucyB9IGZyb20gJy4uL2NvbW1vbi92aWV3LWRpbWVuc2lvbnMuaGVscGVyJztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yLmhlbHBlcic7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gJy4uL21vZGVscy9jaGFydC1kYXRhLm1vZGVsJztcblxuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IExlZ2VuZE9wdGlvbnMsIExlZ2VuZFBvc2l0aW9uIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL2xlZ2VuZC5tb2RlbCc7XG5pbXBvcnQgeyBTY2FsZVR5cGUgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvc2NhbGUtdHlwZS5lbnVtJztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3ZpZXctZGltZW5zaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBCYXJPcmllbnRhdGlvbiB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9iYXItb3JpZW50YXRpb24uZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jaGFydHMtYmFyLXZlcnRpY2FsLTJkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LWNoYXJ0cy1jaGFydFxuICAgICAgW3ZpZXddPVwiW3dpZHRoLCBoZWlnaHRdXCJcbiAgICAgIFtzaG93TGVnZW5kXT1cImxlZ2VuZFwiXG4gICAgICBbbGVnZW5kT3B0aW9uc109XCJsZWdlbmRPcHRpb25zXCJcbiAgICAgIFthY3RpdmVFbnRyaWVzXT1cImFjdGl2ZUVudHJpZXNcIlxuICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAobGVnZW5kTGFiZWxBY3RpdmF0ZSk9XCJvbkFjdGl2YXRlKCRldmVudCwgdW5kZWZpbmVkLCB0cnVlKVwiXG4gICAgICAobGVnZW5kTGFiZWxEZWFjdGl2YXRlKT1cIm9uRGVhY3RpdmF0ZSgkZXZlbnQsIHVuZGVmaW5lZCwgdHJ1ZSlcIlxuICAgICAgKGxlZ2VuZExhYmVsQ2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8c3ZnOmcgW2F0dHIudHJhbnNmb3JtXT1cInRyYW5zZm9ybVwiIGNsYXNzPVwiYmFyLWNoYXJ0IGNoYXJ0XCI+XG4gICAgICAgIDxzdmc6Z1xuICAgICAgICAgIG5neC1jaGFydHMtZ3JpZC1wYW5lbC1zZXJpZXNcbiAgICAgICAgICBbeFNjYWxlXT1cImdyb3VwU2NhbGVcIlxuICAgICAgICAgIFt5U2NhbGVdPVwidmFsdWVTY2FsZVwiXG4gICAgICAgICAgW2RhdGFdPVwicmVzdWx0c1wiXG4gICAgICAgICAgW2RpbXNdPVwiZGltc1wiXG4gICAgICAgICAgW29yaWVudF09XCJiYXJPcmllbnRhdGlvbi5WZXJ0aWNhbFwiXG4gICAgICAgID48L3N2ZzpnPlxuICAgICAgICA8c3ZnOmdcbiAgICAgICAgICBuZ3gtY2hhcnRzLXgtYXhpc1xuICAgICAgICAgICpuZ0lmPVwieEF4aXNcIlxuICAgICAgICAgIFt4U2NhbGVdPVwiZ3JvdXBTY2FsZVwiXG4gICAgICAgICAgW2RpbXNdPVwiZGltc1wiXG4gICAgICAgICAgW3Nob3dMYWJlbF09XCJzaG93WEF4aXNMYWJlbFwiXG4gICAgICAgICAgW2xhYmVsVGV4dF09XCJ4QXhpc0xhYmVsXCJcbiAgICAgICAgICBbdHJpbVRpY2tzXT1cInRyaW1YQXhpc1RpY2tzXCJcbiAgICAgICAgICBbcm90YXRlVGlja3NdPVwicm90YXRlWEF4aXNUaWNrc1wiXG4gICAgICAgICAgW21heFRpY2tMZW5ndGhdPVwibWF4WEF4aXNUaWNrTGVuZ3RoXCJcbiAgICAgICAgICBbdGlja0Zvcm1hdHRpbmddPVwieEF4aXNUaWNrRm9ybWF0dGluZ1wiXG4gICAgICAgICAgW3RpY2tzXT1cInhBeGlzVGlja3NcIlxuICAgICAgICAgIFt4QXhpc09mZnNldF09XCJkYXRhTGFiZWxNYXhIZWlnaHQubmVnYXRpdmVcIlxuICAgICAgICAgIChkaW1lbnNpb25zQ2hhbmdlZCk9XCJ1cGRhdGVYQXhpc0hlaWdodCgkZXZlbnQpXCJcbiAgICAgICAgPjwvc3ZnOmc+XG4gICAgICAgIDxzdmc6Z1xuICAgICAgICAgIG5neC1jaGFydHMteS1heGlzXG4gICAgICAgICAgKm5nSWY9XCJ5QXhpc1wiXG4gICAgICAgICAgW3lTY2FsZV09XCJ2YWx1ZVNjYWxlXCJcbiAgICAgICAgICBbZGltc109XCJkaW1zXCJcbiAgICAgICAgICBbc2hvd0dyaWRMaW5lc109XCJzaG93R3JpZExpbmVzXCJcbiAgICAgICAgICBbc2hvd0xhYmVsXT1cInNob3dZQXhpc0xhYmVsXCJcbiAgICAgICAgICBbbGFiZWxUZXh0XT1cInlBeGlzTGFiZWxcIlxuICAgICAgICAgIFt0cmltVGlja3NdPVwidHJpbVlBeGlzVGlja3NcIlxuICAgICAgICAgIFttYXhUaWNrTGVuZ3RoXT1cIm1heFlBeGlzVGlja0xlbmd0aFwiXG4gICAgICAgICAgW3RpY2tGb3JtYXR0aW5nXT1cInlBeGlzVGlja0Zvcm1hdHRpbmdcIlxuICAgICAgICAgIFt0aWNrc109XCJ5QXhpc1RpY2tzXCJcbiAgICAgICAgICAoZGltZW5zaW9uc0NoYW5nZWQpPVwidXBkYXRlWUF4aXNXaWR0aCgkZXZlbnQpXCJcbiAgICAgICAgPjwvc3ZnOmc+XG4gICAgICAgIDxzdmc6Z1xuICAgICAgICAgIG5neC1jaGFydHMtc2VyaWVzLXZlcnRpY2FsXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJlc3VsdHM7IGxldCBpbmRleCA9IGluZGV4OyB0cmFja0J5OiB0cmFja0J5XCJcbiAgICAgICAgICBbQGFuaW1hdGlvblN0YXRlXT1cIidhY3RpdmUnXCJcbiAgICAgICAgICBbYXR0ci50cmFuc2Zvcm1dPVwiZ3JvdXBUcmFuc2Zvcm0oZ3JvdXApXCJcbiAgICAgICAgICBbYWN0aXZlRW50cmllc109XCJhY3RpdmVFbnRyaWVzXCJcbiAgICAgICAgICBbeFNjYWxlXT1cImlubmVyU2NhbGVcIlxuICAgICAgICAgIFt5U2NhbGVdPVwidmFsdWVTY2FsZVwiXG4gICAgICAgICAgW2NvbG9yc109XCJjb2xvcnNcIlxuICAgICAgICAgIFtzZXJpZXNdPVwiZ3JvdXAuc2VyaWVzXCJcbiAgICAgICAgICBbZGltc109XCJkaW1zXCJcbiAgICAgICAgICBbZ3JhZGllbnRdPVwiZ3JhZGllbnRcIlxuICAgICAgICAgIFt0b29sdGlwRGlzYWJsZWRdPVwidG9vbHRpcERpc2FibGVkXCJcbiAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgW3Nob3dEYXRhTGFiZWxdPVwic2hvd0RhdGFMYWJlbFwiXG4gICAgICAgICAgW2RhdGFMYWJlbEZvcm1hdHRpbmddPVwiZGF0YUxhYmVsRm9ybWF0dGluZ1wiXG4gICAgICAgICAgW3Nlcmllc05hbWVdPVwiZ3JvdXAubmFtZVwiXG4gICAgICAgICAgW3JvdW5kRWRnZXNdPVwicm91bmRFZGdlc1wiXG4gICAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAgICAgW25vQmFyV2hlblplcm9dPVwibm9CYXJXaGVuWmVyb1wiXG4gICAgICAgICAgKHNlbGVjdCk9XCJvbkNsaWNrKCRldmVudCwgZ3JvdXApXCJcbiAgICAgICAgICAoYWN0aXZhdGUpPVwib25BY3RpdmF0ZSgkZXZlbnQsIGdyb3VwKVwiXG4gICAgICAgICAgKGRlYWN0aXZhdGUpPVwib25EZWFjdGl2YXRlKCRldmVudCwgZ3JvdXApXCJcbiAgICAgICAgICAoZGF0YUxhYmVsSGVpZ2h0Q2hhbmdlZCk9XCJvbkRhdGFMYWJlbE1heEhlaWdodENoYW5nZWQoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc6Zz5cbiAgICA8L25neC1jaGFydHMtY2hhcnQ+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuLi9jb21tb24vYmFzZS1jaGFydC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2FuaW1hdGlvblN0YXRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICcqJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSg1MDAsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJhclZlcnRpY2FsMkRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQge1xuICBASW5wdXQoKSBsZWdlbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbGVnZW5kVGl0bGU6IHN0cmluZyA9ICdMZWdlbmQnO1xuICBASW5wdXQoKSBsZWdlbmRQb3NpdGlvbjogTGVnZW5kUG9zaXRpb24gPSBMZWdlbmRQb3NpdGlvbi5SaWdodDtcbiAgQElucHV0KCkgeEF4aXM7XG4gIEBJbnB1dCgpIHlBeGlzO1xuICBASW5wdXQoKSBzaG93WEF4aXNMYWJlbDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd1lBeGlzTGFiZWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHhBeGlzTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgeUF4aXNMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2NhbGVUeXBlOiBTY2FsZVR5cGUgPSBTY2FsZVR5cGUuT3JkaW5hbDtcbiAgQElucHV0KCkgZ3JhZGllbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dHcmlkTGluZXM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBhY3RpdmVFbnRyaWVzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBzY2hlbWVUeXBlOiBTY2FsZVR5cGU7XG4gIEBJbnB1dCgpIHRyaW1YQXhpc1RpY2tzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgdHJpbVlBeGlzVGlja3M6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSByb3RhdGVYQXhpc1RpY2tzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbWF4WEF4aXNUaWNrTGVuZ3RoOiBudW1iZXIgPSAxNjtcbiAgQElucHV0KCkgbWF4WUF4aXNUaWNrTGVuZ3RoOiBudW1iZXIgPSAxNjtcbiAgQElucHV0KCkgeEF4aXNUaWNrRm9ybWF0dGluZzogYW55O1xuICBASW5wdXQoKSB5QXhpc1RpY2tGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIHhBeGlzVGlja3M6IGFueVtdO1xuICBASW5wdXQoKSB5QXhpc1RpY2tzOiBhbnlbXTtcbiAgQElucHV0KCkgZ3JvdXBQYWRkaW5nOiBudW1iZXIgPSAxNjtcbiAgQElucHV0KCkgYmFyUGFkZGluZzogbnVtYmVyID0gODtcbiAgQElucHV0KCkgcm91bmREb21haW5zOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJvdW5kRWRnZXM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB5U2NhbGVNYXg6IG51bWJlcjtcbiAgQElucHV0KCkgc2hvd0RhdGFMYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkYXRhTGFiZWxGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIG5vQmFyV2hlblplcm86IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkKCd0b29sdGlwVGVtcGxhdGUnKSB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZGltczogVmlld0RpbWVuc2lvbnM7XG4gIGdyb3VwRG9tYWluOiBzdHJpbmdbXTtcbiAgaW5uZXJEb21haW46IHN0cmluZ1tdO1xuICB2YWx1ZURvbWFpbjogW251bWJlciwgbnVtYmVyXTtcbiAgZ3JvdXBTY2FsZTogYW55O1xuICBpbm5lclNjYWxlOiBhbnk7XG4gIHZhbHVlU2NhbGU6IGFueTtcbiAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIGNvbG9yczogQ29sb3JIZWxwZXI7XG4gIG1hcmdpbjogbnVtYmVyW10gPSBbMTAsIDIwLCAxMCwgMjBdO1xuICB4QXhpc0hlaWdodDogbnVtYmVyID0gMDtcbiAgeUF4aXNXaWR0aDogbnVtYmVyID0gMDtcbiAgbGVnZW5kT3B0aW9uczogTGVnZW5kT3B0aW9ucztcbiAgZGF0YUxhYmVsTWF4SGVpZ2h0OiBhbnkgPSB7IG5lZ2F0aXZlOiAwLCBwb3NpdGl2ZTogMCB9O1xuXG4gIGJhck9yaWVudGF0aW9uID0gQmFyT3JpZW50YXRpb247XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZSgpO1xuXG4gICAgaWYgKCF0aGlzLnNob3dEYXRhTGFiZWwpIHtcbiAgICAgIHRoaXMuZGF0YUxhYmVsTWF4SGVpZ2h0ID0geyBuZWdhdGl2ZTogMCwgcG9zaXRpdmU6IDAgfTtcbiAgICB9XG4gICAgdGhpcy5tYXJnaW4gPSBbMTAgKyB0aGlzLmRhdGFMYWJlbE1heEhlaWdodC5wb3NpdGl2ZSwgMjAsIDEwICsgdGhpcy5kYXRhTGFiZWxNYXhIZWlnaHQubmVnYXRpdmUsIDIwXTtcblxuICAgIHRoaXMuZGltcyA9IGNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zKHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG1hcmdpbnM6IHRoaXMubWFyZ2luLFxuICAgICAgc2hvd1hBeGlzOiB0aGlzLnhBeGlzLFxuICAgICAgc2hvd1lBeGlzOiB0aGlzLnlBeGlzLFxuICAgICAgeEF4aXNIZWlnaHQ6IHRoaXMueEF4aXNIZWlnaHQsXG4gICAgICB5QXhpc1dpZHRoOiB0aGlzLnlBeGlzV2lkdGgsXG4gICAgICBzaG93WExhYmVsOiB0aGlzLnNob3dYQXhpc0xhYmVsLFxuICAgICAgc2hvd1lMYWJlbDogdGhpcy5zaG93WUF4aXNMYWJlbCxcbiAgICAgIHNob3dMZWdlbmQ6IHRoaXMubGVnZW5kLFxuICAgICAgbGVnZW5kVHlwZTogdGhpcy5zY2hlbWVUeXBlLFxuICAgICAgbGVnZW5kUG9zaXRpb246IHRoaXMubGVnZW5kUG9zaXRpb25cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnNob3dEYXRhTGFiZWwpIHtcbiAgICAgIHRoaXMuZGltcy5oZWlnaHQgLT0gdGhpcy5kYXRhTGFiZWxNYXhIZWlnaHQubmVnYXRpdmU7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtYXREYXRlcygpO1xuXG4gICAgdGhpcy5ncm91cERvbWFpbiA9IHRoaXMuZ2V0R3JvdXBEb21haW4oKTtcbiAgICB0aGlzLmlubmVyRG9tYWluID0gdGhpcy5nZXRJbm5lckRvbWFpbigpO1xuICAgIHRoaXMudmFsdWVEb21haW4gPSB0aGlzLmdldFZhbHVlRG9tYWluKCk7XG5cbiAgICB0aGlzLmdyb3VwU2NhbGUgPSB0aGlzLmdldEdyb3VwU2NhbGUoKTtcbiAgICB0aGlzLmlubmVyU2NhbGUgPSB0aGlzLmdldElubmVyU2NhbGUoKTtcbiAgICB0aGlzLnZhbHVlU2NhbGUgPSB0aGlzLmdldFZhbHVlU2NhbGUoKTtcblxuICAgIHRoaXMuc2V0Q29sb3JzKCk7XG4gICAgdGhpcy5sZWdlbmRPcHRpb25zID0gdGhpcy5nZXRMZWdlbmRPcHRpb25zKCk7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy5kaW1zLnhPZmZzZXR9ICwgJHt0aGlzLm1hcmdpblswXSArIHRoaXMuZGF0YUxhYmVsTWF4SGVpZ2h0Lm5lZ2F0aXZlfSlgO1xuICB9XG5cbiAgb25EYXRhTGFiZWxNYXhIZWlnaHRDaGFuZ2VkKGV2ZW50LCBncm91cEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQuc2l6ZS5uZWdhdGl2ZSkge1xuICAgICAgdGhpcy5kYXRhTGFiZWxNYXhIZWlnaHQubmVnYXRpdmUgPSBNYXRoLm1heCh0aGlzLmRhdGFMYWJlbE1heEhlaWdodC5uZWdhdGl2ZSwgZXZlbnQuc2l6ZS5oZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFMYWJlbE1heEhlaWdodC5wb3NpdGl2ZSA9IE1hdGgubWF4KHRoaXMuZGF0YUxhYmVsTWF4SGVpZ2h0LnBvc2l0aXZlLCBldmVudC5zaXplLmhlaWdodCk7XG4gICAgfVxuICAgIGlmIChncm91cEluZGV4ID09PSB0aGlzLnJlc3VsdHMubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZSgpKTtcbiAgICB9XG4gIH1cblxuICBnZXRHcm91cFNjYWxlKCk6IGFueSB7XG4gICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuZ3JvdXBEb21haW4ubGVuZ3RoIC8gKHRoaXMuZGltcy5oZWlnaHQgLyB0aGlzLmdyb3VwUGFkZGluZyArIDEpO1xuXG4gICAgcmV0dXJuIHNjYWxlQmFuZCgpXG4gICAgICAucmFuZ2VSb3VuZChbMCwgdGhpcy5kaW1zLndpZHRoXSlcbiAgICAgIC5wYWRkaW5nSW5uZXIoc3BhY2luZylcbiAgICAgIC5wYWRkaW5nT3V0ZXIoc3BhY2luZyAvIDIpXG4gICAgICAuZG9tYWluKHRoaXMuZ3JvdXBEb21haW4pO1xuICB9XG5cbiAgZ2V0SW5uZXJTY2FsZSgpOiBhbnkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5ncm91cFNjYWxlLmJhbmR3aWR0aCgpO1xuICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLmlubmVyRG9tYWluLmxlbmd0aCAvICh3aWR0aCAvIHRoaXMuYmFyUGFkZGluZyArIDEpO1xuICAgIHJldHVybiBzY2FsZUJhbmQoKS5yYW5nZVJvdW5kKFswLCB3aWR0aF0pLnBhZGRpbmdJbm5lcihzcGFjaW5nKS5kb21haW4odGhpcy5pbm5lckRvbWFpbik7XG4gIH1cblxuICBnZXRWYWx1ZVNjYWxlKCk6IGFueSB7XG4gICAgY29uc3Qgc2NhbGUgPSBzY2FsZUxpbmVhcigpLnJhbmdlKFt0aGlzLmRpbXMuaGVpZ2h0LCAwXSkuZG9tYWluKHRoaXMudmFsdWVEb21haW4pO1xuICAgIHJldHVybiB0aGlzLnJvdW5kRG9tYWlucyA/IHNjYWxlLm5pY2UoKSA6IHNjYWxlO1xuICB9XG5cbiAgZ2V0R3JvdXBEb21haW4oKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGRvbWFpbiA9IFtdO1xuICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgdGhpcy5yZXN1bHRzKSB7XG4gICAgICBpZiAoIWRvbWFpbi5pbmNsdWRlcyhncm91cC5sYWJlbCkpIHtcbiAgICAgICAgZG9tYWluLnB1c2goZ3JvdXAubGFiZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkb21haW47XG4gIH1cblxuICBnZXRJbm5lckRvbWFpbigpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZG9tYWluID0gW107XG4gICAgZm9yIChjb25zdCBncm91cCBvZiB0aGlzLnJlc3VsdHMpIHtcbiAgICAgIGZvciAoY29uc3QgZCBvZiBncm91cC5zZXJpZXMpIHtcbiAgICAgICAgaWYgKCFkb21haW4uaW5jbHVkZXMoZC5sYWJlbCkpIHtcbiAgICAgICAgICBkb21haW4ucHVzaChkLmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkb21haW47XG4gIH1cblxuICBnZXRWYWx1ZURvbWFpbigpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICBjb25zdCBkb21haW4gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHRoaXMucmVzdWx0cykge1xuICAgICAgZm9yIChjb25zdCBkIG9mIGdyb3VwLnNlcmllcykge1xuICAgICAgICBpZiAoIWRvbWFpbi5pbmNsdWRlcyhkLnZhbHVlKSkge1xuICAgICAgICAgIGRvbWFpbi5wdXNoKGQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWluID0gTWF0aC5taW4oMCwgLi4uZG9tYWluKTtcbiAgICBjb25zdCBtYXggPSB0aGlzLnlTY2FsZU1heCA/IE1hdGgubWF4KHRoaXMueVNjYWxlTWF4LCAuLi5kb21haW4pIDogTWF0aC5tYXgoMCwgLi4uZG9tYWluKTtcblxuICAgIHJldHVybiBbbWluLCBtYXhdO1xuICB9XG5cbiAgZ3JvdXBUcmFuc2Zvcm0oZ3JvdXA6IERhdGFJdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3RoaXMuZ3JvdXBTY2FsZShncm91cC5sYWJlbCl9LCAwKWA7XG4gIH1cblxuICBvbkNsaWNrKGRhdGEsIGdyb3VwPzogRGF0YUl0ZW0pOiB2b2lkIHtcbiAgICBpZiAoZ3JvdXApIHtcbiAgICAgIGRhdGEuc2VyaWVzID0gZ3JvdXAubmFtZTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgdHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPERhdGFJdGVtPiA9IChpbmRleDogbnVtYmVyLCBpdGVtOiBEYXRhSXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtLm5hbWU7XG4gIH07XG5cbiAgc2V0Q29sb3JzKCk6IHZvaWQge1xuICAgIGxldCBkb21haW47XG4gICAgaWYgKHRoaXMuc2NoZW1lVHlwZSA9PT0gU2NhbGVUeXBlLk9yZGluYWwpIHtcbiAgICAgIGRvbWFpbiA9IHRoaXMuaW5uZXJEb21haW47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbWFpbiA9IHRoaXMudmFsdWVEb21haW47XG4gICAgfVxuXG4gICAgdGhpcy5jb2xvcnMgPSBuZXcgQ29sb3JIZWxwZXIodGhpcy5zY2hlbWUsIHRoaXMuc2NoZW1lVHlwZSwgZG9tYWluLCB0aGlzLmN1c3RvbUNvbG9ycyk7XG4gIH1cblxuICBnZXRMZWdlbmRPcHRpb25zKCk6IExlZ2VuZE9wdGlvbnMge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBzY2FsZVR5cGU6IHRoaXMuc2NoZW1lVHlwZSBhcyBhbnksXG4gICAgICBjb2xvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRvbWFpbjogW10sXG4gICAgICB0aXRsZTogdW5kZWZpbmVkLFxuICAgICAgcG9zaXRpb246IHRoaXMubGVnZW5kUG9zaXRpb25cbiAgICB9O1xuICAgIGlmIChvcHRzLnNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLk9yZGluYWwpIHtcbiAgICAgIG9wdHMuZG9tYWluID0gdGhpcy5pbm5lckRvbWFpbjtcbiAgICAgIG9wdHMuY29sb3JzID0gdGhpcy5jb2xvcnM7XG4gICAgICBvcHRzLnRpdGxlID0gdGhpcy5sZWdlbmRUaXRsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0cy5kb21haW4gPSB0aGlzLnZhbHVlRG9tYWluO1xuICAgICAgb3B0cy5jb2xvcnMgPSB0aGlzLmNvbG9ycy5zY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0cztcbiAgfVxuXG4gIHVwZGF0ZVlBeGlzV2lkdGgoeyB3aWR0aCB9OiB7IHdpZHRoOiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMueUF4aXNXaWR0aCA9IHdpZHRoO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGVYQXhpc0hlaWdodCh7IGhlaWdodCB9OiB7IGhlaWdodDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnhBeGlzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBvbkFjdGl2YXRlKGV2ZW50LCBncm91cDogRGF0YUl0ZW0sIGZyb21MZWdlbmQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBldmVudCk7XG4gICAgaWYgKGdyb3VwKSB7XG4gICAgICBpdGVtLnNlcmllcyA9IGdyb3VwLm5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnJlc3VsdHNcbiAgICAgIC5tYXAoZyA9PiBnLnNlcmllcylcbiAgICAgIC5mbGF0KClcbiAgICAgIC5maWx0ZXIoaSA9PiB7XG4gICAgICAgIGlmIChmcm9tTGVnZW5kKSB7XG4gICAgICAgICAgcmV0dXJuIGkubGFiZWwgPT09IGl0ZW0ubmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gaS5uYW1lID09PSBpdGVtLm5hbWUgJiYgaS5zZXJpZXMgPT09IGl0ZW0uc2VyaWVzO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuYWN0aXZlRW50cmllcyA9IFsuLi5pdGVtc107XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHsgdmFsdWU6IGl0ZW0sIGVudHJpZXM6IHRoaXMuYWN0aXZlRW50cmllcyB9KTtcbiAgfVxuXG4gIG9uRGVhY3RpdmF0ZShldmVudCwgZ3JvdXA6IERhdGFJdGVtLCBmcm9tTGVnZW5kOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQpO1xuICAgIGlmIChncm91cCkge1xuICAgICAgaXRlbS5zZXJpZXMgPSBncm91cC5uYW1lO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlRW50cmllcyA9IHRoaXMuYWN0aXZlRW50cmllcy5maWx0ZXIoaSA9PiB7XG4gICAgICBpZiAoZnJvbUxlZ2VuZCkge1xuICAgICAgICByZXR1cm4gaS5sYWJlbCAhPT0gaXRlbS5uYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICEoaS5uYW1lID09PSBpdGVtLm5hbWUgJiYgaS5zZXJpZXMgPT09IGl0ZW0uc2VyaWVzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGVhY3RpdmF0ZS5lbWl0KHsgdmFsdWU6IGl0ZW0sIGVudHJpZXM6IHRoaXMuYWN0aXZlRW50cmllcyB9KTtcbiAgfVxufVxuIl19