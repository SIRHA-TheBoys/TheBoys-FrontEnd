export interface ScheduleCell {
    subjectCode: string;
    subjectName: string;
    groupNumber: string;
    rowSpan: number;
    isStart: boolean;
}

export type ScheduleMatrix = (ScheduleCell | null)[][];
