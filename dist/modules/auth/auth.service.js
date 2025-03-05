"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_reporitories_1 = require("../../shared/database/repositories/users.reporitories");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersRepo, jwtService) {
        this.usersRepo = usersRepo;
        this.jwtService = jwtService;
    }
    async singIn({ email, password }) {
        const user = await this.usersRepo.findByEmail(email);
        if (!user)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const isPasswordValid = await (0, bcryptjs_1.compare)(password, user.password);
        if (!isPasswordValid)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const accessToken = await this.generateAccessToken(user.id);
        return { accessToken };
    }
    async signUp({ email, name, password }) {
        const emailTaken = await this.usersRepo.findByEmail(email);
        if (emailTaken) {
            throw new common_1.ConflictException('This email is already in use');
        }
        const hashedPassword = await (0, bcryptjs_1.hash)(password, 12);
        const user = await this.usersRepo.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });
        const accessToken = await this.generateAccessToken(user.id);
        return { accessToken };
    }
    generateAccessToken(userId) {
        return this.jwtService.signAsync({ sub: userId });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_reporitories_1.UsersRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map