"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostsHistoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_posts_history_dto_1 = require("./create-posts-history.dto");
class UpdatePostsHistoryDto extends (0, mapped_types_1.PartialType)(create_posts_history_dto_1.CreatePostsHistoryDto) {
}
exports.UpdatePostsHistoryDto = UpdatePostsHistoryDto;
//# sourceMappingURL=update-posts-history.dto.js.map