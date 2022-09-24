import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/auth/decorators/auth.decorator';
import { AuthJwtGuard } from 'src/common/auth/decorators/auth.jwt.decorator';
import { AuthInfoSerialization } from 'src/common/auth/serializations/auth.info.serialization';
import { Response } from 'src/common/response/decorators/response.decorator';
import { IResponse } from 'src/common/response/interfaces/response.interface';

@ApiTags('auth')
@Controller({
    version: '1',
    path: '/auth',
})
export class AuthController {
    @Response('auth.info', { classSerialization: AuthInfoSerialization })
    @AuthJwtGuard()
    @Get('/info')
    async info(@User() user: Record<string, any>): Promise<IResponse> {
        return user;
    }
}
