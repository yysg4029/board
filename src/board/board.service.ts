import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
    private boards = [
        {
            id : 1,
            name : 'test1',
            contents : 'content1',
        },
        {
            id : 2,
            name : 'test2',
            contents : 'content2',
        },
        {
            id : 3,
            name : 'test3',
            contents : 'content3',
        },
        {
            id : 4,
            name : 'test4',
            contents : 'content4',
        },
        {
            id : 5,
            name : 'test5',
            contents : 'content5',
        }
    ];

    findAll() {
        return this.boards;
    }

    find(id : number){
        const index = this.getBoardId(id);
        return this.boards[index];
    }

    create(data){
        const newBoard = { id : this.getNextId(), ...data}
        this.boards.push(newBoard);
        return newBoard;
    }

    update(id : number, data){
        const index = this.getBoardId(id);

        if(index > -1){
            this.boards[index] = {
                ...this.boards[index],
                ...data
            }
            return this.boards;
        };

        return null;
    }

    delete(id : number) {
        const index = this.getBoardId(id);

        if(index>-1){
            const deleteBoard = this.boards[index];
            this.boards.splice(index,1);
            return deleteBoard
        }
        return null;
    }

    getBoardId(id : number){
        return this.boards.findIndex((board) => board.id === id)
    }
    getNextId() {
        return this.boards.sort((a,b) =>(b.id - a.id))[0].id + 1;

    }

}
