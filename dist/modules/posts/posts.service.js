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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const posts_repositories_1 = require("../../shared/database/repositories/posts.repositories");
let PostsService = class PostsService {
    constructor(postsRepo) {
        this.postsRepo = postsRepo;
    }
    create(userId, { description, title }) {
        return this.postsRepo.create({
            data: {
                userId,
                description,
                title,
            },
        });
    }
    findAllByUserId(userId) {
        return this.postsRepo.findMany({
            where: { userId },
        });
    }
    findOne(userId, postId) {
        return this.postsRepo.findUnique({
            where: { id: postId, userId },
        });
    }
    async update(userId, postId, updatePostDto) {
        const isOwner = await this.postsRepo.findFirst({
            where: {
                id: postId,
                userId,
            },
        });
        if (!isOwner) {
            throw new common_1.NotFoundException('Post not found');
        }
        return this.postsRepo.update({
            where: { id: postId },
            data: {
                ...updatePostDto,
            },
        });
    }
    async remove(userId, postId) {
        const isOwner = await this.postsRepo.findFirst({
            where: {
                id: postId,
                userId,
            },
        });
        if (!isOwner) {
            throw new common_1.NotFoundException('Post not found');
        }
        return this.postsRepo.delete({
            where: { id: postId },
        });
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [posts_repositories_1.PostsRepository])
], PostsService);
//# sourceMappingURL=posts.service.js.map