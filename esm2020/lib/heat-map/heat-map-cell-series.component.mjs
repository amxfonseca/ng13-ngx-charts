import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { formatLabel, escapeLabel } from '../common/label.helper';
import { PlacementTypes } from '../common/tooltip/position';
import { StyleTypes } from '../common/tooltip/style.type';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./heat-map-cell.component";
import * as i3 from "../common/tooltip/tooltip.directive";
const _c0 = ["ngx-charts-heat-map-cell-series", ""];
const _c1 = function (a0, a1, a2) { return { series: a0, name: a1, value: a2 }; };
function HeatCellSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 1);
    i0.ɵɵlistener("select", function HeatCellSeriesComponent__svg_g_0_Template__svg_g_select_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const c_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onClick(c_r1.cell); })("activate", function HeatCellSeriesComponent__svg_g_0_Template__svg_g_activate_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const c_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.activate.emit(c_r1.cell); })("deactivate", function HeatCellSeriesComponent__svg_g_0_Template__svg_g_deactivate_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const c_r1 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.deactivate.emit(c_r1.cell); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("x", c_r1.x)("y", c_r1.y)("width", c_r1.width)("height", c_r1.height)("fill", c_r1.fill)("data", c_r1.data)("gradient", ctx_r0.gradient)("animations", ctx_r0.animations)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", ctx_r0.placementTypes.Top)("tooltipType", ctx_r0.styleTypes.tooltip)("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : ctx_r0.tooltipText(c_r1))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", i0.ɵɵpureFunction3(14, _c1, c_r1.series, c_r1.label, c_r1.data));
} }
export class HeatCellSeriesComponent {
    constructor() {
        this.tooltipDisabled = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.placementTypes = PlacementTypes;
        this.styleTypes = StyleTypes;
    }
    ngOnInit() {
        if (!this.tooltipText) {
            this.tooltipText = this.getTooltipText;
        }
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.cells = this.getCells();
    }
    getCells() {
        const cells = [];
        this.data.map(row => {
            row.series.map(cell => {
                const value = cell.value;
                cell.series = row.name;
                cells.push({
                    row,
                    cell,
                    x: this.xScale(row.name),
                    y: this.yScale(cell.name),
                    width: this.xScale.bandwidth(),
                    height: this.yScale.bandwidth(),
                    fill: this.colors.getColor(value),
                    data: value,
                    label: formatLabel(cell.name),
                    series: row.name
                });
            });
        });
        return cells;
    }
    getTooltipText({ label, data, series }) {
        return `
      <span class="tooltip-label">${escapeLabel(series)} • ${escapeLabel(label)}</span>
      <span class="tooltip-val">${data.toLocaleString()}</span>
    `;
    }
    trackBy(index, item) {
        return item.label;
    }
    onClick(data) {
        this.select.emit(data);
    }
}
HeatCellSeriesComponent.ɵfac = function HeatCellSeriesComponent_Factory(t) { return new (t || HeatCellSeriesComponent)(); };
HeatCellSeriesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeatCellSeriesComponent, selectors: [["g", "ngx-charts-heat-map-cell-series", ""]], inputs: { data: "data", colors: "colors", xScale: "xScale", yScale: "yScale", gradient: "gradient", tooltipDisabled: "tooltipDisabled", tooltipText: "tooltipText", tooltipTemplate: "tooltipTemplate", animations: "animations" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 2, consts: [["ngx-charts-heat-map-cell", "", "ngx-tooltip", "", 3, "x", "y", "width", "height", "fill", "data", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-heat-map-cell", "", "ngx-tooltip", "", 3, "x", "y", "width", "height", "fill", "data", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate"]], template: function HeatCellSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HeatCellSeriesComponent__svg_g_0_Template, 1, 18, "g", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.cells)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.NgForOf, i2.HeatMapCellComponent, i3.TooltipDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeatCellSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-heat-map-cell-series]',
                template: `
    <svg:g
      ngx-charts-heat-map-cell
      *ngFor="let c of cells; trackBy: trackBy"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [fill]="c.fill"
      [data]="c.data"
      (select)="onClick(c.cell)"
      (activate)="activate.emit(c.cell)"
      (deactivate)="deactivate.emit(c.cell)"
      [gradient]="gradient"
      [animations]="animations"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="placementTypes.Top"
      [tooltipType]="styleTypes.tooltip"
      [tooltipTitle]="tooltipTemplate ? undefined : tooltipText(c)"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="{ series: c.series, name: c.label, value: c.data }"
    ></svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { data: [{
            type: Input
        }], colors: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], gradient: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], tooltipText: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdC1tYXAtY2VsbC1zZXJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2hlYXQtbWFwL2hlYXQtbWFwLWNlbGwtc2VyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxNQUFNLEVBQ04sWUFBWSxFQUdaLHVCQUF1QixFQUV4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7OztJQWlCdEQsbUJBcUJDO0lBckJELDRCQXFCQztJQVpDLGlPQUFVLHlCQUFlLElBQUMsd05BQ2QsK0JBQXFCLElBRFAsNE5BRVosaUNBQXVCLElBRlg7SUFZM0IsaUJBQVE7Ozs7SUFsQlAsMEJBQVMsYUFBQSxxQkFBQSx1QkFBQSxtQkFBQSxtQkFBQSw2QkFBQSxpQ0FBQSwyQ0FBQSwrQ0FBQSwwQ0FBQSwrRUFBQSwyQ0FBQSxtRkFBQTs7QUFzQmYsTUFBTSxPQUFPLHVCQUF1QjtJQTVCcEM7UUFrQ1csb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFHakMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUUxQixXQUFNLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsYUFBUSxHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RELGVBQVUsR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUlsRSxtQkFBYyxHQUFHLGNBQWMsQ0FBQztRQUNoQyxlQUFVLEdBQUcsVUFBVSxDQUFDO0tBd0R6QjtJQXREQyxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUV2QixLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNULEdBQUc7b0JBQ0gsSUFBSTtvQkFDSixDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO29CQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7b0JBQzlCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtvQkFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDakMsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUM3QixNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ2pCLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxjQUFjLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBbUQ7UUFDckYsT0FBTztvQ0FDeUIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUM7a0NBQzdDLElBQUksQ0FBQyxjQUFjLEVBQUU7S0FDbEQsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBYSxFQUFFLElBQUk7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBSTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OzhGQXpFVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQXpCaEMsMEVBcUJTOztRQW5CTyxtQ0FBVSw2QkFBQTs7dUZBdUJqQix1QkFBdUI7Y0E1Qm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dCQUVVLElBQUk7a0JBQVosS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBRUksTUFBTTtrQkFBZixNQUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdExhYmVsLCBlc2NhcGVMYWJlbCB9IGZyb20gJy4uL2NvbW1vbi9sYWJlbC5oZWxwZXInO1xuaW1wb3J0IHsgRGF0YUl0ZW0sIFNlcmllcyB9IGZyb20gJy4uL21vZGVscy9jaGFydC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IFBsYWNlbWVudFR5cGVzIH0gZnJvbSAnLi4vY29tbW9uL3Rvb2x0aXAvcG9zaXRpb24nO1xuaW1wb3J0IHsgU3R5bGVUeXBlcyB9IGZyb20gJy4uL2NvbW1vbi90b29sdGlwL3N0eWxlLnR5cGUnO1xuXG5pbnRlcmZhY2UgQ2VsbCB7XG4gIGNlbGw6IERhdGFJdGVtO1xuICBkYXRhOiBudW1iZXI7XG4gIGZpbGw6IHN0cmluZztcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJvdzogU2VyaWVzO1xuICBzZXJpZXM6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtaGVhdC1tYXAtY2VsbC1zZXJpZXNdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOmdcbiAgICAgIG5neC1jaGFydHMtaGVhdC1tYXAtY2VsbFxuICAgICAgKm5nRm9yPVwibGV0IGMgb2YgY2VsbHM7IHRyYWNrQnk6IHRyYWNrQnlcIlxuICAgICAgW3hdPVwiYy54XCJcbiAgICAgIFt5XT1cImMueVwiXG4gICAgICBbd2lkdGhdPVwiYy53aWR0aFwiXG4gICAgICBbaGVpZ2h0XT1cImMuaGVpZ2h0XCJcbiAgICAgIFtmaWxsXT1cImMuZmlsbFwiXG4gICAgICBbZGF0YV09XCJjLmRhdGFcIlxuICAgICAgKHNlbGVjdCk9XCJvbkNsaWNrKGMuY2VsbClcIlxuICAgICAgKGFjdGl2YXRlKT1cImFjdGl2YXRlLmVtaXQoYy5jZWxsKVwiXG4gICAgICAoZGVhY3RpdmF0ZSk9XCJkZWFjdGl2YXRlLmVtaXQoYy5jZWxsKVwiXG4gICAgICBbZ3JhZGllbnRdPVwiZ3JhZGllbnRcIlxuICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICBuZ3gtdG9vbHRpcFxuICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0b29sdGlwRGlzYWJsZWRcIlxuICAgICAgW3Rvb2x0aXBQbGFjZW1lbnRdPVwicGxhY2VtZW50VHlwZXMuVG9wXCJcbiAgICAgIFt0b29sdGlwVHlwZV09XCJzdHlsZVR5cGVzLnRvb2x0aXBcIlxuICAgICAgW3Rvb2x0aXBUaXRsZV09XCJ0b29sdGlwVGVtcGxhdGUgPyB1bmRlZmluZWQgOiB0b29sdGlwVGV4dChjKVwiXG4gICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICBbdG9vbHRpcENvbnRleHRdPVwieyBzZXJpZXM6IGMuc2VyaWVzLCBuYW1lOiBjLmxhYmVsLCB2YWx1ZTogYy5kYXRhIH1cIlxuICAgID48L3N2ZzpnPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBIZWF0Q2VsbFNlcmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgY29sb3JzO1xuICBASW5wdXQoKSB4U2NhbGU7XG4gIEBJbnB1dCgpIHlTY2FsZTtcbiAgQElucHV0KCkgZ3JhZGllbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0b29sdGlwVGV4dDogYW55O1xuICBASW5wdXQoKSB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGFuaW1hdGlvbnM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxEYXRhSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPERhdGFJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxEYXRhSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2VsbHM6IENlbGxbXTtcblxuICBwbGFjZW1lbnRUeXBlcyA9IFBsYWNlbWVudFR5cGVzO1xuICBzdHlsZVR5cGVzID0gU3R5bGVUeXBlcztcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMudG9vbHRpcFRleHQpIHtcbiAgICAgIHRoaXMudG9vbHRpcFRleHQgPSB0aGlzLmdldFRvb2x0aXBUZXh0O1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuY2VsbHMgPSB0aGlzLmdldENlbGxzKCk7XG4gIH1cblxuICBnZXRDZWxscygpOiBDZWxsW10ge1xuICAgIGNvbnN0IGNlbGxzID0gW107XG5cbiAgICB0aGlzLmRhdGEubWFwKHJvdyA9PiB7XG4gICAgICByb3cuc2VyaWVzLm1hcChjZWxsID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjZWxsLnZhbHVlO1xuICAgICAgICBjZWxsLnNlcmllcyA9IHJvdy5uYW1lO1xuXG4gICAgICAgIGNlbGxzLnB1c2goe1xuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBjZWxsLFxuICAgICAgICAgIHg6IHRoaXMueFNjYWxlKHJvdy5uYW1lKSxcbiAgICAgICAgICB5OiB0aGlzLnlTY2FsZShjZWxsLm5hbWUpLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLnhTY2FsZS5iYW5kd2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMueVNjYWxlLmJhbmR3aWR0aCgpLFxuICAgICAgICAgIGZpbGw6IHRoaXMuY29sb3JzLmdldENvbG9yKHZhbHVlKSxcbiAgICAgICAgICBkYXRhOiB2YWx1ZSxcbiAgICAgICAgICBsYWJlbDogZm9ybWF0TGFiZWwoY2VsbC5uYW1lKSxcbiAgICAgICAgICBzZXJpZXM6IHJvdy5uYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2VsbHM7XG4gIH1cblxuICBnZXRUb29sdGlwVGV4dCh7IGxhYmVsLCBkYXRhLCBzZXJpZXMgfTogeyBsYWJlbDogc3RyaW5nOyBkYXRhOiBudW1iZXI7IHNlcmllczogc3RyaW5nIH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXAtbGFiZWxcIj4ke2VzY2FwZUxhYmVsKHNlcmllcyl9IOKAoiAke2VzY2FwZUxhYmVsKGxhYmVsKX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXAtdmFsXCI+JHtkYXRhLnRvTG9jYWxlU3RyaW5nKCl9PC9zcGFuPlxuICAgIGA7XG4gIH1cblxuICB0cmFja0J5KGluZGV4OiBudW1iZXIsIGl0ZW0pOiBzdHJpbmcge1xuICAgIHJldHVybiBpdGVtLmxhYmVsO1xuICB9XG5cbiAgb25DbGljayhkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcbiAgfVxufVxuIl19