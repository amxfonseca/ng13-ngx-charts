import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { TooltipService } from '../tooltip/tooltip.service';
import { LegendType, LegendPosition } from '../types/legend.model';
import { ScaleType } from '../types/scale-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../legend/scale-legend.component";
import * as i3 from "../legend/legend.component";
function ChartComponent_ngx_charts_scale_legend_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(0, "ngx-charts-scale-legend", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("horizontal", ctx_r0.legendOptions && ctx_r0.legendOptions.position === ctx_r0.LegendPosition.Below)("valueRange", ctx_r0.legendOptions.domain)("colors", ctx_r0.legendOptions.colors)("height", ctx_r0.view[1])("width", ctx_r0.legendWidth);
} }
function ChartComponent_ngx_charts_legend_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(0, "ngx-charts-legend", 5);
    i0.ɵɵlistener("labelClick", function ChartComponent_ngx_charts_legend_4_Template_ngx_charts_legend_labelClick_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.legendLabelClick.emit($event); })("labelActivate", function ChartComponent_ngx_charts_legend_4_Template_ngx_charts_legend_labelActivate_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.legendLabelActivate.emit($event); })("labelDeactivate", function ChartComponent_ngx_charts_legend_4_Template_ngx_charts_legend_labelDeactivate_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.legendLabelDeactivate.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("horizontal", ctx_r1.legendOptions && ctx_r1.legendOptions.position === ctx_r1.LegendPosition.Below)("data", ctx_r1.legendOptions.domain)("title", ctx_r1.legendOptions.title)("colors", ctx_r1.legendOptions.colors)("height", ctx_r1.view[1])("width", ctx_r1.legendWidth)("activeEntries", ctx_r1.activeEntries);
} }
const _c0 = ["*"];
export class ChartComponent {
    constructor() {
        this.showLegend = false;
        this.animations = true;
        this.legendLabelClick = new EventEmitter();
        this.legendLabelActivate = new EventEmitter();
        this.legendLabelDeactivate = new EventEmitter();
        this.LegendPosition = LegendPosition;
        this.LegendType = LegendType;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        let legendColumns = 0;
        if (this.showLegend) {
            this.legendType = this.getLegendType();
            if (!this.legendOptions || this.legendOptions.position === LegendPosition.Right) {
                if (this.legendType === LegendType.ScaleLegend) {
                    legendColumns = 1;
                }
                else {
                    legendColumns = 2;
                }
            }
        }
        const chartColumns = 12 - legendColumns;
        this.chartWidth = Math.floor((this.view[0] * chartColumns) / 12.0);
        this.legendWidth =
            !this.legendOptions || this.legendOptions.position === LegendPosition.Right
                ? Math.floor((this.view[0] * legendColumns) / 12.0)
                : this.chartWidth;
    }
    getLegendType() {
        return this.legendOptions.scaleType === ScaleType.Linear ? LegendType.ScaleLegend : LegendType.Legend;
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["ngx-charts-chart"]], inputs: { view: "view", showLegend: "showLegend", legendOptions: "legendOptions", legendType: "legendType", activeEntries: "activeEntries", animations: "animations" }, outputs: { legendLabelClick: "legendLabelClick", legendLabelActivate: "legendLabelActivate", legendLabelDeactivate: "legendLabelDeactivate" }, features: [i0.ɵɵProvidersFeature([TooltipService]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 5, vars: 6, consts: [[1, "ngx-charts-outer"], [1, "ngx-charts"], ["class", "chart-legend", 3, "horizontal", "valueRange", "colors", "height", "width", 4, "ngIf"], ["class", "chart-legend", 3, "horizontal", "data", "title", "colors", "height", "width", "activeEntries", "labelClick", "labelActivate", "labelDeactivate", 4, "ngIf"], [1, "chart-legend", 3, "horizontal", "valueRange", "colors", "height", "width"], [1, "chart-legend", 3, "horizontal", "data", "title", "colors", "height", "width", "activeEntries", "labelClick", "labelActivate", "labelDeactivate"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, ChartComponent_ngx_charts_scale_legend_3_Template, 1, 5, "ngx-charts-scale-legend", 2);
        i0.ɵɵtemplate(4, ChartComponent_ngx_charts_legend_4_Template, 1, 7, "ngx-charts-legend", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.view[0], "px");
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("width", ctx.chartWidth)("height", ctx.view[1]);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showLegend && ctx.legendType === ctx.LegendType.ScaleLegend);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showLegend && ctx.legendType === ctx.LegendType.Legend);
    } }, directives: [i1.NgIf, i2.ScaleLegendComponent, i3.LegendComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartComponent, [{
        type: Component,
        args: [{
                providers: [TooltipService],
                selector: 'ngx-charts-chart',
                template: `
    <div class="ngx-charts-outer" [style.width.px]="view[0]">
      <svg class="ngx-charts" [attr.width]="chartWidth" [attr.height]="view[1]">
        <ng-content></ng-content>
      </svg>
      <ngx-charts-scale-legend
        *ngIf="showLegend && legendType === LegendType.ScaleLegend"
        class="chart-legend"
        [horizontal]="legendOptions && legendOptions.position === LegendPosition.Below"
        [valueRange]="legendOptions.domain"
        [colors]="legendOptions.colors"
        [height]="view[1]"
        [width]="legendWidth"
      >
      </ngx-charts-scale-legend>
      <ngx-charts-legend
        *ngIf="showLegend && legendType === LegendType.Legend"
        class="chart-legend"
        [horizontal]="legendOptions && legendOptions.position === LegendPosition.Below"
        [data]="legendOptions.domain"
        [title]="legendOptions.title"
        [colors]="legendOptions.colors"
        [height]="view[1]"
        [width]="legendWidth"
        [activeEntries]="activeEntries"
        (labelClick)="legendLabelClick.emit($event)"
        (labelActivate)="legendLabelActivate.emit($event)"
        (labelDeactivate)="legendLabelDeactivate.emit($event)"
      >
      </ngx-charts-legend>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { view: [{
            type: Input
        }], showLegend: [{
            type: Input
        }], legendOptions: [{
            type: Input
        }], legendType: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], animations: [{
            type: Input
        }], legendLabelClick: [{
            type: Output
        }], legendLabelActivate: [{
            type: Output
        }], legendLabelDeactivate: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2NvbW1vbi9jaGFydHMvY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLHVCQUF1QixFQUN2QixZQUFZLEVBQ1osTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQWlCLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7SUFVL0Msb0JBUUM7SUFSRCw2Q0FTMEI7OztJQU54QixrSEFBK0UsMkNBQUEsdUNBQUEsMEJBQUEsNkJBQUE7Ozs7O0lBT2pGLG9CQWFDO0lBYkQsNENBYUM7SUFIQyxvTUFBYyxvQ0FBNkIsSUFBQyw2TEFDM0IsdUNBQWdDLElBREwsaU1BRXpCLHlDQUFrQyxJQUZUO0lBSTlDLGlCQUFvQjs7O0lBWGxCLGtIQUErRSxxQ0FBQSxxQ0FBQSx1Q0FBQSwwQkFBQSw2QkFBQSx1Q0FBQTs7O0FBZ0J2RixNQUFNLE9BQU8sY0FBYztJQXJDM0I7UUF1Q1csZUFBVSxHQUFZLEtBQUssQ0FBQztRQUk1QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRTFCLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDOUMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDM0QsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFNOUQsbUJBQWMsR0FBRyxjQUFjLENBQUM7UUFDaEMsZUFBVSxHQUFHLFVBQVUsQ0FBQztLQWdDbEM7SUE5QkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEtBQUssY0FBYyxDQUFDLEtBQUssRUFBRTtnQkFDL0UsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxXQUFXLEVBQUU7b0JBQzlDLGFBQWEsR0FBRyxDQUFDLENBQUM7aUJBQ25CO3FCQUFNO29CQUNMLGFBQWEsR0FBRyxDQUFDLENBQUM7aUJBQ25CO2FBQ0Y7U0FDRjtRQUVELE1BQU0sWUFBWSxHQUFHLEVBQUUsR0FBRyxhQUFhLENBQUM7UUFFeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVztZQUNkLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsS0FBSyxjQUFjLENBQUMsS0FBSztnQkFDekUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDbkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDeEcsQ0FBQzs7NEVBaERVLGNBQWM7aUVBQWQsY0FBYyw2WEFwQ2QsQ0FBQyxjQUFjLENBQUM7O1FBR3pCLDhCQUF5RDtRQUN2RCxtQkFBMEU7UUFBMUUsOEJBQTBFO1FBQ3hFLGtCQUF5QjtRQUMzQixpQkFBTTtRQUNOLHVHQVMwQjtRQUMxQiwyRkFjb0I7UUFDdEIsaUJBQU07O1FBN0J3QiwwQ0FBMEI7UUFDOUIsZUFBeUI7UUFBekIsdUNBQXlCLHVCQUFBO1FBSTlDLGVBQXlEO1FBQXpELHNGQUF5RDtRQVV6RCxlQUFvRDtRQUFwRCxpRkFBb0Q7O3VGQWtCaEQsY0FBYztjQXJDMUIsU0FBUztlQUFDO2dCQUNULFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDM0IsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0JUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dCQUVVLElBQUk7a0JBQVosS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBRUksZ0JBQWdCO2tCQUF6QixNQUFNO1lBQ0csbUJBQW1CO2tCQUE1QixNQUFNO1lBQ0cscUJBQXFCO2tCQUE5QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sdGlwU2VydmljZSB9IGZyb20gJy4uL3Rvb2x0aXAvdG9vbHRpcC5zZXJ2aWNlJztcbmltcG9ydCB7IExlZ2VuZE9wdGlvbnMsIExlZ2VuZFR5cGUsIExlZ2VuZFBvc2l0aW9uIH0gZnJvbSAnLi4vdHlwZXMvbGVnZW5kLm1vZGVsJztcbmltcG9ydCB7IFNjYWxlVHlwZSB9IGZyb20gJy4uL3R5cGVzL3NjYWxlLXR5cGUuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFtUb29sdGlwU2VydmljZV0sXG4gIHNlbGVjdG9yOiAnbmd4LWNoYXJ0cy1jaGFydCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm5neC1jaGFydHMtb3V0ZXJcIiBbc3R5bGUud2lkdGgucHhdPVwidmlld1swXVwiPlxuICAgICAgPHN2ZyBjbGFzcz1cIm5neC1jaGFydHNcIiBbYXR0ci53aWR0aF09XCJjaGFydFdpZHRoXCIgW2F0dHIuaGVpZ2h0XT1cInZpZXdbMV1cIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9zdmc+XG4gICAgICA8bmd4LWNoYXJ0cy1zY2FsZS1sZWdlbmRcbiAgICAgICAgKm5nSWY9XCJzaG93TGVnZW5kICYmIGxlZ2VuZFR5cGUgPT09IExlZ2VuZFR5cGUuU2NhbGVMZWdlbmRcIlxuICAgICAgICBjbGFzcz1cImNoYXJ0LWxlZ2VuZFwiXG4gICAgICAgIFtob3Jpem9udGFsXT1cImxlZ2VuZE9wdGlvbnMgJiYgbGVnZW5kT3B0aW9ucy5wb3NpdGlvbiA9PT0gTGVnZW5kUG9zaXRpb24uQmVsb3dcIlxuICAgICAgICBbdmFsdWVSYW5nZV09XCJsZWdlbmRPcHRpb25zLmRvbWFpblwiXG4gICAgICAgIFtjb2xvcnNdPVwibGVnZW5kT3B0aW9ucy5jb2xvcnNcIlxuICAgICAgICBbaGVpZ2h0XT1cInZpZXdbMV1cIlxuICAgICAgICBbd2lkdGhdPVwibGVnZW5kV2lkdGhcIlxuICAgICAgPlxuICAgICAgPC9uZ3gtY2hhcnRzLXNjYWxlLWxlZ2VuZD5cbiAgICAgIDxuZ3gtY2hhcnRzLWxlZ2VuZFxuICAgICAgICAqbmdJZj1cInNob3dMZWdlbmQgJiYgbGVnZW5kVHlwZSA9PT0gTGVnZW5kVHlwZS5MZWdlbmRcIlxuICAgICAgICBjbGFzcz1cImNoYXJ0LWxlZ2VuZFwiXG4gICAgICAgIFtob3Jpem9udGFsXT1cImxlZ2VuZE9wdGlvbnMgJiYgbGVnZW5kT3B0aW9ucy5wb3NpdGlvbiA9PT0gTGVnZW5kUG9zaXRpb24uQmVsb3dcIlxuICAgICAgICBbZGF0YV09XCJsZWdlbmRPcHRpb25zLmRvbWFpblwiXG4gICAgICAgIFt0aXRsZV09XCJsZWdlbmRPcHRpb25zLnRpdGxlXCJcbiAgICAgICAgW2NvbG9yc109XCJsZWdlbmRPcHRpb25zLmNvbG9yc1wiXG4gICAgICAgIFtoZWlnaHRdPVwidmlld1sxXVwiXG4gICAgICAgIFt3aWR0aF09XCJsZWdlbmRXaWR0aFwiXG4gICAgICAgIFthY3RpdmVFbnRyaWVzXT1cImFjdGl2ZUVudHJpZXNcIlxuICAgICAgICAobGFiZWxDbGljayk9XCJsZWdlbmRMYWJlbENsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIChsYWJlbEFjdGl2YXRlKT1cImxlZ2VuZExhYmVsQWN0aXZhdGUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgKGxhYmVsRGVhY3RpdmF0ZSk9XCJsZWdlbmRMYWJlbERlYWN0aXZhdGUuZW1pdCgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgIDwvbmd4LWNoYXJ0cy1sZWdlbmQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmlldzogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KCkgc2hvd0xlZ2VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsZWdlbmRPcHRpb25zOiBMZWdlbmRPcHRpb25zO1xuICBASW5wdXQoKSBsZWdlbmRUeXBlOiBMZWdlbmRUeXBlO1xuICBASW5wdXQoKSBhY3RpdmVFbnRyaWVzOiBhbnlbXTtcbiAgQElucHV0KCkgYW5pbWF0aW9uczogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGxlZ2VuZExhYmVsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGxlZ2VuZExhYmVsQWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgbmFtZTogc3RyaW5nIH0+KCk7XG4gIEBPdXRwdXQoKSBsZWdlbmRMYWJlbERlYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgbmFtZTogc3RyaW5nIH0+KCk7XG5cbiAgY2hhcnRXaWR0aDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBsZWdlbmRXaWR0aDogbnVtYmVyO1xuXG4gIHJlYWRvbmx5IExlZ2VuZFBvc2l0aW9uID0gTGVnZW5kUG9zaXRpb247XG4gIHJlYWRvbmx5IExlZ2VuZFR5cGUgPSBMZWdlbmRUeXBlO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIGxldCBsZWdlbmRDb2x1bW5zID0gMDtcbiAgICBpZiAodGhpcy5zaG93TGVnZW5kKSB7XG4gICAgICB0aGlzLmxlZ2VuZFR5cGUgPSB0aGlzLmdldExlZ2VuZFR5cGUoKTtcblxuICAgICAgaWYgKCF0aGlzLmxlZ2VuZE9wdGlvbnMgfHwgdGhpcy5sZWdlbmRPcHRpb25zLnBvc2l0aW9uID09PSBMZWdlbmRQb3NpdGlvbi5SaWdodCkge1xuICAgICAgICBpZiAodGhpcy5sZWdlbmRUeXBlID09PSBMZWdlbmRUeXBlLlNjYWxlTGVnZW5kKSB7XG4gICAgICAgICAgbGVnZW5kQ29sdW1ucyA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVnZW5kQ29sdW1ucyA9IDI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGFydENvbHVtbnMgPSAxMiAtIGxlZ2VuZENvbHVtbnM7XG5cbiAgICB0aGlzLmNoYXJ0V2lkdGggPSBNYXRoLmZsb29yKCh0aGlzLnZpZXdbMF0gKiBjaGFydENvbHVtbnMpIC8gMTIuMCk7XG4gICAgdGhpcy5sZWdlbmRXaWR0aCA9XG4gICAgICAhdGhpcy5sZWdlbmRPcHRpb25zIHx8IHRoaXMubGVnZW5kT3B0aW9ucy5wb3NpdGlvbiA9PT0gTGVnZW5kUG9zaXRpb24uUmlnaHRcbiAgICAgICAgPyBNYXRoLmZsb29yKCh0aGlzLnZpZXdbMF0gKiBsZWdlbmRDb2x1bW5zKSAvIDEyLjApXG4gICAgICAgIDogdGhpcy5jaGFydFdpZHRoO1xuICB9XG5cbiAgZ2V0TGVnZW5kVHlwZSgpOiBMZWdlbmRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5sZWdlbmRPcHRpb25zLnNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLkxpbmVhciA/IExlZ2VuZFR5cGUuU2NhbGVMZWdlbmQgOiBMZWdlbmRUeXBlLkxlZ2VuZDtcbiAgfVxufVxuIl19