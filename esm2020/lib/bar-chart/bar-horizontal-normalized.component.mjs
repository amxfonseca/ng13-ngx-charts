import { Component, Input, Output, ViewEncapsulation, EventEmitter, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { scaleBand, scaleLinear } from 'd3-scale';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { BarChartType } from './types/bar-chart-type.enum';
import { ScaleType } from '../common/types/scale-type.enum';
import { LegendPosition } from '../common/types/legend.model';
import * as i0 from "@angular/core";
import * as i1 from "../common/charts/chart.component";
import * as i2 from "@angular/common";
import * as i3 from "../common/axes/x-axis.component";
import * as i4 from "../common/axes/y-axis.component";
import * as i5 from "./series-horizontal.component";
const _c0 = ["tooltipTemplate"];
function BarHorizontalNormalizedComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 5);
    i0.ɵɵlistener("dimensionsChanged", function BarHorizontalNormalizedComponent__svg_g_2_Template__svg_g_dimensionsChanged_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.updateXAxisHeight($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("xScale", ctx_r0.xScale)("dims", ctx_r0.dims)("showGridLines", ctx_r0.showGridLines)("showLabel", ctx_r0.showXAxisLabel)("labelText", ctx_r0.xAxisLabel)("trimTicks", ctx_r0.trimXAxisTicks)("rotateTicks", ctx_r0.rotateXAxisTicks)("maxTickLength", ctx_r0.maxXAxisTickLength)("tickFormatting", ctx_r0.xAxisTickFormatting)("ticks", ctx_r0.xAxisTicks);
} }
function BarHorizontalNormalizedComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 6);
    i0.ɵɵlistener("dimensionsChanged", function BarHorizontalNormalizedComponent__svg_g_3_Template__svg_g_dimensionsChanged_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.updateYAxisWidth($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("yScale", ctx_r1.yScale)("dims", ctx_r1.dims)("showLabel", ctx_r1.showYAxisLabel)("labelText", ctx_r1.yAxisLabel)("trimTicks", ctx_r1.trimYAxisTicks)("maxTickLength", ctx_r1.maxYAxisTickLength)("tickFormatting", ctx_r1.yAxisTickFormatting)("ticks", ctx_r1.yAxisTicks);
} }
function BarHorizontalNormalizedComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelementStart(1, "g", 7);
    i0.ɵɵlistener("select", function BarHorizontalNormalizedComponent__svg_g_4_Template__svg_g_select_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r9); const group_r7 = restoredCtx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onClick($event, group_r7); })("activate", function BarHorizontalNormalizedComponent__svg_g_4_Template__svg_g_activate_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r9); const group_r7 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onActivate($event, group_r7); })("deactivate", function BarHorizontalNormalizedComponent__svg_g_4_Template__svg_g_deactivate_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r9); const group_r7 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onDeactivate($event, group_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@animationState", "active");
    i0.ɵɵattribute("transform", ctx_r2.groupTransform(group_r7));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", ctx_r2.barChartType.Normalized)("xScale", ctx_r2.xScale)("yScale", ctx_r2.yScale)("activeEntries", ctx_r2.activeEntries)("colors", ctx_r2.colors)("series", group_r7.series)("dims", ctx_r2.dims)("gradient", ctx_r2.gradient)("tooltipDisabled", ctx_r2.tooltipDisabled)("tooltipTemplate", ctx_r2.tooltipTemplate)("seriesName", group_r7.name)("animations", ctx_r2.animations)("noBarWhenZero", ctx_r2.noBarWhenZero);
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
export class BarHorizontalNormalizedComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.legend = false;
        this.legendTitle = 'Legend';
        this.legendPosition = LegendPosition.Right;
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.activeEntries = [];
        this.trimXAxisTicks = true;
        this.trimYAxisTicks = true;
        this.rotateXAxisTicks = true;
        this.maxXAxisTickLength = 16;
        this.maxYAxisTickLength = 16;
        this.barPadding = 8;
        this.roundDomains = false;
        this.noBarWhenZero = true;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.valueDomain = [0, 100];
        this.margin = [10, 20, 10, 20];
        this.xAxisHeight = 0;
        this.yAxisWidth = 0;
        this.barChartType = BarChartType;
        this.trackBy = (index, item) => {
            return item.name;
        };
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
        this.formatDates();
        this.groupDomain = this.getGroupDomain();
        this.innerDomain = this.getInnerDomain();
        this.xScale = this.getXScale();
        this.yScale = this.getYScale();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
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
    getYScale() {
        const spacing = this.groupDomain.length / (this.dims.height / this.barPadding + 1);
        return scaleBand().rangeRound([0, this.dims.height]).paddingInner(spacing).domain(this.groupDomain);
    }
    getXScale() {
        const scale = scaleLinear().range([0, this.dims.width]).domain(this.valueDomain);
        return this.roundDomains ? scale.nice() : scale;
    }
    groupTransform(group) {
        return `translate(0, ${this.yScale(group.name)})`;
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
BarHorizontalNormalizedComponent.ɵfac = /*@__PURE__*/ function () { let ɵBarHorizontalNormalizedComponent_BaseFactory; return function BarHorizontalNormalizedComponent_Factory(t) { return (ɵBarHorizontalNormalizedComponent_BaseFactory || (ɵBarHorizontalNormalizedComponent_BaseFactory = i0.ɵɵgetInheritedFactory(BarHorizontalNormalizedComponent)))(t || BarHorizontalNormalizedComponent); }; }();
BarHorizontalNormalizedComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BarHorizontalNormalizedComponent, selectors: [["ngx-charts-bar-horizontal-normalized"]], contentQueries: function BarHorizontalNormalizedComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendTitle: "legendTitle", legendPosition: "legendPosition", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", tooltipDisabled: "tooltipDisabled", gradient: "gradient", showGridLines: "showGridLines", activeEntries: "activeEntries", schemeType: "schemeType", trimXAxisTicks: "trimXAxisTicks", trimYAxisTicks: "trimYAxisTicks", rotateXAxisTicks: "rotateXAxisTicks", maxXAxisTickLength: "maxXAxisTickLength", maxYAxisTickLength: "maxYAxisTickLength", xAxisTickFormatting: "xAxisTickFormatting", yAxisTickFormatting: "yAxisTickFormatting", xAxisTicks: "xAxisTicks", yAxisTicks: "yAxisTicks", barPadding: "barPadding", roundDomains: "roundDomains", noBarWhenZero: "noBarWhenZero" }, outputs: { activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 13, consts: [[3, "view", "showLegend", "legendOptions", "activeEntries", "animations", "legendLabelActivate", "legendLabelDeactivate", "legendLabelClick"], [1, "bar-chart", "chart"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-x-axis", "", 3, "xScale", "dims", "showGridLines", "showLabel", "labelText", "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "yScale", "dims", "showLabel", "labelText", "trimTicks", "maxTickLength", "tickFormatting", "ticks", "dimensionsChanged"], ["ngx-charts-series-horizontal", "", 3, "type", "xScale", "yScale", "activeEntries", "colors", "series", "dims", "gradient", "tooltipDisabled", "tooltipTemplate", "seriesName", "animations", "noBarWhenZero", "select", "activate", "deactivate"]], template: function BarHorizontalNormalizedComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        i0.ɵɵlistener("legendLabelActivate", function BarHorizontalNormalizedComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event, undefined, true); })("legendLabelDeactivate", function BarHorizontalNormalizedComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event, undefined, true); })("legendLabelClick", function BarHorizontalNormalizedComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "g", 1);
        i0.ɵɵtemplate(2, BarHorizontalNormalizedComponent__svg_g_2_Template, 1, 10, "g", 2);
        i0.ɵɵtemplate(3, BarHorizontalNormalizedComponent__svg_g_3_Template, 1, 8, "g", 3);
        i0.ɵɵtemplate(4, BarHorizontalNormalizedComponent__svg_g_4_Template, 2, 15, "g", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("view", i0.ɵɵpureFunction2(10, _c1, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("activeEntries", ctx.activeEntries)("animations", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.xAxis);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.yAxis);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.ChartComponent, i2.NgIf, i2.NgForOf, i3.XAxisComponent, i4.YAxisComponent, i5.SeriesHorizontal], styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"], encapsulation: 2, data: { animation: [
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarHorizontalNormalizedComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-bar-horizontal-normalized', template: `
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
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          [trimTicks]="trimYAxisTicks"
          [maxTickLength]="maxYAxisTickLength"
          [tickFormatting]="yAxisTickFormatting"
          [ticks]="yAxisTicks"
          (dimensionsChanged)="updateYAxisWidth($event)"
        ></svg:g>
        <svg:g
          *ngFor="let group of results; trackBy: trackBy"
          [@animationState]="'active'"
          [attr.transform]="groupTransform(group)"
        >
          <svg:g
            ngx-charts-series-horizontal
            [type]="barChartType.Normalized"
            [xScale]="xScale"
            [yScale]="yScale"
            [activeEntries]="activeEntries"
            [colors]="colors"
            [series]="group.series"
            [dims]="dims"
            [gradient]="gradient"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [seriesName]="group.name"
            [animations]="animations"
            (select)="onClick($event, group)"
            (activate)="onActivate($event, group)"
            (deactivate)="onDeactivate($event, group)"
            [noBarWhenZero]="noBarWhenZero"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, animations: [
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
        }], barPadding: [{
            type: Input
        }], roundDomains: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWhvcml6b250YWwtbm9ybWFsaXplZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvYmFyLWNoYXJ0L2Jhci1ob3Jpem9udGFsLW5vcm1hbGl6ZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLHVCQUF1QixFQUN2QixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBaUIsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7O0lBaUJyRSw0QkFjQztJQURDLDhNQUFxQixnQ0FBeUIsSUFBQztJQUNoRCxpQkFBUTs7O0lBWFAsc0NBQWlCLHFCQUFBLHVDQUFBLG9DQUFBLGdDQUFBLG9DQUFBLHdDQUFBLDRDQUFBLDhDQUFBLDRCQUFBOzs7OztJQVluQiw0QkFZQztJQURDLDhNQUFxQiwrQkFBd0IsSUFBQztJQUMvQyxpQkFBUTs7O0lBVFAsc0NB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QUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUVJLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBRTBCLGVBQWU7a0JBQS9DLFlBQVk7bUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29udGVudENoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgVHJhY2tCeUZ1bmN0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgc2NhbGVCYW5kLCBzY2FsZUxpbmVhciB9IGZyb20gJ2QzLXNjYWxlJztcblxuaW1wb3J0IHsgY2FsY3VsYXRlVmlld0RpbWVuc2lvbnMgfSBmcm9tICcuLi9jb21tb24vdmlldy1kaW1lbnNpb25zLmhlbHBlcic7XG5pbXBvcnQgeyBDb2xvckhlbHBlciB9IGZyb20gJy4uL2NvbW1vbi9jb2xvci5oZWxwZXInO1xuaW1wb3J0IHsgU2VyaWVzIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXJ0LWRhdGEubW9kZWwnO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vYmFzZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFyQ2hhcnRUeXBlIH0gZnJvbSAnLi90eXBlcy9iYXItY2hhcnQtdHlwZS5lbnVtJztcbmltcG9ydCB7IFNjYWxlVHlwZSB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9zY2FsZS10eXBlLmVudW0nO1xuaW1wb3J0IHsgTGVnZW5kT3B0aW9ucywgTGVnZW5kUG9zaXRpb24gfSBmcm9tICcuLi9jb21tb24vdHlwZXMvbGVnZW5kLm1vZGVsJztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3ZpZXctZGltZW5zaW9uLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jaGFydHMtYmFyLWhvcml6b250YWwtbm9ybWFsaXplZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5neC1jaGFydHMtY2hhcnRcbiAgICAgIFt2aWV3XT1cIlt3aWR0aCwgaGVpZ2h0XVwiXG4gICAgICBbc2hvd0xlZ2VuZF09XCJsZWdlbmRcIlxuICAgICAgW2xlZ2VuZE9wdGlvbnNdPVwibGVnZW5kT3B0aW9uc1wiXG4gICAgICBbYWN0aXZlRW50cmllc109XCJhY3RpdmVFbnRyaWVzXCJcbiAgICAgIFthbmltYXRpb25zXT1cImFuaW1hdGlvbnNcIlxuICAgICAgKGxlZ2VuZExhYmVsQWN0aXZhdGUpPVwib25BY3RpdmF0ZSgkZXZlbnQsIHVuZGVmaW5lZCwgdHJ1ZSlcIlxuICAgICAgKGxlZ2VuZExhYmVsRGVhY3RpdmF0ZSk9XCJvbkRlYWN0aXZhdGUoJGV2ZW50LCB1bmRlZmluZWQsIHRydWUpXCJcbiAgICAgIChsZWdlbmRMYWJlbENsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPHN2ZzpnIFthdHRyLnRyYW5zZm9ybV09XCJ0cmFuc2Zvcm1cIiBjbGFzcz1cImJhci1jaGFydCBjaGFydFwiPlxuICAgICAgICA8c3ZnOmdcbiAgICAgICAgICBuZ3gtY2hhcnRzLXgtYXhpc1xuICAgICAgICAgICpuZ0lmPVwieEF4aXNcIlxuICAgICAgICAgIFt4U2NhbGVdPVwieFNjYWxlXCJcbiAgICAgICAgICBbZGltc109XCJkaW1zXCJcbiAgICAgICAgICBbc2hvd0dyaWRMaW5lc109XCJzaG93R3JpZExpbmVzXCJcbiAgICAgICAgICBbc2hvd0xhYmVsXT1cInNob3dYQXhpc0xhYmVsXCJcbiAgICAgICAgICBbbGFiZWxUZXh0XT1cInhBeGlzTGFiZWxcIlxuICAgICAgICAgIFt0cmltVGlja3NdPVwidHJpbVhBeGlzVGlja3NcIlxuICAgICAgICAgIFtyb3RhdGVUaWNrc109XCJyb3RhdGVYQXhpc1RpY2tzXCJcbiAgICAgICAgICBbbWF4VGlja0xlbmd0aF09XCJtYXhYQXhpc1RpY2tMZW5ndGhcIlxuICAgICAgICAgIFt0aWNrRm9ybWF0dGluZ109XCJ4QXhpc1RpY2tGb3JtYXR0aW5nXCJcbiAgICAgICAgICBbdGlja3NdPVwieEF4aXNUaWNrc1wiXG4gICAgICAgICAgKGRpbWVuc2lvbnNDaGFuZ2VkKT1cInVwZGF0ZVhBeGlzSGVpZ2h0KCRldmVudClcIlxuICAgICAgICA+PC9zdmc6Zz5cbiAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgbmd4LWNoYXJ0cy15LWF4aXNcbiAgICAgICAgICAqbmdJZj1cInlBeGlzXCJcbiAgICAgICAgICBbeVNjYWxlXT1cInlTY2FsZVwiXG4gICAgICAgICAgW2RpbXNdPVwiZGltc1wiXG4gICAgICAgICAgW3Nob3dMYWJlbF09XCJzaG93WUF4aXNMYWJlbFwiXG4gICAgICAgICAgW2xhYmVsVGV4dF09XCJ5QXhpc0xhYmVsXCJcbiAgICAgICAgICBbdHJpbVRpY2tzXT1cInRyaW1ZQXhpc1RpY2tzXCJcbiAgICAgICAgICBbbWF4VGlja0xlbmd0aF09XCJtYXhZQXhpc1RpY2tMZW5ndGhcIlxuICAgICAgICAgIFt0aWNrRm9ybWF0dGluZ109XCJ5QXhpc1RpY2tGb3JtYXR0aW5nXCJcbiAgICAgICAgICBbdGlja3NdPVwieUF4aXNUaWNrc1wiXG4gICAgICAgICAgKGRpbWVuc2lvbnNDaGFuZ2VkKT1cInVwZGF0ZVlBeGlzV2lkdGgoJGV2ZW50KVwiXG4gICAgICAgID48L3N2ZzpnPlxuICAgICAgICA8c3ZnOmdcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmVzdWx0czsgdHJhY2tCeTogdHJhY2tCeVwiXG4gICAgICAgICAgW0BhbmltYXRpb25TdGF0ZV09XCInYWN0aXZlJ1wiXG4gICAgICAgICAgW2F0dHIudHJhbnNmb3JtXT1cImdyb3VwVHJhbnNmb3JtKGdyb3VwKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnOmdcbiAgICAgICAgICAgIG5neC1jaGFydHMtc2VyaWVzLWhvcml6b250YWxcbiAgICAgICAgICAgIFt0eXBlXT1cImJhckNoYXJ0VHlwZS5Ob3JtYWxpemVkXCJcbiAgICAgICAgICAgIFt4U2NhbGVdPVwieFNjYWxlXCJcbiAgICAgICAgICAgIFt5U2NhbGVdPVwieVNjYWxlXCJcbiAgICAgICAgICAgIFthY3RpdmVFbnRyaWVzXT1cImFjdGl2ZUVudHJpZXNcIlxuICAgICAgICAgICAgW2NvbG9yc109XCJjb2xvcnNcIlxuICAgICAgICAgICAgW3Nlcmllc109XCJncm91cC5zZXJpZXNcIlxuICAgICAgICAgICAgW2RpbXNdPVwiZGltc1wiXG4gICAgICAgICAgICBbZ3JhZGllbnRdPVwiZ3JhZGllbnRcIlxuICAgICAgICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0b29sdGlwRGlzYWJsZWRcIlxuICAgICAgICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgICAgICAgW3Nlcmllc05hbWVdPVwiZ3JvdXAubmFtZVwiXG4gICAgICAgICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwib25DbGljaygkZXZlbnQsIGdyb3VwKVwiXG4gICAgICAgICAgICAoYWN0aXZhdGUpPVwib25BY3RpdmF0ZSgkZXZlbnQsIGdyb3VwKVwiXG4gICAgICAgICAgICAoZGVhY3RpdmF0ZSk9XCJvbkRlYWN0aXZhdGUoJGV2ZW50LCBncm91cClcIlxuICAgICAgICAgICAgW25vQmFyV2hlblplcm9dPVwibm9CYXJXaGVuWmVyb1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc6Zz5cbiAgICAgIDwvc3ZnOmc+XG4gICAgPC9uZ3gtY2hhcnRzLWNoYXJ0PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVVcmxzOiBbJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhbmltYXRpb25TdGF0ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnKidcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoNTAwLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCYXJIb3Jpem9udGFsTm9ybWFsaXplZENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxlZ2VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsZWdlbmRUaXRsZTogc3RyaW5nID0gJ0xlZ2VuZCc7XG4gIEBJbnB1dCgpIGxlZ2VuZFBvc2l0aW9uOiBMZWdlbmRQb3NpdGlvbiA9IExlZ2VuZFBvc2l0aW9uLlJpZ2h0O1xuICBASW5wdXQoKSB4QXhpcztcbiAgQElucHV0KCkgeUF4aXM7XG4gIEBJbnB1dCgpIHNob3dYQXhpc0xhYmVsOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93WUF4aXNMYWJlbDogYm9vbGVhbjtcbiAgQElucHV0KCkgeEF4aXNMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB5QXhpc0xhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBncmFkaWVudDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd0dyaWRMaW5lczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGFjdGl2ZUVudHJpZXM6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIHNjaGVtZVR5cGU6IFNjYWxlVHlwZTtcbiAgQElucHV0KCkgdHJpbVhBeGlzVGlja3M6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB0cmltWUF4aXNUaWNrczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHJvdGF0ZVhBeGlzVGlja3M6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBtYXhYQXhpc1RpY2tMZW5ndGg6IG51bWJlciA9IDE2O1xuICBASW5wdXQoKSBtYXhZQXhpc1RpY2tMZW5ndGg6IG51bWJlciA9IDE2O1xuICBASW5wdXQoKSB4QXhpc1RpY2tGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIHlBeGlzVGlja0Zvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgeEF4aXNUaWNrczogYW55W107XG4gIEBJbnB1dCgpIHlBeGlzVGlja3M6IGFueVtdO1xuICBASW5wdXQoKSBiYXJQYWRkaW5nOiBudW1iZXIgPSA4O1xuICBASW5wdXQoKSByb3VuZERvbWFpbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbm9CYXJXaGVuWmVybzogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBDb250ZW50Q2hpbGQoJ3Rvb2x0aXBUZW1wbGF0ZScpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBkaW1zOiBWaWV3RGltZW5zaW9ucztcbiAgZ3JvdXBEb21haW46IHN0cmluZ1tdO1xuICBpbm5lckRvbWFpbjogc3RyaW5nW107XG4gIHZhbHVlRG9tYWluOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDEwMF07XG4gIHhTY2FsZTogYW55O1xuICB5U2NhbGU6IGFueTtcbiAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIGNvbG9yczogQ29sb3JIZWxwZXI7XG4gIG1hcmdpbjogbnVtYmVyW10gPSBbMTAsIDIwLCAxMCwgMjBdO1xuICB4QXhpc0hlaWdodDogbnVtYmVyID0gMDtcbiAgeUF4aXNXaWR0aDogbnVtYmVyID0gMDtcbiAgbGVnZW5kT3B0aW9uczogTGVnZW5kT3B0aW9ucztcbiAgYmFyQ2hhcnRUeXBlID0gQmFyQ2hhcnRUeXBlO1xuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoKTtcblxuICAgIHRoaXMuZGltcyA9IGNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zKHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG1hcmdpbnM6IHRoaXMubWFyZ2luLFxuICAgICAgc2hvd1hBeGlzOiB0aGlzLnhBeGlzLFxuICAgICAgc2hvd1lBeGlzOiB0aGlzLnlBeGlzLFxuICAgICAgeEF4aXNIZWlnaHQ6IHRoaXMueEF4aXNIZWlnaHQsXG4gICAgICB5QXhpc1dpZHRoOiB0aGlzLnlBeGlzV2lkdGgsXG4gICAgICBzaG93WExhYmVsOiB0aGlzLnNob3dYQXhpc0xhYmVsLFxuICAgICAgc2hvd1lMYWJlbDogdGhpcy5zaG93WUF4aXNMYWJlbCxcbiAgICAgIHNob3dMZWdlbmQ6IHRoaXMubGVnZW5kLFxuICAgICAgbGVnZW5kVHlwZTogdGhpcy5zY2hlbWVUeXBlLFxuICAgICAgbGVnZW5kUG9zaXRpb246IHRoaXMubGVnZW5kUG9zaXRpb25cbiAgICB9KTtcblxuICAgIHRoaXMuZm9ybWF0RGF0ZXMoKTtcblxuICAgIHRoaXMuZ3JvdXBEb21haW4gPSB0aGlzLmdldEdyb3VwRG9tYWluKCk7XG4gICAgdGhpcy5pbm5lckRvbWFpbiA9IHRoaXMuZ2V0SW5uZXJEb21haW4oKTtcblxuICAgIHRoaXMueFNjYWxlID0gdGhpcy5nZXRYU2NhbGUoKTtcbiAgICB0aGlzLnlTY2FsZSA9IHRoaXMuZ2V0WVNjYWxlKCk7XG5cbiAgICB0aGlzLnNldENvbG9ycygpO1xuICAgIHRoaXMubGVnZW5kT3B0aW9ucyA9IHRoaXMuZ2V0TGVnZW5kT3B0aW9ucygpO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy5kaW1zLnhPZmZzZXR9ICwgJHt0aGlzLm1hcmdpblswXX0pYDtcbiAgfVxuXG4gIGdldEdyb3VwRG9tYWluKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBkb21haW4gPSBbXTtcblxuICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgdGhpcy5yZXN1bHRzKSB7XG4gICAgICBpZiAoIWRvbWFpbi5pbmNsdWRlcyhncm91cC5sYWJlbCkpIHtcbiAgICAgICAgZG9tYWluLnB1c2goZ3JvdXAubGFiZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkb21haW47XG4gIH1cblxuICBnZXRJbm5lckRvbWFpbigpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZG9tYWluID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHRoaXMucmVzdWx0cykge1xuICAgICAgZm9yIChjb25zdCBkIG9mIGdyb3VwLnNlcmllcykge1xuICAgICAgICBpZiAoIWRvbWFpbi5pbmNsdWRlcyhkLmxhYmVsKSkge1xuICAgICAgICAgIGRvbWFpbi5wdXNoKGQubGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfVxuXG4gIGdldFlTY2FsZSgpOiBhbnkge1xuICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLmdyb3VwRG9tYWluLmxlbmd0aCAvICh0aGlzLmRpbXMuaGVpZ2h0IC8gdGhpcy5iYXJQYWRkaW5nICsgMSk7XG5cbiAgICByZXR1cm4gc2NhbGVCYW5kKCkucmFuZ2VSb3VuZChbMCwgdGhpcy5kaW1zLmhlaWdodF0pLnBhZGRpbmdJbm5lcihzcGFjaW5nKS5kb21haW4odGhpcy5ncm91cERvbWFpbik7XG4gIH1cblxuICBnZXRYU2NhbGUoKTogYW55IHtcbiAgICBjb25zdCBzY2FsZSA9IHNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHRoaXMuZGltcy53aWR0aF0pLmRvbWFpbih0aGlzLnZhbHVlRG9tYWluKTtcbiAgICByZXR1cm4gdGhpcy5yb3VuZERvbWFpbnMgPyBzY2FsZS5uaWNlKCkgOiBzY2FsZTtcbiAgfVxuXG4gIGdyb3VwVHJhbnNmb3JtKGdyb3VwOiBTZXJpZXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBgdHJhbnNsYXRlKDAsICR7dGhpcy55U2NhbGUoZ3JvdXAubmFtZSl9KWA7XG4gIH1cblxuICBvbkNsaWNrKGRhdGEsIGdyb3VwPzogU2VyaWVzKTogdm9pZCB7XG4gICAgaWYgKGdyb3VwKSB7XG4gICAgICBkYXRhLnNlcmllcyA9IGdyb3VwLm5hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcbiAgfVxuXG4gIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxTZXJpZXM+ID0gKGluZGV4OiBudW1iZXIsIGl0ZW06IFNlcmllcykgPT4ge1xuICAgIHJldHVybiBpdGVtLm5hbWU7XG4gIH07XG5cbiAgc2V0Q29sb3JzKCk6IHZvaWQge1xuICAgIGxldCBkb21haW47XG4gICAgaWYgKHRoaXMuc2NoZW1lVHlwZSA9PT0gU2NhbGVUeXBlLk9yZGluYWwpIHtcbiAgICAgIGRvbWFpbiA9IHRoaXMuaW5uZXJEb21haW47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbWFpbiA9IHRoaXMudmFsdWVEb21haW47XG4gICAgfVxuXG4gICAgdGhpcy5jb2xvcnMgPSBuZXcgQ29sb3JIZWxwZXIodGhpcy5zY2hlbWUsIHRoaXMuc2NoZW1lVHlwZSwgZG9tYWluLCB0aGlzLmN1c3RvbUNvbG9ycyk7XG4gIH1cblxuICBnZXRMZWdlbmRPcHRpb25zKCk6IExlZ2VuZE9wdGlvbnMge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBzY2FsZVR5cGU6IHRoaXMuc2NoZW1lVHlwZSBhcyBhbnksXG4gICAgICBjb2xvcnM6IHVuZGVmaW5lZCxcbiAgICAgIGRvbWFpbjogW10sXG4gICAgICB0aXRsZTogdW5kZWZpbmVkLFxuICAgICAgcG9zaXRpb246IHRoaXMubGVnZW5kUG9zaXRpb25cbiAgICB9O1xuICAgIGlmIChvcHRzLnNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLk9yZGluYWwpIHtcbiAgICAgIG9wdHMuZG9tYWluID0gdGhpcy5pbm5lckRvbWFpbjtcbiAgICAgIG9wdHMuY29sb3JzID0gdGhpcy5jb2xvcnM7XG4gICAgICBvcHRzLnRpdGxlID0gdGhpcy5sZWdlbmRUaXRsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0cy5kb21haW4gPSB0aGlzLnZhbHVlRG9tYWluO1xuICAgICAgb3B0cy5jb2xvcnMgPSB0aGlzLmNvbG9ycy5zY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0cztcbiAgfVxuXG4gIHVwZGF0ZVlBeGlzV2lkdGgoeyB3aWR0aCB9OiB7IHdpZHRoOiBudW1iZXIgfSk6IHZvaWQge1xuICAgIHRoaXMueUF4aXNXaWR0aCA9IHdpZHRoO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGVYQXhpc0hlaWdodCh7IGhlaWdodCB9OiB7IGhlaWdodDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICB0aGlzLnhBeGlzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBvbkFjdGl2YXRlKGV2ZW50LCBncm91cDogU2VyaWVzLCBmcm9tTGVnZW5kOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQpO1xuICAgIGlmIChncm91cCkge1xuICAgICAgaXRlbS5zZXJpZXMgPSBncm91cC5uYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5yZXN1bHRzXG4gICAgICAubWFwKGcgPT4gZy5zZXJpZXMpXG4gICAgICAuZmxhdCgpXG4gICAgICAuZmlsdGVyKGkgPT4ge1xuICAgICAgICBpZiAoZnJvbUxlZ2VuZCkge1xuICAgICAgICAgIHJldHVybiBpLmxhYmVsID09PSBpdGVtLm5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGkubmFtZSA9PT0gaXRlbS5uYW1lICYmIGkuc2VyaWVzID09PSBpdGVtLnNlcmllcztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLmFjdGl2ZUVudHJpZXMgPSBbLi4uaXRlbXNdO1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh7IHZhbHVlOiBpdGVtLCBlbnRyaWVzOiB0aGlzLmFjdGl2ZUVudHJpZXMgfSk7XG4gIH1cblxuICBvbkRlYWN0aXZhdGUoZXZlbnQsIGdyb3VwOiBTZXJpZXMsIGZyb21MZWdlbmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBldmVudCk7XG4gICAgaWYgKGdyb3VwKSB7XG4gICAgICBpdGVtLnNlcmllcyA9IGdyb3VwLm5hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVFbnRyaWVzID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbHRlcihpID0+IHtcbiAgICAgIGlmIChmcm9tTGVnZW5kKSB7XG4gICAgICAgIHJldHVybiBpLmxhYmVsICE9PSBpdGVtLm5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gIShpLm5hbWUgPT09IGl0ZW0ubmFtZSAmJiBpLnNlcmllcyA9PT0gaXRlbS5zZXJpZXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyB2YWx1ZTogaXRlbSwgZW50cmllczogdGhpcy5hY3RpdmVFbnRyaWVzIH0pO1xuICB9XG59XG4iXX0=