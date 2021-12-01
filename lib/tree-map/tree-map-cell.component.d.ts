import { EventEmitter, ElementRef, OnChanges } from '@angular/core';
import { DataItem } from '../models/chart-data.model';
import { Gradient } from '../common/types/gradient.interface';
import { BarOrientation } from '../common/types/bar-orientation.enum';
import * as i0 from "@angular/core";
export declare class TreeMapCellComponent implements OnChanges {
    data: DataItem;
    fill: string;
    x: number;
    y: number;
    width: number;
    height: number;
    label: string;
    value: any;
    valueFormatting: any;
    labelFormatting: any;
    gradient: boolean;
    animations: boolean;
    select: EventEmitter<any>;
    gradientStops: Gradient[];
    gradientId: string;
    gradientUrl: string;
    element: HTMLElement;
    transform: string;
    formattedLabel: string;
    formattedValue: string;
    initialized: boolean;
    orientation: typeof BarOrientation;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    update(): void;
    loadAnimation(): void;
    getTextColor(): string;
    animateToCurrentForm(): void;
    onClick(): void;
    getGradientStops(): Gradient[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeMapCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeMapCellComponent, "g[ngx-charts-tree-map-cell]", never, { "data": "data"; "fill": "fill"; "x": "x"; "y": "y"; "width": "width"; "height": "height"; "label": "label"; "value": "value"; "valueFormatting": "valueFormatting"; "labelFormatting": "labelFormatting"; "gradient": "gradient"; "animations": "animations"; }, { "select": "select"; }, never, never>;
}