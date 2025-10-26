import { ScheduleMatrix } from "./types";
import { getDayName, getDecimalHour, getHourIndex, calculateRowSpan, buildSubjectMap } from "./helpers";
import { Group } from "../../types/group";
import { Subject } from "../../types/subject";
import { DAYS } from "./constants";

export function buildScheduleMatrix(groups: Group[], subjects: Subject[], rows: number = 13, days: string[] = DAYS): ScheduleMatrix {
    const matrix: ScheduleMatrix = new Array(days.length)
        .fill(null)
        .map(() => new Array(rows).fill(null));
    const subjectMap = buildSubjectMap(subjects);

    for (const group of groups) {
        const subjectName = subjectMap.get(group.subjectCode) || group.subjectCode;

        for (const schedule of group.schedules) {
            const dayName = getDayName(schedule.startSession);
            const dayIndex = days.indexOf(dayName);
            if (dayIndex === -1) continue;

            const startDecimal = getDecimalHour(schedule.startSession);
            const endDecimal = getDecimalHour(schedule.endSession);
            const startIndex = Math.floor(getHourIndex(startDecimal));
            const rowSpan = calculateRowSpan(startDecimal, endDecimal);

            if (matrix[dayIndex][startIndex] === null) {
                matrix[dayIndex][startIndex] = {
                    subjectCode: group.subjectCode,
                    subjectName,
                    groupNumber: group.numberGroup,
                    rowSpan,
                    isStart: true,
                };
                for (let i = 1; i < rowSpan; i++) {
                    if (startIndex + i < rows) {
                        matrix[dayIndex][startIndex + i] = {
                            subjectCode: group.subjectCode,
                            subjectName,
                            groupNumber: group.numberGroup,
                            rowSpan: 0,
                            isStart: false,
                        };
                    }
                }
            }
        }
    }

    return matrix;
}
