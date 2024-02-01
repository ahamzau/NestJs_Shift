import { DemandService } from './demand.service';
import { CreateDemandDto } from './dto/create-demand.dto';
export declare class DemandController {
    private readonly demandService;
    constructor(demandService: DemandService);
    getAll(): Promise<import("./entity/demand.entity").Demand[]>;
    add(createDemandDto: CreateDemandDto): Promise<import("./entity/demand.entity").Demand>;
}
