import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './charts/chart.component';
import { BaseChartComponent } from './base-chart.component';
import { AxesModule } from './axes/axes.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { CircleSeriesComponent } from './circle-series.component';
import { CircleComponent } from './circle.component';
import { GridPanelComponent } from './grid-panel.component';
import { GridPanelSeriesComponent } from './grid-panel-series.component';
import { SvgLinearGradientComponent } from './svg-linear-gradient.component';
import { SvgRadialGradientComponent } from './svg-radial-gradient.component';
import { AreaComponent } from './area.component';
import { CountUpDirective } from './count/count.directive';
import { TooltipArea } from './tooltip-area.component';
import { Timeline } from './timeline/timeline.component';
import { VisibilityObserver } from '../utils/visibility-observer';
import { LegendComponent } from './legend/legend.component';
import { LegendEntryComponent } from './legend/legend-entry.component';
import { ScaleLegendComponent } from './legend/scale-legend.component';
import { AdvancedLegendComponent } from './legend/advanced-legend.component';
import * as i0 from "@angular/core";
const COMPONENTS = [
    AreaComponent,
    BaseChartComponent,
    CountUpDirective,
    TooltipArea,
    ChartComponent,
    LegendComponent,
    LegendEntryComponent,
    ScaleLegendComponent,
    CircleComponent,
    CircleSeriesComponent,
    GridPanelComponent,
    GridPanelSeriesComponent,
    SvgLinearGradientComponent,
    SvgRadialGradientComponent,
    Timeline,
    AdvancedLegendComponent
];
export class ChartCommonModule {
}
ChartCommonModule.ɵfac = function ChartCommonModule_Factory(t) { return new (t || ChartCommonModule)(); };
ChartCommonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ChartCommonModule });
ChartCommonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, AxesModule, TooltipModule], CommonModule, AxesModule, TooltipModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartCommonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, AxesModule, TooltipModule],
                declarations: [...COMPONENTS, VisibilityObserver],
                exports: [CommonModule, AxesModule, TooltipModule, ...COMPONENTS, VisibilityObserver]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChartCommonModule, { declarations: [AreaComponent,
        BaseChartComponent,
        CountUpDirective,
        TooltipArea,
        ChartComponent,
        LegendComponent,
        LegendEntryComponent,
        ScaleLegendComponent,
        CircleComponent,
        CircleSeriesComponent,
        GridPanelComponent,
        GridPanelSeriesComponent,
        SvgLinearGradientComponent,
        SvgRadialGradientComponent,
        Timeline,
        AdvancedLegendComponent, VisibilityObserver], imports: [CommonModule, AxesModule, TooltipModule], exports: [CommonModule, AxesModule, TooltipModule, AreaComponent,
        BaseChartComponent,
        CountUpDirective,
        TooltipArea,
        ChartComponent,
        LegendComponent,
        LegendEntryComponent,
        ScaleLegendComponent,
        CircleComponent,
        CircleSeriesComponent,
        GridPanelComponent,
        GridPanelSeriesComponent,
        SvgLinearGradientComponent,
        SvgRadialGradientComponent,
        Timeline,
        AdvancedLegendComponent, VisibilityObserver] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9jb21tb24vY2hhcnQtY29tbW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQUU3RSxNQUFNLFVBQVUsR0FBRztJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLFFBQVE7SUFDUix1QkFBdUI7Q0FDeEIsQ0FBQztBQU9GLE1BQU0sT0FBTyxpQkFBaUI7O2tGQUFqQixpQkFBaUI7bUVBQWpCLGlCQUFpQjt1RUFKbkIsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxFQUV4QyxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWE7dUZBRXRDLGlCQUFpQjtjQUw3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUM7Z0JBQ2xELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLGtCQUFrQixDQUFDO2dCQUNqRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxHQUFHLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQzthQUN0Rjs7d0ZBQ1ksaUJBQWlCLG1CQXZCNUIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQixRQUFRO1FBQ1IsdUJBQXVCLEVBS08sa0JBQWtCLGFBRHRDLFlBQVksRUFBRSxVQUFVLEVBQUUsYUFBYSxhQUV2QyxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFyQmpELGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxjQUFjO1FBQ2QsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsUUFBUTtRQUNSLHVCQUF1QixFQU0yQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0cy9jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBeGVzTW9kdWxlIH0gZnJvbSAnLi9heGVzL2F4ZXMubW9kdWxlJztcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2lyY2xlU2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnLi9jaXJjbGUtc2VyaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2NpcmNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkUGFuZWxTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtcGFuZWwtc2VyaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdmdMaW5lYXJHcmFkaWVudENvbXBvbmVudCB9IGZyb20gJy4vc3ZnLWxpbmVhci1ncmFkaWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ZnUmFkaWFsR3JhZGllbnRDb21wb25lbnQgfSBmcm9tICcuL3N2Zy1yYWRpYWwtZ3JhZGllbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEFyZWFDb21wb25lbnQgfSBmcm9tICcuL2FyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IENvdW50VXBEaXJlY3RpdmUgfSBmcm9tICcuL2NvdW50L2NvdW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb29sdGlwQXJlYSB9IGZyb20gJy4vdG9vbHRpcC1hcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lbGluZSB9IGZyb20gJy4vdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFZpc2liaWxpdHlPYnNlcnZlciB9IGZyb20gJy4uL3V0aWxzL3Zpc2liaWxpdHktb2JzZXJ2ZXInO1xuaW1wb3J0IHsgTGVnZW5kQ29tcG9uZW50IH0gZnJvbSAnLi9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWdlbmRFbnRyeUNvbXBvbmVudCB9IGZyb20gJy4vbGVnZW5kL2xlZ2VuZC1lbnRyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NhbGVMZWdlbmRDb21wb25lbnQgfSBmcm9tICcuL2xlZ2VuZC9zY2FsZS1sZWdlbmQuY29tcG9uZW50JztcbmltcG9ydCB7IEFkdmFuY2VkTGVnZW5kQ29tcG9uZW50IH0gZnJvbSAnLi9sZWdlbmQvYWR2YW5jZWQtbGVnZW5kLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIEFyZWFDb21wb25lbnQsXG4gIEJhc2VDaGFydENvbXBvbmVudCxcbiAgQ291bnRVcERpcmVjdGl2ZSxcbiAgVG9vbHRpcEFyZWEsXG4gIENoYXJ0Q29tcG9uZW50LFxuICBMZWdlbmRDb21wb25lbnQsXG4gIExlZ2VuZEVudHJ5Q29tcG9uZW50LFxuICBTY2FsZUxlZ2VuZENvbXBvbmVudCxcbiAgQ2lyY2xlQ29tcG9uZW50LFxuICBDaXJjbGVTZXJpZXNDb21wb25lbnQsXG4gIEdyaWRQYW5lbENvbXBvbmVudCxcbiAgR3JpZFBhbmVsU2VyaWVzQ29tcG9uZW50LFxuICBTdmdMaW5lYXJHcmFkaWVudENvbXBvbmVudCxcbiAgU3ZnUmFkaWFsR3JhZGllbnRDb21wb25lbnQsXG4gIFRpbWVsaW5lLFxuICBBZHZhbmNlZExlZ2VuZENvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQXhlc01vZHVsZSwgVG9vbHRpcE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIFZpc2liaWxpdHlPYnNlcnZlcl0sXG4gIGV4cG9ydHM6IFtDb21tb25Nb2R1bGUsIEF4ZXNNb2R1bGUsIFRvb2x0aXBNb2R1bGUsIC4uLkNPTVBPTkVOVFMsIFZpc2liaWxpdHlPYnNlcnZlcl1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21tb25Nb2R1bGUge31cbiJdfQ==