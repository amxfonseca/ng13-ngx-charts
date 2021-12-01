import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { BaseChartComponent } from '../common/base-chart.component';
import { ColorHelper } from '../common/color.helper';
import { scaleLinear, scaleBand } from 'd3-scale';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { LegendPosition } from '../common/types/legend.model';
import { ScaleType } from '../common/types/scale-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../common/charts/chart.component";
import * as i2 from "../common/axes/x-axis.component";
import * as i3 from "../common/axes/y-axis.component";
import * as i4 from "@angular/common";
import * as i5 from "./box-series.component";
const _c0 = ["tooltipTemplate"];
function BoxChartComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelementStart(1, "g", 5);
    i0.ɵɵlistener("activate", function BoxChartComponent__svg_g_5_Template__svg_g_activate_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onActivate($event); })("deactivate", function BoxChartComponent__svg_g_5_Template__svg_g_deactivate_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onDeactivate($event); })("select", function BoxChartComponent__svg_g_5_Template__svg_g_select_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const result_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("xScale", ctx_r0.xScale)("yScale", ctx_r0.yScale)("colors", ctx_r0.colors)("roundEdges", ctx_r0.roundEdges)("strokeColor", ctx_r0.strokeColor)("strokeWidth", ctx_r0.strokeWidth)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipTemplate", ctx_r0.tooltipTemplate)("series", result_r1)("dims", ctx_r0.dims)("animations", ctx_r0.animations)("gradient", ctx_r0.gradient);
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
export class BoxChartComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        /** Show or hide the legend. */
        this.legend = false;
        this.legendPosition = LegendPosition.Right;
        this.legendTitle = 'Legend';
        this.showGridLines = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.roundDomains = false;
        this.roundEdges = true;
        this.strokeColor = '#FFFFFF';
        this.strokeWidth = 2;
        this.tooltipDisabled = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        /** Chart Margins (For each side, counterclock wise). */
        this.margin = [10, 20, 10, 20];
        /** Chart X axis dimension. */
        this.xAxisHeight = 0;
        /** Chart Y axis dimension. */
        this.yAxisWidth = 0;
    }
    trackBy(index, item) {
        return item.name;
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
            legendPosition: this.legendPosition
        });
        this.xDomain = this.getXDomain();
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.setScales();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    }
    setColors() {
        let domain = [];
        if (this.schemeType === ScaleType.Ordinal) {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new ColorHelper(this.scheme, this.schemeType, domain, this.customColors);
    }
    setScales() {
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
    }
    getXScale(domain, width) {
        const scale = scaleBand()
            .domain(domain.map(d => d.toString()))
            .rangeRound([0, width])
            .padding(0.5);
        return scale;
    }
    getYScale(domain, height) {
        const scale = scaleLinear().domain(domain).range([height, 0]);
        return this.roundDomains ? scale.nice() : scale;
    }
    getUniqueBoxChartXDomainValues(results) {
        const valueSet = new Set();
        for (const result of results) {
            valueSet.add(result.name);
        }
        return Array.from(valueSet);
    }
    getXDomain() {
        let domain = [];
        const values = this.getUniqueBoxChartXDomainValues(this.results);
        let min;
        let max;
        if (typeof values[0] === 'string') {
            domain = values.map(val => val.toString());
        }
        else if (typeof values[0] === 'number') {
            const mappedValues = values.map(v => Number(v));
            min = Math.min(...mappedValues);
            max = Math.max(...mappedValues);
            domain = [min, max];
        }
        else {
            const mappedValues = values.map(v => Number(new Date(v)));
            min = Math.min(...mappedValues);
            max = Math.max(...mappedValues);
            domain = [new Date(min), new Date(max)];
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
            }
        }
        const values = [...domain];
        const mappedValues = values.map(v => Number(v));
        const min = Math.min(...mappedValues);
        const max = Math.max(...mappedValues);
        return [min, max];
    }
    getSeriesDomain() {
        return this.results.map(d => `${d.name}`);
    }
    updateYAxisWidth({ width }) {
        this.yAxisWidth = width;
        this.update();
    }
    updateXAxisHeight({ height }) {
        this.xAxisHeight = height;
        this.update();
    }
    onClick(data) {
        this.select.emit(data);
    }
    onActivate(data) {
        this.activate.emit(data);
    }
    onDeactivate(data) {
        this.deactivate.emit(data);
    }
    getLegendOptions() {
        const legendOpts = {
            scaleType: this.schemeType,
            colors: this.colors,
            domain: [],
            position: this.legendPosition,
            title: this.legendTitle
        };
        if (this.schemeType === ScaleType.Ordinal) {
            legendOpts.domain = this.xDomain;
            legendOpts.colors = this.colors;
        }
        else {
            legendOpts.domain = this.yDomain;
            legendOpts.colors = this.colors.scale;
        }
        return legendOpts;
    }
}
BoxChartComponent.ɵfac = /*@__PURE__*/ function () { let ɵBoxChartComponent_BaseFactory; return function BoxChartComponent_Factory(t) { return (ɵBoxChartComponent_BaseFactory || (ɵBoxChartComponent_BaseFactory = i0.ɵɵgetInheritedFactory(BoxChartComponent)))(t || BoxChartComponent); }; }();
BoxChartComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BoxChartComponent, selectors: [["ngx-charts-box-chart"]], contentQueries: function BoxChartComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { legend: "legend", legendPosition: "legendPosition", legendTitle: "legendTitle", legendOptionsConfig: "legendOptionsConfig", showGridLines: "showGridLines", xAxis: "xAxis", yAxis: "yAxis", showXAxisLabel: "showXAxisLabel", showYAxisLabel: "showYAxisLabel", roundDomains: "roundDomains", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", roundEdges: "roundEdges", strokeColor: "strokeColor", strokeWidth: "strokeWidth", tooltipDisabled: "tooltipDisabled", gradient: "gradient" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 21, consts: [[3, "view", "showLegend", "legendOptions", "animations", "legendLabelClick", "legendLabelActivate", "legendLabelDeactivate"], [1, "box-chart", "chart"], ["ngx-charts-x-axis", "", 3, "showGridLines", "dims", "xScale", "showLabel", "labelText", "dimensionsChanged"], ["ngx-charts-y-axis", "", 3, "showGridLines", "dims", "yScale", "showLabel", "labelText", "dimensionsChanged"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-box-series", "", 3, "xScale", "yScale", "colors", "roundEdges", "strokeColor", "strokeWidth", "tooltipDisabled", "tooltipTemplate", "series", "dims", "animations", "gradient", "activate", "deactivate", "select"]], template: function BoxChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        i0.ɵɵlistener("legendLabelClick", function BoxChartComponent_Template_ngx_charts_chart_legendLabelClick_0_listener($event) { return ctx.onClick($event); })("legendLabelActivate", function BoxChartComponent_Template_ngx_charts_chart_legendLabelActivate_0_listener($event) { return ctx.onActivate($event); })("legendLabelDeactivate", function BoxChartComponent_Template_ngx_charts_chart_legendLabelDeactivate_0_listener($event) { return ctx.onDeactivate($event); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "g", 1);
        i0.ɵɵelementStart(2, "g", 2);
        i0.ɵɵlistener("dimensionsChanged", function BoxChartComponent_Template__svg_g_dimensionsChanged_2_listener($event) { return ctx.updateXAxisHeight($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "g", 3);
        i0.ɵɵlistener("dimensionsChanged", function BoxChartComponent_Template__svg_g_dimensionsChanged_3_listener($event) { return ctx.updateYAxisWidth($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "g");
        i0.ɵɵtemplate(5, BoxChartComponent__svg_g_5_Template, 2, 12, "g", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("view", i0.ɵɵpureFunction2(18, _c1, ctx.width, ctx.height))("showLegend", ctx.legend)("legendOptions", ctx.legendOptions)("animations", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("showGridLines", ctx.showGridLines)("dims", ctx.dims)("xScale", ctx.xScale)("showLabel", ctx.showXAxisLabel)("labelText", ctx.xAxisLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("showGridLines", ctx.showGridLines)("dims", ctx.dims)("yScale", ctx.yScale)("showLabel", ctx.showYAxisLabel)("labelText", ctx.yAxisLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.results)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.ChartComponent, i2.XAxisComponent, i3.YAxisComponent, i4.NgForOf, i5.BoxSeriesComponent], styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BoxChartComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-box-chart', template: `
    <ngx-charts-chart
      [view]="[width, height]"
      [showLegend]="legend"
      [legendOptions]="legendOptions"
      [animations]="animations"
      (legendLabelClick)="onClick($event)"
      (legendLabelActivate)="onActivate($event)"
      (legendLabelDeactivate)="onDeactivate($event)"
    >
      <svg:g [attr.transform]="transform" class="box-chart chart">
        <svg:g
          ngx-charts-x-axis
          [showGridLines]="showGridLines"
          [dims]="dims"
          [xScale]="xScale"
          [showLabel]="showXAxisLabel"
          [labelText]="xAxisLabel"
          (dimensionsChanged)="updateXAxisHeight($event)"
        />
        <svg:g
          ngx-charts-y-axis
          [showGridLines]="showGridLines"
          [dims]="dims"
          [yScale]="yScale"
          [showLabel]="showYAxisLabel"
          [labelText]="yAxisLabel"
          (dimensionsChanged)="updateYAxisWidth($event)"
        />
      </svg:g>
      <svg:g [attr.transform]="transform">
        <svg:g *ngFor="let result of results; trackBy: trackBy">
          <svg:g
            ngx-charts-box-series
            [xScale]="xScale"
            [yScale]="yScale"
            [colors]="colors"
            [roundEdges]="roundEdges"
            [strokeColor]="strokeColor"
            [strokeWidth]="strokeWidth"
            [tooltipDisabled]="tooltipDisabled"
            [tooltipTemplate]="tooltipTemplate"
            [series]="result"
            [dims]="dims"
            [animations]="animations"
            [gradient]="gradient"
            (activate)="onActivate($event)"
            (deactivate)="onDeactivate($event)"
            (select)="onClick($event)"
          />
        </svg:g>
      </svg:g>
    </ngx-charts-chart>
  `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: [".ngx-charts-outer{-webkit-animation:chartFadeIn linear .6s;animation:chartFadeIn linear .6s}@-webkit-keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}@keyframes chartFadeIn{0%{opacity:0}20%{opacity:0}to{opacity:1}}.ngx-charts{float:left;overflow:visible}.ngx-charts .circle,.ngx-charts .cell,.ngx-charts .bar,.ngx-charts .arc{cursor:pointer}.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover,.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .card.active,.ngx-charts .card:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .bar:focus,.ngx-charts .cell:focus,.ngx-charts .arc:focus,.ngx-charts .card:focus{outline:none}.ngx-charts .bar.hidden,.ngx-charts .cell.hidden,.ngx-charts .arc.hidden,.ngx-charts .card.hidden{display:none}.ngx-charts g:focus{outline:none}.ngx-charts .line-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .polar-series-path.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .area-series.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:#0000000d}\n"] }]
    }], null, { legend: [{
            type: Input
        }], legendPosition: [{
            type: Input
        }], legendTitle: [{
            type: Input
        }], legendOptionsConfig: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], xAxis: [{
            type: Input
        }], yAxis: [{
            type: Input
        }], showXAxisLabel: [{
            type: Input
        }], showYAxisLabel: [{
            type: Input
        }], roundDomains: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
            type: Input
        }], roundEdges: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], strokeWidth: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], gradient: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9ib3gtY2hhcnQvYm94LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsV0FBVyxFQUFlLFNBQVMsRUFBYSxNQUFNLFVBQVUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsY0FBYyxFQUFpQixNQUFNLDhCQUE4QixDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7Ozs7SUFtQ3BELHlCQUF3RDtJQUN0RCw0QkFpQkU7SUFIQSw2S0FBWSx5QkFBa0IsSUFBQyxvS0FDakIsMkJBQW9CLElBREgsNEpBRXJCLHNCQUFlLElBRk07SUFkakMsaUJBaUJFO0lBQ0osaUJBQVE7Ozs7SUFoQkosZUFBaUI7SUFBakIsc0NBQWlCLHlCQUFBLHlCQUFBLGlDQUFBLG1DQUFBLG1DQUFBLDJDQUFBLDJDQUFBLHFCQUFBLHFCQUFBLGlDQUFBLDZCQUFBOzs7QUF3QjdCLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxrQkFBa0I7SUE1RHpEOztRQTZERSwrQkFBK0I7UUFDdEIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixtQkFBYyxHQUFtQixjQUFjLENBQUMsS0FBSyxDQUFD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UUFBUTtrQkFBaEIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBRTZDLGVBQWU7a0JBQWxFLFlBQVk7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yLmhlbHBlcic7XG5pbXBvcnQgeyBCb3hDaGFydE11bHRpU2VyaWVzLCBCb3hDaGFydFNlcmllcywgSUJveE1vZGVsLCBTdHJpbmdPck51bWJlck9yRGF0ZSB9IGZyb20gJy4uL21vZGVscy9jaGFydC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IHNjYWxlTGluZWFyLCBTY2FsZUxpbmVhciwgc2NhbGVCYW5kLCBTY2FsZUJhbmQgfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQgeyBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucyB9IGZyb20gJy4uL2NvbW1vbi92aWV3LWRpbWVuc2lvbnMuaGVscGVyJztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3ZpZXctZGltZW5zaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBMZWdlbmRQb3NpdGlvbiwgTGVnZW5kT3B0aW9ucyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9sZWdlbmQubW9kZWwnO1xuaW1wb3J0IHsgU2NhbGVUeXBlIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3NjYWxlLXR5cGUuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jaGFydHMtYm94LWNoYXJ0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LWNoYXJ0cy1jaGFydFxuICAgICAgW3ZpZXddPVwiW3dpZHRoLCBoZWlnaHRdXCJcbiAgICAgIFtzaG93TGVnZW5kXT1cImxlZ2VuZFwiXG4gICAgICBbbGVnZW5kT3B0aW9uc109XCJsZWdlbmRPcHRpb25zXCJcbiAgICAgIFthbmltYXRpb25zXT1cImFuaW1hdGlvbnNcIlxuICAgICAgKGxlZ2VuZExhYmVsQ2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgIChsZWdlbmRMYWJlbEFjdGl2YXRlKT1cIm9uQWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgICAobGVnZW5kTGFiZWxEZWFjdGl2YXRlKT1cIm9uRGVhY3RpdmF0ZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8c3ZnOmcgW2F0dHIudHJhbnNmb3JtXT1cInRyYW5zZm9ybVwiIGNsYXNzPVwiYm94LWNoYXJ0IGNoYXJ0XCI+XG4gICAgICAgIDxzdmc6Z1xuICAgICAgICAgIG5neC1jaGFydHMteC1heGlzXG4gICAgICAgICAgW3Nob3dHcmlkTGluZXNdPVwic2hvd0dyaWRMaW5lc1wiXG4gICAgICAgICAgW2RpbXNdPVwiZGltc1wiXG4gICAgICAgICAgW3hTY2FsZV09XCJ4U2NhbGVcIlxuICAgICAgICAgIFtzaG93TGFiZWxdPVwic2hvd1hBeGlzTGFiZWxcIlxuICAgICAgICAgIFtsYWJlbFRleHRdPVwieEF4aXNMYWJlbFwiXG4gICAgICAgICAgKGRpbWVuc2lvbnNDaGFuZ2VkKT1cInVwZGF0ZVhBeGlzSGVpZ2h0KCRldmVudClcIlxuICAgICAgICAvPlxuICAgICAgICA8c3ZnOmdcbiAgICAgICAgICBuZ3gtY2hhcnRzLXktYXhpc1xuICAgICAgICAgIFtzaG93R3JpZExpbmVzXT1cInNob3dHcmlkTGluZXNcIlxuICAgICAgICAgIFtkaW1zXT1cImRpbXNcIlxuICAgICAgICAgIFt5U2NhbGVdPVwieVNjYWxlXCJcbiAgICAgICAgICBbc2hvd0xhYmVsXT1cInNob3dZQXhpc0xhYmVsXCJcbiAgICAgICAgICBbbGFiZWxUZXh0XT1cInlBeGlzTGFiZWxcIlxuICAgICAgICAgIChkaW1lbnNpb25zQ2hhbmdlZCk9XCJ1cGRhdGVZQXhpc1dpZHRoKCRldmVudClcIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc6Zz5cbiAgICAgIDxzdmc6ZyBbYXR0ci50cmFuc2Zvcm1dPVwidHJhbnNmb3JtXCI+XG4gICAgICAgIDxzdmc6ZyAqbmdGb3I9XCJsZXQgcmVzdWx0IG9mIHJlc3VsdHM7IHRyYWNrQnk6IHRyYWNrQnlcIj5cbiAgICAgICAgICA8c3ZnOmdcbiAgICAgICAgICAgIG5neC1jaGFydHMtYm94LXNlcmllc1xuICAgICAgICAgICAgW3hTY2FsZV09XCJ4U2NhbGVcIlxuICAgICAgICAgICAgW3lTY2FsZV09XCJ5U2NhbGVcIlxuICAgICAgICAgICAgW2NvbG9yc109XCJjb2xvcnNcIlxuICAgICAgICAgICAgW3JvdW5kRWRnZXNdPVwicm91bmRFZGdlc1wiXG4gICAgICAgICAgICBbc3Ryb2tlQ29sb3JdPVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgW3N0cm9rZVdpZHRoXT1cInN0cm9rZVdpZHRoXCJcbiAgICAgICAgICAgIFt0b29sdGlwRGlzYWJsZWRdPVwidG9vbHRpcERpc2FibGVkXCJcbiAgICAgICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgICAgIFtzZXJpZXNdPVwicmVzdWx0XCJcbiAgICAgICAgICAgIFtkaW1zXT1cImRpbXNcIlxuICAgICAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICAgICAgICBbZ3JhZGllbnRdPVwiZ3JhZGllbnRcIlxuICAgICAgICAgICAgKGFjdGl2YXRlKT1cIm9uQWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAoZGVhY3RpdmF0ZSk9XCJvbkRlYWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAoc2VsZWN0KT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc6Zz5cbiAgICAgIDwvc3ZnOmc+XG4gICAgPC9uZ3gtY2hhcnRzLWNoYXJ0PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi4vY29tbW9uL2Jhc2UtY2hhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQm94Q2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQge1xuICAvKiogU2hvdyBvciBoaWRlIHRoZSBsZWdlbmQuICovXG4gIEBJbnB1dCgpIGxlZ2VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsZWdlbmRQb3NpdGlvbjogTGVnZW5kUG9zaXRpb24gPSBMZWdlbmRQb3NpdGlvbi5SaWdodDtcbiAgQElucHV0KCkgbGVnZW5kVGl0bGU6IHN0cmluZyA9ICdMZWdlbmQnO1xuICAvKiogSSB0aGluayBpdCBpcyBiZXR0ZXIgdG8gaGFuZGxlIGxlZ2VuZCBvcHRpb25zIGFzIHNpbmdsZSBJbnB1dCBvYmplY3Qgb2YgdHlwZSBJTGVnZW5kT3B0aW9ucyAqL1xuICBASW5wdXQoKSBsZWdlbmRPcHRpb25zQ29uZmlnOiBMZWdlbmRPcHRpb25zO1xuICBASW5wdXQoKSBzaG93R3JpZExpbmVzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgeEF4aXM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB5QXhpczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dYQXhpc0xhYmVsOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd1lBeGlzTGFiZWw6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSByb3VuZERvbWFpbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgeEF4aXNMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB5QXhpc0xhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvdW5kRWRnZXM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzdHJva2VDb2xvcjogc3RyaW5nID0gJyNGRkZGRkYnO1xuICBASW5wdXQoKSBzdHJva2VXaWR0aDogbnVtYmVyID0gMjtcbiAgQElucHV0KCkgdG9vbHRpcERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGdyYWRpZW50OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxJQm94TW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxJQm94TW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPElCb3hNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZCgndG9vbHRpcFRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKiogSW5wdXQgRGF0YSwgdGhpcyBjYW1lIGZyb20gQmFzZSBDaGFydCBDb21wb25lbnQuICovXG4gIHJlc3VsdHM6IEJveENoYXJ0TXVsdGlTZXJpZXM7XG4gIC8qKiBDaGFydCBEaW1lbnNpb25zLCB0aGlzIGNhbWUgZnJvbSBCYXNlIENoYXJ0IENvbXBvbmVudC4gKi9cbiAgZGltczogVmlld0RpbWVuc2lvbnM7XG4gIC8qKiBDb2xvciBkYXRhLiAqL1xuICBjb2xvcnM6IENvbG9ySGVscGVyO1xuICAvKiogVHJhbnNmb3JtIHN0cmluZyBjc3MgYXR0cmlidXRlIGZvciB0aGUgY2hhcnQgY29udGFpbmVyICovXG4gIHRyYW5zZm9ybTogc3RyaW5nO1xuXG4gIC8qKiBDaGFydCBNYXJnaW5zIChGb3IgZWFjaCBzaWRlLCBjb3VudGVyY2xvY2sgd2lzZSkuICovXG4gIG1hcmdpbjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPSBbMTAsIDIwLCAxMCwgMjBdO1xuXG4gIC8qKiBMZWdlbmQgT3B0aW9ucyBvYmplY3QgdG8gaGFuZGxlIHBvc2l0aW9uaW5nLCB0aXRsZSwgY29sb3JzIGFuZCBkb21haW4uICovXG4gIGxlZ2VuZE9wdGlvbnM6IExlZ2VuZE9wdGlvbnM7XG5cbiAgeFNjYWxlOiBTY2FsZUJhbmQ8c3RyaW5nPjtcbiAgeVNjYWxlOiBTY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj47XG4gIHhEb21haW46IFN0cmluZ09yTnVtYmVyT3JEYXRlW107XG4gIHlEb21haW46IG51bWJlcltdO1xuICBzZXJpZXNEb21haW46IHN0cmluZ1tdO1xuICAvKiogQ2hhcnQgWCBheGlzIGRpbWVuc2lvbi4gKi9cbiAgeEF4aXNIZWlnaHQ6IG51bWJlciA9IDA7XG4gIC8qKiBDaGFydCBZIGF4aXMgZGltZW5zaW9uLiAqL1xuICB5QXhpc1dpZHRoOiBudW1iZXIgPSAwO1xuXG4gIHRyYWNrQnkoaW5kZXg6IG51bWJlciwgaXRlbTogQm94Q2hhcnRTZXJpZXMpOiBTdHJpbmdPck51bWJlck9yRGF0ZSB7XG4gICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoKTtcblxuICAgIHRoaXMuZGltcyA9IGNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zKHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG1hcmdpbnM6IHRoaXMubWFyZ2luLFxuICAgICAgc2hvd1hBeGlzOiB0aGlzLnhBeGlzLFxuICAgICAgc2hvd1lBeGlzOiB0aGlzLnlBeGlzLFxuICAgICAgeEF4aXNIZWlnaHQ6IHRoaXMueEF4aXNIZWlnaHQsXG4gICAgICB5QXhpc1dpZHRoOiB0aGlzLnlBeGlzV2lkdGgsXG4gICAgICBzaG93WExhYmVsOiB0aGlzLnNob3dYQXhpc0xhYmVsLFxuICAgICAgc2hvd1lMYWJlbDogdGhpcy5zaG93WUF4aXNMYWJlbCxcbiAgICAgIHNob3dMZWdlbmQ6IHRoaXMubGVnZW5kLFxuICAgICAgbGVnZW5kUG9zaXRpb246IHRoaXMubGVnZW5kUG9zaXRpb25cbiAgICB9KTtcblxuICAgIHRoaXMueERvbWFpbiA9IHRoaXMuZ2V0WERvbWFpbigpO1xuICAgIHRoaXMueURvbWFpbiA9IHRoaXMuZ2V0WURvbWFpbigpO1xuICAgIHRoaXMuc2VyaWVzRG9tYWluID0gdGhpcy5nZXRTZXJpZXNEb21haW4oKTtcbiAgICB0aGlzLnNldFNjYWxlcygpO1xuICAgIHRoaXMuc2V0Q29sb3JzKCk7XG5cbiAgICB0aGlzLmxlZ2VuZE9wdGlvbnMgPSB0aGlzLmdldExlZ2VuZE9wdGlvbnMoKTtcbiAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLmRpbXMueE9mZnNldH0gLCAke3RoaXMubWFyZ2luWzBdfSlgO1xuICB9XG5cbiAgc2V0Q29sb3JzKCk6IHZvaWQge1xuICAgIGxldCBkb21haW46IHN0cmluZ1tdIHwgbnVtYmVyW10gPSBbXTtcbiAgICBpZiAodGhpcy5zY2hlbWVUeXBlID09PSBTY2FsZVR5cGUuT3JkaW5hbCkge1xuICAgICAgZG9tYWluID0gdGhpcy5zZXJpZXNEb21haW47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbWFpbiA9IHRoaXMueURvbWFpbjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbG9ycyA9IG5ldyBDb2xvckhlbHBlcih0aGlzLnNjaGVtZSwgdGhpcy5zY2hlbWVUeXBlLCBkb21haW4sIHRoaXMuY3VzdG9tQ29sb3JzKTtcbiAgfVxuXG4gIHNldFNjYWxlcygpIHtcbiAgICB0aGlzLnhTY2FsZSA9IHRoaXMuZ2V0WFNjYWxlKHRoaXMueERvbWFpbiwgdGhpcy5kaW1zLndpZHRoKTtcbiAgICB0aGlzLnlTY2FsZSA9IHRoaXMuZ2V0WVNjYWxlKHRoaXMueURvbWFpbiwgdGhpcy5kaW1zLmhlaWdodCk7XG4gIH1cblxuICBnZXRYU2NhbGUoZG9tYWluOiBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBEYXRlPiwgd2lkdGg6IG51bWJlcik6IFNjYWxlQmFuZDxzdHJpbmc+IHtcbiAgICBjb25zdCBzY2FsZSA9IHNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKGRvbWFpbi5tYXAoZCA9PiBkLnRvU3RyaW5nKCkpKVxuICAgICAgLnJhbmdlUm91bmQoWzAsIHdpZHRoXSlcbiAgICAgIC5wYWRkaW5nKDAuNSk7XG5cbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBnZXRZU2NhbGUoZG9tYWluOiBudW1iZXJbXSwgaGVpZ2h0OiBudW1iZXIpOiBTY2FsZUxpbmVhcjxudW1iZXIsIG51bWJlcj4ge1xuICAgIGNvbnN0IHNjYWxlID0gc2NhbGVMaW5lYXIoKS5kb21haW4oZG9tYWluKS5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICByZXR1cm4gdGhpcy5yb3VuZERvbWFpbnMgPyBzY2FsZS5uaWNlKCkgOiBzY2FsZTtcbiAgfVxuXG4gIGdldFVuaXF1ZUJveENoYXJ0WERvbWFpblZhbHVlcyhyZXN1bHRzOiBCb3hDaGFydE11bHRpU2VyaWVzKSB7XG4gICAgY29uc3QgdmFsdWVTZXQgPSBuZXcgU2V0PHN0cmluZyB8IG51bWJlciB8IERhdGU+KCk7XG4gICAgZm9yIChjb25zdCByZXN1bHQgb2YgcmVzdWx0cykge1xuICAgICAgdmFsdWVTZXQuYWRkKHJlc3VsdC5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWVTZXQpO1xuICB9XG5cbiAgZ2V0WERvbWFpbigpOiBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBEYXRlPiB7XG4gICAgbGV0IGRvbWFpbjogQXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgRGF0ZT4gPSBbXTtcbiAgICBjb25zdCB2YWx1ZXM6IEFycmF5PHN0cmluZyB8IG51bWJlciB8IERhdGU+ID0gdGhpcy5nZXRVbmlxdWVCb3hDaGFydFhEb21haW5WYWx1ZXModGhpcy5yZXN1bHRzKTtcbiAgICBsZXQgbWluOiBudW1iZXI7XG4gICAgbGV0IG1heDogbnVtYmVyO1xuICAgIGlmICh0eXBlb2YgdmFsdWVzWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgZG9tYWluID0gdmFsdWVzLm1hcCh2YWwgPT4gdmFsLnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlc1swXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IG1hcHBlZFZhbHVlcyA9IHZhbHVlcy5tYXAodiA9PiBOdW1iZXIodikpO1xuICAgICAgbWluID0gTWF0aC5taW4oLi4ubWFwcGVkVmFsdWVzKTtcbiAgICAgIG1heCA9IE1hdGgubWF4KC4uLm1hcHBlZFZhbHVlcyk7XG4gICAgICBkb21haW4gPSBbbWluLCBtYXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXBwZWRWYWx1ZXMgPSB2YWx1ZXMubWFwKHYgPT4gTnVtYmVyKG5ldyBEYXRlKHYpKSk7XG4gICAgICBtaW4gPSBNYXRoLm1pbiguLi5tYXBwZWRWYWx1ZXMpO1xuICAgICAgbWF4ID0gTWF0aC5tYXgoLi4ubWFwcGVkVmFsdWVzKTtcbiAgICAgIGRvbWFpbiA9IFtuZXcgRGF0ZShtaW4pLCBuZXcgRGF0ZShtYXgpXTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfVxuXG4gIGdldFlEb21haW4oKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IGRvbWFpbjogQXJyYXk8bnVtYmVyIHwgRGF0ZT4gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHJlc3VsdHMgb2YgdGhpcy5yZXN1bHRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGQgb2YgcmVzdWx0cy5zZXJpZXMpIHtcbiAgICAgICAgaWYgKGRvbWFpbi5pbmRleE9mKGQudmFsdWUpIDwgMCkge1xuICAgICAgICAgIGRvbWFpbi5wdXNoKGQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVzID0gWy4uLmRvbWFpbl07XG4gICAgY29uc3QgbWFwcGVkVmFsdWVzID0gdmFsdWVzLm1hcCh2ID0+IE51bWJlcih2KSk7XG5cbiAgICBjb25zdCBtaW46IG51bWJlciA9IE1hdGgubWluKC4uLm1hcHBlZFZhbHVlcyk7XG4gICAgY29uc3QgbWF4OiBudW1iZXIgPSBNYXRoLm1heCguLi5tYXBwZWRWYWx1ZXMpO1xuXG4gICAgcmV0dXJuIFttaW4sIG1heF07XG4gIH1cblxuICBnZXRTZXJpZXNEb21haW4oKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdHMubWFwKGQgPT4gYCR7ZC5uYW1lfWApO1xuICB9XG5cbiAgdXBkYXRlWUF4aXNXaWR0aCh7IHdpZHRoIH0pOiB2b2lkIHtcbiAgICB0aGlzLnlBeGlzV2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlWEF4aXNIZWlnaHQoeyBoZWlnaHQgfSk6IHZvaWQge1xuICAgIHRoaXMueEF4aXNIZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIG9uQ2xpY2soZGF0YTogSUJveE1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcbiAgfVxuXG4gIG9uQWN0aXZhdGUoZGF0YTogSUJveE1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KGRhdGEpO1xuICB9XG5cbiAgb25EZWFjdGl2YXRlKGRhdGE6IElCb3hNb2RlbCk6IHZvaWQge1xuICAgIHRoaXMuZGVhY3RpdmF0ZS5lbWl0KGRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMZWdlbmRPcHRpb25zKCk6IExlZ2VuZE9wdGlvbnMge1xuICAgIGNvbnN0IGxlZ2VuZE9wdHM6IExlZ2VuZE9wdGlvbnMgPSB7XG4gICAgICBzY2FsZVR5cGU6IHRoaXMuc2NoZW1lVHlwZSxcbiAgICAgIGNvbG9yczogdGhpcy5jb2xvcnMsXG4gICAgICBkb21haW46IFtdLFxuICAgICAgcG9zaXRpb246IHRoaXMubGVnZW5kUG9zaXRpb24sXG4gICAgICB0aXRsZTogdGhpcy5sZWdlbmRUaXRsZVxuICAgIH07XG4gICAgaWYgKHRoaXMuc2NoZW1lVHlwZSA9PT0gU2NhbGVUeXBlLk9yZGluYWwpIHtcbiAgICAgIGxlZ2VuZE9wdHMuZG9tYWluID0gdGhpcy54RG9tYWluO1xuICAgICAgbGVnZW5kT3B0cy5jb2xvcnMgPSB0aGlzLmNvbG9ycztcbiAgICB9IGVsc2Uge1xuICAgICAgbGVnZW5kT3B0cy5kb21haW4gPSB0aGlzLnlEb21haW47XG4gICAgICBsZWdlbmRPcHRzLmNvbG9ycyA9IHRoaXMuY29sb3JzLnNjYWxlO1xuICAgIH1cbiAgICByZXR1cm4gbGVnZW5kT3B0cztcbiAgfVxufVxuIl19