import { Injectable } from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { Opinion } from 'src/app/notes/components/opinion-display/opinion.interface';
import { Fact } from 'src/app/risks/models/fact.model';
import { Stats } from 'src/app/shared/components/stats-display/stats-display.interface';
import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import { allNotes } from '../../mock-data/news.const';

@Injectable({
  providedIn: 'root',
})
export class NotesServices {
  notes: (Opinion | Stats | Fact)[] = allNotes;

  constructor(private userServices: UserServices) {}

  getNewsByLanguage(language: string) {
    if (language === 'cn') {
      return this.notes.filter((item) => item.title?.match(/[\u3400-\u9FBF]/));
    }

    return this.notes.filter((item) => !item.title?.match(/[\u3400-\u9FBF]/));
  }

  getAllNews() {
    const language = this.userServices.getLanguage();
    return this.getNewsByLanguage(language);
  }

  getNewsByDate(date: Date) {
    return this.notes.filter(
      (item) => new Date(item.createdDate) >= convertDateToUTC(date)
    );
  }

  getNotesByTargets(targets: string[]) {
    return this.notes.filter((item) =>
      item.targets?.some((t) => targets.includes(t))
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
