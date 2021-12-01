import { Component, Input, Output, ChangeDetectionStrategy, HostListener, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class LegendEntryComponent {
    constructor() {
        this.isActive = false;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.toggle = new EventEmitter();
    }
    get trimmedLabel() {
        return this.formattedLabel || '(empty)';
    }
    onMouseEnter() {
        this.activate.emit({ name: this.label });
    }
    onMouseLeave() {
        this.deactivate.emit({ name: this.label });
    }
}
LegendEntryComponent.ɵfac = function LegendEntryComponent_Factory(t) { return new (t || LegendEntryComponent)(); };
LegendEntryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LegendEntryComponent, selectors: [["ngx-charts-legend-entry"]], hostBindings: function LegendEntryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function LegendEntryComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function LegendEntryComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { color: "color", label: "label", formattedLabel: "formattedLabel", isActive: "isActive" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate", toggle: "toggle" }, decls: 4, vars: 6, consts: [["tabindex", "-1", 3, "title", "click"], [1, "legend-label-color", 3, "click"], [1, "legend-label-text"]], template: function LegendEntryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("click", function LegendEntryComponent_Template_span_click_0_listener() { return ctx.select.emit(ctx.formattedLabel); });
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵlistener("click", function LegendEntryComponent_Template_span_click_1_listener() { return ctx.toggle.emit(ctx.formattedLabel); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.isActive);
        i0.ɵɵproperty("title", ctx.formattedLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("background-color", ctx.color);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.trimmedLabel, " ");
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LegendEntryComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-charts-legend-entry',
                template: `
    <span [title]="formattedLabel" tabindex="-1" [class.active]="isActive" (click)="select.emit(formattedLabel)">
      <span class="legend-label-color" [style.background-color]="color" (click)="toggle.emit(formattedLabel)"> </span>
      <span class="legend-label-text">
        {{ trimmedLabel }}
      </span>
    </span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { color: [{
            type: Input
        }], label: [{
            type: Input
        }], formattedLabel: [{
            type: Input
        }], isActive: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], toggle: [{
            type: Output
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLWVudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9jb21tb24vbGVnZW5kL2xlZ2VuZC1lbnRyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBYzlHLE1BQU0sT0FBTyxvQkFBb0I7SUFaakM7UUFnQlcsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUV6QixXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQsYUFBUSxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlELGVBQVUsR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRSxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7S0FlN0Q7SUFiQyxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFHRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDOzt3RkF2QlUsb0JBQW9CO3VFQUFwQixvQkFBb0I7MkdBQXBCLGtCQUFjLDBGQUFkLGtCQUFjOztRQVR2QiwrQkFBNkc7UUFBdEMsK0ZBQVMsbUNBQTJCLElBQUM7UUFDMUcsK0JBQXdHO1FBQXRDLCtGQUFTLG1DQUEyQixJQUFDO1FBQUUsaUJBQU87UUFDaEgsK0JBQWdDO1FBQzlCLFlBQ0Y7UUFBQSxpQkFBTztRQUNULGlCQUFPOztRQUxzQyxzQ0FBeUI7UUFBaEUsMENBQXdCO1FBQ0ssZUFBZ0M7UUFBaEMsNkNBQWdDO1FBRS9ELGVBQ0Y7UUFERSxpREFDRjs7dUZBS08sb0JBQW9CO2NBWmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7R0FPVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFFVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNO1lBT1AsWUFBWTtrQkFEWCxZQUFZO21CQUFDLFlBQVk7WUFNMUIsWUFBWTtrQkFEWCxZQUFZO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtY2hhcnRzLWxlZ2VuZC1lbnRyeScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gW3RpdGxlXT1cImZvcm1hdHRlZExhYmVsXCIgdGFiaW5kZXg9XCItMVwiIFtjbGFzcy5hY3RpdmVdPVwiaXNBY3RpdmVcIiAoY2xpY2spPVwic2VsZWN0LmVtaXQoZm9ybWF0dGVkTGFiZWwpXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC1sYWJlbC1jb2xvclwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCIgKGNsaWNrKT1cInRvZ2dsZS5lbWl0KGZvcm1hdHRlZExhYmVsKVwiPiA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImxlZ2VuZC1sYWJlbC10ZXh0XCI+XG4gICAgICAgIHt7IHRyaW1tZWRMYWJlbCB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGVnZW5kRW50cnlDb21wb25lbnQge1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXR0ZWRMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjx7IG5hbWU6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjx7IG5hbWU6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHRvZ2dsZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IHRyaW1tZWRMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdHRlZExhYmVsIHx8ICcoZW1wdHkpJztcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHsgbmFtZTogdGhpcy5sYWJlbCB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQoeyBuYW1lOiB0aGlzLmxhYmVsIH0pO1xuICB9XG59XG4iXX0=