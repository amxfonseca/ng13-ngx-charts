import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { formatLabel } from '../label.helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./legend-entry.component";
function LegendComponent_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header", 4);
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
function LegendComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵelementStart(1, "ngx-charts-legend-entry", 7);
    i0.ɵɵlistener("select", function LegendComponent_li_4_Template_ngx_charts_legend_entry_select_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.labelClick.emit($event); })("activate", function LegendComponent_li_4_Template_ngx_charts_legend_entry_activate_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.activate($event); })("deactivate", function LegendComponent_li_4_Template_ngx_charts_legend_entry_deactivate_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.deactivate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", entry_r2.label)("formattedLabel", entry_r2.formattedLabel)("color", entry_r2.color)("isActive", ctx_r1.isActive(entry_r2));
} }
export class LegendComponent {
    constructor(cd) {
        this.cd = cd;
        this.horizontal = false;
        this.labelClick = new EventEmitter();
        this.labelActivate = new EventEmitter();
        this.labelDeactivate = new EventEmitter();
        this.legendEntries = [];
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.cd.markForCheck();
        this.legendEntries = this.getLegendEntries();
    }
    getLegendEntries() {
        const items = [];
        for (const label of this.data) {
            const formattedLabel = formatLabel(label);
            const idx = items.findIndex(i => {
                return i.label === formattedLabel;
            });
            if (idx === -1) {
                items.push({
                    label,
                    formattedLabel,
                    color: this.colors.getColor(label)
                });
            }
        }
        return items;
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.label === d.name;
        });
        return item !== undefined;
    }
    activate(item) {
        this.labelActivate.emit(item);
    }
    deactivate(item) {
        this.labelDeactivate.emit(item);
    }
    trackBy(index, item) {
        return item.label;
    }
}
LegendComponent.ɵfac = function LegendComponent_Factory(t) { return new (t || LegendComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
LegendComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LegendComponent, selectors: [["ngx-charts-legend"]], inputs: { data: "data", title: "title", colors: "colors", height: "height", width: "width", activeEntries: "activeEntries", horizontal: "horizontal" }, outputs: { labelClick: "labelClick", labelActivate: "labelActivate", labelDeactivate: "labelDeactivate" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 9, consts: [["class", "legend-title", 4, "ngIf"], [1, "legend-wrap"], [1, "legend-labels"], ["class", "legend-label", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "legend-title"], [1, "legend-title-text"], [1, "legend-label"], [3, "label", "formattedLabel", "color", "isActive", "select", "activate", "deactivate"]], template: function LegendComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, LegendComponent_header_1_Template, 3, 1, "header", 0);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "ul", 2);
        i0.ɵɵtemplate(4, LegendComponent_li_4_Template, 2, 4, "li", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.title == null ? null : ctx.title.length) > 0);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("max-height", ctx.height - 45, "px");
        i0.ɵɵclassProp("horizontal-legend", ctx.horizontal);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.legendEntries)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.LegendEntryComponent], styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .legend-title{white-space:nowrap;overflow:hidden;margin-left:10px;margin-bottom:5px;font-size:14px;font-weight:700}.chart-legend ul,.chart-legend li{padding:0;margin:0;list-style:none}.chart-legend .horizontal-legend li{display:inline-block}.chart-legend .legend-wrap{width:calc(100% - 10px)}.chart-legend .legend-labels{line-height:85%;list-style:none;text-align:left;float:left;width:100%;border-radius:3px;overflow-y:auto;overflow-x:hidden;white-space:nowrap;background:rgba(0,0,0,.05)}.chart-legend .legend-label{cursor:pointer;font-size:90%;margin:8px;color:#afb7c8}.chart-legend .legend-label:hover{color:#000;transition:.2s}.chart-legend .legend-label .active .legend-label-text{color:#000}.chart-legend .legend-label-color{display:inline-block;height:15px;width:15px;margin-right:5px;color:#5b646b;border-radius:3px}.chart-legend .legend-label-text{display:inline-block;vertical-align:top;line-height:15px;font-size:12px;width:calc(100% - 20px);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chart-legend .legend-title-text{vertical-align:bottom;display:inline-block;line-height:16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LegendComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-legend', template: `
    <div [style.width.px]="width">
      <header class="legend-title" *ngIf="title?.length > 0">
        <span class="legend-title-text">{{ title }}</span>
      </header>
      <div class="legend-wrap">
        <ul class="legend-labels" [class.horizontal-legend]="horizontal" [style.max-height.px]="height - 45">
          <li *ngFor="let entry of legendEntries; trackBy: trackBy" class="legend-label">
            <ngx-charts-legend-entry
              [label]="entry.label"
              [formattedLabel]="entry.formattedLabel"
              [color]="entry.color"
              [isActive]="isActive(entry)"
              (select)="labelClick.emit($event)"
              (activate)="activate($event)"
              (deactivate)="deactivate($event)"
            >
            </ngx-charts-legend-entry>
          </li>
        </ul>
      </div>
    </div>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .legend-title{white-space:nowrap;overflow:hidden;margin-left:10px;margin-bottom:5px;font-size:14px;font-weight:700}.chart-legend ul,.chart-legend li{padding:0;margin:0;list-style:none}.chart-legend .horizontal-legend li{display:inline-block}.chart-legend .legend-wrap{width:calc(100% - 10px)}.chart-legend .legend-labels{line-height:85%;list-style:none;text-align:left;float:left;width:100%;border-radius:3px;overflow-y:auto;overflow-x:hidden;white-space:nowrap;background:rgba(0,0,0,.05)}.chart-legend .legend-label{cursor:pointer;font-size:90%;margin:8px;color:#afb7c8}.chart-legend .legend-label:hover{color:#000;transition:.2s}.chart-legend .legend-label .active .legend-label-text{color:#000}.chart-legend .legend-label-color{display:inline-block;height:15px;width:15px;margin-right:5px;color:#5b646b;border-radius:3px}.chart-legend .legend-label-text{display:inline-block;vertical-align:top;line-height:15px;font-size:12px;width:calc(100% - 20px);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chart-legend .legend-title-text{vertical-align:bottom;display:inline-block;line-height:16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { data: [{
            type: Input
        }], title: [{
            type: Input
        }], colors: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], horizontal: [{
            type: Input
        }], labelClick: [{
            type: Output
        }], labelActivate: [{
            type: Output
        }], labelDeactivate: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9jb21tb24vbGVnZW5kL2xlZ2VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLE1BQU0sRUFDTixZQUFZLEVBSVosaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7SUFheEMsaUNBQXVEO0lBQ3JELCtCQUFnQztJQUFBLFlBQVc7SUFBQSxpQkFBTztJQUNwRCxpQkFBUzs7O0lBRHlCLGVBQVc7SUFBWCxrQ0FBVzs7OztJQUl6Qyw2QkFBK0U7SUFDN0Usa0RBUUM7SUFIQyxvTEFBVSw4QkFBdUIsSUFBQywyS0FDdEIsdUJBQWdCLElBRE0sK0tBRXBCLHlCQUFrQixJQUZFO0lBSXBDLGlCQUEwQjtJQUM1QixpQkFBSzs7OztJQVRELGVBQXFCO0lBQXJCLHNDQUFxQiwyQ0FBQSx5QkFBQSx1Q0FBQTs7QUFrQm5DLE1BQU0sT0FBTyxlQUFlO0lBZTFCLFlBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBUmhDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbEIsZUFBVSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RELGtCQUFhLEdBQW1DLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsb0JBQWUsR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvRSxrQkFBYSxHQUFrQixFQUFFLENBQUM7SUFFVSxDQUFDO0lBRTdDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDN0IsTUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTFDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxjQUFjLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDZCxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNULEtBQUs7b0JBQ0wsY0FBYztvQkFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUNuQyxDQUFDLENBQUM7YUFDSjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWtCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3RDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBc0I7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFzQjtRQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWEsRUFBRSxJQUFpQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OEVBakVVLGVBQWU7a0VBQWYsZUFBZTtRQTFCeEIsMkJBQThCO1FBQzVCLHNFQUVTO1FBQ1QsOEJBQXlCO1FBQ3ZCLDZCQUFxRztRQUNuRyw4REFXSztRQUNQLGlCQUFLO1FBQ1AsaUJBQU07UUFDUixpQkFBTTs7UUFwQkQsd0NBQXdCO1FBQ0csZUFBdUI7UUFBdkIsd0VBQXVCO1FBSWMsZUFBbUM7UUFBbkMsbURBQW1DO1FBQTFFLG1EQUFzQztRQUN4QyxlQUFrQjtRQUFsQiwyQ0FBa0IsNkJBQUE7O3VGQW9CckMsZUFBZTtjQTdCM0IsU0FBUzsyQkFDRSxtQkFBbUIsWUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQlQsaUJBRWMsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTtvRUFHdEMsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFFSSxVQUFVO2tCQUFuQixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQUNHLGVBQWU7a0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZm9ybWF0TGFiZWwgfSBmcm9tICcuLi9sYWJlbC5oZWxwZXInO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb2xvci5oZWxwZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIExlZ2VuZEVudHJ5IHtcbiAgY29sb3I6IHN0cmluZztcbiAgZm9ybWF0dGVkTGFiZWw6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNoYXJ0cy1sZWdlbmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzPVwibGVnZW5kLXRpdGxlXCIgKm5nSWY9XCJ0aXRsZT8ubGVuZ3RoID4gMFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC10aXRsZS10ZXh0XCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtd3JhcFwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJsZWdlbmQtbGFiZWxzXCIgW2NsYXNzLmhvcml6b250YWwtbGVnZW5kXT1cImhvcml6b250YWxcIiBbc3R5bGUubWF4LWhlaWdodC5weF09XCJoZWlnaHQgLSA0NVwiPlxuICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgZW50cnkgb2YgbGVnZW5kRW50cmllczsgdHJhY2tCeTogdHJhY2tCeVwiIGNsYXNzPVwibGVnZW5kLWxhYmVsXCI+XG4gICAgICAgICAgICA8bmd4LWNoYXJ0cy1sZWdlbmQtZW50cnlcbiAgICAgICAgICAgICAgW2xhYmVsXT1cImVudHJ5LmxhYmVsXCJcbiAgICAgICAgICAgICAgW2Zvcm1hdHRlZExhYmVsXT1cImVudHJ5LmZvcm1hdHRlZExhYmVsXCJcbiAgICAgICAgICAgICAgW2NvbG9yXT1cImVudHJ5LmNvbG9yXCJcbiAgICAgICAgICAgICAgW2lzQWN0aXZlXT1cImlzQWN0aXZlKGVudHJ5KVwiXG4gICAgICAgICAgICAgIChzZWxlY3QpPVwibGFiZWxDbGljay5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAoYWN0aXZhdGUpPVwiYWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChkZWFjdGl2YXRlKT1cImRlYWN0aXZhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L25neC1jaGFydHMtbGVnZW5kLWVudHJ5PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vbGVnZW5kLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExlZ2VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZ1tdO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvcnM6IENvbG9ySGVscGVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgYWN0aXZlRW50cmllcztcbiAgQElucHV0KCkgaG9yaXpvbnRhbCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBsYWJlbENsaWNrOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxhYmVsQWN0aXZhdGU6IEV2ZW50RW1pdHRlcjx7IG5hbWU6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxhYmVsRGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPHsgbmFtZTogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGxlZ2VuZEVudHJpZXM6IExlZ2VuZEVudHJ5W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMubGVnZW5kRW50cmllcyA9IHRoaXMuZ2V0TGVnZW5kRW50cmllcygpO1xuICB9XG5cbiAgZ2V0TGVnZW5kRW50cmllcygpOiBMZWdlbmRFbnRyeVtdIHtcbiAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgIGZvciAoY29uc3QgbGFiZWwgb2YgdGhpcy5kYXRhKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRMYWJlbCA9IGZvcm1hdExhYmVsKGxhYmVsKTtcblxuICAgICAgY29uc3QgaWR4ID0gaXRlbXMuZmluZEluZGV4KGkgPT4ge1xuICAgICAgICByZXR1cm4gaS5sYWJlbCA9PT0gZm9ybWF0dGVkTGFiZWw7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgZm9ybWF0dGVkTGFiZWwsXG4gICAgICAgICAgY29sb3I6IHRoaXMuY29sb3JzLmdldENvbG9yKGxhYmVsKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICBpc0FjdGl2ZShlbnRyeTogTGVnZW5kRW50cnkpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlRW50cmllcykgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmFjdGl2ZUVudHJpZXMuZmluZChkID0+IHtcbiAgICAgIHJldHVybiBlbnRyeS5sYWJlbCA9PT0gZC5uYW1lO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBhY3RpdmF0ZShpdGVtOiB7IG5hbWU6IHN0cmluZyB9KSB7XG4gICAgdGhpcy5sYWJlbEFjdGl2YXRlLmVtaXQoaXRlbSk7XG4gIH1cblxuICBkZWFjdGl2YXRlKGl0ZW06IHsgbmFtZTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLmxhYmVsRGVhY3RpdmF0ZS5lbWl0KGl0ZW0pO1xuICB9XG5cbiAgdHJhY2tCeShpbmRleDogbnVtYmVyLCBpdGVtOiBMZWdlbmRFbnRyeSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGl0ZW0ubGFiZWw7XG4gIH1cbn1cbiJdfQ==