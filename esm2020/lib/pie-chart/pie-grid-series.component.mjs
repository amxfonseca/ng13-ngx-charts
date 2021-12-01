import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { pie } from 'd3-shape';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pie-arc.component";
const _c0 = ["ngx-charts-pie-grid-series", ""];
function PieGridSeriesComponent__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 2);
    i0.ɵɵlistener("select", function PieGridSeriesComponent__svg_g_1_Template__svg_g_select_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onClick($event); })("activate", function PieGridSeriesComponent__svg_g_1_Template__svg_g_activate_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.activate.emit($event); })("deactivate", function PieGridSeriesComponent__svg_g_1_Template__svg_g_deactivate_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.deactivate.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const arc_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("startAngle", arc_r1.startAngle)("endAngle", arc_r1.endAngle)("innerRadius", ctx_r0.innerRadius)("outerRadius", ctx_r0.outerRadius)("fill", ctx_r0.color(arc_r1))("value", arc_r1.data.value)("data", arc_r1.data)("gradient", false)("pointerEvents", arc_r1.pointerEvents)("animate", arc_r1.animate);
    i0.ɵɵattribute("class", arc_r1.class);
} }
export class PieGridSeriesComponent {
    constructor(element) {
        this.innerRadius = 70;
        this.outerRadius = 80;
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        this.layout = pie()
            .value(d => d.data.value)
            .sort(null);
        this.arcs = this.getArcs();
    }
    getArcs() {
        return this.layout(this.data).map((arc, index) => {
            const label = arc.data.data.name;
            const other = arc.data.data.other;
            if (index === 0) {
                arc.startAngle = 0;
            }
            const color = this.colors(label);
            return {
                data: arc.data.data,
                class: 'arc ' + 'arc' + index,
                fill: color,
                startAngle: other ? 0 : arc.startAngle,
                endAngle: arc.endAngle,
                animate: this.animations && !other,
                pointerEvents: !other
            };
        });
    }
    onClick(data) {
        this.select.emit(this.data[0].data);
    }
    trackBy(index, item) {
        return item.data.name;
    }
    label(arc) {
        return arc.data.name;
    }
    color(arc) {
        return this.colors(this.label(arc));
    }
}
PieGridSeriesComponent.ɵfac = function PieGridSeriesComponent_Factory(t) { return new (t || PieGridSeriesComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
PieGridSeriesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PieGridSeriesComponent, selectors: [["g", "ngx-charts-pie-grid-series", ""]], inputs: { colors: "colors", data: "data", innerRadius: "innerRadius", outerRadius: "outerRadius", animations: "animations" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 2, consts: [[1, "pie-grid-arcs"], ["ngx-charts-pie-arc", "", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "fill", "value", "data", "gradient", "pointerEvents", "animate", "select", "activate", "deactivate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-pie-arc", "", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "fill", "value", "data", "gradient", "pointerEvents", "animate", "select", "activate", "deactivate"]], template: function PieGridSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g", 0);
        i0.ɵɵtemplate(1, PieGridSeriesComponent__svg_g_1_Template, 1, 11, "g", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.arcs)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.NgForOf, i2.PieArcComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PieGridSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-pie-grid-series]',
                template: `
    <svg:g class="pie-grid-arcs">
      <svg:g
        ngx-charts-pie-arc
        *ngFor="let arc of arcs; trackBy: trackBy"
        [attr.class]="arc.class"
        [startAngle]="arc.startAngle"
        [endAngle]="arc.endAngle"
        [innerRadius]="innerRadius"
        [outerRadius]="outerRadius"
        [fill]="color(arc)"
        [value]="arc.data.value"
        [data]="arc.data"
        [gradient]="false"
        [pointerEvents]="arc.pointerEvents"
        [animate]="arc.animate"
        (select)="onClick($event)"
        (activate)="activate.emit($event)"
        (deactivate)="deactivate.emit($event)"
      ></svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { colors: [{
            type: Input
        }], data: [{
            type: Input
        }], innerRadius: [{
            type: Input
        }], outerRadius: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWdyaWQtc2VyaWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9waWUtY2hhcnQvcGllLWdyaWQtc2VyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUlaLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7OztJQWtCekIsNEJBaUJDO0lBSEMsOEtBQVUsc0JBQWUsSUFBQyxxS0FDZCw0QkFBcUIsSUFEUCx5S0FFWiw4QkFBdUIsSUFGWDtJQUczQixpQkFBUTs7OztJQWJQLDhDQUE2Qiw2QkFBQSxtQ0FBQSxtQ0FBQSw4QkFBQSw0QkFBQSxxQkFBQSxtQkFBQSx1Q0FBQSwyQkFBQTtJQUQ3QixxQ0FBd0I7O0FBbUJoQyxNQUFNLE9BQU8sc0JBQXNCO0lBZWpDLFlBQVksT0FBbUI7UUFadEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUUxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU94QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBWTthQUMxQixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQy9DLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFbEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNmLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1lBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxPQUFPO2dCQUNMLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQ25CLEtBQUssRUFBRSxNQUFNLEdBQUcsS0FBSyxHQUFHLEtBQUs7Z0JBQzdCLElBQUksRUFBRSxLQUFLO2dCQUNYLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVU7Z0JBQ3RDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLO2dCQUNsQyxhQUFhLEVBQUUsQ0FBQyxLQUFLO2FBQ3RCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBSTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBRztRQUNQLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFHO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs0RkFuRVUsc0JBQXNCO3lFQUF0QixzQkFBc0I7UUF2Qi9CLG1CQUE2QjtRQUE3Qiw0QkFBNkI7UUFDM0IseUVBaUJTO1FBQ1gsaUJBQVE7O1FBaEJZLGVBQVM7UUFBVCxrQ0FBUyw2QkFBQTs7dUZBb0JwQixzQkFBc0I7Y0ExQmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs2REFFVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFFSSxNQUFNO2tCQUFmLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGllIH0gZnJvbSAnZDMtc2hhcGUnO1xuaW1wb3J0IHsgUGllR3JpZERhdGFJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXJ0LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgUGllR3JpZERhdGEgfSBmcm9tICcuL3BpZS1ncmlkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGllQXJjIHtcbiAgYW5pbWF0ZTogYm9vbGVhbjtcbiAgY2xhc3M6IHN0cmluZztcbiAgZGF0YTogUGllR3JpZERhdGFJdGVtO1xuICBlbmRBbmdsZTogbnVtYmVyO1xuICBmaWxsOiBzdHJpbmc7XG4gIHBvaW50ZXJFdmVudHM6IGJvb2xlYW47XG4gIHN0YXJ0QW5nbGU6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLXBpZS1ncmlkLXNlcmllc10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6ZyBjbGFzcz1cInBpZS1ncmlkLWFyY3NcIj5cbiAgICAgIDxzdmc6Z1xuICAgICAgICBuZ3gtY2hhcnRzLXBpZS1hcmNcbiAgICAgICAgKm5nRm9yPVwibGV0IGFyYyBvZiBhcmNzOyB0cmFja0J5OiB0cmFja0J5XCJcbiAgICAgICAgW2F0dHIuY2xhc3NdPVwiYXJjLmNsYXNzXCJcbiAgICAgICAgW3N0YXJ0QW5nbGVdPVwiYXJjLnN0YXJ0QW5nbGVcIlxuICAgICAgICBbZW5kQW5nbGVdPVwiYXJjLmVuZEFuZ2xlXCJcbiAgICAgICAgW2lubmVyUmFkaXVzXT1cImlubmVyUmFkaXVzXCJcbiAgICAgICAgW291dGVyUmFkaXVzXT1cIm91dGVyUmFkaXVzXCJcbiAgICAgICAgW2ZpbGxdPVwiY29sb3IoYXJjKVwiXG4gICAgICAgIFt2YWx1ZV09XCJhcmMuZGF0YS52YWx1ZVwiXG4gICAgICAgIFtkYXRhXT1cImFyYy5kYXRhXCJcbiAgICAgICAgW2dyYWRpZW50XT1cImZhbHNlXCJcbiAgICAgICAgW3BvaW50ZXJFdmVudHNdPVwiYXJjLnBvaW50ZXJFdmVudHNcIlxuICAgICAgICBbYW5pbWF0ZV09XCJhcmMuYW5pbWF0ZVwiXG4gICAgICAgIChzZWxlY3QpPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgKGFjdGl2YXRlKT1cImFjdGl2YXRlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIChkZWFjdGl2YXRlKT1cImRlYWN0aXZhdGUuZW1pdCgkZXZlbnQpXCJcbiAgICAgID48L3N2ZzpnPlxuICAgIDwvc3ZnOmc+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBpZUdyaWRTZXJpZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb2xvcnM7XG4gIEBJbnB1dCgpIGRhdGE6IFBpZUdyaWREYXRhW107XG4gIEBJbnB1dCgpIGlubmVyUmFkaXVzID0gNzA7XG4gIEBJbnB1dCgpIG91dGVyUmFkaXVzID0gODA7XG4gIEBJbnB1dCgpIGFuaW1hdGlvbnM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRlYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGxheW91dDogYW55O1xuICBhcmNzOiBQaWVBcmNbXTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5sYXlvdXQgPSBwaWU8YW55LCBhbnk+KClcbiAgICAgIC52YWx1ZShkID0+IGQuZGF0YS52YWx1ZSlcbiAgICAgIC5zb3J0KG51bGwpO1xuXG4gICAgdGhpcy5hcmNzID0gdGhpcy5nZXRBcmNzKCk7XG4gIH1cblxuICBnZXRBcmNzKCk6IFBpZUFyY1tdIHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXQodGhpcy5kYXRhKS5tYXAoKGFyYywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gYXJjLmRhdGEuZGF0YS5uYW1lO1xuICAgICAgY29uc3Qgb3RoZXIgPSBhcmMuZGF0YS5kYXRhLm90aGVyO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgYXJjLnN0YXJ0QW5nbGUgPSAwO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3JzKGxhYmVsKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IGFyYy5kYXRhLmRhdGEsXG4gICAgICAgIGNsYXNzOiAnYXJjICcgKyAnYXJjJyArIGluZGV4LFxuICAgICAgICBmaWxsOiBjb2xvcixcbiAgICAgICAgc3RhcnRBbmdsZTogb3RoZXIgPyAwIDogYXJjLnN0YXJ0QW5nbGUsXG4gICAgICAgIGVuZEFuZ2xlOiBhcmMuZW5kQW5nbGUsXG4gICAgICAgIGFuaW1hdGU6IHRoaXMuYW5pbWF0aW9ucyAmJiAhb3RoZXIsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICFvdGhlclxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2soZGF0YSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5kYXRhWzBdLmRhdGEpO1xuICB9XG5cbiAgdHJhY2tCeShpbmRleCwgaXRlbSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGl0ZW0uZGF0YS5uYW1lO1xuICB9XG5cbiAgbGFiZWwoYXJjKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYXJjLmRhdGEubmFtZTtcbiAgfVxuXG4gIGNvbG9yKGFyYyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JzKHRoaXMubGFiZWwoYXJjKSk7XG4gIH1cbn1cbiJdfQ==