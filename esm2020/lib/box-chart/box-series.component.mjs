import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { min, max, quantile } from 'd3-array';
import { trigger, transition, style, animate } from '@angular/animations';
import { formatLabel, escapeLabel } from '../common/label.helper';
import { StyleTypes } from '../common/tooltip/style.type';
import { PlacementTypes } from '../common/tooltip/position';
import { ScaleType } from '../common/types/scale-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "./box.component";
import * as i2 from "../common/tooltip/tooltip.directive";
const _c0 = ["ngx-charts-box-series", ""];
export class BoxSeriesComponent {
    constructor() {
        this.animations = true;
        this.tooltipDisabled = false;
        this.gradient = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    onClick(data) {
        this.select.emit(data);
    }
    update() {
        this.updateTooltipSettings();
        const width = this.series && this.series.series.length ? Math.round(this.xScale.bandwidth()) : null;
        const seriesName = this.series.name;
        // Calculate Quantile and Whiskers for each box serie.
        this.counts = this.series.series;
        const mappedCounts = this.counts.map(serie => Number(serie.value));
        this.whiskers = [min(mappedCounts), max(mappedCounts)];
        // We get the group count and must sort it in order to retrieve quantiles.
        const groupCounts = this.counts.map(item => item.value).sort((a, b) => Number(a) - Number(b));
        this.quartiles = this.getBoxQuantiles(groupCounts);
        this.lineCoordinates = this.getLinesCoordinates(seriesName.toString(), this.whiskers, this.quartiles, width);
        const value = this.quartiles[1];
        const formattedLabel = formatLabel(seriesName);
        const box = {
            value,
            data: this.counts,
            label: seriesName,
            formattedLabel,
            width,
            height: 0,
            x: 0,
            y: 0,
            roundEdges: this.roundEdges,
            quartiles: this.quartiles,
            lineCoordinates: this.lineCoordinates
        };
        box.height = Math.abs(this.yScale(this.quartiles[0]) - this.yScale(this.quartiles[2]));
        box.x = this.xScale(seriesName.toString());
        box.y = this.yScale(this.quartiles[2]);
        box.ariaLabel = formattedLabel + ' - Median: ' + value.toLocaleString();
        if (this.colors.scaleType === ScaleType.Ordinal) {
            box.color = this.colors.getColor(seriesName);
        }
        else {
            box.color = this.colors.getColor(this.quartiles[1]);
            box.gradientStops = this.colors.getLinearGradientStops(this.quartiles[0], this.quartiles[2]);
        }
        const tooltipLabel = formattedLabel;
        const formattedTooltipLabel = `
    <span class="tooltip-label">${escapeLabel(tooltipLabel)}</span>
    <span class="tooltip-val">
      • Q1: ${this.quartiles[0]} • Q2: ${this.quartiles[1]} • Q3: ${this.quartiles[2]}<br>
      • Min: ${this.whiskers[0]} • Max: ${this.whiskers[1]}
    </span>`;
        box.tooltipText = this.tooltipDisabled ? undefined : formattedTooltipLabel;
        this.tooltipTitle = this.tooltipDisabled ? undefined : box.tooltipText;
        this.box = box;
    }
    getBoxQuantiles(inputData) {
        return [quantile(inputData, 0.25), quantile(inputData, 0.5), quantile(inputData, 0.75)];
    }
    getLinesCoordinates(seriesName, whiskers, quartiles, barWidth) {
        // The X value is not being centered, so had to sum half the width to align it.
        const commonX = this.xScale(seriesName);
        const offsetX = commonX + barWidth / 2;
        const medianLineWidth = Math.max(barWidth + 4 * this.strokeWidth, 1);
        const whiskerLineWidth = Math.max(barWidth / 3, 1);
        const whiskerZero = this.yScale(whiskers[0]);
        const whiskerOne = this.yScale(whiskers[1]);
        const median = this.yScale(quartiles[1]);
        const topLine = {
            v1: { x: offsetX + whiskerLineWidth / 2, y: whiskerZero },
            v2: { x: offsetX - whiskerLineWidth / 2, y: whiskerZero }
        };
        const medianLine = {
            v1: { x: offsetX + medianLineWidth / 2, y: median },
            v2: { x: offsetX - medianLineWidth / 2, y: median }
        };
        const bottomLine = {
            v1: { x: offsetX + whiskerLineWidth / 2, y: whiskerOne },
            v2: { x: offsetX - whiskerLineWidth / 2, y: whiskerOne }
        };
        const verticalLine = {
            v1: { x: offsetX, y: whiskerZero },
            v2: { x: offsetX, y: whiskerOne }
        };
        return [verticalLine, topLine, medianLine, bottomLine];
    }
    updateTooltipSettings() {
        if (this.tooltipDisabled) {
            this.tooltipPlacement = undefined;
            this.tooltipType = undefined;
        }
        else {
            if (!this.tooltipPlacement) {
                this.tooltipPlacement = PlacementTypes.Top;
            }
            if (!this.tooltipType) {
                this.tooltipType = StyleTypes.tooltip;
            }
        }
    }
}
BoxSeriesComponent.ɵfac = function BoxSeriesComponent_Factory(t) { return new (t || BoxSeriesComponent)(); };
BoxSeriesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BoxSeriesComponent, selectors: [["g", "ngx-charts-box-series", ""]], inputs: { dims: "dims", series: "series", xScale: "xScale", yScale: "yScale", colors: "colors", animations: "animations", strokeColor: "strokeColor", strokeWidth: "strokeWidth", tooltipDisabled: "tooltipDisabled", tooltipTemplate: "tooltipTemplate", tooltipPlacement: "tooltipPlacement", tooltipType: "tooltipType", roundEdges: "roundEdges", gradient: "gradient" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 22, consts: [["ngx-charts-box", "", "ngx-tooltip", "", 3, "width", "height", "x", "y", "roundEdges", "fill", "gradientStops", "strokeColor", "strokeWidth", "data", "lineCoordinates", "gradient", "ariaLabel", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "animations", "select", "activate", "deactivate"]], template: function BoxSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g", 0);
        i0.ɵɵlistener("select", function BoxSeriesComponent_Template__svg_g_select_0_listener($event) { return ctx.onClick($event); })("activate", function BoxSeriesComponent_Template__svg_g_activate_0_listener($event) { return ctx.activate.emit($event); })("deactivate", function BoxSeriesComponent_Template__svg_g_deactivate_0_listener($event) { return ctx.deactivate.emit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@animationState", "active")("@.disabled", !ctx.animations)("width", ctx.box.width)("height", ctx.box.height)("x", ctx.box.x)("y", ctx.box.y)("roundEdges", ctx.box.roundEdges)("fill", ctx.box.color)("gradientStops", ctx.box.gradientStops)("strokeColor", ctx.strokeColor)("strokeWidth", ctx.strokeWidth)("data", ctx.box.data)("lineCoordinates", ctx.box.lineCoordinates)("gradient", ctx.gradient)("ariaLabel", ctx.box.ariaLabel)("tooltipDisabled", ctx.tooltipDisabled)("tooltipPlacement", ctx.tooltipPlacement)("tooltipType", ctx.tooltipType)("tooltipTitle", ctx.tooltipTitle)("tooltipTemplate", ctx.tooltipTemplate)("tooltipContext", ctx.box.data)("animations", ctx.animations);
    } }, directives: [i1.BoxComponent, i2.TooltipDirective], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':leave', [
                    style({
                        opacity: 1
                    }),
                    animate(500, style({ opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BoxSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-box-series]',
                template: `
    <svg:g
      ngx-charts-box
      [@animationState]="'active'"
      [@.disabled]="!animations"
      [width]="box.width"
      [height]="box.height"
      [x]="box.x"
      [y]="box.y"
      [roundEdges]="box.roundEdges"
      [fill]="box.color"
      [gradientStops]="box.gradientStops"
      [strokeColor]="strokeColor"
      [strokeWidth]="strokeWidth"
      [data]="box.data"
      [lineCoordinates]="box.lineCoordinates"
      [gradient]="gradient"
      [ariaLabel]="box.ariaLabel"
      (select)="onClick($event)"
      (activate)="activate.emit($event)"
      (deactivate)="deactivate.emit($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipType]="tooltipType"
      [tooltipTitle]="tooltipTitle"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="box.data"
      [animations]="animations"
    ></svg:g>
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
        }], series: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], colors: [{
            type: Input
        }], animations: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], strokeWidth: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipType: [{
            type: Input
        }], roundEdges: [{
            type: Input
        }], gradient: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LXNlcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvYm94LWNoYXJ0L2JveC1zZXJpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUk5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFnRDVELE1BQU0sT0FBTyxrQkFBa0I7SUE3Qy9CO1FBbURXLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFLakMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUV6QixXQUFNLEdBQTRCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckQsYUFBUSxHQUE0QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZELGVBQVUsR0FBNEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQWdJcEU7SUF2SEMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsT0FBTyxDQUFDLElB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QUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWluLCBtYXgsIHF1YW50aWxlIH0gZnJvbSAnZDMtYXJyYXknO1xuaW1wb3J0IHsgU2NhbGVMaW5lYXIsIFNjYWxlQmFuZCB9IGZyb20gJ2QzLXNjYWxlJztcbmltcG9ydCB7IElCb3hNb2RlbCwgQm94Q2hhcnRTZXJpZXMsIERhdGFJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXJ0LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgSVZlY3RvcjJEIH0gZnJvbSAnLi4vbW9kZWxzL2Nvb3JkaW5hdGVzLm1vZGVsJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb2xvckhlbHBlciB9IGZyb20gJy4uL2NvbW1vbi9jb2xvci5oZWxwZXInO1xuaW1wb3J0IHsgZm9ybWF0TGFiZWwsIGVzY2FwZUxhYmVsIH0gZnJvbSAnLi4vY29tbW9uL2xhYmVsLmhlbHBlcic7XG5pbXBvcnQgeyBTdHlsZVR5cGVzIH0gZnJvbSAnLi4vY29tbW9uL3Rvb2x0aXAvc3R5bGUudHlwZSc7XG5pbXBvcnQgeyBQbGFjZW1lbnRUeXBlcyB9IGZyb20gJy4uL2NvbW1vbi90b29sdGlwL3Bvc2l0aW9uJztcbmltcG9ydCB7IFNjYWxlVHlwZSB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9zY2FsZS10eXBlLmVudW0nO1xuaW1wb3J0IHsgVmlld0RpbWVuc2lvbnMgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvdmlldy1kaW1lbnNpb24uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLWJveC1zZXJpZXNdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOmdcbiAgICAgIG5neC1jaGFydHMtYm94XG4gICAgICBbQGFuaW1hdGlvblN0YXRlXT1cIidhY3RpdmUnXCJcbiAgICAgIFtALmRpc2FibGVkXT1cIiFhbmltYXRpb25zXCJcbiAgICAgIFt3aWR0aF09XCJib3gud2lkdGhcIlxuICAgICAgW2hlaWdodF09XCJib3guaGVpZ2h0XCJcbiAgICAgIFt4XT1cImJveC54XCJcbiAgICAgIFt5XT1cImJveC55XCJcbiAgICAgIFtyb3VuZEVkZ2VzXT1cImJveC5yb3VuZEVkZ2VzXCJcbiAgICAgIFtmaWxsXT1cImJveC5jb2xvclwiXG4gICAgICBbZ3JhZGllbnRTdG9wc109XCJib3guZ3JhZGllbnRTdG9wc1wiXG4gICAgICBbc3Ryb2tlQ29sb3JdPVwic3Ryb2tlQ29sb3JcIlxuICAgICAgW3N0cm9rZVdpZHRoXT1cInN0cm9rZVdpZHRoXCJcbiAgICAgIFtkYXRhXT1cImJveC5kYXRhXCJcbiAgICAgIFtsaW5lQ29vcmRpbmF0ZXNdPVwiYm94LmxpbmVDb29yZGluYXRlc1wiXG4gICAgICBbZ3JhZGllbnRdPVwiZ3JhZGllbnRcIlxuICAgICAgW2FyaWFMYWJlbF09XCJib3guYXJpYUxhYmVsXCJcbiAgICAgIChzZWxlY3QpPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgIChhY3RpdmF0ZSk9XCJhY3RpdmF0ZS5lbWl0KCRldmVudClcIlxuICAgICAgKGRlYWN0aXZhdGUpPVwiZGVhY3RpdmF0ZS5lbWl0KCRldmVudClcIlxuICAgICAgbmd4LXRvb2x0aXBcbiAgICAgIFt0b29sdGlwRGlzYWJsZWRdPVwidG9vbHRpcERpc2FibGVkXCJcbiAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgW3Rvb2x0aXBUeXBlXT1cInRvb2x0aXBUeXBlXCJcbiAgICAgIFt0b29sdGlwVGl0bGVdPVwidG9vbHRpcFRpdGxlXCJcbiAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgIFt0b29sdGlwQ29udGV4dF09XCJib3guZGF0YVwiXG4gICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICA+PC9zdmc6Zz5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhbmltYXRpb25TdGF0ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoNTAwLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQm94U2VyaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGltczogVmlld0RpbWVuc2lvbnM7XG4gIEBJbnB1dCgpIHNlcmllczogQm94Q2hhcnRTZXJpZXM7XG4gIEBJbnB1dCgpIHhTY2FsZTogU2NhbGVCYW5kPHN0cmluZz47XG4gIEBJbnB1dCgpIHlTY2FsZTogU2NhbGVMaW5lYXI8bnVtYmVyLCBudW1iZXI+O1xuICBASW5wdXQoKSBjb2xvcnM6IENvbG9ySGVscGVyO1xuICBASW5wdXQoKSBhbmltYXRpb25zOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgdG9vbHRpcERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudDogUGxhY2VtZW50VHlwZXM7XG4gIEBJbnB1dCgpIHRvb2x0aXBUeXBlOiBTdHlsZVR5cGVzO1xuICBASW5wdXQoKSByb3VuZEVkZ2VzOiBib29sZWFuO1xuICBASW5wdXQoKSBncmFkaWVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxJQm94TW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxJQm94TW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPElCb3hNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgYm94OiBJQm94TW9kZWw7XG4gIGNvdW50czogRGF0YUl0ZW1bXTtcbiAgcXVhcnRpbGVzOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIHdoaXNrZXJzOiBbbnVtYmVyLCBudW1iZXJdO1xuICBsaW5lQ29vcmRpbmF0ZXM6IFtJVmVjdG9yMkQsIElWZWN0b3IyRCwgSVZlY3RvcjJELCBJVmVjdG9yMkRdO1xuICB0b29sdGlwVGl0bGU6IHN0cmluZztcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIG9uQ2xpY2soZGF0YTogSUJveE1vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVRvb2x0aXBTZXR0aW5ncygpO1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zZXJpZXMgJiYgdGhpcy5zZXJpZXMuc2VyaWVzLmxlbmd0aCA/IE1hdGgucm91bmQodGhpcy54U2NhbGUuYmFuZHdpZHRoKCkpIDogbnVsbDtcbiAgICBjb25zdCBzZXJpZXNOYW1lID0gdGhpcy5zZXJpZXMubmFtZTtcblxuICAgIC8vIENhbGN1bGF0ZSBRdWFudGlsZSBhbmQgV2hpc2tlcnMgZm9yIGVhY2ggYm94IHNlcmllLlxuICAgIHRoaXMuY291bnRzID0gdGhpcy5zZXJpZXMuc2VyaWVzO1xuXG4gICAgY29uc3QgbWFwcGVkQ291bnRzID0gdGhpcy5jb3VudHMubWFwKHNlcmllID0+IE51bWJlcihzZXJpZS52YWx1ZSkpO1xuICAgIHRoaXMud2hpc2tlcnMgPSBbbWluKG1hcHBlZENvdW50cyksIG1heChtYXBwZWRDb3VudHMpXTtcblxuICAgIC8vIFdlIGdldCB0aGUgZ3JvdXAgY291bnQgYW5kIG11c3Qgc29ydCBpdCBpbiBvcmRlciB0byByZXRyaWV2ZSBxdWFudGlsZXMuXG4gICAgY29uc3QgZ3JvdXBDb3VudHMgPSB0aGlzLmNvdW50cy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKS5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYSkgLSBOdW1iZXIoYikpO1xuICAgIHRoaXMucXVhcnRpbGVzID0gdGhpcy5nZXRCb3hRdWFudGlsZXMoZ3JvdXBDb3VudHMpO1xuICAgIHRoaXMubGluZUNvb3JkaW5hdGVzID0gdGhpcy5nZXRMaW5lc0Nvb3JkaW5hdGVzKHNlcmllc05hbWUudG9TdHJpbmcoKSwgdGhpcy53aGlza2VycywgdGhpcy5xdWFydGlsZXMsIHdpZHRoKTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5xdWFydGlsZXNbMV07XG4gICAgY29uc3QgZm9ybWF0dGVkTGFiZWwgPSBmb3JtYXRMYWJlbChzZXJpZXNOYW1lKTtcbiAgICBjb25zdCBib3g6IElCb3hNb2RlbCA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgZGF0YTogdGhpcy5jb3VudHMsXG4gICAgICBsYWJlbDogc2VyaWVzTmFtZSxcbiAgICAgIGZvcm1hdHRlZExhYmVsLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHJvdW5kRWRnZXM6IHRoaXMucm91bmRFZGdlcyxcbiAgICAgIHF1YXJ0aWxlczogdGhpcy5xdWFydGlsZXMsXG4gICAgICBsaW5lQ29vcmRpbmF0ZXM6IHRoaXMubGluZUNvb3JkaW5hdGVzXG4gICAgfTtcblxuICAgIGJveC5oZWlnaHQgPSBNYXRoLmFicyh0aGlzLnlTY2FsZSh0aGlzLnF1YXJ0aWxlc1swXSkgLSB0aGlzLnlTY2FsZSh0aGlzLnF1YXJ0aWxlc1syXSkpO1xuICAgIGJveC54ID0gdGhpcy54U2NhbGUoc2VyaWVzTmFtZS50b1N0cmluZygpKTtcbiAgICBib3gueSA9IHRoaXMueVNjYWxlKHRoaXMucXVhcnRpbGVzWzJdKTtcbiAgICBib3guYXJpYUxhYmVsID0gZm9ybWF0dGVkTGFiZWwgKyAnIC0gTWVkaWFuOiAnICsgdmFsdWUudG9Mb2NhbGVTdHJpbmcoKTtcblxuICAgIGlmICh0aGlzLmNvbG9ycy5zY2FsZVR5cGUgPT09IFNjYWxlVHlwZS5PcmRpbmFsKSB7XG4gICAgICBib3guY29sb3IgPSB0aGlzLmNvbG9ycy5nZXRDb2xvcihzZXJpZXNOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LmNvbG9yID0gdGhpcy5jb2xvcnMuZ2V0Q29sb3IodGhpcy5xdWFydGlsZXNbMV0pO1xuICAgICAgYm94LmdyYWRpZW50U3RvcHMgPSB0aGlzLmNvbG9ycy5nZXRMaW5lYXJHcmFkaWVudFN0b3BzKHRoaXMucXVhcnRpbGVzWzBdLCB0aGlzLnF1YXJ0aWxlc1syXSk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9vbHRpcExhYmVsID0gZm9ybWF0dGVkTGFiZWw7XG4gICAgY29uc3QgZm9ybWF0dGVkVG9vbHRpcExhYmVsID0gYFxuICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC1sYWJlbFwiPiR7ZXNjYXBlTGFiZWwodG9vbHRpcExhYmVsKX08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLXZhbFwiPlxuICAgICAg4oCiIFExOiAke3RoaXMucXVhcnRpbGVzWzBdfSDigKIgUTI6ICR7dGhpcy5xdWFydGlsZXNbMV19IOKAoiBRMzogJHt0aGlzLnF1YXJ0aWxlc1syXX08YnI+XG4gICAgICDigKIgTWluOiAke3RoaXMud2hpc2tlcnNbMF19IOKAoiBNYXg6ICR7dGhpcy53aGlza2Vyc1sxXX1cbiAgICA8L3NwYW4+YDtcblxuICAgIGJveC50b29sdGlwVGV4dCA9IHRoaXMudG9vbHRpcERpc2FibGVkID8gdW5kZWZpbmVkIDogZm9ybWF0dGVkVG9vbHRpcExhYmVsO1xuICAgIHRoaXMudG9vbHRpcFRpdGxlID0gdGhpcy50b29sdGlwRGlzYWJsZWQgPyB1bmRlZmluZWQgOiBib3gudG9vbHRpcFRleHQ7XG5cbiAgICB0aGlzLmJveCA9IGJveDtcbiAgfVxuXG4gIGdldEJveFF1YW50aWxlcyhpbnB1dERhdGE6IEFycmF5PG51bWJlciB8IERhdGU+KTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgICByZXR1cm4gW3F1YW50aWxlKGlucHV0RGF0YSwgMC4yNSksIHF1YW50aWxlKGlucHV0RGF0YSwgMC41KSwgcXVhbnRpbGUoaW5wdXREYXRhLCAwLjc1KV07XG4gIH1cblxuICBnZXRMaW5lc0Nvb3JkaW5hdGVzKFxuICAgIHNlcmllc05hbWU6IHN0cmluZyxcbiAgICB3aGlza2VyczogW251bWJlciwgbnVtYmVyXSxcbiAgICBxdWFydGlsZXM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcbiAgICBiYXJXaWR0aDogbnVtYmVyXG4gICk6IFtJVmVjdG9yMkQsIElWZWN0b3IyRCwgSVZlY3RvcjJELCBJVmVjdG9yMkRdIHtcbiAgICAvLyBUaGUgWCB2YWx1ZSBpcyBub3QgYmVpbmcgY2VudGVyZWQsIHNvIGhhZCB0byBzdW0gaGFsZiB0aGUgd2lkdGggdG8gYWxpZ24gaXQuXG4gICAgY29uc3QgY29tbW9uWCA9IHRoaXMueFNjYWxlKHNlcmllc05hbWUpO1xuICAgIGNvbnN0IG9mZnNldFggPSBjb21tb25YICsgYmFyV2lkdGggLyAyO1xuXG4gICAgY29uc3QgbWVkaWFuTGluZVdpZHRoID0gTWF0aC5tYXgoYmFyV2lkdGggKyA0ICogdGhpcy5zdHJva2VXaWR0aCwgMSk7XG4gICAgY29uc3Qgd2hpc2tlckxpbmVXaWR0aCA9IE1hdGgubWF4KGJhcldpZHRoIC8gMywgMSk7XG5cbiAgICBjb25zdCB3aGlza2VyWmVybyA9IHRoaXMueVNjYWxlKHdoaXNrZXJzWzBdKTtcbiAgICBjb25zdCB3aGlza2VyT25lID0gdGhpcy55U2NhbGUod2hpc2tlcnNbMV0pO1xuICAgIGNvbnN0IG1lZGlhbiA9IHRoaXMueVNjYWxlKHF1YXJ0aWxlc1sxXSk7XG5cbiAgICBjb25zdCB0b3BMaW5lOiBJVmVjdG9yMkQgPSB7XG4gICAgICB2MTogeyB4OiBvZmZzZXRYICsgd2hpc2tlckxpbmVXaWR0aCAvIDIsIHk6IHdoaXNrZXJaZXJvIH0sXG4gICAgICB2MjogeyB4OiBvZmZzZXRYIC0gd2hpc2tlckxpbmVXaWR0aCAvIDIsIHk6IHdoaXNrZXJaZXJvIH1cbiAgICB9O1xuICAgIGNvbnN0IG1lZGlhbkxpbmU6IElWZWN0b3IyRCA9IHtcbiAgICAgIHYxOiB7IHg6IG9mZnNldFggKyBtZWRpYW5MaW5lV2lkdGggLyAyLCB5OiBtZWRpYW4gfSxcbiAgICAgIHYyOiB7IHg6IG9mZnNldFggLSBtZWRpYW5MaW5lV2lkdGggLyAyLCB5OiBtZWRpYW4gfVxuICAgIH07XG4gICAgY29uc3QgYm90dG9tTGluZTogSVZlY3RvcjJEID0ge1xuICAgICAgdjE6IHsgeDogb2Zmc2V0WCArIHdoaXNrZXJMaW5lV2lkdGggLyAyLCB5OiB3aGlza2VyT25lIH0sXG4gICAgICB2MjogeyB4OiBvZmZzZXRYIC0gd2hpc2tlckxpbmVXaWR0aCAvIDIsIHk6IHdoaXNrZXJPbmUgfVxuICAgIH07XG4gICAgY29uc3QgdmVydGljYWxMaW5lOiBJVmVjdG9yMkQgPSB7XG4gICAgICB2MTogeyB4OiBvZmZzZXRYLCB5OiB3aGlza2VyWmVybyB9LFxuICAgICAgdjI6IHsgeDogb2Zmc2V0WCwgeTogd2hpc2tlck9uZSB9XG4gICAgfTtcbiAgICByZXR1cm4gW3ZlcnRpY2FsTGluZSwgdG9wTGluZSwgbWVkaWFuTGluZSwgYm90dG9tTGluZV07XG4gIH1cblxuICB1cGRhdGVUb29sdGlwU2V0dGluZ3MoKSB7XG4gICAgaWYgKHRoaXMudG9vbHRpcERpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvb2x0aXBQbGFjZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnRvb2x0aXBUeXBlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMudG9vbHRpcFBsYWNlbWVudCkge1xuICAgICAgICB0aGlzLnRvb2x0aXBQbGFjZW1lbnQgPSBQbGFjZW1lbnRUeXBlcy5Ub3A7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudG9vbHRpcFR5cGUpIHtcbiAgICAgICAgdGhpcy50b29sdGlwVHlwZSA9IFN0eWxlVHlwZXMudG9vbHRpcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==