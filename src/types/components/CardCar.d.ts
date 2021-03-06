export interface ICardCar {
  id: string;
  slug: string;
  title: string;
  VehicleId: string[];
  images?: string[];
  ShortDesc?: string[];
  VehicleClass?: string[];
  VehicleClassEnum?: string[];
  Dealership?: string[];
  DealershipCode?: string[];
  VehicleStatus?: string[];
  VehicleStatusEnum?: string[];
  VehicleStatusDesc?: string[];
  SaleStatus?: string[];
  SaleStatusEnum?: string[];
  Manufacturer?: string[];
  ManufacturerEnum?: string[];
  Model?: string[];
  Variant?: string[];
  StockNo?: string[];
  VIN?: string[];
  RegNo?: string[];
  RegYearLocal?: string[];
  ChassisNo?: string[];
  EngineNo?: string[];
  ManuYear?: string[];
  BodyStyle?: string[];
  BodyStyleEnum?: string[];
  BodyStyleInternal?: string[];
  PurchaseDate?: string[];
  PurchaseType?: string[];
  PurchaseTypeEnum?: string[];
  YardArrivalDate?: string[];
  VesselDepartDate?: string[];
  PortDelivery?: string[];
  VesselName?: string[];
  VoyageName?: string[];
  PortArrivalDate?: string[];
  RegYear?: string[];
  PrevOwnerType?: string[];
  PrevOwnerTypeEnum?: string[];
  PrevCountry?: string[];
  PrevOwnerNo?: string[];
  PurchaseFlags?: string[];
  ExtColor1?: string[];
  ExtColor2?: string[];
  DoorNo?: string[];
  Sunroof?: string[];
  SunroofEnum?: string[];
  WheelSize?: string[];
  WheelComp?: string[];
  WheelCompEnum?: string[];
  TyreCondition?: string[];
  TyreConditionEnum?: string[];
  ExteriorFeatures?: string[];
  IntColor1?: string[];
  IntTrim?: string[];
  IntTrimEnum?: string[];
  SeatNo?: string[];
  SeatMaterial?: string[];
  SeatMaterialEnum?: string[];
  AudioFlags?: string[];
  AirbagNo?: string[];
  InteriorFeatures?: string[];
  EngineSize?: string[];
  EngineSizeUnit?: string[];
  EngineSizeUnitEnum?: string[];
  EngineType1?: string[];
  EngineType1Enum?: string[];
  FuelType1?: string[];
  FuelType1Enum?: string[];
  FuelType2?: string[];
  FuelType2Enum?: string[];
  CylinderNo?: string[];
  Transmission?: string[];
  TransmissionEnum?: string[];
  TransmissionInternal?: string[];
  Turbo?: string[];
  TurboEnum?: string[];
  DriveSystem?: string[];
  DriveSystemEnum?: string[];
  OdoStatus?: string[];
  OdoStatusEnum?: string[];
  OdoReading?: string[];
  OdoUnit?: string[];
  OdoUnitEnum?: string[];
  OdoDate?: string[];
  MechFlags?: string[];
  MechanicalFeatures?: string[];
  FuelSaverLabelFormat?: string[];
  FuelSaverFuelType?: string[];
  FuelSaverRating?: string[];
  FuelSaverCost?: string[];
  FuelSaverMileage?: string[];
  FuelSaverElectricConsumption?: string[];
  FuelSaverElectricRange?: string[];
  FuelSaverMake?: string[];
  FuelSaverModel?: string[];
  FuelSaverNote?: string[];
  FuelSaverLabelID?: string[];
  FuelSaverDate?: string[];
  FuelSaverPromoBadge?: string[];
  RetailPriceTaxStatus?: string[];
  RetailPriceTaxStatusEnum?: string[];
  RetailPriceAmount?: string[];
  RetailPriceTaxAmount?: string[];
  WholesalePriceTaxStatus?: string[];
  WholesalePriceTaxStatusEnum?: string[];
  WholesalePriceAmount?: string[];
  WholesalePriceTaxAmount?: string[];
  Other1PriceTaxStatus?: string[];
  Other1PriceTaxStatusEnum?: string[];
  Other1PriceAmount?: string[];
  Other1PriceTaxAmount?: string[];
  Other2PriceTaxStatus?: string[];
  Other2PriceTaxStatusEnum?: string[];
  Other2PriceAmount?: string[];
  Other2PriceTaxAmount?: string[];
  RegExpiryDate?: string[];
  COFExpiryDate?: string[];
  AdminFlags?: string[];
  Name?: string[];
  Reference?: string[];
  Comment?: string[];
  Description?: string[];
  CreatedDate?: string[];
  CreatedBy?: string[];
  ModifiedDate?: string[];
  ModifiedBy?: string[];
  CustomField1?: string[];
  CustomField2?: string[];
  CustomField3?: string[];
  CustomField4?: string[];
  CustomField5?: string[];
  CustomField6?: string[];
  CustomField7?: string[];
  CustomField8?: string[];
  CustomField9?: string[];
  CustomField10?: string[];
  CustomField11?: string[];
  CustomField12?: string[];
  ChassisType?: string[];
  ChassisExtras?: string[];
  Wheelbase?: string[];
  DeckLength?: string[];
  DeckWidth?: string[];
  DeckHeight?: string[];
  Tare?: string[];
  Payload?: string[];
  GVM?: string[];
  GLW?: string[];
  GCW?: string[];
  WheelConfig?: string[];
  TyreConfig?: string[];
  EngineManu?: string[];
  EngineModel?: string[];
  EngineHP?: string[];
  EngineTorque?: string[];
  TransManu?: string[];
  TransModel?: string[];
  BerthNo?: string[];
  Length?: string[];
  Beam?: string[];
  Draft?: string[];
  Propulsion?: string[];
  PropulsionEnum?: string[];
  Horsepower?: string[];
  EngineHours?: string[];
  ConstructionType?: string[];
  ConstructionTypeEnum?: string[];
  DriverSafetyStars?: string[];
  DriverSafetyTest?: string[];
  DriverSafetyPromoBadge?: string[];
  IsNew?: string[];
  ImportHistory?: string[];
  YouTubeId?: string[];
  YouTubeURL?: string[];
  SphericalPhotoURL?: string[];
  ElectricBatteryPower?: string[];
  ElectricBatteryRange?: string[];
  ElectricBatteryHealth?: string[];
  ExtColor1RGB?: string[];
  ExtColor2RGB?: string[];
  IntColor1RGB?: string[];
  RetailPriceAmountIncl?: string[];
  RetailPriceAmountExcl?: string[];
  RetailPriceAmountInclDisplay?: string[];
  RetailPriceAmountExclDisplay?: string[];
  WholesalePriceAmountIncl?: string[];
  WholesalePriceAmountExcl?: string[];
  WholesalePriceAmountInclDisplay?: string[];
  WholesalePriceAmountExclDisplay?: string[];
  Other1PriceAmountIncl?: string[];
  Other1PriceAmountExcl?: string[];
  Other1PriceAmountInclDisplay?: string[];
  Other1PriceAmountExclDisplay?: string[];
  Other2PriceAmountIncl?: string[];
  Other2PriceAmountExcl?: string[];
  Other2PriceAmountInclDisplay?: string[];
  Other2PriceAmountExclDisplay?: string[];
  StandardManuYear?: string[];
  StandardManufacturer?: string[];
  StandardModel?: string[];
  StandardVariant?: string[];
  FinanceTermCount?: string[];
  FinanceTermPeriodEnum?: string[];
  FinanceInterestRate?: string[];
  FinanceInterestRateDisplay?: string[];
  FinanceEstFee?: string[];
  FinanceEstFeeDisplay?: string[];
  FinanceSecRegFee?: string[];
  FinanceSecRegFeeDisplay?: string[];
  FinanceAdminFee?: string[];
  FinanceAdminFeeDisplay?: string[];
  FinanceAdminFeePeriodEnum?: string[];
  FinanceDepositRateMethodEnum?: string[];
  FinanceDepositAmount?: string[];
  FinanceDepositAmountDisplay?: string[];
  FinanceEffectiveSaleAmount?: string[];
  FinanceEffectiveSaleAmountDisplay?: string[];
  FinanceEffectiveDepositAmount?: string[];
  FinanceEffectiveDepositAmountDisplay?: string[];
  FinanceAmount?: string[];
  FinanceAmountDisplay?: string[];
  FinanceRepaymentTotal?: string[];
  FinanceRepaymentTotalDisplay?: string[];
  FinanceRepaymentPerWeek?: string[];
  FinanceRepaymentPerWeekDisplay?: string[];
  FinanceRepaymentPerWeek48?: string[];
  FinanceRepaymentPerWeek48Display?: string[];
  FinanceRepayableTotalAmount?: string[];
  FinanceRepayableTotalAmountDisplay?: string[];
  FinanceFinanceRepaymentPerWeekCaption?: string[];
  FinanceRepayableTotalAmountCaption?: string[];
  FinanceDepositCaption?: string[];
  FinanceFooterCaption?: string[];
  FinanceApplicationUrl?: string[];
  IsFeatured?: string[];
  IsSuperFeatured?: string[];
  DisableFinance?: string[];
  AuctionExport?: string[];
  StartPriceAmount?: string[];
  ReservePriceAmount?: string[];
  BuyNowPriceAmount?: string[];
  VehicleOfferText?: string[];
  VehicleOfferEndDate?: string[];
  ORCIncluded?: string[];
  SiteLinkURL?: string[];
  AllFeatures?: string[];
  AllFeaturesDashSeparated?: string[];
  ImageIndexList?: string[];
  CarCheckReference?: string[];
  CarCheckDate?: string[];
  CarCheckStolen?: string[];
  CarCheckMoneyOwing?: string[];
  CarCheckDamagedImport?: string[];
  CarCheckReRegistered?: string[];
  IsHot?: string[];
  StandardFeatures?: string[];
  StandardFeaturesEnum?: string[];
  SimilarVehicles?: string[];
  AppraisalNotes?: string[];
  AuctionGrade?: string[];
  NotYetComplie?: string[];
}
