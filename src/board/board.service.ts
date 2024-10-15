import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
    private boards = [
        {
            name : 'test1',
            contents : 'content1',
            id : 1
        },
        {
            name : 'test2',
            contents : 'content2',
            id : 2
        },
        {
            name : 'test3',
            contents : 'content3',
            id : 3
        },
        {
            name : 'test4',
            contents : 'content4',
            id : 4
        },
        {
            name : 'test5',
            contents : 'content5',
            id : 5
        }
    ];

    findAll() {
        return this.boards;
    }

    find(id : number){
        const index = this.boards.findIndex((board) => board.id === id)
        return this.boards[index];
    }

    create(data){
        const newBoard = { id : this.getNextId(), ...data}
        this.boards.push(newBoard);
        return newBoard;
    }

    getNextId() {
        return this.boards.sort((a,b) =>(b.id - a.id))[0].id + 1;

    }
}
