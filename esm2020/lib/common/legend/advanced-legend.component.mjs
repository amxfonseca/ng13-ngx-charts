import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { trimLabel } from '../trim-label.helper';
import { formatLabel } from '../label.helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../count/count.directive";
function AdvancedLegendComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("countTo", ctx_r0.roundedTotal)("valueFormatting", ctx_r0.valueFormatting);
} }
function AdvancedLegendComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.valueFormatting ? ctx_r1.valueFormatting(ctx_r1.roundedTotal) : ctx_r1.defaultValueFormatting(ctx_r1.roundedTotal), " ");
} }
function AdvancedLegendComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 16);
} if (rf & 2) {
    const legendItem_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("countTo", legendItem_r3._value)("valueFormatting", ctx_r4.valueFormatting);
} }
function AdvancedLegendComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const legendItem_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.valueFormatting ? ctx_r5.valueFormatting(legendItem_r3.value) : ctx_r5.defaultValueFormatting(legendItem_r3.value), " ");
} }
function AdvancedLegendComponent_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 18);
} if (rf & 2) {
    const legendItem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("countTo", legendItem_r3.percentage)("countSuffix", "%");
} }
function AdvancedLegendComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const legendItem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", legendItem_r3.percentage.toLocaleString(), "%");
} }
function AdvancedLegendComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("mouseenter", function AdvancedLegendComponent_div_7_Template_div_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const legendItem_r3 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.activate.emit(legendItem_r3.data); })("mouseleave", function AdvancedLegendComponent_div_7_Template_div_mouseleave_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const legendItem_r3 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.deactivate.emit(legendItem_r3.data); })("click", function AdvancedLegendComponent_div_7_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const legendItem_r3 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.select.emit(legendItem_r3.data); });
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵtemplate(2, AdvancedLegendComponent_div_7_div_2_Template, 1, 2, "div", 11);
    i0.ɵɵtemplate(3, AdvancedLegendComponent_div_7_div_3_Template, 2, 1, "div", 12);
    i0.ɵɵelementStart(4, "div", 13);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, AdvancedLegendComponent_div_7_div_6_Template, 1, 2, "div", 14);
    i0.ɵɵtemplate(7, AdvancedLegendComponent_div_7_div_7_Template, 2, 1, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const legendItem_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("border-left-color", legendItem_r3.color);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.animations);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.animations);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(legendItem_r3.displayLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.animations);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.animations);
} }
export class AdvancedLegendComponent {
    constructor() {
        this.label = 'Total';
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.legendItems = [];
        this.labelFormatting = label => label;
        this.percentageFormatting = percentage => percentage;
        this.defaultValueFormatting = value => value.toLocaleString();
    }
    ngOnChanges(changes) {
        this.update();
    }
    getTotal() {
        return this.data.map(d => Number(d.value)).reduce((sum, d) => sum + d, 0);
    }
    update() {
        this.total = this.getTotal();
        this.roundedTotal = this.total;
        this.legendItems = this.getLegendItems();
    }
    getLegendItems() {
        return this.data.map(d => {
            const label = formatLabel(d.name);
            const value = d.value;
            const color = this.colors.getColor(label);
            const percentage = this.total > 0 ? (value / this.total) * 100 : 0;
            const formattedLabel = typeof this.labelFormatting === 'function' ? this.labelFormatting(label) : label;
            return {
                _value: value,
                data: d,
                value,
                color,
                label: formattedLabel,
                displayLabel: trimLabel(formattedLabel, 20),
                origialLabel: d.name,
                percentage: this.percentageFormatting ? this.percentageFormatting(percentage) : percentage.toLocaleString()
            };
        });
    }
    trackBy(index, item) {
        return item.label;
    }
}
AdvancedLegendComponent.ɵfac = function AdvancedLegendComponent_Factory(t) { return new (t || AdvancedLegendComponent)(); };
AdvancedLegendComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdvancedLegendComponent, selectors: [["ngx-charts-advanced-legend"]], inputs: { width: "width", data: "data", colors: "colors", label: "label", animations: "animations", valueFormatting: "valueFormatting", labelFormatting: "labelFormatting", percentageFormatting: "percentageFormatting" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 7, consts: [[1, "advanced-pie-legend"], ["class", "total-value", "ngx-charts-count-up", "", 3, "countTo", "valueFormatting", 4, "ngIf"], ["class", "total-value", 4, "ngIf"], [1, "total-label"], [1, "legend-items-container"], [1, "legend-items"], ["tabindex", "-1", "class", "legend-item", 3, "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-count-up", "", 1, "total-value", 3, "countTo", "valueFormatting"], [1, "total-value"], ["tabindex", "-1", 1, "legend-item", 3, "mouseenter", "mouseleave", "click"], [1, "item-color"], ["class", "item-value", "ngx-charts-count-up", "", 3, "countTo", "valueFormatting", 4, "ngIf"], ["class", "item-value", 4, "ngIf"], [1, "item-label"], ["class", "item-percent", "ngx-charts-count-up", "", 3, "countTo", "countSuffix", 4, "ngIf"], ["class", "item-percent", 4, "ngIf"], ["ngx-charts-count-up", "", 1, "item-value", 3, "countTo", "valueFormatting"], [1, "item-value"], ["ngx-charts-count-up", "", 1, "item-percent", 3, "countTo", "countSuffix"], [1, "item-percent"]], template: function AdvancedLegendComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, AdvancedLegendComponent_div_1_Template, 1, 2, "div", 1);
        i0.ɵɵtemplate(2, AdvancedLegendComponent_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵtemplate(7, AdvancedLegendComponent_div_7_Template, 8, 7, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.animations);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.label, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.legendItems)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.CountUpDirective], styles: [".advanced-pie-legend{float:left;position:relative;top:50%;transform:translateY(-50%)}.advanced-pie-legend .total-value{font-size:36px}.advanced-pie-legend .total-label{font-size:24px;margin-bottom:19px}.advanced-pie-legend .legend-items-container{width:100%}.advanced-pie-legend .legend-items-container .legend-items{white-space:nowrap;overflow:auto}.advanced-pie-legend .legend-items-container .legend-items .legend-item{margin-right:20px;display:inline-block;cursor:pointer}.advanced-pie-legend .legend-items-container .legend-items .legend-item:focus{outline:none}.advanced-pie-legend .legend-items-container .legend-items .legend-item:hover{color:#000;transition:.2s}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-value{font-size:24px;margin-top:-6px;margin-left:11px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-label{font-size:14px;opacity:.7;margin-left:11px;margin-top:-6px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-percent{font-size:24px;opacity:.7;margin-left:11px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-color{border-left:4px solid;width:4px;height:42px;float:left;margin-right:7px}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdvancedLegendComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-advanced-legend', template: `
    <div class="advanced-pie-legend" [style.width.px]="width">
      <div
        *ngIf="animations"
        class="total-value"
        ngx-charts-count-up
        [countTo]="roundedTotal"
        [valueFormatting]="valueFormatting"
      ></div>
      <div class="total-value" *ngIf="!animations">
        {{ valueFormatting ? valueFormatting(roundedTotal) : defaultValueFormatting(roundedTotal) }}
      </div>
      <div class="total-label">
        {{ label }}
      </div>
      <div class="legend-items-container">
        <div class="legend-items">
          <div
            *ngFor="let legendItem of legendItems; trackBy: trackBy"
            tabindex="-1"
            class="legend-item"
            (mouseenter)="activate.emit(legendItem.data)"
            (mouseleave)="deactivate.emit(legendItem.data)"
            (click)="select.emit(legendItem.data)"
          >
            <div class="item-color" [style.border-left-color]="legendItem.color"></div>
            <div
              *ngIf="animations"
              class="item-value"
              ngx-charts-count-up
              [countTo]="legendItem._value"
              [valueFormatting]="valueFormatting"
            ></div>
            <div *ngIf="!animations" class="item-value">
              {{ valueFormatting ? valueFormatting(legendItem.value) : defaultValueFormatting(legendItem.value) }}
            </div>
            <div class="item-label">{{ legendItem.displayLabel }}</div>
            <div
              *ngIf="animations"
              class="item-percent"
              ngx-charts-count-up
              [countTo]="legendItem.percentage"
              [countSuffix]="'%'"
            ></div>
            <div *ngIf="!animations" class="item-percent">{{ legendItem.percentage.toLocaleString() }}%</div>
          </div>
        </div>
      </div>
    </div>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".advanced-pie-legend{float:left;position:relative;top:50%;transform:translateY(-50%)}.advanced-pie-legend .total-value{font-size:36px}.advanced-pie-legend .total-label{font-size:24px;margin-bottom:19px}.advanced-pie-legend .legend-items-container{width:100%}.advanced-pie-legend .legend-items-container .legend-items{white-space:nowrap;overflow:auto}.advanced-pie-legend .legend-items-container .legend-items .legend-item{margin-right:20px;display:inline-block;cursor:pointer}.advanced-pie-legend .legend-items-container .legend-items .legend-item:focus{outline:none}.advanced-pie-legend .legend-items-container .legend-items .legend-item:hover{color:#000;transition:.2s}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-value{font-size:24px;margin-top:-6px;margin-left:11px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-label{font-size:14px;opacity:.7;margin-left:11px;margin-top:-6px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-percent{font-size:24px;opacity:.7;margin-left:11px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-color{border-left:4px solid;width:4px;height:42px;float:left;margin-right:7px}\n"] }]
    }], null, { width: [{
            type: Input
        }], data: [{
            type: Input
        }], colors: [{
            type: Input
        }], label: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], valueFormatting: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], percentageFormatting: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtbGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9jb21tb24vbGVnZW5kL2FkdmFuY2VkLWxlZ2VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0lBbUJ4Qyx5QkFNTzs7O0lBRkwsNkNBQXdCLDJDQUFBOzs7SUFHMUIsOEJBQTZDO0lBQzNDLFlBQ0Y7SUFBQSxpQkFBTTs7O0lBREosZUFDRjtJQURFLDBKQUNGOzs7SUFlTSwwQkFNTzs7OztJQUZMLDhDQUE2QiwyQ0FBQTs7O0lBRy9CLCtCQUE0QztJQUMxQyxZQUNGO0lBQUEsaUJBQU07Ozs7SUFESixlQUNGO0lBREUsMEpBQ0Y7OztJQUVBLDBCQU1POzs7SUFGTCxrREFBaUMsb0JBQUE7OztJQUduQywrQkFBOEM7SUFBQSxZQUE2QztJQUFBLGlCQUFNOzs7SUFBbkQsZUFBNkM7SUFBN0MseUVBQTZDOzs7O0lBM0I3Riw4QkFPQztJQUhDLDhPQUFjLHlDQUE4QixJQUFDLGlPQUMvQiwyQ0FBZ0MsSUFERCx1TkFFcEMsdUNBQTRCLElBRlE7SUFJN0MsMEJBQTJFO0lBQzNFLCtFQU1PO0lBQ1AsK0VBRU07SUFDTiwrQkFBd0I7SUFBQSxZQUE2QjtJQUFBLGlCQUFNO0lBQzNELCtFQU1PO0lBQ1AsK0VBQWlHO0lBQ25HLGlCQUFNOzs7O0lBcEJvQixlQUE0QztJQUE1Qyx3REFBNEM7SUFFakUsZUFBZ0I7SUFBaEIsd0NBQWdCO0lBTWIsZUFBaUI7SUFBakIseUNBQWlCO0lBR0MsZUFBNkI7SUFBN0IsZ0RBQTZCO0lBRWxELGVBQWdCO0lBQWhCLHdDQUFnQjtJQU1iLGVBQWlCO0lBQWpCLHlDQUFpQjs7QUFVbkMsTUFBTSxPQUFPLHVCQUF1QjtJQXhEcEM7UUE0RFcsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUN4QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRTFCLFdBQU0sR0FBMkIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxhQUFRLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsZUFBVSxHQUEyQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxFLGdCQUFXLEdBQXlCLEVBQUUsQ0FBQztRQUs5QixvQkFBZSxHQUE4QixLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUM1RCx5QkFBb0IsR0FBOEIsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFFcEYsMkJBQXNCLEdBQTRDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBeUNuRztJQXZDQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRS9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBUSxJQUFJLENBQUMsSUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoQyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxNQUFNLGNBQWMsR0FBRyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFeEcsT0FBTztnQkFDTCxNQUFNLEVBQUUsS0FBSztnQkFDYixJQUFJLEVBQUUsQ0FBQztnQkFDUCxLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLFlBQVksRUFBRSxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQztnQkFDM0MsWUFBWSxFQUFFLENBQUMsQ0FBQyxJQUFJO2dCQUNwQixVQUFVLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7YUFDNUcsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhLEVBQUUsSUFBd0I7UUFDN0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7OzhGQTNEVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQXJEaEMsOEJBQTBEO1FBQ3hELHdFQU1PO1FBQ1Asd0VBRU07UUFDTiw4QkFBeUI7UUFDdkIsWUFDRjtRQUFBLGlCQUFNO1FBQ04sOEJBQW9DO1FBQ2xDLDhCQUEwQjtRQUN4Qix3RUE0Qk07UUFDUixpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBL0MyQix3Q0FBd0I7UUFFcEQsZUFBZ0I7UUFBaEIscUNBQWdCO1FBTU8sZUFBaUI7UUFBakIsc0NBQWlCO1FBSXpDLGVBQ0Y7UUFERSwwQ0FDRjtRQUk2QixlQUFnQjtRQUFoQix5Q0FBZ0IsNkJBQUE7O3VGQW9DdEMsdUJBQXVCO2NBeERuQyxTQUFTOzJCQUNFLDRCQUE0QixZQUM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlEVCxpQkFFYyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO2dCQUd0QyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBRUksTUFBTTtrQkFBZixNQUFNO1lBQ0csUUFBUTtrQkFBakIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFNRSxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLG9CQUFvQjtrQkFBNUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaW1MYWJlbCB9IGZyb20gJy4uL3RyaW0tbGFiZWwuaGVscGVyJztcbmltcG9ydCB7IGZvcm1hdExhYmVsIH0gZnJvbSAnLi4vbGFiZWwuaGVscGVyJztcbmltcG9ydCB7IERhdGFJdGVtLCBTdHJpbmdPck51bWJlck9yRGF0ZSB9IGZyb20gJy4uLy4uL21vZGVscy9jaGFydC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENvbG9ySGVscGVyIH0gZnJvbSAnLi4vY29sb3IuaGVscGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBBZHZhbmNlZExlZ2VuZEl0ZW0ge1xuICB2YWx1ZTogU3RyaW5nT3JOdW1iZXJPckRhdGU7XG4gIF92YWx1ZTogU3RyaW5nT3JOdW1iZXJPckRhdGU7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGRhdGE6IERhdGFJdGVtO1xuICBsYWJlbDogc3RyaW5nO1xuICBkaXNwbGF5TGFiZWw6IHN0cmluZztcbiAgb3JpZ2luYWxMYWJlbDogc3RyaW5nO1xuICBwZXJjZW50YWdlOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jaGFydHMtYWR2YW5jZWQtbGVnZW5kJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYWR2YW5jZWQtcGllLWxlZ2VuZFwiIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiPlxuICAgICAgPGRpdlxuICAgICAgICAqbmdJZj1cImFuaW1hdGlvbnNcIlxuICAgICAgICBjbGFzcz1cInRvdGFsLXZhbHVlXCJcbiAgICAgICAgbmd4LWNoYXJ0cy1jb3VudC11cFxuICAgICAgICBbY291bnRUb109XCJyb3VuZGVkVG90YWxcIlxuICAgICAgICBbdmFsdWVGb3JtYXR0aW5nXT1cInZhbHVlRm9ybWF0dGluZ1wiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidG90YWwtdmFsdWVcIiAqbmdJZj1cIiFhbmltYXRpb25zXCI+XG4gICAgICAgIHt7IHZhbHVlRm9ybWF0dGluZyA/IHZhbHVlRm9ybWF0dGluZyhyb3VuZGVkVG90YWwpIDogZGVmYXVsdFZhbHVlRm9ybWF0dGluZyhyb3VuZGVkVG90YWwpIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1sYWJlbFwiPlxuICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kLWl0ZW1zLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kLWl0ZW1zXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGxlZ2VuZEl0ZW0gb2YgbGVnZW5kSXRlbXM7IHRyYWNrQnk6IHRyYWNrQnlcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICBjbGFzcz1cImxlZ2VuZC1pdGVtXCJcbiAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImFjdGl2YXRlLmVtaXQobGVnZW5kSXRlbS5kYXRhKVwiXG4gICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJkZWFjdGl2YXRlLmVtaXQobGVnZW5kSXRlbS5kYXRhKVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0LmVtaXQobGVnZW5kSXRlbS5kYXRhKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29sb3JcIiBbc3R5bGUuYm9yZGVyLWxlZnQtY29sb3JdPVwibGVnZW5kSXRlbS5jb2xvclwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAqbmdJZj1cImFuaW1hdGlvbnNcIlxuICAgICAgICAgICAgICBjbGFzcz1cIml0ZW0tdmFsdWVcIlxuICAgICAgICAgICAgICBuZ3gtY2hhcnRzLWNvdW50LXVwXG4gICAgICAgICAgICAgIFtjb3VudFRvXT1cImxlZ2VuZEl0ZW0uX3ZhbHVlXCJcbiAgICAgICAgICAgICAgW3ZhbHVlRm9ybWF0dGluZ109XCJ2YWx1ZUZvcm1hdHRpbmdcIlxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFhbmltYXRpb25zXCIgY2xhc3M9XCJpdGVtLXZhbHVlXCI+XG4gICAgICAgICAgICAgIHt7IHZhbHVlRm9ybWF0dGluZyA/IHZhbHVlRm9ybWF0dGluZyhsZWdlbmRJdGVtLnZhbHVlKSA6IGRlZmF1bHRWYWx1ZUZvcm1hdHRpbmcobGVnZW5kSXRlbS52YWx1ZSkgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbGFiZWxcIj57eyBsZWdlbmRJdGVtLmRpc3BsYXlMYWJlbCB9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAqbmdJZj1cImFuaW1hdGlvbnNcIlxuICAgICAgICAgICAgICBjbGFzcz1cIml0ZW0tcGVyY2VudFwiXG4gICAgICAgICAgICAgIG5neC1jaGFydHMtY291bnQtdXBcbiAgICAgICAgICAgICAgW2NvdW50VG9dPVwibGVnZW5kSXRlbS5wZXJjZW50YWdlXCJcbiAgICAgICAgICAgICAgW2NvdW50U3VmZml4XT1cIiclJ1wiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWFuaW1hdGlvbnNcIiBjbGFzcz1cIml0ZW0tcGVyY2VudFwiPnt7IGxlZ2VuZEl0ZW0ucGVyY2VudGFnZS50b0xvY2FsZVN0cmluZygpIH19JTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9hZHZhbmNlZC1sZWdlbmQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQWR2YW5jZWRMZWdlbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRhOiBEYXRhSXRlbVtdO1xuICBASW5wdXQoKSBjb2xvcnM6IENvbG9ySGVscGVyO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ1RvdGFsJztcbiAgQElucHV0KCkgYW5pbWF0aW9uczogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPERhdGFJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8RGF0YUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPERhdGFJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBsZWdlbmRJdGVtczogQWR2YW5jZWRMZWdlbmRJdGVtW10gPSBbXTtcbiAgdG90YWw6IG51bWJlcjtcbiAgcm91bmRlZFRvdGFsOiBudW1iZXI7XG5cbiAgQElucHV0KCkgdmFsdWVGb3JtYXR0aW5nOiAodmFsdWU6IFN0cmluZ09yTnVtYmVyT3JEYXRlKSA9PiBhbnk7XG4gIEBJbnB1dCgpIGxhYmVsRm9ybWF0dGluZzogKHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyA9IGxhYmVsID0+IGxhYmVsO1xuICBASW5wdXQoKSBwZXJjZW50YWdlRm9ybWF0dGluZzogKHZhbHVlOiBudW1iZXIpID0+IG51bWJlciA9IHBlcmNlbnRhZ2UgPT4gcGVyY2VudGFnZTtcblxuICBkZWZhdWx0VmFsdWVGb3JtYXR0aW5nOiAodmFsdWU6IFN0cmluZ09yTnVtYmVyT3JEYXRlKSA9PiBzdHJpbmcgPSB2YWx1ZSA9PiB2YWx1ZS50b0xvY2FsZVN0cmluZygpO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0VG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm1hcChkID0+IE51bWJlcihkLnZhbHVlKSkucmVkdWNlKChzdW0sIGQpID0+IHN1bSArIGQsIDApO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMudG90YWwgPSB0aGlzLmdldFRvdGFsKCk7XG4gICAgdGhpcy5yb3VuZGVkVG90YWwgPSB0aGlzLnRvdGFsO1xuXG4gICAgdGhpcy5sZWdlbmRJdGVtcyA9IHRoaXMuZ2V0TGVnZW5kSXRlbXMoKTtcbiAgfVxuXG4gIGdldExlZ2VuZEl0ZW1zKCk6IEFkdmFuY2VkTGVnZW5kSXRlbVtdIHtcbiAgICByZXR1cm4gKHRoaXMuZGF0YSBhcyBhbnkpLm1hcChkID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gZm9ybWF0TGFiZWwoZC5uYW1lKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZC52YWx1ZTtcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcnMuZ2V0Q29sb3IobGFiZWwpO1xuICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHRoaXMudG90YWwgPiAwID8gKHZhbHVlIC8gdGhpcy50b3RhbCkgKiAxMDAgOiAwO1xuICAgICAgY29uc3QgZm9ybWF0dGVkTGFiZWwgPSB0eXBlb2YgdGhpcy5sYWJlbEZvcm1hdHRpbmcgPT09ICdmdW5jdGlvbicgPyB0aGlzLmxhYmVsRm9ybWF0dGluZyhsYWJlbCkgOiBsYWJlbDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX3ZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZGF0YTogZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBsYWJlbDogZm9ybWF0dGVkTGFiZWwsXG4gICAgICAgIGRpc3BsYXlMYWJlbDogdHJpbUxhYmVsKGZvcm1hdHRlZExhYmVsLCAyMCksXG4gICAgICAgIG9yaWdpYWxMYWJlbDogZC5uYW1lLFxuICAgICAgICBwZXJjZW50YWdlOiB0aGlzLnBlcmNlbnRhZ2VGb3JtYXR0aW5nID8gdGhpcy5wZXJjZW50YWdlRm9ybWF0dGluZyhwZXJjZW50YWdlKSA6IHBlcmNlbnRhZ2UudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHRyYWNrQnkoaW5kZXg6IG51bWJlciwgaXRlbTogQWR2YW5jZWRMZWdlbmRJdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0ubGFiZWw7XG4gIH1cbn1cbiJdfQ==