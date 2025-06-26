import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { createSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) { }

    @Post()
    create(@Body() song: createSongDto): any {
        return this.songsService.create(song);
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll();
        } catch (error) {
            throw new HttpException('No songs found', HttpStatus.NOT_FOUND, {cause: error});
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `Details of a song with ID: ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: string): string {
        return `Details of a song with ID: ${id} updated`;
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        return `Song with ID: ${id} deleted`;
    }
}
