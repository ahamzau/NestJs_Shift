import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./entity/user.entity").User[]>;
    get(req: any): Promise<UserDto>;
}
