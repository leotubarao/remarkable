import slugify from 'slugify';

import { ICardCar } from '~/types';

type CardCarFunc = Omit<ICardCar, 'slug' | 'title'>;

export function onFormatVehicle(vehicle: CardCarFunc): ICardCar {
  const {
    VehicleId,
    ManuYear,
    Manufacturer,
    Model,
    Variant,
    SimilarVehicles,
    StandardFeatures,
    AllFeatures,
    ExteriorFeatures,
    InteriorFeatures,
    ImageIndexList,
  } = vehicle;

  const vehicleIdFormatted = VehicleId[0].split('-')[0];

  const title = `${ManuYear} ${Manufacturer} ${Model} ${Variant}`.trim();

  const imagesFormatted = ImageIndexList[0]
    .split(';')
    .map((imgIndex: string) => {
      return `${process.env.BASE_URL}/xml/${VehicleId[0]}-${imgIndex}.jpg`;
    });

  return {
    id: VehicleId[0],
    slug: slugify(`${title}-${vehicleIdFormatted}`).toLowerCase(),
    title,
    ...vehicle,
    images: imagesFormatted,
    InteriorFeatures: InteriorFeatures[0].split(', '),
    ExteriorFeatures: ExteriorFeatures[0].split(', '),
    AllFeatures: AllFeatures[0].split(', '),
    StandardFeatures: StandardFeatures[0].split(', '),
    SimilarVehicles: SimilarVehicles[0].split(','),
  };
}
