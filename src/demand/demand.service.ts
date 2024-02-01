import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Demand } from './entity/demand.entity';
import { Repository } from 'typeorm';
import { CreateDemandDto } from './dto/create-demand.dto';
import { UserService } from 'src/user/user.service';
import { ShiftService } from 'src/shift/shift.service';

@Injectable()
export class DemandService {
    constructor(
        @InjectRepository(Demand)
        private readonly demandRepository: Repository<Demand>,
        private readonly userService: UserService,
        private readonly shiftService: ShiftService

    ){}

    async add(createDemandDto: CreateDemandDto){
        const user = await this.userService.getById(createDemandDto.userId)
        const oldShift = await this.shiftService.getById(createDemandDto.oldShiftId)
        const newShift = await this.shiftService.getById(createDemandDto.newShiftId)

        if (!user || !oldShift || !newShift) {
            throw new BadRequestException()
        }

        const demand: Demand = {
            id: 0,
            user: user,
            oldShift: oldShift,
            newShift: newShift,
            status: createDemandDto.status,
            isActive: false
        }
        return this.demandRepository.save(demand)
    }

    getAll(){
        return this.demandRepository.find()
    }
}
