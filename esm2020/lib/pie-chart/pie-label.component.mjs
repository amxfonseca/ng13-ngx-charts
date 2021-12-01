import { isPlatformServer } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy, PLATFORM_ID, Inject } from '@angular/core';
import { arc } from 'd3-shape';
import { trimLabel } from '../common/trim-label.helper';
import { TextAnchor } from '../common/types/text-anchor.enum';
import * as i0 from "@angular/core";
const _c0 = ["ngx-charts-pie-label", ""];
export class PieLabelComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.animations = true;
        this.labelTrim = true;
        this.labelTrimSize = 10;
        this.trimLabel = trimLabel;
    }
    ngOnChanges(changes) {
        this.setTransforms();
        this.update();
    }
    setTransforms() {
        if (isPlatformServer(this.platformId)) {
            this.styleTransform = `translate3d(${this.textX}px,${this.textY}px, 0)`;
            this.attrTransform = `translate(${this.textX},${this.textY})`;
            this.textTransition = !this.animations ? null : 'transform 0.75s';
        }
        else {
            const isIE = /(edge|msie|trident)/i.test(navigator.userAgent);
            this.styleTransform = isIE ? null : `translate3d(${this.textX}px,${this.textY}px, 0)`;
            this.attrTransform = !isIE ? null : `translate(${this.textX},${this.textY})`;
            this.textTransition = isIE || !this.animations ? null : 'transform 0.75s';
        }
    }
    update() {
        let startRadius = this.radius;
        if (this.explodeSlices) {
            startRadius = (this.radius * this.value) / this.max;
        }
        const innerArc = arc().innerRadius(startRadius).outerRadius(startRadius);
        // Calculate innerPos then scale outer position to match label position
        const innerPos = innerArc.centroid(this.data);
        let scale = this.data.pos[1] / innerPos[1];
        if (this.data.pos[1] === 0 || innerPos[1] === 0) {
            scale = 1;
        }
        const outerPos = [scale * innerPos[0], scale * innerPos[1]];
        this.line = `M${innerPos}L${outerPos}L${this.data.pos}`;
    }
    get textX() {
        return this.data.pos[0];
    }
    get textY() {
        return this.data.pos[1];
    }
    textAnchor() {
        return this.midAngle(this.data) < Math.PI ? TextAnchor.Start : TextAnchor.End;
    }
    midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
}
PieLabelComponent.ɵfac = function PieLabelComponent_Factory(t) { return new (t || PieLabelComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID)); };
PieLabelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PieLabelComponent, selectors: [["g", "ngx-charts-pie-label", ""]], inputs: { data: "data", radius: "radius", label: "label", color: "color", max: "max", value: "value", explodeSlices: "explodeSlices", animations: "animations", labelTrim: "labelTrim", labelTrimSize: "labelTrimSize" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 6, vars: 17, consts: [["dy", ".35em", 1, "pie-label"], ["fill", "none", 1, "pie-label-line", "line"]], template: function PieLabelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "title");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(2, "g");
        i0.ɵɵelementStart(3, "text", 0);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "path", 1);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("transform", ctx.styleTransform)("transition", ctx.textTransition);
        i0.ɵɵattribute("transform", ctx.attrTransform);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("text-anchor", ctx.textAnchor())("shape-rendering", "crispEdges");
        i0.ɵɵclassProp("animation", ctx.animations);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.labelTrim ? ctx.trimLabel(ctx.label, ctx.labelTrimSize) : ctx.label, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("animation", ctx.animations);
        i0.ɵɵattribute("d", ctx.line)("stroke", ctx.color);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PieLabelComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-pie-label]',
                template: `
    <title>{{ label }}</title>
    <svg:g [attr.transform]="attrTransform" [style.transform]="styleTransform" [style.transition]="textTransition">
      <svg:text
        class="pie-label"
        [class.animation]="animations"
        dy=".35em"
        [style.textAnchor]="textAnchor()"
        [style.shapeRendering]="'crispEdges'"
      >
        {{ labelTrim ? trimLabel(label, labelTrimSize) : label }}
      </svg:text>
    </svg:g>
    <svg:path
      [attr.d]="line"
      [attr.stroke]="color"
      fill="none"
      class="pie-label-line line"
      [class.animation]="animations"
    ></svg:path>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { data: [{
            type: Input
        }], radius: [{
            type: Input
        }], label: [{
            type: Input
        }], color: [{
            type: Input
        }], max: [{
            type: Input
        }], value: [{
            type: Input
        }], explodeSlices: [{
            type: Input
        }], animations: [{
            type: Input
        }], labelTrim: [{
            type: Input
        }], labelTrimSize: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9waWUtY2hhcnQvcGllLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCx1QkFBdUIsRUFDdkIsV0FBVyxFQUNYLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFvQixNQUFNLFVBQVUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7QUFtQzlELE1BQU0sT0FBTyxpQkFBaUI7SUFrQjVCLFlBQXdDLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBVjlDLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQVNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLGVBQWUsSUFBSSxDQUFDLEtBQUssTUFBTSxJQUFJLENBQUMsS0FBSyxRQUFRLENBQUM7WUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLElBQUks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QUFpQjtRQXRCMUIsNkJBQU87UUFBQSxZQUFXO1FBQUEsaUJBQVE7UUFDMUIsbUJBQStHO1FBQS9HLHlCQUErRztRQUM3RywrQkFNQztRQUNDLFlBQ0Y7UUFBQSxpQkFBVztRQUNiLGlCQUFRO1FBQ1IsMEJBTVk7O1FBbEJMLGVBQVc7UUFBWCwrQkFBVztRQUNzQixlQUFrQztRQUFsQywrQ0FBa0Msa0NBQUE7UUFBbkUsOENBQWdDO1FBS25DLGVBQWlDO1FBQWpDLCtDQUFpQyxpQ0FBQTtRQUZqQywyQ0FBOEI7UUFLOUIsZUFDRjtRQURFLHdHQUNGO1FBT0EsZUFBOEI7UUFBOUIsMkNBQThCO1FBSjlCLDZCQUFlLHFCQUFBOzt1RkFTUixpQkFBaUI7Y0F6QjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztzQkFtQmMsTUFBTTt1QkFBQyxXQUFXO3dCQWpCdEIsSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgUExBVEZPUk1fSUQsXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFyYywgRGVmYXVsdEFyY09iamVjdCB9IGZyb20gJ2QzLXNoYXBlJztcblxuaW1wb3J0IHsgdHJpbUxhYmVsIH0gZnJvbSAnLi4vY29tbW9uL3RyaW0tbGFiZWwuaGVscGVyJztcbmltcG9ydCB7IFRleHRBbmNob3IgfSBmcm9tICcuLi9jb21tb24vdHlwZXMvdGV4dC1hbmNob3IuZW51bSc7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gJy4uL21vZGVscy9jaGFydC1kYXRhLm1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBQaWVEYXRhIGV4dGVuZHMgRGVmYXVsdEFyY09iamVjdCB7XG4gIGRhdGE6IERhdGFJdGVtO1xuICBpbmRleDogbnVtYmVyO1xuICBwb3M6IFtudW1iZXIsIG51bWJlcl07XG4gIHZhbHVlOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbbmd4LWNoYXJ0cy1waWUtbGFiZWxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGl0bGU+e3sgbGFiZWwgfX08L3RpdGxlPlxuICAgIDxzdmc6ZyBbYXR0ci50cmFuc2Zvcm1dPVwiYXR0clRyYW5zZm9ybVwiIFtzdHlsZS50cmFuc2Zvcm1dPVwic3R5bGVUcmFuc2Zvcm1cIiBbc3R5bGUudHJhbnNpdGlvbl09XCJ0ZXh0VHJhbnNpdGlvblwiPlxuICAgICAgPHN2Zzp0ZXh0XG4gICAgICAgIGNsYXNzPVwicGllLWxhYmVsXCJcbiAgICAgICAgW2NsYXNzLmFuaW1hdGlvbl09XCJhbmltYXRpb25zXCJcbiAgICAgICAgZHk9XCIuMzVlbVwiXG4gICAgICAgIFtzdHlsZS50ZXh0QW5jaG9yXT1cInRleHRBbmNob3IoKVwiXG4gICAgICAgIFtzdHlsZS5zaGFwZVJlbmRlcmluZ109XCInY3Jpc3BFZGdlcydcIlxuICAgICAgPlxuICAgICAgICB7eyBsYWJlbFRyaW0gPyB0cmltTGFiZWwobGFiZWwsIGxhYmVsVHJpbVNpemUpIDogbGFiZWwgfX1cbiAgICAgIDwvc3ZnOnRleHQ+XG4gICAgPC9zdmc6Zz5cbiAgICA8c3ZnOnBhdGhcbiAgICAgIFthdHRyLmRdPVwibGluZVwiXG4gICAgICBbYXR0ci5zdHJva2VdPVwiY29sb3JcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgY2xhc3M9XCJwaWUtbGFiZWwtbGluZSBsaW5lXCJcbiAgICAgIFtjbGFzcy5hbmltYXRpb25dPVwiYW5pbWF0aW9uc1wiXG4gICAgPjwvc3ZnOnBhdGg+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBpZUxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGF0YTogUGllRGF0YTtcbiAgQElucHV0KCkgcmFkaXVzOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xuICBASW5wdXQoKSBleHBsb2RlU2xpY2VzOiBib29sZWFuO1xuICBASW5wdXQoKSBhbmltYXRpb25zOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbGFiZWxUcmltOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbGFiZWxUcmltU2l6ZTogbnVtYmVyID0gMTA7XG5cbiAgdHJpbUxhYmVsOiAobGFiZWw6IHN0cmluZywgbWF4PzogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIGxpbmU6IHN0cmluZztcbiAgc3R5bGVUcmFuc2Zvcm06IHN0cmluZztcbiAgYXR0clRyYW5zZm9ybTogc3RyaW5nO1xuICB0ZXh0VHJhbnNpdGlvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHB1YmxpYyBwbGF0Zm9ybUlkOiBhbnkpIHtcbiAgICB0aGlzLnRyaW1MYWJlbCA9IHRyaW1MYWJlbDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRyYW5zZm9ybXMoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2V0VHJhbnNmb3JtcygpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnN0eWxlVHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy50ZXh0WH1weCwke3RoaXMudGV4dFl9cHgsIDApYDtcbiAgICAgIHRoaXMuYXR0clRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLnRleHRYfSwke3RoaXMudGV4dFl9KWA7XG4gICAgICB0aGlzLnRleHRUcmFuc2l0aW9uID0gIXRoaXMuYW5pbWF0aW9ucyA/IG51bGwgOiAndHJhbnNmb3JtIDAuNzVzJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXNJRSA9IC8oZWRnZXxtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHRoaXMuc3R5bGVUcmFuc2Zvcm0gPSBpc0lFID8gbnVsbCA6IGB0cmFuc2xhdGUzZCgke3RoaXMudGV4dFh9cHgsJHt0aGlzLnRleHRZfXB4LCAwKWA7XG4gICAgICB0aGlzLmF0dHJUcmFuc2Zvcm0gPSAhaXNJRSA/IG51bGwgOiBgdHJhbnNsYXRlKCR7dGhpcy50ZXh0WH0sJHt0aGlzLnRleHRZfSlgO1xuICAgICAgdGhpcy50ZXh0VHJhbnNpdGlvbiA9IGlzSUUgfHwgIXRoaXMuYW5pbWF0aW9ucyA/IG51bGwgOiAndHJhbnNmb3JtIDAuNzVzJztcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgbGV0IHN0YXJ0UmFkaXVzID0gdGhpcy5yYWRpdXM7XG4gICAgaWYgKHRoaXMuZXhwbG9kZVNsaWNlcykge1xuICAgICAgc3RhcnRSYWRpdXMgPSAodGhpcy5yYWRpdXMgKiB0aGlzLnZhbHVlKSAvIHRoaXMubWF4O1xuICAgIH1cblxuICAgIGNvbnN0IGlubmVyQXJjID0gYXJjKCkuaW5uZXJSYWRpdXMoc3RhcnRSYWRpdXMpLm91dGVyUmFkaXVzKHN0YXJ0UmFkaXVzKTtcblxuICAgIC8vIENhbGN1bGF0ZSBpbm5lclBvcyB0aGVuIHNjYWxlIG91dGVyIHBvc2l0aW9uIHRvIG1hdGNoIGxhYmVsIHBvc2l0aW9uXG4gICAgY29uc3QgaW5uZXJQb3MgPSBpbm5lckFyYy5jZW50cm9pZCh0aGlzLmRhdGEpO1xuXG4gICAgbGV0IHNjYWxlID0gdGhpcy5kYXRhLnBvc1sxXSAvIGlubmVyUG9zWzFdO1xuICAgIGlmICh0aGlzLmRhdGEucG9zWzFdID09PSAwIHx8IGlubmVyUG9zWzFdID09PSAwKSB7XG4gICAgICBzY2FsZSA9IDE7XG4gICAgfVxuICAgIGNvbnN0IG91dGVyUG9zID0gW3NjYWxlICogaW5uZXJQb3NbMF0sIHNjYWxlICogaW5uZXJQb3NbMV1dO1xuXG4gICAgdGhpcy5saW5lID0gYE0ke2lubmVyUG9zfUwke291dGVyUG9zfUwke3RoaXMuZGF0YS5wb3N9YDtcbiAgfVxuXG4gIGdldCB0ZXh0WCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRhdGEucG9zWzBdO1xuICB9XG5cbiAgZ2V0IHRleHRZKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5wb3NbMV07XG4gIH1cblxuICB0ZXh0QW5jaG9yKCk6IFRleHRBbmNob3Ige1xuICAgIHJldHVybiB0aGlzLm1pZEFuZ2xlKHRoaXMuZGF0YSkgPCBNYXRoLlBJID8gVGV4dEFuY2hvci5TdGFydCA6IFRleHRBbmNob3IuRW5kO1xuICB9XG5cbiAgbWlkQW5nbGUoZCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGQuc3RhcnRBbmdsZSArIChkLmVuZEFuZ2xlIC0gZC5zdGFydEFuZ2xlKSAvIDI7XG4gIH1cbn1cbiJdfQ==