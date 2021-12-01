import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["ngx-charts-svg-radial-gradient", ""];
function SvgRadialGradientComponent__svg_stop_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "stop");
} if (rf & 2) {
    const stop_r1 = ctx.$implicit;
    i0.ɵɵstyleProp("stop-color", stop_r1.color)("stop-opacity", stop_r1.opacity);
    i0.ɵɵattribute("offset", stop_r1.offset + "%");
} }
export class SvgRadialGradientComponent {
    constructor() {
        this.endOpacity = 1;
        this.cx = 0;
        this.cy = 0;
    }
    get stops() {
        return this.stopsInput || this.stopsDefault;
    }
    set stops(value) {
        this.stopsInput = value;
    }
    ngOnChanges(changes) {
        this.r = '30%';
        if ('color' in changes || 'startOpacity' in changes || 'endOpacity' in changes) {
            this.stopsDefault = [
                {
                    offset: 0,
                    color: this.color,
                    opacity: this.startOpacity
                },
                {
                    offset: 100,
                    color: this.color,
                    opacity: this.endOpacity
                }
            ];
        }
    }
}
SvgRadialGradientComponent.ɵfac = function SvgRadialGradientComponent_Factory(t) { return new (t || SvgRadialGradientComponent)(); };
SvgRadialGradientComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SvgRadialGradientComponent, selectors: [["g", "ngx-charts-svg-radial-gradient", ""]], inputs: { color: "color", name: "name", startOpacity: "startOpacity", endOpacity: "endOpacity", cx: "cx", cy: "cy", stops: "stops" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 5, consts: [["gradientUnits", "userSpaceOnUse", 3, "id"], [3, "stop-color", "stop-opacity", 4, "ngFor", "ngForOf"]], template: function SvgRadialGradientComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "radialGradient", 0);
        i0.ɵɵtemplate(1, SvgRadialGradientComponent__svg_stop_1_Template, 1, 5, "stop", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.name);
        i0.ɵɵattribute("cx", ctx.cx)("cy", ctx.cy)("r", ctx.r);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.stops);
    } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SvgRadialGradientComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-svg-radial-gradient]',
                template: `
    <svg:radialGradient [id]="name" [attr.cx]="cx" [attr.cy]="cy" [attr.r]="r" gradientUnits="userSpaceOnUse">
      <svg:stop
        *ngFor="let stop of stops"
        [attr.offset]="stop.offset + '%'"
        [style.stop-color]="stop.color"
        [style.stop-opacity]="stop.opacity"
      />
    </svg:radialGradient>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { color: [{
            type: Input
        }], name: [{
            type: Input
        }], startOpacity: [{
            type: Input
        }], endOpacity: [{
            type: Input
        }], cx: [{
            type: Input
        }], cy: [{
            type: Input
        }], stops: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLXJhZGlhbC1ncmFkaWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvY29tbW9uL3N2Zy1yYWRpYWwtZ3JhZGllbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLHVCQUF1QixFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBTzlGLHVCQUtFOzs7SUFGQSwyQ0FBK0IsaUNBQUE7SUFEL0IsOENBQWlDOztBQVF6QyxNQUFNLE9BQU8sMEJBQTBCO0lBZHZDO1FBa0JXLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsT0FBRSxHQUFXLENBQUMsQ0FBQztLQWlDekI7SUEvQkMsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQWlCO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFPRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDZixJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksY0FBYyxJQUFJLE9BQU8sSUFBSSxZQUFZLElBQUksT0FBTyxFQUFFO1lBQzlFLElBQUksQ0FBQyxZQUFZLEdBQUc7Z0JBQ2xCO29CQUNFLE1BQU0sRUFBRSxDQUFDO29CQUNULEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZO2lCQUMzQjtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsR0FBRztvQkFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVTtpQkFDekI7YUFDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOztvR0F0Q1UsMEJBQTBCOzZFQUExQiwwQkFBMEI7UUFYbkMsbUJBQTBHO1FBQTFHLHlDQUEwRztRQUN4RyxrRkFLRTtRQUNKLGlCQUFxQjs7UUFQRCw2QkFBVztRQUFDLDRCQUFjLGNBQUEsWUFBQTtRQUV6QixlQUFRO1FBQVIsbUNBQVE7O3VGQVNwQiwwQkFBMEI7Y0FkdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Z0JBRVUsS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFHRixLQUFLO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcmFkaWVudCB9IGZyb20gJy4vdHlwZXMvZ3JhZGllbnQuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLXN2Zy1yYWRpYWwtZ3JhZGllbnRdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOnJhZGlhbEdyYWRpZW50IFtpZF09XCJuYW1lXCIgW2F0dHIuY3hdPVwiY3hcIiBbYXR0ci5jeV09XCJjeVwiIFthdHRyLnJdPVwiclwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxuICAgICAgPHN2ZzpzdG9wXG4gICAgICAgICpuZ0Zvcj1cImxldCBzdG9wIG9mIHN0b3BzXCJcbiAgICAgICAgW2F0dHIub2Zmc2V0XT1cInN0b3Aub2Zmc2V0ICsgJyUnXCJcbiAgICAgICAgW3N0eWxlLnN0b3AtY29sb3JdPVwic3RvcC5jb2xvclwiXG4gICAgICAgIFtzdHlsZS5zdG9wLW9wYWNpdHldPVwic3RvcC5vcGFjaXR5XCJcbiAgICAgIC8+XG4gICAgPC9zdmc6cmFkaWFsR3JhZGllbnQ+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1JhZGlhbEdyYWRpZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdGFydE9wYWNpdHk6IG51bWJlcjtcbiAgQElucHV0KCkgZW5kT3BhY2l0eSA9IDE7XG4gIEBJbnB1dCgpIGN4OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBjeTogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgc3RvcHMoKTogR3JhZGllbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcHNJbnB1dCB8fCB0aGlzLnN0b3BzRGVmYXVsdDtcbiAgfVxuXG4gIHNldCBzdG9wcyh2YWx1ZTogR3JhZGllbnRbXSkge1xuICAgIHRoaXMuc3RvcHNJbnB1dCA9IHZhbHVlO1xuICB9XG5cbiAgcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgc3RvcHNJbnB1dDogR3JhZGllbnRbXTtcbiAgcHJpdmF0ZSBzdG9wc0RlZmF1bHQ6IEdyYWRpZW50W107XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuciA9ICczMCUnO1xuICAgIGlmICgnY29sb3InIGluIGNoYW5nZXMgfHwgJ3N0YXJ0T3BhY2l0eScgaW4gY2hhbmdlcyB8fCAnZW5kT3BhY2l0eScgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5zdG9wc0RlZmF1bHQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICAgICAgb3BhY2l0eTogdGhpcy5zdGFydE9wYWNpdHlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9mZnNldDogMTAwLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgICAgIG9wYWNpdHk6IHRoaXMuZW5kT3BhY2l0eVxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cbiAgfVxufVxuIl19