import { Injectable } from '@angular/core';
import { TooltipContentComponent } from './tooltip.component';
import { InjectionRegisteryService } from './injection-registery.service';
import * as i0 from "@angular/core";
import * as i1 from "./injection.service";
export class TooltipService extends InjectionRegisteryService {
    constructor(injectionService) {
        super(injectionService);
        this.type = TooltipContentComponent;
    }
}
TooltipService.ɵfac = function TooltipService_Factory(t) { return new (t || TooltipService)(i0.ɵɵinject(i1.InjectionService)); };
TooltipService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TooltipService, factory: TooltipService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipService, [{
        type: Injectable
    }], function () { return [{ type: i1.InjectionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2NvbW1vbi90b29sdGlwL3Rvb2x0aXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFFMUUsTUFBTSxPQUFPLGNBQWUsU0FBUSx5QkFBa0Q7SUFHcEYsWUFBWSxnQkFBa0M7UUFDNUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFIMUIsU0FBSSxHQUFRLHVCQUF1QixDQUFDO0lBSXBDLENBQUM7OzRFQUxVLGNBQWM7b0VBQWQsY0FBYyxXQUFkLGNBQWM7dUZBQWQsY0FBYztjQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0aW9uU2VydmljZSB9IGZyb20gJy4vaW5qZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7IEluamVjdGlvblJlZ2lzdGVyeVNlcnZpY2UgfSBmcm9tICcuL2luamVjdGlvbi1yZWdpc3Rlcnkuc2VydmljZSc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9vbHRpcFNlcnZpY2UgZXh0ZW5kcyBJbmplY3Rpb25SZWdpc3RlcnlTZXJ2aWNlPFRvb2x0aXBDb250ZW50Q29tcG9uZW50PiB7XG4gIHR5cGU6IGFueSA9IFRvb2x0aXBDb250ZW50Q29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdGlvblNlcnZpY2U6IEluamVjdGlvblNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rpb25TZXJ2aWNlKTtcbiAgfVxufVxuIl19