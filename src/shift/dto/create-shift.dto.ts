import { IsNumber, IsString, IsNotEmpty, IsDate, isNotEmpty, IsDateString } from "class-validator"
import { Status } from "../entity/shift.entity"


export class CreateShiftDto {
    @IsNumber()
    assignedId: number
    @IsDateString()
    startDate: Date
    @IsDateString()
    finishDate: Date
    @IsNotEmpty()
    status: Status
    @IsString()
    place: string
}