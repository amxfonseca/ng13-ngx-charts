import { NgModule } from '@angular/core';
import { ChartCommonModule } from './common/chart-common.module';
import { AreaChartModule } from './area-chart/area-chart.module';
import { BarChartModule } from './bar-chart/bar-chart.module';
import { BoxChartModule } from './box-chart/box-chart.module';
import { BubbleChartModule } from './bubble-chart/bubble-chart.module';
import { HeatMapModule } from './heat-map/heat-map.module';
import { LineChartModule } from './line-chart/line-chart.module';
import { PolarChartModule } from './polar-chart/polar-chart.module';
import { NumberCardModule } from './number-card/number-card.module';
import { PieChartModule } from './pie-chart/pie-chart.module';
import { TreeMapModule } from './tree-map/tree-map.module';
import { GaugeModule } from './gauge/gauge.module';
import { ngxChartsPolyfills } from './polyfills';
import * as i0 from "@angular/core";
export class NgxChartsModule {
    constructor() {
        ngxChartsPolyfills();
    }
}
NgxChartsModule.ɵfac = function NgxChartsModule_Factory(t) { return new (t || NgxChartsModule)(); };
NgxChartsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxChartsModule });
NgxChartsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [ChartCommonModule,
        AreaChartModule,
        BarChartModule,
        BoxChartModule,
        BubbleChartModule,
        HeatMapModule,
        LineChartModule,
        PolarChartModule,
        NumberCardModule,
        PieChartModule,
        TreeMapModule,
        GaugeModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxChartsModule, [{
        type: NgModule,
        args: [{
                exports: [
                    ChartCommonModule,
                    AreaChartModule,
                    BarChartModule,
                    BoxChartModule,
                    BubbleChartModule,
                    HeatMapModule,
                    LineChartModule,
                    PolarChartModule,
                    NumberCardModule,
                    PieChartModule,
                    TreeMapModule,
                    GaugeModule
                ]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxChartsModule, { exports: [ChartCommonModule,
        AreaChartModule,
        BarChartModule,
        BoxChartModule,
        BubbleChartModule,
        HeatMapModule,
        LineChartModule,
        PolarChartModule,
        NumberCardModule,
        PieChartModule,
        TreeMapModule,
        GaugeModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoYXJ0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtY2hhcnRzL3NyYy9saWIvbmd4LWNoYXJ0cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFrQmpELE1BQU0sT0FBTyxlQUFlO0lBQzFCO1FBQ0Usa0JBQWtCLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs4RUFIVSxlQUFlO2lFQUFmLGVBQWU7cUVBZHhCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0FBYztRQUNkLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsV0FBVzt1RkFHRixlQUFlO2NBaEIzQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixXQUFXO2lCQUNaO2FBQ0Y7O3dGQUNZLGVBQWUsY0FkeEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixjQUFjO1FBQ2QsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGFBQWE7UUFDYixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0Q29tbW9uTW9kdWxlIH0gZnJvbSAnLi9jb21tb24vY2hhcnQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBBcmVhQ2hhcnRNb2R1bGUgfSBmcm9tICcuL2FyZWEtY2hhcnQvYXJlYS1jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgQmFyQ2hhcnRNb2R1bGUgfSBmcm9tICcuL2Jhci1jaGFydC9iYXItY2hhcnQubW9kdWxlJztcbmltcG9ydCB7IEJveENoYXJ0TW9kdWxlIH0gZnJvbSAnLi9ib3gtY2hhcnQvYm94LWNoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBCdWJibGVDaGFydE1vZHVsZSB9IGZyb20gJy4vYnViYmxlLWNoYXJ0L2J1YmJsZS1jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgSGVhdE1hcE1vZHVsZSB9IGZyb20gJy4vaGVhdC1tYXAvaGVhdC1tYXAubW9kdWxlJztcbmltcG9ydCB7IExpbmVDaGFydE1vZHVsZSB9IGZyb20gJy4vbGluZS1jaGFydC9saW5lLWNoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQb2xhckNoYXJ0TW9kdWxlIH0gZnJvbSAnLi9wb2xhci1jaGFydC9wb2xhci1jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgTnVtYmVyQ2FyZE1vZHVsZSB9IGZyb20gJy4vbnVtYmVyLWNhcmQvbnVtYmVyLWNhcmQubW9kdWxlJztcbmltcG9ydCB7IFBpZUNoYXJ0TW9kdWxlIH0gZnJvbSAnLi9waWUtY2hhcnQvcGllLWNoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBUcmVlTWFwTW9kdWxlIH0gZnJvbSAnLi90cmVlLW1hcC90cmVlLW1hcC5tb2R1bGUnO1xuaW1wb3J0IHsgR2F1Z2VNb2R1bGUgfSBmcm9tICcuL2dhdWdlL2dhdWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBuZ3hDaGFydHNQb2x5ZmlsbHMgfSBmcm9tICcuL3BvbHlmaWxscyc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtcbiAgICBDaGFydENvbW1vbk1vZHVsZSxcbiAgICBBcmVhQ2hhcnRNb2R1bGUsXG4gICAgQmFyQ2hhcnRNb2R1bGUsXG4gICAgQm94Q2hhcnRNb2R1bGUsXG4gICAgQnViYmxlQ2hhcnRNb2R1bGUsXG4gICAgSGVhdE1hcE1vZHVsZSxcbiAgICBMaW5lQ2hhcnRNb2R1bGUsXG4gICAgUG9sYXJDaGFydE1vZHVsZSxcbiAgICBOdW1iZXJDYXJkTW9kdWxlLFxuICAgIFBpZUNoYXJ0TW9kdWxlLFxuICAgIFRyZWVNYXBNb2R1bGUsXG4gICAgR2F1Z2VNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDaGFydHNNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBuZ3hDaGFydHNQb2x5ZmlsbHMoKTtcbiAgfVxufVxuIl19