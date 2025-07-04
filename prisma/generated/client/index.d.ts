
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model License
 * 
 */
export type License = $Result.DefaultSelection<Prisma.$LicensePayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model AbandonedCart
 * 
 */
export type AbandonedCart = $Result.DefaultSelection<Prisma.$AbandonedCartPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Licenses
 * const licenses = await prisma.license.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Licenses
   * const licenses = await prisma.license.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.license`: Exposes CRUD operations for the **License** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.LicenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.abandonedCart`: Exposes CRUD operations for the **AbandonedCart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AbandonedCarts
    * const abandonedCarts = await prisma.abandonedCart.findMany()
    * ```
    */
  get abandonedCart(): Prisma.AbandonedCartDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    License: 'License',
    Campaign: 'Campaign',
    AbandonedCart: 'AbandonedCart'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "license" | "campaign" | "abandonedCart"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      License: {
        payload: Prisma.$LicensePayload<ExtArgs>
        fields: Prisma.LicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findFirst: {
            args: Prisma.LicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findMany: {
            args: Prisma.LicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          create: {
            args: Prisma.LicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          createMany: {
            args: Prisma.LicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          delete: {
            args: Prisma.LicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          update: {
            args: Prisma.LicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          upsert: {
            args: Prisma.LicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.LicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      AbandonedCart: {
        payload: Prisma.$AbandonedCartPayload<ExtArgs>
        fields: Prisma.AbandonedCartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbandonedCartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbandonedCartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbandonedCartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbandonedCartPayload>
          }
          findFirst: {
            args: Prisma.AbandonedCartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbandonedCartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbandonedCartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbandonedCartPayload>
          }
          findMany: {
            args: Prisma.AbandonedCartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbandonedCartPayload>[]
          }
          create: {
            args: Prisma.AbandonedCartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbandonedCartPayload>
          }
          createMany: {
            args: Prisma.AbandonedCartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbandonedCartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbandonedCartPayload>[]
          }
          delete: {
            args: Prisma.AbandonedCartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbandonedCartPayload>
          }
          update: {
            args: Prisma.AbandonedCartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbandonedCartPayload>
          }
          deleteMany: {
            args: Prisma.AbandonedCartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbandonedCartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbandonedCartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbandonedCartPayload>[]
          }
          upsert: {
            args: Prisma.AbandonedCartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbandonedCartPayload>
          }
          aggregate: {
            args: Prisma.AbandonedCartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbandonedCart>
          }
          groupBy: {
            args: Prisma.AbandonedCartGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbandonedCartGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbandonedCartCountArgs<ExtArgs>
            result: $Utils.Optional<AbandonedCartCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    license?: LicenseOmit
    campaign?: CampaignOmit
    abandonedCart?: AbandonedCartOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    abandonedCarts: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abandonedCarts?: boolean | CampaignCountOutputTypeCountAbandonedCartsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountAbandonedCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbandonedCartWhereInput
  }


  /**
   * Models
   */

  /**
   * Model License
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseMinAggregateOutputType = {
    id: string | null
    licenseKey: string | null
    storeUrl: string | null
    platform: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type LicenseMaxAggregateOutputType = {
    id: string | null
    licenseKey: string | null
    storeUrl: string | null
    platform: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type LicenseCountAggregateOutputType = {
    id: number
    licenseKey: number
    storeUrl: number
    platform: number
    status: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type LicenseMinAggregateInputType = {
    id?: true
    licenseKey?: true
    storeUrl?: true
    platform?: true
    status?: true
    expiresAt?: true
    createdAt?: true
  }

  export type LicenseMaxAggregateInputType = {
    id?: true
    licenseKey?: true
    storeUrl?: true
    platform?: true
    status?: true
    expiresAt?: true
    createdAt?: true
  }

  export type LicenseCountAggregateInputType = {
    id?: true
    licenseKey?: true
    storeUrl?: true
    platform?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which License to aggregate.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type LicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithAggregationInput | LicenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: LicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    id: string
    licenseKey: string
    storeUrl: string
    platform: string
    status: string
    expiresAt: Date
    createdAt: Date
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKey?: boolean
    storeUrl?: boolean
    platform?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKey?: boolean
    storeUrl?: boolean
    platform?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKey?: boolean
    storeUrl?: boolean
    platform?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectScalar = {
    id?: boolean
    licenseKey?: boolean
    storeUrl?: boolean
    platform?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type LicenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "licenseKey" | "storeUrl" | "platform" | "status" | "expiresAt" | "createdAt", ExtArgs["result"]["license"]>

  export type $LicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "License"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseKey: string
      storeUrl: string
      platform: string
      status: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = $Result.GetResult<Prisma.$LicensePayload, S>

  type LicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface LicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['License'], meta: { name: 'License' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {LicenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseFindUniqueArgs>(args: SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseFindFirstArgs>(args?: SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseWithIdOnly = await prisma.license.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseFindManyArgs>(args?: SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a License.
     * @param {LicenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends LicenseCreateArgs>(args: SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licenses.
     * @param {LicenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseCreateManyArgs>(args?: SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licenses and returns the data saved in the database.
     * @param {LicenseCreateManyAndReturnArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a License.
     * @param {LicenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeleteArgs>(args: SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one License.
     * @param {LicenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUpdateArgs>(args: SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licenses.
     * @param {LicenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeleteManyArgs>(args?: SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUpdateManyArgs>(args: SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses and returns the data updated in the database.
     * @param {LicenseUpdateManyAndReturnArgs} args - Arguments to update many Licenses.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LicenseUpdateManyAndReturnArgs>(args: SelectSubset<T, LicenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one License.
     * @param {LicenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUpsertArgs>(args: SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicenseCountArgs>(
      args?: Subset<T, LicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseGroupByArgs['orderBy'] }
        : { orderBy?: LicenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the License model
   */
  readonly fields: LicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for License.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the License model
   */
  interface LicenseFieldRefs {
    readonly id: FieldRef<"License", 'String'>
    readonly licenseKey: FieldRef<"License", 'String'>
    readonly storeUrl: FieldRef<"License", 'String'>
    readonly platform: FieldRef<"License", 'String'>
    readonly status: FieldRef<"License", 'String'>
    readonly expiresAt: FieldRef<"License", 'DateTime'>
    readonly createdAt: FieldRef<"License", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * License findUnique
   */
  export type LicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findUniqueOrThrow
   */
  export type LicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findFirst
   */
  export type LicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findFirstOrThrow
   */
  export type LicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findMany
   */
  export type LicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License create
   */
  export type LicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data needed to create a License.
     */
    data: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
  }

  /**
   * License createMany
   */
  export type LicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
  }

  /**
   * License createManyAndReturn
   */
  export type LicenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
  }

  /**
   * License update
   */
  export type LicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data needed to update a License.
     */
    data: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
    /**
     * Choose, which License to update.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License updateMany
   */
  export type LicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License updateManyAndReturn
   */
  export type LicenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License upsert
   */
  export type LicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The filter to search for the License to update in case it exists.
     */
    where: LicenseWhereUniqueInput
    /**
     * In case the License found by the `where` argument doesn't exist, create a new License with this data.
     */
    create: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
    /**
     * In case the License was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
  }

  /**
   * License delete
   */
  export type LicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Filter which License to delete.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License deleteMany
   */
  export type LicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to delete.
     */
    limit?: number
  }

  /**
   * License without action
   */
  export type LicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    triggerDelay: number | null
  }

  export type CampaignSumAggregateOutputType = {
    triggerDelay: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    triggerDelay: number | null
    status: string | null
    subject: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    triggerDelay: number | null
    status: string | null
    subject: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    type: number
    triggerDelay: number
    status: number
    subject: number
    content: number
    createdAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    triggerDelay?: true
  }

  export type CampaignSumAggregateInputType = {
    triggerDelay?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    triggerDelay?: true
    status?: true
    subject?: true
    content?: true
    createdAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    triggerDelay?: true
    status?: true
    subject?: true
    content?: true
    createdAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    triggerDelay?: true
    status?: true
    subject?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    type: string
    triggerDelay: number
    status: string
    subject: string | null
    content: string
    createdAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    triggerDelay?: boolean
    status?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
    abandonedCarts?: boolean | Campaign$abandonedCartsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    triggerDelay?: boolean
    status?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    triggerDelay?: boolean
    status?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    triggerDelay?: boolean
    status?: boolean
    subject?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "triggerDelay" | "status" | "subject" | "content" | "createdAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abandonedCarts?: boolean | Campaign$abandonedCartsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      abandonedCarts: Prisma.$AbandonedCartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      triggerDelay: number
      status: string
      subject: string | null
      content: string
      createdAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    abandonedCarts<T extends Campaign$abandonedCartsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$abandonedCartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly type: FieldRef<"Campaign", 'String'>
    readonly triggerDelay: FieldRef<"Campaign", 'Int'>
    readonly status: FieldRef<"Campaign", 'String'>
    readonly subject: FieldRef<"Campaign", 'String'>
    readonly content: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.abandonedCarts
   */
  export type Campaign$abandonedCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartInclude<ExtArgs> | null
    where?: AbandonedCartWhereInput
    orderBy?: AbandonedCartOrderByWithRelationInput | AbandonedCartOrderByWithRelationInput[]
    cursor?: AbandonedCartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbandonedCartScalarFieldEnum | AbandonedCartScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model AbandonedCart
   */

  export type AggregateAbandonedCart = {
    _count: AbandonedCartCountAggregateOutputType | null
    _avg: AbandonedCartAvgAggregateOutputType | null
    _sum: AbandonedCartSumAggregateOutputType | null
    _min: AbandonedCartMinAggregateOutputType | null
    _max: AbandonedCartMaxAggregateOutputType | null
  }

  export type AbandonedCartAvgAggregateOutputType = {
    cartValue: number | null
  }

  export type AbandonedCartSumAggregateOutputType = {
    cartValue: number | null
  }

  export type AbandonedCartMinAggregateOutputType = {
    id: string | null
    customerName: string | null
    customerEmail: string | null
    cartValue: number | null
    abandonedAt: Date | null
    status: string | null
    campaignId: string | null
    createdAt: Date | null
  }

  export type AbandonedCartMaxAggregateOutputType = {
    id: string | null
    customerName: string | null
    customerEmail: string | null
    cartValue: number | null
    abandonedAt: Date | null
    status: string | null
    campaignId: string | null
    createdAt: Date | null
  }

  export type AbandonedCartCountAggregateOutputType = {
    id: number
    customerName: number
    customerEmail: number
    cartItems: number
    cartValue: number
    abandonedAt: number
    status: number
    campaignId: number
    createdAt: number
    _all: number
  }


  export type AbandonedCartAvgAggregateInputType = {
    cartValue?: true
  }

  export type AbandonedCartSumAggregateInputType = {
    cartValue?: true
  }

  export type AbandonedCartMinAggregateInputType = {
    id?: true
    customerName?: true
    customerEmail?: true
    cartValue?: true
    abandonedAt?: true
    status?: true
    campaignId?: true
    createdAt?: true
  }

  export type AbandonedCartMaxAggregateInputType = {
    id?: true
    customerName?: true
    customerEmail?: true
    cartValue?: true
    abandonedAt?: true
    status?: true
    campaignId?: true
    createdAt?: true
  }

  export type AbandonedCartCountAggregateInputType = {
    id?: true
    customerName?: true
    customerEmail?: true
    cartItems?: true
    cartValue?: true
    abandonedAt?: true
    status?: true
    campaignId?: true
    createdAt?: true
    _all?: true
  }

  export type AbandonedCartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbandonedCart to aggregate.
     */
    where?: AbandonedCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbandonedCarts to fetch.
     */
    orderBy?: AbandonedCartOrderByWithRelationInput | AbandonedCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbandonedCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbandonedCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbandonedCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AbandonedCarts
    **/
    _count?: true | AbandonedCartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbandonedCartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbandonedCartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbandonedCartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbandonedCartMaxAggregateInputType
  }

  export type GetAbandonedCartAggregateType<T extends AbandonedCartAggregateArgs> = {
        [P in keyof T & keyof AggregateAbandonedCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbandonedCart[P]>
      : GetScalarType<T[P], AggregateAbandonedCart[P]>
  }




  export type AbandonedCartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbandonedCartWhereInput
    orderBy?: AbandonedCartOrderByWithAggregationInput | AbandonedCartOrderByWithAggregationInput[]
    by: AbandonedCartScalarFieldEnum[] | AbandonedCartScalarFieldEnum
    having?: AbandonedCartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbandonedCartCountAggregateInputType | true
    _avg?: AbandonedCartAvgAggregateInputType
    _sum?: AbandonedCartSumAggregateInputType
    _min?: AbandonedCartMinAggregateInputType
    _max?: AbandonedCartMaxAggregateInputType
  }

  export type AbandonedCartGroupByOutputType = {
    id: string
    customerName: string | null
    customerEmail: string
    cartItems: JsonValue
    cartValue: number
    abandonedAt: Date
    status: string
    campaignId: string | null
    createdAt: Date
    _count: AbandonedCartCountAggregateOutputType | null
    _avg: AbandonedCartAvgAggregateOutputType | null
    _sum: AbandonedCartSumAggregateOutputType | null
    _min: AbandonedCartMinAggregateOutputType | null
    _max: AbandonedCartMaxAggregateOutputType | null
  }

  type GetAbandonedCartGroupByPayload<T extends AbandonedCartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbandonedCartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbandonedCartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbandonedCartGroupByOutputType[P]>
            : GetScalarType<T[P], AbandonedCartGroupByOutputType[P]>
        }
      >
    >


  export type AbandonedCartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    customerEmail?: boolean
    cartItems?: boolean
    cartValue?: boolean
    abandonedAt?: boolean
    status?: boolean
    campaignId?: boolean
    createdAt?: boolean
    campaign?: boolean | AbandonedCart$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["abandonedCart"]>

  export type AbandonedCartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    customerEmail?: boolean
    cartItems?: boolean
    cartValue?: boolean
    abandonedAt?: boolean
    status?: boolean
    campaignId?: boolean
    createdAt?: boolean
    campaign?: boolean | AbandonedCart$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["abandonedCart"]>

  export type AbandonedCartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    customerEmail?: boolean
    cartItems?: boolean
    cartValue?: boolean
    abandonedAt?: boolean
    status?: boolean
    campaignId?: boolean
    createdAt?: boolean
    campaign?: boolean | AbandonedCart$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["abandonedCart"]>

  export type AbandonedCartSelectScalar = {
    id?: boolean
    customerName?: boolean
    customerEmail?: boolean
    cartItems?: boolean
    cartValue?: boolean
    abandonedAt?: boolean
    status?: boolean
    campaignId?: boolean
    createdAt?: boolean
  }

  export type AbandonedCartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerName" | "customerEmail" | "cartItems" | "cartValue" | "abandonedAt" | "status" | "campaignId" | "createdAt", ExtArgs["result"]["abandonedCart"]>
  export type AbandonedCartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | AbandonedCart$campaignArgs<ExtArgs>
  }
  export type AbandonedCartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | AbandonedCart$campaignArgs<ExtArgs>
  }
  export type AbandonedCartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | AbandonedCart$campaignArgs<ExtArgs>
  }

  export type $AbandonedCartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AbandonedCart"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerName: string | null
      customerEmail: string
      cartItems: Prisma.JsonValue
      cartValue: number
      abandonedAt: Date
      status: string
      campaignId: string | null
      createdAt: Date
    }, ExtArgs["result"]["abandonedCart"]>
    composites: {}
  }

  type AbandonedCartGetPayload<S extends boolean | null | undefined | AbandonedCartDefaultArgs> = $Result.GetResult<Prisma.$AbandonedCartPayload, S>

  type AbandonedCartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbandonedCartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbandonedCartCountAggregateInputType | true
    }

  export interface AbandonedCartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AbandonedCart'], meta: { name: 'AbandonedCart' } }
    /**
     * Find zero or one AbandonedCart that matches the filter.
     * @param {AbandonedCartFindUniqueArgs} args - Arguments to find a AbandonedCart
     * @example
     * // Get one AbandonedCart
     * const abandonedCart = await prisma.abandonedCart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbandonedCartFindUniqueArgs>(args: SelectSubset<T, AbandonedCartFindUniqueArgs<ExtArgs>>): Prisma__AbandonedCartClient<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AbandonedCart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbandonedCartFindUniqueOrThrowArgs} args - Arguments to find a AbandonedCart
     * @example
     * // Get one AbandonedCart
     * const abandonedCart = await prisma.abandonedCart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbandonedCartFindUniqueOrThrowArgs>(args: SelectSubset<T, AbandonedCartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbandonedCartClient<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbandonedCart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbandonedCartFindFirstArgs} args - Arguments to find a AbandonedCart
     * @example
     * // Get one AbandonedCart
     * const abandonedCart = await prisma.abandonedCart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbandonedCartFindFirstArgs>(args?: SelectSubset<T, AbandonedCartFindFirstArgs<ExtArgs>>): Prisma__AbandonedCartClient<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbandonedCart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbandonedCartFindFirstOrThrowArgs} args - Arguments to find a AbandonedCart
     * @example
     * // Get one AbandonedCart
     * const abandonedCart = await prisma.abandonedCart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbandonedCartFindFirstOrThrowArgs>(args?: SelectSubset<T, AbandonedCartFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbandonedCartClient<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AbandonedCarts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbandonedCartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AbandonedCarts
     * const abandonedCarts = await prisma.abandonedCart.findMany()
     * 
     * // Get first 10 AbandonedCarts
     * const abandonedCarts = await prisma.abandonedCart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const abandonedCartWithIdOnly = await prisma.abandonedCart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbandonedCartFindManyArgs>(args?: SelectSubset<T, AbandonedCartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AbandonedCart.
     * @param {AbandonedCartCreateArgs} args - Arguments to create a AbandonedCart.
     * @example
     * // Create one AbandonedCart
     * const AbandonedCart = await prisma.abandonedCart.create({
     *   data: {
     *     // ... data to create a AbandonedCart
     *   }
     * })
     * 
     */
    create<T extends AbandonedCartCreateArgs>(args: SelectSubset<T, AbandonedCartCreateArgs<ExtArgs>>): Prisma__AbandonedCartClient<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AbandonedCarts.
     * @param {AbandonedCartCreateManyArgs} args - Arguments to create many AbandonedCarts.
     * @example
     * // Create many AbandonedCarts
     * const abandonedCart = await prisma.abandonedCart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbandonedCartCreateManyArgs>(args?: SelectSubset<T, AbandonedCartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AbandonedCarts and returns the data saved in the database.
     * @param {AbandonedCartCreateManyAndReturnArgs} args - Arguments to create many AbandonedCarts.
     * @example
     * // Create many AbandonedCarts
     * const abandonedCart = await prisma.abandonedCart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AbandonedCarts and only return the `id`
     * const abandonedCartWithIdOnly = await prisma.abandonedCart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbandonedCartCreateManyAndReturnArgs>(args?: SelectSubset<T, AbandonedCartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AbandonedCart.
     * @param {AbandonedCartDeleteArgs} args - Arguments to delete one AbandonedCart.
     * @example
     * // Delete one AbandonedCart
     * const AbandonedCart = await prisma.abandonedCart.delete({
     *   where: {
     *     // ... filter to delete one AbandonedCart
     *   }
     * })
     * 
     */
    delete<T extends AbandonedCartDeleteArgs>(args: SelectSubset<T, AbandonedCartDeleteArgs<ExtArgs>>): Prisma__AbandonedCartClient<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AbandonedCart.
     * @param {AbandonedCartUpdateArgs} args - Arguments to update one AbandonedCart.
     * @example
     * // Update one AbandonedCart
     * const abandonedCart = await prisma.abandonedCart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbandonedCartUpdateArgs>(args: SelectSubset<T, AbandonedCartUpdateArgs<ExtArgs>>): Prisma__AbandonedCartClient<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AbandonedCarts.
     * @param {AbandonedCartDeleteManyArgs} args - Arguments to filter AbandonedCarts to delete.
     * @example
     * // Delete a few AbandonedCarts
     * const { count } = await prisma.abandonedCart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbandonedCartDeleteManyArgs>(args?: SelectSubset<T, AbandonedCartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbandonedCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbandonedCartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AbandonedCarts
     * const abandonedCart = await prisma.abandonedCart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbandonedCartUpdateManyArgs>(args: SelectSubset<T, AbandonedCartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbandonedCarts and returns the data updated in the database.
     * @param {AbandonedCartUpdateManyAndReturnArgs} args - Arguments to update many AbandonedCarts.
     * @example
     * // Update many AbandonedCarts
     * const abandonedCart = await prisma.abandonedCart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AbandonedCarts and only return the `id`
     * const abandonedCartWithIdOnly = await prisma.abandonedCart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AbandonedCartUpdateManyAndReturnArgs>(args: SelectSubset<T, AbandonedCartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AbandonedCart.
     * @param {AbandonedCartUpsertArgs} args - Arguments to update or create a AbandonedCart.
     * @example
     * // Update or create a AbandonedCart
     * const abandonedCart = await prisma.abandonedCart.upsert({
     *   create: {
     *     // ... data to create a AbandonedCart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AbandonedCart we want to update
     *   }
     * })
     */
    upsert<T extends AbandonedCartUpsertArgs>(args: SelectSubset<T, AbandonedCartUpsertArgs<ExtArgs>>): Prisma__AbandonedCartClient<$Result.GetResult<Prisma.$AbandonedCartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AbandonedCarts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbandonedCartCountArgs} args - Arguments to filter AbandonedCarts to count.
     * @example
     * // Count the number of AbandonedCarts
     * const count = await prisma.abandonedCart.count({
     *   where: {
     *     // ... the filter for the AbandonedCarts we want to count
     *   }
     * })
    **/
    count<T extends AbandonedCartCountArgs>(
      args?: Subset<T, AbandonedCartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbandonedCartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AbandonedCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbandonedCartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbandonedCartAggregateArgs>(args: Subset<T, AbandonedCartAggregateArgs>): Prisma.PrismaPromise<GetAbandonedCartAggregateType<T>>

    /**
     * Group by AbandonedCart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbandonedCartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbandonedCartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbandonedCartGroupByArgs['orderBy'] }
        : { orderBy?: AbandonedCartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbandonedCartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbandonedCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AbandonedCart model
   */
  readonly fields: AbandonedCartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AbandonedCart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbandonedCartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends AbandonedCart$campaignArgs<ExtArgs> = {}>(args?: Subset<T, AbandonedCart$campaignArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AbandonedCart model
   */
  interface AbandonedCartFieldRefs {
    readonly id: FieldRef<"AbandonedCart", 'String'>
    readonly customerName: FieldRef<"AbandonedCart", 'String'>
    readonly customerEmail: FieldRef<"AbandonedCart", 'String'>
    readonly cartItems: FieldRef<"AbandonedCart", 'Json'>
    readonly cartValue: FieldRef<"AbandonedCart", 'Float'>
    readonly abandonedAt: FieldRef<"AbandonedCart", 'DateTime'>
    readonly status: FieldRef<"AbandonedCart", 'String'>
    readonly campaignId: FieldRef<"AbandonedCart", 'String'>
    readonly createdAt: FieldRef<"AbandonedCart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AbandonedCart findUnique
   */
  export type AbandonedCartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartInclude<ExtArgs> | null
    /**
     * Filter, which AbandonedCart to fetch.
     */
    where: AbandonedCartWhereUniqueInput
  }

  /**
   * AbandonedCart findUniqueOrThrow
   */
  export type AbandonedCartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartInclude<ExtArgs> | null
    /**
     * Filter, which AbandonedCart to fetch.
     */
    where: AbandonedCartWhereUniqueInput
  }

  /**
   * AbandonedCart findFirst
   */
  export type AbandonedCartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartInclude<ExtArgs> | null
    /**
     * Filter, which AbandonedCart to fetch.
     */
    where?: AbandonedCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbandonedCarts to fetch.
     */
    orderBy?: AbandonedCartOrderByWithRelationInput | AbandonedCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbandonedCarts.
     */
    cursor?: AbandonedCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbandonedCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbandonedCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbandonedCarts.
     */
    distinct?: AbandonedCartScalarFieldEnum | AbandonedCartScalarFieldEnum[]
  }

  /**
   * AbandonedCart findFirstOrThrow
   */
  export type AbandonedCartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartInclude<ExtArgs> | null
    /**
     * Filter, which AbandonedCart to fetch.
     */
    where?: AbandonedCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbandonedCarts to fetch.
     */
    orderBy?: AbandonedCartOrderByWithRelationInput | AbandonedCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbandonedCarts.
     */
    cursor?: AbandonedCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbandonedCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbandonedCarts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbandonedCarts.
     */
    distinct?: AbandonedCartScalarFieldEnum | AbandonedCartScalarFieldEnum[]
  }

  /**
   * AbandonedCart findMany
   */
  export type AbandonedCartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartInclude<ExtArgs> | null
    /**
     * Filter, which AbandonedCarts to fetch.
     */
    where?: AbandonedCartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbandonedCarts to fetch.
     */
    orderBy?: AbandonedCartOrderByWithRelationInput | AbandonedCartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AbandonedCarts.
     */
    cursor?: AbandonedCartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbandonedCarts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbandonedCarts.
     */
    skip?: number
    distinct?: AbandonedCartScalarFieldEnum | AbandonedCartScalarFieldEnum[]
  }

  /**
   * AbandonedCart create
   */
  export type AbandonedCartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartInclude<ExtArgs> | null
    /**
     * The data needed to create a AbandonedCart.
     */
    data: XOR<AbandonedCartCreateInput, AbandonedCartUncheckedCreateInput>
  }

  /**
   * AbandonedCart createMany
   */
  export type AbandonedCartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AbandonedCarts.
     */
    data: AbandonedCartCreateManyInput | AbandonedCartCreateManyInput[]
  }

  /**
   * AbandonedCart createManyAndReturn
   */
  export type AbandonedCartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * The data used to create many AbandonedCarts.
     */
    data: AbandonedCartCreateManyInput | AbandonedCartCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbandonedCart update
   */
  export type AbandonedCartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartInclude<ExtArgs> | null
    /**
     * The data needed to update a AbandonedCart.
     */
    data: XOR<AbandonedCartUpdateInput, AbandonedCartUncheckedUpdateInput>
    /**
     * Choose, which AbandonedCart to update.
     */
    where: AbandonedCartWhereUniqueInput
  }

  /**
   * AbandonedCart updateMany
   */
  export type AbandonedCartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AbandonedCarts.
     */
    data: XOR<AbandonedCartUpdateManyMutationInput, AbandonedCartUncheckedUpdateManyInput>
    /**
     * Filter which AbandonedCarts to update
     */
    where?: AbandonedCartWhereInput
    /**
     * Limit how many AbandonedCarts to update.
     */
    limit?: number
  }

  /**
   * AbandonedCart updateManyAndReturn
   */
  export type AbandonedCartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * The data used to update AbandonedCarts.
     */
    data: XOR<AbandonedCartUpdateManyMutationInput, AbandonedCartUncheckedUpdateManyInput>
    /**
     * Filter which AbandonedCarts to update
     */
    where?: AbandonedCartWhereInput
    /**
     * Limit how many AbandonedCarts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbandonedCart upsert
   */
  export type AbandonedCartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartInclude<ExtArgs> | null
    /**
     * The filter to search for the AbandonedCart to update in case it exists.
     */
    where: AbandonedCartWhereUniqueInput
    /**
     * In case the AbandonedCart found by the `where` argument doesn't exist, create a new AbandonedCart with this data.
     */
    create: XOR<AbandonedCartCreateInput, AbandonedCartUncheckedCreateInput>
    /**
     * In case the AbandonedCart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbandonedCartUpdateInput, AbandonedCartUncheckedUpdateInput>
  }

  /**
   * AbandonedCart delete
   */
  export type AbandonedCartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartInclude<ExtArgs> | null
    /**
     * Filter which AbandonedCart to delete.
     */
    where: AbandonedCartWhereUniqueInput
  }

  /**
   * AbandonedCart deleteMany
   */
  export type AbandonedCartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbandonedCarts to delete
     */
    where?: AbandonedCartWhereInput
    /**
     * Limit how many AbandonedCarts to delete.
     */
    limit?: number
  }

  /**
   * AbandonedCart.campaign
   */
  export type AbandonedCart$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
  }

  /**
   * AbandonedCart without action
   */
  export type AbandonedCartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbandonedCart
     */
    select?: AbandonedCartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbandonedCart
     */
    omit?: AbandonedCartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbandonedCartInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LicenseScalarFieldEnum: {
    id: 'id',
    licenseKey: 'licenseKey',
    storeUrl: 'storeUrl',
    platform: 'platform',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    triggerDelay: 'triggerDelay',
    status: 'status',
    subject: 'subject',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const AbandonedCartScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    customerEmail: 'customerEmail',
    cartItems: 'cartItems',
    cartValue: 'cartValue',
    abandonedAt: 'abandonedAt',
    status: 'status',
    campaignId: 'campaignId',
    createdAt: 'createdAt'
  };

  export type AbandonedCartScalarFieldEnum = (typeof AbandonedCartScalarFieldEnum)[keyof typeof AbandonedCartScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type LicenseWhereInput = {
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    id?: StringFilter<"License"> | string
    licenseKey?: StringFilter<"License"> | string
    storeUrl?: StringFilter<"License"> | string
    platform?: StringFilter<"License"> | string
    status?: StringFilter<"License"> | string
    expiresAt?: DateTimeFilter<"License"> | Date | string
    createdAt?: DateTimeFilter<"License"> | Date | string
  }

  export type LicenseOrderByWithRelationInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    storeUrl?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseKey?: string
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    storeUrl?: StringFilter<"License"> | string
    platform?: StringFilter<"License"> | string
    status?: StringFilter<"License"> | string
    expiresAt?: DateTimeFilter<"License"> | Date | string
    createdAt?: DateTimeFilter<"License"> | Date | string
  }, "id" | "licenseKey">

  export type LicenseOrderByWithAggregationInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    storeUrl?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: LicenseCountOrderByAggregateInput
    _max?: LicenseMaxOrderByAggregateInput
    _min?: LicenseMinOrderByAggregateInput
  }

  export type LicenseScalarWhereWithAggregatesInput = {
    AND?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    OR?: LicenseScalarWhereWithAggregatesInput[]
    NOT?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"License"> | string
    licenseKey?: StringWithAggregatesFilter<"License"> | string
    storeUrl?: StringWithAggregatesFilter<"License"> | string
    platform?: StringWithAggregatesFilter<"License"> | string
    status?: StringWithAggregatesFilter<"License"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    type?: StringFilter<"Campaign"> | string
    triggerDelay?: IntFilter<"Campaign"> | number
    status?: StringFilter<"Campaign"> | string
    subject?: StringNullableFilter<"Campaign"> | string | null
    content?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    abandonedCarts?: AbandonedCartListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    triggerDelay?: SortOrder
    status?: SortOrder
    subject?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    abandonedCarts?: AbandonedCartOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    type?: StringFilter<"Campaign"> | string
    triggerDelay?: IntFilter<"Campaign"> | number
    status?: StringFilter<"Campaign"> | string
    subject?: StringNullableFilter<"Campaign"> | string | null
    content?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    abandonedCarts?: AbandonedCartListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    triggerDelay?: SortOrder
    status?: SortOrder
    subject?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    type?: StringWithAggregatesFilter<"Campaign"> | string
    triggerDelay?: IntWithAggregatesFilter<"Campaign"> | number
    status?: StringWithAggregatesFilter<"Campaign"> | string
    subject?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    content?: StringWithAggregatesFilter<"Campaign"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type AbandonedCartWhereInput = {
    AND?: AbandonedCartWhereInput | AbandonedCartWhereInput[]
    OR?: AbandonedCartWhereInput[]
    NOT?: AbandonedCartWhereInput | AbandonedCartWhereInput[]
    id?: StringFilter<"AbandonedCart"> | string
    customerName?: StringNullableFilter<"AbandonedCart"> | string | null
    customerEmail?: StringFilter<"AbandonedCart"> | string
    cartItems?: JsonFilter<"AbandonedCart">
    cartValue?: FloatFilter<"AbandonedCart"> | number
    abandonedAt?: DateTimeFilter<"AbandonedCart"> | Date | string
    status?: StringFilter<"AbandonedCart"> | string
    campaignId?: StringNullableFilter<"AbandonedCart"> | string | null
    createdAt?: DateTimeFilter<"AbandonedCart"> | Date | string
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
  }

  export type AbandonedCartOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrderInput | SortOrder
    customerEmail?: SortOrder
    cartItems?: SortOrder
    cartValue?: SortOrder
    abandonedAt?: SortOrder
    status?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type AbandonedCartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AbandonedCartWhereInput | AbandonedCartWhereInput[]
    OR?: AbandonedCartWhereInput[]
    NOT?: AbandonedCartWhereInput | AbandonedCartWhereInput[]
    customerName?: StringNullableFilter<"AbandonedCart"> | string | null
    customerEmail?: StringFilter<"AbandonedCart"> | string
    cartItems?: JsonFilter<"AbandonedCart">
    cartValue?: FloatFilter<"AbandonedCart"> | number
    abandonedAt?: DateTimeFilter<"AbandonedCart"> | Date | string
    status?: StringFilter<"AbandonedCart"> | string
    campaignId?: StringNullableFilter<"AbandonedCart"> | string | null
    createdAt?: DateTimeFilter<"AbandonedCart"> | Date | string
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
  }, "id">

  export type AbandonedCartOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrderInput | SortOrder
    customerEmail?: SortOrder
    cartItems?: SortOrder
    cartValue?: SortOrder
    abandonedAt?: SortOrder
    status?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AbandonedCartCountOrderByAggregateInput
    _avg?: AbandonedCartAvgOrderByAggregateInput
    _max?: AbandonedCartMaxOrderByAggregateInput
    _min?: AbandonedCartMinOrderByAggregateInput
    _sum?: AbandonedCartSumOrderByAggregateInput
  }

  export type AbandonedCartScalarWhereWithAggregatesInput = {
    AND?: AbandonedCartScalarWhereWithAggregatesInput | AbandonedCartScalarWhereWithAggregatesInput[]
    OR?: AbandonedCartScalarWhereWithAggregatesInput[]
    NOT?: AbandonedCartScalarWhereWithAggregatesInput | AbandonedCartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AbandonedCart"> | string
    customerName?: StringNullableWithAggregatesFilter<"AbandonedCart"> | string | null
    customerEmail?: StringWithAggregatesFilter<"AbandonedCart"> | string
    cartItems?: JsonWithAggregatesFilter<"AbandonedCart">
    cartValue?: FloatWithAggregatesFilter<"AbandonedCart"> | number
    abandonedAt?: DateTimeWithAggregatesFilter<"AbandonedCart"> | Date | string
    status?: StringWithAggregatesFilter<"AbandonedCart"> | string
    campaignId?: StringNullableWithAggregatesFilter<"AbandonedCart"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AbandonedCart"> | Date | string
  }

  export type LicenseCreateInput = {
    id?: string
    licenseKey: string
    storeUrl: string
    platform: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LicenseUncheckedCreateInput = {
    id?: string
    licenseKey: string
    storeUrl: string
    platform: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LicenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    storeUrl?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    storeUrl?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateManyInput = {
    id?: string
    licenseKey: string
    storeUrl: string
    platform: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LicenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    storeUrl?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    storeUrl?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    type: string
    triggerDelay: number
    status?: string
    subject?: string | null
    content: string
    createdAt?: Date | string
    abandonedCarts?: AbandonedCartCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    triggerDelay: number
    status?: string
    subject?: string | null
    content: string
    createdAt?: Date | string
    abandonedCarts?: AbandonedCartUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    triggerDelay?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abandonedCarts?: AbandonedCartUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    triggerDelay?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abandonedCarts?: AbandonedCartUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    type: string
    triggerDelay: number
    status?: string
    subject?: string | null
    content: string
    createdAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    triggerDelay?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    triggerDelay?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbandonedCartCreateInput = {
    id?: string
    customerName?: string | null
    customerEmail: string
    cartItems: JsonNullValueInput | InputJsonValue
    cartValue: number
    abandonedAt?: Date | string
    status?: string
    createdAt?: Date | string
    campaign?: CampaignCreateNestedOneWithoutAbandonedCartsInput
  }

  export type AbandonedCartUncheckedCreateInput = {
    id?: string
    customerName?: string | null
    customerEmail: string
    cartItems: JsonNullValueInput | InputJsonValue
    cartValue: number
    abandonedAt?: Date | string
    status?: string
    campaignId?: string | null
    createdAt?: Date | string
  }

  export type AbandonedCartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: StringFieldUpdateOperationsInput | string
    cartItems?: JsonNullValueInput | InputJsonValue
    cartValue?: FloatFieldUpdateOperationsInput | number
    abandonedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneWithoutAbandonedCartsNestedInput
  }

  export type AbandonedCartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: StringFieldUpdateOperationsInput | string
    cartItems?: JsonNullValueInput | InputJsonValue
    cartValue?: FloatFieldUpdateOperationsInput | number
    abandonedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbandonedCartCreateManyInput = {
    id?: string
    customerName?: string | null
    customerEmail: string
    cartItems: JsonNullValueInput | InputJsonValue
    cartValue: number
    abandonedAt?: Date | string
    status?: string
    campaignId?: string | null
    createdAt?: Date | string
  }

  export type AbandonedCartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: StringFieldUpdateOperationsInput | string
    cartItems?: JsonNullValueInput | InputJsonValue
    cartValue?: FloatFieldUpdateOperationsInput | number
    abandonedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbandonedCartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: StringFieldUpdateOperationsInput | string
    cartItems?: JsonNullValueInput | InputJsonValue
    cartValue?: FloatFieldUpdateOperationsInput | number
    abandonedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LicenseCountOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    storeUrl?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    storeUrl?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LicenseMinOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    storeUrl?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AbandonedCartListRelationFilter = {
    every?: AbandonedCartWhereInput
    some?: AbandonedCartWhereInput
    none?: AbandonedCartWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AbandonedCartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    triggerDelay?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    triggerDelay?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    triggerDelay?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    triggerDelay?: SortOrder
    status?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    triggerDelay?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CampaignNullableScalarRelationFilter = {
    is?: CampaignWhereInput | null
    isNot?: CampaignWhereInput | null
  }

  export type AbandonedCartCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    cartItems?: SortOrder
    cartValue?: SortOrder
    abandonedAt?: SortOrder
    status?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
  }

  export type AbandonedCartAvgOrderByAggregateInput = {
    cartValue?: SortOrder
  }

  export type AbandonedCartMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    cartValue?: SortOrder
    abandonedAt?: SortOrder
    status?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
  }

  export type AbandonedCartMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    cartValue?: SortOrder
    abandonedAt?: SortOrder
    status?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
  }

  export type AbandonedCartSumOrderByAggregateInput = {
    cartValue?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AbandonedCartCreateNestedManyWithoutCampaignInput = {
    create?: XOR<AbandonedCartCreateWithoutCampaignInput, AbandonedCartUncheckedCreateWithoutCampaignInput> | AbandonedCartCreateWithoutCampaignInput[] | AbandonedCartUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AbandonedCartCreateOrConnectWithoutCampaignInput | AbandonedCartCreateOrConnectWithoutCampaignInput[]
    createMany?: AbandonedCartCreateManyCampaignInputEnvelope
    connect?: AbandonedCartWhereUniqueInput | AbandonedCartWhereUniqueInput[]
  }

  export type AbandonedCartUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<AbandonedCartCreateWithoutCampaignInput, AbandonedCartUncheckedCreateWithoutCampaignInput> | AbandonedCartCreateWithoutCampaignInput[] | AbandonedCartUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AbandonedCartCreateOrConnectWithoutCampaignInput | AbandonedCartCreateOrConnectWithoutCampaignInput[]
    createMany?: AbandonedCartCreateManyCampaignInputEnvelope
    connect?: AbandonedCartWhereUniqueInput | AbandonedCartWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AbandonedCartUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<AbandonedCartCreateWithoutCampaignInput, AbandonedCartUncheckedCreateWithoutCampaignInput> | AbandonedCartCreateWithoutCampaignInput[] | AbandonedCartUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AbandonedCartCreateOrConnectWithoutCampaignInput | AbandonedCartCreateOrConnectWithoutCampaignInput[]
    upsert?: AbandonedCartUpsertWithWhereUniqueWithoutCampaignInput | AbandonedCartUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: AbandonedCartCreateManyCampaignInputEnvelope
    set?: AbandonedCartWhereUniqueInput | AbandonedCartWhereUniqueInput[]
    disconnect?: AbandonedCartWhereUniqueInput | AbandonedCartWhereUniqueInput[]
    delete?: AbandonedCartWhereUniqueInput | AbandonedCartWhereUniqueInput[]
    connect?: AbandonedCartWhereUniqueInput | AbandonedCartWhereUniqueInput[]
    update?: AbandonedCartUpdateWithWhereUniqueWithoutCampaignInput | AbandonedCartUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: AbandonedCartUpdateManyWithWhereWithoutCampaignInput | AbandonedCartUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: AbandonedCartScalarWhereInput | AbandonedCartScalarWhereInput[]
  }

  export type AbandonedCartUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<AbandonedCartCreateWithoutCampaignInput, AbandonedCartUncheckedCreateWithoutCampaignInput> | AbandonedCartCreateWithoutCampaignInput[] | AbandonedCartUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AbandonedCartCreateOrConnectWithoutCampaignInput | AbandonedCartCreateOrConnectWithoutCampaignInput[]
    upsert?: AbandonedCartUpsertWithWhereUniqueWithoutCampaignInput | AbandonedCartUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: AbandonedCartCreateManyCampaignInputEnvelope
    set?: AbandonedCartWhereUniqueInput | AbandonedCartWhereUniqueInput[]
    disconnect?: AbandonedCartWhereUniqueInput | AbandonedCartWhereUniqueInput[]
    delete?: AbandonedCartWhereUniqueInput | AbandonedCartWhereUniqueInput[]
    connect?: AbandonedCartWhereUniqueInput | AbandonedCartWhereUniqueInput[]
    update?: AbandonedCartUpdateWithWhereUniqueWithoutCampaignInput | AbandonedCartUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: AbandonedCartUpdateManyWithWhereWithoutCampaignInput | AbandonedCartUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: AbandonedCartScalarWhereInput | AbandonedCartScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutAbandonedCartsInput = {
    create?: XOR<CampaignCreateWithoutAbandonedCartsInput, CampaignUncheckedCreateWithoutAbandonedCartsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutAbandonedCartsInput
    connect?: CampaignWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CampaignUpdateOneWithoutAbandonedCartsNestedInput = {
    create?: XOR<CampaignCreateWithoutAbandonedCartsInput, CampaignUncheckedCreateWithoutAbandonedCartsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutAbandonedCartsInput
    upsert?: CampaignUpsertWithoutAbandonedCartsInput
    disconnect?: CampaignWhereInput | boolean
    delete?: CampaignWhereInput | boolean
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutAbandonedCartsInput, CampaignUpdateWithoutAbandonedCartsInput>, CampaignUncheckedUpdateWithoutAbandonedCartsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AbandonedCartCreateWithoutCampaignInput = {
    id?: string
    customerName?: string | null
    customerEmail: string
    cartItems: JsonNullValueInput | InputJsonValue
    cartValue: number
    abandonedAt?: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type AbandonedCartUncheckedCreateWithoutCampaignInput = {
    id?: string
    customerName?: string | null
    customerEmail: string
    cartItems: JsonNullValueInput | InputJsonValue
    cartValue: number
    abandonedAt?: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type AbandonedCartCreateOrConnectWithoutCampaignInput = {
    where: AbandonedCartWhereUniqueInput
    create: XOR<AbandonedCartCreateWithoutCampaignInput, AbandonedCartUncheckedCreateWithoutCampaignInput>
  }

  export type AbandonedCartCreateManyCampaignInputEnvelope = {
    data: AbandonedCartCreateManyCampaignInput | AbandonedCartCreateManyCampaignInput[]
  }

  export type AbandonedCartUpsertWithWhereUniqueWithoutCampaignInput = {
    where: AbandonedCartWhereUniqueInput
    update: XOR<AbandonedCartUpdateWithoutCampaignInput, AbandonedCartUncheckedUpdateWithoutCampaignInput>
    create: XOR<AbandonedCartCreateWithoutCampaignInput, AbandonedCartUncheckedCreateWithoutCampaignInput>
  }

  export type AbandonedCartUpdateWithWhereUniqueWithoutCampaignInput = {
    where: AbandonedCartWhereUniqueInput
    data: XOR<AbandonedCartUpdateWithoutCampaignInput, AbandonedCartUncheckedUpdateWithoutCampaignInput>
  }

  export type AbandonedCartUpdateManyWithWhereWithoutCampaignInput = {
    where: AbandonedCartScalarWhereInput
    data: XOR<AbandonedCartUpdateManyMutationInput, AbandonedCartUncheckedUpdateManyWithoutCampaignInput>
  }

  export type AbandonedCartScalarWhereInput = {
    AND?: AbandonedCartScalarWhereInput | AbandonedCartScalarWhereInput[]
    OR?: AbandonedCartScalarWhereInput[]
    NOT?: AbandonedCartScalarWhereInput | AbandonedCartScalarWhereInput[]
    id?: StringFilter<"AbandonedCart"> | string
    customerName?: StringNullableFilter<"AbandonedCart"> | string | null
    customerEmail?: StringFilter<"AbandonedCart"> | string
    cartItems?: JsonFilter<"AbandonedCart">
    cartValue?: FloatFilter<"AbandonedCart"> | number
    abandonedAt?: DateTimeFilter<"AbandonedCart"> | Date | string
    status?: StringFilter<"AbandonedCart"> | string
    campaignId?: StringNullableFilter<"AbandonedCart"> | string | null
    createdAt?: DateTimeFilter<"AbandonedCart"> | Date | string
  }

  export type CampaignCreateWithoutAbandonedCartsInput = {
    id?: string
    name: string
    type: string
    triggerDelay: number
    status?: string
    subject?: string | null
    content: string
    createdAt?: Date | string
  }

  export type CampaignUncheckedCreateWithoutAbandonedCartsInput = {
    id?: string
    name: string
    type: string
    triggerDelay: number
    status?: string
    subject?: string | null
    content: string
    createdAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutAbandonedCartsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutAbandonedCartsInput, CampaignUncheckedCreateWithoutAbandonedCartsInput>
  }

  export type CampaignUpsertWithoutAbandonedCartsInput = {
    update: XOR<CampaignUpdateWithoutAbandonedCartsInput, CampaignUncheckedUpdateWithoutAbandonedCartsInput>
    create: XOR<CampaignCreateWithoutAbandonedCartsInput, CampaignUncheckedCreateWithoutAbandonedCartsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutAbandonedCartsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutAbandonedCartsInput, CampaignUncheckedUpdateWithoutAbandonedCartsInput>
  }

  export type CampaignUpdateWithoutAbandonedCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    triggerDelay?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateWithoutAbandonedCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    triggerDelay?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbandonedCartCreateManyCampaignInput = {
    id?: string
    customerName?: string | null
    customerEmail: string
    cartItems: JsonNullValueInput | InputJsonValue
    cartValue: number
    abandonedAt?: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type AbandonedCartUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: StringFieldUpdateOperationsInput | string
    cartItems?: JsonNullValueInput | InputJsonValue
    cartValue?: FloatFieldUpdateOperationsInput | number
    abandonedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbandonedCartUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: StringFieldUpdateOperationsInput | string
    cartItems?: JsonNullValueInput | InputJsonValue
    cartValue?: FloatFieldUpdateOperationsInput | number
    abandonedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbandonedCartUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: StringFieldUpdateOperationsInput | string
    cartItems?: JsonNullValueInput | InputJsonValue
    cartValue?: FloatFieldUpdateOperationsInput | number
    abandonedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}