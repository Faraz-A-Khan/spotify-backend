import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class createSongDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsArray()
  readonly artists: string[];

  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: number;

  @IsNotEmpty()
  @IsDateString()
  readonly releaseDate: Date;
}