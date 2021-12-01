import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { treemap, stratify } from 'd3-hierarchy';
import { BaseChartComponent } from '../common/base-chart.component';
import { calculateViewDimensions } from '../common/view-dimensions.helper';
import { ColorHelper } from '../common/color.helper';
import { ScaleType } from '../common/types/scale-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../common/charts/chart.component";
import * as i2 from "./tree-map-cell-series.component";
const _c0 = ["tooltipTemplate"];
const _c1 = function (a0, a1) { return [a0, a1]; };
export class TreeMapComponent extends BaseChartComponent {
    constructor() {
        super(...arguments);
        this.tooltipDisabled = false;
        this.gradient = false;
        this.select = new EventEmitter();
        this.margin = [10, 10, 10, 10];
    }
    update() {
        super.update();
        this.dims = calculateViewDimensions({
            width: this.width,
            height: this.height,
            margins: this.margin
        });
        this.domain = this.getDomain();
        this.treemap = treemap().size([this.dims.width, this.dims.height]);
        const rootNode = {
            name: 'root',
            value: 0,
            isRoot: true
        };
        const root = stratify()
            .id(d => {
            let label = d.name;
            if (label.constructor.name === 'Date') {
                label = label.toLocaleDateString();
            }
            else {
                label = label.toLocaleString();
            }
            return label;
        })
            .parentId(d => (d.isRoot ? null : 'root'))([rootNode, ...this.results])
            .sum(d => d.value);
        this.data = this.treemap(root);
        this.setColors();
        this.transform = `translate(${this.dims.xOffset} , ${this.margin[0]})`;
    }
    getDomain() {
        return this.results.map(d => d.name);
    }
    onClick(data) {
        this.select.emit(data);
    }
    setColors() {
        this.colors = new ColorHelper(this.scheme, ScaleType.Ordinal, this.domain, this.customColors);
    }
}
TreeMapComponent.ɵfac = /*@__PURE__*/ function () { let ɵTreeMapComponent_BaseFactory; return function TreeMapComponent_Factory(t) { return (ɵTreeMapComponent_BaseFactory || (ɵTreeMapComponent_BaseFactory = i0.ɵɵgetInheritedFactory(TreeMapComponent)))(t || TreeMapComponent); }; }();
TreeMapComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeMapComponent, selectors: [["ngx-charts-tree-map"]], contentQueries: function TreeMapComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
    } }, inputs: { results: "results", tooltipDisabled: "tooltipDisabled", valueFormatting: "valueFormatting", labelFormatting: "labelFormatting", gradient: "gradient" }, outputs: { select: "select" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 16, consts: [[3, "view", "showLegend", "animations"], [1, "tree-map", "chart"], ["ngx-charts-tree-map-cell-series", "", 3, "colors", "data", "dims", "tooltipDisabled", "tooltipTemplate", "valueFormatting", "labelFormatting", "gradient", "animations", "select"]], template: function TreeMapComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ngx-charts-chart", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "g", 1);
        i0.ɵɵelementStart(2, "g", 2);
        i0.ɵɵlistener("select", function TreeMapComponent_Template__svg_g_select_2_listener($event) { return ctx.onClick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("view", i0.ɵɵpureFunction2(13, _c1, ctx.width, ctx.height))("showLegend", false)("animations", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("colors", ctx.colors)("data", ctx.data)("dims", ctx.dims)("tooltipDisabled", ctx.tooltipDisabled)("tooltipTemplate", ctx.tooltipTemplate)("valueFormatting", ctx.valueFormatting)("labelFormatting", ctx.labelFormatting)("gradient", ctx.gradient)("animations", ctx.animations);
    } }, directives: [i1.ChartComponent, i2.TreeMapCellSeriesComponent], styles: [".tree-map .treemap-val{font-size:1.3em;padding-top:5px;display:inline-block}.tree-map .treemap-label p{display:table-cell;text-align:center;line-height:1.2em;vertical-align:middle}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeMapComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-tree-map', template: `
    <ngx-charts-chart [view]="[width, height]" [showLegend]="false" [animations]="animations">
      <svg:g [attr.transform]="transform" class="tree-map chart">
        <svg:g
          ngx-charts-tree-map-cell-series
          [colors]="colors"
          [data]="data"
          [dims]="dims"
          [tooltipDisabled]="tooltipDisabled"
          [tooltipTemplate]="tooltipTemplate"
          [valueFormatting]="valueFormatting"
          [labelFormatting]="labelFormatting"
          [gradient]="gradient"
          [animations]="animations"
          (select)="onClick($event)"
        />
      </svg:g>
    </ngx-charts-chart>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".tree-map .treemap-val{font-size:1.3em;padding-top:5px;display:inline-block}.tree-map .treemap-label p{display:table-cell;text-align:center;line-height:1.2em;vertical-align:middle}\n"] }]
    }], null, { results: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], gradient: [{
            type: Input
        }], select: [{
            type: Output
        }], tooltipTemplate: [{
            type: ContentChild,
            args: ['tooltipTemplate']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL3RyZWUtbWFwL3RyZWUtbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7OztBQTJCNUQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGtCQUFrQjtJQXpCeEQ7O1FBMkJXLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBR2pDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFVdEMsV0FBTSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FxRHJDO0lBbkRDLE1BQU07UUFDSixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsSUFBSSxHQUFHLHVCQUF1QixDQUFDO1lBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3JCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRXhFLE1BQU0sUUFBUSxHQUFHO1lBQ2YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHLFFBQVEsRUFBTzthQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRW5CLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUNyQyxLQUFLLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0wsS0FBSyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUNoQztZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDO2FBQ0QsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFjO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7d09BckVVLGdCQUFnQixTQUFoQixnQkFBZ0I7bUVBQWhCLGdCQUFnQjs7Ozs7O1FBdEJ6QiwyQ0FBMEY7UUFDeEYsbUJBQTJEO1FBQTNELDRCQUEyRDtRQUN6RCw0QkFZRTtRQURBLHFHQUFVLG1CQUFlLElBQUM7UUFYNUIsaUJBWUU7UUFDSixpQkFBUTtRQUNWLGlCQUFtQjs7UUFoQkQseUVBQXdCLHFCQUFBLDhCQUFBO1FBQ2pDLGVBQTRCO1FBQTVCLDBDQUE0QjtRQUcvQixlQUFpQjtRQUFqQixtQ0FBaUIsa0JBQUEsa0JBQUEsd0NBQUEsd0NBQUEsd0NBQUEsd0NBQUEsMEJBQUEsOEJBQUE7O3VGQWtCZCxnQkFBZ0I7Y0F6QjVCLFNBQVM7MkJBQ0UscUJBQXFCLFlBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQsaUJBRWMsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTtnQkFHdEMsT0FBTztrQkFBZixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTTtZQUUwQixlQUFlO2tCQUEvQyxZQUFZO21CQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbnRlbnRDaGlsZCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmVlbWFwLCBzdHJhdGlmeSB9IGZyb20gJ2QzLWhpZXJhcmNoeSc7XG5cbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucyB9IGZyb20gJy4uL2NvbW1vbi92aWV3LWRpbWVuc2lvbnMuaGVscGVyJztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yLmhlbHBlcic7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gJy4uL21vZGVscy9jaGFydC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3ZpZXctZGltZW5zaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTY2FsZVR5cGUgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvc2NhbGUtdHlwZS5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNoYXJ0cy10cmVlLW1hcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5neC1jaGFydHMtY2hhcnQgW3ZpZXddPVwiW3dpZHRoLCBoZWlnaHRdXCIgW3Nob3dMZWdlbmRdPVwiZmFsc2VcIiBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCI+XG4gICAgICA8c3ZnOmcgW2F0dHIudHJhbnNmb3JtXT1cInRyYW5zZm9ybVwiIGNsYXNzPVwidHJlZS1tYXAgY2hhcnRcIj5cbiAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgbmd4LWNoYXJ0cy10cmVlLW1hcC1jZWxsLXNlcmllc1xuICAgICAgICAgIFtjb2xvcnNdPVwiY29sb3JzXCJcbiAgICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgICBbZGltc109XCJkaW1zXCJcbiAgICAgICAgICBbdG9vbHRpcERpc2FibGVkXT1cInRvb2x0aXBEaXNhYmxlZFwiXG4gICAgICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgICAgIFt2YWx1ZUZvcm1hdHRpbmddPVwidmFsdWVGb3JtYXR0aW5nXCJcbiAgICAgICAgICBbbGFiZWxGb3JtYXR0aW5nXT1cImxhYmVsRm9ybWF0dGluZ1wiXG4gICAgICAgICAgW2dyYWRpZW50XT1cImdyYWRpZW50XCJcbiAgICAgICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICAgICAgICAoc2VsZWN0KT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgIC8+XG4gICAgICA8L3N2ZzpnPlxuICAgIDwvbmd4LWNoYXJ0cy1jaGFydD5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vdHJlZS1tYXAuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVHJlZU1hcENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHJlc3VsdHM6IERhdGFJdGVtW107XG4gIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB2YWx1ZUZvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgbGFiZWxGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIGdyYWRpZW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkKCd0b29sdGlwVGVtcGxhdGUnKSB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZGltczogVmlld0RpbWVuc2lvbnM7XG4gIGRvbWFpbjogYW55O1xuICB0cmFuc2Zvcm06IGFueTtcbiAgY29sb3JzOiBDb2xvckhlbHBlcjtcbiAgdHJlZW1hcDogYW55O1xuICBkYXRhOiBEYXRhSXRlbTtcbiAgbWFyZ2luOiBudW1iZXJbXSA9IFsxMCwgMTAsIDEwLCAxMF07XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5kaW1zID0gY2FsY3VsYXRlVmlld0RpbWVuc2lvbnMoe1xuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgbWFyZ2luczogdGhpcy5tYXJnaW5cbiAgICB9KTtcblxuICAgIHRoaXMuZG9tYWluID0gdGhpcy5nZXREb21haW4oKTtcblxuICAgIHRoaXMudHJlZW1hcCA9IHRyZWVtYXA8YW55PigpLnNpemUoW3RoaXMuZGltcy53aWR0aCwgdGhpcy5kaW1zLmhlaWdodF0pO1xuXG4gICAgY29uc3Qgcm9vdE5vZGUgPSB7XG4gICAgICBuYW1lOiAncm9vdCcsXG4gICAgICB2YWx1ZTogMCxcbiAgICAgIGlzUm9vdDogdHJ1ZVxuICAgIH07XG5cbiAgICBjb25zdCByb290ID0gc3RyYXRpZnk8YW55PigpXG4gICAgICAuaWQoZCA9PiB7XG4gICAgICAgIGxldCBsYWJlbCA9IGQubmFtZTtcblxuICAgICAgICBpZiAobGFiZWwuY29uc3RydWN0b3IubmFtZSA9PT0gJ0RhdGUnKSB7XG4gICAgICAgICAgbGFiZWwgPSBsYWJlbC50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYWJlbCA9IGxhYmVsLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgfSlcbiAgICAgIC5wYXJlbnRJZChkID0+IChkLmlzUm9vdCA/IG51bGwgOiAncm9vdCcpKShbcm9vdE5vZGUsIC4uLnRoaXMucmVzdWx0c10pXG4gICAgICAuc3VtKGQgPT4gZC52YWx1ZSk7XG5cbiAgICB0aGlzLmRhdGEgPSB0aGlzLnRyZWVtYXAocm9vdCk7XG5cbiAgICB0aGlzLnNldENvbG9ycygpO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy5kaW1zLnhPZmZzZXR9ICwgJHt0aGlzLm1hcmdpblswXX0pYDtcbiAgfVxuXG4gIGdldERvbWFpbigpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0cy5tYXAoZCA9PiBkLm5hbWUpO1xuICB9XG5cbiAgb25DbGljayhkYXRhOiBEYXRhSXRlbSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoZGF0YSk7XG4gIH1cblxuICBzZXRDb2xvcnMoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xvcnMgPSBuZXcgQ29sb3JIZWxwZXIodGhpcy5zY2hlbWUsIFNjYWxlVHlwZS5PcmRpbmFsLCB0aGlzLmRvbWFpbiwgdGhpcy5jdXN0b21Db2xvcnMpO1xuICB9XG59XG4iXX0=