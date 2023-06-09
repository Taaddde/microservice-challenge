import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JWTService {
    constructor(private jwtTokenService: JwtService) { }

    async getAccessToken(user: any) {
        const payload = { email: user.email, date: new Date() };

        return this.jwtTokenService.sign(payload);
    }

    async verifyToken(token: string): Promise<any> {
        try {
            const decoded = this.jwtTokenService.verify(token);
            return decoded;
        } catch (error) {
            return null;
        }
    }
}