import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { formatLabel, escapeLabel } from './label.helper';
import { id } from '../utils/id';
import { PlacementTypes } from './tooltip/position';
import { StyleTypes } from './tooltip/style.type';
import { BarOrientation } from './types/bar-orientation.enum';
import { ScaleType } from './types/scale-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./svg-linear-gradient.component";
import * as i3 from "./circle.component";
import * as i4 from "./tooltip/tooltip.directive";
const _c0 = ["ngx-charts-circle-series", ""];
function CircleSeriesComponent__svg_g_0__svg_rect_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "rect", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@animationState", "active");
    i0.ɵɵattribute("x", ctx_r1.circle.cx - ctx_r1.circle.radius)("y", ctx_r1.circle.cy)("width", ctx_r1.circle.radius * 2)("height", ctx_r1.circle.height)("fill", ctx_r1.gradientFill);
} }
const _c1 = function (a0) { return { name: a0 }; };
function CircleSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelementStart(1, "defs");
    i0.ɵɵelement(2, "g", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CircleSeriesComponent__svg_g_0__svg_rect_3_Template, 1, 6, "rect", 2);
    i0.ɵɵelementStart(4, "g", 3);
    i0.ɵɵlistener("select", function CircleSeriesComponent__svg_g_0_Template__svg_g_select_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onClick(ctx_r2.circle.data); })("activate", function CircleSeriesComponent__svg_g_0_Template__svg_g_activate_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.activateCircle(); })("deactivate", function CircleSeriesComponent__svg_g_0_Template__svg_g_deactivate_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.deactivateCircle(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("orientation", ctx_r0.barOrientation.Vertical)("name", ctx_r0.gradientId)("stops", ctx_r0.circle.gradientStops);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.barVisible && ctx_r0.type === "standard");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("active", ctx_r0.isActive(i0.ɵɵpureFunction1(19, _c1, ctx_r0.circle.seriesName)));
    i0.ɵɵproperty("cx", ctx_r0.circle.cx)("cy", ctx_r0.circle.cy)("r", ctx_r0.circle.radius)("fill", ctx_r0.circle.color)("pointerEvents", ctx_r0.circle.value === 0 ? "none" : "all")("data", ctx_r0.circle.value)("classNames", ctx_r0.circle.classNames)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", ctx_r0.placementTypes.Top)("tooltipType", ctx_r0.styleTypes.tooltip)("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : ctx_r0.getTooltipText(ctx_r0.circle))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", ctx_r0.circle.data);
} }
export var SeriesType;
(function (SeriesType) {
    SeriesType["Standard"] = "standard";
    SeriesType["Stacked"] = "stacked";
})(SeriesType || (SeriesType = {}));
export class CircleSeriesComponent {
    constructor() {
        this.type = SeriesType.Standard;
        this.tooltipDisabled = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.barVisible = false;
        this.barOrientation = BarOrientation;
        this.placementTypes = PlacementTypes;
        this.styleTypes = StyleTypes;
    }
    ngOnInit() {
        this.gradientId = 'grad' + id().toString();
        this.gradientFill = `url(#${this.gradientId})`;
    }
    ngOnChanges() {
        this.update();
    }
    update() {
        this.circle = this.getActiveCircle();
    }
    getActiveCircle() {
        const indexActiveDataPoint = this.data.series.findIndex(d => {
            const label = d.name;
            return label && this.visibleValue && label.toString() === this.visibleValue.toString() && d.value !== undefined;
        });
        if (indexActiveDataPoint === -1) {
            // No valid point is 'active/hovered over' at this moment.
            return undefined;
        }
        return this.mapDataPointToCircle(this.data.series[indexActiveDataPoint], indexActiveDataPoint);
    }
    mapDataPointToCircle(d, i) {
        const seriesName = this.data.name;
        const value = d.value;
        const label = d.name;
        const tooltipLabel = formatLabel(label);
        let cx;
        if (this.scaleType === ScaleType.Time) {
            cx = this.xScale(label);
        }
        else if (this.scaleType === ScaleType.Linear) {
            cx = this.xScale(Number(label));
        }
        else {
            cx = this.xScale(label);
        }
        const cy = this.yScale(this.type === SeriesType.Standard ? value : d.d1);
        const radius = 5;
        const height = this.yScale.range()[0] - cy;
        const opacity = 1;
        let color;
        if (this.colors.scaleType === ScaleType.Linear) {
            if (this.type === SeriesType.Standard) {
                color = this.colors.getColor(value);
            }
            else {
                color = this.colors.getColor(d.d1);
            }
        }
        else {
            color = this.colors.getColor(seriesName);
        }
        const data = Object.assign({}, d, {
            series: seriesName,
            value,
            name: label
        });
        return {
            classNames: [`circle-data-${i}`],
            value,
            label,
            data,
            cx,
            cy,
            radius,
            height,
            tooltipLabel,
            color,
            opacity,
            seriesName,
            gradientStops: this.getGradientStops(color),
            min: d.min,
            max: d.max
        };
    }
    getTooltipText({ tooltipLabel, value, seriesName, min, max }) {
        return `
      <span class="tooltip-label">${escapeLabel(seriesName)} • ${escapeLabel(tooltipLabel)}</span>
      <span class="tooltip-val">${value.toLocaleString()}${this.getTooltipMinMaxText(min, max)}</span>
    `;
    }
    getTooltipMinMaxText(min, max) {
        if (min !== undefined || max !== undefined) {
            let result = ' (';
            if (min !== undefined) {
                if (max === undefined) {
                    result += '≥';
                }
                result += min.toLocaleString();
                if (max !== undefined) {
                    result += ' - ';
                }
            }
            else if (max !== undefined) {
                result += '≤';
            }
            if (max !== undefined) {
                result += max.toLocaleString();
            }
            result += ')';
            return result;
        }
        else {
            return '';
        }
    }
    getGradientStops(color) {
        return [
            {
                offset: 0,
                color,
                opacity: 0.2
            },
            {
                offset: 100,
                color,
                opacity: 1
            }
        ];
    }
    onClick(data) {
        this.select.emit(data);
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item !== undefined;
    }
    activateCircle() {
        this.barVisible = true;
        this.activate.emit({ name: this.data.name });
    }
    deactivateCircle() {
        this.barVisible = false;
        this.circle.opacity = 0;
        this.deactivate.emit({ name: this.data.name });
    }
}
CircleSeriesComponent.ɵfac = function CircleSeriesComponent_Factory(t) { return new (t || CircleSeriesComponent)(); };
CircleSeriesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CircleSeriesComponent, selectors: [["g", "ngx-charts-circle-series", ""]], inputs: { data: "data", type: "type", xScale: "xScale", yScale: "yScale", colors: "colors", scaleType: "scaleType", visibleValue: "visibleValue", activeEntries: "activeEntries", tooltipDisabled: "tooltipDisabled", tooltipTemplate: "tooltipTemplate" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"], ["class", "tooltip-bar", 4, "ngIf"], ["ngx-charts-circle", "", "ngx-tooltip", "", 1, "circle", 3, "cx", "cy", "r", "fill", "pointerEvents", "data", "classNames", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate"], [1, "tooltip-bar"]], template: function CircleSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CircleSeriesComponent__svg_g_0_Template, 5, 21, "g", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.circle);
    } }, directives: [i1.NgIf, i2.SvgLinearGradientComponent, i3.CircleComponent, i4.TooltipDirective], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':enter', [
                    style({
                        opacity: 0
                    }),
                    animate(250, style({ opacity: 1 }))
                ])
            ])
        ] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CircleSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-circle-series]',
                template: `
    <svg:g *ngIf="circle">
      <defs>
        <svg:g
          ngx-charts-svg-linear-gradient
          [orientation]="barOrientation.Vertical"
          [name]="gradientId"
          [stops]="circle.gradientStops"
        />
      </defs>
      <svg:rect
        *ngIf="barVisible && type === 'standard'"
        [@animationState]="'active'"
        [attr.x]="circle.cx - circle.radius"
        [attr.y]="circle.cy"
        [attr.width]="circle.radius * 2"
        [attr.height]="circle.height"
        [attr.fill]="gradientFill"
        class="tooltip-bar"
      />
      <svg:g
        ngx-charts-circle
        class="circle"
        [cx]="circle.cx"
        [cy]="circle.cy"
        [r]="circle.radius"
        [fill]="circle.color"
        [class.active]="isActive({ name: circle.seriesName })"
        [pointerEvents]="circle.value === 0 ? 'none' : 'all'"
        [data]="circle.value"
        [classNames]="circle.classNames"
        (select)="onClick(circle.data)"
        (activate)="activateCircle()"
        (deactivate)="deactivateCircle()"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="placementTypes.Top"
        [tooltipType]="styleTypes.tooltip"
        [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(circle)"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="circle.data"
      />
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':enter', [
                            style({
                                opacity: 0
                            }),
                            animate(250, style({ opacity: 1 }))
                        ])
                    ])
                ]
            }]
    }], null, { data: [{
            type: Input
        }], type: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], colors: [{
            type: Input
        }], scaleType: [{
            type: Input
        }], visibleValue: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLXNlcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvY29tbW9uL2NpcmNsZS1zZXJpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR1osdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHakMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7SUFxQzlDLDBCQVNFOzs7SUFQQSwwQ0FBNEI7SUFDNUIsNERBQW9DLHVCQUFBLG1DQUFBLGdDQUFBLDZCQUFBOzs7OztJQVp4QyxtQkFBc0I7SUFBdEIseUJBQXNCO0lBQ3BCLDRCQUFNO0lBQ0osdUJBS0U7SUFDSixpQkFBTztJQUNQLHNGQVNFO0lBQ0YsNEJBcUJFO0lBVkEsdUtBQVUsa0NBQW9CLElBQUMsOEpBQ25CLHVCQUFnQixJQURHLGtLQUVqQix5QkFBa0IsSUFGRDtJQVhqQyxpQkFxQkU7SUFDSixpQkFBUTs7O0lBckNGLGVBQXVDO0lBQXZDLDREQUF1QywyQkFBQSxzQ0FBQTtJQU14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O1lBQ0csVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IGZvcm1hdExhYmVsLCBlc2NhcGVMYWJlbCB9IGZyb20gJy4vbGFiZWwuaGVscGVyJztcbmltcG9ydCB7IGlkIH0gZnJvbSAnLi4vdXRpbHMvaWQnO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuL2NvbG9yLmhlbHBlcic7XG5pbXBvcnQgeyBEYXRhSXRlbSwgU2VyaWVzLCBTdHJpbmdPck51bWJlck9yRGF0ZSB9IGZyb20gJy4uL21vZGVscy9jaGFydC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IFBsYWNlbWVudFR5cGVzIH0gZnJvbSAnLi90b29sdGlwL3Bvc2l0aW9uJztcbmltcG9ydCB7IFN0eWxlVHlwZXMgfSBmcm9tICcuL3Rvb2x0aXAvc3R5bGUudHlwZSc7XG5pbXBvcnQgeyBCYXJPcmllbnRhdGlvbiB9IGZyb20gJy4vdHlwZXMvYmFyLW9yaWVudGF0aW9uLmVudW0nO1xuaW1wb3J0IHsgR3JhZGllbnQgfSBmcm9tICcuL3R5cGVzL2dyYWRpZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBTY2FsZVR5cGUgfSBmcm9tICcuL3R5cGVzL3NjYWxlLXR5cGUuZW51bSc7XG5cbmV4cG9ydCBlbnVtIFNlcmllc1R5cGUge1xuICBTdGFuZGFyZCA9ICdzdGFuZGFyZCcsXG4gIFN0YWNrZWQgPSAnc3RhY2tlZCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGUge1xuICBjbGFzc05hbWVzOiBzdHJpbmdbXTtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGF0YTogRGF0YUl0ZW07XG4gIGN4OiBudW1iZXI7XG4gIGN5OiBudW1iZXI7XG4gIHJhZGl1czogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgdG9vbHRpcExhYmVsOiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgc2VyaWVzTmFtZTogc3RyaW5nO1xuICBncmFkaWVudFN0b3BzOiBHcmFkaWVudFtdO1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbbmd4LWNoYXJ0cy1jaXJjbGUtc2VyaWVzXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZzpnICpuZ0lmPVwiY2lyY2xlXCI+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgbmd4LWNoYXJ0cy1zdmctbGluZWFyLWdyYWRpZW50XG4gICAgICAgICAgW29yaWVudGF0aW9uXT1cImJhck9yaWVudGF0aW9uLlZlcnRpY2FsXCJcbiAgICAgICAgICBbbmFtZV09XCJncmFkaWVudElkXCJcbiAgICAgICAgICBbc3RvcHNdPVwiY2lyY2xlLmdyYWRpZW50U3RvcHNcIlxuICAgICAgICAvPlxuICAgICAgPC9kZWZzPlxuICAgICAgPHN2ZzpyZWN0XG4gICAgICAgICpuZ0lmPVwiYmFyVmlzaWJsZSAmJiB0eXBlID09PSAnc3RhbmRhcmQnXCJcbiAgICAgICAgW0BhbmltYXRpb25TdGF0ZV09XCInYWN0aXZlJ1wiXG4gICAgICAgIFthdHRyLnhdPVwiY2lyY2xlLmN4IC0gY2lyY2xlLnJhZGl1c1wiXG4gICAgICAgIFthdHRyLnldPVwiY2lyY2xlLmN5XCJcbiAgICAgICAgW2F0dHIud2lkdGhdPVwiY2lyY2xlLnJhZGl1cyAqIDJcIlxuICAgICAgICBbYXR0ci5oZWlnaHRdPVwiY2lyY2xlLmhlaWdodFwiXG4gICAgICAgIFthdHRyLmZpbGxdPVwiZ3JhZGllbnRGaWxsXCJcbiAgICAgICAgY2xhc3M9XCJ0b29sdGlwLWJhclwiXG4gICAgICAvPlxuICAgICAgPHN2ZzpnXG4gICAgICAgIG5neC1jaGFydHMtY2lyY2xlXG4gICAgICAgIGNsYXNzPVwiY2lyY2xlXCJcbiAgICAgICAgW2N4XT1cImNpcmNsZS5jeFwiXG4gICAgICAgIFtjeV09XCJjaXJjbGUuY3lcIlxuICAgICAgICBbcl09XCJjaXJjbGUucmFkaXVzXCJcbiAgICAgICAgW2ZpbGxdPVwiY2lyY2xlLmNvbG9yXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJpc0FjdGl2ZSh7IG5hbWU6IGNpcmNsZS5zZXJpZXNOYW1lIH0pXCJcbiAgICAgICAgW3BvaW50ZXJFdmVudHNdPVwiY2lyY2xlLnZhbHVlID09PSAwID8gJ25vbmUnIDogJ2FsbCdcIlxuICAgICAgICBbZGF0YV09XCJjaXJjbGUudmFsdWVcIlxuICAgICAgICBbY2xhc3NOYW1lc109XCJjaXJjbGUuY2xhc3NOYW1lc1wiXG4gICAgICAgIChzZWxlY3QpPVwib25DbGljayhjaXJjbGUuZGF0YSlcIlxuICAgICAgICAoYWN0aXZhdGUpPVwiYWN0aXZhdGVDaXJjbGUoKVwiXG4gICAgICAgIChkZWFjdGl2YXRlKT1cImRlYWN0aXZhdGVDaXJjbGUoKVwiXG4gICAgICAgIG5neC10b29sdGlwXG4gICAgICAgIFt0b29sdGlwRGlzYWJsZWRdPVwidG9vbHRpcERpc2FibGVkXCJcbiAgICAgICAgW3Rvb2x0aXBQbGFjZW1lbnRdPVwicGxhY2VtZW50VHlwZXMuVG9wXCJcbiAgICAgICAgW3Rvb2x0aXBUeXBlXT1cInN0eWxlVHlwZXMudG9vbHRpcFwiXG4gICAgICAgIFt0b29sdGlwVGl0bGVdPVwidG9vbHRpcFRlbXBsYXRlID8gdW5kZWZpbmVkIDogZ2V0VG9vbHRpcFRleHQoY2lyY2xlKVwiXG4gICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgW3Rvb2x0aXBDb250ZXh0XT1cImNpcmNsZS5kYXRhXCJcbiAgICAgIC8+XG4gICAgPC9zdmc6Zz5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhbmltYXRpb25TdGF0ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoMjUwLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlU2VyaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhOiBTZXJpZXM7XG4gIEBJbnB1dCgpIHR5cGU6IFNlcmllc1R5cGUgPSBTZXJpZXNUeXBlLlN0YW5kYXJkO1xuICBASW5wdXQoKSB4U2NhbGU7XG4gIEBJbnB1dCgpIHlTY2FsZTtcbiAgQElucHV0KCkgY29sb3JzOiBDb2xvckhlbHBlcjtcbiAgQElucHV0KCkgc2NhbGVUeXBlOiBTY2FsZVR5cGU7XG4gIEBJbnB1dCgpIHZpc2libGVWYWx1ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aXZlRW50cmllczogYW55W107XG4gIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPERhdGFJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8eyBuYW1lOiBTdHJpbmdPck51bWJlck9yRGF0ZSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjx7IG5hbWU6IFN0cmluZ09yTnVtYmVyT3JEYXRlIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGFyZWFQYXRoOiBhbnk7XG4gIGNpcmNsZTogQ2lyY2xlOyAvLyBhY3RpdmUgY2lyY2xlXG4gIGJhclZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ3JhZGllbnRJZDogc3RyaW5nO1xuICBncmFkaWVudEZpbGw6IHN0cmluZztcblxuICBiYXJPcmllbnRhdGlvbiA9IEJhck9yaWVudGF0aW9uO1xuICBwbGFjZW1lbnRUeXBlcyA9IFBsYWNlbWVudFR5cGVzO1xuICBzdHlsZVR5cGVzID0gU3R5bGVUeXBlcztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdyYWRpZW50SWQgPSAnZ3JhZCcgKyBpZCgpLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5ncmFkaWVudEZpbGwgPSBgdXJsKCMke3RoaXMuZ3JhZGllbnRJZH0pYDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaXJjbGUgPSB0aGlzLmdldEFjdGl2ZUNpcmNsZSgpO1xuICB9XG5cbiAgZ2V0QWN0aXZlQ2lyY2xlKCk6IENpcmNsZSB7XG4gICAgY29uc3QgaW5kZXhBY3RpdmVEYXRhUG9pbnQgPSB0aGlzLmRhdGEuc2VyaWVzLmZpbmRJbmRleChkID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gZC5uYW1lO1xuICAgICAgcmV0dXJuIGxhYmVsICYmIHRoaXMudmlzaWJsZVZhbHVlICYmIGxhYmVsLnRvU3RyaW5nKCkgPT09IHRoaXMudmlzaWJsZVZhbHVlLnRvU3RyaW5nKCkgJiYgZC52YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4QWN0aXZlRGF0YVBvaW50ID09PSAtMSkge1xuICAgICAgLy8gTm8gdmFsaWQgcG9pbnQgaXMgJ2FjdGl2ZS9ob3ZlcmVkIG92ZXInIGF0IHRoaXMgbW9tZW50LlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5tYXBEYXRhUG9pbnRUb0NpcmNsZSh0aGlzLmRhdGEuc2VyaWVzW2luZGV4QWN0aXZlRGF0YVBvaW50XSwgaW5kZXhBY3RpdmVEYXRhUG9pbnQpO1xuICB9XG5cbiAgbWFwRGF0YVBvaW50VG9DaXJjbGUoZDogYW55LCBpOiBudW1iZXIpOiBDaXJjbGUge1xuICAgIGNvbnN0IHNlcmllc05hbWUgPSB0aGlzLmRhdGEubmFtZSBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGQudmFsdWU7XG4gICAgY29uc3QgbGFiZWwgPSBkLm5hbWU7XG4gICAgY29uc3QgdG9vbHRpcExhYmVsID0gZm9ybWF0TGFiZWwobGFiZWwpO1xuXG4gICAgbGV0IGN4O1xuICAgIGlmICh0aGlzLnNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLlRpbWUpIHtcbiAgICAgIGN4ID0gdGhpcy54U2NhbGUobGFiZWwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZVR5cGUgPT09IFNjYWxlVHlwZS5MaW5lYXIpIHtcbiAgICAgIGN4ID0gdGhpcy54U2NhbGUoTnVtYmVyKGxhYmVsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN4ID0gdGhpcy54U2NhbGUobGFiZWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGN5ID0gdGhpcy55U2NhbGUodGhpcy50eXBlID09PSBTZXJpZXNUeXBlLlN0YW5kYXJkID8gdmFsdWUgOiBkLmQxKTtcbiAgICBjb25zdCByYWRpdXMgPSA1O1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMueVNjYWxlLnJhbmdlKClbMF0gLSBjeTtcbiAgICBjb25zdCBvcGFjaXR5ID0gMTtcblxuICAgIGxldCBjb2xvcjtcbiAgICBpZiAodGhpcy5jb2xvcnMuc2NhbGVUeXBlID09PSBTY2FsZVR5cGUuTGluZWFyKSB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSBTZXJpZXNUeXBlLlN0YW5kYXJkKSB7XG4gICAgICAgIGNvbG9yID0gdGhpcy5jb2xvcnMuZ2V0Q29sb3IodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLmNvbG9ycy5nZXRDb2xvcihkLmQxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3IgPSB0aGlzLmNvbG9ycy5nZXRDb2xvcihzZXJpZXNOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZCwge1xuICAgICAgc2VyaWVzOiBzZXJpZXNOYW1lLFxuICAgICAgdmFsdWUsXG4gICAgICBuYW1lOiBsYWJlbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzTmFtZXM6IFtgY2lyY2xlLWRhdGEtJHtpfWBdLFxuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGRhdGEsXG4gICAgICBjeCxcbiAgICAgIGN5LFxuICAgICAgcmFkaXVzLFxuICAgICAgaGVpZ2h0LFxuICAgICAgdG9vbHRpcExhYmVsLFxuICAgICAgY29sb3IsXG4gICAgICBvcGFjaXR5LFxuICAgICAgc2VyaWVzTmFtZSxcbiAgICAgIGdyYWRpZW50U3RvcHM6IHRoaXMuZ2V0R3JhZGllbnRTdG9wcyhjb2xvciksXG4gICAgICBtaW46IGQubWluLFxuICAgICAgbWF4OiBkLm1heFxuICAgIH07XG4gIH1cblxuICBnZXRUb29sdGlwVGV4dCh7XG4gICAgdG9vbHRpcExhYmVsLFxuICAgIHZhbHVlLFxuICAgIHNlcmllc05hbWUsXG4gICAgbWluLFxuICAgIG1heFxuICB9OiB7XG4gICAgdG9vbHRpcExhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IGFueTtcbiAgICBzZXJpZXNOYW1lOiBzdHJpbmc7XG4gICAgbWluOiBudW1iZXI7XG4gICAgbWF4OiBudW1iZXI7XG4gIH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXAtbGFiZWxcIj4ke2VzY2FwZUxhYmVsKHNlcmllc05hbWUpfSDigKIgJHtlc2NhcGVMYWJlbCh0b29sdGlwTGFiZWwpfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC12YWxcIj4ke3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCl9JHt0aGlzLmdldFRvb2x0aXBNaW5NYXhUZXh0KG1pbiwgbWF4KX08L3NwYW4+XG4gICAgYDtcbiAgfVxuXG4gIGdldFRvb2x0aXBNaW5NYXhUZXh0KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKG1pbiAhPT0gdW5kZWZpbmVkIHx8IG1heCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gJyAoJztcbiAgICAgIGlmIChtaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAobWF4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXN1bHQgKz0gJ+KJpSc7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9IG1pbi50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICBpZiAobWF4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXN1bHQgKz0gJyAtICc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobWF4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0ICs9ICfiiaQnO1xuICAgICAgfVxuICAgICAgaWYgKG1heCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdCArPSBtYXgudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCArPSAnKSc7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0R3JhZGllbnRTdG9wcyhjb2xvcjogc3RyaW5nKTogR3JhZGllbnRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgb3BhY2l0eTogMC4yXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBvZmZzZXQ6IDEwMCxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgb25DbGljayhkYXRhOiBEYXRhSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoZGF0YSk7XG4gIH1cblxuICBpc0FjdGl2ZShlbnRyeSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hY3RpdmVFbnRyaWVzKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuYWN0aXZlRW50cmllcy5maW5kKGQgPT4ge1xuICAgICAgcmV0dXJuIGVudHJ5Lm5hbWUgPT09IGQubmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYWN0aXZhdGVDaXJjbGUoKTogdm9pZCB7XG4gICAgdGhpcy5iYXJWaXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmFjdGl2YXRlLmVtaXQoeyBuYW1lOiB0aGlzLmRhdGEubmFtZSB9KTtcbiAgfVxuXG4gIGRlYWN0aXZhdGVDaXJjbGUoKTogdm9pZCB7XG4gICAgdGhpcy5iYXJWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jaXJjbGUub3BhY2l0eSA9IDA7XG4gICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyBuYW1lOiB0aGlzLmRhdGEubmFtZSB9KTtcbiAgfVxufVxuIl19