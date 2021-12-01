import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { select } from 'd3-selection';
import { invertColor } from '../utils/color-utils';
import { trimLabel } from '../common/trim-label.helper';
import { escapeLabel } from '../common/label.helper';
import { id } from '../utils/id';
import { BarOrientation } from '../common/types/bar-orientation.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../common/svg-linear-gradient.component";
import * as i3 from "../common/count/count.directive";
const _c0 = ["ngx-charts-tree-map-cell", ""];
function TreeMapCellComponent__svg_defs_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "defs");
    i0.ɵɵelement(1, "g", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("orientation", ctx_r0.orientation.Vertical)("name", ctx_r0.gradientId)("stops", ctx_r0.gradientStops);
} }
function TreeMapCellComponent__svg_foreignObject_3__xhtml_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 8);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("countTo", ctx_r2.value)("valueFormatting", ctx_r2.valueFormatting);
} }
function TreeMapCellComponent__svg_foreignObject_3__xhtml_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.formattedValue, " ");
} }
function TreeMapCellComponent__svg_foreignObject_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "foreignObject", 4);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵelement(2, "span", 5);
    i0.ɵɵelement(3, "br");
    i0.ɵɵtemplate(4, TreeMapCellComponent__svg_foreignObject_3__xhtml_span_4_Template, 1, 2, "span", 6);
    i0.ɵɵtemplate(5, TreeMapCellComponent__svg_foreignObject_3__xhtml_span_5_Template, 2, 1, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("pointer-events", "none");
    i0.ɵɵattribute("x", ctx_r1.x)("y", ctx_r1.y)("width", ctx_r1.width)("height", ctx_r1.height);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", ctx_r1.getTextColor())("height", ctx_r1.height + "px")("width", ctx_r1.width + "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r1.formattedLabel, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.animations);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.animations);
} }
export class TreeMapCellComponent {
    constructor(element) {
        this.gradient = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.initialized = false;
        this.orientation = BarOrientation;
        this.element = element.nativeElement;
    }
    ngOnChanges() {
        this.update();
        this.valueFormatting = this.valueFormatting || (value => value.toLocaleString());
        const labelFormatting = this.labelFormatting || (cell => escapeLabel(trimLabel(cell.label, 55)));
        const cellData = {
            data: this.data,
            label: this.label,
            value: this.value
        };
        this.formattedValue = this.valueFormatting(cellData.value);
        this.formattedLabel = labelFormatting(cellData);
        this.gradientId = 'grad' + id().toString();
        this.gradientUrl = `url(#${this.gradientId})`;
        this.gradientStops = this.getGradientStops();
    }
    update() {
        if (this.initialized) {
            this.animateToCurrentForm();
        }
        else {
            if (this.animations) {
                this.loadAnimation();
            }
            this.initialized = true;
        }
    }
    loadAnimation() {
        const node = select(this.element).select('.cell');
        node.attr('opacity', 0).attr('x', this.x).attr('y', this.y);
        this.animateToCurrentForm();
    }
    getTextColor() {
        return invertColor(this.fill);
    }
    animateToCurrentForm() {
        const node = select(this.element).select('.cell');
        if (this.animations) {
            node
                .transition()
                .duration(750)
                .attr('opacity', 1)
                .attr('x', this.x)
                .attr('y', this.y)
                .attr('width', this.width)
                .attr('height', this.height);
        }
        else {
            node.attr('opacity', 1).attr('x', this.x).attr('y', this.y).attr('width', this.width).attr('height', this.height);
        }
    }
    onClick() {
        this.select.emit(this.data);
    }
    getGradientStops() {
        return [
            {
                offset: 0,
                color: this.fill,
                opacity: 0.3
            },
            {
                offset: 100,
                color: this.fill,
                opacity: 1
            }
        ];
    }
}
TreeMapCellComponent.ɵfac = function TreeMapCellComponent_Factory(t) { return new (t || TreeMapCellComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
TreeMapCellComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeMapCellComponent, selectors: [["g", "ngx-charts-tree-map-cell", ""]], inputs: { data: "data", fill: "fill", x: "x", y: "y", width: "width", height: "height", label: "label", value: "value", valueFormatting: "valueFormatting", labelFormatting: "labelFormatting", gradient: "gradient", animations: "animations" }, outputs: { select: "select" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 4, vars: 7, consts: [[4, "ngIf"], [1, "cell", 3, "click"], ["class", "treemap-label", 3, "pointer-events", 4, "ngIf"], ["ngx-charts-svg-linear-gradient", "", 3, "orientation", "name", "stops"], [1, "treemap-label"], [1, "treemap-label", 3, "innerHTML"], ["class", "treemap-val", "ngx-charts-count-up", "", 3, "countTo", "valueFormatting", 4, "ngIf"], ["class", "treemap-val", 4, "ngIf"], ["ngx-charts-count-up", "", 1, "treemap-val", 3, "countTo", "valueFormatting"], [1, "treemap-val"]], template: function TreeMapCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g");
        i0.ɵɵtemplate(1, TreeMapCellComponent__svg_defs_1_Template, 2, 3, "defs", 0);
        i0.ɵɵelementStart(2, "rect", 1);
        i0.ɵɵlistener("click", function TreeMapCellComponent_Template__svg_rect_click_2_listener() { return ctx.onClick(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, TreeMapCellComponent__svg_foreignObject_3_Template, 6, 15, "foreignObject", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.gradient);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("fill", ctx.gradient ? ctx.gradientUrl : ctx.fill)("width", ctx.width)("height", ctx.height)("x", ctx.x)("y", ctx.y);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.width >= 70 && ctx.height >= 35);
    } }, directives: [i1.NgIf, i2.SvgLinearGradientComponent, i3.CountUpDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeMapCellComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-tree-map-cell]',
                template: `
    <svg:g>
      <defs *ngIf="gradient">
        <svg:g
          ngx-charts-svg-linear-gradient
          [orientation]="orientation.Vertical"
          [name]="gradientId"
          [stops]="gradientStops"
        />
      </defs>
      <svg:rect
        [attr.fill]="gradient ? gradientUrl : fill"
        [attr.width]="width"
        [attr.height]="height"
        [attr.x]="x"
        [attr.y]="y"
        class="cell"
        (click)="onClick()"
      />
      <svg:foreignObject
        *ngIf="width >= 70 && height >= 35"
        [attr.x]="x"
        [attr.y]="y"
        [attr.width]="width"
        [attr.height]="height"
        class="treemap-label"
        [style.pointer-events]="'none'"
      >
        <xhtml:p [style.color]="getTextColor()" [style.height]="height + 'px'" [style.width]="width + 'px'">
          <xhtml:span class="treemap-label" [innerHTML]="formattedLabel"> </xhtml:span>
          <xhtml:br />
          <xhtml:span
            *ngIf="animations"
            class="treemap-val"
            ngx-charts-count-up
            [countTo]="value"
            [valueFormatting]="valueFormatting"
          >
          </xhtml:span>
          <xhtml:span *ngIf="!animations" class="treemap-val">
            {{ formattedValue }}
          </xhtml:span>
        </xhtml:p>
      </svg:foreignObject>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { data: [{
            type: Input
        }], fill: [{
            type: Input
        }], x: [{
            type: Input
        }], y: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], label: [{
            type: Input
        }], value: [{
            type: Input
        }], valueFormatting: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], gradient: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tYXAtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvdHJlZS1tYXAvdHJlZS1tYXAtY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBeUIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR2pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7SUFNaEUsNEJBQXVCO0lBQ3JCLHVCQUtFO0lBQ0osaUJBQU87OztJQUpILGVBQW9DO0lBQXBDLHlEQUFvQywyQkFBQSwrQkFBQTs7O0lBMEJwQywwQkFPYTs7O0lBSFgsc0NBQWlCLDJDQUFBOzs7SUFJbkIsK0JBQW9EO0lBQ2xELFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRFgsZUFDRjtJQURFLHNEQUNGOzs7O0lBdEJKLHdDQVFDO0lBQ0Msb0JBQW9HO0lBQXBHLHlCQUFvRztJQUNsRywwQkFBNkU7SUFDN0UscUJBQVk7SUFDWixtR0FPYTtJQUNiLG1HQUVhO0lBQ2YsaUJBQVU7SUFDWixpQkFBb0I7OztJQWpCbEIsd0NBQStCO0lBTC9CLDZCQUFZLGVBQUEsdUJBQUEseUJBQUE7SUFPSCxlQUE4QjtJQUE5Qiw4Q0FBOEIsZ0NBQUEsOEJBQUE7SUFD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QUFBLFlBQUEsWUFBQTtRQVMxQyxlQUFpQztRQUFqQywwREFBaUM7O3VGQTRCN0Isb0JBQW9CO2NBbERoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2Q1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7NkRBRVUsSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csQ0FBQztrQkFBVCxLQUFLO1lBQ0csQ0FBQztrQkFBVCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBRUcsZUFBZTtrQkFBdkIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgaW52ZXJ0Q29sb3IgfSBmcm9tICcuLi91dGlscy9jb2xvci11dGlscyc7XG5pbXBvcnQgeyB0cmltTGFiZWwgfSBmcm9tICcuLi9jb21tb24vdHJpbS1sYWJlbC5oZWxwZXInO1xuaW1wb3J0IHsgZXNjYXBlTGFiZWwgfSBmcm9tICcuLi9jb21tb24vbGFiZWwuaGVscGVyJztcbmltcG9ydCB7IGlkIH0gZnJvbSAnLi4vdXRpbHMvaWQnO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tICcuLi9tb2RlbHMvY2hhcnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBHcmFkaWVudCB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9ncmFkaWVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQmFyT3JpZW50YXRpb24gfSBmcm9tICcuLi9jb21tb24vdHlwZXMvYmFyLW9yaWVudGF0aW9uLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtdHJlZS1tYXAtY2VsbF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6Zz5cbiAgICAgIDxkZWZzICpuZ0lmPVwiZ3JhZGllbnRcIj5cbiAgICAgICAgPHN2ZzpnXG4gICAgICAgICAgbmd4LWNoYXJ0cy1zdmctbGluZWFyLWdyYWRpZW50XG4gICAgICAgICAgW29yaWVudGF0aW9uXT1cIm9yaWVudGF0aW9uLlZlcnRpY2FsXCJcbiAgICAgICAgICBbbmFtZV09XCJncmFkaWVudElkXCJcbiAgICAgICAgICBbc3RvcHNdPVwiZ3JhZGllbnRTdG9wc1wiXG4gICAgICAgIC8+XG4gICAgICA8L2RlZnM+XG4gICAgICA8c3ZnOnJlY3RcbiAgICAgICAgW2F0dHIuZmlsbF09XCJncmFkaWVudCA/IGdyYWRpZW50VXJsIDogZmlsbFwiXG4gICAgICAgIFthdHRyLndpZHRoXT1cIndpZHRoXCJcbiAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImhlaWdodFwiXG4gICAgICAgIFthdHRyLnhdPVwieFwiXG4gICAgICAgIFthdHRyLnldPVwieVwiXG4gICAgICAgIGNsYXNzPVwiY2VsbFwiXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrKClcIlxuICAgICAgLz5cbiAgICAgIDxzdmc6Zm9yZWlnbk9iamVjdFxuICAgICAgICAqbmdJZj1cIndpZHRoID49IDcwICYmIGhlaWdodCA+PSAzNVwiXG4gICAgICAgIFthdHRyLnhdPVwieFwiXG4gICAgICAgIFthdHRyLnldPVwieVwiXG4gICAgICAgIFthdHRyLndpZHRoXT1cIndpZHRoXCJcbiAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImhlaWdodFwiXG4gICAgICAgIGNsYXNzPVwidHJlZW1hcC1sYWJlbFwiXG4gICAgICAgIFtzdHlsZS5wb2ludGVyLWV2ZW50c109XCInbm9uZSdcIlxuICAgICAgPlxuICAgICAgICA8eGh0bWw6cCBbc3R5bGUuY29sb3JdPVwiZ2V0VGV4dENvbG9yKClcIiBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodCArICdweCdcIiBbc3R5bGUud2lkdGhdPVwid2lkdGggKyAncHgnXCI+XG4gICAgICAgICAgPHhodG1sOnNwYW4gY2xhc3M9XCJ0cmVlbWFwLWxhYmVsXCIgW2lubmVySFRNTF09XCJmb3JtYXR0ZWRMYWJlbFwiPiA8L3hodG1sOnNwYW4+XG4gICAgICAgICAgPHhodG1sOmJyIC8+XG4gICAgICAgICAgPHhodG1sOnNwYW5cbiAgICAgICAgICAgICpuZ0lmPVwiYW5pbWF0aW9uc1wiXG4gICAgICAgICAgICBjbGFzcz1cInRyZWVtYXAtdmFsXCJcbiAgICAgICAgICAgIG5neC1jaGFydHMtY291bnQtdXBcbiAgICAgICAgICAgIFtjb3VudFRvXT1cInZhbHVlXCJcbiAgICAgICAgICAgIFt2YWx1ZUZvcm1hdHRpbmddPVwidmFsdWVGb3JtYXR0aW5nXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC94aHRtbDpzcGFuPlxuICAgICAgICAgIDx4aHRtbDpzcGFuICpuZ0lmPVwiIWFuaW1hdGlvbnNcIiBjbGFzcz1cInRyZWVtYXAtdmFsXCI+XG4gICAgICAgICAgICB7eyBmb3JtYXR0ZWRWYWx1ZSB9fVxuICAgICAgICAgIDwveGh0bWw6c3Bhbj5cbiAgICAgICAgPC94aHRtbDpwPlxuICAgICAgPC9zdmc6Zm9yZWlnbk9iamVjdD5cbiAgICA8L3N2ZzpnPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTWFwQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRhdGE6IERhdGFJdGVtO1xuICBASW5wdXQoKSBmaWxsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHg6IG51bWJlcjtcbiAgQElucHV0KCkgeTogbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IGFueTtcbiAgLy8gQElucHV0KCkgdmFsdWVUeXBlO1xuICBASW5wdXQoKSB2YWx1ZUZvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgbGFiZWxGb3JtYXR0aW5nOiBhbnk7XG4gIEBJbnB1dCgpIGdyYWRpZW50OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFuaW1hdGlvbnM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ3JhZGllbnRTdG9wczogR3JhZGllbnRbXTtcbiAgZ3JhZGllbnRJZDogc3RyaW5nO1xuICBncmFkaWVudFVybDogc3RyaW5nO1xuXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICB0cmFuc2Zvcm06IHN0cmluZztcbiAgZm9ybWF0dGVkTGFiZWw6IHN0cmluZztcbiAgZm9ybWF0dGVkVmFsdWU6IHN0cmluZztcbiAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBvcmllbnRhdGlvbiA9IEJhck9yaWVudGF0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy52YWx1ZUZvcm1hdHRpbmcgPSB0aGlzLnZhbHVlRm9ybWF0dGluZyB8fCAodmFsdWUgPT4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoKSk7XG4gICAgY29uc3QgbGFiZWxGb3JtYXR0aW5nID0gdGhpcy5sYWJlbEZvcm1hdHRpbmcgfHwgKGNlbGwgPT4gZXNjYXBlTGFiZWwodHJpbUxhYmVsKGNlbGwubGFiZWwsIDU1KSkpO1xuXG4gICAgY29uc3QgY2VsbERhdGEgPSB7XG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgfTtcblxuICAgIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSB0aGlzLnZhbHVlRm9ybWF0dGluZyhjZWxsRGF0YS52YWx1ZSk7XG4gICAgdGhpcy5mb3JtYXR0ZWRMYWJlbCA9IGxhYmVsRm9ybWF0dGluZyhjZWxsRGF0YSk7XG5cbiAgICB0aGlzLmdyYWRpZW50SWQgPSAnZ3JhZCcgKyBpZCgpLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5ncmFkaWVudFVybCA9IGB1cmwoIyR7dGhpcy5ncmFkaWVudElkfSlgO1xuICAgIHRoaXMuZ3JhZGllbnRTdG9wcyA9IHRoaXMuZ2V0R3JhZGllbnRTdG9wcygpO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmFuaW1hdGVUb0N1cnJlbnRGb3JtKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgICAgdGhpcy5sb2FkQW5pbWF0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBsb2FkQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGUgPSBzZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoJy5jZWxsJyk7XG5cbiAgICBub2RlLmF0dHIoJ29wYWNpdHknLCAwKS5hdHRyKCd4JywgdGhpcy54KS5hdHRyKCd5JywgdGhpcy55KTtcblxuICAgIHRoaXMuYW5pbWF0ZVRvQ3VycmVudEZvcm0oKTtcbiAgfVxuXG4gIGdldFRleHRDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBpbnZlcnRDb2xvcih0aGlzLmZpbGwpO1xuICB9XG5cbiAgYW5pbWF0ZVRvQ3VycmVudEZvcm0oKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZSA9IHNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdCgnLmNlbGwnKTtcblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgIG5vZGVcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDEpXG4gICAgICAgIC5hdHRyKCd4JywgdGhpcy54KVxuICAgICAgICAuYXR0cigneScsIHRoaXMueSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5hdHRyKCdvcGFjaXR5JywgMSkuYXR0cigneCcsIHRoaXMueCkuYXR0cigneScsIHRoaXMueSkuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBnZXRHcmFkaWVudFN0b3BzKCk6IEdyYWRpZW50W10ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgY29sb3I6IHRoaXMuZmlsbCxcbiAgICAgICAgb3BhY2l0eTogMC4zXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBvZmZzZXQ6IDEwMCxcbiAgICAgICAgY29sb3I6IHRoaXMuZmlsbCxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfVxuICAgIF07XG4gIH1cbn1cbiJdfQ==