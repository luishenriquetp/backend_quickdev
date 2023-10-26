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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const update_post_dto_1 = require("./dto/update-post.dto");
const activeUserId_1 = require("../../shared/decorators/activeUserId");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const crypto_1 = require("crypto");
const path = require("path");
const rxjs_1 = require("rxjs");
const posts_histories_service_1 = require("../posts-histories/posts-histories.service");
const storage = {
    storage: (0, multer_1.diskStorage)({
        destination: '../../uploads',
        filename: (req, file, cb) => {
            const randomString = (0, crypto_1.randomUUID)().replace(/-/g, '');
            const filename = path.parse(file.originalname).name.replace(/\s/g, ' ') + randomString;
            const extension = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`);
        },
    }),
};
let PostsController = class PostsController {
    constructor(postsService, postsHistoriesService) {
        this.postsService = postsService;
        this.postsHistoriesService = postsHistoriesService;
    }
    create(userId, payload) {
        return this.postsService.create(userId, payload);
    }
    uploadFile(file) {
        return (0, rxjs_1.of)({ imagePath: file.filename });
    }
    findAll(userId) {
        return this.postsService.findAllByUserId(userId);
    }
    async findOne(userId, postId) {
        const post = await this.postsService.findOne(userId, postId);
        if (!post)
            throw new common_1.NotFoundException('Post not found');
        this.postsService.update(userId, postId, {
            description: post.description,
            title: post.title,
            viewsCount: post.viewsCount + 1,
        });
    }
    async update(userId, id, updatePostDto) {
        await this.postsHistoriesService.create(userId, id, updatePostDto);
        return this.postsService.update(userId, id, updatePostDto);
    }
    remove(userId, id) {
        return this.postsService.remove(userId, id);
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, activeUserId_1.ActiveUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', storage)),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, activeUserId_1.ActiveUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':postId'),
    __param(0, (0, activeUserId_1.ActiveUserId)()),
    __param(1, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':postId'),
    __param(0, (0, activeUserId_1.ActiveUserId)()),
    __param(1, (0, common_1.Param)('postId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':postId'),
    __param(0, (0, activeUserId_1.ActiveUserId)()),
    __param(1, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "remove", null);
exports.PostsController = PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService,
        posts_histories_service_1.PostsHistoriesService])
], PostsController);
//# sourceMappingURL=posts.controller.js.map