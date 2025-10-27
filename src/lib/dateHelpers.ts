export function formatDateToLocal(isoDate: string | null | undefined): string {
    if (!isoDate) return "-";

    try {
        let dateString = isoDate;


        if (!dateString.endsWith('Z') && !dateString.includes('+') && !dateString.includes('-', 10)) {
            dateString = dateString + 'Z';
        }

        const date = new Date(dateString);


        if (Number.isNaN(date.getTime())) {
            return "-";
        }


        return date.toLocaleString('es-CO', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'America/Bogota'
        });
    } catch (error) {
        console.error("Error formatting date:", error);
        return "-";
    }
}

export function formatDateOnly(isoDate: string | null | undefined): string {
    if (!isoDate) return "-";

    try {
        let dateString = isoDate;

        // If the date doesn't have timezone info, assume it's UTC
        if (!dateString.endsWith('Z') && !dateString.includes('+') && !dateString.includes('-', 10)) {
            dateString = dateString + 'Z';
        }

        const date = new Date(dateString);

        if (Number.isNaN(date.getTime())) {
            return "-";
        }

        return date.toLocaleDateString('es-CO', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'America/Bogota'
        });
    } catch (error) {
        console.error("Error formatting date:", error);
        return "-";
    }
}
