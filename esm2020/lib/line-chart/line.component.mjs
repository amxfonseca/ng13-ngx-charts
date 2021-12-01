import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { select } from 'd3-selection';
import * as i0 from "@angular/core";
const _c0 = ["ngx-charts-line", ""];
export class LineComponent {
    constructor(element) {
        this.element = element;
        this.fill = 'none';
        this.animations = true;
        // @Output() select = new EventEmitter();
        this.initialized = false;
    }
    ngOnChanges(changes) {
        if (!this.initialized) {
            this.initialized = true;
            this.initialPath = this.path;
        }
        else {
            this.updatePathEl();
        }
    }
    updatePathEl() {
        const node = select(this.element.nativeElement).select('.line');
        if (this.animations) {
            node.transition().duration(750).attr('d', this.path);
        }
        else {
            node.attr('d', this.path);
        }
    }
}
LineComponent.ɵfac = function LineComponent_Factory(t) { return new (t || LineComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
LineComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LineComponent, selectors: [["g", "ngx-charts-line", ""]], inputs: { path: "path", stroke: "stroke", data: "data", fill: "fill", animations: "animations" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 4, consts: [["stroke-width", "1.5px", 1, "line"]], template: function LineComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelement(0, "path", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("@animationState", "active");
        i0.ɵɵattribute("d", ctx.initialPath)("fill", ctx.fill)("stroke", ctx.stroke);
    } }, encapsulation: 2, data: { animation: [
            trigger('animationState', [
                transition(':enter', [
                    style({
                        strokeDasharray: 2000,
                        strokeDashoffset: 2000
                    }),
                    animate(1000, style({
                        strokeDashoffset: 0
                    }))
                ])
            ])
        ] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineComponent, [{
        type: Component,
        args: [{
                selector: 'g[ngx-charts-line]',
                template: `
    <svg:path
      [@animationState]="'active'"
      class="line"
      [attr.d]="initialPath"
      [attr.fill]="fill"
      [attr.stroke]="stroke"
      stroke-width="1.5px"
    />
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('animationState', [
                        transition(':enter', [
                            style({
                                strokeDasharray: 2000,
                                strokeDashoffset: 2000
                            }),
                            animate(1000, style({
                                strokeDashoffset: 0
                            }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { path: [{
            type: Input
        }], stroke: [{
            type: Input
        }], data: [{
            type: Input
        }], fill: [{
            type: Input
        }], animations: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvbGluZS1jaGFydC9saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFLTCx1QkFBdUIsRUFFeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQWlDdEMsTUFBTSxPQUFPLGFBQWE7SUFZeEIsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVI5QixTQUFJLEdBQVcsTUFBTSxDQUFDO1FBQ3RCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFcEMseUNBQXlDO1FBRXpDLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBR2EsQ0FBQztJQUUzQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7MEVBL0JVLGFBQWE7Z0VBQWIsYUFBYTtRQTNCdEIsbUJBT0U7UUFQRiwwQkFPRTs7UUFOQSwwQ0FBNEI7UUFFNUIsb0NBQXNCLGtCQUFBLHNCQUFBOzhDQU9kO1lBQ1YsT0FBTyxDQUFDLGdCQUFnQixFQUFFO2dCQUN4QixVQUFVLENBQUMsUUFBUSxFQUFFO29CQUNuQixLQUFLLENBQUM7d0JBQ0osZUFBZSxFQUFFLElBQUk7d0JBQ3JCLGdCQUFnQixFQUFFLElBQUk7cUJBQ3ZCLENBQUM7b0JBQ0YsT0FBTyxDQUNMLElBQUksRUFDSixLQUFLLENBQUM7d0JBQ0osZ0JBQWdCLEVBQUUsQ0FBQztxQkFDcEIsQ0FBQyxDQUNIO2lCQUNGLENBQUM7YUFDSCxDQUFDO1NBQ0g7dUZBRVUsYUFBYTtjQTlCekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3hCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLEtBQUssQ0FBQztnQ0FDSixlQUFlLEVBQUUsSUFBSTtnQ0FDckIsZ0JBQWdCLEVBQUUsSUFBSTs2QkFDdkIsQ0FBQzs0QkFDRixPQUFPLENBQ0wsSUFBSSxFQUNKLEtBQUssQ0FBQztnQ0FDSixnQkFBZ0IsRUFBRSxDQUFDOzZCQUNwQixDQUFDLENBQ0g7eUJBQ0YsQ0FBQztxQkFDSCxDQUFDO2lCQUNIO2FBQ0Y7NkRBRVUsSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBTZXJpZXMgfSBmcm9tICcuLi9tb2RlbHMvY2hhcnQtZGF0YS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbbmd4LWNoYXJ0cy1saW5lXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZzpwYXRoXG4gICAgICBbQGFuaW1hdGlvblN0YXRlXT1cIidhY3RpdmUnXCJcbiAgICAgIGNsYXNzPVwibGluZVwiXG4gICAgICBbYXR0ci5kXT1cImluaXRpYWxQYXRoXCJcbiAgICAgIFthdHRyLmZpbGxdPVwiZmlsbFwiXG4gICAgICBbYXR0ci5zdHJva2VdPVwic3Ryb2tlXCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjEuNXB4XCJcbiAgICAvPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2FuaW1hdGlvblN0YXRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAyMDAwLFxuICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IDIwMDBcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoXG4gICAgICAgICAgMTAwMCxcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiAwXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBwYXRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0cm9rZTogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBTZXJpZXM7XG4gIEBJbnB1dCgpIGZpbGw6IHN0cmluZyA9ICdub25lJztcbiAgQElucHV0KCkgYW5pbWF0aW9uczogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICBpbml0aWFsUGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5pdGlhbFBhdGggPSB0aGlzLnBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlUGF0aEVsKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUGF0aEVsKCk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGUgPSBzZWxlY3QodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdCgnLmxpbmUnKTtcblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgIG5vZGUudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MCkuYXR0cignZCcsIHRoaXMucGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuYXR0cignZCcsIHRoaXMucGF0aCk7XG4gICAgfVxuICB9XG59XG4iXX0=