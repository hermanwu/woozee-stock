import { Injectable } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { Opinion } from 'src/app/notes/components/opinion-display/opinion.interface';
import { Fact } from 'src/app/risks/models/fact.model';
import { convertDateToUTC } from 'src/app/shared/functions/date.function';
import { allNotes } from '../../mock-data/notes-mock.const';

@Injectable({
  providedIn: 'root',
})
export class NotesServices {
  notes: (Opinion | Fact)[] = allNotes;

  constructor(private userServices: UserServices) {}

  getNewsByLanguage(language: string) {
    if (language === 'cn') {
      return this.notes.filter((item) => item.title?.match(/[\u3400-\u9FBF]/));
    }

    return this.notes.filter((item) => !item.title?.match(/[\u3400-\u9FBF]/));
  }

  getNewsByDate(date: Date) {
    return this.notes.filter(
      (item) => new Date(item.createdDate) >= convertDateToUTC(date)
    );
  }

  getNotesByTargets(targetUuids: string[]) {
    return this.notes.filter((item) =>
      item.targetUuids?.some((t) => targetUuids.includes(t.toLowerCase()))
    );
  }

  getNewsByUuid(uuid: string) {
    return this.notes.find((item) => item.uuid === uuid);
  }

  getNotesByUuids(uuids: string[]) {
    return this.notes.filter((item) => uuids.includes(item.uuid));
  }

  getNotesByCreatorUuid(uuid: string) {
    return this.notes.filter((item) => item.creatorUuid === uuid);
  }
}
