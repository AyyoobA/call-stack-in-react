export interface CustomerOrderDetail {
  _id: string
  responsibleUserEmail: any
  updatedAt: string
  createdAt: string
  style: string
  customerOrderNumber: string
  orderCategory: string
  totalGroupedLines: number
  totalQuantity: number
  version: number
  process: string
  isLineApproved: boolean
  key: string
  structureType: string
  highestCustomerOrder: string
  statisticsIdentity1Customer: string
  lines: Line[]
  isActive: boolean
  responsible: string
  changedBy: string
  payer: string
  discountModel: string
  facility: string
  orderTotalDiscountPercentage: string
  coApprove: any
  costingComponentDetails: CostingComponentDetails
  metadata: Metadata
  rawMaterialCostingInformation: RawMaterialCostingInformation
  warehouseInfo2: WarehouseInfo2
}

export interface Line {
  mainProduct: string
  attributeNumber: number
  attributeNumberStr: string
  addressNumber: string
  company: number
  orderedQuantityBasicUm: number
  customerOrderNumber: string
  orderLineNumber: number
  packagingTerms: string
  itemNumber: string
  facility: string
  salesPrice: number
  highestStatusCustomerOrder: string
  departureDate: number
  confirmedDeliveryDate: number
  customer: string
  orderTotalDiscountGenerating: number
  warehouse: string
  customerGeneric: CustomerGeneric
  itemCharge: ItemCharge
  item: Item
  packMethod: string
  warehouseInfo: WarehouseInfo
  address: Address
  componentInfo: ComponentInfo
}

export interface CustomerGeneric {
  primaryKey1: string
  alphaField30PositionsF1A130: string
  alphaField30PositionsF1A630: string
  numericField196PositionsF1N096: number
}

export interface ItemCharge {
  upcharge: number
  orderLineNumber: number
  customerOrderNumber: string
}

export interface Item {
  businessArea: string
  hierarchyLevel4: string
  userDefinedField1Item: string
  userDefinedField2Item: number
  itemNumber: string
  itemType: string
  hierarchyLevel1: string
  hierarchyLevel2: string
  hierarchyLevel3: string
  hierarchyLevel5: string
  productGroup: string
  mop: Mop
  style: Style
}

export interface Mop {
  itemNo: string
  attributeNo: string
  attributeId: string
  attributeValue: string
}

export interface Style {
  optionColor: string
  itemNumber: string
  optionZ: string
  name: string
  optionItem: OptionItem
  feature: Feature
}

export interface OptionItem {
  name: string
  optionColor: string
}

export interface Feature {
  name: string
  optionColor: string
}

export interface WarehouseInfo {
  company: number
  warehouse: string
  description: string
  warehouseType: string
  country: string
  facility: string
}

export interface Address {
  name: string
  addressNumber: string
  customer: string
  country: string
}

export interface ComponentInfo {
  itemNumber: string
  componentItems: ComponentItem[]
  costingDate: string
  structureType: string
  isKitItem: boolean
}

export interface ComponentItem {
  parentItem: string
  componentItemNumber: string
  rawItemDetails: RawItemDetail[]
  quantity: number
  componentItemType: string
  costingDate: number
  structureType: string
  facility: string
}

export interface RawItemDetail {
  itemNumber: string
  cost: string
  itemType: string
  costingDate: string
  structureType: string
  facility: string
}

export interface CostingComponentDetails {
  currentCosts: CurrentCosts
  latestCosts: LatestCosts
  firstCosts: FirstCosts
  otherCharges: number
  totalRmCost: number
}

export interface CurrentCosts {
  fabricCost: FabricCost
  sewingCost: SewingCost
  packingCost: PackingCost
  plugItemsCost: PlugItemsCost
  serviceCost: ServiceCost
  otherCharges: number
  totalRmCost: number
  date: string
  fgItemQunatity: number
  pcdt: string
  netFob: number
  epm: number
  contribution: number
  smv: number
}

export interface FabricCost {
  totalFabricCost: number
  fabricCostComponent: FabricCostComponent[]
}

export interface FabricCostComponent {
  itemCost: number
  itemId: string
}

export interface SewingCost {
  totalSewingCost: number
  sewingCostComponent: SewingCostComponent[]
}

export interface SewingCostComponent {
  itemCost: number
  itemId: string
}

export interface PackingCost {
  totalPackingCost: number
  packingCostComponent: PackingCostComponent[]
}

export interface PackingCostComponent {
  itemCost: number
  itemId: string
}

export interface PlugItemsCost {
  totalPlugItemsCost: number
  plugItemsCostComponent: any[]
}

export interface ServiceCost {
  totalServiceCost: number
  serviceCostComponent: any[]
}

export interface LatestCosts {
  fabricCost: FabricCost2
  sewingCost: SewingCost2
  packingCost: PackingCost2
  plugItemsCost: PlugItemsCost2
  serviceCost: ServiceCost2
  otherCharges: number
  totalRmCost: number
  date: string
  fgItemQunatity: number
  pcdt: string
  netFob: number
  epm: number
  contribution: number
  smv: number
  approvalDateTime: string
}

export interface FabricCost2 {
  totalFabricCost: number
  fabricCostComponent: FabricCostComponent2[]
}

export interface FabricCostComponent2 {
  itemCost: number
  itemId: string
}

export interface SewingCost2 {
  totalSewingCost: number
  sewingCostComponent: SewingCostComponent2[]
}

export interface SewingCostComponent2 {
  itemCost: number
  itemId: string
}

export interface PackingCost2 {
  totalPackingCost: number
  packingCostComponent: PackingCostComponent2[]
}

export interface PackingCostComponent2 {
  itemCost: number
  itemId: string
}

export interface PlugItemsCost2 {
  totalPlugItemsCost: number
  plugItemsCostComponent: any[]
}

export interface ServiceCost2 {
  totalServiceCost: number
  serviceCostComponent: any[]
}

export interface FirstCosts {
  fabricCost: FabricCost3
  sewingCost: SewingCost3
  packingCost: PackingCost3
  plugItemsCost: PlugItemsCost3
  serviceCost: ServiceCost3
  otherCharges: number
  totalRmCost: number
  date: string
  fgItemQunatity: number
  netFob: number
  epm: number
  contribution: number
  smv: number
}

export interface FabricCost3 {
  totalFabricCost: number
  fabricCostComponent: FabricCostComponent3[]
}

export interface FabricCostComponent3 {
  itemCost: number
  itemId: string
}

export interface SewingCost3 {
  totalSewingCost: number
  sewingCostComponent: SewingCostComponent3[]
}

export interface SewingCostComponent3 {
  itemCost: number
  itemId: string
}

export interface PackingCost3 {
  totalPackingCost: number
  packingCostComponent: any[]
}

export interface PlugItemsCost3 {
  totalPlugItemsCost: number
  plugItemsCostComponent: PlugItemsCostComponent[]
}

export interface PlugItemsCostComponent {
  itemCost: number
  itemId: string
}

export interface ServiceCost3 {
  totalServiceCost: number
  serviceCostComponent: any[]
}

export interface Metadata {
  smv: number
  efficiency: number
  markup: number
  fob: number
  netFob: number
  discount: number
  contribution: number
  coLineCharge: number
  firstCostMargin: number
  firstCostType: number
  factoryPayableTrace: FactoryPayableTrace[]
  firstCostTypeValue: string
  cpcm: number
  totalCpcmData: TotalCpcmData
  epm: number
  plmEpm: number
  epmVariance: number
  factoryPayable: number
  netProfit: number
  validation: Validation
  pcdt: string
  exchangeRate: any
  cmPrice: number
  thresholdValue: number
}

export interface FactoryPayableTrace {
  itemNumber: string
  factoryPayable: number
  quantity: number
  kitSmv: number
}

export interface TotalCpcmData {
  frontEnd: number
  production: number
}

export interface Validation {
  isValid: boolean
  message: string
  status: string
}

export interface RawMaterialCostingInformation {
  fabricCost: number
  sewingCost: number
  packingCost: number
  plugItemsCost: number
  serviceCost: number
  otherCharges: number
  elementA1toA3ECost: number
  totalRmCost: number
}

export interface WarehouseInfo2 {
  company: number
  warehouse: string
  description: string
  warehouseType: string
  country: string
  facility: string
}
