import { Injectable } from '@angular/core';
import { topics } from 'src/app/mock-data/mock-topics.data';

@Injectable({
  providedIn: 'root',
})
export class TopicServices {
  topics = new Map();

  constructor() {
    for (let i = 0; i < topics.length; i++) {
      this.topics.set(topics[i].uuid, topics[i]);
    }
  }

  getTopicByUuid(uuid: string) {
    return this.topics.get(uuid.toLowerCase());
  }
}
