import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { LinearGaugeComponent } from './linear-gauge.component';
import { GaugeComponent } from './gauge.component';
import { GaugeArcComponent } from './gauge-arc.component';
import { GaugeAxisComponent } from './gauge-axis.component';
import { PieChartModule } from '../pie-chart/pie-chart.module';
import { BarChartModule } from '../bar-chart/bar-chart.module';
import * as i0 from "@angular/core";
export class GaugeModule {
}
GaugeModule.ɵfac = function GaugeModule_Factory(t) { return new (t || GaugeModule)(); };
GaugeModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GaugeModule });
GaugeModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[ChartCommonModule, PieChartModule, BarChartModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GaugeModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule, PieChartModule, BarChartModule],
                declarations: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent],
                exports: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GaugeModule, { declarations: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent], imports: [ChartCommonModule, PieChartModule, BarChartModule], exports: [LinearGaugeComponent, GaugeComponent, GaugeArcComponent, GaugeAxisComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2dhdWdlL2dhdWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQU8vRCxNQUFNLE9BQU8sV0FBVzs7c0VBQVgsV0FBVzs2REFBWCxXQUFXO2lFQUpiLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQzt1RkFJakQsV0FBVztjQUx2QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztnQkFDNUQsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO2dCQUMzRixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7YUFDdkY7O3dGQUNZLFdBQVcsbUJBSFAsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixhQURoRixpQkFBaUIsRUFBRSxjQUFjLEVBQUUsY0FBYyxhQUVqRCxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0Q29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NoYXJ0LWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgTGluZWFyR2F1Z2VDb21wb25lbnQgfSBmcm9tICcuL2xpbmVhci1nYXVnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2F1Z2VDb21wb25lbnQgfSBmcm9tICcuL2dhdWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYXVnZUFyY0NvbXBvbmVudCB9IGZyb20gJy4vZ2F1Z2UtYXJjLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYXVnZUF4aXNDb21wb25lbnQgfSBmcm9tICcuL2dhdWdlLWF4aXMuY29tcG9uZW50JztcbmltcG9ydCB7IFBpZUNoYXJ0TW9kdWxlIH0gZnJvbSAnLi4vcGllLWNoYXJ0L3BpZS1jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgQmFyQ2hhcnRNb2R1bGUgfSBmcm9tICcuLi9iYXItY2hhcnQvYmFyLWNoYXJ0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDaGFydENvbW1vbk1vZHVsZSwgUGllQ2hhcnRNb2R1bGUsIEJhckNoYXJ0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTGluZWFyR2F1Z2VDb21wb25lbnQsIEdhdWdlQ29tcG9uZW50LCBHYXVnZUFyY0NvbXBvbmVudCwgR2F1Z2VBeGlzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0xpbmVhckdhdWdlQ29tcG9uZW50LCBHYXVnZUNvbXBvbmVudCwgR2F1Z2VBcmNDb21wb25lbnQsIEdhdWdlQXhpc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR2F1Z2VNb2R1bGUge31cbiJdfQ==