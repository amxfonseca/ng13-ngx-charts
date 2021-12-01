import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["ngx-charts-circle", ""];
export class CircleComponent {
    constructor() {
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
    }
    onClick() {
        this.select.emit(this.data);
    }
    onMouseEnter() {
        this.activate.emit(this.data);
    }
    onMouseLeave() {
        this.deactivate.emit(this.data);
    }
    ngOnChanges(changes) {
        this.classNames = Array.isArray(this.classNames) ? this.classNames.join(' ') : '';
        this.classNames += 'circle';
    }
}
CircleComponent.ɵfac = function CircleComponent_Factory(t) { return new (t || CircleComponent)(); };
CircleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CircleComponent, selectors: [["g", "ngx-charts-circle", ""]], hostBindings: function CircleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CircleComponent_click_HostBindingHandler() { return ctx.onClick(); })("mouseenter", function CircleComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function CircleComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { cx: "cx", cy: "cy", r: "r", fill: "fill", stroke: "stroke", data: "data", classNames: "classNames", circleOpacity: "circleOpacity", pointerEvents: "pointerEvents" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 8, template: function CircleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "circle");
    } if (rf & 2) {
        i0.ɵɵattribute("cx", ctx.cx)("cy", ctx.cy)("r", ctx.r)("fill", ctx.fill)("stroke", ctx.stroke)("opacity", ctx.circleOpacity)("class", ctx.classNames)("pointer-events", ctx.pointerEvents);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CircleComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-circle]',
                template: `
    <svg:circle
      [attr.cx]="cx"
      [attr.cy]="cy"
      [attr.r]="r"
      [attr.fill]="fill"
      [attr.stroke]="stroke"
      [attr.opacity]="circleOpacity"
      [attr.class]="classNames"
      [attr.pointer-events]="pointerEvents"
    />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { cx: [{
            type: Input
        }], cy: [{
            type: Input
        }], r: [{
            type: Input
        }], fill: [{
            type: Input
        }], stroke: [{
            type: Input
        }], data: [{
            type: Input
        }], classNames: [{
            type: Input
        }], circleOpacity: [{
            type: Input
        }], pointerEvents: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9jb21tb24vY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxNQUFNLEVBQ04sWUFBWSxFQUVaLHVCQUF1QixFQUN2QixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7OztBQWtCdkIsTUFBTSxPQUFPLGVBQWU7SUFoQjVCO1FBMkJZLFdBQU0sR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRCxhQUFRLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0QsZUFBVSxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBcUIxRTtJQWxCQyxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFHRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztJQUM5QixDQUFDOzs4RUFqQ1UsZUFBZTtrRUFBZixlQUFlOzRGQUFmLGFBQVMscUZBQVQsa0JBQWMscUZBQWQsa0JBQWM7O1FBYnZCLG1CQVNFO1FBVEYseUJBU0U7O1FBUkEsNEJBQWMsY0FBQSxZQUFBLGtCQUFBLHNCQUFBLDhCQUFBLHlCQUFBLHFDQUFBOzt1RkFZUCxlQUFlO2NBaEIzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dCQUVVLEVBQUU7a0JBQVYsS0FBSztZQUNHLEVBQUU7a0JBQVYsS0FBSztZQUNHLENBQUM7a0JBQVQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUVJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBR1AsT0FBTztrQkFETixZQUFZO21CQUFDLE9BQU87WUFNckIsWUFBWTtrQkFEWCxZQUFZO21CQUFDLFlBQVk7WUFNMUIsWUFBWTtrQkFEWCxZQUFZO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtY2lyY2xlXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZzpjaXJjbGVcbiAgICAgIFthdHRyLmN4XT1cImN4XCJcbiAgICAgIFthdHRyLmN5XT1cImN5XCJcbiAgICAgIFthdHRyLnJdPVwiclwiXG4gICAgICBbYXR0ci5maWxsXT1cImZpbGxcIlxuICAgICAgW2F0dHIuc3Ryb2tlXT1cInN0cm9rZVwiXG4gICAgICBbYXR0ci5vcGFjaXR5XT1cImNpcmNsZU9wYWNpdHlcIlxuICAgICAgW2F0dHIuY2xhc3NdPVwiY2xhc3NOYW1lc1wiXG4gICAgICBbYXR0ci5wb2ludGVyLWV2ZW50c109XCJwb2ludGVyRXZlbnRzXCJcbiAgICAvPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDaXJjbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjeDogbnVtYmVyO1xuICBASW5wdXQoKSBjeTogbnVtYmVyO1xuICBASW5wdXQoKSByOiBudW1iZXI7XG4gIEBJbnB1dCgpIGZpbGw6IHN0cmluZztcbiAgQElucHV0KCkgc3Ryb2tlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGE6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3NOYW1lczogc3RyaW5nW10gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGNpcmNsZU9wYWNpdHk6IG51bWJlcjtcbiAgQElucHV0KCkgcG9pbnRlckV2ZW50czogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxudW1iZXIgfCBzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPG51bWJlciB8IHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZS5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuZGVhY3RpdmF0ZS5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc05hbWVzID0gQXJyYXkuaXNBcnJheSh0aGlzLmNsYXNzTmFtZXMpID8gdGhpcy5jbGFzc05hbWVzLmpvaW4oJyAnKSA6ICcnO1xuICAgIHRoaXMuY2xhc3NOYW1lcyArPSAnY2lyY2xlJztcbiAgfVxufVxuIl19