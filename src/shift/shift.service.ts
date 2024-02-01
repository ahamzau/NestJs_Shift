import { Injectable } from '@nestjs/common';
import { Shift, Status } from './entity/shift.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ShiftService {
    constructor(
        @InjectRepository(Shift)
        private readonly shiftRepository: Repository<Shift>,
        private readonly userService: UserService
    ) {
        
    }

    async createShift(createShiftDto: CreateShiftDto, userId: number){

        const assignee = await this.userService.getById(userId)
        const assigned = await this.userService.getById(createShiftDto.assignedId)
        const shift: Shift = {
            assignee: assignee,
            assigned: assigned,
            startDate: createShiftDto.startDate,
            id: 0,
            finishDate: new Date(createShiftDto.finishDate),
            status: createShiftDto.status,
            createdAt: undefined,
            updatedAt: undefined,
            isActive: true,
            place: createShiftDto.place
        }
        const shiftToCreate = await this.shiftRepository.create(shift)
        return this.shiftRepository.save(shiftToCreate)
    }

    getAll(){
        return this.shiftRepository.find()
    }

    getById(shiftId: number){
        return this.shiftRepository.findOne({
            where: {
                id: shiftId
            }
        })
    }
}
