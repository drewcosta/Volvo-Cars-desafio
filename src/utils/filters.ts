import { FilterTypes } from "../types/car-filter-types";

export function getCategoryByType(type: FilterTypes){
  if(type === FilterTypes.SUV) return 'suv';
  if(type === FilterTypes.STATE) return 'estate';
  if(type === FilterTypes.SEDAN) return 'sedan';
  return '';
}
