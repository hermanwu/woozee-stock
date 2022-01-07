import { Note } from 'src/app/shared/data/note.interface';

export interface Risk {
  name: string;
  arguments: Note[];
  counterArguments: Note[];
  solutions: Note[];

  startTime: Date;
  endTime: Date;
}
