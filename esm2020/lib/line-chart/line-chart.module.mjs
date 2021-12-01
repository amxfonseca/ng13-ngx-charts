import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { LineComponent } from './line.component';
import { LineChartComponent } from './line-chart.component';
import { LineSeriesComponent } from './line-series.component';
import * as i0 from "@angular/core";
export class LineChartModule {
}
LineChartModule.ɵfac = function LineChartModule_Factory(t) { return new (t || LineChartModule)(); };
LineChartModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LineChartModule });
LineChartModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[ChartCommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineChartModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [LineComponent, LineChartComponent, LineSeriesComponent],
                exports: [LineComponent, LineChartComponent, LineSeriesComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LineChartModule, { declarations: [LineComponent, LineChartComponent, LineSeriesComponent], imports: [ChartCommonModule], exports: [LineComponent, LineChartComponent, LineSeriesComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvbGluZS1jaGFydC9saW5lLWNoYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFPOUQsTUFBTSxPQUFPLGVBQWU7OzhFQUFmLGVBQWU7aUVBQWYsZUFBZTtxRUFKakIsQ0FBQyxpQkFBaUIsQ0FBQzt1RkFJakIsZUFBZTtjQUwzQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztnQkFDdEUsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDO2FBQ2xFOzt3RkFDWSxlQUFlLG1CQUhYLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsYUFEM0QsaUJBQWlCLGFBRWpCLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY2hhcnQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9saW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5lQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2xpbmUtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmVTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL2xpbmUtc2VyaWVzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDaGFydENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0xpbmVDb21wb25lbnQsIExpbmVDaGFydENvbXBvbmVudCwgTGluZVNlcmllc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMaW5lQ29tcG9uZW50LCBMaW5lQ2hhcnRDb21wb25lbnQsIExpbmVTZXJpZXNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydE1vZHVsZSB7fVxuIl19