export const getDayName = (isoDate: string): string => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(isoDate);
    return dayNames[date.getDay()];
};

export const getDecimalHour = (isoDate: string): number => {
    const date = new Date(isoDate);
    return date.getHours() + date.getMinutes() / 60;
};

export const getHourIndex = (decimalHour: number): number => {
    return decimalHour - 7; // 7 AM es la hora base (índice 0)
};

export const calculateRowSpan = (startHour: number, endHour: number): number => {
    return Math.ceil(endHour - startHour);
};

export const getSubjectColor = (subjectCode: string): string => {
    const colors = [
        "#FFE5E5", "#E5F5FF", "#FFF5E5", "#E5FFE5",
        "#F5E5FF", "#FFE5F5", "#E5FFFF", "#FFFFE5"
    ];
    let hash = 0;
    for (let i = 0; i < subjectCode.length; i++) {
        hash = (subjectCode.codePointAt(i) || 0) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
};

export type SubjectMap = Map<string, string>;

export const buildSubjectMap = (subjects: Array<{ code: string; name: string }>): SubjectMap => {
    const map: SubjectMap = new Map();
    for (const s of subjects) map.set(s.code, s.name);
    return map;
};
