export function reduceTicks(ticks, maxTicks) {
    if (ticks.length > maxTicks) {
        const reduced = [];
        const modulus = Math.floor(ticks.length / maxTicks);
        for (let i = 0; i < ticks.length; i++) {
            if (i % modulus === 0) {
                reduced.push(ticks[i]);
            }
        }
        ticks = reduced;
    }
    return ticks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja3MuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvbGliL2NvbW1vbi9heGVzL3RpY2tzLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQVksRUFBRSxRQUFnQjtJQUN4RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxFQUFFO1FBQzNCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDcEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLEdBQUcsT0FBTyxLQUFLLENBQUMsRUFBRTtnQkFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QjtTQUNGO1FBQ0QsS0FBSyxHQUFHLE9BQU8sQ0FBQztLQUNqQjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZWR1Y2VUaWNrcyh0aWNrczogYW55W10sIG1heFRpY2tzOiBudW1iZXIpOiBhbnlbXSB7XG4gIGlmICh0aWNrcy5sZW5ndGggPiBtYXhUaWNrcykge1xuICAgIGNvbnN0IHJlZHVjZWQgPSBbXTtcbiAgICBjb25zdCBtb2R1bHVzID0gTWF0aC5mbG9vcih0aWNrcy5sZW5ndGggLyBtYXhUaWNrcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgJSBtb2R1bHVzID09PSAwKSB7XG4gICAgICAgIHJlZHVjZWQucHVzaCh0aWNrc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRpY2tzID0gcmVkdWNlZDtcbiAgfVxuXG4gIHJldHVybiB0aWNrcztcbn1cbiJdfQ==