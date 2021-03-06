import { ScaleType } from './types/scale-type.enum';
/**
 * Based on the data, return an array with unique values.
 *
 * @export
 * @returns array
 */
export function getUniqueXDomainValues(results) {
    const valueSet = new Set();
    for (const result of results) {
        for (const d of result.series) {
            valueSet.add(d.name);
        }
    }
    return Array.from(valueSet);
}
/**
 * Get the scaleType of enumerable of values.
 * @returns  'time', 'linear' or 'ordinal'
 */
export function getScaleType(values, checkDateType = true) {
    if (checkDateType) {
        const allDates = values.every(value => value instanceof Date);
        if (allDates) {
            return ScaleType.Time;
        }
    }
    const allNumbers = values.every(value => typeof value === 'number');
    if (allNumbers) {
        return ScaleType.Linear;
    }
    return ScaleType.Ordinal;
}
export function getXDomainArray(values, xScaleMin, xScaleMax) {
    const scaleType = getScaleType(values);
    let xSet = [];
    let domain = [];
    if (scaleType === ScaleType.Linear) {
        values = values.map(v => Number(v));
    }
    let min;
    let max;
    if (scaleType === ScaleType.Time || scaleType === ScaleType.Linear) {
        const mappedValues = values.map(v => Number(v));
        min = xScaleMin ? xScaleMin : Math.min(...mappedValues);
        max = xScaleMax ? xScaleMax : Math.max(...mappedValues);
    }
    if (scaleType === ScaleType.Time) {
        domain = [new Date(min), new Date(max)];
        xSet = [...values].sort((a, b) => {
            const aDate = a.getTime();
            const bDate = b.getTime();
            if (aDate > bDate)
                return 1;
            if (bDate > aDate)
                return -1;
            return 0;
        });
    }
    else if (scaleType === ScaleType.Linear) {
        domain = [min, max];
        // Use compare function to sort numbers numerically
        xSet = [...values].sort((a, b) => a - b);
    }
    else {
        domain = values;
        xSet = values;
    }
    return { domain, xSet, scaleType };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1jaGFydHMvc3JjL2xpYi9jb21tb24vZG9tYWluLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsT0FBYztJQUNuRCxNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzNCLEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1FBQzVCLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUM3QixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLE1BQWEsRUFBRSxnQkFBeUIsSUFBSTtJQUN2RSxJQUFJLGFBQWEsRUFBRTtRQUNqQixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ3ZCO0tBQ0Y7SUFFRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDcEUsSUFBSSxVQUFVLEVBQUU7UUFDZCxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUM7S0FDekI7SUFFRCxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFDM0IsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQzdCLE1BQXFDLEVBQ3JDLFNBQWtCLEVBQ2xCLFNBQWtCO0lBRWxCLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxJQUFJLElBQUksR0FBMkIsRUFBRSxDQUFDO0lBQ3RDLElBQUksTUFBTSxHQUEyQixFQUFFLENBQUM7SUFFeEMsSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUNsQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsSUFBSSxHQUFXLENBQUM7SUFDaEIsSUFBSSxHQUFXLENBQUM7SUFDaEIsSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLElBQUksSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUNsRSxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDeEQsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7S0FDekQ7SUFFRCxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1FBQ2hDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFPLEVBQUUsQ0FBTyxFQUFFLEVBQUU7WUFDM0MsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixJQUFJLEtBQUssR0FBRyxLQUFLO2dCQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzVCLElBQUksS0FBSyxHQUFHLEtBQUs7Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0tBQ0o7U0FBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ3pDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQixtREFBbUQ7UUFDbkQsSUFBSSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDMUQ7U0FBTTtRQUNMLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsSUFBSSxHQUFHLE1BQU0sQ0FBQztLQUNmO0lBRUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjYWxlVHlwZSB9IGZyb20gJy4vdHlwZXMvc2NhbGUtdHlwZS5lbnVtJztcbmltcG9ydCB7IFN0cmluZ09yTnVtYmVyT3JEYXRlIH0gZnJvbSAnLi4vbW9kZWxzL2NoYXJ0LWRhdGEubW9kZWwnO1xuLyoqXG4gKiBCYXNlZCBvbiB0aGUgZGF0YSwgcmV0dXJuIGFuIGFycmF5IHdpdGggdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAcmV0dXJucyBhcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlWERvbWFpblZhbHVlcyhyZXN1bHRzOiBhbnlbXSk6IGFueVtdIHtcbiAgY29uc3QgdmFsdWVTZXQgPSBuZXcgU2V0KCk7XG4gIGZvciAoY29uc3QgcmVzdWx0IG9mIHJlc3VsdHMpIHtcbiAgICBmb3IgKGNvbnN0IGQgb2YgcmVzdWx0LnNlcmllcykge1xuICAgICAgdmFsdWVTZXQuYWRkKGQubmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKHZhbHVlU2V0KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNjYWxlVHlwZSBvZiBlbnVtZXJhYmxlIG9mIHZhbHVlcy5cbiAqIEByZXR1cm5zICAndGltZScsICdsaW5lYXInIG9yICdvcmRpbmFsJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGVUeXBlKHZhbHVlczogYW55W10sIGNoZWNrRGF0ZVR5cGU6IGJvb2xlYW4gPSB0cnVlKTogU2NhbGVUeXBlIHtcbiAgaWYgKGNoZWNrRGF0ZVR5cGUpIHtcbiAgICBjb25zdCBhbGxEYXRlcyA9IHZhbHVlcy5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpO1xuICAgIGlmIChhbGxEYXRlcykge1xuICAgICAgcmV0dXJuIFNjYWxlVHlwZS5UaW1lO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFsbE51bWJlcnMgPSB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyk7XG4gIGlmIChhbGxOdW1iZXJzKSB7XG4gICAgcmV0dXJuIFNjYWxlVHlwZS5MaW5lYXI7XG4gIH1cblxuICByZXR1cm4gU2NhbGVUeXBlLk9yZGluYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRG9tYWluQXJyYXkoXG4gIHZhbHVlczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgRGF0ZT4sXG4gIHhTY2FsZU1pbj86IG51bWJlcixcbiAgeFNjYWxlTWF4PzogbnVtYmVyXG4pOiB7IGRvbWFpbjogYW55W107IHhTZXQ6IGFueVtdOyBzY2FsZVR5cGU6IHN0cmluZyB9IHtcbiAgY29uc3Qgc2NhbGVUeXBlID0gZ2V0U2NhbGVUeXBlKHZhbHVlcyk7XG4gIGxldCB4U2V0OiBTdHJpbmdPck51bWJlck9yRGF0ZVtdID0gW107XG4gIGxldCBkb21haW46IFN0cmluZ09yTnVtYmVyT3JEYXRlW10gPSBbXTtcblxuICBpZiAoc2NhbGVUeXBlID09PSBTY2FsZVR5cGUuTGluZWFyKSB7XG4gICAgdmFsdWVzID0gdmFsdWVzLm1hcCh2ID0+IE51bWJlcih2KSk7XG4gIH1cblxuICBsZXQgbWluOiBudW1iZXI7XG4gIGxldCBtYXg6IG51bWJlcjtcbiAgaWYgKHNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLlRpbWUgfHwgc2NhbGVUeXBlID09PSBTY2FsZVR5cGUuTGluZWFyKSB7XG4gICAgY29uc3QgbWFwcGVkVmFsdWVzID0gdmFsdWVzLm1hcCh2ID0+IE51bWJlcih2KSk7XG4gICAgbWluID0geFNjYWxlTWluID8geFNjYWxlTWluIDogTWF0aC5taW4oLi4ubWFwcGVkVmFsdWVzKTtcbiAgICBtYXggPSB4U2NhbGVNYXggPyB4U2NhbGVNYXggOiBNYXRoLm1heCguLi5tYXBwZWRWYWx1ZXMpO1xuICB9XG5cbiAgaWYgKHNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLlRpbWUpIHtcbiAgICBkb21haW4gPSBbbmV3IERhdGUobWluKSwgbmV3IERhdGUobWF4KV07XG4gICAgeFNldCA9IFsuLi52YWx1ZXNdLnNvcnQoKGE6IERhdGUsIGI6IERhdGUpID0+IHtcbiAgICAgIGNvbnN0IGFEYXRlID0gYS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCBiRGF0ZSA9IGIuZ2V0VGltZSgpO1xuICAgICAgaWYgKGFEYXRlID4gYkRhdGUpIHJldHVybiAxO1xuICAgICAgaWYgKGJEYXRlID4gYURhdGUpIHJldHVybiAtMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHNjYWxlVHlwZSA9PT0gU2NhbGVUeXBlLkxpbmVhcikge1xuICAgIGRvbWFpbiA9IFttaW4sIG1heF07XG4gICAgLy8gVXNlIGNvbXBhcmUgZnVuY3Rpb24gdG8gc29ydCBudW1iZXJzIG51bWVyaWNhbGx5XG4gICAgeFNldCA9IFsuLi52YWx1ZXNdLnNvcnQoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBhIC0gYik7XG4gIH0gZWxzZSB7XG4gICAgZG9tYWluID0gdmFsdWVzO1xuICAgIHhTZXQgPSB2YWx1ZXM7XG4gIH1cblxuICByZXR1cm4geyBkb21haW4sIHhTZXQsIHNjYWxlVHlwZSB9O1xufVxuIl19