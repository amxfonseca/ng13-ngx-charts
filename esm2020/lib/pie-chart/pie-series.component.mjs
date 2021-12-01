import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { max } from 'd3-array';
import { arc, pie } from 'd3-shape';
import { formatLabel, escapeLabel } from '../common/label.helper';
import { PlacementTypes } from '../common/tooltip/position';
import { StyleTypes } from '../common/tooltip/style.type';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pie-arc.component";
import * as i3 from "../common/tooltip/tooltip.directive";
import * as i4 from "./pie-label.component";
const _c0 = ["ngx-charts-pie-series", ""];
function PieSeriesComponent__svg_g_0__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "g", 3);
} if (rf & 2) {
    const arc_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("data", arc_r1)("radius", ctx_r2.outerRadius)("color", ctx_r2.color(arc_r1))("label", ctx_r2.labelText(arc_r1))("labelTrim", ctx_r2.trimLabels)("labelTrimSize", ctx_r2.maxLabelLength)("max", ctx_r2.max)("value", arc_r1.value)("explodeSlices", ctx_r2.explodeSlices)("animations", ctx_r2.animations);
} }
function PieSeriesComponent__svg_g_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵtemplate(1, PieSeriesComponent__svg_g_0__svg_g_1_Template, 1, 10, "g", 1);
    i0.ɵɵelementStart(2, "g", 2);
    i0.ɵɵlistener("select", function PieSeriesComponent__svg_g_0_Template__svg_g_select_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onClick($event); })("activate", function PieSeriesComponent__svg_g_0_Template__svg_g_activate_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.activate.emit($event); })("deactivate", function PieSeriesComponent__svg_g_0_Template__svg_g_deactivate_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.deactivate.emit($event); })("dblclick", function PieSeriesComponent__svg_g_0_Template__svg_g_dblclick_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.dblclick.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const arc_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.labelVisible(arc_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("startAngle", arc_r1.startAngle)("endAngle", arc_r1.endAngle)("innerRadius", ctx_r0.innerRadius)("outerRadius", ctx_r0.outerRadius)("fill", ctx_r0.color(arc_r1))("value", arc_r1.data.value)("gradient", ctx_r0.gradient)("data", arc_r1.data)("max", ctx_r0.max)("explodeSlices", ctx_r0.explodeSlices)("isActive", ctx_r0.isActive(arc_r1.data))("animate", ctx_r0.animations)("tooltipDisabled", ctx_r0.tooltipDisabled)("tooltipPlacement", ctx_r0.placementTypes.Top)("tooltipType", ctx_r0.styleTypes.tooltip)("tooltipTitle", ctx_r0.getTooltipTitle(arc_r1))("tooltipTemplate", ctx_r0.tooltipTemplate)("tooltipContext", arc_r1.data);
} }
export class PieSeriesComponent {
    constructor() {
        this.series = [];
        this.innerRadius = 60;
        this.outerRadius = 80;
        this.trimLabels = true;
        this.maxLabelLength = 10;
        this.tooltipDisabled = false;
        this.animations = true;
        this.select = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.dblclick = new EventEmitter();
        this.placementTypes = PlacementTypes;
        this.styleTypes = StyleTypes;
    }
    ngOnChanges(changes) {
        this.update();
    }
    update() {
        const pieGenerator = pie()
            .value(d => d.value)
            .sort(null);
        const arcData = pieGenerator(this.series);
        this.max = max(arcData, d => {
            return d.value;
        });
        this.data = this.calculateLabelPositions(arcData);
        this.tooltipText = this.tooltipText || this.defaultTooltipText;
    }
    midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
    outerArc() {
        const factor = 1.5;
        return arc()
            .innerRadius(this.outerRadius * factor)
            .outerRadius(this.outerRadius * factor);
    }
    calculateLabelPositions(pieData) {
        const factor = 1.5;
        const minDistance = 10;
        const labelPositions = pieData;
        labelPositions.forEach(d => {
            d.pos = this.outerArc().centroid(d);
            d.pos[0] = factor * this.outerRadius * (this.midAngle(d) < Math.PI ? 1 : -1);
        });
        for (let i = 0; i < labelPositions.length - 1; i++) {
            const a = labelPositions[i];
            if (!this.labelVisible(a)) {
                continue;
            }
            for (let j = i + 1; j < labelPositions.length; j++) {
                const b = labelPositions[j];
                if (!this.labelVisible(b)) {
                    continue;
                }
                // if they're on the same side
                if (b.pos[0] * a.pos[0] > 0) {
                    // if they're overlapping
                    const o = minDistance - Math.abs(b.pos[1] - a.pos[1]);
                    if (o > 0) {
                        // push the second up or down
                        b.pos[1] += Math.sign(b.pos[0]) * o;
                    }
                }
            }
        }
        return labelPositions;
    }
    labelVisible(myArc) {
        return this.showLabels && myArc.endAngle - myArc.startAngle > Math.PI / 30;
    }
    getTooltipTitle(a) {
        return this.tooltipTemplate ? undefined : this.tooltipText(a);
    }
    labelText(myArc) {
        if (this.labelFormatting) {
            return this.labelFormatting(myArc.data.name);
        }
        return this.label(myArc);
    }
    label(myArc) {
        return formatLabel(myArc.data.name);
    }
    defaultTooltipText(myArc) {
        const label = this.label(myArc);
        const val = formatLabel(myArc.data.value);
        return `
      <span class="tooltip-label">${escapeLabel(label)}</span>
      <span class="tooltip-val">${val}</span>
    `;
    }
    color(myArc) {
        return this.colors.getColor(this.label(myArc));
    }
    trackBy(index, item) {
        return item.data.name;
    }
    onClick(data) {
        this.select.emit(data);
    }
    isActive(entry) {
        if (!this.activeEntries)
            return false;
        const item = this.activeEntries.find(d => {
            return entry.name === d.name && entry.series === d.series;
        });
        return item !== undefined;
    }
}
PieSeriesComponent.ɵfac = function PieSeriesComponent_Factory(t) { return new (t || PieSeriesComponent)(); };
PieSeriesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PieSeriesComponent, selectors: [["g", "ngx-charts-pie-series", ""]], inputs: { colors: "colors", series: "series", dims: "dims", innerRadius: "innerRadius", outerRadius: "outerRadius", explodeSlices: "explodeSlices", showLabels: "showLabels", gradient: "gradient", activeEntries: "activeEntries", labelFormatting: "labelFormatting", trimLabels: "trimLabels", maxLabelLength: "maxLabelLength", tooltipText: "tooltipText", tooltipDisabled: "tooltipDisabled", tooltipTemplate: "tooltipTemplate", animations: "animations" }, outputs: { select: "select", activate: "activate", deactivate: "deactivate", dblclick: "dblclick" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 2, consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], ["ngx-charts-pie-label", "", 3, "data", "radius", "color", "label", "labelTrim", "labelTrimSize", "max", "value", "explodeSlices", "animations", 4, "ngIf"], ["ngx-charts-pie-arc", "", "ngx-tooltip", "", 3, "startAngle", "endAngle", "innerRadius", "outerRadius", "fill", "value", "gradient", "data", "max", "explodeSlices", "isActive", "animate", "tooltipDisabled", "tooltipPlacement", "tooltipType", "tooltipTitle", "tooltipTemplate", "tooltipContext", "select", "activate", "deactivate", "dblclick"], ["ngx-charts-pie-label", "", 3, "data", "radius", "color", "label", "labelTrim", "labelTrimSize", "max", "value", "explodeSlices", "animations"]], template: function PieSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PieSeriesComponent__svg_g_0_Template, 3, 19, "g", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.data)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i1.NgForOf, i1.NgIf, i2.PieArcComponent, i3.TooltipDirective, i4.PieLabelComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PieSeriesComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-pie-series]',
                template: `
    <svg:g *ngFor="let arc of data; trackBy: trackBy">
      <svg:g
        ngx-charts-pie-label
        *ngIf="labelVisible(arc)"
        [data]="arc"
        [radius]="outerRadius"
        [color]="color(arc)"
        [label]="labelText(arc)"
        [labelTrim]="trimLabels"
        [labelTrimSize]="maxLabelLength"
        [max]="max"
        [value]="arc.value"
        [explodeSlices]="explodeSlices"
        [animations]="animations"
      ></svg:g>
      <svg:g
        ngx-charts-pie-arc
        [startAngle]="arc.startAngle"
        [endAngle]="arc.endAngle"
        [innerRadius]="innerRadius"
        [outerRadius]="outerRadius"
        [fill]="color(arc)"
        [value]="arc.data.value"
        [gradient]="gradient"
        [data]="arc.data"
        [max]="max"
        [explodeSlices]="explodeSlices"
        [isActive]="isActive(arc.data)"
        [animate]="animations"
        (select)="onClick($event)"
        (activate)="activate.emit($event)"
        (deactivate)="deactivate.emit($event)"
        (dblclick)="dblclick.emit($event)"
        ngx-tooltip
        [tooltipDisabled]="tooltipDisabled"
        [tooltipPlacement]="placementTypes.Top"
        [tooltipType]="styleTypes.tooltip"
        [tooltipTitle]="getTooltipTitle(arc)"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipContext]="arc.data"
      ></svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { colors: [{
            type: Input
        }], series: [{
            type: Input
        }], dims: [{
            type: Input
        }], innerRadius: [{
            type: Input
        }], outerRadius: [{
            type: Input
        }], explodeSlices: [{
            type: Input
        }], showLabels: [{
            type: Input
        }], gradient: [{
            type: Input
        }], activeEntries: [{
            type: Input
        }], labelFormatting: [{
            type: Input
        }], trimLabels: [{
            type: Input
        }], maxLabelLength: [{
            type: Input
        }], tooltipText: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], animations: [{
            type: Input
        }], select: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], dblclick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLXNlcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvcGllLWNoYXJ0L3BpZS1zZXJpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUdsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7SUFPcEQsdUJBYVM7Ozs7SUFWUCw2QkFBWSw4QkFBQSwrQkFBQSxtQ0FBQSxnQ0FBQSx3Q0FBQSxtQkFBQSx1QkFBQSx1Q0FBQSxpQ0FBQTs7OztJQUpoQixtQkFBa0Q7SUFBbEQseUJBQWtEO0lBQ2hELDhFQWFTO0lBQ1QsNEJBeUJDO0lBWEMsMEtBQVUsc0JBQWUsSUFBQyxpS0FDZCw0QkFBcUIsSUFEUCxxS0FFWiw4QkFBdUIsSUFGWCxpS0FHZCw0QkFBcUIsSUFIUDtJQVczQixpQkFBUTtJQUNYLGlCQUFROzs7O0lBdENILGVBQXVCO0lBQXZCLGtEQUF1QjtJQWN4QixlQUE2QjtJQUE3Qiw4Q0FBNkIsNkJBQUEsbUNBQUEsbUNBQUEsOEJBQUEsNEJBQUEsNkJBQUEscUJBQUEsbUJBQUEsdUNBQUEsMENBQUEsOEJBQUEsMkNBQUEsK0NBQUEsMENBQUEsZ0RBQUEsMkNBQUEsK0JBQUE7O0FB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IENvbXBvbmVudCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1heCB9IGZyb20gJ2QzLWFycmF5JztcbmltcG9ydCB7IGFyYywgcGllIH0gZnJvbSAnZDMtc2hhcGUnO1xuaW1wb3J0IHsgQ29sb3JIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY29sb3IuaGVscGVyJztcblxuaW1wb3J0IHsgZm9ybWF0TGFiZWwsIGVzY2FwZUxhYmVsIH0gZnJvbSAnLi4vY29tbW9uL2xhYmVsLmhlbHBlcic7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gJy4uL21vZGVscy9jaGFydC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IFBpZURhdGEgfSBmcm9tICcuL3BpZS1sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxhY2VtZW50VHlwZXMgfSBmcm9tICcuLi9jb21tb24vdG9vbHRpcC9wb3NpdGlvbic7XG5pbXBvcnQgeyBTdHlsZVR5cGVzIH0gZnJvbSAnLi4vY29tbW9uL3Rvb2x0aXAvc3R5bGUudHlwZSc7XG5pbXBvcnQgeyBWaWV3RGltZW5zaW9ucyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcy92aWV3LWRpbWVuc2lvbi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMtcGllLXNlcmllc10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6ZyAqbmdGb3I9XCJsZXQgYXJjIG9mIGRhdGE7IHRyYWNrQnk6IHRyYWNrQnlcIj5cbiAgICAgIDxzdmc6Z1xuICAgICAgICBuZ3gtY2hhcnRzLXBpZS1sYWJlbFxuICAgICAgICAqbmdJZj1cImxhYmVsVmlzaWJsZShhcmMpXCJcbiAgICAgICAgW2RhdGFdPVwiYXJjXCJcbiAgICAgICAgW3JhZGl1c109XCJvdXRlclJhZGl1c1wiXG4gICAgICAgIFtjb2xvcl09XCJjb2xvcihhcmMpXCJcbiAgICAgICAgW2xhYmVsXT1cImxhYmVsVGV4dChhcmMpXCJcbiAgICAgICAgW2xhYmVsVHJpbV09XCJ0cmltTGFiZWxzXCJcbiAgICAgICAgW2xhYmVsVHJpbVNpemVdPVwibWF4TGFiZWxMZW5ndGhcIlxuICAgICAgICBbbWF4XT1cIm1heFwiXG4gICAgICAgIFt2YWx1ZV09XCJhcmMudmFsdWVcIlxuICAgICAgICBbZXhwbG9kZVNsaWNlc109XCJleHBsb2RlU2xpY2VzXCJcbiAgICAgICAgW2FuaW1hdGlvbnNdPVwiYW5pbWF0aW9uc1wiXG4gICAgICA+PC9zdmc6Zz5cbiAgICAgIDxzdmc6Z1xuICAgICAgICBuZ3gtY2hhcnRzLXBpZS1hcmNcbiAgICAgICAgW3N0YXJ0QW5nbGVdPVwiYXJjLnN0YXJ0QW5nbGVcIlxuICAgICAgICBbZW5kQW5nbGVdPVwiYXJjLmVuZEFuZ2xlXCJcbiAgICAgICAgW2lubmVyUmFkaXVzXT1cImlubmVyUmFkaXVzXCJcbiAgICAgICAgW291dGVyUmFkaXVzXT1cIm91dGVyUmFkaXVzXCJcbiAgICAgICAgW2ZpbGxdPVwiY29sb3IoYXJjKVwiXG4gICAgICAgIFt2YWx1ZV09XCJhcmMuZGF0YS52YWx1ZVwiXG4gICAgICAgIFtncmFkaWVudF09XCJncmFkaWVudFwiXG4gICAgICAgIFtkYXRhXT1cImFyYy5kYXRhXCJcbiAgICAgICAgW21heF09XCJtYXhcIlxuICAgICAgICBbZXhwbG9kZVNsaWNlc109XCJleHBsb2RlU2xpY2VzXCJcbiAgICAgICAgW2lzQWN0aXZlXT1cImlzQWN0aXZlKGFyYy5kYXRhKVwiXG4gICAgICAgIFthbmltYXRlXT1cImFuaW1hdGlvbnNcIlxuICAgICAgICAoc2VsZWN0KT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgIChhY3RpdmF0ZSk9XCJhY3RpdmF0ZS5lbWl0KCRldmVudClcIlxuICAgICAgICAoZGVhY3RpdmF0ZSk9XCJkZWFjdGl2YXRlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIChkYmxjbGljayk9XCJkYmxjbGljay5lbWl0KCRldmVudClcIlxuICAgICAgICBuZ3gtdG9vbHRpcFxuICAgICAgICBbdG9vbHRpcERpc2FibGVkXT1cInRvb2x0aXBEaXNhYmxlZFwiXG4gICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInBsYWNlbWVudFR5cGVzLlRvcFwiXG4gICAgICAgIFt0b29sdGlwVHlwZV09XCJzdHlsZVR5cGVzLnRvb2x0aXBcIlxuICAgICAgICBbdG9vbHRpcFRpdGxlXT1cImdldFRvb2x0aXBUaXRsZShhcmMpXCJcbiAgICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgICBbdG9vbHRpcENvbnRleHRdPVwiYXJjLmRhdGFcIlxuICAgICAgPjwvc3ZnOmc+XG4gICAgPC9zdmc6Zz5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGllU2VyaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY29sb3JzOiBDb2xvckhlbHBlcjtcbiAgQElucHV0KCkgc2VyaWVzOiBEYXRhSXRlbVtdID0gW107XG4gIEBJbnB1dCgpIGRpbXM6IFZpZXdEaW1lbnNpb25zO1xuICBASW5wdXQoKSBpbm5lclJhZGl1czogbnVtYmVyID0gNjA7XG4gIEBJbnB1dCgpIG91dGVyUmFkaXVzOiBudW1iZXIgPSA4MDtcbiAgQElucHV0KCkgZXhwbG9kZVNsaWNlczogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd0xhYmVsczogYm9vbGVhbjtcbiAgQElucHV0KCkgZ3JhZGllbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFjdGl2ZUVudHJpZXM6IGFueVtdO1xuICBASW5wdXQoKSBsYWJlbEZvcm1hdHRpbmc6IGFueTtcbiAgQElucHV0KCkgdHJpbUxhYmVsczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG1heExhYmVsTGVuZ3RoOiBudW1iZXIgPSAxMDtcbiAgQElucHV0KCkgdG9vbHRpcFRleHQ6IChvOiBhbnkpID0+IGFueTtcbiAgQElucHV0KCkgdG9vbHRpcERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgYW5pbWF0aW9uczogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRibGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG1heDogbnVtYmVyO1xuICBkYXRhOiBQaWVEYXRhW107XG5cbiAgcGxhY2VtZW50VHlwZXMgPSBQbGFjZW1lbnRUeXBlcztcbiAgc3R5bGVUeXBlcyA9IFN0eWxlVHlwZXM7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgcGllR2VuZXJhdG9yID0gcGllPGFueSwgYW55PigpXG4gICAgICAudmFsdWUoZCA9PiBkLnZhbHVlKVxuICAgICAgLnNvcnQobnVsbCk7XG5cbiAgICBjb25zdCBhcmNEYXRhID0gcGllR2VuZXJhdG9yKHRoaXMuc2VyaWVzKTtcblxuICAgIHRoaXMubWF4ID0gbWF4KGFyY0RhdGEsIGQgPT4ge1xuICAgICAgcmV0dXJuIGQudmFsdWU7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRhdGEgPSB0aGlzLmNhbGN1bGF0ZUxhYmVsUG9zaXRpb25zKGFyY0RhdGEpO1xuICAgIHRoaXMudG9vbHRpcFRleHQgPSB0aGlzLnRvb2x0aXBUZXh0IHx8IHRoaXMuZGVmYXVsdFRvb2x0aXBUZXh0O1xuICB9XG5cbiAgbWlkQW5nbGUoZCk6IG51bWJlciB7XG4gICAgcmV0dXJuIGQuc3RhcnRBbmdsZSArIChkLmVuZEFuZ2xlIC0gZC5zdGFydEFuZ2xlKSAvIDI7XG4gIH1cblxuICBvdXRlckFyYygpOiBhbnkge1xuICAgIGNvbnN0IGZhY3RvciA9IDEuNTtcblxuICAgIHJldHVybiBhcmMoKVxuICAgICAgLmlubmVyUmFkaXVzKHRoaXMub3V0ZXJSYWRpdXMgKiBmYWN0b3IpXG4gICAgICAub3V0ZXJSYWRpdXModGhpcy5vdXRlclJhZGl1cyAqIGZhY3Rvcik7XG4gIH1cblxuICBjYWxjdWxhdGVMYWJlbFBvc2l0aW9ucyhwaWVEYXRhKTogYW55IHtcbiAgICBjb25zdCBmYWN0b3IgPSAxLjU7XG4gICAgY29uc3QgbWluRGlzdGFuY2UgPSAxMDtcbiAgICBjb25zdCBsYWJlbFBvc2l0aW9ucyA9IHBpZURhdGE7XG5cbiAgICBsYWJlbFBvc2l0aW9ucy5mb3JFYWNoKGQgPT4ge1xuICAgICAgZC5wb3MgPSB0aGlzLm91dGVyQXJjKCkuY2VudHJvaWQoZCk7XG4gICAgICBkLnBvc1swXSA9IGZhY3RvciAqIHRoaXMub3V0ZXJSYWRpdXMgKiAodGhpcy5taWRBbmdsZShkKSA8IE1hdGguUEkgPyAxIDogLTEpO1xuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbFBvc2l0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBsYWJlbFBvc2l0aW9uc1tpXTtcbiAgICAgIGlmICghdGhpcy5sYWJlbFZpc2libGUoYSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGxhYmVsUG9zaXRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGIgPSBsYWJlbFBvc2l0aW9uc1tqXTtcbiAgICAgICAgaWYgKCF0aGlzLmxhYmVsVmlzaWJsZShiKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZXkncmUgb24gdGhlIHNhbWUgc2lkZVxuICAgICAgICBpZiAoYi5wb3NbMF0gKiBhLnBvc1swXSA+IDApIHtcbiAgICAgICAgICAvLyBpZiB0aGV5J3JlIG92ZXJsYXBwaW5nXG4gICAgICAgICAgY29uc3QgbyA9IG1pbkRpc3RhbmNlIC0gTWF0aC5hYnMoYi5wb3NbMV0gLSBhLnBvc1sxXSk7XG4gICAgICAgICAgaWYgKG8gPiAwKSB7XG4gICAgICAgICAgICAvLyBwdXNoIHRoZSBzZWNvbmQgdXAgb3IgZG93blxuICAgICAgICAgICAgYi5wb3NbMV0gKz0gTWF0aC5zaWduKGIucG9zWzBdKSAqIG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsUG9zaXRpb25zO1xuICB9XG5cbiAgbGFiZWxWaXNpYmxlKG15QXJjKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd0xhYmVscyAmJiBteUFyYy5lbmRBbmdsZSAtIG15QXJjLnN0YXJ0QW5nbGUgPiBNYXRoLlBJIC8gMzA7XG4gIH1cblxuICBnZXRUb29sdGlwVGl0bGUoYSkge1xuICAgIHJldHVybiB0aGlzLnRvb2x0aXBUZW1wbGF0ZSA/IHVuZGVmaW5lZCA6IHRoaXMudG9vbHRpcFRleHQoYSk7XG4gIH1cblxuICBsYWJlbFRleHQobXlBcmMpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmxhYmVsRm9ybWF0dGluZykge1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWxGb3JtYXR0aW5nKG15QXJjLmRhdGEubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxhYmVsKG15QXJjKTtcbiAgfVxuXG4gIGxhYmVsKG15QXJjKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0TGFiZWwobXlBcmMuZGF0YS5uYW1lKTtcbiAgfVxuXG4gIGRlZmF1bHRUb29sdGlwVGV4dChteUFyYyk6IHN0cmluZyB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmxhYmVsKG15QXJjKTtcbiAgICBjb25zdCB2YWwgPSBmb3JtYXRMYWJlbChteUFyYy5kYXRhLnZhbHVlKTtcblxuICAgIHJldHVybiBgXG4gICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXAtbGFiZWxcIj4ke2VzY2FwZUxhYmVsKGxhYmVsKX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXAtdmFsXCI+JHt2YWx9PC9zcGFuPlxuICAgIGA7XG4gIH1cblxuICBjb2xvcihteUFyYyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3JzLmdldENvbG9yKHRoaXMubGFiZWwobXlBcmMpKTtcbiAgfVxuXG4gIHRyYWNrQnkoaW5kZXgsIGl0ZW0pOiBzdHJpbmcge1xuICAgIHJldHVybiBpdGVtLmRhdGEubmFtZTtcbiAgfVxuXG4gIG9uQ2xpY2soZGF0YSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoZGF0YSk7XG4gIH1cblxuICBpc0FjdGl2ZShlbnRyeSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hY3RpdmVFbnRyaWVzKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuYWN0aXZlRW50cmllcy5maW5kKGQgPT4ge1xuICAgICAgcmV0dXJuIGVudHJ5Lm5hbWUgPT09IGQubmFtZSAmJiBlbnRyeS5zZXJpZXMgPT09IGQuc2VyaWVzO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVtICE9PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==