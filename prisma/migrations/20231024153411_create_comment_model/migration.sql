-- CreateTable
CREATE TABLE "coments" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "post_id" UUID NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "coments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coments" ADD CONSTRAINT "coments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coments" ADD CONSTRAINT "coments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
