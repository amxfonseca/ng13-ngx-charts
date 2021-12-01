import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { area } from 'd3-shape';
import { ScaleType } from '../common/types/scale-type.enum';
import { sortLinear, sortByTime, sortByDomain } from '../utils/sort';
import * as i0 from "@angular/core";
import * as i1 from "../common/area.component";
const _c0 = ["ngx-charts-area-series", ""];
export class AreaSeriesComponent {
    constructor() {
        this.baseValue = 'auto';
        this.stacked = false;
        this.normalized = false;
        this.animations = true;
        this.select = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.updateGradient();
        let currentArea;
        let startingArea;
        const xProperty = d => {
            const label = d.name;
            return this.xScale(label);
        };
        if (this.stacked || this.normalized) {
            currentArea = area()
                .x(xProperty)
                .y0((d, i) => this.yScale(d.d0))
                .y1((d, i) => this.yScale(d.d1));
            startingArea = area()
                .x(xProperty)
                .y0(d => this.yScale.range()[0])
                .y1(d => this.yScale.range()[0]);
        }
        else {
            currentArea = area()
                .x(xProperty)
                .y0(() => (this.baseValue === 'auto' ? this.yScale.range()[0] : this.yScale(this.baseValue)))
                .y1(d => this.yScale(d.value));
            startingArea = area()
                .x(xProperty)
                .y0(d => (this.baseValue === 'auto' ? this.yScale.range()[0] : this.yScale(this.baseValue)))
                .y1(d => (this.baseValue === 'auto' ? this.yScale.range()[0] : this.yScale(this.baseValue)));
        }
        currentArea.curve(this.curve);
        startingArea.curve(this.curve);
        this.opacity = 0.8;
        let data = this.data.series;
        if (this.scaleType === ScaleType.Linear) {
            data = sortLinear(data, 'name');
        }
        else if (this.scaleType === ScaleType.Time) {
            data = sortByTime(data, 'name');
        }
        else {
            data = sortByDomain(data, 'name', 'asc', this.xScale.domain());
        }
        this.path = currentArea(data);
        this.startingPath = startingArea(data);
    }
    updateGradient() {
        if (this.colors.scaleType === ScaleType.Linear) {
            this.hasGradient = true;
            if (this.stacked || this.normalized) {
                const d0values = this.data.series.map(d => d.d0);
                const d1values = this.data.series.map(d => d.d1);
                const max = Math.max(...d1values);
                const min = Math.min(...d0values);
                this.gradientStops = this.colors.getLinearGradientStops(max, min);
            }
            else {
                const values = this.data.series.map(d => d.value);
                const max = Math.max(...values);
                this.gradientStops = this.colors.getLinearGradientStops(max);
            }
        }
        else {
            this.hasGradient = false;
            this.gradientStops = undefined;
        }
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item !== undefined;
    }
    isInactive(entry) {
        if (!this.activeEntries || this.activeEntries.length === 0)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name;
        });
        return item === undefined;
    }
}
AreaSeriesComponent.ɵfac = function AreaSeriesComponent_Factory(t) { return new (t || AreaSeriesComponent)(); };
AreaSeriesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AreaSeriesComponent, selectors: [["g", "ngx-charts-area-series", ""]], inputs: { data: "data", xScale: "xScale", yScale: "yScale", baseValue: "baseValue", colors: "colors", scaleType: "scaleType", stacked: "stacked", normalized: "normalized", gradient: "gradient", curve: "curve", activeEntries: "activeEntries", animations: "animations" }, outputs: { select: "select" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 12, consts: [["ngx-charts-area", "", 1, "area-series", 3, "data", "path", "fill", "stops", "startingPath", "opacity", "gradient", "animations"]], template: function AreaSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "g", 0);
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.isActive(ctx.data))("inactive", ctx.isInactive(ctx.data));
        i0.ɵɵproperty("data", ctx.data)("path", ctx.path)("fill", ctx.colors.getColor(ctx.data.name))("stops", ctx.gradientStops)("startingPath", ctx.startingPath)("opacity", ctx.opacity)("gradient", ctx.gradient || ctx.hasGradient)("animations", ctx.animations);
    } }, directives: [i1.AreaComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AreaSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-area-series]',
                template: `
    <svg:g
      ngx-charts-area
      class="area-series"
      [data]="data"
      [path]="path"
      [fill]="colors.getColor(data.name)"
      [stops]="gradientStops"
      [startingPath]="startingPath"
      [opacity]="opacity"
      [gradient]="gradient || hasGradient"
      [animations]="animations"
      [class.active]="isActive(data)"
      [class.inactive]="isInactive(data)"
    />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { data: [{
            type: Input
        }], xScale: [{
            type: Input
        }], yScale: [{
            type: Input
        }], baseValue: [{
            type: Input
        }], colors: [{
            type: Input
        }], scaleType: [{
            type: Input
        }], stacked: [{
            type: Input
        }], normalized: [{
            type: Input
        }], gradient: [{
            type: Input
        }], curve: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS1zZXJpZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2FyZWEtY2hhcnQvYXJlYS1zZXJpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR1osdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHaEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTVELE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQXNCckUsTUFBTSxPQUFPLG1CQUFtQjtJQXBCaEM7UUF3QlcsY0FBUyxHQUFRLE1BQU0sQ0FBQztRQUd4QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFJNUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUUxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQW1HdkM7SUExRkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLFdBQVcsQ0FBQztRQUNoQixJQUFJLFlBQVksQ0FBQztRQUVqQixNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNwQixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUM7UUFFRixJQUFJLElBQUks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Ozs7Ozs7R0FlVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFFVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFFSSxNQUFNO2tCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFyZWEgfSBmcm9tICdkMy1zaGFwZSc7XG5pbXBvcnQgeyBDb2xvckhlbHBlciB9IGZyb20gJy4uL2NvbW1vbi9jb2xvci5oZWxwZXInO1xuaW1wb3J0IHsgR3JhZGllbnQgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvZ3JhZGllbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNjYWxlVHlwZSB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy9zY2FsZS10eXBlLmVudW0nO1xuaW1wb3J0IHsgQXJlYUNoYXJ0U2VyaWVzIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXJ0LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgc29ydExpbmVhciwgc29ydEJ5VGltZSwgc29ydEJ5RG9tYWluIH0gZnJvbSAnLi4vdXRpbHMvc29ydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbbmd4LWNoYXJ0cy1hcmVhLXNlcmllc10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6Z1xuICAgICAgbmd4LWNoYXJ0cy1hcmVhXG4gICAgICBjbGFzcz1cImFyZWEtc2VyaWVzXCJcbiAgICAgIFtkYXRhXT1cImRhdGFcIlxuICAgICAgW3BhdGhdPVwicGF0aFwiXG4gICAgICBbZmlsbF09XCJjb2xvcnMuZ2V0Q29sb3IoZGF0YS5uYW1lKVwiXG4gICAgICBbc3RvcHNdPVwiZ3JhZGllbnRTdG9wc1wiXG4gICAgICBbc3RhcnRpbmdQYXRoXT1cInN0YXJ0aW5nUGF0aFwiXG4gICAgICBbb3BhY2l0eV09XCJvcGFjaXR5XCJcbiAgICAgIFtncmFkaWVudF09XCJncmFkaWVudCB8fCBoYXNHcmFkaWVudFwiXG4gICAgICBbYW5pbWF0aW9uc109XCJhbmltYXRpb25zXCJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaXNBY3RpdmUoZGF0YSlcIlxuICAgICAgW2NsYXNzLmluYWN0aXZlXT1cImlzSW5hY3RpdmUoZGF0YSlcIlxuICAgIC8+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFyZWFTZXJpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkYXRhOiBBcmVhQ2hhcnRTZXJpZXM7XG4gIEBJbnB1dCgpIHhTY2FsZTogYW55O1xuICBASW5wdXQoKSB5U2NhbGU6IGFueTtcbiAgQElucHV0KCkgYmFzZVZhbHVlOiBhbnkgPSAnYXV0byc7XG4gIEBJbnB1dCgpIGNvbG9yczogQ29sb3JIZWxwZXI7XG4gIEBJbnB1dCgpIHNjYWxlVHlwZTogU2NhbGVUeXBlO1xuICBASW5wdXQoKSBzdGFja2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vcm1hbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZ3JhZGllbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGN1cnZlOiBhbnk7XG4gIEBJbnB1dCgpIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICBASW5wdXQoKSBhbmltYXRpb25zOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgcGF0aDogc3RyaW5nO1xuICBzdGFydGluZ1BhdGg6IHN0cmluZztcblxuICBoYXNHcmFkaWVudDogYm9vbGVhbjtcbiAgZ3JhZGllbnRTdG9wczogR3JhZGllbnRbXTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUdyYWRpZW50KCk7XG5cbiAgICBsZXQgY3VycmVudEFyZWE7XG4gICAgbGV0IHN0YXJ0aW5nQXJlYTtcblxuICAgIGNvbnN0IHhQcm9wZXJ0eSA9IGQgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBkLm5hbWU7XG4gICAgICByZXR1cm4gdGhpcy54U2NhbGUobGFiZWwpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5zdGFja2VkIHx8IHRoaXMubm9ybWFsaXplZCkge1xuICAgICAgY3VycmVudEFyZWEgPSBhcmVhPGFueT4oKVxuICAgICAgICAueCh4UHJvcGVydHkpXG4gICAgICAgIC55MCgoZCwgaSkgPT4gdGhpcy55U2NhbGUoZC5kMCkpXG4gICAgICAgIC55MSgoZCwgaSkgPT4gdGhpcy55U2NhbGUoZC5kMSkpO1xuXG4gICAgICBzdGFydGluZ0FyZWEgPSBhcmVhPGFueT4oKVxuICAgICAgICAueCh4UHJvcGVydHkpXG4gICAgICAgIC55MChkID0+IHRoaXMueVNjYWxlLnJhbmdlKClbMF0pXG4gICAgICAgIC55MShkID0+IHRoaXMueVNjYWxlLnJhbmdlKClbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50QXJlYSA9IGFyZWE8YW55PigpXG4gICAgICAgIC54KHhQcm9wZXJ0eSlcbiAgICAgICAgLnkwKCgpID0+ICh0aGlzLmJhc2VWYWx1ZSA9PT0gJ2F1dG8nID8gdGhpcy55U2NhbGUucmFuZ2UoKVswXSA6IHRoaXMueVNjYWxlKHRoaXMuYmFzZVZhbHVlKSkpXG4gICAgICAgIC55MShkID0+IHRoaXMueVNjYWxlKGQudmFsdWUpKTtcblxuICAgICAgc3RhcnRpbmdBcmVhID0gYXJlYTxhbnk+KClcbiAgICAgICAgLngoeFByb3BlcnR5KVxuICAgICAgICAueTAoZCA9PiAodGhpcy5iYXNlVmFsdWUgPT09ICdhdXRvJyA/IHRoaXMueVNjYWxlLnJhbmdlKClbMF0gOiB0aGlzLnlTY2FsZSh0aGlzLmJhc2VWYWx1ZSkpKVxuICAgICAgICAueTEoZCA9PiAodGhpcy5iYXNlVmFsdWUgPT09ICdhdXRvJyA/IHRoaXMueVNjYWxlLnJhbmdlKClbMF0gOiB0aGlzLnlTY2FsZSh0aGlzLmJhc2VWYWx1ZSkpKTtcbiAgICB9XG5cbiAgICBjdXJyZW50QXJlYS5jdXJ2ZSh0aGlzLmN1cnZlKTtcbiAgICBzdGFydGluZ0FyZWEuY3VydmUodGhpcy5jdXJ2ZSk7XG5cbiAgICB0aGlzLm9wYWNpdHkgPSAwLjg7XG5cbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YS5zZXJpZXM7XG4gICAgaWYgKHRoaXMuc2NhbGVUeXBlID09PSBTY2FsZVR5cGUuTGluZWFyKSB7XG4gICAgICBkYXRhID0gc29ydExpbmVhcihkYXRhLCAnbmFtZScpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZVR5cGUgPT09IFNjYWxlVHlwZS5UaW1lKSB7XG4gICAgICBkYXRhID0gc29ydEJ5VGltZShkYXRhLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gc29ydEJ5RG9tYWluKGRhdGEsICduYW1lJywgJ2FzYycsIHRoaXMueFNjYWxlLmRvbWFpbigpKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhdGggPSBjdXJyZW50QXJlYShkYXRhKTtcbiAgICB0aGlzLnN0YXJ0aW5nUGF0aCA9IHN0YXJ0aW5nQXJlYShkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZUdyYWRpZW50KCkge1xuICAgIGlmICh0aGlzLmNvbG9ycy5zY2FsZVR5cGUgPT09IFNjYWxlVHlwZS5MaW5lYXIpIHtcbiAgICAgIHRoaXMuaGFzR3JhZGllbnQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuc3RhY2tlZCB8fCB0aGlzLm5vcm1hbGl6ZWQpIHtcbiAgICAgICAgY29uc3QgZDB2YWx1ZXMgPSB0aGlzLmRhdGEuc2VyaWVzLm1hcChkID0+IGQuZDApO1xuICAgICAgICBjb25zdCBkMXZhbHVlcyA9IHRoaXMuZGF0YS5zZXJpZXMubWFwKGQgPT4gZC5kMSk7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLmQxdmFsdWVzKTtcbiAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oLi4uZDB2YWx1ZXMpO1xuICAgICAgICB0aGlzLmdyYWRpZW50U3RvcHMgPSB0aGlzLmNvbG9ycy5nZXRMaW5lYXJHcmFkaWVudFN0b3BzKG1heCwgbWluKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZGF0YS5zZXJpZXMubWFwKGQgPT4gZC52YWx1ZSk7XG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnZhbHVlcyk7XG4gICAgICAgIHRoaXMuZ3JhZGllbnRTdG9wcyA9IHRoaXMuY29sb3JzLmdldExpbmVhckdyYWRpZW50U3RvcHMobWF4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYXNHcmFkaWVudCA9IGZhbHNlO1xuICAgICAgdGhpcy5ncmFkaWVudFN0b3BzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGlzQWN0aXZlKGVudHJ5KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUVudHJpZXMpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5hY3RpdmVFbnRyaWVzLmZpbmQoZCA9PiB7XG4gICAgICByZXR1cm4gZW50cnkubmFtZSA9PT0gZC5uYW1lO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBpc0luYWN0aXZlKGVudHJ5KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZUVudHJpZXMgfHwgdGhpcy5hY3RpdmVFbnRyaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmFjdGl2ZUVudHJpZXMuZmluZChkID0+IHtcbiAgICAgIHJldHVybiBlbnRyeS5uYW1lID09PSBkLm5hbWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW0gPT09IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19