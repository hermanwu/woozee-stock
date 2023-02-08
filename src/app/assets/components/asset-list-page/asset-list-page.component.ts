import { Component, OnInit } from '@angular/core';
import { RegionCode } from '../../../shared/data/enum/region.enum';
import { Asset, AssetType } from '../../asset-type.enum';

@Component({
  selector: 'app-asset-list-page',
  templateUrl: './asset-list-page.component.html',
  styleUrls: ['./asset-list-page.component.scss'],
})
export class AssetListPageComponent implements OnInit {
  assets: Asset[] = [
    {
      name: 'US dollar',
      regionType: RegionCode.us,
      type: AssetType.cash,
    },
    {
      name: 'Stock',
      regionType: RegionCode.us,
      type: AssetType.stock,
    },
    {
      name: 'Primary Residence',
      regionType: RegionCode.us,
      type: AssetType.realEstate,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
