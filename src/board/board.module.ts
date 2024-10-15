import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';

// 추가 기록 : controller을 사용하기 위해서는 먼저 module에 추가를 해주어야 한다.
@Module({
  controllers : [BoardController],
  providers: [BoardService]
})
export class BoardModule {}
