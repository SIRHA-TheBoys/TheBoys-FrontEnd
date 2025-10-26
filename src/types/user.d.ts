import { StudyPlan } from "./studyPlan"

export interface User {
    id?: string
    name?: string
    email?: string
    password?: string
    role?: Role
    career?: string
    semester?: number
    studyPlan?: StudyPlan
}