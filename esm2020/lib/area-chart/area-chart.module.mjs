import { NgModule } from '@angular/core';
import { AreaChartComponent } from './area-chart.component';
import { AreaChartNormalizedComponent } from './area-chart-normalized.component';
import { AreaChartStackedComponent } from './area-chart-stacked.component';
import { AreaSeriesComponent } from './area-series.component';
import { ChartCommonModule } from '../common/chart-common.module';
import * as i0 from "@angular/core";
export class AreaChartModule {
}
AreaChartModule.ɵfac = function AreaChartModule_Factory(t) { return new (t || AreaChartModule)(); };
AreaChartModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AreaChartModule });
AreaChartModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[ChartCommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AreaChartModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent],
                exports: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AreaChartModule, { declarations: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent], imports: [ChartCommonModule], exports: [AreaChartComponent, AreaChartNormalizedComponent, AreaChartStackedComponent, AreaSeriesComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS1jaGFydC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvYXJlYS1jaGFydC9hcmVhLWNoYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQU9sRSxNQUFNLE9BQU8sZUFBZTs7OEVBQWYsZUFBZTtpRUFBZixlQUFlO3FFQUpqQixDQUFDLGlCQUFpQixDQUFDO3VGQUlqQixlQUFlO2NBTDNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ2hILE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLDRCQUE0QixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixDQUFDO2FBQzVHOzt3RkFDWSxlQUFlLG1CQUhYLGtCQUFrQixFQUFFLDRCQUE0QixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixhQURyRyxpQkFBaUIsYUFFakIsa0JBQWtCLEVBQUUsNEJBQTRCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFyZWFDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYXJlYS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXJlYUNoYXJ0Tm9ybWFsaXplZENvbXBvbmVudCB9IGZyb20gJy4vYXJlYS1jaGFydC1ub3JtYWxpemVkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcmVhQ2hhcnRTdGFja2VkQ29tcG9uZW50IH0gZnJvbSAnLi9hcmVhLWNoYXJ0LXN0YWNrZWQuY29tcG9uZW50JztcbmltcG9ydCB7IEFyZWFTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL2FyZWEtc2VyaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydENvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jaGFydC1jb21tb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NoYXJ0Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQXJlYUNoYXJ0Q29tcG9uZW50LCBBcmVhQ2hhcnROb3JtYWxpemVkQ29tcG9uZW50LCBBcmVhQ2hhcnRTdGFja2VkQ29tcG9uZW50LCBBcmVhU2VyaWVzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FyZWFDaGFydENvbXBvbmVudCwgQXJlYUNoYXJ0Tm9ybWFsaXplZENvbXBvbmVudCwgQXJlYUNoYXJ0U3RhY2tlZENvbXBvbmVudCwgQXJlYVNlcmllc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXJlYUNoYXJ0TW9kdWxlIHt9XG4iXX0=