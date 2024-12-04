export type FarmingType = 'Subsistence' | 'Commercial' | 'Plantation' | 'Mixed' | 'Intensive' | 'Organic';

export interface UserProfile {
  name: string;
  age: number;
  gender: string;
  photo: string;
  mobile: string;
  farmingType: FarmingType;
  location: {
    latitude: number;
    longitude: number;
  };
}