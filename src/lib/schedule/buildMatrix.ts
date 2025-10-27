import { DaySchedule } from "./types";
import { getDayName, formatTime } from "./helpers";
import { Group } from "../../types/group";
import { Subject } from "../../types/subject";
import { DAYS } from "./constants";

export function groupScheduleByDay(groups: Group[], subjects: Subject[]): DaySchedule {
    const scheduleByDay: DaySchedule = {};
    for (const day of DAYS) {
        scheduleByDay[day] = [];
    }

    const subjectMap = new Map(subjects.map(s => [s.code, s.name]));

    for (const group of groups) {
        const subjectName = subjectMap.get(group.subjectCode) || group.subjectCode;

        for (const schedule of group.schedules) {
            const dayName = getDayName(schedule.startSession);

            if (scheduleByDay[dayName]) {
                scheduleByDay[dayName].push({
                    subjectCode: group.subjectCode,
                    subjectName,
                    groupNumber: group.numberGroup,
                    startTime: formatTime(schedule.startSession),
                    endTime: formatTime(schedule.endSession),
                    startDate: new Date(schedule.startSession),
                    endDate: new Date(schedule.endSession)
                });
            }
        }
    }
    for (const day of DAYS) {
        scheduleByDay[day].sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    }

    return scheduleByDay;
}
