export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  numeric: any;
  ruling: any;
  status: any;
  timestamptz: any;
};

/** columns and relationships of "Arbitrator" */
export type Arbitrator = {
  __typename?: 'Arbitrator';
  id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "Arbitrator". All fields are combined with a logical 'AND'. */
export type Arbitrator_Bool_Exp = {
  _and?: InputMaybe<Array<Arbitrator_Bool_Exp>>;
  _not?: InputMaybe<Arbitrator_Bool_Exp>;
  _or?: InputMaybe<Array<Arbitrator_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "Arbitrator". */
export type Arbitrator_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** select columns of table "Arbitrator" */
export enum Arbitrator_Select_Column {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "Arbitrator" */
export type Arbitrator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Arbitrator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Arbitrator_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Evidence" */
export type Evidence = {
  __typename?: 'Evidence';
  arbitrator: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  evidenceGroup?: Maybe<EvidenceGroup>;
  evidenceGroup_id: Scalars['String'];
  fileTypeExtension?: Maybe<Scalars['String']>;
  fileURI?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  number: Scalars['numeric'];
  party: Scalars['String'];
  timestamp: Scalars['numeric'];
  title?: Maybe<Scalars['String']>;
  txHash: Scalars['String'];
  uri: Scalars['String'];
};

/** columns and relationships of "EvidenceGroup" */
export type EvidenceGroup = {
  __typename?: 'EvidenceGroup';
  /** An array relationship */
  evidences: Array<Evidence>;
  id: Scalars['String'];
  numberOfEvidence: Scalars['numeric'];
};


/** columns and relationships of "EvidenceGroup" */
export type EvidenceGroupEvidencesArgs = {
  distinct_on?: InputMaybe<Array<Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evidence_Order_By>>;
  where?: InputMaybe<Evidence_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "EvidenceGroup". All fields are combined with a logical 'AND'. */
export type EvidenceGroup_Bool_Exp = {
  _and?: InputMaybe<Array<EvidenceGroup_Bool_Exp>>;
  _not?: InputMaybe<EvidenceGroup_Bool_Exp>;
  _or?: InputMaybe<Array<EvidenceGroup_Bool_Exp>>;
  evidences?: InputMaybe<Evidence_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  numberOfEvidence?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "EvidenceGroup". */
export type EvidenceGroup_Order_By = {
  evidences_aggregate?: InputMaybe<Evidence_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  numberOfEvidence?: InputMaybe<Order_By>;
};

/** select columns of table "EvidenceGroup" */
export enum EvidenceGroup_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NumberOfEvidence = 'numberOfEvidence'
}

/** Streaming cursor of the table "EvidenceGroup" */
export type EvidenceGroup_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: EvidenceGroup_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type EvidenceGroup_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  numberOfEvidence?: InputMaybe<Scalars['numeric']>;
};

/** order by aggregate values of table "Evidence" */
export type Evidence_Aggregate_Order_By = {
  avg?: InputMaybe<Evidence_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Evidence_Max_Order_By>;
  min?: InputMaybe<Evidence_Min_Order_By>;
  stddev?: InputMaybe<Evidence_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Evidence_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Evidence_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Evidence_Sum_Order_By>;
  var_pop?: InputMaybe<Evidence_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Evidence_Var_Samp_Order_By>;
  variance?: InputMaybe<Evidence_Variance_Order_By>;
};

/** order by avg() on columns of table "Evidence" */
export type Evidence_Avg_Order_By = {
  number?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Evidence". All fields are combined with a logical 'AND'. */
export type Evidence_Bool_Exp = {
  _and?: InputMaybe<Array<Evidence_Bool_Exp>>;
  _not?: InputMaybe<Evidence_Bool_Exp>;
  _or?: InputMaybe<Array<Evidence_Bool_Exp>>;
  arbitrator?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  evidenceGroup?: InputMaybe<EvidenceGroup_Bool_Exp>;
  evidenceGroup_id?: InputMaybe<String_Comparison_Exp>;
  fileTypeExtension?: InputMaybe<String_Comparison_Exp>;
  fileURI?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  number?: InputMaybe<Numeric_Comparison_Exp>;
  party?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  txHash?: InputMaybe<String_Comparison_Exp>;
  uri?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "Evidence" */
export type Evidence_Max_Order_By = {
  arbitrator?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  evidenceGroup_id?: InputMaybe<Order_By>;
  fileTypeExtension?: InputMaybe<Order_By>;
  fileURI?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  party?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  txHash?: InputMaybe<Order_By>;
  uri?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Evidence" */
export type Evidence_Min_Order_By = {
  arbitrator?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  evidenceGroup_id?: InputMaybe<Order_By>;
  fileTypeExtension?: InputMaybe<Order_By>;
  fileURI?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  party?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  txHash?: InputMaybe<Order_By>;
  uri?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Evidence". */
export type Evidence_Order_By = {
  arbitrator?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  evidenceGroup?: InputMaybe<EvidenceGroup_Order_By>;
  evidenceGroup_id?: InputMaybe<Order_By>;
  fileTypeExtension?: InputMaybe<Order_By>;
  fileURI?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  number?: InputMaybe<Order_By>;
  party?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  txHash?: InputMaybe<Order_By>;
  uri?: InputMaybe<Order_By>;
};

/** select columns of table "Evidence" */
export enum Evidence_Select_Column {
  /** column name */
  Arbitrator = 'arbitrator',
  /** column name */
  Description = 'description',
  /** column name */
  EvidenceGroupId = 'evidenceGroup_id',
  /** column name */
  FileTypeExtension = 'fileTypeExtension',
  /** column name */
  FileUri = 'fileURI',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Number = 'number',
  /** column name */
  Party = 'party',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Title = 'title',
  /** column name */
  TxHash = 'txHash',
  /** column name */
  Uri = 'uri'
}

/** order by stddev() on columns of table "Evidence" */
export type Evidence_Stddev_Order_By = {
  number?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Evidence" */
export type Evidence_Stddev_Pop_Order_By = {
  number?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Evidence" */
export type Evidence_Stddev_Samp_Order_By = {
  number?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Evidence" */
export type Evidence_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Evidence_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Evidence_Stream_Cursor_Value_Input = {
  arbitrator?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  evidenceGroup_id?: InputMaybe<Scalars['String']>;
  fileTypeExtension?: InputMaybe<Scalars['String']>;
  fileURI?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['numeric']>;
  party?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "Evidence" */
export type Evidence_Sum_Order_By = {
  number?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "Evidence" */
export type Evidence_Var_Pop_Order_By = {
  number?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Evidence" */
export type Evidence_Var_Samp_Order_By = {
  number?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Evidence" */
export type Evidence_Variance_Order_By = {
  number?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** columns and relationships of "HasPaidAppealFee" */
export type HasPaidAppealFee = {
  __typename?: 'HasPaidAppealFee';
  id: Scalars['String'];
  /** An object relationship */
  item?: Maybe<Item>;
  item_id: Scalars['String'];
  /** An object relationship */
  request?: Maybe<Request>;
  request_id: Scalars['String'];
  /** An object relationship */
  round?: Maybe<Round>;
  round_id: Scalars['String'];
  side: Scalars['numeric'];
  timestamp: Scalars['numeric'];
};

/** Boolean expression to filter rows from the table "HasPaidAppealFee". All fields are combined with a logical 'AND'. */
export type HasPaidAppealFee_Bool_Exp = {
  _and?: InputMaybe<Array<HasPaidAppealFee_Bool_Exp>>;
  _not?: InputMaybe<HasPaidAppealFee_Bool_Exp>;
  _or?: InputMaybe<Array<HasPaidAppealFee_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  item?: InputMaybe<Item_Bool_Exp>;
  item_id?: InputMaybe<String_Comparison_Exp>;
  request?: InputMaybe<Request_Bool_Exp>;
  request_id?: InputMaybe<String_Comparison_Exp>;
  round?: InputMaybe<Round_Bool_Exp>;
  round_id?: InputMaybe<String_Comparison_Exp>;
  side?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "HasPaidAppealFee". */
export type HasPaidAppealFee_Order_By = {
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<Item_Order_By>;
  item_id?: InputMaybe<Order_By>;
  request?: InputMaybe<Request_Order_By>;
  request_id?: InputMaybe<Order_By>;
  round?: InputMaybe<Round_Order_By>;
  round_id?: InputMaybe<Order_By>;
  side?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "HasPaidAppealFee" */
export enum HasPaidAppealFee_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  RequestId = 'request_id',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  Side = 'side',
  /** column name */
  Timestamp = 'timestamp'
}

/** Streaming cursor of the table "HasPaidAppealFee" */
export type HasPaidAppealFee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: HasPaidAppealFee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type HasPaidAppealFee_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  item_id?: InputMaybe<Scalars['String']>;
  request_id?: InputMaybe<Scalars['String']>;
  round_id?: InputMaybe<Scalars['String']>;
  side?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['numeric']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Item" */
export type Item = {
  __typename?: 'Item';
  data: Scalars['String'];
  disputed: Scalars['Boolean'];
  id: Scalars['String'];
  itemID: Scalars['String'];
  latestChallenger: Scalars['String'];
  latestRequestResolutionTime: Scalars['numeric'];
  latestRequestSubmissionTime: Scalars['numeric'];
  latestRequester: Scalars['String'];
  numberOfRequests: Scalars['numeric'];
  /** An object relationship */
  registry?: Maybe<Registry>;
  registryAddress: Scalars['String'];
  registry_id: Scalars['String'];
  /** An array relationship */
  requests: Array<Request>;
  status: Scalars['status'];
};


/** columns and relationships of "Item" */
export type ItemRequestsArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};

/** columns and relationships of "ItemProp" */
export type ItemProp = {
  __typename?: 'ItemProp';
  description: Scalars['String'];
  id: Scalars['String'];
  isIdentifier: Scalars['Boolean'];
  /** An object relationship */
  item?: Maybe<LItem>;
  itemType: Scalars['String'];
  item_id: Scalars['String'];
  label: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

/** order by aggregate values of table "ItemProp" */
export type ItemProp_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ItemProp_Max_Order_By>;
  min?: InputMaybe<ItemProp_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "ItemProp". All fields are combined with a logical 'AND'. */
export type ItemProp_Bool_Exp = {
  _and?: InputMaybe<Array<ItemProp_Bool_Exp>>;
  _not?: InputMaybe<ItemProp_Bool_Exp>;
  _or?: InputMaybe<Array<ItemProp_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  isIdentifier?: InputMaybe<Boolean_Comparison_Exp>;
  item?: InputMaybe<LItem_Bool_Exp>;
  itemType?: InputMaybe<String_Comparison_Exp>;
  item_id?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "ItemProp" */
export type ItemProp_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  itemType?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "ItemProp" */
export type ItemProp_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  itemType?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "ItemProp". */
export type ItemProp_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isIdentifier?: InputMaybe<Order_By>;
  item?: InputMaybe<LItem_Order_By>;
  itemType?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "ItemProp" */
export enum ItemProp_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsIdentifier = 'isIdentifier',
  /** column name */
  ItemType = 'itemType',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

/** Streaming cursor of the table "ItemProp" */
export type ItemProp_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ItemProp_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ItemProp_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isIdentifier?: InputMaybe<Scalars['Boolean']>;
  itemType?: InputMaybe<Scalars['String']>;
  item_id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "Item" */
export type Item_Aggregate_Order_By = {
  avg?: InputMaybe<Item_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Item_Max_Order_By>;
  min?: InputMaybe<Item_Min_Order_By>;
  stddev?: InputMaybe<Item_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Item_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Item_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Item_Sum_Order_By>;
  var_pop?: InputMaybe<Item_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Item_Var_Samp_Order_By>;
  variance?: InputMaybe<Item_Variance_Order_By>;
};

/** order by avg() on columns of table "Item" */
export type Item_Avg_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Item". All fields are combined with a logical 'AND'. */
export type Item_Bool_Exp = {
  _and?: InputMaybe<Array<Item_Bool_Exp>>;
  _not?: InputMaybe<Item_Bool_Exp>;
  _or?: InputMaybe<Array<Item_Bool_Exp>>;
  data?: InputMaybe<String_Comparison_Exp>;
  disputed?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  itemID?: InputMaybe<String_Comparison_Exp>;
  latestChallenger?: InputMaybe<String_Comparison_Exp>;
  latestRequestResolutionTime?: InputMaybe<Numeric_Comparison_Exp>;
  latestRequestSubmissionTime?: InputMaybe<Numeric_Comparison_Exp>;
  latestRequester?: InputMaybe<String_Comparison_Exp>;
  numberOfRequests?: InputMaybe<Numeric_Comparison_Exp>;
  registry?: InputMaybe<Registry_Bool_Exp>;
  registryAddress?: InputMaybe<String_Comparison_Exp>;
  registry_id?: InputMaybe<String_Comparison_Exp>;
  requests?: InputMaybe<Request_Bool_Exp>;
  status?: InputMaybe<Status_Comparison_Exp>;
};

/** order by max() on columns of table "Item" */
export type Item_Max_Order_By = {
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  itemID?: InputMaybe<Order_By>;
  latestChallenger?: InputMaybe<Order_By>;
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  latestRequester?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Item" */
export type Item_Min_Order_By = {
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  itemID?: InputMaybe<Order_By>;
  latestChallenger?: InputMaybe<Order_By>;
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  latestRequester?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Item". */
export type Item_Order_By = {
  data?: InputMaybe<Order_By>;
  disputed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  itemID?: InputMaybe<Order_By>;
  latestChallenger?: InputMaybe<Order_By>;
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  latestRequester?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
  registry?: InputMaybe<Registry_Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  requests_aggregate?: InputMaybe<Request_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
};

/** select columns of table "Item" */
export enum Item_Select_Column {
  /** column name */
  Data = 'data',
  /** column name */
  Disputed = 'disputed',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'itemID',
  /** column name */
  LatestChallenger = 'latestChallenger',
  /** column name */
  LatestRequestResolutionTime = 'latestRequestResolutionTime',
  /** column name */
  LatestRequestSubmissionTime = 'latestRequestSubmissionTime',
  /** column name */
  LatestRequester = 'latestRequester',
  /** column name */
  NumberOfRequests = 'numberOfRequests',
  /** column name */
  RegistryAddress = 'registryAddress',
  /** column name */
  RegistryId = 'registry_id',
  /** column name */
  Status = 'status'
}

/** order by stddev() on columns of table "Item" */
export type Item_Stddev_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Item" */
export type Item_Stddev_Pop_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Item" */
export type Item_Stddev_Samp_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Item" */
export type Item_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Item_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Item_Stream_Cursor_Value_Input = {
  data?: InputMaybe<Scalars['String']>;
  disputed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  itemID?: InputMaybe<Scalars['String']>;
  latestChallenger?: InputMaybe<Scalars['String']>;
  latestRequestResolutionTime?: InputMaybe<Scalars['numeric']>;
  latestRequestSubmissionTime?: InputMaybe<Scalars['numeric']>;
  latestRequester?: InputMaybe<Scalars['String']>;
  numberOfRequests?: InputMaybe<Scalars['numeric']>;
  registryAddress?: InputMaybe<Scalars['String']>;
  registry_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['status']>;
};

/** order by sum() on columns of table "Item" */
export type Item_Sum_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "Item" */
export type Item_Var_Pop_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Item" */
export type Item_Var_Samp_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Item" */
export type Item_Variance_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** columns and relationships of "LArbitrator" */
export type LArbitrator = {
  __typename?: 'LArbitrator';
  id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "LArbitrator". All fields are combined with a logical 'AND'. */
export type LArbitrator_Bool_Exp = {
  _and?: InputMaybe<Array<LArbitrator_Bool_Exp>>;
  _not?: InputMaybe<LArbitrator_Bool_Exp>;
  _or?: InputMaybe<Array<LArbitrator_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "LArbitrator". */
export type LArbitrator_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** select columns of table "LArbitrator" */
export enum LArbitrator_Select_Column {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "LArbitrator" */
export type LArbitrator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LArbitrator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LArbitrator_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "LContribution" */
export type LContribution = {
  __typename?: 'LContribution';
  contributor: Scalars['String'];
  id: Scalars['String'];
  /** An object relationship */
  round?: Maybe<LRound>;
  round_id: Scalars['String'];
  side: Scalars['numeric'];
  withdrawable: Scalars['Boolean'];
};

/** order by aggregate values of table "LContribution" */
export type LContribution_Aggregate_Order_By = {
  avg?: InputMaybe<LContribution_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<LContribution_Max_Order_By>;
  min?: InputMaybe<LContribution_Min_Order_By>;
  stddev?: InputMaybe<LContribution_Stddev_Order_By>;
  stddev_pop?: InputMaybe<LContribution_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<LContribution_Stddev_Samp_Order_By>;
  sum?: InputMaybe<LContribution_Sum_Order_By>;
  var_pop?: InputMaybe<LContribution_Var_Pop_Order_By>;
  var_samp?: InputMaybe<LContribution_Var_Samp_Order_By>;
  variance?: InputMaybe<LContribution_Variance_Order_By>;
};

/** order by avg() on columns of table "LContribution" */
export type LContribution_Avg_Order_By = {
  side?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "LContribution". All fields are combined with a logical 'AND'. */
export type LContribution_Bool_Exp = {
  _and?: InputMaybe<Array<LContribution_Bool_Exp>>;
  _not?: InputMaybe<LContribution_Bool_Exp>;
  _or?: InputMaybe<Array<LContribution_Bool_Exp>>;
  contributor?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  round?: InputMaybe<LRound_Bool_Exp>;
  round_id?: InputMaybe<String_Comparison_Exp>;
  side?: InputMaybe<Numeric_Comparison_Exp>;
  withdrawable?: InputMaybe<Boolean_Comparison_Exp>;
};

/** order by max() on columns of table "LContribution" */
export type LContribution_Max_Order_By = {
  contributor?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round_id?: InputMaybe<Order_By>;
  side?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "LContribution" */
export type LContribution_Min_Order_By = {
  contributor?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round_id?: InputMaybe<Order_By>;
  side?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "LContribution". */
export type LContribution_Order_By = {
  contributor?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<LRound_Order_By>;
  round_id?: InputMaybe<Order_By>;
  side?: InputMaybe<Order_By>;
  withdrawable?: InputMaybe<Order_By>;
};

/** select columns of table "LContribution" */
export enum LContribution_Select_Column {
  /** column name */
  Contributor = 'contributor',
  /** column name */
  Id = 'id',
  /** column name */
  RoundId = 'round_id',
  /** column name */
  Side = 'side',
  /** column name */
  Withdrawable = 'withdrawable'
}

/** order by stddev() on columns of table "LContribution" */
export type LContribution_Stddev_Order_By = {
  side?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "LContribution" */
export type LContribution_Stddev_Pop_Order_By = {
  side?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "LContribution" */
export type LContribution_Stddev_Samp_Order_By = {
  side?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "LContribution" */
export type LContribution_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LContribution_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LContribution_Stream_Cursor_Value_Input = {
  contributor?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  round_id?: InputMaybe<Scalars['String']>;
  side?: InputMaybe<Scalars['numeric']>;
  withdrawable?: InputMaybe<Scalars['Boolean']>;
};

/** order by sum() on columns of table "LContribution" */
export type LContribution_Sum_Order_By = {
  side?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "LContribution" */
export type LContribution_Var_Pop_Order_By = {
  side?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "LContribution" */
export type LContribution_Var_Samp_Order_By = {
  side?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "LContribution" */
export type LContribution_Variance_Order_By = {
  side?: InputMaybe<Order_By>;
};

/** columns and relationships of "LItem" */
export type LItem = {
  __typename?: 'LItem';
  data: Scalars['String'];
  disputed: Scalars['Boolean'];
  id: Scalars['String'];
  itemID: Scalars['String'];
  key0?: Maybe<Scalars['String']>;
  key1?: Maybe<Scalars['String']>;
  key2?: Maybe<Scalars['String']>;
  key3?: Maybe<Scalars['String']>;
  key4?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  latestChallenger: Scalars['String'];
  latestRequestResolutionTime: Scalars['numeric'];
  latestRequestSubmissionTime: Scalars['numeric'];
  latestRequester: Scalars['String'];
  numberOfRequests: Scalars['numeric'];
  /** An array relationship */
  props: Array<ItemProp>;
  /** An object relationship */
  registry?: Maybe<LRegistry>;
  registryAddress: Scalars['String'];
  registry_id: Scalars['String'];
  /** An array relationship */
  requests: Array<LRequest>;
  status: Scalars['status'];
};


/** columns and relationships of "LItem" */
export type LItemPropsArgs = {
  distinct_on?: InputMaybe<Array<ItemProp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ItemProp_Order_By>>;
  where?: InputMaybe<ItemProp_Bool_Exp>;
};


/** columns and relationships of "LItem" */
export type LItemRequestsArgs = {
  distinct_on?: InputMaybe<Array<LRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LRequest_Order_By>>;
  where?: InputMaybe<LRequest_Bool_Exp>;
};

/** order by aggregate values of table "LItem" */
export type LItem_Aggregate_Order_By = {
  avg?: InputMaybe<LItem_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<LItem_Max_Order_By>;
  min?: InputMaybe<LItem_Min_Order_By>;
  stddev?: InputMaybe<LItem_Stddev_Order_By>;
  stddev_pop?: InputMaybe<LItem_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<LItem_Stddev_Samp_Order_By>;
  sum?: InputMaybe<LItem_Sum_Order_By>;
  var_pop?: InputMaybe<LItem_Var_Pop_Order_By>;
  var_samp?: InputMaybe<LItem_Var_Samp_Order_By>;
  variance?: InputMaybe<LItem_Variance_Order_By>;
};

/** order by avg() on columns of table "LItem" */
export type LItem_Avg_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "LItem". All fields are combined with a logical 'AND'. */
export type LItem_Bool_Exp = {
  _and?: InputMaybe<Array<LItem_Bool_Exp>>;
  _not?: InputMaybe<LItem_Bool_Exp>;
  _or?: InputMaybe<Array<LItem_Bool_Exp>>;
  data?: InputMaybe<String_Comparison_Exp>;
  disputed?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  itemID?: InputMaybe<String_Comparison_Exp>;
  key0?: InputMaybe<String_Comparison_Exp>;
  key1?: InputMaybe<String_Comparison_Exp>;
  key2?: InputMaybe<String_Comparison_Exp>;
  key3?: InputMaybe<String_Comparison_Exp>;
  key4?: InputMaybe<String_Comparison_Exp>;
  keywords?: InputMaybe<String_Comparison_Exp>;
  latestChallenger?: InputMaybe<String_Comparison_Exp>;
  latestRequestResolutionTime?: InputMaybe<Numeric_Comparison_Exp>;
  latestRequestSubmissionTime?: InputMaybe<Numeric_Comparison_Exp>;
  latestRequester?: InputMaybe<String_Comparison_Exp>;
  numberOfRequests?: InputMaybe<Numeric_Comparison_Exp>;
  props?: InputMaybe<ItemProp_Bool_Exp>;
  registry?: InputMaybe<LRegistry_Bool_Exp>;
  registryAddress?: InputMaybe<String_Comparison_Exp>;
  registry_id?: InputMaybe<String_Comparison_Exp>;
  requests?: InputMaybe<LRequest_Bool_Exp>;
  status?: InputMaybe<Status_Comparison_Exp>;
};

/** order by max() on columns of table "LItem" */
export type LItem_Max_Order_By = {
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  itemID?: InputMaybe<Order_By>;
  key0?: InputMaybe<Order_By>;
  key1?: InputMaybe<Order_By>;
  key2?: InputMaybe<Order_By>;
  key3?: InputMaybe<Order_By>;
  key4?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  latestChallenger?: InputMaybe<Order_By>;
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  latestRequester?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "LItem" */
export type LItem_Min_Order_By = {
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  itemID?: InputMaybe<Order_By>;
  key0?: InputMaybe<Order_By>;
  key1?: InputMaybe<Order_By>;
  key2?: InputMaybe<Order_By>;
  key3?: InputMaybe<Order_By>;
  key4?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  latestChallenger?: InputMaybe<Order_By>;
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  latestRequester?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "LItem". */
export type LItem_Order_By = {
  data?: InputMaybe<Order_By>;
  disputed?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  itemID?: InputMaybe<Order_By>;
  key0?: InputMaybe<Order_By>;
  key1?: InputMaybe<Order_By>;
  key2?: InputMaybe<Order_By>;
  key3?: InputMaybe<Order_By>;
  key4?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  latestChallenger?: InputMaybe<Order_By>;
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  latestRequester?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
  props_aggregate?: InputMaybe<ItemProp_Aggregate_Order_By>;
  registry?: InputMaybe<LRegistry_Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  requests_aggregate?: InputMaybe<LRequest_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
};

/** select columns of table "LItem" */
export enum LItem_Select_Column {
  /** column name */
  Data = 'data',
  /** column name */
  Disputed = 'disputed',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'itemID',
  /** column name */
  Key0 = 'key0',
  /** column name */
  Key1 = 'key1',
  /** column name */
  Key2 = 'key2',
  /** column name */
  Key3 = 'key3',
  /** column name */
  Key4 = 'key4',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  LatestChallenger = 'latestChallenger',
  /** column name */
  LatestRequestResolutionTime = 'latestRequestResolutionTime',
  /** column name */
  LatestRequestSubmissionTime = 'latestRequestSubmissionTime',
  /** column name */
  LatestRequester = 'latestRequester',
  /** column name */
  NumberOfRequests = 'numberOfRequests',
  /** column name */
  RegistryAddress = 'registryAddress',
  /** column name */
  RegistryId = 'registry_id',
  /** column name */
  Status = 'status'
}

/** order by stddev() on columns of table "LItem" */
export type LItem_Stddev_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "LItem" */
export type LItem_Stddev_Pop_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "LItem" */
export type LItem_Stddev_Samp_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "LItem" */
export type LItem_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LItem_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LItem_Stream_Cursor_Value_Input = {
  data?: InputMaybe<Scalars['String']>;
  disputed?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  itemID?: InputMaybe<Scalars['String']>;
  key0?: InputMaybe<Scalars['String']>;
  key1?: InputMaybe<Scalars['String']>;
  key2?: InputMaybe<Scalars['String']>;
  key3?: InputMaybe<Scalars['String']>;
  key4?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  latestChallenger?: InputMaybe<Scalars['String']>;
  latestRequestResolutionTime?: InputMaybe<Scalars['numeric']>;
  latestRequestSubmissionTime?: InputMaybe<Scalars['numeric']>;
  latestRequester?: InputMaybe<Scalars['String']>;
  numberOfRequests?: InputMaybe<Scalars['numeric']>;
  registryAddress?: InputMaybe<Scalars['String']>;
  registry_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['status']>;
};

/** order by sum() on columns of table "LItem" */
export type LItem_Sum_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "LItem" */
export type LItem_Var_Pop_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "LItem" */
export type LItem_Var_Samp_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "LItem" */
export type LItem_Variance_Order_By = {
  latestRequestResolutionTime?: InputMaybe<Order_By>;
  latestRequestSubmissionTime?: InputMaybe<Order_By>;
  numberOfRequests?: InputMaybe<Order_By>;
};

/** columns and relationships of "LRegistry" */
export type LRegistry = {
  __typename?: 'LRegistry';
  /** An object relationship */
  clearingMetaEvidence?: Maybe<MetaEvidence>;
  clearingMetaEvidence_id: Scalars['String'];
  connectedTCR?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isConnectedTCR?: Maybe<Scalars['Boolean']>;
  isTCRofTcrs?: Maybe<Scalars['Boolean']>;
  itemName?: Maybe<Scalars['String']>;
  itemNamePlural?: Maybe<Scalars['String']>;
  /** An array relationship */
  items: Array<LItem>;
  metaEvidenceCount: Scalars['numeric'];
  numberOfAbsent: Scalars['numeric'];
  numberOfChallengedClearing: Scalars['numeric'];
  numberOfChallengedRegistrations: Scalars['numeric'];
  numberOfClearingRequested: Scalars['numeric'];
  numberOfRegistered: Scalars['numeric'];
  numberOfRegistrationRequested: Scalars['numeric'];
  parentTCRAddress?: Maybe<Scalars['String']>;
  /** An object relationship */
  registrationMetaEvidence?: Maybe<MetaEvidence>;
  registrationMetaEvidence_id: Scalars['String'];
  relTcrDisabled?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  requests: Array<LRequest>;
  requireRemovalEvidence?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};


/** columns and relationships of "LRegistry" */
export type LRegistryItemsArgs = {
  distinct_on?: InputMaybe<Array<LItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LItem_Order_By>>;
  where?: InputMaybe<LItem_Bool_Exp>;
};


/** columns and relationships of "LRegistry" */
export type LRegistryRequestsArgs = {
  distinct_on?: InputMaybe<Array<LRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LRequest_Order_By>>;
  where?: InputMaybe<LRequest_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "LRegistry". All fields are combined with a logical 'AND'. */
export type LRegistry_Bool_Exp = {
  _and?: InputMaybe<Array<LRegistry_Bool_Exp>>;
  _not?: InputMaybe<LRegistry_Bool_Exp>;
  _or?: InputMaybe<Array<LRegistry_Bool_Exp>>;
  clearingMetaEvidence?: InputMaybe<MetaEvidence_Bool_Exp>;
  clearingMetaEvidence_id?: InputMaybe<String_Comparison_Exp>;
  connectedTCR?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  isConnectedTCR?: InputMaybe<Boolean_Comparison_Exp>;
  isTCRofTcrs?: InputMaybe<Boolean_Comparison_Exp>;
  itemName?: InputMaybe<String_Comparison_Exp>;
  itemNamePlural?: InputMaybe<String_Comparison_Exp>;
  items?: InputMaybe<LItem_Bool_Exp>;
  metaEvidenceCount?: InputMaybe<Numeric_Comparison_Exp>;
  numberOfAbsent?: InputMaybe<Numeric_Comparison_Exp>;
  numberOfChallengedClearing?: InputMaybe<Numeric_Comparison_Exp>;
  numberOfChallengedRegistrations?: InputMaybe<Numeric_Comparison_Exp>;
  numberOfClearingRequested?: InputMaybe<Numeric_Comparison_Exp>;
  numberOfRegistered?: InputMaybe<Numeric_Comparison_Exp>;
  numberOfRegistrationRequested?: InputMaybe<Numeric_Comparison_Exp>;
  parentTCRAddress?: InputMaybe<String_Comparison_Exp>;
  registrationMetaEvidence?: InputMaybe<MetaEvidence_Bool_Exp>;
  registrationMetaEvidence_id?: InputMaybe<String_Comparison_Exp>;
  relTcrDisabled?: InputMaybe<Boolean_Comparison_Exp>;
  requests?: InputMaybe<LRequest_Bool_Exp>;
  requireRemovalEvidence?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "LRegistry". */
export type LRegistry_Order_By = {
  clearingMetaEvidence?: InputMaybe<MetaEvidence_Order_By>;
  clearingMetaEvidence_id?: InputMaybe<Order_By>;
  connectedTCR?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isConnectedTCR?: InputMaybe<Order_By>;
  isTCRofTcrs?: InputMaybe<Order_By>;
  itemName?: InputMaybe<Order_By>;
  itemNamePlural?: InputMaybe<Order_By>;
  items_aggregate?: InputMaybe<LItem_Aggregate_Order_By>;
  metaEvidenceCount?: InputMaybe<Order_By>;
  numberOfAbsent?: InputMaybe<Order_By>;
  numberOfChallengedClearing?: InputMaybe<Order_By>;
  numberOfChallengedRegistrations?: InputMaybe<Order_By>;
  numberOfClearingRequested?: InputMaybe<Order_By>;
  numberOfRegistered?: InputMaybe<Order_By>;
  numberOfRegistrationRequested?: InputMaybe<Order_By>;
  parentTCRAddress?: InputMaybe<Order_By>;
  registrationMetaEvidence?: InputMaybe<MetaEvidence_Order_By>;
  registrationMetaEvidence_id?: InputMaybe<Order_By>;
  relTcrDisabled?: InputMaybe<Order_By>;
  requests_aggregate?: InputMaybe<LRequest_Aggregate_Order_By>;
  requireRemovalEvidence?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "LRegistry" */
export enum LRegistry_Select_Column {
  /** column name */
  ClearingMetaEvidenceId = 'clearingMetaEvidence_id',
  /** column name */
  ConnectedTcr = 'connectedTCR',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsConnectedTcr = 'isConnectedTCR',
  /** column name */
  IsTcRofTcrs = 'isTCRofTcrs',
  /** column name */
  ItemName = 'itemName',
  /** column name */
  ItemNamePlural = 'itemNamePlural',
  /** column name */
  MetaEvidenceCount = 'metaEvidenceCount',
  /** column name */
  NumberOfAbsent = 'numberOfAbsent',
  /** column name */
  NumberOfChallengedClearing = 'numberOfChallengedClearing',
  /** column name */
  NumberOfChallengedRegistrations = 'numberOfChallengedRegistrations',
  /** column name */
  NumberOfClearingRequested = 'numberOfClearingRequested',
  /** column name */
  NumberOfRegistered = 'numberOfRegistered',
  /** column name */
  NumberOfRegistrationRequested = 'numberOfRegistrationRequested',
  /** column name */
  ParentTcrAddress = 'parentTCRAddress',
  /** column name */
  RegistrationMetaEvidenceId = 'registrationMetaEvidence_id',
  /** column name */
  RelTcrDisabled = 'relTcrDisabled',
  /** column name */
  RequireRemovalEvidence = 'requireRemovalEvidence',
  /** column name */
  Title = 'title'
}

/** Streaming cursor of the table "LRegistry" */
export type LRegistry_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LRegistry_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LRegistry_Stream_Cursor_Value_Input = {
  clearingMetaEvidence_id?: InputMaybe<Scalars['String']>;
  connectedTCR?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isConnectedTCR?: InputMaybe<Scalars['Boolean']>;
  isTCRofTcrs?: InputMaybe<Scalars['Boolean']>;
  itemName?: InputMaybe<Scalars['String']>;
  itemNamePlural?: InputMaybe<Scalars['String']>;
  metaEvidenceCount?: InputMaybe<Scalars['numeric']>;
  numberOfAbsent?: InputMaybe<Scalars['numeric']>;
  numberOfChallengedClearing?: InputMaybe<Scalars['numeric']>;
  numberOfChallengedRegistrations?: InputMaybe<Scalars['numeric']>;
  numberOfClearingRequested?: InputMaybe<Scalars['numeric']>;
  numberOfRegistered?: InputMaybe<Scalars['numeric']>;
  numberOfRegistrationRequested?: InputMaybe<Scalars['numeric']>;
  parentTCRAddress?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_id?: InputMaybe<Scalars['String']>;
  relTcrDisabled?: InputMaybe<Scalars['Boolean']>;
  requireRemovalEvidence?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "LRequest" */
export type LRequest = {
  __typename?: 'LRequest';
  arbitrator: Scalars['String'];
  arbitratorExtraData: Scalars['String'];
  challenger: Scalars['String'];
  creationTx: Scalars['String'];
  deposit: Scalars['numeric'];
  disputeID: Scalars['numeric'];
  disputeOutcome: Scalars['ruling'];
  disputed: Scalars['Boolean'];
  /** An object relationship */
  evidenceGroup?: Maybe<EvidenceGroup>;
  evidenceGroup_id: Scalars['String'];
  finalRuling?: Maybe<Scalars['numeric']>;
  id: Scalars['String'];
  /** An object relationship */
  item?: Maybe<LItem>;
  item_id: Scalars['String'];
  /** An object relationship */
  metaEvidence?: Maybe<MetaEvidence>;
  metaEvidence_id: Scalars['String'];
  numberOfRounds: Scalars['numeric'];
  /** An object relationship */
  registry?: Maybe<LRegistry>;
  registryAddress: Scalars['String'];
  registry_id: Scalars['String'];
  requestType: Scalars['status'];
  requester: Scalars['String'];
  resolutionTime: Scalars['numeric'];
  resolutionTx?: Maybe<Scalars['String']>;
  resolved: Scalars['Boolean'];
  /** An array relationship */
  rounds: Array<LRound>;
  submissionTime: Scalars['numeric'];
};


/** columns and relationships of "LRequest" */
export type LRequestRoundsArgs = {
  distinct_on?: InputMaybe<Array<LRound_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LRound_Order_By>>;
  where?: InputMaybe<LRound_Bool_Exp>;
};

/** order by aggregate values of table "LRequest" */
export type LRequest_Aggregate_Order_By = {
  avg?: InputMaybe<LRequest_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<LRequest_Max_Order_By>;
  min?: InputMaybe<LRequest_Min_Order_By>;
  stddev?: InputMaybe<LRequest_Stddev_Order_By>;
  stddev_pop?: InputMaybe<LRequest_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<LRequest_Stddev_Samp_Order_By>;
  sum?: InputMaybe<LRequest_Sum_Order_By>;
  var_pop?: InputMaybe<LRequest_Var_Pop_Order_By>;
  var_samp?: InputMaybe<LRequest_Var_Samp_Order_By>;
  variance?: InputMaybe<LRequest_Variance_Order_By>;
};

/** order by avg() on columns of table "LRequest" */
export type LRequest_Avg_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "LRequest". All fields are combined with a logical 'AND'. */
export type LRequest_Bool_Exp = {
  _and?: InputMaybe<Array<LRequest_Bool_Exp>>;
  _not?: InputMaybe<LRequest_Bool_Exp>;
  _or?: InputMaybe<Array<LRequest_Bool_Exp>>;
  arbitrator?: InputMaybe<String_Comparison_Exp>;
  arbitratorExtraData?: InputMaybe<String_Comparison_Exp>;
  challenger?: InputMaybe<String_Comparison_Exp>;
  creationTx?: InputMaybe<String_Comparison_Exp>;
  deposit?: InputMaybe<Numeric_Comparison_Exp>;
  disputeID?: InputMaybe<Numeric_Comparison_Exp>;
  disputeOutcome?: InputMaybe<Ruling_Comparison_Exp>;
  disputed?: InputMaybe<Boolean_Comparison_Exp>;
  evidenceGroup?: InputMaybe<EvidenceGroup_Bool_Exp>;
  evidenceGroup_id?: InputMaybe<String_Comparison_Exp>;
  finalRuling?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  item?: InputMaybe<LItem_Bool_Exp>;
  item_id?: InputMaybe<String_Comparison_Exp>;
  metaEvidence?: InputMaybe<MetaEvidence_Bool_Exp>;
  metaEvidence_id?: InputMaybe<String_Comparison_Exp>;
  numberOfRounds?: InputMaybe<Numeric_Comparison_Exp>;
  registry?: InputMaybe<LRegistry_Bool_Exp>;
  registryAddress?: InputMaybe<String_Comparison_Exp>;
  registry_id?: InputMaybe<String_Comparison_Exp>;
  requestType?: InputMaybe<Status_Comparison_Exp>;
  requester?: InputMaybe<String_Comparison_Exp>;
  resolutionTime?: InputMaybe<Numeric_Comparison_Exp>;
  resolutionTx?: InputMaybe<String_Comparison_Exp>;
  resolved?: InputMaybe<Boolean_Comparison_Exp>;
  rounds?: InputMaybe<LRound_Bool_Exp>;
  submissionTime?: InputMaybe<Numeric_Comparison_Exp>;
};

/** order by max() on columns of table "LRequest" */
export type LRequest_Max_Order_By = {
  arbitrator?: InputMaybe<Order_By>;
  arbitratorExtraData?: InputMaybe<Order_By>;
  challenger?: InputMaybe<Order_By>;
  creationTx?: InputMaybe<Order_By>;
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  disputeOutcome?: InputMaybe<Order_By>;
  evidenceGroup_id?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  metaEvidence_id?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  requestType?: InputMaybe<Order_By>;
  requester?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  resolutionTx?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "LRequest" */
export type LRequest_Min_Order_By = {
  arbitrator?: InputMaybe<Order_By>;
  arbitratorExtraData?: InputMaybe<Order_By>;
  challenger?: InputMaybe<Order_By>;
  creationTx?: InputMaybe<Order_By>;
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  disputeOutcome?: InputMaybe<Order_By>;
  evidenceGroup_id?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  metaEvidence_id?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  requestType?: InputMaybe<Order_By>;
  requester?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  resolutionTx?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "LRequest". */
export type LRequest_Order_By = {
  arbitrator?: InputMaybe<Order_By>;
  arbitratorExtraData?: InputMaybe<Order_By>;
  challenger?: InputMaybe<Order_By>;
  creationTx?: InputMaybe<Order_By>;
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  disputeOutcome?: InputMaybe<Order_By>;
  disputed?: InputMaybe<Order_By>;
  evidenceGroup?: InputMaybe<EvidenceGroup_Order_By>;
  evidenceGroup_id?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<LItem_Order_By>;
  item_id?: InputMaybe<Order_By>;
  metaEvidence?: InputMaybe<MetaEvidence_Order_By>;
  metaEvidence_id?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  registry?: InputMaybe<LRegistry_Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  requestType?: InputMaybe<Order_By>;
  requester?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  resolutionTx?: InputMaybe<Order_By>;
  resolved?: InputMaybe<Order_By>;
  rounds_aggregate?: InputMaybe<LRound_Aggregate_Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** select columns of table "LRequest" */
export enum LRequest_Select_Column {
  /** column name */
  Arbitrator = 'arbitrator',
  /** column name */
  ArbitratorExtraData = 'arbitratorExtraData',
  /** column name */
  Challenger = 'challenger',
  /** column name */
  CreationTx = 'creationTx',
  /** column name */
  Deposit = 'deposit',
  /** column name */
  DisputeId = 'disputeID',
  /** column name */
  DisputeOutcome = 'disputeOutcome',
  /** column name */
  Disputed = 'disputed',
  /** column name */
  EvidenceGroupId = 'evidenceGroup_id',
  /** column name */
  FinalRuling = 'finalRuling',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  MetaEvidenceId = 'metaEvidence_id',
  /** column name */
  NumberOfRounds = 'numberOfRounds',
  /** column name */
  RegistryAddress = 'registryAddress',
  /** column name */
  RegistryId = 'registry_id',
  /** column name */
  RequestType = 'requestType',
  /** column name */
  Requester = 'requester',
  /** column name */
  ResolutionTime = 'resolutionTime',
  /** column name */
  ResolutionTx = 'resolutionTx',
  /** column name */
  Resolved = 'resolved',
  /** column name */
  SubmissionTime = 'submissionTime'
}

/** order by stddev() on columns of table "LRequest" */
export type LRequest_Stddev_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "LRequest" */
export type LRequest_Stddev_Pop_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "LRequest" */
export type LRequest_Stddev_Samp_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "LRequest" */
export type LRequest_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LRequest_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LRequest_Stream_Cursor_Value_Input = {
  arbitrator?: InputMaybe<Scalars['String']>;
  arbitratorExtraData?: InputMaybe<Scalars['String']>;
  challenger?: InputMaybe<Scalars['String']>;
  creationTx?: InputMaybe<Scalars['String']>;
  deposit?: InputMaybe<Scalars['numeric']>;
  disputeID?: InputMaybe<Scalars['numeric']>;
  disputeOutcome?: InputMaybe<Scalars['ruling']>;
  disputed?: InputMaybe<Scalars['Boolean']>;
  evidenceGroup_id?: InputMaybe<Scalars['String']>;
  finalRuling?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['String']>;
  item_id?: InputMaybe<Scalars['String']>;
  metaEvidence_id?: InputMaybe<Scalars['String']>;
  numberOfRounds?: InputMaybe<Scalars['numeric']>;
  registryAddress?: InputMaybe<Scalars['String']>;
  registry_id?: InputMaybe<Scalars['String']>;
  requestType?: InputMaybe<Scalars['status']>;
  requester?: InputMaybe<Scalars['String']>;
  resolutionTime?: InputMaybe<Scalars['numeric']>;
  resolutionTx?: InputMaybe<Scalars['String']>;
  resolved?: InputMaybe<Scalars['Boolean']>;
  submissionTime?: InputMaybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "LRequest" */
export type LRequest_Sum_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "LRequest" */
export type LRequest_Var_Pop_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "LRequest" */
export type LRequest_Var_Samp_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "LRequest" */
export type LRequest_Variance_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** columns and relationships of "LRound" */
export type LRound = {
  __typename?: 'LRound';
  amountPaidChallenger: Scalars['numeric'];
  amountPaidRequester: Scalars['numeric'];
  appealPeriodEnd: Scalars['numeric'];
  appealPeriodStart: Scalars['numeric'];
  appealed: Scalars['Boolean'];
  appealedAt?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  contributions: Array<LContribution>;
  creationTime: Scalars['numeric'];
  feeRewards: Scalars['numeric'];
  hasPaidChallenger: Scalars['Boolean'];
  hasPaidRequester: Scalars['Boolean'];
  id: Scalars['String'];
  lastFundedChallenger: Scalars['numeric'];
  lastFundedRequester: Scalars['numeric'];
  numberOfContributions: Scalars['numeric'];
  /** An object relationship */
  request?: Maybe<LRequest>;
  request_id: Scalars['String'];
  ruling: Scalars['ruling'];
  rulingTime: Scalars['numeric'];
  txHashAppealDecision?: Maybe<Scalars['String']>;
  txHashAppealPossible?: Maybe<Scalars['String']>;
};


/** columns and relationships of "LRound" */
export type LRoundContributionsArgs = {
  distinct_on?: InputMaybe<Array<LContribution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LContribution_Order_By>>;
  where?: InputMaybe<LContribution_Bool_Exp>;
};

/** order by aggregate values of table "LRound" */
export type LRound_Aggregate_Order_By = {
  avg?: InputMaybe<LRound_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<LRound_Max_Order_By>;
  min?: InputMaybe<LRound_Min_Order_By>;
  stddev?: InputMaybe<LRound_Stddev_Order_By>;
  stddev_pop?: InputMaybe<LRound_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<LRound_Stddev_Samp_Order_By>;
  sum?: InputMaybe<LRound_Sum_Order_By>;
  var_pop?: InputMaybe<LRound_Var_Pop_Order_By>;
  var_samp?: InputMaybe<LRound_Var_Samp_Order_By>;
  variance?: InputMaybe<LRound_Variance_Order_By>;
};

/** order by avg() on columns of table "LRound" */
export type LRound_Avg_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  lastFundedChallenger?: InputMaybe<Order_By>;
  lastFundedRequester?: InputMaybe<Order_By>;
  numberOfContributions?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "LRound". All fields are combined with a logical 'AND'. */
export type LRound_Bool_Exp = {
  _and?: InputMaybe<Array<LRound_Bool_Exp>>;
  _not?: InputMaybe<LRound_Bool_Exp>;
  _or?: InputMaybe<Array<LRound_Bool_Exp>>;
  amountPaidChallenger?: InputMaybe<Numeric_Comparison_Exp>;
  amountPaidRequester?: InputMaybe<Numeric_Comparison_Exp>;
  appealPeriodEnd?: InputMaybe<Numeric_Comparison_Exp>;
  appealPeriodStart?: InputMaybe<Numeric_Comparison_Exp>;
  appealed?: InputMaybe<Boolean_Comparison_Exp>;
  appealedAt?: InputMaybe<Numeric_Comparison_Exp>;
  contributions?: InputMaybe<LContribution_Bool_Exp>;
  creationTime?: InputMaybe<Numeric_Comparison_Exp>;
  feeRewards?: InputMaybe<Numeric_Comparison_Exp>;
  hasPaidChallenger?: InputMaybe<Boolean_Comparison_Exp>;
  hasPaidRequester?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lastFundedChallenger?: InputMaybe<Numeric_Comparison_Exp>;
  lastFundedRequester?: InputMaybe<Numeric_Comparison_Exp>;
  numberOfContributions?: InputMaybe<Numeric_Comparison_Exp>;
  request?: InputMaybe<LRequest_Bool_Exp>;
  request_id?: InputMaybe<String_Comparison_Exp>;
  ruling?: InputMaybe<Ruling_Comparison_Exp>;
  rulingTime?: InputMaybe<Numeric_Comparison_Exp>;
  txHashAppealDecision?: InputMaybe<String_Comparison_Exp>;
  txHashAppealPossible?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "LRound" */
export type LRound_Max_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastFundedChallenger?: InputMaybe<Order_By>;
  lastFundedRequester?: InputMaybe<Order_By>;
  numberOfContributions?: InputMaybe<Order_By>;
  request_id?: InputMaybe<Order_By>;
  ruling?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
  txHashAppealDecision?: InputMaybe<Order_By>;
  txHashAppealPossible?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "LRound" */
export type LRound_Min_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastFundedChallenger?: InputMaybe<Order_By>;
  lastFundedRequester?: InputMaybe<Order_By>;
  numberOfContributions?: InputMaybe<Order_By>;
  request_id?: InputMaybe<Order_By>;
  ruling?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
  txHashAppealDecision?: InputMaybe<Order_By>;
  txHashAppealPossible?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "LRound". */
export type LRound_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealed?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  contributions_aggregate?: InputMaybe<LContribution_Aggregate_Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  hasPaidChallenger?: InputMaybe<Order_By>;
  hasPaidRequester?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastFundedChallenger?: InputMaybe<Order_By>;
  lastFundedRequester?: InputMaybe<Order_By>;
  numberOfContributions?: InputMaybe<Order_By>;
  request?: InputMaybe<LRequest_Order_By>;
  request_id?: InputMaybe<Order_By>;
  ruling?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
  txHashAppealDecision?: InputMaybe<Order_By>;
  txHashAppealPossible?: InputMaybe<Order_By>;
};

/** select columns of table "LRound" */
export enum LRound_Select_Column {
  /** column name */
  AmountPaidChallenger = 'amountPaidChallenger',
  /** column name */
  AmountPaidRequester = 'amountPaidRequester',
  /** column name */
  AppealPeriodEnd = 'appealPeriodEnd',
  /** column name */
  AppealPeriodStart = 'appealPeriodStart',
  /** column name */
  Appealed = 'appealed',
  /** column name */
  AppealedAt = 'appealedAt',
  /** column name */
  CreationTime = 'creationTime',
  /** column name */
  FeeRewards = 'feeRewards',
  /** column name */
  HasPaidChallenger = 'hasPaidChallenger',
  /** column name */
  HasPaidRequester = 'hasPaidRequester',
  /** column name */
  Id = 'id',
  /** column name */
  LastFundedChallenger = 'lastFundedChallenger',
  /** column name */
  LastFundedRequester = 'lastFundedRequester',
  /** column name */
  NumberOfContributions = 'numberOfContributions',
  /** column name */
  RequestId = 'request_id',
  /** column name */
  Ruling = 'ruling',
  /** column name */
  RulingTime = 'rulingTime',
  /** column name */
  TxHashAppealDecision = 'txHashAppealDecision',
  /** column name */
  TxHashAppealPossible = 'txHashAppealPossible'
}

/** order by stddev() on columns of table "LRound" */
export type LRound_Stddev_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  lastFundedChallenger?: InputMaybe<Order_By>;
  lastFundedRequester?: InputMaybe<Order_By>;
  numberOfContributions?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "LRound" */
export type LRound_Stddev_Pop_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  lastFundedChallenger?: InputMaybe<Order_By>;
  lastFundedRequester?: InputMaybe<Order_By>;
  numberOfContributions?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "LRound" */
export type LRound_Stddev_Samp_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  lastFundedChallenger?: InputMaybe<Order_By>;
  lastFundedRequester?: InputMaybe<Order_By>;
  numberOfContributions?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "LRound" */
export type LRound_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LRound_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LRound_Stream_Cursor_Value_Input = {
  amountPaidChallenger?: InputMaybe<Scalars['numeric']>;
  amountPaidRequester?: InputMaybe<Scalars['numeric']>;
  appealPeriodEnd?: InputMaybe<Scalars['numeric']>;
  appealPeriodStart?: InputMaybe<Scalars['numeric']>;
  appealed?: InputMaybe<Scalars['Boolean']>;
  appealedAt?: InputMaybe<Scalars['numeric']>;
  creationTime?: InputMaybe<Scalars['numeric']>;
  feeRewards?: InputMaybe<Scalars['numeric']>;
  hasPaidChallenger?: InputMaybe<Scalars['Boolean']>;
  hasPaidRequester?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  lastFundedChallenger?: InputMaybe<Scalars['numeric']>;
  lastFundedRequester?: InputMaybe<Scalars['numeric']>;
  numberOfContributions?: InputMaybe<Scalars['numeric']>;
  request_id?: InputMaybe<Scalars['String']>;
  ruling?: InputMaybe<Scalars['ruling']>;
  rulingTime?: InputMaybe<Scalars['numeric']>;
  txHashAppealDecision?: InputMaybe<Scalars['String']>;
  txHashAppealPossible?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "LRound" */
export type LRound_Sum_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  lastFundedChallenger?: InputMaybe<Order_By>;
  lastFundedRequester?: InputMaybe<Order_By>;
  numberOfContributions?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "LRound" */
export type LRound_Var_Pop_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  lastFundedChallenger?: InputMaybe<Order_By>;
  lastFundedRequester?: InputMaybe<Order_By>;
  numberOfContributions?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "LRound" */
export type LRound_Var_Samp_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  lastFundedChallenger?: InputMaybe<Order_By>;
  lastFundedRequester?: InputMaybe<Order_By>;
  numberOfContributions?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "LRound" */
export type LRound_Variance_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  lastFundedChallenger?: InputMaybe<Order_By>;
  lastFundedRequester?: InputMaybe<Order_By>;
  numberOfContributions?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** columns and relationships of "MetaEvidence" */
export type MetaEvidence = {
  __typename?: 'MetaEvidence';
  id: Scalars['String'];
  uri: Scalars['String'];
};

/** Boolean expression to filter rows from the table "MetaEvidence". All fields are combined with a logical 'AND'. */
export type MetaEvidence_Bool_Exp = {
  _and?: InputMaybe<Array<MetaEvidence_Bool_Exp>>;
  _not?: InputMaybe<MetaEvidence_Bool_Exp>;
  _or?: InputMaybe<Array<MetaEvidence_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  uri?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "MetaEvidence". */
export type MetaEvidence_Order_By = {
  id?: InputMaybe<Order_By>;
  uri?: InputMaybe<Order_By>;
};

/** select columns of table "MetaEvidence" */
export enum MetaEvidence_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Uri = 'uri'
}

/** Streaming cursor of the table "MetaEvidence" */
export type MetaEvidence_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MetaEvidence_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MetaEvidence_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Registry" */
export type Registry = {
  __typename?: 'Registry';
  /** An object relationship */
  clearingMetaEvidence?: Maybe<MetaEvidence>;
  clearingMetaEvidence_id: Scalars['String'];
  connectedTCR?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** An array relationship */
  items: Array<Item>;
  metaEvidenceCount: Scalars['numeric'];
  numberOfItems: Scalars['numeric'];
  /** An object relationship */
  registrationMetaEvidence?: Maybe<MetaEvidence>;
  registrationMetaEvidence_id: Scalars['String'];
  /** An array relationship */
  requests: Array<Request>;
};


/** columns and relationships of "Registry" */
export type RegistryItemsArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


/** columns and relationships of "Registry" */
export type RegistryRequestsArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "Registry". All fields are combined with a logical 'AND'. */
export type Registry_Bool_Exp = {
  _and?: InputMaybe<Array<Registry_Bool_Exp>>;
  _not?: InputMaybe<Registry_Bool_Exp>;
  _or?: InputMaybe<Array<Registry_Bool_Exp>>;
  clearingMetaEvidence?: InputMaybe<MetaEvidence_Bool_Exp>;
  clearingMetaEvidence_id?: InputMaybe<String_Comparison_Exp>;
  connectedTCR?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  items?: InputMaybe<Item_Bool_Exp>;
  metaEvidenceCount?: InputMaybe<Numeric_Comparison_Exp>;
  numberOfItems?: InputMaybe<Numeric_Comparison_Exp>;
  registrationMetaEvidence?: InputMaybe<MetaEvidence_Bool_Exp>;
  registrationMetaEvidence_id?: InputMaybe<String_Comparison_Exp>;
  requests?: InputMaybe<Request_Bool_Exp>;
};

/** Ordering options when selecting data from "Registry". */
export type Registry_Order_By = {
  clearingMetaEvidence?: InputMaybe<MetaEvidence_Order_By>;
  clearingMetaEvidence_id?: InputMaybe<Order_By>;
  connectedTCR?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  items_aggregate?: InputMaybe<Item_Aggregate_Order_By>;
  metaEvidenceCount?: InputMaybe<Order_By>;
  numberOfItems?: InputMaybe<Order_By>;
  registrationMetaEvidence?: InputMaybe<MetaEvidence_Order_By>;
  registrationMetaEvidence_id?: InputMaybe<Order_By>;
  requests_aggregate?: InputMaybe<Request_Aggregate_Order_By>;
};

/** select columns of table "Registry" */
export enum Registry_Select_Column {
  /** column name */
  ClearingMetaEvidenceId = 'clearingMetaEvidence_id',
  /** column name */
  ConnectedTcr = 'connectedTCR',
  /** column name */
  Id = 'id',
  /** column name */
  MetaEvidenceCount = 'metaEvidenceCount',
  /** column name */
  NumberOfItems = 'numberOfItems',
  /** column name */
  RegistrationMetaEvidenceId = 'registrationMetaEvidence_id'
}

/** Streaming cursor of the table "Registry" */
export type Registry_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Registry_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Registry_Stream_Cursor_Value_Input = {
  clearingMetaEvidence_id?: InputMaybe<Scalars['String']>;
  connectedTCR?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  metaEvidenceCount?: InputMaybe<Scalars['numeric']>;
  numberOfItems?: InputMaybe<Scalars['numeric']>;
  registrationMetaEvidence_id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Request" */
export type Request = {
  __typename?: 'Request';
  arbitrator: Scalars['String'];
  arbitratorExtraData: Scalars['String'];
  challenger: Scalars['String'];
  creationTx: Scalars['String'];
  deposit: Scalars['numeric'];
  disputeID: Scalars['numeric'];
  disputeOutcome: Scalars['ruling'];
  disputed: Scalars['Boolean'];
  /** An object relationship */
  evidenceGroup?: Maybe<EvidenceGroup>;
  evidenceGroup_id: Scalars['String'];
  finalRuling?: Maybe<Scalars['numeric']>;
  id: Scalars['String'];
  /** An object relationship */
  item?: Maybe<Item>;
  item_id: Scalars['String'];
  /** An object relationship */
  metaEvidence?: Maybe<MetaEvidence>;
  metaEvidence_id: Scalars['String'];
  numberOfRounds: Scalars['numeric'];
  /** An object relationship */
  registry?: Maybe<Registry>;
  registryAddress: Scalars['String'];
  registry_id: Scalars['String'];
  requestType: Scalars['status'];
  requester: Scalars['String'];
  resolutionTime: Scalars['numeric'];
  resolutionTx?: Maybe<Scalars['String']>;
  resolved: Scalars['Boolean'];
  /** An array relationship */
  rounds: Array<Round>;
  submissionTime: Scalars['numeric'];
};


/** columns and relationships of "Request" */
export type RequestRoundsArgs = {
  distinct_on?: InputMaybe<Array<Round_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Round_Order_By>>;
  where?: InputMaybe<Round_Bool_Exp>;
};

/** order by aggregate values of table "Request" */
export type Request_Aggregate_Order_By = {
  avg?: InputMaybe<Request_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Request_Max_Order_By>;
  min?: InputMaybe<Request_Min_Order_By>;
  stddev?: InputMaybe<Request_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Request_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Request_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Request_Sum_Order_By>;
  var_pop?: InputMaybe<Request_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Request_Var_Samp_Order_By>;
  variance?: InputMaybe<Request_Variance_Order_By>;
};

/** order by avg() on columns of table "Request" */
export type Request_Avg_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Request". All fields are combined with a logical 'AND'. */
export type Request_Bool_Exp = {
  _and?: InputMaybe<Array<Request_Bool_Exp>>;
  _not?: InputMaybe<Request_Bool_Exp>;
  _or?: InputMaybe<Array<Request_Bool_Exp>>;
  arbitrator?: InputMaybe<String_Comparison_Exp>;
  arbitratorExtraData?: InputMaybe<String_Comparison_Exp>;
  challenger?: InputMaybe<String_Comparison_Exp>;
  creationTx?: InputMaybe<String_Comparison_Exp>;
  deposit?: InputMaybe<Numeric_Comparison_Exp>;
  disputeID?: InputMaybe<Numeric_Comparison_Exp>;
  disputeOutcome?: InputMaybe<Ruling_Comparison_Exp>;
  disputed?: InputMaybe<Boolean_Comparison_Exp>;
  evidenceGroup?: InputMaybe<EvidenceGroup_Bool_Exp>;
  evidenceGroup_id?: InputMaybe<String_Comparison_Exp>;
  finalRuling?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  item?: InputMaybe<Item_Bool_Exp>;
  item_id?: InputMaybe<String_Comparison_Exp>;
  metaEvidence?: InputMaybe<MetaEvidence_Bool_Exp>;
  metaEvidence_id?: InputMaybe<String_Comparison_Exp>;
  numberOfRounds?: InputMaybe<Numeric_Comparison_Exp>;
  registry?: InputMaybe<Registry_Bool_Exp>;
  registryAddress?: InputMaybe<String_Comparison_Exp>;
  registry_id?: InputMaybe<String_Comparison_Exp>;
  requestType?: InputMaybe<Status_Comparison_Exp>;
  requester?: InputMaybe<String_Comparison_Exp>;
  resolutionTime?: InputMaybe<Numeric_Comparison_Exp>;
  resolutionTx?: InputMaybe<String_Comparison_Exp>;
  resolved?: InputMaybe<Boolean_Comparison_Exp>;
  rounds?: InputMaybe<Round_Bool_Exp>;
  submissionTime?: InputMaybe<Numeric_Comparison_Exp>;
};

/** order by max() on columns of table "Request" */
export type Request_Max_Order_By = {
  arbitrator?: InputMaybe<Order_By>;
  arbitratorExtraData?: InputMaybe<Order_By>;
  challenger?: InputMaybe<Order_By>;
  creationTx?: InputMaybe<Order_By>;
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  disputeOutcome?: InputMaybe<Order_By>;
  evidenceGroup_id?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  metaEvidence_id?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  requestType?: InputMaybe<Order_By>;
  requester?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  resolutionTx?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Request" */
export type Request_Min_Order_By = {
  arbitrator?: InputMaybe<Order_By>;
  arbitratorExtraData?: InputMaybe<Order_By>;
  challenger?: InputMaybe<Order_By>;
  creationTx?: InputMaybe<Order_By>;
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  disputeOutcome?: InputMaybe<Order_By>;
  evidenceGroup_id?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  metaEvidence_id?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  requestType?: InputMaybe<Order_By>;
  requester?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  resolutionTx?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Request". */
export type Request_Order_By = {
  arbitrator?: InputMaybe<Order_By>;
  arbitratorExtraData?: InputMaybe<Order_By>;
  challenger?: InputMaybe<Order_By>;
  creationTx?: InputMaybe<Order_By>;
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  disputeOutcome?: InputMaybe<Order_By>;
  disputed?: InputMaybe<Order_By>;
  evidenceGroup?: InputMaybe<EvidenceGroup_Order_By>;
  evidenceGroup_id?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<Item_Order_By>;
  item_id?: InputMaybe<Order_By>;
  metaEvidence?: InputMaybe<MetaEvidence_Order_By>;
  metaEvidence_id?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  registry?: InputMaybe<Registry_Order_By>;
  registryAddress?: InputMaybe<Order_By>;
  registry_id?: InputMaybe<Order_By>;
  requestType?: InputMaybe<Order_By>;
  requester?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  resolutionTx?: InputMaybe<Order_By>;
  resolved?: InputMaybe<Order_By>;
  rounds_aggregate?: InputMaybe<Round_Aggregate_Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** select columns of table "Request" */
export enum Request_Select_Column {
  /** column name */
  Arbitrator = 'arbitrator',
  /** column name */
  ArbitratorExtraData = 'arbitratorExtraData',
  /** column name */
  Challenger = 'challenger',
  /** column name */
  CreationTx = 'creationTx',
  /** column name */
  Deposit = 'deposit',
  /** column name */
  DisputeId = 'disputeID',
  /** column name */
  DisputeOutcome = 'disputeOutcome',
  /** column name */
  Disputed = 'disputed',
  /** column name */
  EvidenceGroupId = 'evidenceGroup_id',
  /** column name */
  FinalRuling = 'finalRuling',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  MetaEvidenceId = 'metaEvidence_id',
  /** column name */
  NumberOfRounds = 'numberOfRounds',
  /** column name */
  RegistryAddress = 'registryAddress',
  /** column name */
  RegistryId = 'registry_id',
  /** column name */
  RequestType = 'requestType',
  /** column name */
  Requester = 'requester',
  /** column name */
  ResolutionTime = 'resolutionTime',
  /** column name */
  ResolutionTx = 'resolutionTx',
  /** column name */
  Resolved = 'resolved',
  /** column name */
  SubmissionTime = 'submissionTime'
}

/** order by stddev() on columns of table "Request" */
export type Request_Stddev_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Request" */
export type Request_Stddev_Pop_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Request" */
export type Request_Stddev_Samp_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Request" */
export type Request_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Request_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Request_Stream_Cursor_Value_Input = {
  arbitrator?: InputMaybe<Scalars['String']>;
  arbitratorExtraData?: InputMaybe<Scalars['String']>;
  challenger?: InputMaybe<Scalars['String']>;
  creationTx?: InputMaybe<Scalars['String']>;
  deposit?: InputMaybe<Scalars['numeric']>;
  disputeID?: InputMaybe<Scalars['numeric']>;
  disputeOutcome?: InputMaybe<Scalars['ruling']>;
  disputed?: InputMaybe<Scalars['Boolean']>;
  evidenceGroup_id?: InputMaybe<Scalars['String']>;
  finalRuling?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['String']>;
  item_id?: InputMaybe<Scalars['String']>;
  metaEvidence_id?: InputMaybe<Scalars['String']>;
  numberOfRounds?: InputMaybe<Scalars['numeric']>;
  registryAddress?: InputMaybe<Scalars['String']>;
  registry_id?: InputMaybe<Scalars['String']>;
  requestType?: InputMaybe<Scalars['status']>;
  requester?: InputMaybe<Scalars['String']>;
  resolutionTime?: InputMaybe<Scalars['numeric']>;
  resolutionTx?: InputMaybe<Scalars['String']>;
  resolved?: InputMaybe<Scalars['Boolean']>;
  submissionTime?: InputMaybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "Request" */
export type Request_Sum_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "Request" */
export type Request_Var_Pop_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Request" */
export type Request_Var_Samp_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Request" */
export type Request_Variance_Order_By = {
  deposit?: InputMaybe<Order_By>;
  disputeID?: InputMaybe<Order_By>;
  finalRuling?: InputMaybe<Order_By>;
  numberOfRounds?: InputMaybe<Order_By>;
  resolutionTime?: InputMaybe<Order_By>;
  submissionTime?: InputMaybe<Order_By>;
};

/** columns and relationships of "Round" */
export type Round = {
  __typename?: 'Round';
  amountPaidChallenger: Scalars['numeric'];
  amountPaidRequester: Scalars['numeric'];
  appealPeriodEnd: Scalars['numeric'];
  appealPeriodStart: Scalars['numeric'];
  appealed: Scalars['Boolean'];
  appealedAt?: Maybe<Scalars['numeric']>;
  creationTime: Scalars['numeric'];
  feeRewards: Scalars['numeric'];
  hasPaidChallenger: Scalars['Boolean'];
  hasPaidRequester: Scalars['Boolean'];
  id: Scalars['String'];
  /** An object relationship */
  request?: Maybe<Request>;
  request_id: Scalars['String'];
  ruling: Scalars['ruling'];
  rulingTime: Scalars['numeric'];
  txHashAppealDecision?: Maybe<Scalars['String']>;
  txHashAppealPossible?: Maybe<Scalars['String']>;
};

/** order by aggregate values of table "Round" */
export type Round_Aggregate_Order_By = {
  avg?: InputMaybe<Round_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Round_Max_Order_By>;
  min?: InputMaybe<Round_Min_Order_By>;
  stddev?: InputMaybe<Round_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Round_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Round_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Round_Sum_Order_By>;
  var_pop?: InputMaybe<Round_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Round_Var_Samp_Order_By>;
  variance?: InputMaybe<Round_Variance_Order_By>;
};

/** order by avg() on columns of table "Round" */
export type Round_Avg_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Round". All fields are combined with a logical 'AND'. */
export type Round_Bool_Exp = {
  _and?: InputMaybe<Array<Round_Bool_Exp>>;
  _not?: InputMaybe<Round_Bool_Exp>;
  _or?: InputMaybe<Array<Round_Bool_Exp>>;
  amountPaidChallenger?: InputMaybe<Numeric_Comparison_Exp>;
  amountPaidRequester?: InputMaybe<Numeric_Comparison_Exp>;
  appealPeriodEnd?: InputMaybe<Numeric_Comparison_Exp>;
  appealPeriodStart?: InputMaybe<Numeric_Comparison_Exp>;
  appealed?: InputMaybe<Boolean_Comparison_Exp>;
  appealedAt?: InputMaybe<Numeric_Comparison_Exp>;
  creationTime?: InputMaybe<Numeric_Comparison_Exp>;
  feeRewards?: InputMaybe<Numeric_Comparison_Exp>;
  hasPaidChallenger?: InputMaybe<Boolean_Comparison_Exp>;
  hasPaidRequester?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  request?: InputMaybe<Request_Bool_Exp>;
  request_id?: InputMaybe<String_Comparison_Exp>;
  ruling?: InputMaybe<Ruling_Comparison_Exp>;
  rulingTime?: InputMaybe<Numeric_Comparison_Exp>;
  txHashAppealDecision?: InputMaybe<String_Comparison_Exp>;
  txHashAppealPossible?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "Round" */
export type Round_Max_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  request_id?: InputMaybe<Order_By>;
  ruling?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
  txHashAppealDecision?: InputMaybe<Order_By>;
  txHashAppealPossible?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Round" */
export type Round_Min_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  request_id?: InputMaybe<Order_By>;
  ruling?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
  txHashAppealDecision?: InputMaybe<Order_By>;
  txHashAppealPossible?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Round". */
export type Round_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealed?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  hasPaidChallenger?: InputMaybe<Order_By>;
  hasPaidRequester?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  request?: InputMaybe<Request_Order_By>;
  request_id?: InputMaybe<Order_By>;
  ruling?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
  txHashAppealDecision?: InputMaybe<Order_By>;
  txHashAppealPossible?: InputMaybe<Order_By>;
};

/** select columns of table "Round" */
export enum Round_Select_Column {
  /** column name */
  AmountPaidChallenger = 'amountPaidChallenger',
  /** column name */
  AmountPaidRequester = 'amountPaidRequester',
  /** column name */
  AppealPeriodEnd = 'appealPeriodEnd',
  /** column name */
  AppealPeriodStart = 'appealPeriodStart',
  /** column name */
  Appealed = 'appealed',
  /** column name */
  AppealedAt = 'appealedAt',
  /** column name */
  CreationTime = 'creationTime',
  /** column name */
  FeeRewards = 'feeRewards',
  /** column name */
  HasPaidChallenger = 'hasPaidChallenger',
  /** column name */
  HasPaidRequester = 'hasPaidRequester',
  /** column name */
  Id = 'id',
  /** column name */
  RequestId = 'request_id',
  /** column name */
  Ruling = 'ruling',
  /** column name */
  RulingTime = 'rulingTime',
  /** column name */
  TxHashAppealDecision = 'txHashAppealDecision',
  /** column name */
  TxHashAppealPossible = 'txHashAppealPossible'
}

/** order by stddev() on columns of table "Round" */
export type Round_Stddev_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Round" */
export type Round_Stddev_Pop_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Round" */
export type Round_Stddev_Samp_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Round" */
export type Round_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Round_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Round_Stream_Cursor_Value_Input = {
  amountPaidChallenger?: InputMaybe<Scalars['numeric']>;
  amountPaidRequester?: InputMaybe<Scalars['numeric']>;
  appealPeriodEnd?: InputMaybe<Scalars['numeric']>;
  appealPeriodStart?: InputMaybe<Scalars['numeric']>;
  appealed?: InputMaybe<Scalars['Boolean']>;
  appealedAt?: InputMaybe<Scalars['numeric']>;
  creationTime?: InputMaybe<Scalars['numeric']>;
  feeRewards?: InputMaybe<Scalars['numeric']>;
  hasPaidChallenger?: InputMaybe<Scalars['Boolean']>;
  hasPaidRequester?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  request_id?: InputMaybe<Scalars['String']>;
  ruling?: InputMaybe<Scalars['ruling']>;
  rulingTime?: InputMaybe<Scalars['numeric']>;
  txHashAppealDecision?: InputMaybe<Scalars['String']>;
  txHashAppealPossible?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "Round" */
export type Round_Sum_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "Round" */
export type Round_Var_Pop_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Round" */
export type Round_Var_Samp_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Round" */
export type Round_Variance_Order_By = {
  amountPaidChallenger?: InputMaybe<Order_By>;
  amountPaidRequester?: InputMaybe<Order_By>;
  appealPeriodEnd?: InputMaybe<Order_By>;
  appealPeriodStart?: InputMaybe<Order_By>;
  appealedAt?: InputMaybe<Order_By>;
  creationTime?: InputMaybe<Order_By>;
  feeRewards?: InputMaybe<Order_By>;
  rulingTime?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "_meta" */
export type _Meta = {
  __typename?: '_meta';
  bufferBlock?: Maybe<Scalars['Int']>;
  chainId?: Maybe<Scalars['Int']>;
  endBlock?: Maybe<Scalars['Int']>;
  eventsProcessed?: Maybe<Scalars['Int']>;
  firstEventBlock?: Maybe<Scalars['Int']>;
  isReady?: Maybe<Scalars['Boolean']>;
  progressBlock?: Maybe<Scalars['Int']>;
  readyAt?: Maybe<Scalars['timestamptz']>;
  sourceBlock?: Maybe<Scalars['Int']>;
  startBlock?: Maybe<Scalars['Int']>;
};

/** Boolean expression to filter rows from the table "_meta". All fields are combined with a logical 'AND'. */
export type _Meta_Bool_Exp = {
  _and?: InputMaybe<Array<_Meta_Bool_Exp>>;
  _not?: InputMaybe<_Meta_Bool_Exp>;
  _or?: InputMaybe<Array<_Meta_Bool_Exp>>;
  bufferBlock?: InputMaybe<Int_Comparison_Exp>;
  chainId?: InputMaybe<Int_Comparison_Exp>;
  endBlock?: InputMaybe<Int_Comparison_Exp>;
  eventsProcessed?: InputMaybe<Int_Comparison_Exp>;
  firstEventBlock?: InputMaybe<Int_Comparison_Exp>;
  isReady?: InputMaybe<Boolean_Comparison_Exp>;
  progressBlock?: InputMaybe<Int_Comparison_Exp>;
  readyAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  sourceBlock?: InputMaybe<Int_Comparison_Exp>;
  startBlock?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "_meta". */
export type _Meta_Order_By = {
  bufferBlock?: InputMaybe<Order_By>;
  chainId?: InputMaybe<Order_By>;
  endBlock?: InputMaybe<Order_By>;
  eventsProcessed?: InputMaybe<Order_By>;
  firstEventBlock?: InputMaybe<Order_By>;
  isReady?: InputMaybe<Order_By>;
  progressBlock?: InputMaybe<Order_By>;
  readyAt?: InputMaybe<Order_By>;
  sourceBlock?: InputMaybe<Order_By>;
  startBlock?: InputMaybe<Order_By>;
};

/** select columns of table "_meta" */
export enum _Meta_Select_Column {
  /** column name */
  BufferBlock = 'bufferBlock',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  EndBlock = 'endBlock',
  /** column name */
  EventsProcessed = 'eventsProcessed',
  /** column name */
  FirstEventBlock = 'firstEventBlock',
  /** column name */
  IsReady = 'isReady',
  /** column name */
  ProgressBlock = 'progressBlock',
  /** column name */
  ReadyAt = 'readyAt',
  /** column name */
  SourceBlock = 'sourceBlock',
  /** column name */
  StartBlock = 'startBlock'
}

/** Streaming cursor of the table "_meta" */
export type _Meta_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Meta_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Meta_Stream_Cursor_Value_Input = {
  bufferBlock?: InputMaybe<Scalars['Int']>;
  chainId?: InputMaybe<Scalars['Int']>;
  endBlock?: InputMaybe<Scalars['Int']>;
  eventsProcessed?: InputMaybe<Scalars['Int']>;
  firstEventBlock?: InputMaybe<Scalars['Int']>;
  isReady?: InputMaybe<Scalars['Boolean']>;
  progressBlock?: InputMaybe<Scalars['Int']>;
  readyAt?: InputMaybe<Scalars['timestamptz']>;
  sourceBlock?: InputMaybe<Scalars['Int']>;
  startBlock?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "chain_metadata" */
export type Chain_Metadata = {
  __typename?: 'chain_metadata';
  block_height?: Maybe<Scalars['Int']>;
  chain_id?: Maybe<Scalars['Int']>;
  end_block?: Maybe<Scalars['Int']>;
  first_event_block_number?: Maybe<Scalars['Int']>;
  is_hyper_sync?: Maybe<Scalars['Boolean']>;
  latest_fetched_block_number?: Maybe<Scalars['Int']>;
  latest_processed_block?: Maybe<Scalars['Int']>;
  num_batches_fetched?: Maybe<Scalars['Int']>;
  num_events_processed?: Maybe<Scalars['Int']>;
  start_block?: Maybe<Scalars['Int']>;
  timestamp_caught_up_to_head_or_endblock?: Maybe<Scalars['timestamptz']>;
};

/** Boolean expression to filter rows from the table "chain_metadata". All fields are combined with a logical 'AND'. */
export type Chain_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Chain_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Chain_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Chain_Metadata_Bool_Exp>>;
  block_height?: InputMaybe<Int_Comparison_Exp>;
  chain_id?: InputMaybe<Int_Comparison_Exp>;
  end_block?: InputMaybe<Int_Comparison_Exp>;
  first_event_block_number?: InputMaybe<Int_Comparison_Exp>;
  is_hyper_sync?: InputMaybe<Boolean_Comparison_Exp>;
  latest_fetched_block_number?: InputMaybe<Int_Comparison_Exp>;
  latest_processed_block?: InputMaybe<Int_Comparison_Exp>;
  num_batches_fetched?: InputMaybe<Int_Comparison_Exp>;
  num_events_processed?: InputMaybe<Int_Comparison_Exp>;
  start_block?: InputMaybe<Int_Comparison_Exp>;
  timestamp_caught_up_to_head_or_endblock?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "chain_metadata". */
export type Chain_Metadata_Order_By = {
  block_height?: InputMaybe<Order_By>;
  chain_id?: InputMaybe<Order_By>;
  end_block?: InputMaybe<Order_By>;
  first_event_block_number?: InputMaybe<Order_By>;
  is_hyper_sync?: InputMaybe<Order_By>;
  latest_fetched_block_number?: InputMaybe<Order_By>;
  latest_processed_block?: InputMaybe<Order_By>;
  num_batches_fetched?: InputMaybe<Order_By>;
  num_events_processed?: InputMaybe<Order_By>;
  start_block?: InputMaybe<Order_By>;
  timestamp_caught_up_to_head_or_endblock?: InputMaybe<Order_By>;
};

/** select columns of table "chain_metadata" */
export enum Chain_Metadata_Select_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  EndBlock = 'end_block',
  /** column name */
  FirstEventBlockNumber = 'first_event_block_number',
  /** column name */
  IsHyperSync = 'is_hyper_sync',
  /** column name */
  LatestFetchedBlockNumber = 'latest_fetched_block_number',
  /** column name */
  LatestProcessedBlock = 'latest_processed_block',
  /** column name */
  NumBatchesFetched = 'num_batches_fetched',
  /** column name */
  NumEventsProcessed = 'num_events_processed',
  /** column name */
  StartBlock = 'start_block',
  /** column name */
  TimestampCaughtUpToHeadOrEndblock = 'timestamp_caught_up_to_head_or_endblock'
}

/** Streaming cursor of the table "chain_metadata" */
export type Chain_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chain_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chain_Metadata_Stream_Cursor_Value_Input = {
  block_height?: InputMaybe<Scalars['Int']>;
  chain_id?: InputMaybe<Scalars['Int']>;
  end_block?: InputMaybe<Scalars['Int']>;
  first_event_block_number?: InputMaybe<Scalars['Int']>;
  is_hyper_sync?: InputMaybe<Scalars['Boolean']>;
  latest_fetched_block_number?: InputMaybe<Scalars['Int']>;
  latest_processed_block?: InputMaybe<Scalars['Int']>;
  num_batches_fetched?: InputMaybe<Scalars['Int']>;
  num_events_processed?: InputMaybe<Scalars['Int']>;
  start_block?: InputMaybe<Scalars['Int']>;
  timestamp_caught_up_to_head_or_endblock?: InputMaybe<Scalars['timestamptz']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Arbitrator" */
  Arbitrator: Array<Arbitrator>;
  /** fetch data from the table: "Arbitrator" using primary key columns */
  Arbitrator_by_pk?: Maybe<Arbitrator>;
  /** fetch data from the table: "Evidence" */
  Evidence: Array<Evidence>;
  /** fetch data from the table: "EvidenceGroup" */
  EvidenceGroup: Array<EvidenceGroup>;
  /** fetch data from the table: "EvidenceGroup" using primary key columns */
  EvidenceGroup_by_pk?: Maybe<EvidenceGroup>;
  /** fetch data from the table: "Evidence" using primary key columns */
  Evidence_by_pk?: Maybe<Evidence>;
  /** fetch data from the table: "HasPaidAppealFee" */
  HasPaidAppealFee: Array<HasPaidAppealFee>;
  /** fetch data from the table: "HasPaidAppealFee" using primary key columns */
  HasPaidAppealFee_by_pk?: Maybe<HasPaidAppealFee>;
  /** fetch data from the table: "Item" */
  Item: Array<Item>;
  /** fetch data from the table: "ItemProp" */
  ItemProp: Array<ItemProp>;
  /** fetch data from the table: "ItemProp" using primary key columns */
  ItemProp_by_pk?: Maybe<ItemProp>;
  /** fetch data from the table: "Item" using primary key columns */
  Item_by_pk?: Maybe<Item>;
  /** fetch data from the table: "LArbitrator" */
  LArbitrator: Array<LArbitrator>;
  /** fetch data from the table: "LArbitrator" using primary key columns */
  LArbitrator_by_pk?: Maybe<LArbitrator>;
  /** fetch data from the table: "LContribution" */
  LContribution: Array<LContribution>;
  /** fetch data from the table: "LContribution" using primary key columns */
  LContribution_by_pk?: Maybe<LContribution>;
  /** fetch data from the table: "LItem" */
  LItem: Array<LItem>;
  /** fetch data from the table: "LItem" using primary key columns */
  LItem_by_pk?: Maybe<LItem>;
  /** fetch data from the table: "LRegistry" */
  LRegistry: Array<LRegistry>;
  /** fetch data from the table: "LRegistry" using primary key columns */
  LRegistry_by_pk?: Maybe<LRegistry>;
  /** fetch data from the table: "LRequest" */
  LRequest: Array<LRequest>;
  /** fetch data from the table: "LRequest" using primary key columns */
  LRequest_by_pk?: Maybe<LRequest>;
  /** fetch data from the table: "LRound" */
  LRound: Array<LRound>;
  /** fetch data from the table: "LRound" using primary key columns */
  LRound_by_pk?: Maybe<LRound>;
  /** fetch data from the table: "MetaEvidence" */
  MetaEvidence: Array<MetaEvidence>;
  /** fetch data from the table: "MetaEvidence" using primary key columns */
  MetaEvidence_by_pk?: Maybe<MetaEvidence>;
  /** fetch data from the table: "Registry" */
  Registry: Array<Registry>;
  /** fetch data from the table: "Registry" using primary key columns */
  Registry_by_pk?: Maybe<Registry>;
  /** fetch data from the table: "Request" */
  Request: Array<Request>;
  /** fetch data from the table: "Request" using primary key columns */
  Request_by_pk?: Maybe<Request>;
  /** fetch data from the table: "Round" */
  Round: Array<Round>;
  /** fetch data from the table: "Round" using primary key columns */
  Round_by_pk?: Maybe<Round>;
  /** fetch data from the table: "_meta" */
  _meta: Array<_Meta>;
  /** fetch data from the table: "chain_metadata" */
  chain_metadata: Array<Chain_Metadata>;
  /** fetch data from the table: "raw_events" */
  raw_events: Array<Raw_Events>;
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk?: Maybe<Raw_Events>;
};


export type Query_RootArbitratorArgs = {
  distinct_on?: InputMaybe<Array<Arbitrator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Arbitrator_Order_By>>;
  where?: InputMaybe<Arbitrator_Bool_Exp>;
};


export type Query_RootArbitrator_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootEvidenceArgs = {
  distinct_on?: InputMaybe<Array<Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evidence_Order_By>>;
  where?: InputMaybe<Evidence_Bool_Exp>;
};


export type Query_RootEvidenceGroupArgs = {
  distinct_on?: InputMaybe<Array<EvidenceGroup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EvidenceGroup_Order_By>>;
  where?: InputMaybe<EvidenceGroup_Bool_Exp>;
};


export type Query_RootEvidenceGroup_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootEvidence_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootHasPaidAppealFeeArgs = {
  distinct_on?: InputMaybe<Array<HasPaidAppealFee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HasPaidAppealFee_Order_By>>;
  where?: InputMaybe<HasPaidAppealFee_Bool_Exp>;
};


export type Query_RootHasPaidAppealFee_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootItemArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Query_RootItemPropArgs = {
  distinct_on?: InputMaybe<Array<ItemProp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ItemProp_Order_By>>;
  where?: InputMaybe<ItemProp_Bool_Exp>;
};


export type Query_RootItemProp_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootItem_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLArbitratorArgs = {
  distinct_on?: InputMaybe<Array<LArbitrator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LArbitrator_Order_By>>;
  where?: InputMaybe<LArbitrator_Bool_Exp>;
};


export type Query_RootLArbitrator_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLContributionArgs = {
  distinct_on?: InputMaybe<Array<LContribution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LContribution_Order_By>>;
  where?: InputMaybe<LContribution_Bool_Exp>;
};


export type Query_RootLContribution_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLItemArgs = {
  distinct_on?: InputMaybe<Array<LItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LItem_Order_By>>;
  where?: InputMaybe<LItem_Bool_Exp>;
};


export type Query_RootLItem_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLRegistryArgs = {
  distinct_on?: InputMaybe<Array<LRegistry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LRegistry_Order_By>>;
  where?: InputMaybe<LRegistry_Bool_Exp>;
};


export type Query_RootLRegistry_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLRequestArgs = {
  distinct_on?: InputMaybe<Array<LRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LRequest_Order_By>>;
  where?: InputMaybe<LRequest_Bool_Exp>;
};


export type Query_RootLRequest_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLRoundArgs = {
  distinct_on?: InputMaybe<Array<LRound_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LRound_Order_By>>;
  where?: InputMaybe<LRound_Bool_Exp>;
};


export type Query_RootLRound_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMetaEvidenceArgs = {
  distinct_on?: InputMaybe<Array<MetaEvidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MetaEvidence_Order_By>>;
  where?: InputMaybe<MetaEvidence_Bool_Exp>;
};


export type Query_RootMetaEvidence_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRegistryArgs = {
  distinct_on?: InputMaybe<Array<Registry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Registry_Order_By>>;
  where?: InputMaybe<Registry_Bool_Exp>;
};


export type Query_RootRegistry_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRequestArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};


export type Query_RootRequest_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRoundArgs = {
  distinct_on?: InputMaybe<Array<Round_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Round_Order_By>>;
  where?: InputMaybe<Round_Bool_Exp>;
};


export type Query_RootRound_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_Root_MetaArgs = {
  distinct_on?: InputMaybe<Array<_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Meta_Order_By>>;
  where?: InputMaybe<_Meta_Bool_Exp>;
};


export type Query_RootChain_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Chain_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chain_Metadata_Order_By>>;
  where?: InputMaybe<Chain_Metadata_Bool_Exp>;
};


export type Query_RootRaw_EventsArgs = {
  distinct_on?: InputMaybe<Array<Raw_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raw_Events_Order_By>>;
  where?: InputMaybe<Raw_Events_Bool_Exp>;
};


export type Query_RootRaw_Events_By_PkArgs = {
  serial: Scalars['Int'];
};

/** columns and relationships of "raw_events" */
export type Raw_Events = {
  __typename?: 'raw_events';
  block_fields: Scalars['jsonb'];
  block_hash: Scalars['String'];
  block_number: Scalars['Int'];
  block_timestamp: Scalars['Int'];
  chain_id: Scalars['Int'];
  contract_name: Scalars['String'];
  event_id: Scalars['numeric'];
  event_name: Scalars['String'];
  log_index: Scalars['Int'];
  params: Scalars['jsonb'];
  serial: Scalars['Int'];
  src_address: Scalars['String'];
  transaction_fields: Scalars['jsonb'];
};


/** columns and relationships of "raw_events" */
export type Raw_EventsBlock_FieldsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "raw_events" */
export type Raw_EventsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "raw_events" */
export type Raw_EventsTransaction_FieldsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "raw_events". All fields are combined with a logical 'AND'. */
export type Raw_Events_Bool_Exp = {
  _and?: InputMaybe<Array<Raw_Events_Bool_Exp>>;
  _not?: InputMaybe<Raw_Events_Bool_Exp>;
  _or?: InputMaybe<Array<Raw_Events_Bool_Exp>>;
  block_fields?: InputMaybe<Jsonb_Comparison_Exp>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Int_Comparison_Exp>;
  block_timestamp?: InputMaybe<Int_Comparison_Exp>;
  chain_id?: InputMaybe<Int_Comparison_Exp>;
  contract_name?: InputMaybe<String_Comparison_Exp>;
  event_id?: InputMaybe<Numeric_Comparison_Exp>;
  event_name?: InputMaybe<String_Comparison_Exp>;
  log_index?: InputMaybe<Int_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
  serial?: InputMaybe<Int_Comparison_Exp>;
  src_address?: InputMaybe<String_Comparison_Exp>;
  transaction_fields?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "raw_events". */
export type Raw_Events_Order_By = {
  block_fields?: InputMaybe<Order_By>;
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  chain_id?: InputMaybe<Order_By>;
  contract_name?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  event_name?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
  serial?: InputMaybe<Order_By>;
  src_address?: InputMaybe<Order_By>;
  transaction_fields?: InputMaybe<Order_By>;
};

/** select columns of table "raw_events" */
export enum Raw_Events_Select_Column {
  /** column name */
  BlockFields = 'block_fields',
  /** column name */
  BlockHash = 'block_hash',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  BlockTimestamp = 'block_timestamp',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  ContractName = 'contract_name',
  /** column name */
  EventId = 'event_id',
  /** column name */
  EventName = 'event_name',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Params = 'params',
  /** column name */
  Serial = 'serial',
  /** column name */
  SrcAddress = 'src_address',
  /** column name */
  TransactionFields = 'transaction_fields'
}

/** Streaming cursor of the table "raw_events" */
export type Raw_Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Raw_Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Raw_Events_Stream_Cursor_Value_Input = {
  block_fields?: InputMaybe<Scalars['jsonb']>;
  block_hash?: InputMaybe<Scalars['String']>;
  block_number?: InputMaybe<Scalars['Int']>;
  block_timestamp?: InputMaybe<Scalars['Int']>;
  chain_id?: InputMaybe<Scalars['Int']>;
  contract_name?: InputMaybe<Scalars['String']>;
  event_id?: InputMaybe<Scalars['numeric']>;
  event_name?: InputMaybe<Scalars['String']>;
  log_index?: InputMaybe<Scalars['Int']>;
  params?: InputMaybe<Scalars['jsonb']>;
  serial?: InputMaybe<Scalars['Int']>;
  src_address?: InputMaybe<Scalars['String']>;
  transaction_fields?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to compare columns of type "ruling". All fields are combined with logical 'AND'. */
export type Ruling_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['ruling']>;
  _gt?: InputMaybe<Scalars['ruling']>;
  _gte?: InputMaybe<Scalars['ruling']>;
  _in?: InputMaybe<Array<Scalars['ruling']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['ruling']>;
  _lte?: InputMaybe<Scalars['ruling']>;
  _neq?: InputMaybe<Scalars['ruling']>;
  _nin?: InputMaybe<Array<Scalars['ruling']>>;
};

/** Boolean expression to compare columns of type "status". All fields are combined with logical 'AND'. */
export type Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['status']>;
  _gt?: InputMaybe<Scalars['status']>;
  _gte?: InputMaybe<Scalars['status']>;
  _in?: InputMaybe<Array<Scalars['status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['status']>;
  _lte?: InputMaybe<Scalars['status']>;
  _neq?: InputMaybe<Scalars['status']>;
  _nin?: InputMaybe<Array<Scalars['status']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Arbitrator" */
  Arbitrator: Array<Arbitrator>;
  /** fetch data from the table: "Arbitrator" using primary key columns */
  Arbitrator_by_pk?: Maybe<Arbitrator>;
  /** fetch data from the table in a streaming manner: "Arbitrator" */
  Arbitrator_stream: Array<Arbitrator>;
  /** fetch data from the table: "Evidence" */
  Evidence: Array<Evidence>;
  /** fetch data from the table: "EvidenceGroup" */
  EvidenceGroup: Array<EvidenceGroup>;
  /** fetch data from the table: "EvidenceGroup" using primary key columns */
  EvidenceGroup_by_pk?: Maybe<EvidenceGroup>;
  /** fetch data from the table in a streaming manner: "EvidenceGroup" */
  EvidenceGroup_stream: Array<EvidenceGroup>;
  /** fetch data from the table: "Evidence" using primary key columns */
  Evidence_by_pk?: Maybe<Evidence>;
  /** fetch data from the table in a streaming manner: "Evidence" */
  Evidence_stream: Array<Evidence>;
  /** fetch data from the table: "HasPaidAppealFee" */
  HasPaidAppealFee: Array<HasPaidAppealFee>;
  /** fetch data from the table: "HasPaidAppealFee" using primary key columns */
  HasPaidAppealFee_by_pk?: Maybe<HasPaidAppealFee>;
  /** fetch data from the table in a streaming manner: "HasPaidAppealFee" */
  HasPaidAppealFee_stream: Array<HasPaidAppealFee>;
  /** fetch data from the table: "Item" */
  Item: Array<Item>;
  /** fetch data from the table: "ItemProp" */
  ItemProp: Array<ItemProp>;
  /** fetch data from the table: "ItemProp" using primary key columns */
  ItemProp_by_pk?: Maybe<ItemProp>;
  /** fetch data from the table in a streaming manner: "ItemProp" */
  ItemProp_stream: Array<ItemProp>;
  /** fetch data from the table: "Item" using primary key columns */
  Item_by_pk?: Maybe<Item>;
  /** fetch data from the table in a streaming manner: "Item" */
  Item_stream: Array<Item>;
  /** fetch data from the table: "LArbitrator" */
  LArbitrator: Array<LArbitrator>;
  /** fetch data from the table: "LArbitrator" using primary key columns */
  LArbitrator_by_pk?: Maybe<LArbitrator>;
  /** fetch data from the table in a streaming manner: "LArbitrator" */
  LArbitrator_stream: Array<LArbitrator>;
  /** fetch data from the table: "LContribution" */
  LContribution: Array<LContribution>;
  /** fetch data from the table: "LContribution" using primary key columns */
  LContribution_by_pk?: Maybe<LContribution>;
  /** fetch data from the table in a streaming manner: "LContribution" */
  LContribution_stream: Array<LContribution>;
  /** fetch data from the table: "LItem" */
  LItem: Array<LItem>;
  /** fetch data from the table: "LItem" using primary key columns */
  LItem_by_pk?: Maybe<LItem>;
  /** fetch data from the table in a streaming manner: "LItem" */
  LItem_stream: Array<LItem>;
  /** fetch data from the table: "LRegistry" */
  LRegistry: Array<LRegistry>;
  /** fetch data from the table: "LRegistry" using primary key columns */
  LRegistry_by_pk?: Maybe<LRegistry>;
  /** fetch data from the table in a streaming manner: "LRegistry" */
  LRegistry_stream: Array<LRegistry>;
  /** fetch data from the table: "LRequest" */
  LRequest: Array<LRequest>;
  /** fetch data from the table: "LRequest" using primary key columns */
  LRequest_by_pk?: Maybe<LRequest>;
  /** fetch data from the table in a streaming manner: "LRequest" */
  LRequest_stream: Array<LRequest>;
  /** fetch data from the table: "LRound" */
  LRound: Array<LRound>;
  /** fetch data from the table: "LRound" using primary key columns */
  LRound_by_pk?: Maybe<LRound>;
  /** fetch data from the table in a streaming manner: "LRound" */
  LRound_stream: Array<LRound>;
  /** fetch data from the table: "MetaEvidence" */
  MetaEvidence: Array<MetaEvidence>;
  /** fetch data from the table: "MetaEvidence" using primary key columns */
  MetaEvidence_by_pk?: Maybe<MetaEvidence>;
  /** fetch data from the table in a streaming manner: "MetaEvidence" */
  MetaEvidence_stream: Array<MetaEvidence>;
  /** fetch data from the table: "Registry" */
  Registry: Array<Registry>;
  /** fetch data from the table: "Registry" using primary key columns */
  Registry_by_pk?: Maybe<Registry>;
  /** fetch data from the table in a streaming manner: "Registry" */
  Registry_stream: Array<Registry>;
  /** fetch data from the table: "Request" */
  Request: Array<Request>;
  /** fetch data from the table: "Request" using primary key columns */
  Request_by_pk?: Maybe<Request>;
  /** fetch data from the table in a streaming manner: "Request" */
  Request_stream: Array<Request>;
  /** fetch data from the table: "Round" */
  Round: Array<Round>;
  /** fetch data from the table: "Round" using primary key columns */
  Round_by_pk?: Maybe<Round>;
  /** fetch data from the table in a streaming manner: "Round" */
  Round_stream: Array<Round>;
  /** fetch data from the table: "_meta" */
  _meta: Array<_Meta>;
  /** fetch data from the table in a streaming manner: "_meta" */
  _meta_stream: Array<_Meta>;
  /** fetch data from the table: "chain_metadata" */
  chain_metadata: Array<Chain_Metadata>;
  /** fetch data from the table in a streaming manner: "chain_metadata" */
  chain_metadata_stream: Array<Chain_Metadata>;
  /** fetch data from the table: "raw_events" */
  raw_events: Array<Raw_Events>;
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk?: Maybe<Raw_Events>;
  /** fetch data from the table in a streaming manner: "raw_events" */
  raw_events_stream: Array<Raw_Events>;
};


export type Subscription_RootArbitratorArgs = {
  distinct_on?: InputMaybe<Array<Arbitrator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Arbitrator_Order_By>>;
  where?: InputMaybe<Arbitrator_Bool_Exp>;
};


export type Subscription_RootArbitrator_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootArbitrator_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Arbitrator_Stream_Cursor_Input>>;
  where?: InputMaybe<Arbitrator_Bool_Exp>;
};


export type Subscription_RootEvidenceArgs = {
  distinct_on?: InputMaybe<Array<Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Evidence_Order_By>>;
  where?: InputMaybe<Evidence_Bool_Exp>;
};


export type Subscription_RootEvidenceGroupArgs = {
  distinct_on?: InputMaybe<Array<EvidenceGroup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EvidenceGroup_Order_By>>;
  where?: InputMaybe<EvidenceGroup_Bool_Exp>;
};


export type Subscription_RootEvidenceGroup_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootEvidenceGroup_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<EvidenceGroup_Stream_Cursor_Input>>;
  where?: InputMaybe<EvidenceGroup_Bool_Exp>;
};


export type Subscription_RootEvidence_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootEvidence_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Evidence_Stream_Cursor_Input>>;
  where?: InputMaybe<Evidence_Bool_Exp>;
};


export type Subscription_RootHasPaidAppealFeeArgs = {
  distinct_on?: InputMaybe<Array<HasPaidAppealFee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HasPaidAppealFee_Order_By>>;
  where?: InputMaybe<HasPaidAppealFee_Bool_Exp>;
};


export type Subscription_RootHasPaidAppealFee_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootHasPaidAppealFee_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<HasPaidAppealFee_Stream_Cursor_Input>>;
  where?: InputMaybe<HasPaidAppealFee_Bool_Exp>;
};


export type Subscription_RootItemArgs = {
  distinct_on?: InputMaybe<Array<Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Item_Order_By>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootItemPropArgs = {
  distinct_on?: InputMaybe<Array<ItemProp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ItemProp_Order_By>>;
  where?: InputMaybe<ItemProp_Bool_Exp>;
};


export type Subscription_RootItemProp_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootItemProp_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ItemProp_Stream_Cursor_Input>>;
  where?: InputMaybe<ItemProp_Bool_Exp>;
};


export type Subscription_RootItem_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootItem_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Item_Stream_Cursor_Input>>;
  where?: InputMaybe<Item_Bool_Exp>;
};


export type Subscription_RootLArbitratorArgs = {
  distinct_on?: InputMaybe<Array<LArbitrator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LArbitrator_Order_By>>;
  where?: InputMaybe<LArbitrator_Bool_Exp>;
};


export type Subscription_RootLArbitrator_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLArbitrator_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<LArbitrator_Stream_Cursor_Input>>;
  where?: InputMaybe<LArbitrator_Bool_Exp>;
};


export type Subscription_RootLContributionArgs = {
  distinct_on?: InputMaybe<Array<LContribution_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LContribution_Order_By>>;
  where?: InputMaybe<LContribution_Bool_Exp>;
};


export type Subscription_RootLContribution_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLContribution_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<LContribution_Stream_Cursor_Input>>;
  where?: InputMaybe<LContribution_Bool_Exp>;
};


export type Subscription_RootLItemArgs = {
  distinct_on?: InputMaybe<Array<LItem_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LItem_Order_By>>;
  where?: InputMaybe<LItem_Bool_Exp>;
};


export type Subscription_RootLItem_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLItem_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<LItem_Stream_Cursor_Input>>;
  where?: InputMaybe<LItem_Bool_Exp>;
};


export type Subscription_RootLRegistryArgs = {
  distinct_on?: InputMaybe<Array<LRegistry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LRegistry_Order_By>>;
  where?: InputMaybe<LRegistry_Bool_Exp>;
};


export type Subscription_RootLRegistry_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLRegistry_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<LRegistry_Stream_Cursor_Input>>;
  where?: InputMaybe<LRegistry_Bool_Exp>;
};


export type Subscription_RootLRequestArgs = {
  distinct_on?: InputMaybe<Array<LRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LRequest_Order_By>>;
  where?: InputMaybe<LRequest_Bool_Exp>;
};


export type Subscription_RootLRequest_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLRequest_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<LRequest_Stream_Cursor_Input>>;
  where?: InputMaybe<LRequest_Bool_Exp>;
};


export type Subscription_RootLRoundArgs = {
  distinct_on?: InputMaybe<Array<LRound_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LRound_Order_By>>;
  where?: InputMaybe<LRound_Bool_Exp>;
};


export type Subscription_RootLRound_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLRound_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<LRound_Stream_Cursor_Input>>;
  where?: InputMaybe<LRound_Bool_Exp>;
};


export type Subscription_RootMetaEvidenceArgs = {
  distinct_on?: InputMaybe<Array<MetaEvidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MetaEvidence_Order_By>>;
  where?: InputMaybe<MetaEvidence_Bool_Exp>;
};


export type Subscription_RootMetaEvidence_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMetaEvidence_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MetaEvidence_Stream_Cursor_Input>>;
  where?: InputMaybe<MetaEvidence_Bool_Exp>;
};


export type Subscription_RootRegistryArgs = {
  distinct_on?: InputMaybe<Array<Registry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Registry_Order_By>>;
  where?: InputMaybe<Registry_Bool_Exp>;
};


export type Subscription_RootRegistry_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRegistry_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Registry_Stream_Cursor_Input>>;
  where?: InputMaybe<Registry_Bool_Exp>;
};


export type Subscription_RootRequestArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};


export type Subscription_RootRequest_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRequest_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Request_Stream_Cursor_Input>>;
  where?: InputMaybe<Request_Bool_Exp>;
};


export type Subscription_RootRoundArgs = {
  distinct_on?: InputMaybe<Array<Round_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Round_Order_By>>;
  where?: InputMaybe<Round_Bool_Exp>;
};


export type Subscription_RootRound_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRound_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Round_Stream_Cursor_Input>>;
  where?: InputMaybe<Round_Bool_Exp>;
};


export type Subscription_Root_MetaArgs = {
  distinct_on?: InputMaybe<Array<_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Meta_Order_By>>;
  where?: InputMaybe<_Meta_Bool_Exp>;
};


export type Subscription_Root_Meta_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<_Meta_Stream_Cursor_Input>>;
  where?: InputMaybe<_Meta_Bool_Exp>;
};


export type Subscription_RootChain_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Chain_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chain_Metadata_Order_By>>;
  where?: InputMaybe<Chain_Metadata_Bool_Exp>;
};


export type Subscription_RootChain_Metadata_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Chain_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Chain_Metadata_Bool_Exp>;
};


export type Subscription_RootRaw_EventsArgs = {
  distinct_on?: InputMaybe<Array<Raw_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Raw_Events_Order_By>>;
  where?: InputMaybe<Raw_Events_Bool_Exp>;
};


export type Subscription_RootRaw_Events_By_PkArgs = {
  serial: Scalars['Int'];
};


export type Subscription_RootRaw_Events_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Raw_Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Raw_Events_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type GetAddressInfoQueryVariables = Exact<{
  address: Scalars['String'];
  registryAddress: Scalars['String'];
}>;


export type GetAddressInfoQuery = { __typename?: 'query_root', litems: Array<{ __typename?: 'LItem', data: string }> };
