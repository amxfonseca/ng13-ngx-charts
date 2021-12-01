import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { brushX } from 'd3-brush';
import { scaleLinear, scaleTime, scalePoint } from 'd3-scale';
import { select } from 'd3-selection';
import { id } from '../../utils/id';
import { ScaleType } from '../types/scale-type.enum';
import * as i0 from "@angular/core";
const _c0 = ["ngx-charts-timeline", ""];
const _c1 = ["*"];
export class Timeline {
    constructor(element, cd) {
        this.cd = cd;
        this.height = 50;
        this.select = new EventEmitter();
        this.onDomainChange = new EventEmitter();
        this.initialized = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        this.update();
        if (!this.initialized) {
            this.addBrush();
            this.initialized = true;
        }
    }
    update() {
        this.dims = this.getDims();
        this.height = this.dims.height;
        const offsetY = this.view[1] - this.height;
        this.xDomain = this.getXDomain();
        this.xScale = this.getXScale();
        if (this.brush) {
            this.updateBrush();
        }
        this.transform = `translate(0 , ${offsetY})`;
        this.filterId = 'filter' + id().toString();
        this.filter = `url(#${this.filterId})`;
        this.cd.markForCheck();
    }
    getXDomain() {
        let values = [];
        for (const results of this.results) {
            for (const d of results.series) {
                if (!values.includes(d.name)) {
                    values.push(d.name);
                }
            }
        }
        let domain = [];
        if (this.scaleType === ScaleType.Time) {
            const min = Math.min(...values);
            const max = Math.max(...values);
            domain = [min, max];
        }
        else if (this.scaleType === ScaleType.Linear) {
            values = values.map(v => Number(v));
            const min = Math.min(...values);
            const max = Math.max(...values);
            domain = [min, max];
        }
        else {
            domain = values;
        }
        return domain;
    }
    getXScale() {
        let scale;
        if (this.scaleType === ScaleType.Time) {
            scale = scaleTime().range([0, this.dims.width]).domain(this.xDomain);
        }
        else if (this.scaleType === ScaleType.Linear) {
            scale = scaleLinear().range([0, this.dims.width]).domain(this.xDomain);
        }
        else if (this.scaleType === ScaleType.Ordinal) {
            scale = scalePoint().range([0, this.dims.width]).padding(0.1).domain(this.xDomain);
        }
        return scale;
    }
    addBrush() {
        if (this.brush)
            return;
        const height = this.height;
        const width = this.view[0];
        this.brush = brushX()
            .extent([
            [0, 0],
            [width, height]
        ])
            .on('brush end', ({ selection }) => {
            const newSelection = selection || this.xScale.range();
            const newDomain = newSelection.map(this.xScale.invert);
            this.onDomainChange.emit(newDomain);
            this.cd.markForCheck();
        });
        select(this.element).select('.brush').call(this.brush);
    }
    updateBrush() {
        if (!this.brush)
            return;
        const height = this.height;
        const width = this.view[0];
        this.brush.extent([
            [0, 0],
            [width, height]
        ]);
        select(this.element).select('.brush').call(this.brush);
        // clear hardcoded properties so they can be defined by CSS
        select(this.element)
            .select('.selection')
            .attr('fill', undefined)
            .attr('stroke', undefined)
            .attr('fill-opacity', undefined);
        this.cd.markForCheck();
    }
    getDims() {
        const width = this.view[0];
        const dims = {
            width,
            height: this.height
        };
        return dims;
    }
}
Timeline.ɵfac = function Timeline_Factory(t) { return new (t || Timeline)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
Timeline.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Timeline, selectors: [["g", "ngx-charts-timeline", ""]], inputs: { view: "view", results: "results", scheme: "scheme", customColors: "customColors", legend: "legend", autoScale: "autoScale", scaleType: "scaleType", height: "height" }, outputs: { select: "select", onDomainChange: "onDomainChange" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c1, decls: 7, vars: 4, consts: [[1, "timeline"], ["in", "SourceGraphic", "type", "matrix", "values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"], [1, "embedded-chart"], ["x", "0", "y", "0", 1, "brush-background"], [1, "brush"]], template: function Timeline_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g", 0);
        i0.ɵɵelementStart(1, "filter");
        i0.ɵɵelement(2, "feColorMatrix", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "g", 2);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "rect", 3);
        i0.ɵɵelement(6, "g", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("transform", ctx.transform);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("id", ctx.filterId);
        i0.ɵɵadvance(4);
        i0.ɵɵattribute("width", ctx.view[0])("height", ctx.height);
    } }, styles: [".timeline .brush-background{fill:#0000000d}.timeline .brush .selection{fill:#0000001a;stroke-width:1px;stroke:#888}.timeline .brush .handle{fill-opacity:0}.timeline .embedded-chart{opacity:.6}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Timeline, [{
        type: Component,
        args: [{ selector: 'g[ngx-charts-timeline]', template: `
    <svg:g class="timeline" [attr.transform]="transform">
      <svg:filter [attr.id]="filterId">
        <svg:feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
        />
      </svg:filter>
      <svg:g class="embedded-chart">
        <ng-content></ng-content>
      </svg:g>
      <svg:rect x="0" [attr.width]="view[0]" y="0" [attr.height]="height" class="brush-background" />
      <svg:g class="brush"></svg:g>
    </svg:g>
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".timeline .brush-background{fill:#0000000d}.timeline .brush .selection{fill:#0000001a;stroke-width:1px;stroke:#888}.timeline .brush .handle{fill-opacity:0}.timeline .embedded-chart{opacity:.6}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { view: [{
            type: Input
        }], results: [{
            type: Input
        }], scheme: [{
            type: Input
        }], customColors: [{
            type: Input
        }], legend: [{
            type: Input
        }], autoScale: [{
            type: Input
        }], scaleType: [{
            type: Input
        }], height: [{
            type: Input
        }], select: [{
            type: Output
        }], onDomainChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2NvbW1vbi90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWix1QkFBdUIsRUFHdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdEMsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQXlCckQsTUFBTSxPQUFPLFFBQVE7SUF1Qm5CLFlBQVksT0FBbUIsRUFBVSxFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQWZyRCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBRW5CLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVE5QyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUszQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7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RUYsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnRUF2SlUsUUFBUTsyREFBUixRQUFROztRQW5CakIsbUJBQXFEO1FBQXJELDRCQUFxRDtRQUNuRCw4QkFBaUM7UUFDL0IsbUNBSUU7UUFDSixpQkFBYTtRQUNiLDRCQUE4QjtRQUM1QixrQkFBeUI7UUFDM0IsaUJBQVE7UUFDUiwwQkFBK0Y7UUFDL0YsdUJBQTZCO1FBQy9CLGlCQUFROztRQWJnQiwwQ0FBNEI7UUFDdEMsZUFBb0I7UUFBcEIsa0NBQW9CO1FBVWhCLGVBQXNCO1FBQXRCLG9DQUFzQixzQkFBQTs7dUZBUS9CLFFBQVE7Y0F0QnBCLFNBQVM7MkJBQ0Usd0JBQXdCLFlBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7R0FlVCxpQkFFYyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNOzZGQUd0QyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFFSSxNQUFNO2tCQUFmLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJydXNoWCB9IGZyb20gJ2QzLWJydXNoJztcbmltcG9ydCB7IHNjYWxlTGluZWFyLCBzY2FsZVRpbWUsIHNjYWxlUG9pbnQgfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgaWQgfSBmcm9tICcuLi8uLi91dGlscy9pZCc7XG5pbXBvcnQgeyBTY2FsZVR5cGUgfSBmcm9tICcuLi90eXBlcy9zY2FsZS10eXBlLmVudW0nO1xuaW1wb3J0IHsgVmlld0RpbWVuc2lvbnMgfSBmcm9tICcuLi90eXBlcy92aWV3LWRpbWVuc2lvbi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtdGltZWxpbmVdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnOmcgY2xhc3M9XCJ0aW1lbGluZVwiIFthdHRyLnRyYW5zZm9ybV09XCJ0cmFuc2Zvcm1cIj5cbiAgICAgIDxzdmc6ZmlsdGVyIFthdHRyLmlkXT1cImZpbHRlcklkXCI+XG4gICAgICAgIDxzdmc6ZmVDb2xvck1hdHJpeFxuICAgICAgICAgIGluPVwiU291cmNlR3JhcGhpY1wiXG4gICAgICAgICAgdHlwZT1cIm1hdHJpeFwiXG4gICAgICAgICAgdmFsdWVzPVwiMC4zMzMzIDAuMzMzMyAwLjMzMzMgMCAwIDAuMzMzMyAwLjMzMzMgMC4zMzMzIDAgMCAwLjMzMzMgMC4zMzMzIDAuMzMzMyAwIDAgMCAwIDAgMSAwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnOmZpbHRlcj5cbiAgICAgIDxzdmc6ZyBjbGFzcz1cImVtYmVkZGVkLWNoYXJ0XCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvc3ZnOmc+XG4gICAgICA8c3ZnOnJlY3QgeD1cIjBcIiBbYXR0ci53aWR0aF09XCJ2aWV3WzBdXCIgeT1cIjBcIiBbYXR0ci5oZWlnaHRdPVwiaGVpZ2h0XCIgY2xhc3M9XCJicnVzaC1iYWNrZ3JvdW5kXCIgLz5cbiAgICAgIDxzdmc6ZyBjbGFzcz1cImJydXNoXCI+PC9zdmc6Zz5cbiAgICA8L3N2ZzpnPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi90aW1lbGluZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHZpZXc6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpIHJlc3VsdHM7IC8vIHR5cGUgdGhpc1xuICBASW5wdXQoKSBzY2hlbWU7IC8vIHR5cGUgdGhpc1xuICBASW5wdXQoKSBjdXN0b21Db2xvcnM7IC8vIHR5cGUgdGhpc1xuICBASW5wdXQoKSBsZWdlbmQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGF1dG9TY2FsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc2NhbGVUeXBlOiBTY2FsZVR5cGU7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gNTA7XG5cbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRG9tYWluQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBkaW1zOiBWaWV3RGltZW5zaW9ucztcbiAgeERvbWFpbjogYW55W107XG4gIHhTY2FsZTogYW55O1xuICBicnVzaDogYW55O1xuICB0cmFuc2Zvcm06IHN0cmluZztcbiAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZmlsdGVySWQ6IHN0cmluZztcbiAgZmlsdGVyOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5hZGRCcnVzaCgpO1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuZGltcyA9IHRoaXMuZ2V0RGltcygpO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kaW1zLmhlaWdodDtcbiAgICBjb25zdCBvZmZzZXRZID0gdGhpcy52aWV3WzFdIC0gdGhpcy5oZWlnaHQ7XG5cbiAgICB0aGlzLnhEb21haW4gPSB0aGlzLmdldFhEb21haW4oKTtcbiAgICB0aGlzLnhTY2FsZSA9IHRoaXMuZ2V0WFNjYWxlKCk7XG5cbiAgICBpZiAodGhpcy5icnVzaCkge1xuICAgICAgdGhpcy51cGRhdGVCcnVzaCgpO1xuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwICwgJHtvZmZzZXRZfSlgO1xuXG4gICAgdGhpcy5maWx0ZXJJZCA9ICdmaWx0ZXInICsgaWQoKS50b1N0cmluZygpO1xuICAgIHRoaXMuZmlsdGVyID0gYHVybCgjJHt0aGlzLmZpbHRlcklkfSlgO1xuXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldFhEb21haW4oKTogYW55W10ge1xuICAgIGxldCB2YWx1ZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgcmVzdWx0cyBvZiB0aGlzLnJlc3VsdHMpIHtcbiAgICAgIGZvciAoY29uc3QgZCBvZiByZXN1bHRzLnNlcmllcykge1xuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyhkLm5hbWUpKSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2goZC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBkb21haW4gPSBbXTtcbiAgICBpZiAodGhpcy5zY2FsZVR5cGUgPT09IFNjYWxlVHlwZS5UaW1lKSB7XG4gICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi52YWx1ZXMpO1xuICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4udmFsdWVzKTtcbiAgICAgIGRvbWFpbiA9IFttaW4sIG1heF07XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLkxpbmVhcikge1xuICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcCh2ID0+IE51bWJlcih2KSk7XG4gICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi52YWx1ZXMpO1xuICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4udmFsdWVzKTtcbiAgICAgIGRvbWFpbiA9IFttaW4sIG1heF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbWFpbiA9IHZhbHVlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tYWluO1xuICB9XG5cbiAgZ2V0WFNjYWxlKCkge1xuICAgIGxldCBzY2FsZTtcblxuICAgIGlmICh0aGlzLnNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLlRpbWUpIHtcbiAgICAgIHNjYWxlID0gc2NhbGVUaW1lKCkucmFuZ2UoWzAsIHRoaXMuZGltcy53aWR0aF0pLmRvbWFpbih0aGlzLnhEb21haW4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZVR5cGUgPT09IFNjYWxlVHlwZS5MaW5lYXIpIHtcbiAgICAgIHNjYWxlID0gc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgdGhpcy5kaW1zLndpZHRoXSkuZG9tYWluKHRoaXMueERvbWFpbik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLk9yZGluYWwpIHtcbiAgICAgIHNjYWxlID0gc2NhbGVQb2ludCgpLnJhbmdlKFswLCB0aGlzLmRpbXMud2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKHRoaXMueERvbWFpbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgYWRkQnJ1c2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYnJ1c2gpIHJldHVybjtcblxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdO1xuXG4gICAgdGhpcy5icnVzaCA9IGJydXNoWCgpXG4gICAgICAuZXh0ZW50KFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbd2lkdGgsIGhlaWdodF1cbiAgICAgIF0pXG4gICAgICAub24oJ2JydXNoIGVuZCcsICh7IHNlbGVjdGlvbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGlvbiB8fCB0aGlzLnhTY2FsZS5yYW5nZSgpO1xuICAgICAgICBjb25zdCBuZXdEb21haW4gPSBuZXdTZWxlY3Rpb24ubWFwKHRoaXMueFNjYWxlLmludmVydCk7XG5cbiAgICAgICAgdGhpcy5vbkRvbWFpbkNoYW5nZS5lbWl0KG5ld0RvbWFpbik7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcblxuICAgIHNlbGVjdCh0aGlzLmVsZW1lbnQpLnNlbGVjdCgnLmJydXNoJykuY2FsbCh0aGlzLmJydXNoKTtcbiAgfVxuXG4gIHVwZGF0ZUJydXNoKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5icnVzaCkgcmV0dXJuO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnZpZXdbMF07XG5cbiAgICB0aGlzLmJydXNoLmV4dGVudChbXG4gICAgICBbMCwgMF0sXG4gICAgICBbd2lkdGgsIGhlaWdodF1cbiAgICBdKTtcbiAgICBzZWxlY3QodGhpcy5lbGVtZW50KS5zZWxlY3QoJy5icnVzaCcpLmNhbGwodGhpcy5icnVzaCk7XG5cbiAgICAvLyBjbGVhciBoYXJkY29kZWQgcHJvcGVydGllcyBzbyB0aGV5IGNhbiBiZSBkZWZpbmVkIGJ5IENTU1xuICAgIHNlbGVjdCh0aGlzLmVsZW1lbnQpXG4gICAgICAuc2VsZWN0KCcuc2VsZWN0aW9uJylcbiAgICAgIC5hdHRyKCdmaWxsJywgdW5kZWZpbmVkKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIHVuZGVmaW5lZClcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCB1bmRlZmluZWQpO1xuXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldERpbXMoKTogVmlld0RpbWVuc2lvbnMge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3WzBdO1xuXG4gICAgY29uc3QgZGltcyA9IHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodFxuICAgIH07XG5cbiAgICByZXR1cm4gZGltcztcbiAgfVxufVxuIl19