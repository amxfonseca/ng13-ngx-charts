import { EventEmitter, ViewContainerRef, Renderer2, OnDestroy, TemplateRef } from '@angular/core';
import { PlacementTypes } from './position';
import { StyleTypes } from './style.type';
import { ShowTypes } from './show.type';
import { TooltipService } from './tooltip.service';
import * as i0 from "@angular/core";
export declare class TooltipDirective implements OnDestroy {
    private tooltipService;
    private viewContainerRef;
    private renderer;
    tooltipCssClass: string;
    tooltipTitle?: string;
    tooltipAppendToBody: boolean;
    tooltipSpacing: number;
    tooltipDisabled: boolean;
    tooltipShowCaret: boolean;
    tooltipPlacement: PlacementTypes;
    tooltipAlignment: PlacementTypes;
    tooltipType: StyleTypes;
    tooltipCloseOnClickOutside: boolean;
    tooltipCloseOnMouseLeave: boolean;
    tooltipHideTimeout: number;
    tooltipShowTimeout: number;
    tooltipTemplate: TemplateRef<any>;
    tooltipShowEvent: ShowTypes;
    tooltipContext: any;
    tooltipImmediateExit: boolean;
    show: EventEmitter<boolean>;
    hide: EventEmitter<boolean>;
    private get listensForFocus();
    private get listensForHover();
    private component;
    private timeout;
    private mouseLeaveContentEvent;
    private mouseEnterContentEvent;
    private documentClickEvent;
    constructor(tooltipService: TooltipService, viewContainerRef: ViewContainerRef, renderer: Renderer2);
    ngOnDestroy(): void;
    onFocus(): void;
    onBlur(): void;
    onMouseEnter(): void;
    onMouseLeave(target: any): void;
    onMouseClick(): void;
    showTooltip(immediate?: boolean): void;
    addHideListeners(tooltip: HTMLElement): void;
    hideTooltip(immediate?: boolean): void;
    private createBoundOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TooltipDirective, "[ngx-tooltip]", never, { "tooltipCssClass": "tooltipCssClass"; "tooltipTitle": "tooltipTitle"; "tooltipAppendToBody": "tooltipAppendToBody"; "tooltipSpacing": "tooltipSpacing"; "tooltipDisabled": "tooltipDisabled"; "tooltipShowCaret": "tooltipShowCaret"; "tooltipPlacement": "tooltipPlacement"; "tooltipAlignment": "tooltipAlignment"; "tooltipType": "tooltipType"; "tooltipCloseOnClickOutside": "tooltipCloseOnClickOutside"; "tooltipCloseOnMouseLeave": "tooltipCloseOnMouseLeave"; "tooltipHideTimeout": "tooltipHideTimeout"; "tooltipShowTimeout": "tooltipShowTimeout"; "tooltipTemplate": "tooltipTemplate"; "tooltipShowEvent": "tooltipShowEvent"; "tooltipContext": "tooltipContext"; "tooltipImmediateExit": "tooltipImmediateExit"; }, { "show": "show"; "hide": "hide"; }, never>;
}
