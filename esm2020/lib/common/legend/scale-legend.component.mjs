import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class ScaleLegendComponent {
    constructor() {
        this.horizontal = false;
    }
    ngOnChanges(changes) {
        const gradientValues = this.gradientString(this.colors.range(), this.colors.domain());
        const direction = this.horizontal ? 'right' : 'bottom';
        this.gradient = `linear-gradient(to ${direction}, ${gradientValues})`;
    }
    /**
     * Generates the string used in the gradient stylesheet properties
     * @param colors array of colors
     * @param splits array of splits on a scale of (0, 1)
     */
    gradientString(colors, splits) {
        // add the 100%
        splits.push(1);
        const pairs = [];
        colors.reverse().forEach((c, i) => {
            pairs.push(`${c} ${Math.round(splits[i] * 100)}%`);
        });
        return pairs.join(', ');
    }
}
ScaleLegendComponent.ɵfac = function ScaleLegendComponent_Factory(t) { return new (t || ScaleLegendComponent)(); };
ScaleLegendComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScaleLegendComponent, selectors: [["ngx-charts-scale-legend"]], inputs: { valueRange: "valueRange", colors: "colors", height: "height", width: "width", horizontal: "horizontal" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 10, consts: [[1, "scale-legend"], [1, "scale-legend-label"], [1, "scale-legend-wrap"]], template: function ScaleLegendComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "div", 2);
        i0.ɵɵelementStart(5, "div", 1);
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.horizontal ? undefined : ctx.height, "px")("width", ctx.width, "px");
        i0.ɵɵclassProp("horizontal-legend", ctx.horizontal);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.valueRange[1].toLocaleString());
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("background", ctx.gradient);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.valueRange[0].toLocaleString());
    } }, styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .scale-legend{text-align:center;display:flex;flex-direction:column}.chart-legend .scale-legend-wrap{display:inline-block;flex:1;width:30px;border-radius:5px;margin:0 auto}.chart-legend .scale-legend-label{font-size:12px}.chart-legend .horizontal-legend.scale-legend{flex-direction:row}.chart-legend .horizontal-legend .scale-legend-wrap{width:auto;height:30px;margin:0 16px}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScaleLegendComponent, [{
        type: Component,
        args: [{ selector: 'ngx-charts-scale-legend', template: `
    <div
      class="scale-legend"
      [class.horizontal-legend]="horizontal"
      [style.height.px]="horizontal ? undefined : height"
      [style.width.px]="width"
    >
      <div class="scale-legend-label">
        <span>{{ valueRange[1].toLocaleString() }}</span>
      </div>
      <div class="scale-legend-wrap" [style.background]="gradient"></div>
      <div class="scale-legend-label">
        <span>{{ valueRange[0].toLocaleString() }}</span>
      </div>
    </div>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .scale-legend{text-align:center;display:flex;flex-direction:column}.chart-legend .scale-legend-wrap{display:inline-block;flex:1;width:30px;border-radius:5px;margin:0 auto}.chart-legend .scale-legend-label{font-size:12px}.chart-legend .horizontal-legend.scale-legend{flex-direction:row}.chart-legend .horizontal-legend .scale-legend-wrap{width:auto;height:30px;margin:0 16px}\n"] }]
    }], null, { valueRange: [{
            type: Input
        }], colors: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], horizontal: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGUtbGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9jb21tb24vbGVnZW5kL3NjYWxlLWxlZ2VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsdUJBQXVCLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQXdCdkgsTUFBTSxPQUFPLG9CQUFvQjtJQXRCakM7UUEyQlcsZUFBVSxHQUFZLEtBQUssQ0FBQztLQXlCdEM7SUFyQkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDdEYsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxzQkFBc0IsU0FBUyxLQUFLLGNBQWMsR0FBRyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYyxDQUFDLE1BQWdCLEVBQUUsTUFBZ0I7UUFDL0MsZUFBZTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzt3RkE3QlUsb0JBQW9CO3VFQUFwQixvQkFBb0I7UUFuQjdCLDhCQUtDO1FBQ0MsOEJBQWdDO1FBQzlCLDRCQUFNO1FBQUEsWUFBb0M7UUFBQSxpQkFBTztRQUNuRCxpQkFBTTtRQUNOLHlCQUFtRTtRQUNuRSw4QkFBZ0M7UUFDOUIsNEJBQU07UUFBQSxZQUFvQztRQUFBLGlCQUFPO1FBQ25ELGlCQUFNO1FBQ1IsaUJBQU07O1FBVkosdUVBQW1ELDBCQUFBO1FBRG5ELG1EQUFzQztRQUs5QixlQUFvQztRQUFwQyx3REFBb0M7UUFFYixlQUE2QjtRQUE3QiwwQ0FBNkI7UUFFcEQsZUFBb0M7UUFBcEMsd0RBQW9DOzt1RkFRckMsb0JBQW9CO2NBdEJoQyxTQUFTOzJCQUNFLHlCQUF5QixZQUN6Qjs7Ozs7Ozs7Ozs7Ozs7O0dBZVQsaUJBRWMsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTtnQkFHdEMsVUFBVTtrQkFBbEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtY2hhcnRzLXNjYWxlLWxlZ2VuZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJzY2FsZS1sZWdlbmRcIlxuICAgICAgW2NsYXNzLmhvcml6b250YWwtbGVnZW5kXT1cImhvcml6b250YWxcIlxuICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJob3Jpem9udGFsID8gdW5kZWZpbmVkIDogaGVpZ2h0XCJcbiAgICAgIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cInNjYWxlLWxlZ2VuZC1sYWJlbFwiPlxuICAgICAgICA8c3Bhbj57eyB2YWx1ZVJhbmdlWzFdLnRvTG9jYWxlU3RyaW5nKCkgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzY2FsZS1sZWdlbmQtd3JhcFwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImdyYWRpZW50XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2NhbGUtbGVnZW5kLWxhYmVsXCI+XG4gICAgICAgIDxzcGFuPnt7IHZhbHVlUmFuZ2VbMF0udG9Mb2NhbGVTdHJpbmcoKSB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9zY2FsZS1sZWdlbmQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU2NhbGVMZWdlbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB2YWx1ZVJhbmdlOiBudW1iZXJbXTtcbiAgQElucHV0KCkgY29sb3JzOiBhbnk7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBob3Jpem9udGFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ3JhZGllbnQ6IHN0cmluZztcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgZ3JhZGllbnRWYWx1ZXMgPSB0aGlzLmdyYWRpZW50U3RyaW5nKHRoaXMuY29sb3JzLnJhbmdlKCksIHRoaXMuY29sb3JzLmRvbWFpbigpKTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmhvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gICAgdGhpcy5ncmFkaWVudCA9IGBsaW5lYXItZ3JhZGllbnQodG8gJHtkaXJlY3Rpb259LCAke2dyYWRpZW50VmFsdWVzfSlgO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgc3RyaW5nIHVzZWQgaW4gdGhlIGdyYWRpZW50IHN0eWxlc2hlZXQgcHJvcGVydGllc1xuICAgKiBAcGFyYW0gY29sb3JzIGFycmF5IG9mIGNvbG9yc1xuICAgKiBAcGFyYW0gc3BsaXRzIGFycmF5IG9mIHNwbGl0cyBvbiBhIHNjYWxlIG9mICgwLCAxKVxuICAgKi9cbiAgZ3JhZGllbnRTdHJpbmcoY29sb3JzOiBzdHJpbmdbXSwgc3BsaXRzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgLy8gYWRkIHRoZSAxMDAlXG4gICAgc3BsaXRzLnB1c2goMSk7XG4gICAgY29uc3QgcGFpcnMgPSBbXTtcbiAgICBjb2xvcnMucmV2ZXJzZSgpLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgIHBhaXJzLnB1c2goYCR7Y30gJHtNYXRoLnJvdW5kKHNwbGl0c1tpXSAqIDEwMCl9JWApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhaXJzLmpvaW4oJywgJyk7XG4gIH1cbn1cbiJdfQ==