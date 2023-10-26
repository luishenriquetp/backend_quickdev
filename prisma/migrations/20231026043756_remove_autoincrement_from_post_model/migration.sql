-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "viewsCount" SET DEFAULT 0,
ALTER COLUMN "viewsCount" DROP DEFAULT;
DROP SEQUENCE "posts_viewsCount_seq";
