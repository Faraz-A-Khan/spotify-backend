import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs: any[] = [];

  create(song: any): any[] {
    this.songs.push(song);
    return this.songs;
  }

  findAll(): any[] {
    throw new Error('No songs found');
    return this.songs;
  }
}
