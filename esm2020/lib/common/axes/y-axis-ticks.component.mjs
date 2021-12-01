import { Component, Input, Output, ViewChild, EventEmitter, ChangeDetectionStrategy, PLATFORM_ID, Inject } from '@angular/core';
import { trimLabel } from '../trim-label.helper';
import { reduceTicks } from './ticks.helper';
import { roundedRect } from '../../common/shape.helper';
import { isPlatformBrowser } from '@angular/common';
import { Orientation } from '../types/orientation.enum';
import { TextAnchor } from '../types/text-anchor.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["ticksel"];
const _c1 = ["ngx-charts-y-axis-ticks", ""];
function YAxisTicksComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 4);
    i0.ɵɵelementStart(1, "title");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "text", 5);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("transform", ctx_r1.transform(tick_r5));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.tickFormat(tick_r5));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("font-size", "12px");
    i0.ɵɵattribute("dy", ctx_r1.dy)("x", ctx_r1.x1)("y", ctx_r1.y1)("text-anchor", ctx_r1.textAnchor);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.tickTrim(ctx_r1.tickFormat(tick_r5)), " ");
} }
function YAxisTicksComponent__svg_path_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "path", 6);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("d", ctx_r2.referenceAreaPath)("transform", ctx_r2.gridLineTransform());
} }
function YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "line", 9);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("x2", ctx_r8.gridLineWidth);
} }
function YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "line", 9);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("x2", -ctx_r9.gridLineWidth);
} }
function YAxisTicksComponent__svg_g_4__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵtemplate(1, YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_1_Template, 1, 1, "line", 8);
    i0.ɵɵtemplate(2, YAxisTicksComponent__svg_g_4__svg_g_1__svg_line_2_Template, 1, 1, "line", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("transform", ctx_r7.gridLineTransform());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.orient === ctx_r7.Orientation.Left);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.orient === ctx_r7.Orientation.Right);
} }
function YAxisTicksComponent__svg_g_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵtemplate(1, YAxisTicksComponent__svg_g_4__svg_g_1_Template, 3, 3, "g", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r6 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵattribute("transform", ctx_r3.transform(tick_r6));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.showGridLines);
} }
function YAxisTicksComponent__svg_g_5__svg_g_1__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelementStart(1, "title");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "text", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const refLine_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r12.tickTrim(ctx_r12.tickFormat(refLine_r10.value)));
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("dy", ctx_r12.dy)("y", -6)("x", ctx_r12.gridLineWidth)("text-anchor", ctx_r12.textAnchor);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", refLine_r10.name, " ");
} }
function YAxisTicksComponent__svg_g_5__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelement(1, "line", 10);
    i0.ɵɵtemplate(2, YAxisTicksComponent__svg_g_5__svg_g_1__svg_g_2_Template, 5, 6, "g", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const refLine_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵattribute("transform", ctx_r11.transform(refLine_r10.value));
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("x2", ctx_r11.gridLineWidth)("transform", ctx_r11.gridLineTransform());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.showRefLabels);
} }
function YAxisTicksComponent__svg_g_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵtemplate(1, YAxisTicksComponent__svg_g_5__svg_g_1_Template, 3, 4, "g", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.showRefLines);
} }
export class YAxisTicksComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.tickArguments = [5];
        this.tickStroke = '#ccc';
        this.trimTicks = true;
        this.maxTickLength = 16;
        this.showGridLines = false;
        this.showRefLabels = false;
        this.showRefLines = false;
        this.dimensionsChanged = new EventEmitter();
        this.innerTickSize = 6;
        this.tickPadding = 3;
        this.verticalSpacing = 20;
        this.textAnchor = TextAnchor.Middle;
        this.width = 0;
        this.outerTickSize = 6;
        this.rotateLabels = false;
        this.referenceLineLength = 0;
        this.Orientation = Orientation;
    }
    ngOnChanges(changes) {
        this.update();
    }
    ngAfterViewInit() {
        setTimeout(() => this.updateDims());
    }
    updateDims() {
        if (!isPlatformBrowser(this.platformId)) {
            // for SSR, use approximate value instead of measured
            this.width = this.getApproximateAxisWidth();
            this.dimensionsChanged.emit({ width: this.width });
            return;
        }
        const width = parseInt(this.ticksElement.nativeElement.getBoundingClientRect().width, 10);
        if (width !== this.width) {
            this.width = width;
            this.dimensionsChanged.emit({ width });
            setTimeout(() => this.updateDims());
        }
    }
    update() {
        let scale;
        const sign = this.orient === Orientation.Top || this.orient === Orientation.Right ? -1 : 1;
        this.tickSpacing = Math.max(this.innerTickSize, 0) + this.tickPadding;
        scale = this.scale;
        this.ticks = this.getTicks();
        if (this.tickFormatting) {
            this.tickFormat = this.tickFormatting;
        }
        else if (scale.tickFormat) {
            this.tickFormat = scale.tickFormat.apply(scale, this.tickArguments);
        }
        else {
            this.tickFormat = function (d) {
                if (d.constructor.name === 'Date') {
                    return d.toLocaleDateString();
                }
                return d.toLocaleString();
            };
        }
        this.adjustedScale = scale.bandwidth
            ? function (d) {
                return scale(d) + scale.bandwidth() * 0.5;
            }
            : scale;
        if (this.showRefLines && this.referenceLines) {
            this.setReferencelines();
        }
        switch (this.orient) {
            case Orientation.Top:
                this.transform = function (tick) {
                    return 'translate(' + this.adjustedScale(tick) + ',0)';
                };
                this.textAnchor = TextAnchor.Middle;
                this.y2 = this.innerTickSize * sign;
                this.y1 = this.tickSpacing * sign;
                this.dy = sign < 0 ? '0em' : '.71em';
                break;
            case Orientation.Bottom:
                this.transform = function (tick) {
                    return 'translate(' + this.adjustedScale(tick) + ',0)';
                };
                this.textAnchor = TextAnchor.Middle;
                this.y2 = this.innerTickSize * sign;
                this.y1 = this.tickSpacing * sign;
                this.dy = sign < 0 ? '0em' : '.71em';
                break;
            case Orientation.Left:
                this.transform = function (tick) {
                    return 'translate(0,' + this.adjustedScale(tick) + ')';
                };
                this.textAnchor = TextAnchor.End;
                this.x2 = this.innerTickSize * -sign;
                this.x1 = this.tickSpacing * -sign;
                this.dy = '.32em';
                break;
            case Orientation.Right:
                this.transform = function (tick) {
                    return 'translate(0,' + this.adjustedScale(tick) + ')';
                };
                this.textAnchor = TextAnchor.Start;
                this.x2 = this.innerTickSize * -sign;
                this.x1 = this.tickSpacing * -sign;
                this.dy = '.32em';
                break;
            default:
        }
        setTimeout(() => this.updateDims());
    }
    setReferencelines() {
        this.refMin = this.adjustedScale(Math.min.apply(null, this.referenceLines.map(item => item.value)));
        this.refMax = this.adjustedScale(Math.max.apply(null, this.referenceLines.map(item => item.value)));
        this.referenceLineLength = this.referenceLines.length;
        this.referenceAreaPath = roundedRect(0, this.refMax, this.gridLineWidth, this.refMin - this.refMax, 0, [
            false,
            false,
            false,
            false
        ]);
    }
    getTicks() {
        let ticks;
        const maxTicks = this.getMaxTicks(20);
        const maxScaleTicks = this.getMaxTicks(50);
        if (this.tickValues) {
            ticks = this.tickValues;
        }
        else if (this.scale.ticks) {
            ticks = this.scale.ticks.apply(this.scale, [maxScaleTicks]);
        }
        else {
            ticks = this.scale.domain();
            ticks = reduceTicks(ticks, maxTicks);
        }
        return ticks;
    }
    getMaxTicks(tickHeight) {
        return Math.floor(this.height / tickHeight);
    }
    tickTransform(tick) {
        return `translate(${this.adjustedScale(tick)},${this.verticalSpacing})`;
    }
    gridLineTransform() {
        return `translate(5,0)`;
    }
    tickTrim(label) {
        return this.trimTicks ? trimLabel(label, this.maxTickLength) : label;
    }
    getApproximateAxisWidth() {
        const maxChars = Math.max(...this.ticks.map(t => this.tickTrim(this.tickFormat(t)).length));
        const charWidth = 7;
        return maxChars * charWidth;
    }
}
YAxisTicksComponent.ɵfac = function YAxisTicksComponent_Factory(t) { return new (t || YAxisTicksComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID)); };
YAxisTicksComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: YAxisTicksComponent, selectors: [["g", "ngx-charts-y-axis-ticks", ""]], viewQuery: function YAxisTicksComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ticksElement = _t.first);
    } }, inputs: { scale: "scale", orient: "orient", tickArguments: "tickArguments", tickValues: "tickValues", tickStroke: "tickStroke", trimTicks: "trimTicks", maxTickLength: "maxTickLength", tickFormatting: "tickFormatting", showGridLines: "showGridLines", gridLineWidth: "gridLineWidth", height: "height", referenceLines: "referenceLines", showRefLabels: "showRefLabels", showRefLines: "showRefLines" }, outputs: { dimensionsChanged: "dimensionsChanged" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c1, decls: 6, vars: 4, consts: [["ticksel", ""], ["class", "tick", 4, "ngFor", "ngForOf"], ["class", "reference-area", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "tick"], ["stroke-width", "0.01"], [1, "reference-area"], [4, "ngIf"], ["class", "gridline-path gridline-path-horizontal", "x1", "0", 4, "ngIf"], ["x1", "0", 1, "gridline-path", "gridline-path-horizontal"], ["x1", "0", 1, "refline-path", "gridline-path-horizontal"], [1, "refline-label"]], template: function YAxisTicksComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g", null, 0);
        i0.ɵɵtemplate(2, YAxisTicksComponent__svg_g_2_Template, 5, 9, "g", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, YAxisTicksComponent__svg_path_3_Template, 1, 2, "path", 2);
        i0.ɵɵtemplate(4, YAxisTicksComponent__svg_g_4_Template, 2, 2, "g", 3);
        i0.ɵɵtemplate(5, YAxisTicksComponent__svg_g_5_Template, 2, 1, "g", 3);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.ticks);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.referenceLineLength > 1 && ctx.refMax && ctx.refMin && ctx.showRefLines);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.ticks);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.referenceLines);
    } }, directives: [i1.NgForOf, i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YAxisTicksComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-y-axis-ticks]',
                template: `
    <svg:g #ticksel>
      <svg:g *ngFor="let tick of ticks" class="tick" [attr.transform]="transform(tick)">
        <title>{{ tickFormat(tick) }}</title>
        <svg:text
          stroke-width="0.01"
          [attr.dy]="dy"
          [attr.x]="x1"
          [attr.y]="y1"
          [attr.text-anchor]="textAnchor"
          [style.font-size]="'12px'"
        >
          {{ tickTrim(tickFormat(tick)) }}
        </svg:text>
      </svg:g>
    </svg:g>

    <svg:path
      *ngIf="referenceLineLength > 1 && refMax && refMin && showRefLines"
      class="reference-area"
      [attr.d]="referenceAreaPath"
      [attr.transform]="gridLineTransform()"
    />
    <svg:g *ngFor="let tick of ticks" [attr.transform]="transform(tick)">
      <svg:g *ngIf="showGridLines" [attr.transform]="gridLineTransform()">
        <svg:line
          *ngIf="orient === Orientation.Left"
          class="gridline-path gridline-path-horizontal"
          x1="0"
          [attr.x2]="gridLineWidth"
        />
        <svg:line
          *ngIf="orient === Orientation.Right"
          class="gridline-path gridline-path-horizontal"
          x1="0"
          [attr.x2]="-gridLineWidth"
        />
      </svg:g>
    </svg:g>

    <svg:g *ngFor="let refLine of referenceLines">
      <svg:g *ngIf="showRefLines" [attr.transform]="transform(refLine.value)">
        <svg:line
          class="refline-path gridline-path-horizontal"
          x1="0"
          [attr.x2]="gridLineWidth"
          [attr.transform]="gridLineTransform()"
        />
        <svg:g *ngIf="showRefLabels">
          <title>{{ tickTrim(tickFormat(refLine.value)) }}</title>
          <svg:text
            class="refline-label"
            [attr.dy]="dy"
            [attr.y]="-6"
            [attr.x]="gridLineWidth"
            [attr.text-anchor]="textAnchor"
          >
            {{ refLine.name }}
          </svg:text>
        </svg:g>
      </svg:g>
    </svg:g>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { scale: [{
            type: Input
        }], orient: [{
            type: Input
        }], tickArguments: [{
            type: Input
        }], tickValues: [{
            type: Input
        }], tickStroke: [{
            type: Input
        }], trimTicks: [{
            type: Input
        }], maxTickLength: [{
            type: Input
        }], tickFormatting: [{
            type: Input
        }], showGridLines: [{
            type: Input
        }], gridLineWidth: [{
            type: Input
        }], height: [{
            type: Input
        }], referenceLines: [{
            type: Input
        }], showRefLabels: [{
            type: Input
        }], showRefLines: [{
            type: Input
        }], dimensionsChanged: [{
            type: Output
        }], ticksElement: [{
            type: ViewChild,
            args: ['ticksel']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieS1heGlzLXRpY2tzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9jb21tb24vYXhlcy95LWF4aXMtdGlja3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFHTixTQUFTLEVBQ1QsWUFBWSxFQUVaLHVCQUF1QixFQUV2QixXQUFXLEVBQ1gsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7SUFNakQsNEJBQWtGO0lBQ2hGLDZCQUFPO0lBQUEsWUFBc0I7SUFBQSxpQkFBUTtJQUNyQywrQkFPQztJQUNDLFlBQ0Y7SUFBQSxpQkFBVztJQUNiLGlCQUFROzs7O0lBWnVDLHNEQUFrQztJQUN4RSxlQUFzQjtJQUF0QixnREFBc0I7SUFPM0IsZUFBMEI7SUFBMUIsbUNBQTBCO0lBSjFCLCtCQUFjLGdCQUFBLGdCQUFBLGtDQUFBO0lBTWQsZUFDRjtJQURFLDRFQUNGOzs7O0lBSUosMEJBS0U7OztJQUZBLDZDQUE0Qix5Q0FBQTs7OztJQUsxQiwwQkFLRTs7O0lBREEsMENBQXlCOzs7O0lBRTNCLDBCQUtFOzs7SUFEQSwyQ0FBMEI7Ozs7SUFYOUIseUJBQW9FO0lBQ2xFLDZGQUtFO0lBQ0YsNkZBS0U7SUFDSixpQkFBUTs7O0lBYnFCLHVEQUFzQztJQUU5RCxlQUFpQztJQUFqQyxnRUFBaUM7SUFNakMsZUFBa0M7SUFBbEMsaUVBQWtDOzs7O0lBVHpDLHlCQUFxRTtJQUNuRSw4RUFhUTtJQUNWLGlCQUFROzs7O0lBZjBCLHNEQUFrQztJQUMxRCxlQUFtQjtJQUFuQiwyQ0FBbUI7Ozs7SUF3QnpCLHlCQUE2QjtJQUMzQiw2QkFBTztJQUFBLFlBQXlDO0lBQUEsaUJBQVE7SUFDeEQsZ0NBTUM7SUFDQyxZQUNGO0lBQUEsaUJBQVc7SUFDYixpQkFBUTs7OztJQVZDLGVBQXlDO0lBQXpDLDZFQUF5QztJQUc5QyxlQUFjO0lBQWQsZ0NBQWMsU0FBQSw0QkFBQSxtQ0FBQTtJQUtkLGVBQ0Y7SUFERSxpREFDRjs7OztJQWpCSix5QkFBd0U7SUFDdEUsMkJBS0U7SUFDRix1RkFXUTtJQUNWLGlCQUFROzs7O0lBbkJvQixpRUFBMkM7SUFJbkUsZUFBeUI7SUFBekIsMkNBQXlCLDBDQUFBO0lBR25CLGVBQW1CO0lBQW5CLDRDQUFtQjs7OztJQVIvQix5QkFBOEM7SUFDNUMsOEVBbUJRO0lBQ1YsaUJBQVE7OztJQXBCRSxlQUFrQjtJQUFsQiwwQ0FBa0I7O0FBd0JoQyxNQUFNLE9BQU8sbUJBQW1CO0lBNEM5QixZQUF5QyxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQXpDL0Msa0JBQWEsR0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlCLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDcEIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUUzQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUkvQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU3QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBZSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBVTNDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFHOUIsd0JBQW1CLEdBQVcsQ0FBQyxDQUFDO1FBR3ZCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO0lBSXdCLENBQUM7SUFFNUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMscURBQXFEO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNuRCxPQUFPO1NBQ1I7UUFFRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUYsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN2QyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksS0FBSyxDQUFDO1FBQ1YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXRFLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTdCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDdkM7YUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3JFO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQ2pDLE9BQU8sQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7aUJBQy9CO2dCQUNELE9BQU8sQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsU0FBUztZQUNsQyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNULE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDNUMsQ0FBQztZQUNILENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFVixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM1QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtRQUVELFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQixLQUFLLFdBQVcsQ0FBQyxHQUFHO2dCQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsSUFBSTtvQkFDN0IsT0FBTyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pELENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JDLE1BQU07WUFDUixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsSUFBSTtvQkFDN0IsT0FBTyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pELENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JDLE1BQU07WUFDUixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsSUFBSTtvQkFDN0IsT0FBTyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ3pELENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDckMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztnQkFDbEIsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDLEtBQUs7Z0JBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxJQUFJO29CQUM3QixPQUFPLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDekQsQ0FBQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDbkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO2dCQUNsQixNQUFNO1lBQ1IsUUFBUTtTQUNUO1FBQ0QsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUNaLElBQUksRUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDNUMsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FDWixJQUFJLEVBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQzVDLENBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUV0RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUNyRyxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLEtBQUssQ0FBQztRQUNWLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUzQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDekI7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQzNCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7YUFBTTtZQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsV0FBVyxDQUFDLFVBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBWTtRQUN4QixPQUFPLGFBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUM7SUFDMUUsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN2RSxDQUFDO0lBRUQsdUJBQXVCO1FBQ3JCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUYsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDOztzRkEzTVUsbUJBQW1CLHVCQTRDVixXQUFXO3NFQTVDcEIsbUJBQW1COzs7Ozs7UUFoRTVCLG1CQUFnQjtRQUFoQixrQ0FBZ0I7UUFDZCxxRUFZUTtRQUNWLGlCQUFRO1FBRVIsMkVBS0U7UUFDRixxRUFlUTtRQUVSLHFFQXFCUTs7UUEzRGtCLGVBQVE7UUFBUixtQ0FBUTtRQWdCL0IsZUFBaUU7UUFBakUsa0dBQWlFO1FBSzVDLGVBQVE7UUFBUixtQ0FBUTtRQWlCTCxlQUFpQjtRQUFqQiw0Q0FBaUI7O3VGQXlCbkMsbUJBQW1CO2NBbkUvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThEVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7c0JBNkNjLE1BQU07dUJBQUMsV0FBVzt3QkEzQ3RCLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBRUksaUJBQWlCO2tCQUExQixNQUFNO1lBMEJlLFlBQVk7a0JBQWpDLFNBQVM7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25DaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmltTGFiZWwgfSBmcm9tICcuLi90cmltLWxhYmVsLmhlbHBlcic7XG5pbXBvcnQgeyByZWR1Y2VUaWNrcyB9IGZyb20gJy4vdGlja3MuaGVscGVyJztcbmltcG9ydCB7IHJvdW5kZWRSZWN0IH0gZnJvbSAnLi4vLi4vY29tbW9uL3NoYXBlLmhlbHBlcic7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPcmllbnRhdGlvbiB9IGZyb20gJy4uL3R5cGVzL29yaWVudGF0aW9uLmVudW0nO1xuaW1wb3J0IHsgVGV4dEFuY2hvciB9IGZyb20gJy4uL3R5cGVzL3RleHQtYW5jaG9yLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW25neC1jaGFydHMteS1heGlzLXRpY2tzXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZzpnICN0aWNrc2VsPlxuICAgICAgPHN2ZzpnICpuZ0Zvcj1cImxldCB0aWNrIG9mIHRpY2tzXCIgY2xhc3M9XCJ0aWNrXCIgW2F0dHIudHJhbnNmb3JtXT1cInRyYW5zZm9ybSh0aWNrKVwiPlxuICAgICAgICA8dGl0bGU+e3sgdGlja0Zvcm1hdCh0aWNrKSB9fTwvdGl0bGU+XG4gICAgICAgIDxzdmc6dGV4dFxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjAuMDFcIlxuICAgICAgICAgIFthdHRyLmR5XT1cImR5XCJcbiAgICAgICAgICBbYXR0ci54XT1cIngxXCJcbiAgICAgICAgICBbYXR0ci55XT1cInkxXCJcbiAgICAgICAgICBbYXR0ci50ZXh0LWFuY2hvcl09XCJ0ZXh0QW5jaG9yXCJcbiAgICAgICAgICBbc3R5bGUuZm9udC1zaXplXT1cIicxMnB4J1wiXG4gICAgICAgID5cbiAgICAgICAgICB7eyB0aWNrVHJpbSh0aWNrRm9ybWF0KHRpY2spKSB9fVxuICAgICAgICA8L3N2Zzp0ZXh0PlxuICAgICAgPC9zdmc6Zz5cbiAgICA8L3N2ZzpnPlxuXG4gICAgPHN2ZzpwYXRoXG4gICAgICAqbmdJZj1cInJlZmVyZW5jZUxpbmVMZW5ndGggPiAxICYmIHJlZk1heCAmJiByZWZNaW4gJiYgc2hvd1JlZkxpbmVzXCJcbiAgICAgIGNsYXNzPVwicmVmZXJlbmNlLWFyZWFcIlxuICAgICAgW2F0dHIuZF09XCJyZWZlcmVuY2VBcmVhUGF0aFwiXG4gICAgICBbYXR0ci50cmFuc2Zvcm1dPVwiZ3JpZExpbmVUcmFuc2Zvcm0oKVwiXG4gICAgLz5cbiAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IHRpY2sgb2YgdGlja3NcIiBbYXR0ci50cmFuc2Zvcm1dPVwidHJhbnNmb3JtKHRpY2spXCI+XG4gICAgICA8c3ZnOmcgKm5nSWY9XCJzaG93R3JpZExpbmVzXCIgW2F0dHIudHJhbnNmb3JtXT1cImdyaWRMaW5lVHJhbnNmb3JtKClcIj5cbiAgICAgICAgPHN2ZzpsaW5lXG4gICAgICAgICAgKm5nSWY9XCJvcmllbnQgPT09IE9yaWVudGF0aW9uLkxlZnRcIlxuICAgICAgICAgIGNsYXNzPVwiZ3JpZGxpbmUtcGF0aCBncmlkbGluZS1wYXRoLWhvcml6b250YWxcIlxuICAgICAgICAgIHgxPVwiMFwiXG4gICAgICAgICAgW2F0dHIueDJdPVwiZ3JpZExpbmVXaWR0aFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzdmc6bGluZVxuICAgICAgICAgICpuZ0lmPVwib3JpZW50ID09PSBPcmllbnRhdGlvbi5SaWdodFwiXG4gICAgICAgICAgY2xhc3M9XCJncmlkbGluZS1wYXRoIGdyaWRsaW5lLXBhdGgtaG9yaXpvbnRhbFwiXG4gICAgICAgICAgeDE9XCIwXCJcbiAgICAgICAgICBbYXR0ci54Ml09XCItZ3JpZExpbmVXaWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L3N2ZzpnPlxuICAgIDwvc3ZnOmc+XG5cbiAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IHJlZkxpbmUgb2YgcmVmZXJlbmNlTGluZXNcIj5cbiAgICAgIDxzdmc6ZyAqbmdJZj1cInNob3dSZWZMaW5lc1wiIFthdHRyLnRyYW5zZm9ybV09XCJ0cmFuc2Zvcm0ocmVmTGluZS52YWx1ZSlcIj5cbiAgICAgICAgPHN2ZzpsaW5lXG4gICAgICAgICAgY2xhc3M9XCJyZWZsaW5lLXBhdGggZ3JpZGxpbmUtcGF0aC1ob3Jpem9udGFsXCJcbiAgICAgICAgICB4MT1cIjBcIlxuICAgICAgICAgIFthdHRyLngyXT1cImdyaWRMaW5lV2lkdGhcIlxuICAgICAgICAgIFthdHRyLnRyYW5zZm9ybV09XCJncmlkTGluZVRyYW5zZm9ybSgpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHN2ZzpnICpuZ0lmPVwic2hvd1JlZkxhYmVsc1wiPlxuICAgICAgICAgIDx0aXRsZT57eyB0aWNrVHJpbSh0aWNrRm9ybWF0KHJlZkxpbmUudmFsdWUpKSB9fTwvdGl0bGU+XG4gICAgICAgICAgPHN2Zzp0ZXh0XG4gICAgICAgICAgICBjbGFzcz1cInJlZmxpbmUtbGFiZWxcIlxuICAgICAgICAgICAgW2F0dHIuZHldPVwiZHlcIlxuICAgICAgICAgICAgW2F0dHIueV09XCItNlwiXG4gICAgICAgICAgICBbYXR0ci54XT1cImdyaWRMaW5lV2lkdGhcIlxuICAgICAgICAgICAgW2F0dHIudGV4dC1hbmNob3JdPVwidGV4dEFuY2hvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgcmVmTGluZS5uYW1lIH19XG4gICAgICAgICAgPC9zdmc6dGV4dD5cbiAgICAgICAgPC9zdmc6Zz5cbiAgICAgIDwvc3ZnOmc+XG4gICAgPC9zdmc6Zz5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgWUF4aXNUaWNrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHNjYWxlO1xuICBASW5wdXQoKSBvcmllbnQ6IE9yaWVudGF0aW9uO1xuICBASW5wdXQoKSB0aWNrQXJndW1lbnRzOiBudW1iZXJbXSA9IFs1XTtcbiAgQElucHV0KCkgdGlja1ZhbHVlczogc3RyaW5nW10gfCBudW1iZXJbXTtcbiAgQElucHV0KCkgdGlja1N0cm9rZSA9ICcjY2NjJztcbiAgQElucHV0KCkgdHJpbVRpY2tzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbWF4VGlja0xlbmd0aDogbnVtYmVyID0gMTY7XG4gIEBJbnB1dCgpIHRpY2tGb3JtYXR0aW5nO1xuICBASW5wdXQoKSBzaG93R3JpZExpbmVzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGdyaWRMaW5lV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHJlZmVyZW5jZUxpbmVzO1xuICBASW5wdXQoKSBzaG93UmVmTGFiZWxzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dSZWZMaW5lczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBkaW1lbnNpb25zQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpbm5lclRpY2tTaXplOiBudW1iZXIgPSA2O1xuICB0aWNrUGFkZGluZzogbnVtYmVyID0gMztcbiAgdGlja1NwYWNpbmc6IG51bWJlcjtcbiAgdmVydGljYWxTcGFjaW5nOiBudW1iZXIgPSAyMDtcbiAgdGV4dEFuY2hvcjogVGV4dEFuY2hvciA9IFRleHRBbmNob3IuTWlkZGxlO1xuICBkeTogc3RyaW5nO1xuICB4MTogbnVtYmVyO1xuICB4MjogbnVtYmVyO1xuICB5MTogbnVtYmVyO1xuICB5MjogbnVtYmVyO1xuICBhZGp1c3RlZFNjYWxlOiBhbnk7XG4gIHRyYW5zZm9ybTogKG86IGFueSkgPT4gc3RyaW5nO1xuICB0aWNrRm9ybWF0OiAobzogYW55KSA9PiBzdHJpbmc7XG4gIHRpY2tzOiBhbnlbXTtcbiAgd2lkdGg6IG51bWJlciA9IDA7XG4gIG91dGVyVGlja1NpemU6IG51bWJlciA9IDY7XG4gIHJvdGF0ZUxhYmVsczogYm9vbGVhbiA9IGZhbHNlO1xuICByZWZNYXg6IG51bWJlcjtcbiAgcmVmTWluOiBudW1iZXI7XG4gIHJlZmVyZW5jZUxpbmVMZW5ndGg6IG51bWJlciA9IDA7XG4gIHJlZmVyZW5jZUFyZWFQYXRoOiBzdHJpbmc7XG5cbiAgcmVhZG9ubHkgT3JpZW50YXRpb24gPSBPcmllbnRhdGlvbjtcblxuICBAVmlld0NoaWxkKCd0aWNrc2VsJykgdGlja3NFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVEaW1zKCkpO1xuICB9XG5cbiAgdXBkYXRlRGltcygpOiB2b2lkIHtcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIC8vIGZvciBTU1IsIHVzZSBhcHByb3hpbWF0ZSB2YWx1ZSBpbnN0ZWFkIG9mIG1lYXN1cmVkXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5nZXRBcHByb3hpbWF0ZUF4aXNXaWR0aCgpO1xuICAgICAgdGhpcy5kaW1lbnNpb25zQ2hhbmdlZC5lbWl0KHsgd2lkdGg6IHRoaXMud2lkdGggfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgd2lkdGggPSBwYXJzZUludCh0aGlzLnRpY2tzRWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLCAxMCk7XG4gICAgaWYgKHdpZHRoICE9PSB0aGlzLndpZHRoKSB7XG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmRpbWVuc2lvbnNDaGFuZ2VkLmVtaXQoeyB3aWR0aCB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVEaW1zKCkpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBsZXQgc2NhbGU7XG4gICAgY29uc3Qgc2lnbiA9IHRoaXMub3JpZW50ID09PSBPcmllbnRhdGlvbi5Ub3AgfHwgdGhpcy5vcmllbnQgPT09IE9yaWVudGF0aW9uLlJpZ2h0ID8gLTEgOiAxO1xuICAgIHRoaXMudGlja1NwYWNpbmcgPSBNYXRoLm1heCh0aGlzLmlubmVyVGlja1NpemUsIDApICsgdGhpcy50aWNrUGFkZGluZztcblxuICAgIHNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICB0aGlzLnRpY2tzID0gdGhpcy5nZXRUaWNrcygpO1xuXG4gICAgaWYgKHRoaXMudGlja0Zvcm1hdHRpbmcpIHtcbiAgICAgIHRoaXMudGlja0Zvcm1hdCA9IHRoaXMudGlja0Zvcm1hdHRpbmc7XG4gICAgfSBlbHNlIGlmIChzY2FsZS50aWNrRm9ybWF0KSB7XG4gICAgICB0aGlzLnRpY2tGb3JtYXQgPSBzY2FsZS50aWNrRm9ybWF0LmFwcGx5KHNjYWxlLCB0aGlzLnRpY2tBcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpY2tGb3JtYXQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAoZC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRGF0ZScpIHtcbiAgICAgICAgICByZXR1cm4gZC50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZC50b0xvY2FsZVN0cmluZygpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmFkanVzdGVkU2NhbGUgPSBzY2FsZS5iYW5kd2lkdGhcbiAgICAgID8gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2NhbGUoZCkgKyBzY2FsZS5iYW5kd2lkdGgoKSAqIDAuNTtcbiAgICAgICAgfVxuICAgICAgOiBzY2FsZTtcblxuICAgIGlmICh0aGlzLnNob3dSZWZMaW5lcyAmJiB0aGlzLnJlZmVyZW5jZUxpbmVzKSB7XG4gICAgICB0aGlzLnNldFJlZmVyZW5jZWxpbmVzKCk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLm9yaWVudCkge1xuICAgICAgY2FzZSBPcmllbnRhdGlvbi5Ub3A6XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gZnVuY3Rpb24gKHRpY2spIHtcbiAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgdGhpcy5hZGp1c3RlZFNjYWxlKHRpY2spICsgJywwKSc7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudGV4dEFuY2hvciA9IFRleHRBbmNob3IuTWlkZGxlO1xuICAgICAgICB0aGlzLnkyID0gdGhpcy5pbm5lclRpY2tTaXplICogc2lnbjtcbiAgICAgICAgdGhpcy55MSA9IHRoaXMudGlja1NwYWNpbmcgKiBzaWduO1xuICAgICAgICB0aGlzLmR5ID0gc2lnbiA8IDAgPyAnMGVtJyA6ICcuNzFlbSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBPcmllbnRhdGlvbi5Cb3R0b206XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gZnVuY3Rpb24gKHRpY2spIHtcbiAgICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgdGhpcy5hZGp1c3RlZFNjYWxlKHRpY2spICsgJywwKSc7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudGV4dEFuY2hvciA9IFRleHRBbmNob3IuTWlkZGxlO1xuICAgICAgICB0aGlzLnkyID0gdGhpcy5pbm5lclRpY2tTaXplICogc2lnbjtcbiAgICAgICAgdGhpcy55MSA9IHRoaXMudGlja1NwYWNpbmcgKiBzaWduO1xuICAgICAgICB0aGlzLmR5ID0gc2lnbiA8IDAgPyAnMGVtJyA6ICcuNzFlbSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBPcmllbnRhdGlvbi5MZWZ0OlxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh0aWNrKSB7XG4gICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoMCwnICsgdGhpcy5hZGp1c3RlZFNjYWxlKHRpY2spICsgJyknO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRleHRBbmNob3IgPSBUZXh0QW5jaG9yLkVuZDtcbiAgICAgICAgdGhpcy54MiA9IHRoaXMuaW5uZXJUaWNrU2l6ZSAqIC1zaWduO1xuICAgICAgICB0aGlzLngxID0gdGhpcy50aWNrU3BhY2luZyAqIC1zaWduO1xuICAgICAgICB0aGlzLmR5ID0gJy4zMmVtJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE9yaWVudGF0aW9uLlJpZ2h0OlxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh0aWNrKSB7XG4gICAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUoMCwnICsgdGhpcy5hZGp1c3RlZFNjYWxlKHRpY2spICsgJyknO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRleHRBbmNob3IgPSBUZXh0QW5jaG9yLlN0YXJ0O1xuICAgICAgICB0aGlzLngyID0gdGhpcy5pbm5lclRpY2tTaXplICogLXNpZ247XG4gICAgICAgIHRoaXMueDEgPSB0aGlzLnRpY2tTcGFjaW5nICogLXNpZ247XG4gICAgICAgIHRoaXMuZHkgPSAnLjMyZW0nO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVEaW1zKCkpO1xuICB9XG5cbiAgc2V0UmVmZXJlbmNlbGluZXMoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZNaW4gPSB0aGlzLmFkanVzdGVkU2NhbGUoXG4gICAgICBNYXRoLm1pbi5hcHBseShcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VMaW5lcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKVxuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5yZWZNYXggPSB0aGlzLmFkanVzdGVkU2NhbGUoXG4gICAgICBNYXRoLm1heC5hcHBseShcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VMaW5lcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKVxuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5yZWZlcmVuY2VMaW5lTGVuZ3RoID0gdGhpcy5yZWZlcmVuY2VMaW5lcy5sZW5ndGg7XG5cbiAgICB0aGlzLnJlZmVyZW5jZUFyZWFQYXRoID0gcm91bmRlZFJlY3QoMCwgdGhpcy5yZWZNYXgsIHRoaXMuZ3JpZExpbmVXaWR0aCwgdGhpcy5yZWZNaW4gLSB0aGlzLnJlZk1heCwgMCwgW1xuICAgICAgZmFsc2UsXG4gICAgICBmYWxzZSxcbiAgICAgIGZhbHNlLFxuICAgICAgZmFsc2VcbiAgICBdKTtcbiAgfVxuXG4gIGdldFRpY2tzKCk6IGFueVtdIHtcbiAgICBsZXQgdGlja3M7XG4gICAgY29uc3QgbWF4VGlja3MgPSB0aGlzLmdldE1heFRpY2tzKDIwKTtcbiAgICBjb25zdCBtYXhTY2FsZVRpY2tzID0gdGhpcy5nZXRNYXhUaWNrcyg1MCk7XG5cbiAgICBpZiAodGhpcy50aWNrVmFsdWVzKSB7XG4gICAgICB0aWNrcyA9IHRoaXMudGlja1ZhbHVlcztcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NhbGUudGlja3MpIHtcbiAgICAgIHRpY2tzID0gdGhpcy5zY2FsZS50aWNrcy5hcHBseSh0aGlzLnNjYWxlLCBbbWF4U2NhbGVUaWNrc10pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWNrcyA9IHRoaXMuc2NhbGUuZG9tYWluKCk7XG4gICAgICB0aWNrcyA9IHJlZHVjZVRpY2tzKHRpY2tzLCBtYXhUaWNrcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpY2tzO1xuICB9XG5cbiAgZ2V0TWF4VGlja3ModGlja0hlaWdodDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIHRpY2tIZWlnaHQpO1xuICB9XG5cbiAgdGlja1RyYW5zZm9ybSh0aWNrOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgdHJhbnNsYXRlKCR7dGhpcy5hZGp1c3RlZFNjYWxlKHRpY2spfSwke3RoaXMudmVydGljYWxTcGFjaW5nfSlgO1xuICB9XG5cbiAgZ3JpZExpbmVUcmFuc2Zvcm0oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZSg1LDApYDtcbiAgfVxuXG4gIHRpY2tUcmltKGxhYmVsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRyaW1UaWNrcyA/IHRyaW1MYWJlbChsYWJlbCwgdGhpcy5tYXhUaWNrTGVuZ3RoKSA6IGxhYmVsO1xuICB9XG5cbiAgZ2V0QXBwcm94aW1hdGVBeGlzV2lkdGgoKTogbnVtYmVyIHtcbiAgICBjb25zdCBtYXhDaGFycyA9IE1hdGgubWF4KC4uLnRoaXMudGlja3MubWFwKHQgPT4gdGhpcy50aWNrVHJpbSh0aGlzLnRpY2tGb3JtYXQodCkpLmxlbmd0aCkpO1xuICAgIGNvbnN0IGNoYXJXaWR0aCA9IDc7XG4gICAgcmV0dXJuIG1heENoYXJzICogY2hhcldpZHRoO1xuICB9XG59XG4iXX0=