import { DisplayType } from '../shared/components/stats-display/stats-display.interface';

export interface CompareCell {
  propertyName: string;
  displayName?: string;
  position?: string;
  type?: DisplayType;
}
