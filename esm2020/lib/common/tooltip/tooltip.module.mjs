import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { TooltipContentComponent } from './tooltip.component';
import { TooltipService } from './tooltip.service';
import { InjectionService } from './injection.service';
import * as i0 from "@angular/core";
export class TooltipModule {
}
TooltipModule.ɵfac = function TooltipModule_Factory(t) { return new (t || TooltipModule)(); };
TooltipModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TooltipModule });
TooltipModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [InjectionService, TooltipService], imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipModule, [{
        type: NgModule,
        args: [{
                declarations: [TooltipContentComponent, TooltipDirective],
                providers: [InjectionService, TooltipService],
                exports: [TooltipContentComponent, TooltipDirective],
                imports: [CommonModule],
                entryComponents: [TooltipContentComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TooltipModule, { declarations: [TooltipContentComponent, TooltipDirective], imports: [CommonModule], exports: [TooltipContentComponent, TooltipDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvY29tbW9uL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQVN2RCxNQUFNLE9BQU8sYUFBYTs7MEVBQWIsYUFBYTsrREFBYixhQUFhO29FQUxiLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLFlBRXBDLENBQUMsWUFBWSxDQUFDO3VGQUdaLGFBQWE7Y0FQekIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLGdCQUFnQixDQUFDO2dCQUN6RCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLGdCQUFnQixDQUFDO2dCQUNwRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLGVBQWUsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQzNDOzt3RkFDWSxhQUFhLG1CQU5ULHVCQUF1QixFQUFFLGdCQUFnQixhQUc5QyxZQUFZLGFBRFosdUJBQXVCLEVBQUUsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvb2x0aXBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb29sdGlwU2VydmljZSB9IGZyb20gJy4vdG9vbHRpcC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgSW5qZWN0aW9uU2VydmljZSB9IGZyb20gJy4vaW5qZWN0aW9uLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUb29sdGlwQ29udGVudENvbXBvbmVudCwgVG9vbHRpcERpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW0luamVjdGlvblNlcnZpY2UsIFRvb2x0aXBTZXJ2aWNlXSxcbiAgZXhwb3J0czogW1Rvb2x0aXBDb250ZW50Q29tcG9uZW50LCBUb29sdGlwRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Rvb2x0aXBDb250ZW50Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwTW9kdWxlIHt9XG4iXX0=