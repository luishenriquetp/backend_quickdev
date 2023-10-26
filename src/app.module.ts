import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { PostsModule } from './modules/posts/posts.module';
import { PostsHistoriesModule } from './modules/posts-histories/posts-histories.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    AuthModule,
    PostsModule,
    PostsHistoriesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
