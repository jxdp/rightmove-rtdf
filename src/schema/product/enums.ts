export enum FeaturedPropertyType {
  Subscription = 1,
  FeaturedPropertyOfTheWeek = 2,
}

export enum PremiumListingDisplayType {
  /**
   * One large image + two small images
   */
  OneLargeImagePlusTwoSmallImages = 1,

  /**
   * One large image
   */
  OneLargeImage = 2,
}

export enum PremiumListingResaleStampTextType {
  Auction = 1,
  StampDutyPaid = 4,
  OpenHouse = 8,
  Incentive = 9,
  NoChain = 10,
  PartExchange = 11,
  NewListing = 12,
  FixedPrice = 13,
  PremiumListing = 14,
  OpenToOffers = 15,
  NewPrice = 16,
  NoStampDuty = 17,
  SeaView = 19,
  PublicNotice = 20,
  ViewingAdvised = 22,
  WithLand = 23,
  AttentionInvestors = 24,
  StarBuy = 25,
  NoSticker = 26,
  Waterside = 27,
  GenerousGarden = 28,
  RecentlyRenovated = 29,
  StunningViews = 30,
  Smallholding = 31,
  OpenDay = 32,
  DoubleGarage = 33,
  Annexe = 34,
  MediaTour = 35,
  BestBid = 36,
  InformalTender = 37,
  SafeMoveProperty = 64,
  AudioTour = 65,
  VideoTour = 66,
  ListedBuilding = 71,
  PeriodProperty = 72,
  Retirement = 73,
  Equestrian = 74,
  Conversion = 75,
  Extended = 76,
  Parking = 77,
  ConfidentialRegister = 78,
  BuyToLet = 79,
  OutBuildings = 80,
  MoveByChristmas = 86,
  LBTTPaid = 87,
  SummerSale = 88,
  AutumSale = 89,
  WinterSale = 90,
  Balcony = 91,
  BarnConversion = 92,
  CloseToSchools = 93,
  CloseToShops = 94,
  CloseToStation = 95,
  ConservationArea = 96,
  CornerPlot = 97,
  CountrysideViews = 98,
  CulDeSac = 99,
  EcoHome = 100,
  Garage = 101,
  GroundFloor = 102,
  HighSpecification = 103,
  OffStreetParking = 104,
  OnBusRoute = 105,
  OpenPlanLiving = 106,
  PenthouseApartment = 107,
  SouthFacingGarden = 108,
  TownCentreLocation = 109,
  VillageLocation = 110,
  EasterSale = 114,
  FirstTimeBuyers = 115,
  LongLease = 116,
  PlanningPermissionGranted = 117,
  PotentialToExtendSTPP = 118,
  PotentialToImprove = 119,
  ProbateSale = 120,
  ShareOfFreehold = 121,
  SharedOwnership = 122,
  SpringSale = 123,
  GroundRents = 141,
  Garden = 142,
  Driveway = 143,
  RoofTerrace = 144,
  CommunalGardens = 145,
  CommunalTerrace = 146,
  MansionFlat = 147,
  WheelchairFriendly = 148,
  DisabledAccess = 149,
  BarnforConversion = 150,
  VirtualTour = 151,
  IncomePotential = 154,
  LeisureFacility = 156,
  CouchHouse = 158,
  CharacterFeatures = 159,
  CoastalLocation = 160,
  GatedEntrance = 161,
  RuralProperty = 178,
  CountryResidence = 179,
  DevelopmentPotential = 180,
  OnlineAuction = 181,
  SwimmingPool = 182,
  CloseToPark = 184,
  PanoramicGardens = 185,
  PeriodFeatures = 186,
  SemiRuralLocation = 187,
  TwentyFourHoursSecurity = 188,
  SubstantialPlot = 189,
  Freehold = 190,
  HolidayHome = 191,
  RenewableEnergyInstalled = 192,
  CompleteChain = 195,
  PotentialBuildingPlot = 196,
  RiversideViews = 197,
  SafeCladding = 199,
  HomeOffice = 200,
  FibreBroadband = 201,
  OutsideSpace = 202,
  Study = 203,
  UtilityRoom = 205,
  Conservatory = 207,
  ESW1FormApproved = 211,
  ThreeStoreyLiving = 213,
  CityCentre = 237,
  LiftAccess = 253,
  EVCharging = 255,
  SolarPanel = 257,
}

export enum PremiumListingLettingsStampTextType {
  AvailableSoon = 2,
  ShortLet = 5,
  Furnished = 6,
  LongLet = 7,
  Incentive = 9,
  NewListing = 12,
  PremiumListing = 14,
  OpenToOffers = 15,
  NewPrice = 16,
  Unfurnished = 21,
  ViewingAdvised = 22,
  NoSticker = 26,
  RecentlyRenovated = 29,
  ForStudents = 59,
  PetsConsidered = 60,
  AvailableNow = 61,
  AudioTour = 65,
  VideoTour = 66,
  ListedBuilding = 71,
  PeriodProperty = 72,
  Retirement = 73,
  Equestrian = 74,
  Conversion = 75,
  Extended = 76,
  Parking = 77,
  OutBuildings = 80,
  FullyManaged = 85,
  SummerSale = 88,
  AutumSale = 89,
  WinterSale = 90,
  Balcony = 91,
  BarnConversion = 92,
  CloseToSchools = 93,
  CloseToShops = 94,
  CloseToStation = 95,
  ConservationArea = 96,
  CornerPlot = 97,
  CountrysideViews = 98,
  CulDeSac = 99,
  EcoHome = 100,
  Garage = 101,
  GroundFloor = 102,
  HighSpecification = 103,
  OffStreetParking = 104,
  OnBusRoute = 105,
  OpenPlanLiving = 106,
  PenthouseApartment = 107,
  SouthFacingGarden = 108,
  TownCentreLocation = 109,
  VillageLocation = 110,
  OpenHouse = 111,
  UtilityBillsIncluded = 112,
  PetsAllowed = 113,
  StudentHalls = 132,
  StudentHouseShare = 134,
  OneRoomLeft = 135,
  BillsIncluded = 136,
  CloseToUni = 137,
  BookNow = 139,
  GroundRents = 141,
  Garden = 142,
  Driveway = 143,
  RoofTerrace = 144,
  CommunalGardens = 145,
  CommunalTerrace = 146,
  MansionFlat = 147,
  WheelchairFriendly = 148,
  DisabledAccess = 149,
  BarnForConversion = 150,
  VirtualTour = 151,
  LeisureFacility = 156,
  CharacterFeatures = 159,
  CoastalLocation = 160,
  SharersWelcome = 183,
  CloseToPark = 184,
  PanoramicGardens = 185,
  PeriodFeatures = 186,
  SemiRuralLocation = 187,
  TwentyFourHoursSecurity = 188,
  DepositAlternativeAvailable = 193,
  RiversideViews = 197,
  SafeCladding = 199,
  HomeOffice = 200,
  FibreBroadband = 201,
  OutsideSpace = 202,
  Study = 203,
  UtilityRoom = 205,
  Conservatory = 207,
  NoManagementFees = 209,
  ESW1FormApproved = 211,
  ThreeStoreyLiving = 213,
  CityCentre = 237,
  LiftAccess = 253,
  EVCharging = 255,
  SolarPanel = 257,
}