import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { HeatMapCellComponent } from './heat-map-cell.component';
import { HeatCellSeriesComponent } from './heat-map-cell-series.component';
import { HeatMapComponent } from './heat-map.component';
import * as i0 from "@angular/core";
export class HeatMapModule {
}
HeatMapModule.ɵfac = function HeatMapModule_Factory(t) { return new (t || HeatMapModule)(); };
HeatMapModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HeatMapModule });
HeatMapModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[ChartCommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeatMapModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent],
                exports: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HeatMapModule, { declarations: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent], imports: [ChartCommonModule], exports: [HeatMapCellComponent, HeatCellSeriesComponent, HeatMapComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdC1tYXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2hlYXQtbWFwL2hlYXQtbWFwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU94RCxNQUFNLE9BQU8sYUFBYTs7MEVBQWIsYUFBYTsrREFBYixhQUFhO21FQUpmLENBQUMsaUJBQWlCLENBQUM7dUZBSWpCLGFBQWE7Y0FMekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDL0UsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLENBQUM7YUFDM0U7O3dGQUNZLGFBQWEsbUJBSFQsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLGFBRHBFLGlCQUFpQixhQUVqQixvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY2hhcnQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBIZWF0TWFwQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vaGVhdC1tYXAtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhdENlbGxTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL2hlYXQtbWFwLWNlbGwtc2VyaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWF0TWFwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWF0LW1hcC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2hhcnRDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtIZWF0TWFwQ2VsbENvbXBvbmVudCwgSGVhdENlbGxTZXJpZXNDb21wb25lbnQsIEhlYXRNYXBDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSGVhdE1hcENlbGxDb21wb25lbnQsIEhlYXRDZWxsU2VyaWVzQ29tcG9uZW50LCBIZWF0TWFwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBIZWF0TWFwTW9kdWxlIHt9XG4iXX0=