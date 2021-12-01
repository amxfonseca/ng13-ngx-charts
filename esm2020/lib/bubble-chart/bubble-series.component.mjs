import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { formatLabel, escapeLabel } from '../common/label.helper';
import { PlacementTypes } from '../common/tooltip/position';
import { StyleTypes } from '../common/tooltip/style.type';
import { ScaleType } from '../common/types/scale-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../common/circle.component";
import * as i3 from "../common/tooltip/tooltip.directive";
const _c0 = ["ngx-charts-bubble-series", ""];
function BubbleSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelementStart(1, "g");
    i0.ɵɵelementStart(2, "g", 1);
    i0.ɵɵlistener("select", function BubbleSeriesComponent__svg_g_0_Template__svg_g_select_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const circle_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onClick(circle_r1.data); })("activate", function BubbleSeriesComponent__svg_g_0_Template__svg_g_activate_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const circle_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.activateCircle(circle_r1); })("deactivate", function BubbleSeriesComponent__svg_g_0_Template__svg_g_deactivate_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const circle_r1 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.deactivateCircle(circle_r1); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const circle_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("transform", circle_r1.transform);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("opacity", circle_r1.opacity);
    i0.ɵɵclassProp("active", circle_r1.isActive);
    i0.ɵɵproperty("@animationState", "active")("cx", 0)("cy", 0)("r", circle_r1.radius)("fill", circle_r1.color)("pointerEvents", "all")("data", circle_r1.value)("classNames", circle_r1.classNames)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", ctx_r0.placementTypes.Top)("tooltipType", ctx_r0.styleTypes.tooltip)("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : ctx_r0.getTooltipText(circle_r1))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", circle_r1.data);
} }
export class BubbleSeriesComponent {
    constructor() {
        this.tooltipDisabled = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.placementTypes = PlacementTypes;
        this.styleTypes = StyleTypes;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.circles = this.getCircles();
    }
    getCircles() {
        const seriesName = this.data.name;
        return this.data.series
            .map((d, i) => {
            if (typeof d.y !== 'undefined' && typeof d.x !== 'undefined') {
                const y = d.y;
                const x = d.x;
                const r = d.r;
                const radius = this.rScale(r || 1);
                const tooltipLabel = formatLabel(d.name);
                const cx = this.xScaleType === ScaleType.Linear ? this.xScale(Number(x)) : this.xScale(x);
                const cy = this.yScaleType === ScaleType.Linear ? this.yScale(Number(y)) : this.yScale(y);
                const color = this.colors.scaleType === ScaleType.Linear ? this.colors.getColor(r) : this.colors.getColor(seriesName);
                const isActive = !this.activeEntries.length ? true : this.isActive({ name: seriesName });
                const opacity = isActive ? 1 : 0.3;
                const data = Object.assign({}, d, {
                    series: seriesName,
                    name: d.name,
                    value: d.y,
                    x: d.x,
                    radius: d.r
                });
                return {
                    data,
                    x,
                    y,
                    r,
                    classNames: [`circle-data-${i}`],
                    value: y,
                    label: x,
                    cx,
                    cy,
                    radius,
                    tooltipLabel,
                    color,
                    opacity,
                    seriesName,
                    isActive,
                    transform: `translate(${cx},${cy})`
                };
            }
        })
            .filter(circle => circle !== undefined);
    }
    getTooltipText(circle) {
        const hasRadius = typeof circle.r !== 'undefined';
        const hasTooltipLabel = circle.tooltipLabel && circle.tooltipLabel.length;
        const hasSeriesName = circle.seriesName && circle.seriesName.length;
        const radiusValue = hasRadius ? formatLabel(circle.r) : '';
        const xAxisLabel = this.xAxisLabel && this.xAxisLabel !== '' ? `${this.xAxisLabel}:` : '';
        const yAxisLabel = this.yAxisLabel && this.yAxisLabel !== '' ? `${this.yAxisLabel}:` : '';
        const x = formatLabel(circle.x);
        const y = formatLabel(circle.y);
        const name = hasSeriesName && hasTooltipLabel
            ? `${circle.seriesName} • ${circle.tooltipLabel}`
            : circle.seriesName + circle.tooltipLabel;
        const tooltipTitle = hasSeriesName || hasTooltipLabel ? `<span class="tooltip-label">${escapeLabel(name)}</span>` : '';
        return `
      ${tooltipTitle}
      <span class="tooltip-label">
        <label>${escapeLabel(xAxisLabel)}</label> ${escapeLabel(x)}<br />
        <label>${escapeLabel(yAxisLabel)}</label> ${escapeLabel(y)}
      </span>
      <span class="tooltip-val">
        ${escapeLabel(radiusValue)}
      </span>
    `;
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
    isVisible(circle) {
        if (this.activeEntries.length > 0) {
            return this.isActive({ name: circle.seriesName });
        }
        return circle.opacity !== 0;
    }
    activateCircle(circle) {
        circle.barVisible = true;
        this.activate.emit({ name: this.data.name });
    }
    deactivateCircle(circle) {
        circle.barVisible = false;
        this.deactivate.emit({ name: this.data.name });
    }
    trackBy(index, circle) {
        return `${circle.data.series} ${circle.data.name}`;
    }
}
BubbleSeriesComponent.ɵfac = function BubbleSeriesComponent_Factory(t) { return new (t || BubbleSeriesComponent)(); };
BubbleSeriesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BubbleSeriesComponent, selectors: [["g", "ngx-charts-bubble-series", ""]], inputs: { data: "data", xScale: "xScale", yScale: "yScale", rScale: "rScale", xScaleType: "xScaleType", yScaleType: "yScaleType", colors: "colors", visibleValue: "visibleValue", activeEntries: "activeEntries", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", tooltipDisabled: "tooltipDisabled", tooltipTemplate: "tooltipTemplate" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-circle", "", "ngx-tooltip", "", 1, "circle", 3, "cx", "cy", "r", "fill", "pointerEvents", "data", "classNames", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate"]], template: function BubbleSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BubbleSeriesComponent__svg_g_0_Template, 3, 19, "g", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.circles)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.NgForOf, i2.CircleComponent, i3.TooltipDirective], encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':enter', [
                    style({
                        opacity: 0,
                        transform: 'scale(0)'
                    }),
                    animate(250, style({ opacity: 1, transform: 'scale(1)' }))
                ])
            ])
        ] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BubbleSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-bubble-series]',
                template: `
    <svg:g *ngFor="let circle of circles; trackBy: trackBy">
      <svg:g [attr.transform]="circle.transform">
        <svg:g
          ngx-charts-circle
          [@animationState]="'active'"
          class="circle"
          [cx]="0"
          [cy]="0"
          [r]="circle.radius"
          [fill]="circle.color"
          [style.opacity]="circle.opacity"
          [class.active]="circle.isActive"
          [pointerEvents]="'all'"
          [data]="circle.value"
          [classNames]="circle.classNames"
          (select)="onClick(circle.data)"
          (activate)="activateCircle(circle)"
          (deactivate)="deactivateCircle(circle)"
          ngx-tooltip
          [tooltipDisabled]="tooltipDisabled"
          [tooltipPlacement]="placementTypes.Top"
          [tooltipType]="styleTypes.tooltip"
          [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(circle)"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipContext]="circle.data"
        />
      </svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':enter', [
                            style({
                                opacity: 0,
                                transform: 'scale(0)'
                            }),
                            animate(250, style({ opacity: 1, transform: 'scale(1)' }))
                        ])
                    ])
                ]
            }]
    }], null, { data: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], rScale: [{
            type: Input
        }], xScaleType: [{
            type: Input
        }], yScaleType: [{
            type: Input
        }], colors: [{
            type: Input
        }], visibleValue: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], xAxisLabel: [{
            type: Input
        }], yAxisLabel: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLXNlcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvYnViYmxlLWNoYXJ0L2J1YmJsZS1zZXJpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBRVosdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7OztJQUt4RCxtQkFBd0Q7SUFBeEQseUJBQXdEO0lBQ3RELHlCQUEyQztJQUN6Qyw0QkF1QkU7SUFWQSxvT0FBVSw4QkFBb0IsSUFBQywyTkFDbkIsZ0NBQXNCLElBREgsK05BRWpCLGtDQUF3QixJQUZQO0lBYmpDLGlCQXVCRTtJQUNKLGlCQUFRO0lBQ1YsaUJBQVE7Ozs7SUExQkMsZUFBbUM7SUFBbkMsZ0RBQW1DO0lBU3RDLGVBQWdDO0lBQWhDLDRDQUFnQztJQUNoQyw0Q0FBZ0M7SUFQaEMsMENBQTRCLFNBQUEsU0FBQSx1QkFBQSx5QkFBQSx3QkFBQSx5QkFBQSxvQ0FBQSwyQ0FBQSwrQ0FBQSwwQ0FBQSx1RkFBQSwyQ0FBQSxrQ0FBQTs7QUFzQ3RDLE1BQU0sT0FBTyxxQkFBcUI7SUE3Q2xDO1FBeURXLG9CQUFlLEdBQVksS0FBSyxD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QUNILENBQUM7U0FDSDt1RkFFVSxxQkFBcUI7Y0E3Q2pDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLGdCQUFnQixFQUFFO3dCQUN4QixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLENBQUM7Z0NBQ1YsU0FBUyxFQUFFLFVBQVU7NkJBQ3RCLENBQUM7NEJBQ0YsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO3lCQUMzRCxDQUFDO3FCQUNILENBQUM7aUJBQ0g7YUFDRjtnQkFFVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IGZvcm1hdExhYmVsLCBlc2NhcGVMYWJlbCB9IGZyb20gJy4uL2NvbW1vbi9sYWJlbC5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmltcG9ydCB7IEJ1YmJsZUNoYXJ0U2VyaWVzIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXJ0LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgUGxhY2VtZW50VHlwZXMgfSBmcm9tICcuLi9jb21tb24vdG9vbHRpcC9wb3NpdGlvbic7XG5pbXBvcnQgeyBTdHlsZVR5cGVzIH0gZnJvbSAnLi4vY29tbW9uL3Rvb2x0aXAvc3R5bGUudHlwZSc7XG5pbXBvcnQgeyBTY2FsZVR5cGUgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvc2NhbGUtdHlwZS5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLWJ1YmJsZS1zZXJpZXNdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IGNpcmNsZSBvZiBjaXJjbGVzOyB0cmFja0J5OiB0cmFja0J5XCI+XG4gICAgICA8c3ZnOmcgW2F0dHIudHJhbnNmb3JtXT1cImNpcmNsZS50cmFuc2Zvcm1cIj5cbiAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgbmd4LWNoYXJ0cy1jaXJjbGVcbiAgICAgICAgICBbQGFuaW1hdGlvblN0YXRlXT1cIidhY3RpdmUnXCJcbiAgICAgICAgICBjbGFzcz1cImNpcmNsZVwiXG4gICAgICAgICAgW2N4XT1cIjBcIlxuICAgICAgICAgIFtjeV09XCIwXCJcbiAgICAgICAgICBbcl09XCJjaXJjbGUucmFkaXVzXCJcbiAgICAgICAgICBbZmlsbF09XCJjaXJjbGUuY29sb3JcIlxuICAgICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cImNpcmNsZS5vcGFjaXR5XCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImNpcmNsZS5pc0FjdGl2ZVwiXG4gICAgICAgICAgW3BvaW50ZXJFdmVudHNdPVwiJ2FsbCdcIlxuICAgICAgICAgIFtkYXRhXT1cImNpcmNsZS52YWx1ZVwiXG4gICAgICAgICAgW2NsYXNzTmFtZXNdPVwiY2lyY2xlLmNsYXNzTmFtZXNcIlxuICAgICAgICAgIChzZWxlY3QpPVwib25DbGljayhjaXJjbGUuZGF0YSlcIlxuICAgICAgICAgIChhY3RpdmF0ZSk9XCJhY3RpdmF0ZUNpcmNsZShjaXJjbGUpXCJcbiAgICAgICAgICAoZGVhY3RpdmF0ZSk9XCJkZWFjdGl2YXRlQ2lyY2xlKGNpcmNsZSlcIlxuICAgICAgICAgIG5neC10b29sdGlwXG4gICAgICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0b29sdGlwRGlzYWJsZWRcIlxuICAgICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInBsYWNlbWVudFR5cGVzLlRvcFwiXG4gICAgICAgICAgW3Rvb2x0aXBUeXBlXT1cInN0eWxlVHlwZXMudG9vbHRpcFwiXG4gICAgICAgICAgW3Rvb2x0aXBUaXRsZV09XCJ0b29sdGlwVGVtcGxhdGUgPyB1bmRlZmluZWQgOiBnZXRUb29sdGlwVGV4dChjaXJjbGUpXCJcbiAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBDb250ZXh0XT1cImNpcmNsZS5kYXRhXCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnOmc+XG4gICAgPC9zdmc6Zz5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhbmltYXRpb25TdGF0ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKDI1MCwgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQnViYmxlU2VyaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGF0YTogQnViYmxlQ2hhcnRTZXJpZXM7XG4gIEBJbnB1dCgpIHhTY2FsZTtcbiAgQElucHV0KCkgeVNjYWxlO1xuICBASW5wdXQoKSByU2NhbGU7XG4gIEBJbnB1dCgpIHhTY2FsZVR5cGU6IFNjYWxlVHlwZTtcbiAgQElucHV0KCkgeVNjYWxlVHlwZTogU2NhbGVUeXBlO1xuICBASW5wdXQoKSBjb2xvcnM6IENvbG9ySGVscGVyO1xuICBASW5wdXQoKSB2aXNpYmxlVmFsdWU7XG4gIEBJbnB1dCgpIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICBASW5wdXQoKSB4QXhpc0xhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHlBeGlzTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGFyZWFQYXRoOiBhbnk7XG4gIGNpcmNsZXM6IGFueVtdOyAvLyBUT0RPIHR5cGUgdGhpc1xuXG4gIHBsYWNlbWVudFR5cGVzID0gUGxhY2VtZW50VHlwZXM7XG4gIHN0eWxlVHlwZXMgPSBTdHlsZVR5cGVzO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuY2lyY2xlcyA9IHRoaXMuZ2V0Q2lyY2xlcygpO1xuICB9XG5cbiAgZ2V0Q2lyY2xlcygpOiBhbnlbXSB7XG4gICAgY29uc3Qgc2VyaWVzTmFtZSA9IHRoaXMuZGF0YS5uYW1lO1xuXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zZXJpZXNcbiAgICAgIC5tYXAoKGQsIGkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBkLnkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkLnggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29uc3QgeSA9IGQueTtcbiAgICAgICAgICBjb25zdCB4ID0gZC54O1xuICAgICAgICAgIGNvbnN0IHIgPSBkLnI7XG5cbiAgICAgICAgICBjb25zdCByYWRpdXMgPSB0aGlzLnJTY2FsZShyIHx8IDEpO1xuICAgICAgICAgIGNvbnN0IHRvb2x0aXBMYWJlbCA9IGZvcm1hdExhYmVsKGQubmFtZSk7XG5cbiAgICAgICAgICBjb25zdCBjeCA9IHRoaXMueFNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLkxpbmVhciA/IHRoaXMueFNjYWxlKE51bWJlcih4KSkgOiB0aGlzLnhTY2FsZSh4KTtcbiAgICAgICAgICBjb25zdCBjeSA9IHRoaXMueVNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLkxpbmVhciA/IHRoaXMueVNjYWxlKE51bWJlcih5KSkgOiB0aGlzLnlTY2FsZSh5KTtcblxuICAgICAgICAgIGNvbnN0IGNvbG9yID1cbiAgICAgICAgICAgIHRoaXMuY29sb3JzLnNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLkxpbmVhciA/IHRoaXMuY29sb3JzLmdldENvbG9yKHIpIDogdGhpcy5jb2xvcnMuZ2V0Q29sb3Ioc2VyaWVzTmFtZSk7XG5cbiAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICF0aGlzLmFjdGl2ZUVudHJpZXMubGVuZ3RoID8gdHJ1ZSA6IHRoaXMuaXNBY3RpdmUoeyBuYW1lOiBzZXJpZXNOYW1lIH0pO1xuICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSBpc0FjdGl2ZSA/IDEgOiAwLjM7XG5cbiAgICAgICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZCwge1xuICAgICAgICAgICAgc2VyaWVzOiBzZXJpZXNOYW1lLFxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGQueSxcbiAgICAgICAgICAgIHg6IGQueCxcbiAgICAgICAgICAgIHJhZGl1czogZC5yXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcixcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IFtgY2lyY2xlLWRhdGEtJHtpfWBdLFxuICAgICAgICAgICAgdmFsdWU6IHksXG4gICAgICAgICAgICBsYWJlbDogeCxcbiAgICAgICAgICAgIGN4LFxuICAgICAgICAgICAgY3ksXG4gICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICB0b29sdGlwTGFiZWwsXG4gICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIG9wYWNpdHksXG4gICAgICAgICAgICBzZXJpZXNOYW1lLFxuICAgICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtjeH0sJHtjeX0pYFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKGNpcmNsZSA9PiBjaXJjbGUgIT09IHVuZGVmaW5lZCk7XG4gIH1cblxuICBnZXRUb29sdGlwVGV4dChjaXJjbGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IGhhc1JhZGl1cyA9IHR5cGVvZiBjaXJjbGUuciAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgY29uc3QgaGFzVG9vbHRpcExhYmVsID0gY2lyY2xlLnRvb2x0aXBMYWJlbCAmJiBjaXJjbGUudG9vbHRpcExhYmVsLmxlbmd0aDtcbiAgICBjb25zdCBoYXNTZXJpZXNOYW1lID0gY2lyY2xlLnNlcmllc05hbWUgJiYgY2lyY2xlLnNlcmllc05hbWUubGVuZ3RoO1xuXG4gICAgY29uc3QgcmFkaXVzVmFsdWUgPSBoYXNSYWRpdXMgPyBmb3JtYXRMYWJlbChjaXJjbGUucikgOiAnJztcbiAgICBjb25zdCB4QXhpc0xhYmVsID0gdGhpcy54QXhpc0xhYmVsICYmIHRoaXMueEF4aXNMYWJlbCAhPT0gJycgPyBgJHt0aGlzLnhBeGlzTGFiZWx9OmAgOiAnJztcbiAgICBjb25zdCB5QXhpc0xhYmVsID0gdGhpcy55QXhpc0xhYmVsICYmIHRoaXMueUF4aXNMYWJlbCAhPT0gJycgPyBgJHt0aGlzLnlBeGlzTGFiZWx9OmAgOiAnJztcbiAgICBjb25zdCB4ID0gZm9ybWF0TGFiZWwoY2lyY2xlLngpO1xuICAgIGNvbnN0IHkgPSBmb3JtYXRMYWJlbChjaXJjbGUueSk7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBoYXNTZXJpZXNOYW1lICYmIGhhc1Rvb2x0aXBMYWJlbFxuICAgICAgICA/IGAke2NpcmNsZS5zZXJpZXNOYW1lfSDigKIgJHtjaXJjbGUudG9vbHRpcExhYmVsfWBcbiAgICAgICAgOiBjaXJjbGUuc2VyaWVzTmFtZSArIGNpcmNsZS50b29sdGlwTGFiZWw7XG4gICAgY29uc3QgdG9vbHRpcFRpdGxlID1cbiAgICAgIGhhc1Nlcmllc05hbWUgfHwgaGFzVG9vbHRpcExhYmVsID8gYDxzcGFuIGNsYXNzPVwidG9vbHRpcC1sYWJlbFwiPiR7ZXNjYXBlTGFiZWwobmFtZSl9PC9zcGFuPmAgOiAnJztcblxuICAgIHJldHVybiBgXG4gICAgICAke3Rvb2x0aXBUaXRsZX1cbiAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC1sYWJlbFwiPlxuICAgICAgICA8bGFiZWw+JHtlc2NhcGVMYWJlbCh4QXhpc0xhYmVsKX08L2xhYmVsPiAke2VzY2FwZUxhYmVsKHgpfTxiciAvPlxuICAgICAgICA8bGFiZWw+JHtlc2NhcGVMYWJlbCh5QXhpc0xhYmVsKX08L2xhYmVsPiAke2VzY2FwZUxhYmVsKHkpfVxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sdGlwLXZhbFwiPlxuICAgICAgICAke2VzY2FwZUxhYmVsKHJhZGl1c1ZhbHVlKX1cbiAgICAgIDwvc3Bhbj5cbiAgICBgO1xuICB9XG5cbiAgb25DbGljayhkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcbiAgfVxuXG4gIGlzQWN0aXZlKGVudHJ5KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUVudHJpZXMpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmQoZCA9PiB7XG4gICAgICByZXR1cm4gZW50cnkubmFtZSA9PT0gZC5uYW1lO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBpc1Zpc2libGUoY2lyY2xlKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuYWN0aXZlRW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSh7IG5hbWU6IGNpcmNsZS5zZXJpZXNOYW1lIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjaXJjbGUub3BhY2l0eSAhPT0gMDtcbiAgfVxuXG4gIGFjdGl2YXRlQ2lyY2xlKGNpcmNsZSk6IHZvaWQge1xuICAgIGNpcmNsZS5iYXJWaXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmFjdGl2YXRlLmVtaXQoeyBuYW1lOiB0aGlzLmRhdGEubmFtZSB9KTtcbiAgfVxuXG4gIGRlYWN0aXZhdGVDaXJjbGUoY2lyY2xlKTogdm9pZCB7XG4gICAgY2lyY2xlLmJhclZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmRlYWN0aXZhdGUuZW1pdCh7IG5hbWU6IHRoaXMuZGF0YS5uYW1lIH0pO1xuICB9XG5cbiAgdHJhY2tCeShpbmRleCwgY2lyY2xlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7Y2lyY2xlLmRhdGEuc2VyaWVzfSAke2NpcmNsZS5kYXRhLm5hbWV9YDtcbiAgfVxufVxuIl19