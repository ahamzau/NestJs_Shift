import { Body, Controller, Get, Post } from '@nestjs/common';
import { DemandService } from './demand.service';
import { CreateDemandDto } from './dto/create-demand.dto';

@Controller('demand')
export class DemandController {
    constructor(private readonly demandService: DemandService) { }

    @Get('')
    getAll(){
        return this.demandService.getAll();
    }

    @Post('')
    add(@Body() createDemandDto: CreateDemandDto){
        return this.demandService.add(createDemandDto);
    }
}