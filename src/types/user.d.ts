<<<<<<< HEAD
=======
import { Faculty } from "./enums"
>>>>>>> 35256a90e1b59e13fb9ed4b7c15c811c9565a6a9
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