import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShiftPeriod } from './entity/shift-period.entity';
import { Repository } from 'typeorm';
import { ShiftPeriodDto } from './dto/shift-period.dto';

@Injectable()
export class ShiftPeriodService {
    constructor(
        @InjectRepository(ShiftPeriod)
        private readonly shiftPeriodRepository: Repository<ShiftPeriod>
    ){}

    add(shiftPeriodCreateDto: ShiftPeriodDto){
        return this.shiftPeriodRepository.save(shiftPeriodCreateDto);
    }

    getAll(){
        return this.shiftPeriodRepository.find();
    }
}
