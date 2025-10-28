export const normalizeISODate = (isoDate: string): string => {
    if (!isoDate.endsWith('Z') && !isoDate.includes('+') && !isoDate.includes('-', 10)) {
        return isoDate + 'Z';
    }
    return isoDate;
};

export const formatTime = (isoDate: string): string => {
    const date = new Date(isoDate);
    date.setHours(date.getHours() + 5);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes > 0 ? `:${minutes.toString().padStart(2, '0')}` : '';
    return `${displayHours}${displayMinutes} ${ampm}`;
};

export const getDayName = (isoDate: string): string => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(isoDate);
    return dayNames[date.getDay()];
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
