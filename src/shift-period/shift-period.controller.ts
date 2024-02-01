import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ShiftPeriodService } from './shift-period.service';
import { ShiftPeriodDto } from './dto/shift-period.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('shift-period')
@UseGuards(AuthGuard('jwt'))
export class ShiftPeriodController {
    constructor(private readonly shiftPeriodService: ShiftPeriodService) {}
    
    @Get('')
    getAll(){
        return this.shiftPeriodService.getAll();
    }

    @Post('')
    add(@Body() createShiftPeriodDto: ShiftPeriodDto){
        return this.shiftPeriodService.add(createShiftPeriodDto);
    }
}
