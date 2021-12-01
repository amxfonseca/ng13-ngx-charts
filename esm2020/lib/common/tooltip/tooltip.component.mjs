import { __decorate } from "tslib";
import { Input, Component, ViewEncapsulation, HostListener, ViewChild, HostBinding, PLATFORM_ID, Inject } from '@angular/core';
import { throttleable } from '../../utils/throttle';
import { PositionHelper } from './position';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["caretElm"];
function TooltipContentComponent_span_4_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0) { return { model: a0 }; };
function TooltipContentComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, TooltipContentComponent_span_4_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r1.context));
} }
function TooltipContentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r2.title, i0.ɵɵsanitizeHtml);
} }
export class TooltipContentComponent {
    constructor(element, renderer, platformId) {
        this.element = element;
        this.renderer = renderer;
        this.platformId = platformId;
    }
    get cssClasses() {
        let clz = 'ngx-charts-tooltip-content';
        clz += ` position-${this.placement}`;
        clz += ` type-${this.type}`;
        clz += ` ${this.cssClass}`;
        return clz;
    }
    ngAfterViewInit() {
        setTimeout(this.position.bind(this));
    }
    position() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const nativeElm = this.element.nativeElement;
        const hostDim = this.host.nativeElement.getBoundingClientRect();
        // if no dims were found, never show
        if (!hostDim.height && !hostDim.width)
            return;
        const elmDim = nativeElm.getBoundingClientRect();
        this.checkFlip(hostDim, elmDim);
        this.positionContent(nativeElm, hostDim, elmDim);
        if (this.showCaret) {
            this.positionCaret(hostDim, elmDim);
        }
        // animate its entry
        setTimeout(() => this.renderer.addClass(nativeElm, 'animate'), 1);
    }
    positionContent(nativeElm, hostDim, elmDim) {
        const { top, left } = PositionHelper.positionContent(this.placement, elmDim, hostDim, this.spacing, this.alignment);
        this.renderer.setStyle(nativeElm, 'top', `${top}px`);
        this.renderer.setStyle(nativeElm, 'left', `${left}px`);
    }
    positionCaret(hostDim, elmDim) {
        const caretElm = this.caretElm.nativeElement;
        const caretDimensions = caretElm.getBoundingClientRect();
        const { top, left } = PositionHelper.positionCaret(this.placement, elmDim, hostDim, caretDimensions, this.alignment);
        this.renderer.setStyle(caretElm, 'top', `${top}px`);
        this.renderer.setStyle(caretElm, 'left', `${left}px`);
    }
    checkFlip(hostDim, elmDim) {
        this.placement = PositionHelper.determinePlacement(this.placement, elmDim, hostDim, this.spacing);
    }
    onWindowResize() {
        this.position();
    }
}
TooltipContentComponent.ɵfac = function TooltipContentComponent_Factory(t) { return new (t || TooltipContentComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(PLATFORM_ID)); };
TooltipContentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TooltipContentComponent, selectors: [["ngx-tooltip-content"]], viewQuery: function TooltipContentComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.caretElm = _t.first);
    } }, hostVars: 2, hostBindings: function TooltipContentComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function TooltipContentComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, i0.ɵɵresolveWindow);
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.cssClasses);
    } }, inputs: { host: "host", showCaret: "showCaret", type: "type", placement: "placement", alignment: "alignment", spacing: "spacing", cssClass: "cssClass", title: "title", template: "template", context: "context" }, decls: 6, vars: 6, consts: [[3, "hidden"], ["caretElm", ""], [1, "tooltip-content"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]], template: function TooltipContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelement(1, "span", 0, 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtemplate(4, TooltipContentComponent_span_4_Template, 2, 4, "span", 3);
        i0.ɵɵtemplate(5, TooltipContentComponent_span_5_Template, 1, 1, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("tooltip-caret position-", ctx.placement, "");
        i0.ɵɵproperty("hidden", !ctx.showCaret);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet], styles: [".ngx-charts-tooltip-content{position:fixed;border-radius:3px;z-index:5000;display:block;font-weight:400;opacity:0;pointer-events:none!important}.ngx-charts-tooltip-content.type-popover{background:#fff;color:#060709;border:1px solid #72809b;box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;font-size:13px;padding:4px}.ngx-charts-tooltip-content.type-popover .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff}.ngx-charts-tooltip-content.type-tooltip{color:#fff;background:rgba(0,0,0,.75);font-size:12px;padding:0 10px;text-align:center;pointer-events:auto}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content .tooltip-label{display:block;line-height:1em;padding:8px 5px 5px;font-size:1em}.ngx-charts-tooltip-content .tooltip-val{display:block;font-size:1.3em;line-height:1em;padding:0 5px 8px}.ngx-charts-tooltip-content .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.position-right{transform:translate(10px)}.ngx-charts-tooltip-content.position-left{transform:translate(-10px)}.ngx-charts-tooltip-content.position-top{transform:translateY(-10px)}.ngx-charts-tooltip-content.position-bottom{transform:translateY(10px)}.ngx-charts-tooltip-content.animate{opacity:1;transition:opacity .3s,transform .3s;transform:translate(0);pointer-events:auto}.area-tooltip-container{padding:5px 0;pointer-events:none}.tooltip-item{text-align:left;line-height:1.2em;padding:5px 0}.tooltip-item .tooltip-item-color{display:inline-block;height:12px;width:12px;margin-right:5px;color:#5b646b;border-radius:3px}\n"], encapsulation: 2 });
__decorate([
    throttleable(100)
], TooltipContentComponent.prototype, "onWindowResize", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipContentComponent, [{
        type: Component,
        args: [{ selector: 'ngx-tooltip-content', template: `
    <div>
      <span #caretElm [hidden]="!showCaret" class="tooltip-caret position-{{ this.placement }}"> </span>
      <div class="tooltip-content">
        <span *ngIf="!title">
          <ng-template [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{ model: context }"> </ng-template>
        </span>
        <span *ngIf="title" [innerHTML]="title"> </span>
      </div>
    </div>
  `, encapsulation: ViewEncapsulation.None, styles: [".ngx-charts-tooltip-content{position:fixed;border-radius:3px;z-index:5000;display:block;font-weight:400;opacity:0;pointer-events:none!important}.ngx-charts-tooltip-content.type-popover{background:#fff;color:#060709;border:1px solid #72809b;box-shadow:0 1px 3px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f;font-size:13px;padding:4px}.ngx-charts-tooltip-content.type-popover .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #fff}.ngx-charts-tooltip-content.type-popover .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #fff}.ngx-charts-tooltip-content.type-tooltip{color:#fff;background:rgba(0,0,0,.75);font-size:12px;padding:0 10px;text-align:center;pointer-events:auto}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid rgba(0,0,0,.75)}.ngx-charts-tooltip-content .tooltip-label{display:block;line-height:1em;padding:8px 5px 5px;font-size:1em}.ngx-charts-tooltip-content .tooltip-val{display:block;font-size:1.3em;line-height:1em;padding:0 5px 8px}.ngx-charts-tooltip-content .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-charts-tooltip-content.position-right{transform:translate(10px)}.ngx-charts-tooltip-content.position-left{transform:translate(-10px)}.ngx-charts-tooltip-content.position-top{transform:translateY(-10px)}.ngx-charts-tooltip-content.position-bottom{transform:translateY(10px)}.ngx-charts-tooltip-content.animate{opacity:1;transition:opacity .3s,transform .3s;transform:translate(0);pointer-events:auto}.area-tooltip-container{padding:5px 0;pointer-events:none}.tooltip-item{text-align:left;line-height:1.2em;padding:5px 0}.tooltip-item .tooltip-item-color{display:inline-block;height:12px;width:12px;margin-right:5px;color:#5b646b;border-radius:3px}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { host: [{
            type: Input
        }], showCaret: [{
            type: Input
        }], type: [{
            type: Input
        }], placement: [{
            type: Input
        }], alignment: [{
            type: Input
        }], spacing: [{
            type: Input
        }], cssClass: [{
            type: Input
        }], title: [{
            type: Input
        }], template: [{
            type: Input
        }], context: [{
            type: Input
        }], caretElm: [{
            type: ViewChild,
            args: ['caretElm']
        }], cssClasses: [{
            type: HostBinding,
            args: ['class']
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvY29tbW9uL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxLQUFLLEVBQ0wsU0FBUyxFQUdULGlCQUFpQixFQUNqQixZQUFZLEVBQ1osU0FBUyxFQUNULFdBQVcsRUFFWCxXQUFXLEVBQ1gsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFrQixNQUFNLFlBQVksQ0FBQztBQUc1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7OztJQVE1Qyw0QkFBcUI7SUFDbkIsK0ZBQXlHO0lBQzNHLGlCQUFPOzs7SUFEUSxlQUE2QjtJQUE3QixrREFBNkIsdUVBQUE7OztJQUU1QywwQkFBZ0Q7OztJQUE1QiwyREFBbUI7O0FBTy9DLE1BQU0sT0FBTyx1QkFBdUI7SUF1QmxDLFlBQW1CLE9BQW1CLEVBQVUsUUFBbUIsRUFBK0IsVUFBZTtRQUE5RixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUErQixlQUFVLEdBQVYsVUFBVSxDQUFLO0lBQUcsQ0FBQztJQVRySCxJQUNJLFVBQVU7UUFDWixJQUFJLEdBQUcsR0FBRyw0QkFBNEIsQ0FBQztRQUN2QyxHQUFHLElBQUksYUFBYSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckMsR0FBRyxJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQixPQUFPLEdBQUcsQ0FBQztJ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dkIsb0JBQWdCOzs7O1FBYnpCLDJCQUFLO1FBQ0gsNkJBQWtHO1FBQ2xHLDhCQUE2QjtRQUMzQiwwRUFFTztRQUNQLDBFQUFnRDtRQUNsRCxpQkFBTTtRQUNSLGlCQUFNOztRQVBrQyxlQUFtRDtRQUFuRCx1RUFBbUQ7UUFBekUsdUNBQXFCO1FBRTVCLGVBQVk7UUFBWixpQ0FBWTtRQUdaLGVBQVc7UUFBWCxnQ0FBVzs7QUF1RnhCO0lBREMsWUFBWSxDQUFDLEdBQUcsQ0FBQzs2REFHakI7dUZBbEZVLHVCQUF1QjtjQWhCbkMsU0FBUzsyQkFDRSxxQkFBcUIsWUFDckI7Ozs7Ozs7Ozs7R0FVVCxpQkFDYyxpQkFBaUIsQ0FBQyxJQUFJOztzQkEwQmlDLE1BQU07dUJBQUMsV0FBVzt3QkF0Qi9FLElBQUk7a0JBQVosS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBRWlCLFFBQVE7a0JBQTlCLFNBQVM7bUJBQUMsVUFBVTtZQUdqQixVQUFVO2tCQURiLFdBQVc7bUJBQUMsT0FBTztZQWtFcEIsY0FBYztrQkFGYixZQUFZO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSG9zdExpc3RlbmVyLFxuICBWaWV3Q2hpbGQsXG4gIEhvc3RCaW5kaW5nLFxuICBSZW5kZXJlcjIsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0aHJvdHRsZWFibGUgfSBmcm9tICcuLi8uLi91dGlscy90aHJvdHRsZSc7XG5pbXBvcnQgeyBQb3NpdGlvbkhlbHBlciwgUGxhY2VtZW50VHlwZXMgfSBmcm9tICcuL3Bvc2l0aW9uJztcblxuaW1wb3J0IHsgU3R5bGVUeXBlcyB9IGZyb20gJy4vc3R5bGUudHlwZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10b29sdGlwLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgICA8c3BhbiAjY2FyZXRFbG0gW2hpZGRlbl09XCIhc2hvd0NhcmV0XCIgY2xhc3M9XCJ0b29sdGlwLWNhcmV0IHBvc2l0aW9uLXt7IHRoaXMucGxhY2VtZW50IH19XCI+IDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWNvbnRlbnRcIj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhdGl0bGVcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBtb2RlbDogY29udGV4dCB9XCI+IDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0aXRsZVwiIFtpbm5lckhUTUxdPVwidGl0bGVcIj4gPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlVXJsczogWycuL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBob3N0OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBzaG93Q2FyZXQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHR5cGU6IFN0eWxlVHlwZXM7XG4gIEBJbnB1dCgpIHBsYWNlbWVudDogUGxhY2VtZW50VHlwZXM7XG4gIEBJbnB1dCgpIGFsaWdubWVudDogUGxhY2VtZW50VHlwZXM7XG4gIEBJbnB1dCgpIHNwYWNpbmc6IG51bWJlcjtcbiAgQElucHV0KCkgY3NzQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGNvbnRleHQ6IGFueTtcblxuICBAVmlld0NoaWxkKCdjYXJldEVsbScpIGNhcmV0RWxtOiBFbGVtZW50UmVmO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY3NzQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGxldCBjbHogPSAnbmd4LWNoYXJ0cy10b29sdGlwLWNvbnRlbnQnO1xuICAgIGNseiArPSBgIHBvc2l0aW9uLSR7dGhpcy5wbGFjZW1lbnR9YDtcbiAgICBjbHogKz0gYCB0eXBlLSR7dGhpcy50eXBlfWA7XG4gICAgY2x6ICs9IGAgJHt0aGlzLmNzc0NsYXNzfWA7XG4gICAgcmV0dXJuIGNsejtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KHRoaXMucG9zaXRpb24uYmluZCh0aGlzKSk7XG4gIH1cblxuICBwb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVFbG0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBob3N0RGltID0gdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBpZiBubyBkaW1zIHdlcmUgZm91bmQsIG5ldmVyIHNob3dcbiAgICBpZiAoIWhvc3REaW0uaGVpZ2h0ICYmICFob3N0RGltLndpZHRoKSByZXR1cm47XG5cbiAgICBjb25zdCBlbG1EaW0gPSBuYXRpdmVFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5jaGVja0ZsaXAoaG9zdERpbSwgZWxtRGltKTtcbiAgICB0aGlzLnBvc2l0aW9uQ29udGVudChuYXRpdmVFbG0sIGhvc3REaW0sIGVsbURpbSk7XG5cbiAgICBpZiAodGhpcy5zaG93Q2FyZXQpIHtcbiAgICAgIHRoaXMucG9zaXRpb25DYXJldChob3N0RGltLCBlbG1EaW0pO1xuICAgIH1cblxuICAgIC8vIGFuaW1hdGUgaXRzIGVudHJ5XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5hdGl2ZUVsbSwgJ2FuaW1hdGUnKSwgMSk7XG4gIH1cblxuICBwb3NpdGlvbkNvbnRlbnQobmF0aXZlRWxtOiBIVE1MRWxlbWVudCwgaG9zdERpbTogRE9NUmVjdCwgZWxtRGltOiBET01SZWN0KTogdm9pZCB7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IFBvc2l0aW9uSGVscGVyLnBvc2l0aW9uQ29udGVudCh0aGlzLnBsYWNlbWVudCwgZWxtRGltLCBob3N0RGltLCB0aGlzLnNwYWNpbmcsIHRoaXMuYWxpZ25tZW50KTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobmF0aXZlRWxtLCAndG9wJywgYCR7dG9wfXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbG0sICdsZWZ0JywgYCR7bGVmdH1weGApO1xuICB9XG5cbiAgcG9zaXRpb25DYXJldChob3N0RGltOiBET01SZWN0LCBlbG1EaW06IERPTVJlY3QpOiB2b2lkIHtcbiAgICBjb25zdCBjYXJldEVsbSA9IHRoaXMuY2FyZXRFbG0ubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjYXJldERpbWVuc2lvbnMgPSBjYXJldEVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gUG9zaXRpb25IZWxwZXIucG9zaXRpb25DYXJldChcbiAgICAgIHRoaXMucGxhY2VtZW50LFxuICAgICAgZWxtRGltLFxuICAgICAgaG9zdERpbSxcbiAgICAgIGNhcmV0RGltZW5zaW9ucyxcbiAgICAgIHRoaXMuYWxpZ25tZW50XG4gICAgKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2FyZXRFbG0sICd0b3AnLCBgJHt0b3B9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNhcmV0RWxtLCAnbGVmdCcsIGAke2xlZnR9cHhgKTtcbiAgfVxuXG4gIGNoZWNrRmxpcChob3N0RGltOiBET01SZWN0LCBlbG1EaW06IERPTVJlY3QpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWNlbWVudCA9IFBvc2l0aW9uSGVscGVyLmRldGVybWluZVBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCwgZWxtRGltLCBob3N0RGltLCB0aGlzLnNwYWNpbmcpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIEB0aHJvdHRsZWFibGUoMTAwKVxuICBvbldpbmRvd1Jlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnBvc2l0aW9uKCk7XG4gIH1cbn1cbiJdfQ==