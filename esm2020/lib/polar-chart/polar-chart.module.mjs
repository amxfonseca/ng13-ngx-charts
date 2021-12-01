import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { PolarChartComponent } from './polar-chart.component';
import { PolarSeriesComponent } from './polar-series.component';
import { PieChartModule } from '../pie-chart/pie-chart.module';
import { LineChartModule } from '../line-chart/line-chart.module';
import * as i0 from "@angular/core";
export class PolarChartModule {
}
PolarChartModule.ɵfac = function PolarChartModule_Factory(t) { return new (t || PolarChartModule)(); };
PolarChartModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PolarChartModule });
PolarChartModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[ChartCommonModule, PieChartModule, LineChartModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolarChartModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule, PieChartModule, LineChartModule],
                declarations: [PolarChartComponent, PolarSeriesComponent],
                exports: [PolarChartComponent, PolarSeriesComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolarChartModule, { declarations: [PolarChartComponent, PolarSeriesComponent], imports: [ChartCommonModule, PieChartModule, LineChartModule], exports: [PolarChartComponent, PolarSeriesComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sYXItY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL3BvbGFyLWNoYXJ0L3BvbGFyLWNoYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBT2xFLE1BQU0sT0FBTyxnQkFBZ0I7O2dGQUFoQixnQkFBZ0I7a0VBQWhCLGdCQUFnQjtzRUFKbEIsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDO3VGQUlsRCxnQkFBZ0I7Y0FMNUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7Z0JBQzdELFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDO2dCQUN6RCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsQ0FBQzthQUNyRDs7d0ZBQ1ksZ0JBQWdCLG1CQUhaLG1CQUFtQixFQUFFLG9CQUFvQixhQUQ5QyxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxhQUVsRCxtQkFBbUIsRUFBRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY2hhcnQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBQb2xhckNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9wb2xhci1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9sYXJTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL3BvbGFyLXNlcmllcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGllQ2hhcnRNb2R1bGUgfSBmcm9tICcuLi9waWUtY2hhcnQvcGllLWNoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBMaW5lQ2hhcnRNb2R1bGUgfSBmcm9tICcuLi9saW5lLWNoYXJ0L2xpbmUtY2hhcnQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NoYXJ0Q29tbW9uTW9kdWxlLCBQaWVDaGFydE1vZHVsZSwgTGluZUNoYXJ0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUG9sYXJDaGFydENvbXBvbmVudCwgUG9sYXJTZXJpZXNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUG9sYXJDaGFydENvbXBvbmVudCwgUG9sYXJTZXJpZXNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBvbGFyQ2hhcnRNb2R1bGUge31cbiJdfQ==