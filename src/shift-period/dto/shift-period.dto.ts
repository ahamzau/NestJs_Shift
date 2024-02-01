import { IsDate, IsDateString } from "class-validator";

export class ShiftPeriodDto {
    @IsDateString()
    startDate: Date

    @IsDateString()
    finishDate: Date
}