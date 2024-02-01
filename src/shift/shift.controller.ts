import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { AuthGuard } from '@nestjs/passport';
import { use } from 'passport';

@Controller('shifts')
export class ShiftController {

    constructor(
        private readonly shiftService: ShiftService
    ) {
        
    }

    @Post('')
    @UseGuards(AuthGuard('jwt'))
    createShift(@Body() createShiftDto: CreateShiftDto, @Request() req) {
        const userId = req.user.userId;
        return this.shiftService.createShift(createShiftDto, userId)
    }

    @Get('')
    @UseGuards(AuthGuard('jwt'))
    getAll(){
        return this.shiftService.getAll()
    }
}
