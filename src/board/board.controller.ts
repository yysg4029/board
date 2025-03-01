import { ApiTags } from '@nestjs/swagger';
import { BoardService } from './board.service';
import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';

@Controller('board')
@ApiTags('Board') // main.ts에서 airtag와 연동됨
export class BoardController {
    constructor(
        private readonly boardService : BoardService
    ){}
    // /board의 경우. 
    @Get()
    findAll() { // 모든 글
        return this.boardService.findAll();
    }
    @Get(':id') 
    find(   // 특정 id를 가진 글
        @Param('id') id : number
    ) {
        return  this.boardService.find(Number(id));
    }

    @Post()
    create( // 글 생성
        @Body() data
    ){
        return this.boardService.create(data);
    }

    @Put(':id')
    update( // 글 수정
        @Param('id') id : number,
        @Body() data : any
    ){
        return this.boardService.update(Number(id), data);
    }

    @Delete(':id')
    remove( // 글 삭제
        @Param('id') id : number
    ){
        return this.boardService.delete(Number(id));
    }
}

