import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { XAxisTicksComponent } from './x-axis-ticks.component';
import { Orientation } from '../types/orientation.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./x-axis-ticks.component";
import * as i3 from "./axis-label.component";
const _c0 = ["ngx-charts-x-axis", ""];
function XAxisComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 2);
    i0.ɵɵlistener("dimensionsChanged", function XAxisComponent__svg_g_1_Template__svg_g_dimensionsChanged_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.emitTicksHeight($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("trimTicks", ctx_r0.trimTicks)("rotateTicks", ctx_r0.rotateTicks)("maxTickLength", ctx_r0.maxTickLength)("tickFormatting", ctx_r0.tickFormatting)("tickArguments", ctx_r0.tickArguments)("tickStroke", ctx_r0.tickStroke)("scale", ctx_r0.xScale)("orient", ctx_r0.xOrient)("showGridLines", ctx_r0.showGridLines)("gridLineHeight", ctx_r0.dims.height)("width", ctx_r0.dims.width)("tickValues", ctx_r0.ticks);
} }
function XAxisComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "g", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("label", ctx_r1.labelText)("offset", ctx_r1.labelOffset)("orient", ctx_r1.orientation.Bottom)("height", ctx_r1.dims.height)("width", ctx_r1.dims.width);
} }
export class XAxisComponent {
    constructor() {
        this.rotateTicks = true;
        this.showGridLines = false;
        this.xOrient = Orientation.Bottom;
        this.xAxisOffset = 0;
        this.dimensionsChanged = new EventEmitter();
        this.xAxisClassName = 'x axis';
        this.labelOffset = 0;
        this.fill = 'none';
        this.stroke = 'stroke';
        this.tickStroke = '#ccc';
        this.strokeWidth = 'none';
        this.padding = 5;
        this.orientation = Orientation;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.transform = `translate(0,${this.xAxisOffset + this.padding + this.dims.height})`;
        if (typeof this.xAxisTickCount !== 'undefined') {
            this.tickArguments = [this.xAxisTickCount];
        }
    }
    emitTicksHeight({ height }) {
        const newLabelOffset = height + 25 + 5;
        if (newLabelOffset !== this.labelOffset) {
            this.labelOffset = newLabelOffset;
            setTimeout(() => {
                this.dimensionsChanged.emit({ height });
            }, 0);
        }
    }
}
XAxisComponent.ɵfac = function XAxisComponent_Factory(t) { return new (t || XAxisComponent)(); };
XAxisComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: XAxisComponent, selectors: [["g", "ngx-charts-x-axis", ""]], viewQuery: function XAxisComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(XAxisTicksComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ticksComponent = _t.first);
    } }, inputs: { xScale: "xScale", dims: "dims", trimTicks: "trimTicks", rotateTicks: "rotateTicks", maxTickLength: "maxTickLength", tickFormatting: "tickFormatting", showGridLines: "showGridLines", showLabel: "showLabel", labelText: "labelText", ticks: "ticks", xAxisTickCount: "xAxisTickCount", xOrient: "xOrient", xAxisOffset: "xAxisOffset" }, outputs: { dimensionsChanged: "dimensionsChanged" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 3, vars: 4, consts: [["ngx-charts-x-axis-ticks", "", 3, "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickStroke", "scale", "orient", "showGridLines", "gridLineHeight", "width", "tickValues", "dimensionsChanged", 4, "ngIf"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width", 4, "ngIf"], ["ngx-charts-x-axis-ticks", "", 3, "trimTicks", "rotateTicks", "maxTickLength", "tickFormatting", "tickArguments", "tickStroke", "scale", "orient", "showGridLines", "gridLineHeight", "width", "tickValues", "dimensionsChanged"], ["ngx-charts-axis-label", "", 3, "label", "offset", "orient", "height", "width"]], template: function XAxisComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g");
        i0.ɵɵtemplate(1, XAxisComponent__svg_g_1_Template, 1, 12, "g", 0);
        i0.ɵɵtemplate(2, XAxisComponent__svg_g_2_Template, 1, 5, "g", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("class", ctx.xAxisClassName)("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.xScale);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showLabel);
    } }, directives: [i1.NgIf, i2.XAxisTicksComponent, i3.AxisLabelComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(XAxisComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-x-axis]',
                template: `
    <svg:g [attr.class]="xAxisClassName" [attr.transform]="transform">
      <svg:g
        ngx-charts-x-axis-ticks
        *ngIf="xScale"
        [trimTicks]="trimTicks"
        [rotateTicks]="rotateTicks"
        [maxTickLength]="maxTickLength"
        [tickFormatting]="tickFormatting"
        [tickArguments]="tickArguments"
        [tickStroke]="tickStroke"
        [scale]="xScale"
        [orient]="xOrient"
        [showGridLines]="showGridLines"
        [gridLineHeight]="dims.height"
        [width]="dims.width"
        [tickValues]="ticks"
        (dimensionsChanged)="emitTicksHeight($event)"
      />
      <svg:g
        ngx-charts-axis-label
        *ngIf="showLabel"
        [label]="labelText"
        [offset]="labelOffset"
        [orient]="orientation.Bottom"
        [height]="dims.height"
        [width]="dims.width"
      ></svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { xScale: [{
            type: Input
        }], dims: [{
            type: Input
        }], trimTicks: [{
            type: Input
        }], rotateTicks: [{
            type: Input
        }], maxTickLength: [{
            type: Input
        }], tickFormatting: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], showLabel: [{
            type: Input
        }], labelText: [{
            type: Input
        }], ticks: [{
            type: Input
        }], xAxisTickCount: [{
            type: Input
        }], xOrient: [{
            type: Input
        }], xAxisOffset: [{
            type: Input
        }], dimensionsChanged: [{
            type: Output
        }], ticksComponent: [{
            type: ViewChild,
            args: [XAxisTicksComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC1heGlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9jb21tb24vYXhlcy94LWF4aXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUNULHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztJQU9sRCw0QkFnQkU7SUFEQSw0TEFBcUIsOEJBQXVCLElBQUM7SUFmL0MsaUJBZ0JFOzs7SUFiQSw0Q0FBdUIsbUNBQUEsdUNBQUEseUNBQUEsdUNBQUEsaUNBQUEsd0JBQUEsMEJBQUEsdUNBQUEsc0NBQUEsNEJBQUEsNEJBQUE7Ozs7SUFjekIsdUJBUVM7OztJQUxQLHdDQUFtQiw4QkFBQSxxQ0FBQSw4QkFBQSw0QkFBQTs7QUFVM0IsTUFBTSxPQUFPLGNBQWM7SUFsQzNCO1FBc0NXLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBS3RCLFlBQU8sR0FBZ0IsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUMxQyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV2QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELG1CQUFjLEdBQVcsUUFBUSxDQUFDO1FBSWxDLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFNBQUksR0FBVyxNQUFNLENBQUM7UUFDdEIsV0FBTSxHQUFXLFFBQVEsQ0FBQztRQUMxQixlQUFVLEdBQVcsTUFBTSxDQUFDO1FBQzVCLGdCQUFXLEdBQVcsTUFBTSxDQUFDO1FBQzdCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFFWCxnQkFBVyxHQUFHLFdBQVcsQ0FBQztLQXlCcEM7SUFyQkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUV0RixJQUFJLE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxXQUFXLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsRUFBRSxNQUFNLEVBQUU7UUFDeEIsTUFBTSxjQUFjLEdBQUcsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxjQUFjLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztZQUNsQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNQO0lBQ0gsQ0FBQzs7NEVBcERVLGNBQWM7aUVBQWQsY0FBYzt1QkE4QmQsbUJBQW1COzs7OztRQTdENUIsbUJBQWtFO1FBQWxFLHlCQUFrRTtRQUNoRSxpRUFnQkU7UUFDRixnRUFRUztRQUNYLGlCQUFROztRQTNCRCwyQ0FBNkIsNEJBQUE7UUFHL0IsZUFBWTtRQUFaLGlDQUFZO1FBaUJaLGVBQWU7UUFBZixvQ0FBZTs7dUZBV1gsY0FBYztjQWxDMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2QlQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Z0JBRVUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBRUksaUJBQWlCO2tCQUExQixNQUFNO1lBZXlCLGNBQWM7a0JBQTdDLFNBQVM7bUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgWEF4aXNUaWNrc0NvbXBvbmVudCB9IGZyb20gJy4veC1heGlzLXRpY2tzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmllbnRhdGlvbiB9IGZyb20gJy4uL3R5cGVzL29yaWVudGF0aW9uLmVudW0nO1xuaW1wb3J0IHsgVmlld0RpbWVuc2lvbnMgfSBmcm9tICcuLi90eXBlcy92aWV3LWRpbWVuc2lvbi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMteC1heGlzXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZzpnIFthdHRyLmNsYXNzXT1cInhBeGlzQ2xhc3NOYW1lXCIgW2F0dHIudHJhbnNmb3JtXT1cInRyYW5zZm9ybVwiPlxuICAgICAgPHN2ZzpnXG4gICAgICAgIG5neC1jaGFydHMteC1heGlzLXRpY2tzXG4gICAgICAgICpuZ0lmPVwieFNjYWxlXCJcbiAgICAgICAgW3RyaW1UaWNrc109XCJ0cmltVGlja3NcIlxuICAgICAgICBbcm90YXRlVGlja3NdPVwicm90YXRlVGlja3NcIlxuICAgICAgICBbbWF4VGlja0xlbmd0aF09XCJtYXhUaWNrTGVuZ3RoXCJcbiAgICAgICAgW3RpY2tGb3JtYXR0aW5nXT1cInRpY2tGb3JtYXR0aW5nXCJcbiAgICAgICAgW3RpY2tBcmd1bWVudHNdPVwidGlja0FyZ3VtZW50c1wiXG4gICAgICAgIFt0aWNrU3Ryb2tlXT1cInRpY2tTdHJva2VcIlxuICAgICAgICBbc2NhbGVdPVwieFNjYWxlXCJcbiAgICAgICAgW29yaWVudF09XCJ4T3JpZW50XCJcbiAgICAgICAgW3Nob3dHcmlkTGluZXNdPVwic2hvd0dyaWRMaW5lc1wiXG4gICAgICAgIFtncmlkTGluZUhlaWdodF09XCJkaW1zLmhlaWdodFwiXG4gICAgICAgIFt3aWR0aF09XCJkaW1zLndpZHRoXCJcbiAgICAgICAgW3RpY2tWYWx1ZXNdPVwidGlja3NcIlxuICAgICAgICAoZGltZW5zaW9uc0NoYW5nZWQpPVwiZW1pdFRpY2tzSGVpZ2h0KCRldmVudClcIlxuICAgICAgLz5cbiAgICAgIDxzdmc6Z1xuICAgICAgICBuZ3gtY2hhcnRzLWF4aXMtbGFiZWxcbiAgICAgICAgKm5nSWY9XCJzaG93TGFiZWxcIlxuICAgICAgICBbbGFiZWxdPVwibGFiZWxUZXh0XCJcbiAgICAgICAgW29mZnNldF09XCJsYWJlbE9mZnNldFwiXG4gICAgICAgIFtvcmllbnRdPVwib3JpZW50YXRpb24uQm90dG9tXCJcbiAgICAgICAgW2hlaWdodF09XCJkaW1zLmhlaWdodFwiXG4gICAgICAgIFt3aWR0aF09XCJkaW1zLndpZHRoXCJcbiAgICAgID48L3N2ZzpnPlxuICAgIDwvc3ZnOmc+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFhBeGlzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgeFNjYWxlO1xuICBASW5wdXQoKSBkaW1zOiBWaWV3RGltZW5zaW9ucztcbiAgQElucHV0KCkgdHJpbVRpY2tzOiBib29sZWFuO1xuICBASW5wdXQoKSByb3RhdGVUaWNrczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG1heFRpY2tMZW5ndGg6IG51bWJlcjtcbiAgQElucHV0KCkgdGlja0Zvcm1hdHRpbmc7XG4gIEBJbnB1dCgpIHNob3dHcmlkTGluZXMgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd0xhYmVsOiBib29sZWFuO1xuICBASW5wdXQoKSBsYWJlbFRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgdGlja3M6IGFueVtdO1xuICBASW5wdXQoKSB4QXhpc1RpY2tDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSB4T3JpZW50OiBPcmllbnRhdGlvbiA9IE9yaWVudGF0aW9uLkJvdHRvbTtcbiAgQElucHV0KCkgeEF4aXNPZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgQE91dHB1dCgpIGRpbWVuc2lvbnNDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHhBeGlzQ2xhc3NOYW1lOiBzdHJpbmcgPSAneCBheGlzJztcblxuICB0aWNrQXJndW1lbnRzOiBudW1iZXJbXTtcbiAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIGxhYmVsT2Zmc2V0OiBudW1iZXIgPSAwO1xuICBmaWxsOiBzdHJpbmcgPSAnbm9uZSc7XG4gIHN0cm9rZTogc3RyaW5nID0gJ3N0cm9rZSc7XG4gIHRpY2tTdHJva2U6IHN0cmluZyA9ICcjY2NjJztcbiAgc3Ryb2tlV2lkdGg6IHN0cmluZyA9ICdub25lJztcbiAgcGFkZGluZzogbnVtYmVyID0gNTtcblxuICByZWFkb25seSBvcmllbnRhdGlvbiA9IE9yaWVudGF0aW9uO1xuXG4gIEBWaWV3Q2hpbGQoWEF4aXNUaWNrc0NvbXBvbmVudCkgdGlja3NDb21wb25lbnQ6IFhBeGlzVGlja3NDb21wb25lbnQ7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAsJHt0aGlzLnhBeGlzT2Zmc2V0ICsgdGhpcy5wYWRkaW5nICsgdGhpcy5kaW1zLmhlaWdodH0pYDtcblxuICAgIGlmICh0eXBlb2YgdGhpcy54QXhpc1RpY2tDb3VudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMudGlja0FyZ3VtZW50cyA9IFt0aGlzLnhBeGlzVGlja0NvdW50XTtcbiAgICB9XG4gIH1cblxuICBlbWl0VGlja3NIZWlnaHQoeyBoZWlnaHQgfSk6IHZvaWQge1xuICAgIGNvbnN0IG5ld0xhYmVsT2Zmc2V0ID0gaGVpZ2h0ICsgMjUgKyA1O1xuICAgIGlmIChuZXdMYWJlbE9mZnNldCAhPT0gdGhpcy5sYWJlbE9mZnNldCkge1xuICAgICAgdGhpcy5sYWJlbE9mZnNldCA9IG5ld0xhYmVsT2Zmc2V0O1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9uc0NoYW5nZWQuZW1pdCh7IGhlaWdodCB9KTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxufVxuIl19