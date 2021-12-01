import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BarOrientation } from './types/bar-orientation.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["ngx-charts-svg-linear-gradient", ""];
function SvgLinearGradientComponent__svg_stop_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "stop");
} if (rf & 2) {
    const stop_r1 = ctx.$implicit;
    i0.ɵɵstyleProp("stop-color", stop_r1.color)("stop-opacity", stop_r1.opacity);
    i0.ɵɵattribute("offset", stop_r1.offset + "%");
} }
export class SvgLinearGradientComponent {
    constructor() {
        this.orientation = BarOrientation.Vertical;
    }
    ngOnChanges(changes) {
        this.x1 = '0%';
        this.x2 = '0%';
        this.y1 = '0%';
        this.y2 = '0%';
        if (this.orientation === BarOrientation.Horizontal) {
            this.x2 = '100%';
        }
        else if (this.orientation === BarOrientation.Vertical) {
            this.y1 = '100%';
        }
    }
}
SvgLinearGradientComponent.ɵfac = function SvgLinearGradientComponent_Factory(t) { return new (t || SvgLinearGradientComponent)(); };
SvgLinearGradientComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SvgLinearGradientComponent, selectors: [["g", "ngx-charts-svg-linear-gradient", ""]], inputs: { orientation: "orientation", name: "name", stops: "stops" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 6, consts: [[3, "id"], [3, "stop-color", "stop-opacity", 4, "ngFor", "ngForOf"]], template: function SvgLinearGradientComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "linearGradient", 0);
        i0.ɵɵtemplate(1, SvgLinearGradientComponent__svg_stop_1_Template, 1, 5, "stop", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.name);
        i0.ɵɵattribute("x1", ctx.x1)("y1", ctx.y1)("x2", ctx.x2)("y2", ctx.y2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.stops);
    } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SvgLinearGradientComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-svg-linear-gradient]',
                template: `
    <svg:linearGradient [id]="name" [attr.x1]="x1" [attr.y1]="y1" [attr.x2]="x2" [attr.y2]="y2">
      <svg:stop
        *ngFor="let stop of stops"
        [attr.offset]="stop.offset + '%'"
        [style.stop-color]="stop.color"
        [style.stop-opacity]="stop.opacity"
      />
    </svg:linearGradient>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { orientation: [{
            type: Input
        }], name: [{
            type: Input
        }], stops: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWxpbmVhci1ncmFkaWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvY29tbW9uL3N2Zy1saW5lYXItZ3JhZGllbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7OztJQU94RCx1QkFLRTs7O0lBRkEsMkNBQStCLGlDQUFBO0lBRC9CLDhDQUFpQzs7QUFRekMsTUFBTSxPQUFPLDBCQUEwQjtJQWR2QztRQWVXLGdCQUFXLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQztLQXFCaEQ7SUFaQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFZixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssY0FBYyxDQUFDLFVBQVUsRUFBRTtZQUNsRCxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7b0dBckJVLDBCQUEwQjs2RUFBMUIsMEJBQTBCO1FBWG5DLG1CQUE0RjtRQUE1Rix5Q0FBNEY7UUFDMUYsa0ZBS0U7UUFDSixpQkFBcUI7O1FBUEQsNkJBQVc7UUFBQyw0QkFBYyxjQUFBLGNBQUEsY0FBQTtRQUV6QixlQUFRO1FBQVIsbUNBQVE7O3VGQVNwQiwwQkFBMEI7Y0FkdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Z0JBRVUsV0FBVztrQkFBbkIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhck9yaWVudGF0aW9uIH0gZnJvbSAnLi90eXBlcy9iYXItb3JpZW50YXRpb24uZW51bSc7XG5pbXBvcnQgeyBHcmFkaWVudCB9IGZyb20gJy4vdHlwZXMvZ3JhZGllbnQuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLXN2Zy1saW5lYXItZ3JhZGllbnRdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOmxpbmVhckdyYWRpZW50IFtpZF09XCJuYW1lXCIgW2F0dHIueDFdPVwieDFcIiBbYXR0ci55MV09XCJ5MVwiIFthdHRyLngyXT1cIngyXCIgW2F0dHIueTJdPVwieTJcIj5cbiAgICAgIDxzdmc6c3RvcFxuICAgICAgICAqbmdGb3I9XCJsZXQgc3RvcCBvZiBzdG9wc1wiXG4gICAgICAgIFthdHRyLm9mZnNldF09XCJzdG9wLm9mZnNldCArICclJ1wiXG4gICAgICAgIFtzdHlsZS5zdG9wLWNvbG9yXT1cInN0b3AuY29sb3JcIlxuICAgICAgICBbc3R5bGUuc3RvcC1vcGFjaXR5XT1cInN0b3Aub3BhY2l0eVwiXG4gICAgICAvPlxuICAgIDwvc3ZnOmxpbmVhckdyYWRpZW50PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdmdMaW5lYXJHcmFkaWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG9yaWVudGF0aW9uID0gQmFyT3JpZW50YXRpb24uVmVydGljYWw7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc3RvcHM6IEdyYWRpZW50W107XG5cbiAgeDE6IHN0cmluZztcbiAgeDI6IHN0cmluZztcbiAgeTE6IHN0cmluZztcbiAgeTI6IHN0cmluZztcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy54MSA9ICcwJSc7XG4gICAgdGhpcy54MiA9ICcwJSc7XG4gICAgdGhpcy55MSA9ICcwJSc7XG4gICAgdGhpcy55MiA9ICcwJSc7XG5cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gQmFyT3JpZW50YXRpb24uSG9yaXpvbnRhbCkge1xuICAgICAgdGhpcy54MiA9ICcxMDAlJztcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT09IEJhck9yaWVudGF0aW9uLlZlcnRpY2FsKSB7XG4gICAgICB0aGlzLnkxID0gJzEwMCUnO1xuICAgIH1cbiAgfVxufVxuIl19