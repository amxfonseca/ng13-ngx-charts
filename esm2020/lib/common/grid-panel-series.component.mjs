import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BarOrientation } from './types/bar-orientation.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./grid-panel.component";
const _c0 = ["ngx-charts-grid-panel-series", ""];
function GridPanelSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "g", 1);
} if (rf & 2) {
    const gridPanel_r1 = ctx.$implicit;
    i0.ɵɵclassProp("grid-panel", true)("odd", gridPanel_r1.class === "odd")("even", gridPanel_r1.class === "even");
    i0.ɵɵproperty("height", gridPanel_r1.height)("width", gridPanel_r1.width)("x", gridPanel_r1.x)("y", gridPanel_r1.y);
} }
var ClassEnum;
(function (ClassEnum) {
    ClassEnum["Odd"] = "odd";
    ClassEnum["Even"] = "even";
})(ClassEnum || (ClassEnum = {}));
export class GridPanelSeriesComponent {
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.gridPanels = this.getGridPanels();
    }
    getGridPanels() {
        return this.data.map(d => {
            let offset;
            let width;
            let height;
            let x;
            let y;
            let className = ClassEnum.Odd;
            if (this.orient === BarOrientation.Vertical) {
                const position = this.xScale(d.name);
                const positionIndex = Number.parseInt((position / this.xScale.step()).toString(), 10);
                if (positionIndex % 2 === 1) {
                    className = ClassEnum.Even;
                }
                offset = this.xScale.bandwidth() * this.xScale.paddingInner();
                width = this.xScale.bandwidth() + offset;
                height = this.dims.height;
                x = this.xScale(d.name) - offset / 2;
                y = 0;
            }
            else if (this.orient === BarOrientation.Horizontal) {
                const position = this.yScale(d.name);
                const positionIndex = Number.parseInt((position / this.yScale.step()).toString(), 10);
                if (positionIndex % 2 === 1) {
                    className = ClassEnum.Even;
                }
                offset = this.yScale.bandwidth() * this.yScale.paddingInner();
                width = this.dims.width;
                height = this.yScale.bandwidth() + offset;
                x = 0;
                y = this.yScale(d.name) - offset / 2;
            }
            return {
                name: d.name,
                class: className,
                height,
                width,
                x,
                y
            };
        });
    }
}
GridPanelSeriesComponent.ɵfac = function GridPanelSeriesComponent_Factory(t) { return new (t || GridPanelSeriesComponent)(); };
GridPanelSeriesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GridPanelSeriesComponent, selectors: [["g", "ngx-charts-grid-panel-series", ""]], inputs: { data: "data", dims: "dims", xScale: "xScale", yScale: "yScale", orient: "orient" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 1, consts: [["ngx-charts-grid-panel", "", 3, "height", "width", "x", "y", "grid-panel", "odd", "even", 4, "ngFor", "ngForOf"], ["ngx-charts-grid-panel", "", 3, "height", "width", "x", "y"]], template: function GridPanelSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, GridPanelSeriesComponent__svg_g_0_Template, 1, 10, "g", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.gridPanels);
    } }, directives: [i1.NgForOf, i2.GridPanelComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridPanelSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-grid-panel-series]',
                template: `
    <svg:g
      ngx-charts-grid-panel
      *ngFor="let gridPanel of gridPanels"
      [height]="gridPanel.height"
      [width]="gridPanel.width"
      [x]="gridPanel.x"
      [y]="gridPanel.y"
      [class.grid-panel]="true"
      [class.odd]="gridPanel.class === 'odd'"
      [class.even]="gridPanel.class === 'even'"
    ></svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { data: [{
            type: Input
        }], dims: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], orient: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1wYW5lbC1zZXJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2NvbW1vbi9ncmlkLXBhbmVsLXNlcmllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsS0FBSyxFQUFhLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0lBb0IxRCxtQkFVQztJQVZELHVCQVVTOzs7SUFIUCxrQ0FBeUIscUNBQUEsdUNBQUE7SUFKekIsNENBQTJCLDZCQUFBLHFCQUFBLHFCQUFBOztBQVhqQyxJQUFLLFNBR0o7QUFIRCxXQUFLLFNBQVM7SUFDWix3QkFBVyxDQUFBO0lBQ1gsMEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFISSxTQUFTLEtBQVQsU0FBUyxRQUdiO0FBbUJELE1BQU0sT0FBTyx3QkFBd0I7SUFhbkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2QixJQUFJLE1BQU0sQ0FBQztZQUNYLElBQUksS0FBSyxDQUFDO1lBQ1YsSUFBSSxNQUFNLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUU5QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssY0FBYyxDQUFDLFFBQVEsRUFBRTtnQkFDM0MsTUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUV0RixJQUFJLGFBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMzQixTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztpQkFDNUI7Z0JBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDOUQsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUN6QyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ1A7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGNBQWMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFdEYsSUFBSSxhQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDM0IsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7aUJBQzVCO2dCQUNELE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBRTlELEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUMxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1lBRUQsT0FBTztnQkFDTCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7Z0JBQ1osS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE1BQU07Z0JBQ04sS0FBSztnQkFDTCxDQUFDO2dCQUNELENBQUM7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnR0FsRVUsd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUFkakMsMkVBVVM7O1FBUmUsd0NBQWE7O3VGQVk1Qix3QkFBd0I7Y0FqQnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dCQUlVLElBQUk7a0JBQVosS0FBSztZQUVHLElBQUk7a0JBQVosS0FBSztZQUVHLE1BQU07a0JBQWQsS0FBSztZQUVHLE1BQU07a0JBQWQsS0FBSztZQUVHLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgU2ltcGxlQ2hhbmdlcywgSW5wdXQsIE9uQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhck9yaWVudGF0aW9uIH0gZnJvbSAnLi90eXBlcy9iYXItb3JpZW50YXRpb24uZW51bSc7XG5pbXBvcnQgeyBWaWV3RGltZW5zaW9ucyB9IGZyb20gJy4vdHlwZXMvdmlldy1kaW1lbnNpb24uaW50ZXJmYWNlJztcblxuaW50ZXJmYWNlIEdyaWRQYW5lbCB7XG4gIGNsYXNzOiBDbGFzc0VudW07XG4gIGhlaWdodDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5lbnVtIENsYXNzRW51bSB7XG4gIE9kZCA9ICdvZGQnLFxuICBFdmVuID0gJ2V2ZW4nXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbbmd4LWNoYXJ0cy1ncmlkLXBhbmVsLXNlcmllc10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6Z1xuICAgICAgbmd4LWNoYXJ0cy1ncmlkLXBhbmVsXG4gICAgICAqbmdGb3I9XCJsZXQgZ3JpZFBhbmVsIG9mIGdyaWRQYW5lbHNcIlxuICAgICAgW2hlaWdodF09XCJncmlkUGFuZWwuaGVpZ2h0XCJcbiAgICAgIFt3aWR0aF09XCJncmlkUGFuZWwud2lkdGhcIlxuICAgICAgW3hdPVwiZ3JpZFBhbmVsLnhcIlxuICAgICAgW3ldPVwiZ3JpZFBhbmVsLnlcIlxuICAgICAgW2NsYXNzLmdyaWQtcGFuZWxdPVwidHJ1ZVwiXG4gICAgICBbY2xhc3Mub2RkXT1cImdyaWRQYW5lbC5jbGFzcyA9PT0gJ29kZCdcIlxuICAgICAgW2NsYXNzLmV2ZW5dPVwiZ3JpZFBhbmVsLmNsYXNzID09PSAnZXZlbidcIlxuICAgID48L3N2ZzpnPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkUGFuZWxTZXJpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBncmlkUGFuZWxzOiBHcmlkUGFuZWxbXTtcblxuICBASW5wdXQoKSBkYXRhOiBhbnlbXTtcblxuICBASW5wdXQoKSBkaW1zOiBWaWV3RGltZW5zaW9ucztcblxuICBASW5wdXQoKSB4U2NhbGU6IGFueTtcblxuICBASW5wdXQoKSB5U2NhbGU6IGFueTtcblxuICBASW5wdXQoKSBvcmllbnQ6IEJhck9yaWVudGF0aW9uO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZFBhbmVscyA9IHRoaXMuZ2V0R3JpZFBhbmVscygpO1xuICB9XG5cbiAgZ2V0R3JpZFBhbmVscygpOiBHcmlkUGFuZWxbXSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoZCA9PiB7XG4gICAgICBsZXQgb2Zmc2V0O1xuICAgICAgbGV0IHdpZHRoO1xuICAgICAgbGV0IGhlaWdodDtcbiAgICAgIGxldCB4O1xuICAgICAgbGV0IHk7XG4gICAgICBsZXQgY2xhc3NOYW1lID0gQ2xhc3NFbnVtLk9kZDtcblxuICAgICAgaWYgKHRoaXMub3JpZW50ID09PSBCYXJPcmllbnRhdGlvbi5WZXJ0aWNhbCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy54U2NhbGUoZC5uYW1lKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25JbmRleCA9IE51bWJlci5wYXJzZUludCgocG9zaXRpb24gLyB0aGlzLnhTY2FsZS5zdGVwKCkpLnRvU3RyaW5nKCksIDEwKTtcblxuICAgICAgICBpZiAocG9zaXRpb25JbmRleCAlIDIgPT09IDEpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBDbGFzc0VudW0uRXZlbjtcbiAgICAgICAgfVxuICAgICAgICBvZmZzZXQgPSB0aGlzLnhTY2FsZS5iYW5kd2lkdGgoKSAqIHRoaXMueFNjYWxlLnBhZGRpbmdJbm5lcigpO1xuICAgICAgICB3aWR0aCA9IHRoaXMueFNjYWxlLmJhbmR3aWR0aCgpICsgb2Zmc2V0O1xuICAgICAgICBoZWlnaHQgPSB0aGlzLmRpbXMuaGVpZ2h0O1xuICAgICAgICB4ID0gdGhpcy54U2NhbGUoZC5uYW1lKSAtIG9mZnNldCAvIDI7XG4gICAgICAgIHkgPSAwO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudCA9PT0gQmFyT3JpZW50YXRpb24uSG9yaXpvbnRhbCkge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMueVNjYWxlKGQubmFtZSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uSW5kZXggPSBOdW1iZXIucGFyc2VJbnQoKHBvc2l0aW9uIC8gdGhpcy55U2NhbGUuc3RlcCgpKS50b1N0cmluZygpLCAxMCk7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uSW5kZXggJSAyID09PSAxKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gQ2xhc3NFbnVtLkV2ZW47XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ID0gdGhpcy55U2NhbGUuYmFuZHdpZHRoKCkgKiB0aGlzLnlTY2FsZS5wYWRkaW5nSW5uZXIoKTtcblxuICAgICAgICB3aWR0aCA9IHRoaXMuZGltcy53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy55U2NhbGUuYmFuZHdpZHRoKCkgKyBvZmZzZXQ7XG4gICAgICAgIHggPSAwO1xuICAgICAgICB5ID0gdGhpcy55U2NhbGUoZC5uYW1lKSAtIG9mZnNldCAvIDI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGQubmFtZSxcbiAgICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuIl19