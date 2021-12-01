import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { BoxChartComponent } from './box-chart.component';
import { BoxSeriesComponent } from './box-series.component';
import { BoxComponent } from './box.component';
import * as i0 from "@angular/core";
export class BoxChartModule {
}
BoxChartModule.ɵfac = function BoxChartModule_Factory(t) { return new (t || BoxChartModule)(); };
BoxChartModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BoxChartModule });
BoxChartModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[ChartCommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BoxChartModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [BoxChartComponent, BoxSeriesComponent, BoxComponent],
                exports: [BoxChartComponent, BoxSeriesComponent, BoxComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BoxChartModule, { declarations: [BoxChartComponent, BoxSeriesComponent, BoxComponent], imports: [ChartCommonModule], exports: [BoxChartComponent, BoxSeriesComponent, BoxComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LWNoYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9ib3gtY2hhcnQvYm94LWNoYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFPL0MsTUFBTSxPQUFPLGNBQWM7OzRFQUFkLGNBQWM7Z0VBQWQsY0FBYztvRUFKaEIsQ0FBQyxpQkFBaUIsQ0FBQzt1RkFJakIsY0FBYztjQUwxQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQztnQkFDbkUsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDO2FBQy9EOzt3RkFDWSxjQUFjLG1CQUhWLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksYUFEeEQsaUJBQWlCLGFBRWpCLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY2hhcnQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBCb3hDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYm94LWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb3hTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL2JveC1zZXJpZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEJveENvbXBvbmVudCB9IGZyb20gJy4vYm94LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDaGFydENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0JveENoYXJ0Q29tcG9uZW50LCBCb3hTZXJpZXNDb21wb25lbnQsIEJveENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtCb3hDaGFydENvbXBvbmVudCwgQm94U2VyaWVzQ29tcG9uZW50LCBCb3hDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJveENoYXJ0TW9kdWxlIHt9XG4iXX0=