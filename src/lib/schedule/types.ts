export interface ScheduleEvent {
    subjectCode: string;
    subjectName: string;
    groupNumber: string;
    startTime: string;
    endTime: string;
    startDate: Date;
    endDate: Date;
}

export type DaySchedule = Record<string, ScheduleEvent[]>;