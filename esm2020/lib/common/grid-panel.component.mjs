import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["ngx-charts-grid-panel", ""];
export class GridPanelComponent {
}
GridPanelComponent.ɵfac = function GridPanelComponent_Factory(t) { return new (t || GridPanelComponent)(); };
GridPanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GridPanelComponent, selectors: [["g", "ngx-charts-grid-panel", ""]], inputs: { width: "width", height: "height", x: "x", y: "y" }, attrs: _c0, decls: 1, vars: 4, consts: [["stroke", "none", 1, "gridpanel"]], template: function GridPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "rect", 0);
    } if (rf & 2) {
        i0.ɵɵattribute("height", ctx.height)("width", ctx.width)("x", ctx.x)("y", ctx.y);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridPanelComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-grid-panel]',
                template: `
    <svg:rect [attr.height]="height" [attr.width]="width" [attr.x]="x" [attr.y]="y" stroke="none" class="gridpanel" />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { width: [{
            type: Input
        }], height: [{
            type: Input
        }], x: [{
            type: Input
        }], y: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvY29tbW9uL2dyaWQtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFTMUUsTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjtxRUFBbEIsa0JBQWtCO1FBSjNCLG1CQUFrSDtRQUFsSCwwQkFBa0g7O1FBQXhHLG9DQUFzQixvQkFBQSxZQUFBLFlBQUE7O3VGQUl2QixrQkFBa0I7Y0FQOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFFVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxDQUFDO2tCQUFULEtBQUs7WUFDRyxDQUFDO2tCQUFULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtZ3JpZC1wYW5lbF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6cmVjdCBbYXR0ci5oZWlnaHRdPVwiaGVpZ2h0XCIgW2F0dHIud2lkdGhdPVwid2lkdGhcIiBbYXR0ci54XT1cInhcIiBbYXR0ci55XT1cInlcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJncmlkcGFuZWxcIiAvPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkUGFuZWxDb21wb25lbnQge1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgeDogbnVtYmVyO1xuICBASW5wdXQoKSB5OiBudW1iZXI7XG59XG4iXX0=