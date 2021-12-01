import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { escapeLabel } from '../common/label.helper';
import { StyleTypes } from '../common/tooltip/style.type';
import { PlacementTypes } from '../common/tooltip/position';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./tree-map-cell.component";
import * as i3 from "../common/tooltip/tooltip.directive";
const _c0 = ["ngx-charts-tree-map-cell-series", ""];
function TreeMapCellSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 1);
    i0.ɵɵlistener("select", function TreeMapCellSeriesComponent__svg_g_0_Template__svg_g_select_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("data", c_r1.data)("x", c_r1.x)("y", c_r1.y)("width", c_r1.width)("height", c_r1.height)("fill", c_r1.fill)("label", c_r1.label)("value", c_r1.value)("valueFormatting", ctx_r0.valueFormatting)("labelFormatting", ctx_r0.labelFormatting)("gradient", ctx_r0.gradient)("animations", ctx_r0.animations)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", ctx_r0.placementTypes.Top)("tooltipType", ctx_r0.styleTypes.tooltip)("tooltipTitle", ctx_r0.tooltipTemplate ? undefined : ctx_r0.getTooltipText(c_r1))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", c_r1.data);
} }
export class TreeMapCellSeriesComponent {
    constructor() {
        this.gradient = false;
        this.tooltipDisabled = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.styleTypes = StyleTypes;
        this.placementTypes = PlacementTypes;
    }
    ngOnChanges(changes) {
        this.cells = this.getCells();
    }
    getCells() {
        return this.data.children
            .filter(d => {
            return d.depth === 1;
        })
            .map((d, index) => {
            const label = d.id;
            return {
                data: d.data,
                x: d.x0,
                y: d.y0,
                width: d.x1 - d.x0,
                height: d.y1 - d.y0,
                fill: this.colors.getColor(label),
                label,
                value: d.value
            };
        });
    }
    getTooltipText({ label, value }) {
        return `
      <span class="tooltip-label">${escapeLabel(label)}</span>
      <span class="tooltip-val">${value.toLocaleString()}</span>
    `;
    }
    onClick(data) {
        this.select.emit(data);
    }
    trackBy(index, item) {
        return item.label;
    }
}
TreeMapCellSeriesComponent.ɵfac = function TreeMapCellSeriesComponent_Factory(t) { return new (t || TreeMapCellSeriesComponent)(); };
TreeMapCellSeriesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeMapCellSeriesComponent, selectors: [["g", "ngx-charts-tree-map-cell-series", ""]], inputs: { data: "data", dims: "dims", colors: "colors", valueFormatting: "valueFormatting", labelFormatting: "labelFormatting", gradient: "gradient", tooltipDisabled: "tooltipDisabled", tooltipTemplate: "tooltipTemplate", animations: "animations" }, outputs: { select: "select" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 2, consts: [["ngx-charts-tree-map-cell", "", "ngx-tooltip", "", 3, "data", "x", "y", "width", "height", "fill", "label", "value", "valueFormatting", "labelFormatting", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-tree-map-cell", "", "ngx-tooltip", "", 3, "data", "x", "y", "width", "height", "fill", "label", "value", "valueFormatting", "labelFormatting", "gradient", "animations", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select"]], template: function TreeMapCellSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TreeMapCellSeriesComponent__svg_g_0_Template, 1, 18, "g", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.cells)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.NgForOf, i2.TreeMapCellComponent, i3.TooltipDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeMapCellSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-tree-map-cell-series]',
                template: `
    <svg:g
      ngx-charts-tree-map-cell
      *ngFor="let c of cells; trackBy: trackBy"
      [data]="c.data"
      [x]="c.x"
      [y]="c.y"
      [width]="c.width"
      [height]="c.height"
      [fill]="c.fill"
      [label]="c.label"
      [value]="c.value"
      [valueFormatting]="valueFormatting"
      [labelFormatting]="labelFormatting"
      [gradient]="gradient"
      [animations]="animations"
      (select)="onClick($event)"
      ngx-tooltip
      [tooltipDisabled]="tooltipDisabled"
      [tooltipPlacement]="placementTypes.Top"
      [tooltipType]="styleTypes.tooltip"
      [tooltipTitle]="tooltipTemplate ? undefined : getTooltipText(c)"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipContext]="c.data"
    ></svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { data: [{
            type: Input
        }], dims: [{
            type: Input
        }], colors: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], gradient: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tYXAtY2VsbC1zZXJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL3RyZWUtbWFwL3RyZWUtbWFwLWNlbGwtc2VyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUNaLHVCQUF1QixFQUV4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7SUFpQnhELG1CQXVCQztJQXZCRCw0QkF1QkM7SUFSQyxrTEFBVSxzQkFBZSxJQUFDO0lBUTNCLGlCQUFROzs7O0lBcEJQLGdDQUFlLGFBQUEsYUFBQSxxQkFBQSx1QkFBQSxtQkFBQSxxQkFBQSxxQkFBQSwyQ0FBQSwyQ0FBQSw2QkFBQSxpQ0FBQSwyQ0FBQSwrQ0FBQSwwQ0FBQSxrRkFBQSwyQ0FBQSw2QkFBQTs7QUF3QnJCLE1BQU0sT0FBTywwQkFBMEI7SUE5QnZDO1FBb0NXLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFFakMsZUFBVSxHQUFZLElBQUksQ0FBQztRQUUxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0QyxlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsY0FBYyxDQUFDO0tBeUNqQztJQXZDQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTthQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNoQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRW5CLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO2dCQUNaLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDUCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxLQUFLO2dCQUNMLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSzthQUNmLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxjQUFjLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUE4QjtRQUN6RCxPQUFPO29DQUN5QixXQUFXLENBQUMsS0FBSyxDQUFDO2tDQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFO0tBQ25ELENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQUk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOztvR0F2RFUsMEJBQTBCOzZFQUExQiwwQkFBMEI7UUEzQm5DLDZFQXVCUzs7UUFyQk8sbUNBQVUsNkJBQUE7O3VGQXlCakIsMEJBQTBCO2NBOUJ0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dCQUVVLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25DaGFuZ2VzLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29tbW9uL2NvbG9yLmhlbHBlcic7XG5pbXBvcnQgeyBlc2NhcGVMYWJlbCB9IGZyb20gJy4uL2NvbW1vbi9sYWJlbC5oZWxwZXInO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvY2hhcnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBTdHlsZVR5cGVzIH0gZnJvbSAnLi4vY29tbW9uL3Rvb2x0aXAvc3R5bGUudHlwZSc7XG5pbXBvcnQgeyBQbGFjZW1lbnRUeXBlcyB9IGZyb20gJy4uL2NvbW1vbi90b29sdGlwL3Bvc2l0aW9uJztcbmltcG9ydCB7IFZpZXdEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzL3ZpZXctZGltZW5zaW9uLmludGVyZmFjZSc7XG5cbmludGVyZmFjZSBUcmVlTWFwQ2VsbCB7XG4gIGRhdGE6IERhdGFJdGVtO1xuICBmaWxsOiBzdHJpbmc7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xuICB3aWR0aDogbnVtYmVyO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLXRyZWUtbWFwLWNlbGwtc2VyaWVzXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZzpnXG4gICAgICBuZ3gtY2hhcnRzLXRyZWUtbWFwLWNlbGxcbiAgICAgICpuZ0Zvcj1cImxldCBjIG9mIGNlbGxzOyB0cmFja0J5OiB0cmFja0J5XCJcbiAgICAgIFtkYXRhXT1cImMuZGF0YVwiXG4gICAgICBbeF09XCJjLnhcIlxuICAgICAgW3ldPVwiYy55XCJcbiAgICAgIFt3aWR0aF09XCJjLndpZHRoXCJcbiAgICAgIFtoZWlnaHRdPVwiYy5oZWlnaHRcIlxuICAgICAgW2ZpbGxdPVwiYy5maWxsXCJcbiAgICAgIFtsYWJlbF09XCJjLmxhYmVsXCJcbiAgICAgIFt2YWx1ZV09XCJjLnZhbHVlXCJcbiAgICAgIFt2YWx1ZUZvcm1hdHRpbmddPVwidmFsdWVGb3JtYXR0aW5nXCJcbiAgICAgIFtsYWJlbEZvcm1hdHRpbmddPVwibGFiZWxGb3JtYXR0aW5nXCJcbiAgICAgIFtncmFkaWVudF09XCJncmFkaWVudFwiXG4gICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICAgIChzZWxlY3QpPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgIG5neC10b29sdGlwXG4gICAgICBbdG9vbHRpcERpc2FibGVkXT1cInRvb2x0aXBEaXNhYmxlZFwiXG4gICAgICBbdG9vbHRpcFBsYWNlbWVudF09XCJwbGFjZW1lbnRUeXBlcy5Ub3BcIlxuICAgICAgW3Rvb2x0aXBUeXBlXT1cInN0eWxlVHlwZXMudG9vbHRpcFwiXG4gICAgICBbdG9vbHRpcFRpdGxlXT1cInRvb2x0aXBUZW1wbGF0ZSA/IHVuZGVmaW5lZCA6IGdldFRvb2x0aXBUZXh0KGMpXCJcbiAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgIFt0b29sdGlwQ29udGV4dF09XCJjLmRhdGFcIlxuICAgID48L3N2ZzpnPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTWFwQ2VsbFNlcmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTsgLy8gdHlwZSB0aGlzXG4gIEBJbnB1dCgpIGRpbXM6IFZpZXdEaW1lbnNpb25zO1xuICBASW5wdXQoKSBjb2xvcnM6IENvbG9ySGVscGVyO1xuICBASW5wdXQoKSB2YWx1ZUZvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgbGFiZWxGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIGdyYWRpZW50OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGFuaW1hdGlvbnM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2VsbHM6IFRyZWVNYXBDZWxsW107XG4gIHN0eWxlVHlwZXMgPSBTdHlsZVR5cGVzO1xuICBwbGFjZW1lbnRUeXBlcyA9IFBsYWNlbWVudFR5cGVzO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmNlbGxzID0gdGhpcy5nZXRDZWxscygpO1xuICB9XG5cbiAgZ2V0Q2VsbHMoKTogVHJlZU1hcENlbGxbXSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5jaGlsZHJlblxuICAgICAgLmZpbHRlcihkID0+IHtcbiAgICAgICAgcmV0dXJuIGQuZGVwdGggPT09IDE7XG4gICAgICB9KVxuICAgICAgLm1hcCgoZCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkLmlkO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YTogZC5kYXRhLFxuICAgICAgICAgIHg6IGQueDAsXG4gICAgICAgICAgeTogZC55MCxcbiAgICAgICAgICB3aWR0aDogZC54MSAtIGQueDAsXG4gICAgICAgICAgaGVpZ2h0OiBkLnkxIC0gZC55MCxcbiAgICAgICAgICBmaWxsOiB0aGlzLmNvbG9ycy5nZXRDb2xvcihsYWJlbCksXG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgdmFsdWU6IGQudmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0VG9vbHRpcFRleHQoeyBsYWJlbCwgdmFsdWUgfTogeyBsYWJlbDogYW55OyB2YWx1ZTogYW55IH0pOiBzdHJpbmcge1xuICAgIHJldHVybiBgXG4gICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXAtbGFiZWxcIj4ke2VzY2FwZUxhYmVsKGxhYmVsKX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXAtdmFsXCI+JHt2YWx1ZS50b0xvY2FsZVN0cmluZygpfTwvc3Bhbj5cbiAgICBgO1xuICB9XG5cbiAgb25DbGljayhkYXRhKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcbiAgfVxuXG4gIHRyYWNrQnkoaW5kZXgsIGl0ZW0pOiBzdHJpbmcge1xuICAgIHJldHVybiBpdGVtLmxhYmVsO1xuICB9XG59XG4iXX0=