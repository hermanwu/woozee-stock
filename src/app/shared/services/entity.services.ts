import { Injectable } from '@angular/core';
import { getTradableItemsByUuids } from 'src/app/mock-data/mocks/tradables.mock';
import { OrganizationServices } from 'src/app/organizations/services/organization.services';
import { PeopleServices } from 'src/app/people/services/people.services';
import { StockServices } from 'src/app/stock/services/stock.service';

@Injectable({
  providedIn: 'root',
})
export class EntityServices {
  constructor(
    private stockServices: StockServices,
    private peopleServices: PeopleServices,
    private organizationServices: OrganizationServices
  ) {}
  getEntityByUuid(entityUuid: string): any {
    let cleanedEntityUuid = entityUuid.trim()?.toLowerCase();

    let tradables = getTradableItemsByUuids([cleanedEntityUuid]);
    if (tradables.length > 0) {
      return {
        uuid: cleanedEntityUuid,
        displayName: tradables[0].displayName,
        imageLink: tradables[0].logoLink,
        type: 'tradable',
        ticker: tradables[0].ticker,
      };
    }

    let stock = this.stockServices.getOrganizationByUuid(cleanedEntityUuid);

    if (stock) {
      return {
        uuid: cleanedEntityUuid,
        displayName: stock.displayName,
        imageLink: stock.logoLink,
        type: 'organization',
        ticker: stock.ticker,
      };
    }

    let organization =
      this.organizationServices.getOrganizationByUuid(cleanedEntityUuid);

    if (organization) {
      return {
        uuid: cleanedEntityUuid,
        displayName: organization.displayName,
        imageLink: organization.logoLink,
        type: 'organization',
      };
    }

    let person = this.peopleServices.getPersonByUuid(cleanedEntityUuid);

    if (person) {
      return {
        uuid: cleanedEntityUuid,
        displayName: person.displayName,
        imageLink: person.imageLink,
        type: 'people',
      };
    }
  }
}
