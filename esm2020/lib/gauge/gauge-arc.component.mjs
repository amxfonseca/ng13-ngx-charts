import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { formatLabel, escapeLabel } from '../common/label.helper';
import { PlacementTypes } from '../common/tooltip/position';
import { StyleTypes } from '../common/tooltip/style.type';
import * as i0 from "@angular/core";
import * as i1 from "../pie-chart/pie-arc.component";
import * as i2 from "../common/tooltip/tooltip.directive";
const _c0 = ["ngx-charts-gauge-arc", ""];
export class GaugeArcComponent {
    constructor() {
        this.isActive = false;
        this.tooltipDisabled = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.placementTypes = PlacementTypes;
        this.styleTypes = StyleTypes;
    }
    tooltipText(arc) {
        const label = formatLabel(arc.data.name);
        let val;
        if (this.valueFormatting) {
            val = this.valueFormatting(arc.data.value);
        }
        else {
            val = formatLabel(arc.data.value);
        }
        return `
      <span class="tooltip-label">${escapeLabel(label)}</span>
      <span class="tooltip-val">${val}</span>
    `;
    }
}
GaugeArcComponent.ɵfac = function GaugeArcComponent_Factory(t) { return new (t || GaugeArcComponent)(); };
GaugeArcComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GaugeArcComponent, selectors: [["g", "ngx-charts-gauge-arc", ""]], inputs: { backgroundArc: "backgroundArc", valueArc: "valueArc", cornerRadius: "cornerRadius", colors: "colors", isActive: "isActive", tooltipDisabled: "tooltipDisabled", valueFormatting: "valueFormatting", tooltipTemplate: "tooltipTemplate", animations: "animations" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, attrs: _c0, decls: 2, vars: 23, consts: [["ngx-charts-pie-arc", "", 1, "background-arc", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "cornerRadius", "data", "animate", "pointerEvents"], ["ngx-charts-pie-arc", "", "ngx-tooltip", "", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "cornerRadius", "fill", "data", "animate", "isActive", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate"]], template: function GaugeArcComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "g", 0);
        i0.ɵɵelementStart(1, "g", 1);
        i0.ɵɵlistener("select", function GaugeArcComponent_Template__svg_g_select_1_listener($event) { return ctx.select.emit($event); })("activate", function GaugeArcComponent_Template__svg_g_activate_1_listener($event) { return ctx.activate.emit($event); })("deactivate", function GaugeArcComponent_Template__svg_g_deactivate_1_listener($event) { return ctx.deactivate.emit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("startAngle", 0)("endAngle", ctx.backgroundArc.endAngle)("innerRadius", ctx.backgroundArc.innerRadius)("outerRadius", ctx.backgroundArc.outerRadius)("cornerRadius", ctx.cornerRadius)("data", ctx.backgroundArc.data)("animate", false)("pointerEvents", false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("startAngle", 0)("endAngle", ctx.valueArc.endAngle)("innerRadius", ctx.valueArc.innerRadius)("outerRadius", ctx.valueArc.outerRadius)("cornerRadius", ctx.cornerRadius)("fill", ctx.colors.getColor(ctx.valueArc.data.name))("data", ctx.valueArc.data)("animate", ctx.animations)("isActive", ctx.isActive)("tooltipDisabled", ctx.tooltipDisabled)("tooltipPlacement", ctx.placementTypes.Top)("tooltipType", ctx.styleTypes.tooltip)("tooltipTitle", ctx.tooltipTemplate ? undefined : ctx.tooltipText(ctx.valueArc))("tooltipTemplate", ctx.tooltipTemplate)("tooltipContext", ctx.valueArc.data);
    } }, directives: [i1.PieArcComponent, i2.TooltipDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GaugeArcComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-gauge-arc]',
                template: `
    <svg:g
      ngx-charts-pie-arc
      class="background-arc"
      [startAngle]="0"
      [endAngle]="backgroundArc.endAngle"
      [innerRadius]="backgroundArc.innerRadius"
      [outerRadius]="backgroundArc.outerRadius"
      [cornerRadius]="cornerRadius"
      [data]="backgroundArc.data"
      [animate]="false"
      [pointerEvents]="false"
    ></svg:g>
    <svg:g
      ngx-charts-pie-arc
      [startAngle]="0"
      [endAngle]="valueArc.endAngle"
      [innerRadius]="valueArc.innerRadius"
      [outerRadius]="valueArc.outerRadius"
      [cornerRadius]="cornerRadius"
      [fill]="colors.getColor(valueArc.data.name)"
      [data]="valueArc.data"
      [animate]="animations"
      [isActive]="isActive"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
      (deactivate)="deactivate.emit($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="placementTypes.Top"
      [tooltipType]="styleTypes.tooltip"
      [tooltipTitle]="tooltipTemplate ? undefined : tooltipText(valueArc)"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="valueArc.data"
    ></svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { backgroundArc: [{
            type: Input
        }], valueArc: [{
            type: Input
        }], cornerRadius: [{
            type: Input
        }], colors: [{
            type: Input
        }], isActive: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtYXJjLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9nYXVnZS9nYXVnZS1hcmMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUdsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQWlEMUQsTUFBTSxPQUFPLGlCQUFpQjtJQXhDOUI7UUE2Q1csYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUdqQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBRTFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFDLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxVQUFVLENBQUM7S0FpQnpCO0lBZkMsV0FBVyxDQUFDLEdBQVk7UUFDdEIsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxHQUFHLENBQUM7UUFFUixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTztvQ0FDeUIsV0FBVyxDQUFDLEtBQUssQ0FBQztrQ0FDcEIsR0FBRztLQUNoQyxDQUFDO0lBQ0osQ0FBQzs7a0ZBaENVLGlCQUFpQjtvRUFBakIsaUJBQWlCO1FBckMxQixtQkFXQztRQVhELHVCQVdTO1FBQ1QsNEJBcUJDO1FBVkMsc0dBQVUsdUJBQW1CLElBQUMsNkZBQ2xCLHlCQUFxQixJQURILGlHQUVoQiwyQkFBdUIsSUFGUDtRQVUvQixpQkFBUTs7UUE5QlAsOEJBQWdCLHdDQUFBLDhDQUFBLDhDQUFBLGtDQUFBLGdDQUFBLGtCQUFBLHdCQUFBO1FBV2hCLGVBQWdCO1FBQWhCLDhCQUFnQixtQ0FBQSx5Q0FBQSx5Q0FBQSxrQ0FBQSxxREFBQSwyQkFBQSwyQkFBQSwwQkFBQSx3Q0FBQSw0Q0FBQSx1Q0FBQSxpRkFBQSx3Q0FBQSxxQ0FBQTs7dUZBdUJULGlCQUFpQjtjQXhDN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQ1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Z0JBRVUsYUFBYTtrQkFBckIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFFSSxNQUFNO2tCQUFmLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdExhYmVsLCBlc2NhcGVMYWJlbCB9IGZyb20gJy4uL2NvbW1vbi9sYWJlbC5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXJ0LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgUGxhY2VtZW50VHlwZXMgfSBmcm9tICcuLi9jb21tb24vdG9vbHRpcC9wb3NpdGlvbic7XG5pbXBvcnQgeyBTdHlsZVR5cGVzIH0gZnJvbSAnLi4vY29tbW9uL3Rvb2x0aXAvc3R5bGUudHlwZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJjSXRlbSB7XG4gIGRhdGE6IERhdGFJdGVtO1xuICBlbmRBbmdsZTogbnVtYmVyO1xuICBpbm5lclJhZGl1czogbnVtYmVyO1xuICBvdXRlclJhZGl1czogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtZ2F1Z2UtYXJjXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZzpnXG4gICAgICBuZ3gtY2hhcnRzLXBpZS1hcmNcbiAgICAgIGNsYXNzPVwiYmFja2dyb3VuZC1hcmNcIlxuICAgICAgW3N0YXJ0QW5nbGVdPVwiMFwiXG4gICAgICBbZW5kQW5nbGVdPVwiYmFja2dyb3VuZEFyYy5lbmRBbmdsZVwiXG4gICAgICBbaW5uZXJSYWRpdXNdPVwiYmFja2dyb3VuZEFyYy5pbm5lclJhZGl1c1wiXG4gICAgICBbb3V0ZXJSYWRpdXNdPVwiYmFja2dyb3VuZEFyYy5vdXRlclJhZGl1c1wiXG4gICAgICBbY29ybmVyUmFkaXVzXT1cImNvcm5lclJhZGl1c1wiXG4gICAgICBbZGF0YV09XCJiYWNrZ3JvdW5kQXJjLmRhdGFcIlxuICAgICAgW2FuaW1hdGVdPVwiZmFsc2VcIlxuICAgICAgW3BvaW50ZXJFdmVudHNdPVwiZmFsc2VcIlxuICAgID48L3N2ZzpnPlxuICAgIDxzdmc6Z1xuICAgICAgbmd4LWNoYXJ0cy1waWUtYXJjXG4gICAgICBbc3RhcnRBbmdsZV09XCIwXCJcbiAgICAgIFtlbmRBbmdsZV09XCJ2YWx1ZUFyYy5lbmRBbmdsZVwiXG4gICAgICBbaW5uZXJSYWRpdXNdPVwidmFsdWVBcmMuaW5uZXJSYWRpdXNcIlxuICAgICAgW291dGVyUmFkaXVzXT1cInZhbHVlQXJjLm91dGVyUmFkaXVzXCJcbiAgICAgIFtjb3JuZXJSYWRpdXNdPVwiY29ybmVyUmFkaXVzXCJcbiAgICAgIFtmaWxsXT1cImNvbG9ycy5nZXRDb2xvcih2YWx1ZUFyYy5kYXRhLm5hbWUpXCJcbiAgICAgIFtkYXRhXT1cInZhbHVlQXJjLmRhdGFcIlxuICAgICAgW2FuaW1hdGVdPVwiYW5pbWF0aW9uc1wiXG4gICAgICBbaXNBY3RpdmVdPVwiaXNBY3RpdmVcIlxuICAgICAgKHNlbGVjdCk9XCJzZWxlY3QuZW1pdCgkZXZlbnQpXCJcbiAgICAgIChhY3RpdmF0ZSk9XCJhY3RpdmF0ZS5lbWl0KCRldmVudClcIlxuICAgICAgKGRlYWN0aXZhdGUpPVwiZGVhY3RpdmF0ZS5lbWl0KCRldmVudClcIlxuICAgICAgbmd4LXRvb2x0aXBcbiAgICAgIFt0b29sdGlwRGlzYWJsZWRdPVwidG9vbHRpcERpc2FibGVkXCJcbiAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInBsYWNlbWVudFR5cGVzLlRvcFwiXG4gICAgICBbdG9vbHRpcFR5cGVdPVwic3R5bGVUeXBlcy50b29sdGlwXCJcbiAgICAgIFt0b29sdGlwVGl0bGVdPVwidG9vbHRpcFRlbXBsYXRlID8gdW5kZWZpbmVkIDogdG9vbHRpcFRleHQodmFsdWVBcmMpXCJcbiAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgIFt0b29sdGlwQ29udGV4dF09XCJ2YWx1ZUFyYy5kYXRhXCJcbiAgICA+PC9zdmc6Zz5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgR2F1Z2VBcmNDb21wb25lbnQge1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQXJjOiBBcmNJdGVtO1xuICBASW5wdXQoKSB2YWx1ZUFyYzogQXJjSXRlbTtcbiAgQElucHV0KCkgY29ybmVyUmFkaXVzOiBudW1iZXI7XG4gIEBJbnB1dCgpIGNvbG9yczogQ29sb3JIZWxwZXI7XG4gIEBJbnB1dCgpIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB2YWx1ZUZvcm1hdHRpbmc6ICh2YWx1ZTogYW55KSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgYW5pbWF0aW9uczogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwbGFjZW1lbnRUeXBlcyA9IFBsYWNlbWVudFR5cGVzO1xuICBzdHlsZVR5cGVzID0gU3R5bGVUeXBlcztcblxuICB0b29sdGlwVGV4dChhcmM6IEFyY0l0ZW0pOiBzdHJpbmcge1xuICAgIGNvbnN0IGxhYmVsID0gZm9ybWF0TGFiZWwoYXJjLmRhdGEubmFtZSk7XG4gICAgbGV0IHZhbDtcblxuICAgIGlmICh0aGlzLnZhbHVlRm9ybWF0dGluZykge1xuICAgICAgdmFsID0gdGhpcy52YWx1ZUZvcm1hdHRpbmcoYXJjLmRhdGEudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSBmb3JtYXRMYWJlbChhcmMuZGF0YS52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBcbiAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC1sYWJlbFwiPiR7ZXNjYXBlTGFiZWwobGFiZWwpfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcC12YWxcIj4ke3ZhbH08L3NwYW4+XG4gICAgYDtcbiAgfVxufVxuIl19