import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { formatLabel, escapeLabel } from '../common/label.helper';
import { PlacementTypes } from '../common/tooltip/position';
import { StyleTypes } from '../common/tooltip/style.type';
import { BarChartType } from './types/bar-chart-type.enum';
import { D0Types } from './types/d0-type.enum';
import { BarOrientation } from '../common/types/bar-orientation.enum';
import { ScaleType } from '../common/types/scale-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./bar.component";
import * as i3 from "../common/tooltip/tooltip.directive";
import * as i4 from "./bar-label.component";
const _c0 = ["ngx-charts-series-vertical", ""];
function SeriesVerticalComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 2);
    i0.ɵɵlistener("select", function SeriesVerticalComponent__svg_g_0_Template__svg_g_select_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onClick($event); })("activate", function SeriesVerticalComponent__svg_g_0_Template__svg_g_activate_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.activate.emit($event); })("deactivate", function SeriesVerticalComponent__svg_g_0_Template__svg_g_deactivate_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.deactivate.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bar_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@animationState", "active")("@.disabled", !ctx_r0.animations)("width", bar_r2.width)("height", bar_r2.height)("x", bar_r2.x)("y", bar_r2.y)("fill", bar_r2.color)("stops", bar_r2.gradientStops)("data", bar_r2.data)("orientation", ctx_r0.barOrientation.Vertical)("roundEdges", bar_r2.roundEdges)("gradient", ctx_r0.gradient)("ariaLabel", bar_r2.ariaLabel)("isActive", ctx_r0.isActive(bar_r2.data))("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", ctx_r0.tooltipPlacement)("tooltipType", ctx_r0.tooltipType)("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : bar_r2.tooltipText)("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", bar_r2.data)("noBarWhenZero", ctx_r0.noBarWhenZero)("animations", ctx_r0.animations);
} }
function SeriesVerticalComponent__svg_g_1__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 4);
    i0.ɵɵlistener("dimensionsChanged", function SeriesVerticalComponent__svg_g_1__svg_g_1_Template__svg_g_dimensionsChanged_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r11); const i_r9 = restoredCtx.index; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.dataLabelHeightChanged.emit({ size: $event, index: i_r9 }); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const b_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("barX", b_r8.x)("barY", b_r8.y)("barWidth", b_r8.width)("barHeight", b_r8.height)("value", b_r8.total)("valueFormatting", ctx_r7.dataLabelFormatting)("orientation", ctx_r7.barOrientation.Vertical);
} }
function SeriesVerticalComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵtemplate(1, SeriesVerticalComponent__svg_g_1__svg_g_1_Template, 1, 7, "g", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.barsForDataLabels)("ngForTrackBy", ctx_r1.trackDataLabelBy);
} }
export class SeriesVerticalComponent {
    constructor() {
        this.type = BarChartType.Standard;
        this.tooltipDisabled = false;
        this.animations = true;
        this.showDataLabel = false;
        this.noBarWhenZero = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.dataLabelHeightChanged = new EventEmitter();
        this.barsForDataLabels = [];
        this.barOrientation = BarOrientation;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.updateTooltipSettings();
        let width;
        if (this.series.length) {
            width = this.xScale.bandwidth();
        }
        width = Math.round(width);
        const yScaleMin = Math.max(this.yScale.domain()[0], 0);
        const d0 = {
            [D0Types.positive]: 0,
            [D0Types.negative]: 0
        };
        let d0Type = D0Types.positive;
        let total;
        if (this.type === BarChartType.Normalized) {
            total = this.series.map(d => d.value).reduce((sum, d) => sum + d, 0);
        }
        this.bars = this.series.map((d, index) => {
            let value = d.value;
            const label = this.getLabel(d);
            const formattedLabel = formatLabel(label);
            const roundEdges = this.roundEdges;
            d0Type = value > 0 ? D0Types.positive : D0Types.negative;
            const bar = {
                value,
                label,
                roundEdges,
                data: d,
                width,
                formattedLabel,
                height: 0,
                x: 0,
                y: 0
            };
            if (this.type === BarChartType.Standard) {
                bar.height = Math.abs(this.yScale(value) - this.yScale(yScaleMin));
                bar.x = this.xScale(label);
                if (value < 0) {
                    bar.y = this.yScale(0);
                }
                else {
                    bar.y = this.yScale(value);
                }
            }
            else if (this.type === BarChartType.Stacked) {
                const offset0 = d0[d0Type];
                const offset1 = offset0 + value;
                d0[d0Type] += value;
                bar.height = this.yScale(offset0) - this.yScale(offset1);
                bar.x = 0;
                bar.y = this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
            }
            else if (this.type === BarChartType.Normalized) {
                let offset0 = d0[d0Type];
                let offset1 = offset0 + value;
                d0[d0Type] += value;
                if (total > 0) {
                    offset0 = (offset0 * 100) / total;
                    offset1 = (offset1 * 100) / total;
                }
                else {
                    offset0 = 0;
                    offset1 = 0;
                }
                bar.height = this.yScale(offset0) - this.yScale(offset1);
                bar.x = 0;
                bar.y = this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
                value = (offset1 - offset0).toFixed(2) + '%';
            }
            if (this.colors.scaleType === ScaleType.Ordinal) {
                bar.color = this.colors.getColor(label);
            }
            else {
                if (this.type === BarChartType.Standard) {
                    bar.color = this.colors.getColor(value);
                    bar.gradientStops = this.colors.getLinearGradientStops(value);
                }
                else {
                    bar.color = this.colors.getColor(bar.offset1);
                    bar.gradientStops = this.colors.getLinearGradientStops(bar.offset1, bar.offset0);
                }
            }
            let tooltipLabel = formattedLabel;
            bar.ariaLabel = formattedLabel + ' ' + value.toLocaleString();
            if (this.seriesName !== null && this.seriesName !== undefined) {
                tooltipLabel = `${this.seriesName} • ${formattedLabel}`;
                bar.data.series = this.seriesName;
                bar.ariaLabel = this.seriesName + ' ' + bar.ariaLabel;
            }
            bar.tooltipText = this.tooltipDisabled
                ? undefined
                : `
        <span class="tooltip-label">${escapeLabel(tooltipLabel)}</span>
        <span class="tooltip-val">${this.dataLabelFormatting ? this.dataLabelFormatting(value) : value.toLocaleString()}</span>
      `;
            return bar;
        });
        this.updateDataLabels();
    }
    updateDataLabels() {
        if (this.type === BarChartType.Stacked) {
            this.barsForDataLabels = [];
            const section = {};
            section.series = this.seriesName;
            const totalPositive = this.series.map(d => d.value).reduce((sum, d) => (d > 0 ? sum + d : sum), 0);
            const totalNegative = this.series.map(d => d.value).reduce((sum, d) => (d < 0 ? sum + d : sum), 0);
            section.total = totalPositive + totalNegative;
            section.x = 0;
            section.y = 0;
            if (section.total > 0) {
                section.height = this.yScale(totalPositive);
            }
            else {
                section.height = this.yScale(totalNegative);
            }
            section.width = this.xScale.bandwidth();
            this.barsForDataLabels.push(section);
        }
        else {
            this.barsForDataLabels = this.series.map(d => {
                const section = {};
                section.series = this.seriesName ?? d.label;
                section.total = d.value;
                section.x = this.xScale(d.label);
                section.y = this.yScale(0);
                section.height = this.yScale(section.total) - this.yScale(0);
                section.width = this.xScale.bandwidth();
                return section;
            });
        }
    }
    updateTooltipSettings() {
        this.tooltipPlacement = this.tooltipDisabled ? undefined : PlacementTypes.Top;
        this.tooltipType = this.tooltipDisabled ? undefined : StyleTypes.tooltip;
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(active => {
            return entry.name === active.name && entry.value === active.value;
        });
        return item !== undefined;
    }
    onClick(data) {
        this.select.emit(data);
    }
    getLabel(dataItem) {
        if (dataItem.label) {
            return dataItem.label;
        }
        return dataItem.name;
    }
    trackBy(index, bar) {
        return bar.label;
    }
    trackDataLabelBy(index, barLabel) {
        return index + '#' + barLabel.series + '#' + barLabel.total;
    }
}
SeriesVerticalComponent.ɵfac = function SeriesVerticalComponent_Factory(t) { return new (t || SeriesVerticalComponent)(); };
SeriesVerticalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SeriesVerticalComponent, selectors: [["g", "ngx-charts-series-vertical", ""]], inputs: { dims: "dims", type: "type", series: "series", xScale: "xScale", yScale: "yScale", colors: "colors", gradient: "gradient", activeEntries: "activeEntries", seriesName: "seriesName", tooltipDisabled: "tooltipDisabled", tooltipTemplate: "tooltipTemplate", roundEdges: "roundEdges", animations: "animations", showDataLabel: "showDataLabel", dataLabelFormatting: "dataLabelFormatting", noBarWhenZero: "noBarWhenZero" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate", dataLabelHeightChanged: "dataLabelHeightChanged" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 3, consts: [["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "ariaLabel", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "animations", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["ngx-charts-bar", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "fill", "stops", "data", "orientation", "roundEdges", "gradient", "ariaLabel", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "noBarWhenZero", "animations", "select", "activate", "deactivate"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-bar-label", "", 3, "barX", "barY", "barWidth", "barHeight", "value", "valueFormatting", "orientation", "dimensionsChanged"]], template: function SeriesVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SeriesVerticalComponent__svg_g_0_Template, 1, 22, "g", 0);
        i0.ɵɵtemplate(1, SeriesVerticalComponent__svg_g_1_Template, 2, 2, "g", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.bars)("ngForTrackBy", ctx.trackBy);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showDataLabel);
    } }, directives: [i1.NgForOf, i1.NgIf, i2.BarComponent, i3.TooltipDirective, i4.BarLabelComponent], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1
                    }),
                    animate(500, style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeriesVerticalComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-series-vertical]',
                template: `
    <svg:g
      ngx-charts-bar
      *ngFor="let bar of bars; trackBy: trackBy"
      [@animationState]="'active'"
      [@.disabled]="!animations"
      [width]="bar.width"
      [height]="bar.height"
      [x]="bar.x"
      [y]="bar.y"
      [fill]="bar.color"
      [stops]="bar.gradientStops"
      [data]="bar.data"
      [orientation]="barOrientation.Vertical"
      [roundEdges]="bar.roundEdges"
      [gradient]="gradient"
      [ariaLabel]="bar.ariaLabel"
      [isActive]="isActive(bar.data)"
      (select)="onClick($event)"
      (activate)="activate.emit($event)"
      (deactivate)="deactivate.emit($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipType]="tooltipType"
      [tooltipTitle]="tooltipTemplate ? undefined : bar.tooltipText"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="bar.data"
      [noBarWhenZero]="noBarWhenZero"
      [animations]="animations"
    ></svg:g>
    <svg:g *ngIf="showDataLabel">
      <svg:g
        ngx-charts-bar-label
        *ngFor="let b of barsForDataLabels; let i = index; trackBy: trackDataLabelBy"
        [barX]="b.x"
        [barY]="b.y"
        [barWidth]="b.width"
        [barHeight]="b.height"
        [value]="b.total"
        [valueFormatting]="dataLabelFormatting"
        [orientation]="barOrientation.Vertical"
        (dimensionsChanged)="dataLabelHeightChanged.emit({ size: $event, index: i })"
      />
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':leave', [
                            style({
                                opacity: 1
                            }),
                            animate(500, style({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], null, { dims: [{
            type: Input
        }], type: [{
            type: Input
        }], series: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], colors: [{
            type: Input
        }], gradient: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], seriesName: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], roundEdges: [{
            type: Input
        }], animations: [{
            type: Input
        }], showDataLabel: [{
            type: Input
        }], dataLabelFormatting: [{
            type: Input
        }], noBarWhenZero: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], dataLabelHeightChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLXZlcnRpY2FsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9iYXItY2hhcnQvc2VyaWVzLXZlcnRpY2FsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLHVCQUF1QixFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUcvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7Ozs7SUFLeEQsbUJBNkJDO0lBN0JELDRCQTZCQztJQVpDLCtLQUFVLHNCQUFlLElBQUMsc0tBQ2QsNEJBQXFCLElBRFAsMEtBRVosOEJBQXVCLElBRlg7SUFZM0IsaUJBQVE7Ozs7SUExQlAsMENBQTRCLGtDQUFBLHVCQUFBLHlCQUFBLGVBQUEsZUFBQSxzQkFBQSwrQkFBQSxxQkFBQSwrQ0FBQSxpQ0FBQSw2QkFBQSwrQkFBQSwwQ0FBQSwyQ0FBQSw2Q0FBQSxtQ0FBQSx5RUFBQSwyQ0FBQSwrQkFBQSx1Q0FB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SztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csbUJBQW1CO2tCQUEzQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBQ0csc0JBQXNCO2tCQUEvQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgZm9ybWF0TGFiZWwsIGVzY2FwZUxhYmVsIH0gZnJvbSAnLi4vY29tbW9uL2xhYmVsLmhlbHBlcic7XG5pbXBvcnQgeyBEYXRhSXRlbSwgU3RyaW5nT3JOdW1iZXJPckRhdGUgfSBmcm9tICcuLi9tb2RlbHMvY2hhcnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBQbGFjZW1lbnRUeXBlcyB9IGZyb20gJy4uL2NvbW1vbi90b29sdGlwL3Bvc2l0aW9uJztcbmltcG9ydCB7IFN0eWxlVHlwZXMgfSBmcm9tICcuLi9jb21tb24vdG9vbHRpcC9zdHlsZS50eXBlJztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yLmhlbHBlcic7XG5pbXBvcnQgeyBCYXJDaGFydFR5cGUgfSBmcm9tICcuL3R5cGVzL2Jhci1jaGFydC10eXBlLmVudW0nO1xuaW1wb3J0IHsgRDBUeXBlcyB9IGZyb20gJy4vdHlwZXMvZDAtdHlwZS5lbnVtJztcbmltcG9ydCB7IEJhciB9IGZyb20gJy4vdHlwZXMvYmFyLm1vZGVsJztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3ZpZXctZGltZW5zaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBCYXJPcmllbnRhdGlvbiB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9iYXItb3JpZW50YXRpb24uZW51bSc7XG5pbXBvcnQgeyBTY2FsZVR5cGUgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvc2NhbGUtdHlwZS5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLXNlcmllcy12ZXJ0aWNhbF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6Z1xuICAgICAgbmd4LWNoYXJ0cy1iYXJcbiAgICAgICpuZ0Zvcj1cImxldCBiYXIgb2YgYmFyczsgdHJhY2tCeTogdHJhY2tCeVwiXG4gICAgICBbQGFuaW1hdGlvblN0YXRlXT1cIidhY3RpdmUnXCJcbiAgICAgIFtALmRpc2FibGVkXT1cIiFhbmltYXRpb25zXCJcbiAgICAgIFt3aWR0aF09XCJiYXIud2lkdGhcIlxuICAgICAgW2hlaWdodF09XCJiYXIuaGVpZ2h0XCJcbiAgICAgIFt4XT1cImJhci54XCJcbiAgICAgIFt5XT1cImJhci55XCJcbiAgICAgIFtmaWxsXT1cImJhci5jb2xvclwiXG4gICAgICBbc3RvcHNdPVwiYmFyLmdyYWRpZW50U3RvcHNcIlxuICAgICAgW2RhdGFdPVwiYmFyLmRhdGFcIlxuICAgICAgW29yaWVudGF0aW9uXT1cImJhck9yaWVudGF0aW9uLlZlcnRpY2FsXCJcbiAgICAgIFtyb3VuZEVkZ2VzXT1cImJhci5yb3VuZEVkZ2VzXCJcbiAgICAgIFtncmFkaWVudF09XCJncmFkaWVudFwiXG4gICAgICBbYXJpYUxhYmVsXT1cImJhci5hcmlhTGFiZWxcIlxuICAgICAgW2lzQWN0aXZlXT1cImlzQWN0aXZlKGJhci5kYXRhKVwiXG4gICAgICAoc2VsZWN0KT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAoYWN0aXZhdGUpPVwiYWN0aXZhdGUuZW1pdCgkZXZlbnQpXCJcbiAgICAgIChkZWFjdGl2YXRlKT1cImRlYWN0aXZhdGUuZW1pdCgkZXZlbnQpXCJcbiAgICAgIG5neC10b29sdGlwXG4gICAgICBbdG9vbHRpcERpc2FibGVkXT1cInRvb2x0aXBEaXNhYmxlZFwiXG4gICAgICBbdG9vbHRpcFBsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICAgIFt0b29sdGlwVHlwZV09XCJ0b29sdGlwVHlwZVwiXG4gICAgICBbdG9vbHRpcFRpdGxlXT1cInRvb2x0aXBUZW1wbGF0ZSA/IHVuZGVmaW5lZCA6IGJhci50b29sdGlwVGV4dFwiXG4gICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICBbdG9vbHRpcENvbnRleHRdPVwiYmFyLmRhdGFcIlxuICAgICAgW25vQmFyV2hlblplcm9dPVwibm9CYXJXaGVuWmVyb1wiXG4gICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICA+PC9zdmc6Zz5cbiAgICA8c3ZnOmcgKm5nSWY9XCJzaG93RGF0YUxhYmVsXCI+XG4gICAgICA8c3ZnOmdcbiAgICAgICAgbmd4LWNoYXJ0cy1iYXItbGFiZWxcbiAgICAgICAgKm5nRm9yPVwibGV0IGIgb2YgYmFyc0ZvckRhdGFMYWJlbHM7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrRGF0YUxhYmVsQnlcIlxuICAgICAgICBbYmFyWF09XCJiLnhcIlxuICAgICAgICBbYmFyWV09XCJiLnlcIlxuICAgICAgICBbYmFyV2lkdGhdPVwiYi53aWR0aFwiXG4gICAgICAgIFtiYXJIZWlnaHRdPVwiYi5oZWlnaHRcIlxuICAgICAgICBbdmFsdWVdPVwiYi50b3RhbFwiXG4gICAgICAgIFt2YWx1ZUZvcm1hdHRpbmddPVwiZGF0YUxhYmVsRm9ybWF0dGluZ1wiXG4gICAgICAgIFtvcmllbnRhdGlvbl09XCJiYXJPcmllbnRhdGlvbi5WZXJ0aWNhbFwiXG4gICAgICAgIChkaW1lbnNpb25zQ2hhbmdlZCk9XCJkYXRhTGFiZWxIZWlnaHRDaGFuZ2VkLmVtaXQoeyBzaXplOiAkZXZlbnQsIGluZGV4OiBpIH0pXCJcbiAgICAgIC8+XG4gICAgPC9zdmc6Zz5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhbmltYXRpb25TdGF0ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoNTAwLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VyaWVzVmVydGljYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkaW1zOiBWaWV3RGltZW5zaW9ucztcbiAgQElucHV0KCkgdHlwZTogQmFyQ2hhcnRUeXBlID0gQmFyQ2hhcnRUeXBlLlN0YW5kYXJkO1xuICBASW5wdXQoKSBzZXJpZXM6IERhdGFJdGVtW107XG4gIEBJbnB1dCgpIHhTY2FsZTtcbiAgQElucHV0KCkgeVNjYWxlO1xuICBASW5wdXQoKSBjb2xvcnM6IENvbG9ySGVscGVyO1xuICBASW5wdXQoKSBncmFkaWVudDogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aXZlRW50cmllczogRGF0YUl0ZW1bXTtcbiAgQElucHV0KCkgc2VyaWVzTmFtZTogU3RyaW5nT3JOdW1iZXJPckRhdGU7XG4gIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIHJvdW5kRWRnZXM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFuaW1hdGlvbnM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzaG93RGF0YUxhYmVsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRhdGFMYWJlbEZvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgbm9CYXJXaGVuWmVybzogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPERhdGFJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRhdGFMYWJlbEhlaWdodENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdG9vbHRpcFBsYWNlbWVudDogUGxhY2VtZW50VHlwZXM7XG4gIHRvb2x0aXBUeXBlOiBTdHlsZVR5cGVzO1xuXG4gIGJhcnM6IEJhcltdO1xuICBiYXJzRm9yRGF0YUxhYmVsczogQXJyYXk8eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHRvdGFsOiBudW1iZXI7IHNlcmllczogc3RyaW5nIH0+ID0gW107XG5cbiAgYmFyT3JpZW50YXRpb24gPSBCYXJPcmllbnRhdGlvbjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVRvb2x0aXBTZXR0aW5ncygpO1xuICAgIGxldCB3aWR0aDtcbiAgICBpZiAodGhpcy5zZXJpZXMubGVuZ3RoKSB7XG4gICAgICB3aWR0aCA9IHRoaXMueFNjYWxlLmJhbmR3aWR0aCgpO1xuICAgIH1cbiAgICB3aWR0aCA9IE1hdGgucm91bmQod2lkdGgpO1xuICAgIGNvbnN0IHlTY2FsZU1pbiA9IE1hdGgubWF4KHRoaXMueVNjYWxlLmRvbWFpbigpWzBdLCAwKTtcblxuICAgIGNvbnN0IGQwID0ge1xuICAgICAgW0QwVHlwZXMucG9zaXRpdmVdOiAwLFxuICAgICAgW0QwVHlwZXMubmVnYXRpdmVdOiAwXG4gICAgfTtcbiAgICBsZXQgZDBUeXBlID0gRDBUeXBlcy5wb3NpdGl2ZTtcblxuICAgIGxldCB0b3RhbDtcbiAgICBpZiAodGhpcy50eXBlID09PSBCYXJDaGFydFR5cGUuTm9ybWFsaXplZCkge1xuICAgICAgdG90YWwgPSB0aGlzLnNlcmllcy5tYXAoZCA9PiBkLnZhbHVlKS5yZWR1Y2UoKHN1bSwgZCkgPT4gc3VtICsgZCwgMCk7XG4gICAgfVxuXG4gICAgdGhpcy5iYXJzID0gdGhpcy5zZXJpZXMubWFwKChkLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZC52YWx1ZSBhcyBhbnk7XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoZCk7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRMYWJlbCA9IGZvcm1hdExhYmVsKGxhYmVsKTtcbiAgICAgIGNvbnN0IHJvdW5kRWRnZXMgPSB0aGlzLnJvdW5kRWRnZXM7XG4gICAgICBkMFR5cGUgPSB2YWx1ZSA+IDAgPyBEMFR5cGVzLnBvc2l0aXZlIDogRDBUeXBlcy5uZWdhdGl2ZTtcblxuICAgICAgY29uc3QgYmFyOiBhbnkgPSB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBsYWJlbCxcbiAgICAgICAgcm91bmRFZGdlcyxcbiAgICAgICAgZGF0YTogZCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGZvcm1hdHRlZExhYmVsLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09IEJhckNoYXJ0VHlwZS5TdGFuZGFyZCkge1xuICAgICAgICBiYXIuaGVpZ2h0ID0gTWF0aC5hYnModGhpcy55U2NhbGUodmFsdWUpIC0gdGhpcy55U2NhbGUoeVNjYWxlTWluKSk7XG4gICAgICAgIGJhci54ID0gdGhpcy54U2NhbGUobGFiZWwpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICBiYXIueSA9IHRoaXMueVNjYWxlKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJhci55ID0gdGhpcy55U2NhbGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQmFyQ2hhcnRUeXBlLlN0YWNrZWQpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0MCA9IGQwW2QwVHlwZV07XG4gICAgICAgIGNvbnN0IG9mZnNldDEgPSBvZmZzZXQwICsgdmFsdWU7XG4gICAgICAgIGQwW2QwVHlwZV0gKz0gdmFsdWU7XG5cbiAgICAgICAgYmFyLmhlaWdodCA9IHRoaXMueVNjYWxlKG9mZnNldDApIC0gdGhpcy55U2NhbGUob2Zmc2V0MSk7XG4gICAgICAgIGJhci54ID0gMDtcbiAgICAgICAgYmFyLnkgPSB0aGlzLnlTY2FsZShvZmZzZXQxKTtcbiAgICAgICAgYmFyLm9mZnNldDAgPSBvZmZzZXQwO1xuICAgICAgICBiYXIub2Zmc2V0MSA9IG9mZnNldDE7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQmFyQ2hhcnRUeXBlLk5vcm1hbGl6ZWQpIHtcbiAgICAgICAgbGV0IG9mZnNldDAgPSBkMFtkMFR5cGVdO1xuICAgICAgICBsZXQgb2Zmc2V0MSA9IG9mZnNldDAgKyB2YWx1ZTtcbiAgICAgICAgZDBbZDBUeXBlXSArPSB2YWx1ZTtcblxuICAgICAgICBpZiAodG90YWwgPiAwKSB7XG4gICAgICAgICAgb2Zmc2V0MCA9IChvZmZzZXQwICogMTAwKSAvIHRvdGFsO1xuICAgICAgICAgIG9mZnNldDEgPSAob2Zmc2V0MSAqIDEwMCkgLyB0b3RhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmZzZXQwID0gMDtcbiAgICAgICAgICBvZmZzZXQxID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhci5oZWlnaHQgPSB0aGlzLnlTY2FsZShvZmZzZXQwKSAtIHRoaXMueVNjYWxlKG9mZnNldDEpO1xuICAgICAgICBiYXIueCA9IDA7XG4gICAgICAgIGJhci55ID0gdGhpcy55U2NhbGUob2Zmc2V0MSk7XG4gICAgICAgIGJhci5vZmZzZXQwID0gb2Zmc2V0MDtcbiAgICAgICAgYmFyLm9mZnNldDEgPSBvZmZzZXQxO1xuICAgICAgICB2YWx1ZSA9IChvZmZzZXQxIC0gb2Zmc2V0MCkudG9GaXhlZCgyKSArICclJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29sb3JzLnNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLk9yZGluYWwpIHtcbiAgICAgICAgYmFyLmNvbG9yID0gdGhpcy5jb2xvcnMuZ2V0Q29sb3IobGFiZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gQmFyQ2hhcnRUeXBlLlN0YW5kYXJkKSB7XG4gICAgICAgICAgYmFyLmNvbG9yID0gdGhpcy5jb2xvcnMuZ2V0Q29sb3IodmFsdWUpO1xuICAgICAgICAgIGJhci5ncmFkaWVudFN0b3BzID0gdGhpcy5jb2xvcnMuZ2V0TGluZWFyR3JhZGllbnRTdG9wcyh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFyLmNvbG9yID0gdGhpcy5jb2xvcnMuZ2V0Q29sb3IoYmFyLm9mZnNldDEpO1xuICAgICAgICAgIGJhci5ncmFkaWVudFN0b3BzID0gdGhpcy5jb2xvcnMuZ2V0TGluZWFyR3JhZGllbnRTdG9wcyhiYXIub2Zmc2V0MSwgYmFyLm9mZnNldDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCB0b29sdGlwTGFiZWwgPSBmb3JtYXR0ZWRMYWJlbDtcbiAgICAgIGJhci5hcmlhTGFiZWwgPSBmb3JtYXR0ZWRMYWJlbCArICcgJyArIHZhbHVlLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICBpZiAodGhpcy5zZXJpZXNOYW1lICE9PSBudWxsICYmIHRoaXMuc2VyaWVzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRvb2x0aXBMYWJlbCA9IGAke3RoaXMuc2VyaWVzTmFtZX0g4oCiICR7Zm9ybWF0dGVkTGFiZWx9YDtcbiAgICAgICAgYmFyLmRhdGEuc2VyaWVzID0gdGhpcy5zZXJpZXNOYW1lO1xuICAgICAgICBiYXIuYXJpYUxhYmVsID0gdGhpcy5zZXJpZXNOYW1lICsgJyAnICsgYmFyLmFyaWFMYWJlbDtcbiAgICAgIH1cblxuICAgICAgYmFyLnRvb2x0aXBUZXh0ID0gdGhpcy50b29sdGlwRGlzYWJsZWRcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC1sYWJlbFwiPiR7ZXNjYXBlTGFiZWwodG9vbHRpcExhYmVsKX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC12YWxcIj4ke1xuICAgICAgICAgIHRoaXMuZGF0YUxhYmVsRm9ybWF0dGluZyA/IHRoaXMuZGF0YUxhYmVsRm9ybWF0dGluZyh2YWx1ZSkgOiB2YWx1ZS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgIH08L3NwYW4+XG4gICAgICBgO1xuXG4gICAgICByZXR1cm4gYmFyO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVEYXRhTGFiZWxzKCk7XG4gIH1cblxuICB1cGRhdGVEYXRhTGFiZWxzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGUgPT09IEJhckNoYXJ0VHlwZS5TdGFja2VkKSB7XG4gICAgICB0aGlzLmJhcnNGb3JEYXRhTGFiZWxzID0gW107XG4gICAgICBjb25zdCBzZWN0aW9uOiBhbnkgPSB7fTtcbiAgICAgIHNlY3Rpb24uc2VyaWVzID0gdGhpcy5zZXJpZXNOYW1lO1xuICAgICAgY29uc3QgdG90YWxQb3NpdGl2ZSA9IHRoaXMuc2VyaWVzLm1hcChkID0+IGQudmFsdWUpLnJlZHVjZSgoc3VtLCBkKSA9PiAoZCA+IDAgPyBzdW0gKyBkIDogc3VtKSwgMCk7XG4gICAgICBjb25zdCB0b3RhbE5lZ2F0aXZlID0gdGhpcy5zZXJpZXMubWFwKGQgPT4gZC52YWx1ZSkucmVkdWNlKChzdW0sIGQpID0+IChkIDwgMCA/IHN1bSArIGQgOiBzdW0pLCAwKTtcbiAgICAgIHNlY3Rpb24udG90YWwgPSB0b3RhbFBvc2l0aXZlICsgdG90YWxOZWdhdGl2ZTtcbiAgICAgIHNlY3Rpb24ueCA9IDA7XG4gICAgICBzZWN0aW9uLnkgPSAwO1xuICAgICAgaWYgKHNlY3Rpb24udG90YWwgPiAwKSB7XG4gICAgICAgIHNlY3Rpb24uaGVpZ2h0ID0gdGhpcy55U2NhbGUodG90YWxQb3NpdGl2ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWN0aW9uLmhlaWdodCA9IHRoaXMueVNjYWxlKHRvdGFsTmVnYXRpdmUpO1xuICAgICAgfVxuICAgICAgc2VjdGlvbi53aWR0aCA9IHRoaXMueFNjYWxlLmJhbmR3aWR0aCgpO1xuICAgICAgdGhpcy5iYXJzRm9yRGF0YUxhYmVscy5wdXNoKHNlY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhcnNGb3JEYXRhTGFiZWxzID0gdGhpcy5zZXJpZXMubWFwKGQgPT4ge1xuICAgICAgICBjb25zdCBzZWN0aW9uOiBhbnkgPSB7fTtcbiAgICAgICAgc2VjdGlvbi5zZXJpZXMgPSB0aGlzLnNlcmllc05hbWUgPz8gZC5sYWJlbDtcbiAgICAgICAgc2VjdGlvbi50b3RhbCA9IGQudmFsdWU7XG4gICAgICAgIHNlY3Rpb24ueCA9IHRoaXMueFNjYWxlKGQubGFiZWwpO1xuICAgICAgICBzZWN0aW9uLnkgPSB0aGlzLnlTY2FsZSgwKTtcbiAgICAgICAgc2VjdGlvbi5oZWlnaHQgPSB0aGlzLnlTY2FsZShzZWN0aW9uLnRvdGFsKSAtIHRoaXMueVNjYWxlKDApO1xuICAgICAgICBzZWN0aW9uLndpZHRoID0gdGhpcy54U2NhbGUuYmFuZHdpZHRoKCk7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVG9vbHRpcFNldHRpbmdzKCk6IHZvaWQge1xuICAgIHRoaXMudG9vbHRpcFBsYWNlbWVudCA9IHRoaXMudG9vbHRpcERpc2FibGVkID8gdW5kZWZpbmVkIDogUGxhY2VtZW50VHlwZXMuVG9wO1xuICAgIHRoaXMudG9vbHRpcFR5cGUgPSB0aGlzLnRvb2x0aXBEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IFN0eWxlVHlwZXMudG9vbHRpcDtcbiAgfVxuXG4gIGlzQWN0aXZlKGVudHJ5OiBEYXRhSXRlbSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hY3RpdmVFbnRyaWVzKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBpdGVtID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmQoYWN0aXZlID0+IHtcbiAgICAgIHJldHVybiBlbnRyeS5uYW1lID09PSBhY3RpdmUubmFtZSAmJiBlbnRyeS52YWx1ZSA9PT0gYWN0aXZlLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW0gIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9uQ2xpY2soZGF0YTogRGF0YUl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgZ2V0TGFiZWwoZGF0YUl0ZW06IERhdGFJdGVtKTogU3RyaW5nT3JOdW1iZXJPckRhdGUge1xuICAgIGlmIChkYXRhSXRlbS5sYWJlbCkge1xuICAgICAgcmV0dXJuIGRhdGFJdGVtLmxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YUl0ZW0ubmFtZTtcbiAgfVxuXG4gIHRyYWNrQnkoaW5kZXg6IG51bWJlciwgYmFyOiBCYXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBiYXIubGFiZWw7XG4gIH1cblxuICB0cmFja0RhdGFMYWJlbEJ5KGluZGV4OiBudW1iZXIsIGJhckxhYmVsOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBpbmRleCArICcjJyArIGJhckxhYmVsLnNlcmllcyArICcjJyArIGJhckxhYmVsLnRvdGFsO1xuICB9XG59XG4iXX0=