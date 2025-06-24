import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Get()
    findAll(): string {
        return 'List of songs';
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `Details of a song with ID: ${id}`;
    }

    @Post()
    PostSong(): string {
        return `Song Posted`;
    }

    @Put(':id')
    updateSong(@Param('id') id: string): string {
        return `Details of a song with ID: ${id} updated`;
    }

    @Delete(':id')
    deleteSong(@Param('id') id: string): string {
        return `Song with ID: ${id} deleted`;
    }
}
