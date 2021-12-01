import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { AdvancedPieChartComponent } from './advanced-pie-chart.component';
import { PieLabelComponent } from './pie-label.component';
import { PieArcComponent } from './pie-arc.component';
import { PieChartComponent } from './pie-chart.component';
import { PieGridComponent } from './pie-grid.component';
import { PieGridSeriesComponent } from './pie-grid-series.component';
import { PieSeriesComponent } from './pie-series.component';
import * as i0 from "@angular/core";
import * as i1 from "../common/charts/chart.component";
import * as i2 from "@angular/common";
import * as i3 from "../common/tooltip/tooltip.directive";
import * as i4 from "../common/count/count.directive";
export class PieChartModule {
}
PieChartModule.ɵfac = function PieChartModule_Factory(t) { return new (t || PieChartModule)(); };
PieChartModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PieChartModule });
PieChartModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[ChartCommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PieChartModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [
                    AdvancedPieChartComponent,
                    PieLabelComponent,
                    PieArcComponent,
                    PieChartComponent,
                    PieGridComponent,
                    PieGridSeriesComponent,
                    PieSeriesComponent
                ],
                exports: [
                    AdvancedPieChartComponent,
                    PieLabelComponent,
                    PieArcComponent,
                    PieChartComponent,
                    PieGridComponent,
                    PieGridSeriesComponent,
                    PieSeriesComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PieChartModule, { declarations: [AdvancedPieChartComponent,
        PieLabelComponent,
        PieArcComponent,
        PieChartComponent,
        PieGridComponent,
        PieGridSeriesComponent,
        PieSeriesComponent], imports: [ChartCommonModule], exports: [AdvancedPieChartComponent,
        PieLabelComponent,
        PieArcComponent,
        PieChartComponent,
        PieGridComponent,
        PieGridSeriesComponent,
        PieSeriesComponent] }); })();
i0.ɵɵsetComponentScope(PieGridComponent, [i1.ChartComponent, i2.NgForOf, PieGridSeriesComponent, i3.TooltipDirective, i2.NgIf, i4.CountUpDirective], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9waWUtY2hhcnQvcGllLWNoYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBdUI1RCxNQUFNLE9BQU8sY0FBYzs7NEVBQWQsY0FBYztnRUFBZCxjQUFjO29FQXBCaEIsQ0FBQyxpQkFBaUIsQ0FBQzt1RkFvQmpCLGNBQWM7Y0FyQjFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsWUFBWSxFQUFFO29CQUNaLHlCQUF5QjtvQkFDekIsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHlCQUF5QjtvQkFDekIsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLGtCQUFrQjtpQkFDbkI7YUFDRjs7d0ZBQ1ksY0FBYyxtQkFsQnZCLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLGtCQUFrQixhQVJWLGlCQUFpQixhQVd6Qix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixrQkFBa0I7dUJBWGxCLGdCQUFnQixrQ0FDaEIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0Q29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NoYXJ0LWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgQWR2YW5jZWRQaWVDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYWR2YW5jZWQtcGllLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWVMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vcGllLWxhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWVBcmNDb21wb25lbnQgfSBmcm9tICcuL3BpZS1hcmMuY29tcG9uZW50JztcbmltcG9ydCB7IFBpZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9waWUtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBpZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3BpZS1ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWVHcmlkU2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9waWUtZ3JpZC1zZXJpZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFBpZVNlcmllc0NvbXBvbmVudCB9IGZyb20gJy4vcGllLXNlcmllcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2hhcnRDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBZHZhbmNlZFBpZUNoYXJ0Q29tcG9uZW50LFxuICAgIFBpZUxhYmVsQ29tcG9uZW50LFxuICAgIFBpZUFyY0NvbXBvbmVudCxcbiAgICBQaWVDaGFydENvbXBvbmVudCxcbiAgICBQaWVHcmlkQ29tcG9uZW50LFxuICAgIFBpZUdyaWRTZXJpZXNDb21wb25lbnQsXG4gICAgUGllU2VyaWVzQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBZHZhbmNlZFBpZUNoYXJ0Q29tcG9uZW50LFxuICAgIFBpZUxhYmVsQ29tcG9uZW50LFxuICAgIFBpZUFyY0NvbXBvbmVudCxcbiAgICBQaWVDaGFydENvbXBvbmVudCxcbiAgICBQaWVHcmlkQ29tcG9uZW50LFxuICAgIFBpZUdyaWRTZXJpZXNDb21wb25lbnQsXG4gICAgUGllU2VyaWVzQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGllQ2hhcnRNb2R1bGUge31cbiJdfQ==