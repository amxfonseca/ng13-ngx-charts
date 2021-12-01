import { NgModule } from '@angular/core';
import { AxisLabelComponent } from './axis-label.component';
import { XAxisComponent } from './x-axis.component';
import { XAxisTicksComponent } from './x-axis-ticks.component';
import { YAxisComponent } from './y-axis.component';
import { YAxisTicksComponent } from './y-axis-ticks.component';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class AxesModule {
}
AxesModule.ɵfac = function AxesModule_Factory(t) { return new (t || AxesModule)(); };
AxesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AxesModule });
AxesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AxesModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent],
                exports: [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AxesModule, { declarations: [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent], imports: [CommonModule], exports: [AxisLabelComponent, XAxisComponent, XAxisTicksComponent, YAxisComponent, YAxisTicksComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvY29tbW9uL2F4ZXMvYXhlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFPL0MsTUFBTSxPQUFPLFVBQVU7O29FQUFWLFVBQVU7NERBQVYsVUFBVTtnRUFKWixDQUFDLFlBQVksQ0FBQzt1RkFJWixVQUFVO2NBTHRCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLENBQUM7Z0JBQzVHLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLENBQUM7YUFDeEc7O3dGQUNZLFVBQVUsbUJBSE4sa0JBQWtCLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsYUFEakcsWUFBWSxhQUVaLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF4aXNMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vYXhpcy1sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgWEF4aXNDb21wb25lbnQgfSBmcm9tICcuL3gtYXhpcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgWEF4aXNUaWNrc0NvbXBvbmVudCB9IGZyb20gJy4veC1heGlzLXRpY2tzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4veS1heGlzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBZQXhpc1RpY2tzQ29tcG9uZW50IH0gZnJvbSAnLi95LWF4aXMtdGlja3MuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtBeGlzTGFiZWxDb21wb25lbnQsIFhBeGlzQ29tcG9uZW50LCBYQXhpc1RpY2tzQ29tcG9uZW50LCBZQXhpc0NvbXBvbmVudCwgWUF4aXNUaWNrc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBeGlzTGFiZWxDb21wb25lbnQsIFhBeGlzQ29tcG9uZW50LCBYQXhpc1RpY2tzQ29tcG9uZW50LCBZQXhpc0NvbXBvbmVudCwgWUF4aXNUaWNrc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXhlc01vZHVsZSB7fVxuIl19