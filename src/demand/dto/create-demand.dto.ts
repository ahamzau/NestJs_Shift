import { IsNumber, IsString } from "class-validator"

export class CreateDemandDto {
    @IsNumber()
    userId: number
    @IsNumber()
    oldShiftId: number
    @IsNumber()
    newShiftId: number
    @IsString()
    status: string
}