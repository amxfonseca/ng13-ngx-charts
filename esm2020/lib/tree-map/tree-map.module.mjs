import { NgModule } from '@angular/core';
import { ChartCommonModule } from '../common/chart-common.module';
import { TreeMapCellComponent } from './tree-map-cell.component';
import { TreeMapCellSeriesComponent } from './tree-map-cell-series.component';
import { TreeMapComponent } from './tree-map.component';
import * as i0 from "@angular/core";
export class TreeMapModule {
}
TreeMapModule.ɵfac = function TreeMapModule_Factory(t) { return new (t || TreeMapModule)(); };
TreeMapModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TreeMapModule });
TreeMapModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[ChartCommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeMapModule, [{
        type: NgModule,
        args: [{
                imports: [ChartCommonModule],
                declarations: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent],
                exports: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TreeMapModule, { declarations: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent], imports: [ChartCommonModule], exports: [TreeMapCellComponent, TreeMapCellSeriesComponent, TreeMapComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tYXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL3RyZWUtbWFwL3RyZWUtbWFwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU94RCxNQUFNLE9BQU8sYUFBYTs7MEVBQWIsYUFBYTsrREFBYixhQUFhO21FQUpmLENBQUMsaUJBQWlCLENBQUM7dUZBSWpCLGFBQWE7Y0FMekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSwwQkFBMEIsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDbEYsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsMEJBQTBCLEVBQUUsZ0JBQWdCLENBQUM7YUFDOUU7O3dGQUNZLGFBQWEsbUJBSFQsb0JBQW9CLEVBQUUsMEJBQTBCLEVBQUUsZ0JBQWdCLGFBRHZFLGlCQUFpQixhQUVqQixvQkFBb0IsRUFBRSwwQkFBMEIsRUFBRSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY2hhcnQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBUcmVlTWFwQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1tYXAtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU1hcENlbGxTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtbWFwLWNlbGwtc2VyaWVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTWFwQ29tcG9uZW50IH0gZnJvbSAnLi90cmVlLW1hcC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2hhcnRDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUcmVlTWFwQ2VsbENvbXBvbmVudCwgVHJlZU1hcENlbGxTZXJpZXNDb21wb25lbnQsIFRyZWVNYXBDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVHJlZU1hcENlbGxDb21wb25lbnQsIFRyZWVNYXBDZWxsU2VyaWVzQ29tcG9uZW50LCBUcmVlTWFwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTWFwTW9kdWxlIHt9XG4iXX0=