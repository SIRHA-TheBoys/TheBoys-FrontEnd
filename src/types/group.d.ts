export interface Group {

    numberGroup: string
    capacity: number
    availableQuotas: number
    subjectCode: string
    usersId: Array<string>
    schedules: Schedule[]

}