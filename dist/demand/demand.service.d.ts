import { Demand } from './entity/demand.entity';
import { Repository } from 'typeorm';
import { CreateDemandDto } from './dto/create-demand.dto';
import { UserService } from 'src/user/user.service';
import { ShiftService } from 'src/shift/shift.service';
export declare class DemandService {
    private readonly demandRepository;
    private readonly userService;
    private readonly shiftService;
    constructor(demandRepository: Repository<Demand>, userService: UserService, shiftService: ShiftService);
    add(createDemandDto: CreateDemandDto): Promise<Demand>;
    getAll(): Promise<Demand[]>;
}
