import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAll(): Promise<User[]>;
    add(user: User): Promise<User>;
    getByEmail(email: string): Promise<User>;
    getById(id: number): Promise<User>;
    getCurrentUser(email: string): Promise<UserDto>;
}
