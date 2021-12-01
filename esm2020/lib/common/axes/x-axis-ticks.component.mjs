import { isPlatformBrowser } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy, Inject, PLATFORM_ID } from '@angular/core';
import { trimLabel } from '../trim-label.helper';
import { reduceTicks } from './ticks.helper';
import { TextAnchor } from '../types/text-anchor.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["ticksel"];
const _c1 = ["ngx-charts-x-axis-ticks", ""];
function XAxisTicksComponent__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 3);
    i0.ɵɵelementStart(1, "title");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "text", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("transform", ctx_r1.tickTransform(tick_r3));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.tickFormat(tick_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("font-size", "12px");
    i0.ɵɵattribute("text-anchor", ctx_r1.textAnchor)("transform", ctx_r1.textTransform);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.tickTrim(ctx_r1.tickFormat(tick_r3)), " ");
} }
function XAxisTicksComponent__svg_g_3__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelement(1, "line", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("transform", ctx_r5.gridLineTransform());
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("y1", -ctx_r5.gridLineHeight);
} }
function XAxisTicksComponent__svg_g_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵtemplate(1, XAxisTicksComponent__svg_g_3__svg_g_1_Template, 2, 2, "g", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tick_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("transform", ctx_r2.tickTransform(tick_r4));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.showGridLines);
} }
export class XAxisTicksComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.tickArguments = [5];
        this.tickStroke = '#ccc';
        this.trimTicks = true;
        this.maxTickLength = 16;
        this.showGridLines = false;
        this.rotateTicks = true;
        this.dimensionsChanged = new EventEmitter();
        this.verticalSpacing = 20;
        this.rotateLabels = false;
        this.innerTickSize = 6;
        this.outerTickSize = 6;
        this.tickPadding = 3;
        this.textAnchor = TextAnchor.Middle;
        this.maxTicksLength = 0;
        this.maxAllowedLength = 16;
        this.height = 0;
        this.approxHeight = 10;
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
            this.dimensionsChanged.emit({ height: this.approxHeight });
            return;
        }
        const height = parseInt(this.ticksElement.nativeElement.getBoundingClientRect().height, 10);
        if (height !== this.height) {
            this.height = height;
            this.dimensionsChanged.emit({ height: this.height });
            setTimeout(() => this.updateDims());
        }
    }
    update() {
        const scale = this.scale;
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
        const angle = this.rotateTicks ? this.getRotationAngle(this.ticks) : null;
        this.adjustedScale = this.scale.bandwidth
            ? function (d) {
                return this.scale(d) + this.scale.bandwidth() * 0.5;
            }
            : this.scale;
        this.textTransform = '';
        if (angle && angle !== 0) {
            this.textTransform = `rotate(${angle})`;
            this.textAnchor = TextAnchor.End;
            this.verticalSpacing = 10;
        }
        else {
            this.textAnchor = TextAnchor.Middle;
        }
        setTimeout(() => this.updateDims());
    }
    getRotationAngle(ticks) {
        let angle = 0;
        this.maxTicksLength = 0;
        for (let i = 0; i < ticks.length; i++) {
            const tick = this.tickFormat(ticks[i]).toString();
            let tickLength = tick.length;
            if (this.trimTicks) {
                tickLength = this.tickTrim(tick).length;
            }
            if (tickLength > this.maxTicksLength) {
                this.maxTicksLength = tickLength;
            }
        }
        const len = Math.min(this.maxTicksLength, this.maxAllowedLength);
        const charWidth = 7; // need to measure this
        const wordWidth = len * charWidth;
        let baseWidth = wordWidth;
        const maxBaseWidth = Math.floor(this.width / ticks.length);
        // calculate optimal angle
        while (baseWidth > maxBaseWidth && angle > -90) {
            angle -= 30;
            baseWidth = Math.cos(angle * (Math.PI / 180)) * wordWidth;
        }
        this.approxHeight = Math.max(Math.abs(Math.sin(angle * (Math.PI / 180)) * wordWidth), 10);
        return angle;
    }
    getTicks() {
        let ticks;
        const maxTicks = this.getMaxTicks(20);
        const maxScaleTicks = this.getMaxTicks(100);
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
    getMaxTicks(tickWidth) {
        return Math.floor(this.width / tickWidth);
    }
    tickTransform(tick) {
        return 'translate(' + this.adjustedScale(tick) + ',' + this.verticalSpacing + ')';
    }
    gridLineTransform() {
        return `translate(0,${-this.verticalSpacing - 5})`;
    }
    tickTrim(label) {
        return this.trimTicks ? trimLabel(label, this.maxTickLength) : label;
    }
}
XAxisTicksComponent.ɵfac = function XAxisTicksComponent_Factory(t) { return new (t || XAxisTicksComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID)); };
XAxisTicksComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: XAxisTicksComponent, selectors: [["g", "ngx-charts-x-axis-ticks", ""]], viewQuery: function XAxisTicksComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ticksElement = _t.first);
    } }, inputs: { scale: "scale", orient: "orient", tickArguments: "tickArguments", tickValues: "tickValues", tickStroke: "tickStroke", trimTicks: "trimTicks", maxTickLength: "maxTickLength", tickFormatting: "tickFormatting", showGridLines: "showGridLines", gridLineHeight: "gridLineHeight", width: "width", rotateTicks: "rotateTicks" }, outputs: { dimensionsChanged: "dimensionsChanged" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c1, decls: 4, vars: 2, consts: [["ticksel", ""], ["class", "tick", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "tick"], ["stroke-width", "0.01"], [4, "ngIf"], ["y2", "0", 1, "gridline-path", "gridline-path-vertical"]], template: function XAxisTicksComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "g", null, 0);
        i0.ɵɵtemplate(2, XAxisTicksComponent__svg_g_2_Template, 5, 7, "g", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, XAxisTicksComponent__svg_g_3_Template, 2, 2, "g", 2);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.ticks);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.ticks);
    } }, directives: [i1.NgForOf, i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(XAxisTicksComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-x-axis-ticks]',
                template: `
    <svg:g #ticksel>
      <svg:g *ngFor="let tick of ticks" class="tick" [attr.transform]="tickTransform(tick)">
        <title>{{ tickFormat(tick) }}</title>
        <svg:text
          stroke-width="0.01"
          [attr.text-anchor]="textAnchor"
          [attr.transform]="textTransform"
          [style.font-size]="'12px'"
        >
          {{ tickTrim(tickFormat(tick)) }}
        </svg:text>
      </svg:g>
    </svg:g>

    <svg:g *ngFor="let tick of ticks" [attr.transform]="tickTransform(tick)">
      <svg:g *ngIf="showGridLines" [attr.transform]="gridLineTransform()">
        <svg:line class="gridline-path gridline-path-vertical" [attr.y1]="-gridLineHeight" y2="0" />
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
        }], gridLineHeight: [{
            type: Input
        }], width: [{
            type: Input
        }], rotateTicks: [{
            type: Input
        }], dimensionsChanged: [{
            type: Output
        }], ticksElement: [{
            type: ViewChild,
            args: ['ticksel']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC1heGlzLXRpY2tzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9jb21tb24vYXhlcy94LWF4aXMtdGlja3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR1osU0FBUyxFQUdULHVCQUF1QixFQUN2QixNQUFNLEVBQ04sV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7O0lBTWpELDRCQUFzRjtJQUNwRiw2QkFBTztJQUFBLFlBQXNCO0lBQUEsaUJBQVE7SUFDckMsK0JBS0M7SUFDQyxZQUNGO0lBQUEsaUJBQVc7SUFDYixpQkFBUTs7OztJQVZ1QywwREFBc0M7SUFDNUUsZUFBc0I7SUFBdEIsZ0RBQXNCO0lBSzNCLGVBQTBCO0lBQTFCLG1DQUEwQjtJQUYxQixnREFBK0IsbUNBQUE7SUFJL0IsZUFDRjtJQURFLDRFQUNGOzs7O0lBS0YseUJBQW9FO0lBQ2xFLDBCQUE0RjtJQUM5RixpQkFBUTs7O0lBRnFCLHVEQUFzQztJQUNWLGVBQTJCO0lBQTNCLDRDQUEyQjs7OztJQUZ0Rix5QkFBeUU7SUFDdkUsOEVBRVE7SUFDVixpQkFBUTs7OztJQUowQiwwREFBc0M7SUFDOUQsZUFBbUI7SUFBbkIsMkNBQW1COztBQU9qQyxNQUFNLE9BQU8sbUJBQW1CO0lBaUM5QixZQUF5QyxVQUFlO1FBQWYsZUFBVSxH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bUI7Ozs7OztRQXRCNUIsbUJBQWdCO1FBQWhCLGtDQUFnQjtRQUNkLHFFQVVRO1FBQ1YsaUJBQVE7UUFFUixxRUFJUTs7UUFqQmtCLGVBQVE7UUFBUixtQ0FBUTtRQWFWLGVBQVE7UUFBUixtQ0FBUTs7dUZBUXZCLG1CQUFtQjtjQXpCL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O3NCQWtDYyxNQUFNO3VCQUFDLFdBQVc7d0JBaEN0QixLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFFSSxpQkFBaUI7a0JBQTFCLE1BQU07WUFpQmUsWUFBWTtrQkFBakMsU0FBUzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaW1MYWJlbCB9IGZyb20gJy4uL3RyaW0tbGFiZWwuaGVscGVyJztcbmltcG9ydCB7IHJlZHVjZVRpY2tzIH0gZnJvbSAnLi90aWNrcy5oZWxwZXInO1xuaW1wb3J0IHsgT3JpZW50YXRpb24gfSBmcm9tICcuLi90eXBlcy9vcmllbnRhdGlvbi5lbnVtJztcbmltcG9ydCB7IFRleHRBbmNob3IgfSBmcm9tICcuLi90eXBlcy90ZXh0LWFuY2hvci5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tuZ3gtY2hhcnRzLXgtYXhpcy10aWNrc10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmc6ZyAjdGlja3NlbD5cbiAgICAgIDxzdmc6ZyAqbmdGb3I9XCJsZXQgdGljayBvZiB0aWNrc1wiIGNsYXNzPVwidGlja1wiIFthdHRyLnRyYW5zZm9ybV09XCJ0aWNrVHJhbnNmb3JtKHRpY2spXCI+XG4gICAgICAgIDx0aXRsZT57eyB0aWNrRm9ybWF0KHRpY2spIH19PC90aXRsZT5cbiAgICAgICAgPHN2Zzp0ZXh0XG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMC4wMVwiXG4gICAgICAgICAgW2F0dHIudGV4dC1hbmNob3JdPVwidGV4dEFuY2hvclwiXG4gICAgICAgICAgW2F0dHIudHJhbnNmb3JtXT1cInRleHRUcmFuc2Zvcm1cIlxuICAgICAgICAgIFtzdHlsZS5mb250LXNpemVdPVwiJzEycHgnXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHRpY2tUcmltKHRpY2tGb3JtYXQodGljaykpIH19XG4gICAgICAgIDwvc3ZnOnRleHQ+XG4gICAgICA8L3N2ZzpnPlxuICAgIDwvc3ZnOmc+XG5cbiAgICA8c3ZnOmcgKm5nRm9yPVwibGV0IHRpY2sgb2YgdGlja3NcIiBbYXR0ci50cmFuc2Zvcm1dPVwidGlja1RyYW5zZm9ybSh0aWNrKVwiPlxuICAgICAgPHN2ZzpnICpuZ0lmPVwic2hvd0dyaWRMaW5lc1wiIFthdHRyLnRyYW5zZm9ybV09XCJncmlkTGluZVRyYW5zZm9ybSgpXCI+XG4gICAgICAgIDxzdmc6bGluZSBjbGFzcz1cImdyaWRsaW5lLXBhdGggZ3JpZGxpbmUtcGF0aC12ZXJ0aWNhbFwiIFthdHRyLnkxXT1cIi1ncmlkTGluZUhlaWdodFwiIHkyPVwiMFwiIC8+XG4gICAgICA8L3N2ZzpnPlxuICAgIDwvc3ZnOmc+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFhBeGlzVGlja3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBzY2FsZTtcbiAgQElucHV0KCkgb3JpZW50OiBPcmllbnRhdGlvbjtcbiAgQElucHV0KCkgdGlja0FyZ3VtZW50czogbnVtYmVyW10gPSBbNV07XG4gIEBJbnB1dCgpIHRpY2tWYWx1ZXM6IHN0cmluZ1tdIHwgbnVtYmVyW107XG4gIEBJbnB1dCgpIHRpY2tTdHJva2U6IHN0cmluZyA9ICcjY2NjJztcbiAgQElucHV0KCkgdHJpbVRpY2tzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbWF4VGlja0xlbmd0aDogbnVtYmVyID0gMTY7XG4gIEBJbnB1dCgpIHRpY2tGb3JtYXR0aW5nO1xuICBASW5wdXQoKSBzaG93R3JpZExpbmVzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGdyaWRMaW5lSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJvdGF0ZVRpY2tzOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgZGltZW5zaW9uc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdmVydGljYWxTcGFjaW5nOiBudW1iZXIgPSAyMDtcbiAgcm90YXRlTGFiZWxzOiBib29sZWFuID0gZmFsc2U7XG4gIGlubmVyVGlja1NpemU6IG51bWJlciA9IDY7XG4gIG91dGVyVGlja1NpemU6IG51bWJlciA9IDY7XG4gIHRpY2tQYWRkaW5nOiBudW1iZXIgPSAzO1xuICB0ZXh0QW5jaG9yOiBUZXh0QW5jaG9yID0gVGV4dEFuY2hvci5NaWRkbGU7XG4gIG1heFRpY2tzTGVuZ3RoOiBudW1iZXIgPSAwO1xuICBtYXhBbGxvd2VkTGVuZ3RoOiBudW1iZXIgPSAxNjtcbiAgYWRqdXN0ZWRTY2FsZTogYW55O1xuICB0ZXh0VHJhbnNmb3JtOiBzdHJpbmc7XG4gIHRpY2tzOiBhbnlbXTtcbiAgdGlja0Zvcm1hdDogKG86IGFueSkgPT4gYW55O1xuICBoZWlnaHQ6IG51bWJlciA9IDA7XG4gIGFwcHJveEhlaWdodDogbnVtYmVyID0gMTA7XG5cbiAgQFZpZXdDaGlsZCgndGlja3NlbCcpIHRpY2tzRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlRGltcygpKTtcbiAgfVxuXG4gIHVwZGF0ZURpbXMoKTogdm9pZCB7XG4gICAgaWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAvLyBmb3IgU1NSLCB1c2UgYXBwcm94aW1hdGUgdmFsdWUgaW5zdGVhZCBvZiBtZWFzdXJlZFxuICAgICAgdGhpcy5kaW1lbnNpb25zQ2hhbmdlZC5lbWl0KHsgaGVpZ2h0OiB0aGlzLmFwcHJveEhlaWdodCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUludCh0aGlzLnRpY2tzRWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCwgMTApO1xuICAgIGlmIChoZWlnaHQgIT09IHRoaXMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuZGltZW5zaW9uc0NoYW5nZWQuZW1pdCh7IGhlaWdodDogdGhpcy5oZWlnaHQgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlRGltcygpKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIHRoaXMudGlja3MgPSB0aGlzLmdldFRpY2tzKCk7XG5cbiAgICBpZiAodGhpcy50aWNrRm9ybWF0dGluZykge1xuICAgICAgdGhpcy50aWNrRm9ybWF0ID0gdGhpcy50aWNrRm9ybWF0dGluZztcbiAgICB9IGVsc2UgaWYgKHNjYWxlLnRpY2tGb3JtYXQpIHtcbiAgICAgIHRoaXMudGlja0Zvcm1hdCA9IHNjYWxlLnRpY2tGb3JtYXQuYXBwbHkoc2NhbGUsIHRoaXMudGlja0FyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlja0Zvcm1hdCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGlmIChkLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdEYXRlJykge1xuICAgICAgICAgIHJldHVybiBkLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5yb3RhdGVUaWNrcyA/IHRoaXMuZ2V0Um90YXRpb25BbmdsZSh0aGlzLnRpY2tzKSA6IG51bGw7XG5cbiAgICB0aGlzLmFkanVzdGVkU2NhbGUgPSB0aGlzLnNjYWxlLmJhbmR3aWR0aFxuICAgICAgPyBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNjYWxlKGQpICsgdGhpcy5zY2FsZS5iYW5kd2lkdGgoKSAqIDAuNTtcbiAgICAgICAgfVxuICAgICAgOiB0aGlzLnNjYWxlO1xuXG4gICAgdGhpcy50ZXh0VHJhbnNmb3JtID0gJyc7XG4gICAgaWYgKGFuZ2xlICYmIGFuZ2xlICE9PSAwKSB7XG4gICAgICB0aGlzLnRleHRUcmFuc2Zvcm0gPSBgcm90YXRlKCR7YW5nbGV9KWA7XG4gICAgICB0aGlzLnRleHRBbmNob3IgPSBUZXh0QW5jaG9yLkVuZDtcbiAgICAgIHRoaXMudmVydGljYWxTcGFjaW5nID0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGV4dEFuY2hvciA9IFRleHRBbmNob3IuTWlkZGxlO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVEaW1zKCkpO1xuICB9XG5cbiAgZ2V0Um90YXRpb25BbmdsZSh0aWNrczogYW55W10pOiBudW1iZXIge1xuICAgIGxldCBhbmdsZSA9IDA7XG4gICAgdGhpcy5tYXhUaWNrc0xlbmd0aCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGljayA9IHRoaXMudGlja0Zvcm1hdCh0aWNrc1tpXSkudG9TdHJpbmcoKTtcbiAgICAgIGxldCB0aWNrTGVuZ3RoID0gdGljay5sZW5ndGg7XG4gICAgICBpZiAodGhpcy50cmltVGlja3MpIHtcbiAgICAgICAgdGlja0xlbmd0aCA9IHRoaXMudGlja1RyaW0odGljaykubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGlja0xlbmd0aCA+IHRoaXMubWF4VGlja3NMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5tYXhUaWNrc0xlbmd0aCA9IHRpY2tMZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGVuID0gTWF0aC5taW4odGhpcy5tYXhUaWNrc0xlbmd0aCwgdGhpcy5tYXhBbGxvd2VkTGVuZ3RoKTtcbiAgICBjb25zdCBjaGFyV2lkdGggPSA3OyAvLyBuZWVkIHRvIG1lYXN1cmUgdGhpc1xuICAgIGNvbnN0IHdvcmRXaWR0aCA9IGxlbiAqIGNoYXJXaWR0aDtcblxuICAgIGxldCBiYXNlV2lkdGggPSB3b3JkV2lkdGg7XG4gICAgY29uc3QgbWF4QmFzZVdpZHRoID0gTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gdGlja3MubGVuZ3RoKTtcblxuICAgIC8vIGNhbGN1bGF0ZSBvcHRpbWFsIGFuZ2xlXG4gICAgd2hpbGUgKGJhc2VXaWR0aCA+IG1heEJhc2VXaWR0aCAmJiBhbmdsZSA+IC05MCkge1xuICAgICAgYW5nbGUgLT0gMzA7XG4gICAgICBiYXNlV2lkdGggPSBNYXRoLmNvcyhhbmdsZSAqIChNYXRoLlBJIC8gMTgwKSkgKiB3b3JkV2lkdGg7XG4gICAgfVxuXG4gICAgdGhpcy5hcHByb3hIZWlnaHQgPSBNYXRoLm1heChNYXRoLmFicyhNYXRoLnNpbihhbmdsZSAqIChNYXRoLlBJIC8gMTgwKSkgKiB3b3JkV2lkdGgpLCAxMCk7XG5cbiAgICByZXR1cm4gYW5nbGU7XG4gIH1cblxuICBnZXRUaWNrcygpOiBhbnlbXSB7XG4gICAgbGV0IHRpY2tzO1xuICAgIGNvbnN0IG1heFRpY2tzID0gdGhpcy5nZXRNYXhUaWNrcygyMCk7XG4gICAgY29uc3QgbWF4U2NhbGVUaWNrcyA9IHRoaXMuZ2V0TWF4VGlja3MoMTAwKTtcblxuICAgIGlmICh0aGlzLnRpY2tWYWx1ZXMpIHtcbiAgICAgIHRpY2tzID0gdGhpcy50aWNrVmFsdWVzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2FsZS50aWNrcykge1xuICAgICAgdGlja3MgPSB0aGlzLnNjYWxlLnRpY2tzLmFwcGx5KHRoaXMuc2NhbGUsIFttYXhTY2FsZVRpY2tzXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpY2tzID0gdGhpcy5zY2FsZS5kb21haW4oKTtcbiAgICAgIHRpY2tzID0gcmVkdWNlVGlja3ModGlja3MsIG1heFRpY2tzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGlja3M7XG4gIH1cblxuICBnZXRNYXhUaWNrcyh0aWNrV2lkdGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRpY2tXaWR0aCk7XG4gIH1cblxuICB0aWNrVHJhbnNmb3JtKHRpY2s6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuICd0cmFuc2xhdGUoJyArIHRoaXMuYWRqdXN0ZWRTY2FsZSh0aWNrKSArICcsJyArIHRoaXMudmVydGljYWxTcGFjaW5nICsgJyknO1xuICB9XG5cbiAgZ3JpZExpbmVUcmFuc2Zvcm0oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZSgwLCR7LXRoaXMudmVydGljYWxTcGFjaW5nIC0gNX0pYDtcbiAgfVxuXG4gIHRpY2tUcmltKGxhYmVsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRyaW1UaWNrcyA/IHRyaW1MYWJlbChsYWJlbCwgdGhpcy5tYXhUaWNrTGVuZ3RoKSA6IGxhYmVsO1xuICB9XG59XG4iXX0=