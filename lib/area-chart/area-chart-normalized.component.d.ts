import { EventEmitter, TemplateRef, TrackByFunction } from '@angular/core';
import { ColorHelper } from '../common/color.helper';
import { BaseChartComponent } from '../common/base-chart.component';
import { Series } from '../models/chart-data.model';
import { SeriesType } from '../common/circle-series.component';
import { LegendOptions, LegendPosition } from '../common/types/legend.model';
import { ScaleType } from '../common/types/scale-type.enum';
import { ViewDimensions } from '../common/types/view-dimension.interface';
import * as i0 from "@angular/core";
export declare class AreaChartNormalizedComponent extends BaseChartComponent {
    legend: boolean;
    legendTitle: string;
    legendPosition: LegendPosition;
    xAxis: boolean;
    yAxis: boolean;
    showXAxisLabel: boolean;
    showYAxisLabel: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    timeline: any;
    gradient: any;
    showGridLines: boolean;
    curve: any;
    activeEntries: any[];
    schemeType: ScaleType;
    trimXAxisTicks: boolean;
    trimYAxisTicks: boolean;
    rotateXAxisTicks: boolean;
    maxXAxisTickLength: number;
    maxYAxisTickLength: number;
    xAxisTickFormatting: any;
    yAxisTickFormatting: any;
    xAxisTicks: any[];
    yAxisTicks: any[];
    roundDomains: boolean;
    tooltipDisabled: boolean;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    tooltipTemplate: TemplateRef<any>;
    seriesTooltipTemplate: TemplateRef<any>;
    dims: ViewDimensions;
    scaleType: ScaleType;
    xDomain: any[];
    xSet: any[];
    yDomain: [number, number];
    seriesDomain: any;
    xScale: any;
    yScale: any;
    transform: string;
    clipPathId: string;
    clipPath: string;
    colors: ColorHelper;
    margin: number[];
    tooltipAreas: any[];
    hoveredVertical: any;
    xAxisHeight: number;
    yAxisWidth: number;
    filteredDomain: any;
    legendOptions: LegendOptions;
    seriesType: typeof SeriesType;
    timelineWidth: any;
    timelineHeight: number;
    timelineXScale: any;
    timelineYScale: any;
    timelineXDomain: any;
    timelineTransform: any;
    timelinePadding: number;
    update(): void;
    updateTimeline(): void;
    getXDomain(): any[];
    getSeriesDomain(): string[];
    getXScale(domain: any, width: number): any;
    getYScale(domain: any, height: number): any;
    updateDomain(domain: any): void;
    updateHoveredVertical(item: any): void;
    hideCircles(): void;
    onClick(data: any, series?: any): void;
    trackBy: TrackByFunction<Series>;
    setColors(): void;
    getLegendOptions(): LegendOptions;
    updateYAxisWidth({ width }: {
        width: number;
    }): void;
    updateXAxisHeight({ height }: {
        height: number;
    }): void;
    onActivate(item: any): void;
    onDeactivate(item: any): void;
    deactivateAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AreaChartNormalizedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AreaChartNormalizedComponent, "ngx-charts-area-chart-normalized", never, { "legend": "legend"; "legendTitle": "legendTitle"; "legendPosition": "legendPosition"; "xAxis": "xAxis"; "yAxis": "yAxis"; "showXAxisLabel": "showXAxisLabel"; "showYAxisLabel": "showYAxisLabel"; "xAxisLabel": "xAxisLabel"; "yAxisLabel": "yAxisLabel"; "timeline": "timeline"; "gradient": "gradient"; "showGridLines": "showGridLines"; "curve": "curve"; "activeEntries": "activeEntries"; "schemeType": "schemeType"; "trimXAxisTicks": "trimXAxisTicks"; "trimYAxisTicks": "trimYAxisTicks"; "rotateXAxisTicks": "rotateXAxisTicks"; "maxXAxisTickLength": "maxXAxisTickLength"; "maxYAxisTickLength": "maxYAxisTickLength"; "xAxisTickFormatting": "xAxisTickFormatting"; "yAxisTickFormatting": "yAxisTickFormatting"; "xAxisTicks": "xAxisTicks"; "yAxisTicks": "yAxisTicks"; "roundDomains": "roundDomains"; "tooltipDisabled": "tooltipDisabled"; }, { "activate": "activate"; "deactivate": "deactivate"; }, ["tooltipTemplate", "seriesTooltipTemplate"], never>;
}
