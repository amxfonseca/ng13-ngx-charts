import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { line } from 'd3-shape';
import { TextAnchor } from '../common/types/text-anchor.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["ngx-charts-gauge-axis", ""];
function GaugeAxisComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 2);
    i0.ɵɵelement(1, "path");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("d", tick_r3.line);
} }
function GaugeAxisComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 2);
    i0.ɵɵelementStart(1, "text", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("text-anchor", tick_r4.textAnchor);
    i0.ɵɵattribute("transform", tick_r4.textTransform);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tick_r4.text, " ");
} }
function GaugeAxisComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 4);
    i0.ɵɵelement(1, "path");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("d", tick_r5.line);
} }
export class GaugeAxisComponent {
    constructor() {
        this.rotate = '';
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.rotationAngle = -90 + this.startAngle;
        this.rotate = `rotate(${this.rotationAngle})`;
        this.ticks = this.getTicks();
    }
    getTicks() {
        const bigTickSegment = this.angleSpan / this.bigSegments;
        const smallTickSegment = bigTickSegment / this.smallSegments;
        const tickLength = 20;
        const ticks = {
            big: [],
            small: []
        };
        const startDistance = this.radius + 10;
        const textDist = startDistance + tickLength + 10;
        for (let i = 0; i <= this.bigSegments; i++) {
            const angleDeg = i * bigTickSegment;
            const angle = (angleDeg * Math.PI) / 180;
            const textAnchor = this.getTextAnchor(angleDeg);
            let skip = false;
            if (i === 0 && this.angleSpan === 360) {
                skip = true;
            }
            if (!skip) {
                let text = Number.parseFloat(this.valueScale.invert(angleDeg).toString()).toLocaleString();
                if (this.tickFormatting) {
                    text = this.tickFormatting(text);
                }
                ticks.big.push({
                    line: this.getTickPath(startDistance, tickLength, angle),
                    textAnchor,
                    text,
                    textTransform: `
            translate(${textDist * Math.cos(angle)}, ${textDist * Math.sin(angle)}) rotate(${-this.rotationAngle})
          `
                });
            }
            if (i === this.bigSegments) {
                continue;
            }
            for (let j = 1; j <= this.smallSegments; j++) {
                const smallAngleDeg = angleDeg + j * smallTickSegment;
                const smallAngle = (smallAngleDeg * Math.PI) / 180;
                ticks.small.push({
                    line: this.getTickPath(startDistance, tickLength / 2, smallAngle)
                });
            }
        }
        return ticks;
    }
    getTextAnchor(angle) {
        // [0, 45] = 'middle';
        // [46, 135] = 'start';
        // [136, 225] = 'middle';
        // [226, 315] = 'end';
        angle = (this.startAngle + angle) % 360;
        let textAnchor = TextAnchor.Middle;
        if (angle > 45 && angle <= 135) {
            textAnchor = TextAnchor.Start;
        }
        else if (angle > 225 && angle <= 315) {
            textAnchor = TextAnchor.End;
        }
        return textAnchor;
    }
    getTickPath(startDistance, tickLength, angle) {
        const y1 = startDistance * Math.sin(angle);
        const y2 = (startDistance + tickLength) * Math.sin(angle);
        const x1 = startDistance * Math.cos(angle);
        const x2 = (startDistance + tickLength) * Math.cos(angle);
        const points = [
            { x: x1, y: y1 },
            { x: x2, y: y2 }
        ];
        const lineGenerator = line()
            .x(d => d.x)
            .y(d => d.y);
        return lineGenerator(points);
    }
}
GaugeAxisComponent.ɵfac = function GaugeAxisComponent_Factory(t) { return new (t || GaugeAxisComponent)(); };
GaugeAxisComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GaugeAxisComponent, selectors: [["g", "ngx-charts-gauge-axis", ""]], inputs: { bigSegments: "bigSegments", smallSegments: "smallSegments", min: "min", max: "max", angleSpan: "angleSpan", startAngle: "startAngle", radius: "radius", valueScale: "valueScale", tickFormatting: "tickFormatting" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 4, vars: 4, consts: [["class", "gauge-tick gauge-tick-large", 4, "ngFor", "ngForOf"], ["class", "gauge-tick gauge-tick-small", 4, "ngFor", "ngForOf"], [1, "gauge-tick", "gauge-tick-large"], ["alignment-baseline", "central"], [1, "gauge-tick", "gauge-tick-small"]], template: function GaugeAxisComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g");
        i0.ɵɵtemplate(1, GaugeAxisComponent__svg_g_1_Template, 2, 1, "g", 0);
        i0.ɵɵtemplate(2, GaugeAxisComponent__svg_g_2_Template, 3, 4, "g", 0);
        i0.ɵɵtemplate(3, GaugeAxisComponent__svg_g_3_Template, 2, 1, "g", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("transform", ctx.rotate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.ticks.big);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.ticks.big);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.ticks.small);
    } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GaugeAxisComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-gauge-axis]',
                template: `
    <svg:g [attr.transform]="rotate">
      <svg:g *ngFor="let tick of ticks.big" class="gauge-tick gauge-tick-large">
        <svg:path [attr.d]="tick.line" />
      </svg:g>
      <svg:g *ngFor="let tick of ticks.big" class="gauge-tick gauge-tick-large">
        <svg:text
          [style.textAnchor]="tick.textAnchor"
          [attr.transform]="tick.textTransform"
          alignment-baseline="central"
        >
          {{ tick.text }}
        </svg:text>
      </svg:g>
      <svg:g *ngFor="let tick of ticks.small" class="gauge-tick gauge-tick-small">
        <svg:path [attr.d]="tick.line" />
      </svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { bigSegments: [{
            type: Input
        }], smallSegments: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], angleSpan: [{
            type: Input
        }], startAngle: [{
            type: Input
        }], radius: [{
            type: Input
        }], valueScale: [{
            type: Input
        }], tickFormatting: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtYXhpcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvZ2F1Z2UvZ2F1Z2UtYXhpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7SUFrQnhELDRCQUEwRTtJQUN4RSx1QkFBaUM7SUFDbkMsaUJBQVE7OztJQURJLGVBQW9CO0lBQXBCLGlDQUFvQjs7OztJQUVoQyw0QkFBMEU7SUFDeEUsK0JBSUM7SUFDQyxZQUNGO0lBQUEsaUJBQVc7SUFDYixpQkFBUTs7O0lBTkosZUFBb0M7SUFBcEMsaURBQW9DO0lBQ3BDLGtEQUFxQztJQUdyQyxlQUNGO0lBREUsNkNBQ0Y7Ozs7SUFFRiw0QkFBNEU7SUFDMUUsdUJBQWlDO0lBQ25DLGlCQUFROzs7SUFESSxlQUFvQjtJQUFwQixpQ0FBb0I7O0FBTXRDLE1BQU0sT0FBTyxrQkFBa0I7SUF2Qi9CO1FBb0NFLFdBQU0sR0FBVyxFQUFFLENBQUM7S0FrR3JCO0lBaEdDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN6RCxNQUFNLGdCQUFnQixHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzdELE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN0QixNQUFNLEtBQUssR0FBRztZQUNaLEdBQUcsRUFBRSxFQUFFO1lBQ1AsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDO1FBRUYsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDdkMsTUFBTSxRQUFRLEdBQUcsYUFBYSxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUNwQyxNQUFNLEtBQUssR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBRXpDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEdBQUcsRUFBRTtnQkFDckMsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNiO1lBRUQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzNGLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2xDO2dCQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNiLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDO29CQUN4RCxVQUFVO29CQUNWLElBQUk7b0JBQ0osYUFBYSxFQUFFO3dCQUNELFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWE7V0FDckc7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUMxQixTQUFTO2FBQ1Y7WUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsTUFBTSxhQUFhLEdBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDdEQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFFbkQsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDO2lCQUNsRSxDQUFDLENBQUM7YUFDSjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsc0JBQXNCO1FBRXRCLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3hDLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDbkMsSUFBSSxLQUFLLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDOUIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDL0I7YUFBTSxJQUFJLEtBQUssR0FBRyxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUN0QyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztTQUM3QjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxXQUFXLENBQUMsYUFBcUIsRUFBRSxVQUFrQixFQUFFLEtBQWE7UUFDbEUsTUFBTSxFQUFFLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsTUFBTSxFQUFFLEdBQUcsQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxNQUFNLEVBQUUsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFELE1BQU0sTUFBTSxHQUFHO1lBQ2IsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDaEIsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7U0FDakIsQ0FBQztRQUNGLE1BQU0sYUFBYSxHQUFHLElBQUksRUFBTzthQUM5QixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7b0ZBOUdVLGtCQUFrQjtxRUFBbEIsa0JBQWtCO1FBcEIzQixtQkFBaUM7UUFBakMseUJBQWlDO1FBQy9CLG9FQUVRO1FBQ1Isb0VBUVE7UUFDUixvRUFFUTtRQUNWLGlCQUFROztRQWhCRCx1Q0FBeUI7UUFDTixlQUFZO1FBQVosdUNBQVk7UUFHWixlQUFZO1FBQVosdUNBQVk7UUFTWixlQUFjO1FBQWQseUNBQWM7O3VGQU8vQixrQkFBa0I7Y0F2QjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFFVSxXQUFXO2tCQUFuQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBsaW5lIH0gZnJvbSAnZDMtc2hhcGUnO1xuaW1wb3J0IHsgVGV4dEFuY2hvciB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy90ZXh0LWFuY2hvci5lbnVtJztcblxuaW50ZXJmYWNlIEJpZyB7XG4gIGxpbmU6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB0ZXh0QW5jaG9yOiBzdHJpbmc7XG4gIHRleHRUcmFuc2Zvcm06IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRpY2tzIHtcbiAgYmlnOiBCaWdbXTtcbiAgc21hbGw6IEFycmF5PHsgbGluZTogc3RyaW5nIH0+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtZ2F1Z2UtYXhpc10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6ZyBbYXR0ci50cmFuc2Zvcm1dPVwicm90YXRlXCI+XG4gICAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IHRpY2sgb2YgdGlja3MuYmlnXCIgY2xhc3M9XCJnYXVnZS10aWNrIGdhdWdlLXRpY2stbGFyZ2VcIj5cbiAgICAgICAgPHN2ZzpwYXRoIFthdHRyLmRdPVwidGljay5saW5lXCIgLz5cbiAgICAgIDwvc3ZnOmc+XG4gICAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IHRpY2sgb2YgdGlja3MuYmlnXCIgY2xhc3M9XCJnYXVnZS10aWNrIGdhdWdlLXRpY2stbGFyZ2VcIj5cbiAgICAgICAgPHN2Zzp0ZXh0XG4gICAgICAgICAgW3N0eWxlLnRleHRBbmNob3JdPVwidGljay50ZXh0QW5jaG9yXCJcbiAgICAgICAgICBbYXR0ci50cmFuc2Zvcm1dPVwidGljay50ZXh0VHJhbnNmb3JtXCJcbiAgICAgICAgICBhbGlnbm1lbnQtYmFzZWxpbmU9XCJjZW50cmFsXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHRpY2sudGV4dCB9fVxuICAgICAgICA8L3N2Zzp0ZXh0PlxuICAgICAgPC9zdmc6Zz5cbiAgICAgIDxzdmc6ZyAqbmdGb3I9XCJsZXQgdGljayBvZiB0aWNrcy5zbWFsbFwiIGNsYXNzPVwiZ2F1Z2UtdGljayBnYXVnZS10aWNrLXNtYWxsXCI+XG4gICAgICAgIDxzdmc6cGF0aCBbYXR0ci5kXT1cInRpY2subGluZVwiIC8+XG4gICAgICA8L3N2ZzpnPlxuICAgIDwvc3ZnOmc+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdhdWdlQXhpc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGJpZ1NlZ21lbnRzOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNtYWxsU2VnbWVudHM6IG51bWJlcjtcbiAgQElucHV0KCkgbWluOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuICBASW5wdXQoKSBhbmdsZVNwYW46IG51bWJlcjtcbiAgQElucHV0KCkgc3RhcnRBbmdsZTogbnVtYmVyO1xuICBASW5wdXQoKSByYWRpdXM6IG51bWJlcjtcbiAgQElucHV0KCkgdmFsdWVTY2FsZTogYW55O1xuICBASW5wdXQoKSB0aWNrRm9ybWF0dGluZzogYW55O1xuXG4gIHRpY2tzOiBUaWNrcztcbiAgcm90YXRpb25BbmdsZTogbnVtYmVyO1xuICByb3RhdGU6IHN0cmluZyA9ICcnO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMucm90YXRpb25BbmdsZSA9IC05MCArIHRoaXMuc3RhcnRBbmdsZTtcbiAgICB0aGlzLnJvdGF0ZSA9IGByb3RhdGUoJHt0aGlzLnJvdGF0aW9uQW5nbGV9KWA7XG4gICAgdGhpcy50aWNrcyA9IHRoaXMuZ2V0VGlja3MoKTtcbiAgfVxuXG4gIGdldFRpY2tzKCk6IFRpY2tzIHtcbiAgICBjb25zdCBiaWdUaWNrU2VnbWVudCA9IHRoaXMuYW5nbGVTcGFuIC8gdGhpcy5iaWdTZWdtZW50cztcbiAgICBjb25zdCBzbWFsbFRpY2tTZWdtZW50ID0gYmlnVGlja1NlZ21lbnQgLyB0aGlzLnNtYWxsU2VnbWVudHM7XG4gICAgY29uc3QgdGlja0xlbmd0aCA9IDIwO1xuICAgIGNvbnN0IHRpY2tzID0ge1xuICAgICAgYmlnOiBbXSxcbiAgICAgIHNtYWxsOiBbXVxuICAgIH07XG5cbiAgICBjb25zdCBzdGFydERpc3RhbmNlID0gdGhpcy5yYWRpdXMgKyAxMDtcbiAgICBjb25zdCB0ZXh0RGlzdCA9IHN0YXJ0RGlzdGFuY2UgKyB0aWNrTGVuZ3RoICsgMTA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmJpZ1NlZ21lbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IGFuZ2xlRGVnID0gaSAqIGJpZ1RpY2tTZWdtZW50O1xuICAgICAgY29uc3QgYW5nbGUgPSAoYW5nbGVEZWcgKiBNYXRoLlBJKSAvIDE4MDtcblxuICAgICAgY29uc3QgdGV4dEFuY2hvciA9IHRoaXMuZ2V0VGV4dEFuY2hvcihhbmdsZURlZyk7XG5cbiAgICAgIGxldCBza2lwID0gZmFsc2U7XG4gICAgICBpZiAoaSA9PT0gMCAmJiB0aGlzLmFuZ2xlU3BhbiA9PT0gMzYwKSB7XG4gICAgICAgIHNraXAgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNraXApIHtcbiAgICAgICAgbGV0IHRleHQgPSBOdW1iZXIucGFyc2VGbG9hdCh0aGlzLnZhbHVlU2NhbGUuaW52ZXJ0KGFuZ2xlRGVnKS50b1N0cmluZygpKS50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICBpZiAodGhpcy50aWNrRm9ybWF0dGluZykge1xuICAgICAgICAgIHRleHQgPSB0aGlzLnRpY2tGb3JtYXR0aW5nKHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHRpY2tzLmJpZy5wdXNoKHtcbiAgICAgICAgICBsaW5lOiB0aGlzLmdldFRpY2tQYXRoKHN0YXJ0RGlzdGFuY2UsIHRpY2tMZW5ndGgsIGFuZ2xlKSxcbiAgICAgICAgICB0ZXh0QW5jaG9yLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogYFxuICAgICAgICAgICAgdHJhbnNsYXRlKCR7dGV4dERpc3QgKiBNYXRoLmNvcyhhbmdsZSl9LCAke3RleHREaXN0ICogTWF0aC5zaW4oYW5nbGUpfSkgcm90YXRlKCR7LXRoaXMucm90YXRpb25BbmdsZX0pXG4gICAgICAgICAgYFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPT09IHRoaXMuYmlnU2VnbWVudHMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IHRoaXMuc21hbGxTZWdtZW50czsgaisrKSB7XG4gICAgICAgIGNvbnN0IHNtYWxsQW5nbGVEZWcgPSBhbmdsZURlZyArIGogKiBzbWFsbFRpY2tTZWdtZW50O1xuICAgICAgICBjb25zdCBzbWFsbEFuZ2xlID0gKHNtYWxsQW5nbGVEZWcgKiBNYXRoLlBJKSAvIDE4MDtcblxuICAgICAgICB0aWNrcy5zbWFsbC5wdXNoKHtcbiAgICAgICAgICBsaW5lOiB0aGlzLmdldFRpY2tQYXRoKHN0YXJ0RGlzdGFuY2UsIHRpY2tMZW5ndGggLyAyLCBzbWFsbEFuZ2xlKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGlja3M7XG4gIH1cblxuICBnZXRUZXh0QW5jaG9yKGFuZ2xlOiBudW1iZXIpOiBUZXh0QW5jaG9yIHtcbiAgICAvLyBbMCwgNDVdID0gJ21pZGRsZSc7XG4gICAgLy8gWzQ2LCAxMzVdID0gJ3N0YXJ0JztcbiAgICAvLyBbMTM2LCAyMjVdID0gJ21pZGRsZSc7XG4gICAgLy8gWzIyNiwgMzE1XSA9ICdlbmQnO1xuXG4gICAgYW5nbGUgPSAodGhpcy5zdGFydEFuZ2xlICsgYW5nbGUpICUgMzYwO1xuICAgIGxldCB0ZXh0QW5jaG9yID0gVGV4dEFuY2hvci5NaWRkbGU7XG4gICAgaWYgKGFuZ2xlID4gNDUgJiYgYW5nbGUgPD0gMTM1KSB7XG4gICAgICB0ZXh0QW5jaG9yID0gVGV4dEFuY2hvci5TdGFydDtcbiAgICB9IGVsc2UgaWYgKGFuZ2xlID4gMjI1ICYmIGFuZ2xlIDw9IDMxNSkge1xuICAgICAgdGV4dEFuY2hvciA9IFRleHRBbmNob3IuRW5kO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dEFuY2hvcjtcbiAgfVxuXG4gIGdldFRpY2tQYXRoKHN0YXJ0RGlzdGFuY2U6IG51bWJlciwgdGlja0xlbmd0aDogbnVtYmVyLCBhbmdsZTogbnVtYmVyKTogYW55IHtcbiAgICBjb25zdCB5MSA9IHN0YXJ0RGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgY29uc3QgeTIgPSAoc3RhcnREaXN0YW5jZSArIHRpY2tMZW5ndGgpICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIGNvbnN0IHgxID0gc3RhcnREaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICBjb25zdCB4MiA9IChzdGFydERpc3RhbmNlICsgdGlja0xlbmd0aCkgKiBNYXRoLmNvcyhhbmdsZSk7XG5cbiAgICBjb25zdCBwb2ludHMgPSBbXG4gICAgICB7IHg6IHgxLCB5OiB5MSB9LFxuICAgICAgeyB4OiB4MiwgeTogeTIgfVxuICAgIF07XG4gICAgY29uc3QgbGluZUdlbmVyYXRvciA9IGxpbmU8YW55PigpXG4gICAgICAueChkID0+IGQueClcbiAgICAgIC55KGQgPT4gZC55KTtcbiAgICByZXR1cm4gbGluZUdlbmVyYXRvcihwb2ludHMpO1xuICB9XG59XG4iXX0=