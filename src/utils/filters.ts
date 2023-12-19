import { CarBodyTypes } from "../types/car-body-types";

export function getCarBodyType(bodyType: CarBodyTypes){
  if(bodyType === CarBodyTypes.SUV) return 'suv';
  if(bodyType === CarBodyTypes.STATE) return 'estate';
  if(bodyType === CarBodyTypes.SEDAN) return 'sedan';
  return '';
}
