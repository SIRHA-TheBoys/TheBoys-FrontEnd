import { Faculty } from "./enums"
import { StudyPlan } from "./studyPlan"

export interface User {
    id?: string
    name?: string
    email?: string
    password?: string
    role?: Role
    career?: string
    faculty?: Faculty
    semester?: number
    studyPlan?: StudyPlan
}