
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model first_contact_lote
 * 
 */
export type first_contact_lote = $Result.DefaultSelection<Prisma.$first_contact_lotePayload>
/**
 * Model interaction_Type
 * 
 */
export type interaction_Type = $Result.DefaultSelection<Prisma.$interaction_TypePayload>
/**
 * Model payment
 * 
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>
/**
 * Model interactions
 * 
 */
export type interactions = $Result.DefaultSelection<Prisma.$interactionsPayload>
/**
 * Model mails
 * 
 */
export type mails = $Result.DefaultSelection<Prisma.$mailsPayload>
/**
 * Model datos_actualizados
 * 
 */
export type datos_actualizados = $Result.DefaultSelection<Prisma.$datos_actualizadosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.first_contact_lote`: Exposes CRUD operations for the **first_contact_lote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more First_contact_lotes
    * const first_contact_lotes = await prisma.first_contact_lote.findMany()
    * ```
    */
  get first_contact_lote(): Prisma.first_contact_loteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interaction_Type`: Exposes CRUD operations for the **interaction_Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interaction_Types
    * const interaction_Types = await prisma.interaction_Type.findMany()
    * ```
    */
  get interaction_Type(): Prisma.interaction_TypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.paymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interactions`: Exposes CRUD operations for the **interactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interactions
    * const interactions = await prisma.interactions.findMany()
    * ```
    */
  get interactions(): Prisma.interactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mails`: Exposes CRUD operations for the **mails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mails
    * const mails = await prisma.mails.findMany()
    * ```
    */
  get mails(): Prisma.mailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datos_actualizados`: Exposes CRUD operations for the **datos_actualizados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datos_actualizados
    * const datos_actualizados = await prisma.datos_actualizados.findMany()
    * ```
    */
  get datos_actualizados(): Prisma.datos_actualizadosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
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
    Users: 'Users',
    first_contact_lote: 'first_contact_lote',
    interaction_Type: 'interaction_Type',
    payment: 'payment',
    interactions: 'interactions',
    mails: 'mails',
    datos_actualizados: 'datos_actualizados'
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
      modelProps: "users" | "first_contact_lote" | "interaction_Type" | "payment" | "interactions" | "mails" | "datos_actualizados"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      first_contact_lote: {
        payload: Prisma.$first_contact_lotePayload<ExtArgs>
        fields: Prisma.first_contact_loteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.first_contact_loteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_contact_lotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.first_contact_loteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_contact_lotePayload>
          }
          findFirst: {
            args: Prisma.first_contact_loteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_contact_lotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.first_contact_loteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_contact_lotePayload>
          }
          findMany: {
            args: Prisma.first_contact_loteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_contact_lotePayload>[]
          }
          create: {
            args: Prisma.first_contact_loteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_contact_lotePayload>
          }
          createMany: {
            args: Prisma.first_contact_loteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.first_contact_loteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_contact_lotePayload>[]
          }
          delete: {
            args: Prisma.first_contact_loteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_contact_lotePayload>
          }
          update: {
            args: Prisma.first_contact_loteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_contact_lotePayload>
          }
          deleteMany: {
            args: Prisma.first_contact_loteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.first_contact_loteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.first_contact_loteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_contact_lotePayload>[]
          }
          upsert: {
            args: Prisma.first_contact_loteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$first_contact_lotePayload>
          }
          aggregate: {
            args: Prisma.First_contact_loteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFirst_contact_lote>
          }
          groupBy: {
            args: Prisma.first_contact_loteGroupByArgs<ExtArgs>
            result: $Utils.Optional<First_contact_loteGroupByOutputType>[]
          }
          count: {
            args: Prisma.first_contact_loteCountArgs<ExtArgs>
            result: $Utils.Optional<First_contact_loteCountAggregateOutputType> | number
          }
        }
      }
      interaction_Type: {
        payload: Prisma.$interaction_TypePayload<ExtArgs>
        fields: Prisma.interaction_TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.interaction_TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interaction_TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.interaction_TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interaction_TypePayload>
          }
          findFirst: {
            args: Prisma.interaction_TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interaction_TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.interaction_TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interaction_TypePayload>
          }
          findMany: {
            args: Prisma.interaction_TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interaction_TypePayload>[]
          }
          create: {
            args: Prisma.interaction_TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interaction_TypePayload>
          }
          createMany: {
            args: Prisma.interaction_TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.interaction_TypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interaction_TypePayload>[]
          }
          delete: {
            args: Prisma.interaction_TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interaction_TypePayload>
          }
          update: {
            args: Prisma.interaction_TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interaction_TypePayload>
          }
          deleteMany: {
            args: Prisma.interaction_TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.interaction_TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.interaction_TypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interaction_TypePayload>[]
          }
          upsert: {
            args: Prisma.interaction_TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interaction_TypePayload>
          }
          aggregate: {
            args: Prisma.Interaction_TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteraction_Type>
          }
          groupBy: {
            args: Prisma.interaction_TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Interaction_TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.interaction_TypeCountArgs<ExtArgs>
            result: $Utils.Optional<Interaction_TypeCountAggregateOutputType> | number
          }
        }
      }
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>
        fields: Prisma.paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      interactions: {
        payload: Prisma.$interactionsPayload<ExtArgs>
        fields: Prisma.interactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.interactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.interactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interactionsPayload>
          }
          findFirst: {
            args: Prisma.interactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.interactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interactionsPayload>
          }
          findMany: {
            args: Prisma.interactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interactionsPayload>[]
          }
          create: {
            args: Prisma.interactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interactionsPayload>
          }
          createMany: {
            args: Prisma.interactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.interactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interactionsPayload>[]
          }
          delete: {
            args: Prisma.interactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interactionsPayload>
          }
          update: {
            args: Prisma.interactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interactionsPayload>
          }
          deleteMany: {
            args: Prisma.interactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.interactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.interactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interactionsPayload>[]
          }
          upsert: {
            args: Prisma.interactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$interactionsPayload>
          }
          aggregate: {
            args: Prisma.InteractionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteractions>
          }
          groupBy: {
            args: Prisma.interactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InteractionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.interactionsCountArgs<ExtArgs>
            result: $Utils.Optional<InteractionsCountAggregateOutputType> | number
          }
        }
      }
      mails: {
        payload: Prisma.$mailsPayload<ExtArgs>
        fields: Prisma.mailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          findFirst: {
            args: Prisma.mailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          findMany: {
            args: Prisma.mailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>[]
          }
          create: {
            args: Prisma.mailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          createMany: {
            args: Prisma.mailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>[]
          }
          delete: {
            args: Prisma.mailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          update: {
            args: Prisma.mailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          deleteMany: {
            args: Prisma.mailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>[]
          }
          upsert: {
            args: Prisma.mailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mailsPayload>
          }
          aggregate: {
            args: Prisma.MailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMails>
          }
          groupBy: {
            args: Prisma.mailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.mailsCountArgs<ExtArgs>
            result: $Utils.Optional<MailsCountAggregateOutputType> | number
          }
        }
      }
      datos_actualizados: {
        payload: Prisma.$datos_actualizadosPayload<ExtArgs>
        fields: Prisma.datos_actualizadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.datos_actualizadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_actualizadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.datos_actualizadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_actualizadosPayload>
          }
          findFirst: {
            args: Prisma.datos_actualizadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_actualizadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.datos_actualizadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_actualizadosPayload>
          }
          findMany: {
            args: Prisma.datos_actualizadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_actualizadosPayload>[]
          }
          create: {
            args: Prisma.datos_actualizadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_actualizadosPayload>
          }
          createMany: {
            args: Prisma.datos_actualizadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.datos_actualizadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_actualizadosPayload>[]
          }
          delete: {
            args: Prisma.datos_actualizadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_actualizadosPayload>
          }
          update: {
            args: Prisma.datos_actualizadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_actualizadosPayload>
          }
          deleteMany: {
            args: Prisma.datos_actualizadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.datos_actualizadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.datos_actualizadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_actualizadosPayload>[]
          }
          upsert: {
            args: Prisma.datos_actualizadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_actualizadosPayload>
          }
          aggregate: {
            args: Prisma.Datos_actualizadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatos_actualizados>
          }
          groupBy: {
            args: Prisma.datos_actualizadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Datos_actualizadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.datos_actualizadosCountArgs<ExtArgs>
            result: $Utils.Optional<Datos_actualizadosCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    users?: UsersOmit
    first_contact_lote?: first_contact_loteOmit
    interaction_Type?: interaction_TypeOmit
    payment?: paymentOmit
    interactions?: interactionsOmit
    mails?: mailsOmit
    datos_actualizados?: datos_actualizadosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    first_contact_lote: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    first_contact_lote?: boolean | UsersCountOutputTypeCountFirst_contact_loteArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFirst_contact_loteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: first_contact_loteWhereInput
  }


  /**
   * Count Type Interaction_TypeCountOutputType
   */

  export type Interaction_TypeCountOutputType = {
    interactions: number
  }

  export type Interaction_TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactions?: boolean | Interaction_TypeCountOutputTypeCountInteractionsArgs
  }

  // Custom InputTypes
  /**
   * Interaction_TypeCountOutputType without action
   */
  export type Interaction_TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction_TypeCountOutputType
     */
    select?: Interaction_TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Interaction_TypeCountOutputType without action
   */
  export type Interaction_TypeCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: interactionsWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    interaction: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interaction?: boolean | PaymentCountOutputTypeCountInteractionArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountInteractionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: interactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    first_contact_lote?: boolean | Users$first_contact_loteArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    first_contact_lote?: boolean | Users$first_contact_loteArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      first_contact_lote: Prisma.$first_contact_lotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    first_contact_lote<T extends Users$first_contact_loteArgs<ExtArgs> = {}>(args?: Subset<T, Users$first_contact_loteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.first_contact_lote
   */
  export type Users$first_contact_loteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteInclude<ExtArgs> | null
    where?: first_contact_loteWhereInput
    orderBy?: first_contact_loteOrderByWithRelationInput | first_contact_loteOrderByWithRelationInput[]
    cursor?: first_contact_loteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: First_contact_loteScalarFieldEnum | First_contact_loteScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model first_contact_lote
   */

  export type AggregateFirst_contact_lote = {
    _count: First_contact_loteCountAggregateOutputType | null
    _avg: First_contact_loteAvgAggregateOutputType | null
    _sum: First_contact_loteSumAggregateOutputType | null
    _min: First_contact_loteMinAggregateOutputType | null
    _max: First_contact_loteMaxAggregateOutputType | null
  }

  export type First_contact_loteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    PaymentId: number | null
    cuotasIniciales: number | null
  }

  export type First_contact_loteSumAggregateOutputType = {
    id: number | null
    userId: number | null
    PaymentId: number | null
    cuotasIniciales: number | null
  }

  export type First_contact_loteMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    accion: string | null
    contactAvailable: boolean | null
    contact: boolean | null
    contact_createdAt: Date | null
    response: boolean | null
    response_createdAt: Date | null
    contactCall: boolean | null
    contactCall_createdAt: Date | null
    responseCall: boolean | null
    responseCall_createdAt: Date | null
    PromisePayment: boolean | null
    Payment: boolean | null
    PaymentId: number | null
    PromiseNonPayment: boolean | null
    note: string | null
    caseStatus: boolean | null
    cuotasIniciales: number | null
  }

  export type First_contact_loteMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    accion: string | null
    contactAvailable: boolean | null
    contact: boolean | null
    contact_createdAt: Date | null
    response: boolean | null
    response_createdAt: Date | null
    contactCall: boolean | null
    contactCall_createdAt: Date | null
    responseCall: boolean | null
    responseCall_createdAt: Date | null
    PromisePayment: boolean | null
    Payment: boolean | null
    PaymentId: number | null
    PromiseNonPayment: boolean | null
    note: string | null
    caseStatus: boolean | null
    cuotasIniciales: number | null
  }

  export type First_contact_loteCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    accion: number
    contactAvailable: number
    contact: number
    contact_createdAt: number
    response: number
    response_createdAt: number
    contactCall: number
    contactCall_createdAt: number
    responseCall: number
    responseCall_createdAt: number
    PromisePayment: number
    Payment: number
    PaymentId: number
    PromiseNonPayment: number
    note: number
    caseStatus: number
    cuotasIniciales: number
    _all: number
  }


  export type First_contact_loteAvgAggregateInputType = {
    id?: true
    userId?: true
    PaymentId?: true
    cuotasIniciales?: true
  }

  export type First_contact_loteSumAggregateInputType = {
    id?: true
    userId?: true
    PaymentId?: true
    cuotasIniciales?: true
  }

  export type First_contact_loteMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    accion?: true
    contactAvailable?: true
    contact?: true
    contact_createdAt?: true
    response?: true
    response_createdAt?: true
    contactCall?: true
    contactCall_createdAt?: true
    responseCall?: true
    responseCall_createdAt?: true
    PromisePayment?: true
    Payment?: true
    PaymentId?: true
    PromiseNonPayment?: true
    note?: true
    caseStatus?: true
    cuotasIniciales?: true
  }

  export type First_contact_loteMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    accion?: true
    contactAvailable?: true
    contact?: true
    contact_createdAt?: true
    response?: true
    response_createdAt?: true
    contactCall?: true
    contactCall_createdAt?: true
    responseCall?: true
    responseCall_createdAt?: true
    PromisePayment?: true
    Payment?: true
    PaymentId?: true
    PromiseNonPayment?: true
    note?: true
    caseStatus?: true
    cuotasIniciales?: true
  }

  export type First_contact_loteCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    accion?: true
    contactAvailable?: true
    contact?: true
    contact_createdAt?: true
    response?: true
    response_createdAt?: true
    contactCall?: true
    contactCall_createdAt?: true
    responseCall?: true
    responseCall_createdAt?: true
    PromisePayment?: true
    Payment?: true
    PaymentId?: true
    PromiseNonPayment?: true
    note?: true
    caseStatus?: true
    cuotasIniciales?: true
    _all?: true
  }

  export type First_contact_loteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which first_contact_lote to aggregate.
     */
    where?: first_contact_loteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of first_contact_lotes to fetch.
     */
    orderBy?: first_contact_loteOrderByWithRelationInput | first_contact_loteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: first_contact_loteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` first_contact_lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` first_contact_lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned first_contact_lotes
    **/
    _count?: true | First_contact_loteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: First_contact_loteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: First_contact_loteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: First_contact_loteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: First_contact_loteMaxAggregateInputType
  }

  export type GetFirst_contact_loteAggregateType<T extends First_contact_loteAggregateArgs> = {
        [P in keyof T & keyof AggregateFirst_contact_lote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFirst_contact_lote[P]>
      : GetScalarType<T[P], AggregateFirst_contact_lote[P]>
  }




  export type first_contact_loteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: first_contact_loteWhereInput
    orderBy?: first_contact_loteOrderByWithAggregationInput | first_contact_loteOrderByWithAggregationInput[]
    by: First_contact_loteScalarFieldEnum[] | First_contact_loteScalarFieldEnum
    having?: first_contact_loteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: First_contact_loteCountAggregateInputType | true
    _avg?: First_contact_loteAvgAggregateInputType
    _sum?: First_contact_loteSumAggregateInputType
    _min?: First_contact_loteMinAggregateInputType
    _max?: First_contact_loteMaxAggregateInputType
  }

  export type First_contact_loteGroupByOutputType = {
    id: number
    createdAt: Date
    userId: number
    accion: string
    contactAvailable: boolean
    contact: boolean
    contact_createdAt: Date | null
    response: boolean
    response_createdAt: Date | null
    contactCall: boolean
    contactCall_createdAt: Date | null
    responseCall: boolean
    responseCall_createdAt: Date | null
    PromisePayment: boolean
    Payment: boolean
    PaymentId: number | null
    PromiseNonPayment: boolean
    note: string | null
    caseStatus: boolean
    cuotasIniciales: number
    _count: First_contact_loteCountAggregateOutputType | null
    _avg: First_contact_loteAvgAggregateOutputType | null
    _sum: First_contact_loteSumAggregateOutputType | null
    _min: First_contact_loteMinAggregateOutputType | null
    _max: First_contact_loteMaxAggregateOutputType | null
  }

  type GetFirst_contact_loteGroupByPayload<T extends first_contact_loteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<First_contact_loteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof First_contact_loteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], First_contact_loteGroupByOutputType[P]>
            : GetScalarType<T[P], First_contact_loteGroupByOutputType[P]>
        }
      >
    >


  export type first_contact_loteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    accion?: boolean
    contactAvailable?: boolean
    contact?: boolean
    contact_createdAt?: boolean
    response?: boolean
    response_createdAt?: boolean
    contactCall?: boolean
    contactCall_createdAt?: boolean
    responseCall?: boolean
    responseCall_createdAt?: boolean
    PromisePayment?: boolean
    Payment?: boolean
    PaymentId?: boolean
    PromiseNonPayment?: boolean
    note?: boolean
    caseStatus?: boolean
    cuotasIniciales?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["first_contact_lote"]>

  export type first_contact_loteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    accion?: boolean
    contactAvailable?: boolean
    contact?: boolean
    contact_createdAt?: boolean
    response?: boolean
    response_createdAt?: boolean
    contactCall?: boolean
    contactCall_createdAt?: boolean
    responseCall?: boolean
    responseCall_createdAt?: boolean
    PromisePayment?: boolean
    Payment?: boolean
    PaymentId?: boolean
    PromiseNonPayment?: boolean
    note?: boolean
    caseStatus?: boolean
    cuotasIniciales?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["first_contact_lote"]>

  export type first_contact_loteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    accion?: boolean
    contactAvailable?: boolean
    contact?: boolean
    contact_createdAt?: boolean
    response?: boolean
    response_createdAt?: boolean
    contactCall?: boolean
    contactCall_createdAt?: boolean
    responseCall?: boolean
    responseCall_createdAt?: boolean
    PromisePayment?: boolean
    Payment?: boolean
    PaymentId?: boolean
    PromiseNonPayment?: boolean
    note?: boolean
    caseStatus?: boolean
    cuotasIniciales?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["first_contact_lote"]>

  export type first_contact_loteSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    accion?: boolean
    contactAvailable?: boolean
    contact?: boolean
    contact_createdAt?: boolean
    response?: boolean
    response_createdAt?: boolean
    contactCall?: boolean
    contactCall_createdAt?: boolean
    responseCall?: boolean
    responseCall_createdAt?: boolean
    PromisePayment?: boolean
    Payment?: boolean
    PaymentId?: boolean
    PromiseNonPayment?: boolean
    note?: boolean
    caseStatus?: boolean
    cuotasIniciales?: boolean
  }

  export type first_contact_loteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "accion" | "contactAvailable" | "contact" | "contact_createdAt" | "response" | "response_createdAt" | "contactCall" | "contactCall_createdAt" | "responseCall" | "responseCall_createdAt" | "PromisePayment" | "Payment" | "PaymentId" | "PromiseNonPayment" | "note" | "caseStatus" | "cuotasIniciales", ExtArgs["result"]["first_contact_lote"]>
  export type first_contact_loteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type first_contact_loteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type first_contact_loteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $first_contact_lotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "first_contact_lote"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      userId: number
      accion: string
      contactAvailable: boolean
      contact: boolean
      contact_createdAt: Date | null
      response: boolean
      response_createdAt: Date | null
      contactCall: boolean
      contactCall_createdAt: Date | null
      responseCall: boolean
      responseCall_createdAt: Date | null
      PromisePayment: boolean
      Payment: boolean
      PaymentId: number | null
      PromiseNonPayment: boolean
      note: string | null
      caseStatus: boolean
      cuotasIniciales: number
    }, ExtArgs["result"]["first_contact_lote"]>
    composites: {}
  }

  type first_contact_loteGetPayload<S extends boolean | null | undefined | first_contact_loteDefaultArgs> = $Result.GetResult<Prisma.$first_contact_lotePayload, S>

  type first_contact_loteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<first_contact_loteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: First_contact_loteCountAggregateInputType | true
    }

  export interface first_contact_loteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['first_contact_lote'], meta: { name: 'first_contact_lote' } }
    /**
     * Find zero or one First_contact_lote that matches the filter.
     * @param {first_contact_loteFindUniqueArgs} args - Arguments to find a First_contact_lote
     * @example
     * // Get one First_contact_lote
     * const first_contact_lote = await prisma.first_contact_lote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends first_contact_loteFindUniqueArgs>(args: SelectSubset<T, first_contact_loteFindUniqueArgs<ExtArgs>>): Prisma__first_contact_loteClient<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one First_contact_lote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {first_contact_loteFindUniqueOrThrowArgs} args - Arguments to find a First_contact_lote
     * @example
     * // Get one First_contact_lote
     * const first_contact_lote = await prisma.first_contact_lote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends first_contact_loteFindUniqueOrThrowArgs>(args: SelectSubset<T, first_contact_loteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__first_contact_loteClient<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first First_contact_lote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_contact_loteFindFirstArgs} args - Arguments to find a First_contact_lote
     * @example
     * // Get one First_contact_lote
     * const first_contact_lote = await prisma.first_contact_lote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends first_contact_loteFindFirstArgs>(args?: SelectSubset<T, first_contact_loteFindFirstArgs<ExtArgs>>): Prisma__first_contact_loteClient<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first First_contact_lote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_contact_loteFindFirstOrThrowArgs} args - Arguments to find a First_contact_lote
     * @example
     * // Get one First_contact_lote
     * const first_contact_lote = await prisma.first_contact_lote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends first_contact_loteFindFirstOrThrowArgs>(args?: SelectSubset<T, first_contact_loteFindFirstOrThrowArgs<ExtArgs>>): Prisma__first_contact_loteClient<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more First_contact_lotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_contact_loteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all First_contact_lotes
     * const first_contact_lotes = await prisma.first_contact_lote.findMany()
     * 
     * // Get first 10 First_contact_lotes
     * const first_contact_lotes = await prisma.first_contact_lote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const first_contact_loteWithIdOnly = await prisma.first_contact_lote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends first_contact_loteFindManyArgs>(args?: SelectSubset<T, first_contact_loteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a First_contact_lote.
     * @param {first_contact_loteCreateArgs} args - Arguments to create a First_contact_lote.
     * @example
     * // Create one First_contact_lote
     * const First_contact_lote = await prisma.first_contact_lote.create({
     *   data: {
     *     // ... data to create a First_contact_lote
     *   }
     * })
     * 
     */
    create<T extends first_contact_loteCreateArgs>(args: SelectSubset<T, first_contact_loteCreateArgs<ExtArgs>>): Prisma__first_contact_loteClient<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many First_contact_lotes.
     * @param {first_contact_loteCreateManyArgs} args - Arguments to create many First_contact_lotes.
     * @example
     * // Create many First_contact_lotes
     * const first_contact_lote = await prisma.first_contact_lote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends first_contact_loteCreateManyArgs>(args?: SelectSubset<T, first_contact_loteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many First_contact_lotes and returns the data saved in the database.
     * @param {first_contact_loteCreateManyAndReturnArgs} args - Arguments to create many First_contact_lotes.
     * @example
     * // Create many First_contact_lotes
     * const first_contact_lote = await prisma.first_contact_lote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many First_contact_lotes and only return the `id`
     * const first_contact_loteWithIdOnly = await prisma.first_contact_lote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends first_contact_loteCreateManyAndReturnArgs>(args?: SelectSubset<T, first_contact_loteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a First_contact_lote.
     * @param {first_contact_loteDeleteArgs} args - Arguments to delete one First_contact_lote.
     * @example
     * // Delete one First_contact_lote
     * const First_contact_lote = await prisma.first_contact_lote.delete({
     *   where: {
     *     // ... filter to delete one First_contact_lote
     *   }
     * })
     * 
     */
    delete<T extends first_contact_loteDeleteArgs>(args: SelectSubset<T, first_contact_loteDeleteArgs<ExtArgs>>): Prisma__first_contact_loteClient<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one First_contact_lote.
     * @param {first_contact_loteUpdateArgs} args - Arguments to update one First_contact_lote.
     * @example
     * // Update one First_contact_lote
     * const first_contact_lote = await prisma.first_contact_lote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends first_contact_loteUpdateArgs>(args: SelectSubset<T, first_contact_loteUpdateArgs<ExtArgs>>): Prisma__first_contact_loteClient<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more First_contact_lotes.
     * @param {first_contact_loteDeleteManyArgs} args - Arguments to filter First_contact_lotes to delete.
     * @example
     * // Delete a few First_contact_lotes
     * const { count } = await prisma.first_contact_lote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends first_contact_loteDeleteManyArgs>(args?: SelectSubset<T, first_contact_loteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more First_contact_lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_contact_loteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many First_contact_lotes
     * const first_contact_lote = await prisma.first_contact_lote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends first_contact_loteUpdateManyArgs>(args: SelectSubset<T, first_contact_loteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more First_contact_lotes and returns the data updated in the database.
     * @param {first_contact_loteUpdateManyAndReturnArgs} args - Arguments to update many First_contact_lotes.
     * @example
     * // Update many First_contact_lotes
     * const first_contact_lote = await prisma.first_contact_lote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more First_contact_lotes and only return the `id`
     * const first_contact_loteWithIdOnly = await prisma.first_contact_lote.updateManyAndReturn({
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
    updateManyAndReturn<T extends first_contact_loteUpdateManyAndReturnArgs>(args: SelectSubset<T, first_contact_loteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one First_contact_lote.
     * @param {first_contact_loteUpsertArgs} args - Arguments to update or create a First_contact_lote.
     * @example
     * // Update or create a First_contact_lote
     * const first_contact_lote = await prisma.first_contact_lote.upsert({
     *   create: {
     *     // ... data to create a First_contact_lote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the First_contact_lote we want to update
     *   }
     * })
     */
    upsert<T extends first_contact_loteUpsertArgs>(args: SelectSubset<T, first_contact_loteUpsertArgs<ExtArgs>>): Prisma__first_contact_loteClient<$Result.GetResult<Prisma.$first_contact_lotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of First_contact_lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_contact_loteCountArgs} args - Arguments to filter First_contact_lotes to count.
     * @example
     * // Count the number of First_contact_lotes
     * const count = await prisma.first_contact_lote.count({
     *   where: {
     *     // ... the filter for the First_contact_lotes we want to count
     *   }
     * })
    **/
    count<T extends first_contact_loteCountArgs>(
      args?: Subset<T, first_contact_loteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], First_contact_loteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a First_contact_lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {First_contact_loteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends First_contact_loteAggregateArgs>(args: Subset<T, First_contact_loteAggregateArgs>): Prisma.PrismaPromise<GetFirst_contact_loteAggregateType<T>>

    /**
     * Group by First_contact_lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {first_contact_loteGroupByArgs} args - Group by arguments.
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
      T extends first_contact_loteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: first_contact_loteGroupByArgs['orderBy'] }
        : { orderBy?: first_contact_loteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, first_contact_loteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFirst_contact_loteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the first_contact_lote model
   */
  readonly fields: first_contact_loteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for first_contact_lote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__first_contact_loteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the first_contact_lote model
   */
  interface first_contact_loteFieldRefs {
    readonly id: FieldRef<"first_contact_lote", 'Int'>
    readonly createdAt: FieldRef<"first_contact_lote", 'DateTime'>
    readonly userId: FieldRef<"first_contact_lote", 'Int'>
    readonly accion: FieldRef<"first_contact_lote", 'String'>
    readonly contactAvailable: FieldRef<"first_contact_lote", 'Boolean'>
    readonly contact: FieldRef<"first_contact_lote", 'Boolean'>
    readonly contact_createdAt: FieldRef<"first_contact_lote", 'DateTime'>
    readonly response: FieldRef<"first_contact_lote", 'Boolean'>
    readonly response_createdAt: FieldRef<"first_contact_lote", 'DateTime'>
    readonly contactCall: FieldRef<"first_contact_lote", 'Boolean'>
    readonly contactCall_createdAt: FieldRef<"first_contact_lote", 'DateTime'>
    readonly responseCall: FieldRef<"first_contact_lote", 'Boolean'>
    readonly responseCall_createdAt: FieldRef<"first_contact_lote", 'DateTime'>
    readonly PromisePayment: FieldRef<"first_contact_lote", 'Boolean'>
    readonly Payment: FieldRef<"first_contact_lote", 'Boolean'>
    readonly PaymentId: FieldRef<"first_contact_lote", 'Int'>
    readonly PromiseNonPayment: FieldRef<"first_contact_lote", 'Boolean'>
    readonly note: FieldRef<"first_contact_lote", 'String'>
    readonly caseStatus: FieldRef<"first_contact_lote", 'Boolean'>
    readonly cuotasIniciales: FieldRef<"first_contact_lote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * first_contact_lote findUnique
   */
  export type first_contact_loteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteInclude<ExtArgs> | null
    /**
     * Filter, which first_contact_lote to fetch.
     */
    where: first_contact_loteWhereUniqueInput
  }

  /**
   * first_contact_lote findUniqueOrThrow
   */
  export type first_contact_loteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteInclude<ExtArgs> | null
    /**
     * Filter, which first_contact_lote to fetch.
     */
    where: first_contact_loteWhereUniqueInput
  }

  /**
   * first_contact_lote findFirst
   */
  export type first_contact_loteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteInclude<ExtArgs> | null
    /**
     * Filter, which first_contact_lote to fetch.
     */
    where?: first_contact_loteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of first_contact_lotes to fetch.
     */
    orderBy?: first_contact_loteOrderByWithRelationInput | first_contact_loteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for first_contact_lotes.
     */
    cursor?: first_contact_loteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` first_contact_lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` first_contact_lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of first_contact_lotes.
     */
    distinct?: First_contact_loteScalarFieldEnum | First_contact_loteScalarFieldEnum[]
  }

  /**
   * first_contact_lote findFirstOrThrow
   */
  export type first_contact_loteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteInclude<ExtArgs> | null
    /**
     * Filter, which first_contact_lote to fetch.
     */
    where?: first_contact_loteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of first_contact_lotes to fetch.
     */
    orderBy?: first_contact_loteOrderByWithRelationInput | first_contact_loteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for first_contact_lotes.
     */
    cursor?: first_contact_loteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` first_contact_lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` first_contact_lotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of first_contact_lotes.
     */
    distinct?: First_contact_loteScalarFieldEnum | First_contact_loteScalarFieldEnum[]
  }

  /**
   * first_contact_lote findMany
   */
  export type first_contact_loteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteInclude<ExtArgs> | null
    /**
     * Filter, which first_contact_lotes to fetch.
     */
    where?: first_contact_loteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of first_contact_lotes to fetch.
     */
    orderBy?: first_contact_loteOrderByWithRelationInput | first_contact_loteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing first_contact_lotes.
     */
    cursor?: first_contact_loteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` first_contact_lotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` first_contact_lotes.
     */
    skip?: number
    distinct?: First_contact_loteScalarFieldEnum | First_contact_loteScalarFieldEnum[]
  }

  /**
   * first_contact_lote create
   */
  export type first_contact_loteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteInclude<ExtArgs> | null
    /**
     * The data needed to create a first_contact_lote.
     */
    data: XOR<first_contact_loteCreateInput, first_contact_loteUncheckedCreateInput>
  }

  /**
   * first_contact_lote createMany
   */
  export type first_contact_loteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many first_contact_lotes.
     */
    data: first_contact_loteCreateManyInput | first_contact_loteCreateManyInput[]
  }

  /**
   * first_contact_lote createManyAndReturn
   */
  export type first_contact_loteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * The data used to create many first_contact_lotes.
     */
    data: first_contact_loteCreateManyInput | first_contact_loteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * first_contact_lote update
   */
  export type first_contact_loteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteInclude<ExtArgs> | null
    /**
     * The data needed to update a first_contact_lote.
     */
    data: XOR<first_contact_loteUpdateInput, first_contact_loteUncheckedUpdateInput>
    /**
     * Choose, which first_contact_lote to update.
     */
    where: first_contact_loteWhereUniqueInput
  }

  /**
   * first_contact_lote updateMany
   */
  export type first_contact_loteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update first_contact_lotes.
     */
    data: XOR<first_contact_loteUpdateManyMutationInput, first_contact_loteUncheckedUpdateManyInput>
    /**
     * Filter which first_contact_lotes to update
     */
    where?: first_contact_loteWhereInput
    /**
     * Limit how many first_contact_lotes to update.
     */
    limit?: number
  }

  /**
   * first_contact_lote updateManyAndReturn
   */
  export type first_contact_loteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * The data used to update first_contact_lotes.
     */
    data: XOR<first_contact_loteUpdateManyMutationInput, first_contact_loteUncheckedUpdateManyInput>
    /**
     * Filter which first_contact_lotes to update
     */
    where?: first_contact_loteWhereInput
    /**
     * Limit how many first_contact_lotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * first_contact_lote upsert
   */
  export type first_contact_loteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteInclude<ExtArgs> | null
    /**
     * The filter to search for the first_contact_lote to update in case it exists.
     */
    where: first_contact_loteWhereUniqueInput
    /**
     * In case the first_contact_lote found by the `where` argument doesn't exist, create a new first_contact_lote with this data.
     */
    create: XOR<first_contact_loteCreateInput, first_contact_loteUncheckedCreateInput>
    /**
     * In case the first_contact_lote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<first_contact_loteUpdateInput, first_contact_loteUncheckedUpdateInput>
  }

  /**
   * first_contact_lote delete
   */
  export type first_contact_loteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteInclude<ExtArgs> | null
    /**
     * Filter which first_contact_lote to delete.
     */
    where: first_contact_loteWhereUniqueInput
  }

  /**
   * first_contact_lote deleteMany
   */
  export type first_contact_loteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which first_contact_lotes to delete
     */
    where?: first_contact_loteWhereInput
    /**
     * Limit how many first_contact_lotes to delete.
     */
    limit?: number
  }

  /**
   * first_contact_lote without action
   */
  export type first_contact_loteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the first_contact_lote
     */
    select?: first_contact_loteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the first_contact_lote
     */
    omit?: first_contact_loteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: first_contact_loteInclude<ExtArgs> | null
  }


  /**
   * Model interaction_Type
   */

  export type AggregateInteraction_Type = {
    _count: Interaction_TypeCountAggregateOutputType | null
    _avg: Interaction_TypeAvgAggregateOutputType | null
    _sum: Interaction_TypeSumAggregateOutputType | null
    _min: Interaction_TypeMinAggregateOutputType | null
    _max: Interaction_TypeMaxAggregateOutputType | null
  }

  export type Interaction_TypeAvgAggregateOutputType = {
    id: number | null
  }

  export type Interaction_TypeSumAggregateOutputType = {
    id: number | null
  }

  export type Interaction_TypeMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type Interaction_TypeMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type Interaction_TypeCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type Interaction_TypeAvgAggregateInputType = {
    id?: true
  }

  export type Interaction_TypeSumAggregateInputType = {
    id?: true
  }

  export type Interaction_TypeMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type Interaction_TypeMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type Interaction_TypeCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type Interaction_TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interaction_Type to aggregate.
     */
    where?: interaction_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interaction_Types to fetch.
     */
    orderBy?: interaction_TypeOrderByWithRelationInput | interaction_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: interaction_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interaction_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interaction_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned interaction_Types
    **/
    _count?: true | Interaction_TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Interaction_TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Interaction_TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Interaction_TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Interaction_TypeMaxAggregateInputType
  }

  export type GetInteraction_TypeAggregateType<T extends Interaction_TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateInteraction_Type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteraction_Type[P]>
      : GetScalarType<T[P], AggregateInteraction_Type[P]>
  }




  export type interaction_TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: interaction_TypeWhereInput
    orderBy?: interaction_TypeOrderByWithAggregationInput | interaction_TypeOrderByWithAggregationInput[]
    by: Interaction_TypeScalarFieldEnum[] | Interaction_TypeScalarFieldEnum
    having?: interaction_TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Interaction_TypeCountAggregateInputType | true
    _avg?: Interaction_TypeAvgAggregateInputType
    _sum?: Interaction_TypeSumAggregateInputType
    _min?: Interaction_TypeMinAggregateInputType
    _max?: Interaction_TypeMaxAggregateInputType
  }

  export type Interaction_TypeGroupByOutputType = {
    id: number
    type: string
    _count: Interaction_TypeCountAggregateOutputType | null
    _avg: Interaction_TypeAvgAggregateOutputType | null
    _sum: Interaction_TypeSumAggregateOutputType | null
    _min: Interaction_TypeMinAggregateOutputType | null
    _max: Interaction_TypeMaxAggregateOutputType | null
  }

  type GetInteraction_TypeGroupByPayload<T extends interaction_TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Interaction_TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Interaction_TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Interaction_TypeGroupByOutputType[P]>
            : GetScalarType<T[P], Interaction_TypeGroupByOutputType[P]>
        }
      >
    >


  export type interaction_TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    interactions?: boolean | interaction_Type$interactionsArgs<ExtArgs>
    _count?: boolean | Interaction_TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction_Type"]>

  export type interaction_TypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["interaction_Type"]>

  export type interaction_TypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["interaction_Type"]>

  export type interaction_TypeSelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type interaction_TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type", ExtArgs["result"]["interaction_Type"]>
  export type interaction_TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactions?: boolean | interaction_Type$interactionsArgs<ExtArgs>
    _count?: boolean | Interaction_TypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type interaction_TypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type interaction_TypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $interaction_TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "interaction_Type"
    objects: {
      interactions: Prisma.$interactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
    }, ExtArgs["result"]["interaction_Type"]>
    composites: {}
  }

  type interaction_TypeGetPayload<S extends boolean | null | undefined | interaction_TypeDefaultArgs> = $Result.GetResult<Prisma.$interaction_TypePayload, S>

  type interaction_TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<interaction_TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Interaction_TypeCountAggregateInputType | true
    }

  export interface interaction_TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['interaction_Type'], meta: { name: 'interaction_Type' } }
    /**
     * Find zero or one Interaction_Type that matches the filter.
     * @param {interaction_TypeFindUniqueArgs} args - Arguments to find a Interaction_Type
     * @example
     * // Get one Interaction_Type
     * const interaction_Type = await prisma.interaction_Type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends interaction_TypeFindUniqueArgs>(args: SelectSubset<T, interaction_TypeFindUniqueArgs<ExtArgs>>): Prisma__interaction_TypeClient<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interaction_Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {interaction_TypeFindUniqueOrThrowArgs} args - Arguments to find a Interaction_Type
     * @example
     * // Get one Interaction_Type
     * const interaction_Type = await prisma.interaction_Type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends interaction_TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, interaction_TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__interaction_TypeClient<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction_Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interaction_TypeFindFirstArgs} args - Arguments to find a Interaction_Type
     * @example
     * // Get one Interaction_Type
     * const interaction_Type = await prisma.interaction_Type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends interaction_TypeFindFirstArgs>(args?: SelectSubset<T, interaction_TypeFindFirstArgs<ExtArgs>>): Prisma__interaction_TypeClient<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction_Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interaction_TypeFindFirstOrThrowArgs} args - Arguments to find a Interaction_Type
     * @example
     * // Get one Interaction_Type
     * const interaction_Type = await prisma.interaction_Type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends interaction_TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, interaction_TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__interaction_TypeClient<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interaction_Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interaction_TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interaction_Types
     * const interaction_Types = await prisma.interaction_Type.findMany()
     * 
     * // Get first 10 Interaction_Types
     * const interaction_Types = await prisma.interaction_Type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interaction_TypeWithIdOnly = await prisma.interaction_Type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends interaction_TypeFindManyArgs>(args?: SelectSubset<T, interaction_TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interaction_Type.
     * @param {interaction_TypeCreateArgs} args - Arguments to create a Interaction_Type.
     * @example
     * // Create one Interaction_Type
     * const Interaction_Type = await prisma.interaction_Type.create({
     *   data: {
     *     // ... data to create a Interaction_Type
     *   }
     * })
     * 
     */
    create<T extends interaction_TypeCreateArgs>(args: SelectSubset<T, interaction_TypeCreateArgs<ExtArgs>>): Prisma__interaction_TypeClient<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interaction_Types.
     * @param {interaction_TypeCreateManyArgs} args - Arguments to create many Interaction_Types.
     * @example
     * // Create many Interaction_Types
     * const interaction_Type = await prisma.interaction_Type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends interaction_TypeCreateManyArgs>(args?: SelectSubset<T, interaction_TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interaction_Types and returns the data saved in the database.
     * @param {interaction_TypeCreateManyAndReturnArgs} args - Arguments to create many Interaction_Types.
     * @example
     * // Create many Interaction_Types
     * const interaction_Type = await prisma.interaction_Type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interaction_Types and only return the `id`
     * const interaction_TypeWithIdOnly = await prisma.interaction_Type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends interaction_TypeCreateManyAndReturnArgs>(args?: SelectSubset<T, interaction_TypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interaction_Type.
     * @param {interaction_TypeDeleteArgs} args - Arguments to delete one Interaction_Type.
     * @example
     * // Delete one Interaction_Type
     * const Interaction_Type = await prisma.interaction_Type.delete({
     *   where: {
     *     // ... filter to delete one Interaction_Type
     *   }
     * })
     * 
     */
    delete<T extends interaction_TypeDeleteArgs>(args: SelectSubset<T, interaction_TypeDeleteArgs<ExtArgs>>): Prisma__interaction_TypeClient<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interaction_Type.
     * @param {interaction_TypeUpdateArgs} args - Arguments to update one Interaction_Type.
     * @example
     * // Update one Interaction_Type
     * const interaction_Type = await prisma.interaction_Type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends interaction_TypeUpdateArgs>(args: SelectSubset<T, interaction_TypeUpdateArgs<ExtArgs>>): Prisma__interaction_TypeClient<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interaction_Types.
     * @param {interaction_TypeDeleteManyArgs} args - Arguments to filter Interaction_Types to delete.
     * @example
     * // Delete a few Interaction_Types
     * const { count } = await prisma.interaction_Type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends interaction_TypeDeleteManyArgs>(args?: SelectSubset<T, interaction_TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interaction_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interaction_TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interaction_Types
     * const interaction_Type = await prisma.interaction_Type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends interaction_TypeUpdateManyArgs>(args: SelectSubset<T, interaction_TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interaction_Types and returns the data updated in the database.
     * @param {interaction_TypeUpdateManyAndReturnArgs} args - Arguments to update many Interaction_Types.
     * @example
     * // Update many Interaction_Types
     * const interaction_Type = await prisma.interaction_Type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interaction_Types and only return the `id`
     * const interaction_TypeWithIdOnly = await prisma.interaction_Type.updateManyAndReturn({
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
    updateManyAndReturn<T extends interaction_TypeUpdateManyAndReturnArgs>(args: SelectSubset<T, interaction_TypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interaction_Type.
     * @param {interaction_TypeUpsertArgs} args - Arguments to update or create a Interaction_Type.
     * @example
     * // Update or create a Interaction_Type
     * const interaction_Type = await prisma.interaction_Type.upsert({
     *   create: {
     *     // ... data to create a Interaction_Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interaction_Type we want to update
     *   }
     * })
     */
    upsert<T extends interaction_TypeUpsertArgs>(args: SelectSubset<T, interaction_TypeUpsertArgs<ExtArgs>>): Prisma__interaction_TypeClient<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interaction_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interaction_TypeCountArgs} args - Arguments to filter Interaction_Types to count.
     * @example
     * // Count the number of Interaction_Types
     * const count = await prisma.interaction_Type.count({
     *   where: {
     *     // ... the filter for the Interaction_Types we want to count
     *   }
     * })
    **/
    count<T extends interaction_TypeCountArgs>(
      args?: Subset<T, interaction_TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Interaction_TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interaction_Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Interaction_TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Interaction_TypeAggregateArgs>(args: Subset<T, Interaction_TypeAggregateArgs>): Prisma.PrismaPromise<GetInteraction_TypeAggregateType<T>>

    /**
     * Group by Interaction_Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interaction_TypeGroupByArgs} args - Group by arguments.
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
      T extends interaction_TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: interaction_TypeGroupByArgs['orderBy'] }
        : { orderBy?: interaction_TypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, interaction_TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteraction_TypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the interaction_Type model
   */
  readonly fields: interaction_TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for interaction_Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__interaction_TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interactions<T extends interaction_Type$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, interaction_Type$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the interaction_Type model
   */
  interface interaction_TypeFieldRefs {
    readonly id: FieldRef<"interaction_Type", 'Int'>
    readonly type: FieldRef<"interaction_Type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * interaction_Type findUnique
   */
  export type interaction_TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interaction_TypeInclude<ExtArgs> | null
    /**
     * Filter, which interaction_Type to fetch.
     */
    where: interaction_TypeWhereUniqueInput
  }

  /**
   * interaction_Type findUniqueOrThrow
   */
  export type interaction_TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interaction_TypeInclude<ExtArgs> | null
    /**
     * Filter, which interaction_Type to fetch.
     */
    where: interaction_TypeWhereUniqueInput
  }

  /**
   * interaction_Type findFirst
   */
  export type interaction_TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interaction_TypeInclude<ExtArgs> | null
    /**
     * Filter, which interaction_Type to fetch.
     */
    where?: interaction_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interaction_Types to fetch.
     */
    orderBy?: interaction_TypeOrderByWithRelationInput | interaction_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interaction_Types.
     */
    cursor?: interaction_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interaction_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interaction_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interaction_Types.
     */
    distinct?: Interaction_TypeScalarFieldEnum | Interaction_TypeScalarFieldEnum[]
  }

  /**
   * interaction_Type findFirstOrThrow
   */
  export type interaction_TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interaction_TypeInclude<ExtArgs> | null
    /**
     * Filter, which interaction_Type to fetch.
     */
    where?: interaction_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interaction_Types to fetch.
     */
    orderBy?: interaction_TypeOrderByWithRelationInput | interaction_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interaction_Types.
     */
    cursor?: interaction_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interaction_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interaction_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interaction_Types.
     */
    distinct?: Interaction_TypeScalarFieldEnum | Interaction_TypeScalarFieldEnum[]
  }

  /**
   * interaction_Type findMany
   */
  export type interaction_TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interaction_TypeInclude<ExtArgs> | null
    /**
     * Filter, which interaction_Types to fetch.
     */
    where?: interaction_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interaction_Types to fetch.
     */
    orderBy?: interaction_TypeOrderByWithRelationInput | interaction_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing interaction_Types.
     */
    cursor?: interaction_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interaction_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interaction_Types.
     */
    skip?: number
    distinct?: Interaction_TypeScalarFieldEnum | Interaction_TypeScalarFieldEnum[]
  }

  /**
   * interaction_Type create
   */
  export type interaction_TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interaction_TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a interaction_Type.
     */
    data: XOR<interaction_TypeCreateInput, interaction_TypeUncheckedCreateInput>
  }

  /**
   * interaction_Type createMany
   */
  export type interaction_TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many interaction_Types.
     */
    data: interaction_TypeCreateManyInput | interaction_TypeCreateManyInput[]
  }

  /**
   * interaction_Type createManyAndReturn
   */
  export type interaction_TypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * The data used to create many interaction_Types.
     */
    data: interaction_TypeCreateManyInput | interaction_TypeCreateManyInput[]
  }

  /**
   * interaction_Type update
   */
  export type interaction_TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interaction_TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a interaction_Type.
     */
    data: XOR<interaction_TypeUpdateInput, interaction_TypeUncheckedUpdateInput>
    /**
     * Choose, which interaction_Type to update.
     */
    where: interaction_TypeWhereUniqueInput
  }

  /**
   * interaction_Type updateMany
   */
  export type interaction_TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update interaction_Types.
     */
    data: XOR<interaction_TypeUpdateManyMutationInput, interaction_TypeUncheckedUpdateManyInput>
    /**
     * Filter which interaction_Types to update
     */
    where?: interaction_TypeWhereInput
    /**
     * Limit how many interaction_Types to update.
     */
    limit?: number
  }

  /**
   * interaction_Type updateManyAndReturn
   */
  export type interaction_TypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * The data used to update interaction_Types.
     */
    data: XOR<interaction_TypeUpdateManyMutationInput, interaction_TypeUncheckedUpdateManyInput>
    /**
     * Filter which interaction_Types to update
     */
    where?: interaction_TypeWhereInput
    /**
     * Limit how many interaction_Types to update.
     */
    limit?: number
  }

  /**
   * interaction_Type upsert
   */
  export type interaction_TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interaction_TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the interaction_Type to update in case it exists.
     */
    where: interaction_TypeWhereUniqueInput
    /**
     * In case the interaction_Type found by the `where` argument doesn't exist, create a new interaction_Type with this data.
     */
    create: XOR<interaction_TypeCreateInput, interaction_TypeUncheckedCreateInput>
    /**
     * In case the interaction_Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<interaction_TypeUpdateInput, interaction_TypeUncheckedUpdateInput>
  }

  /**
   * interaction_Type delete
   */
  export type interaction_TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interaction_TypeInclude<ExtArgs> | null
    /**
     * Filter which interaction_Type to delete.
     */
    where: interaction_TypeWhereUniqueInput
  }

  /**
   * interaction_Type deleteMany
   */
  export type interaction_TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interaction_Types to delete
     */
    where?: interaction_TypeWhereInput
    /**
     * Limit how many interaction_Types to delete.
     */
    limit?: number
  }

  /**
   * interaction_Type.interactions
   */
  export type interaction_Type$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
    where?: interactionsWhereInput
    orderBy?: interactionsOrderByWithRelationInput | interactionsOrderByWithRelationInput[]
    cursor?: interactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractionsScalarFieldEnum | InteractionsScalarFieldEnum[]
  }

  /**
   * interaction_Type without action
   */
  export type interaction_TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interaction_TypeInclude<ExtArgs> | null
  }


  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    factura: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    factura: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    factura: number | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    factura: number | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    factura: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    factura?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    factura?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    factura?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    factura?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    factura?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    factura: number
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factura?: boolean
    createdAt?: boolean
    interaction?: boolean | payment$interactionArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factura?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    factura?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectScalar = {
    id?: boolean
    factura?: boolean
    createdAt?: boolean
  }

  export type paymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "factura" | "createdAt", ExtArgs["result"]["payment"]>
  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interaction?: boolean | payment$interactionArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type paymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type paymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment"
    objects: {
      interaction: Prisma.$interactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      factura: number
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<Prisma.$paymentPayload, S>

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment'], meta: { name: 'payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentFindUniqueArgs>(args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentFindFirstArgs>(args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentFindManyArgs>(args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends paymentCreateArgs>(args: SelectSubset<T, paymentCreateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentCreateManyArgs>(args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends paymentDeleteArgs>(args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentUpdateArgs>(args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentDeleteManyArgs>(args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentUpdateManyArgs>(args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends paymentUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends paymentUpsertArgs>(args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
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
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment model
   */
  readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interaction<T extends payment$interactionArgs<ExtArgs> = {}>(args?: Subset<T, payment$interactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly id: FieldRef<"payment", 'Int'>
    readonly factura: FieldRef<"payment", 'Int'>
    readonly createdAt: FieldRef<"payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>
  }

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
  }

  /**
   * payment createManyAndReturn
   */
  export type paymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
  }

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payment updateManyAndReturn
   */
  export type paymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
  }

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payment.interaction
   */
  export type payment$interactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
    where?: interactionsWhereInput
    orderBy?: interactionsOrderByWithRelationInput | interactionsOrderByWithRelationInput[]
    cursor?: interactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractionsScalarFieldEnum | InteractionsScalarFieldEnum[]
  }

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
  }


  /**
   * Model interactions
   */

  export type AggregateInteractions = {
    _count: InteractionsCountAggregateOutputType | null
    _avg: InteractionsAvgAggregateOutputType | null
    _sum: InteractionsSumAggregateOutputType | null
    _min: InteractionsMinAggregateOutputType | null
    _max: InteractionsMaxAggregateOutputType | null
  }

  export type InteractionsAvgAggregateOutputType = {
    id: number | null
    paymentId: number | null
    interaction_TypeId: number | null
  }

  export type InteractionsSumAggregateOutputType = {
    id: number | null
    paymentId: number | null
    interaction_TypeId: number | null
  }

  export type InteractionsMinAggregateOutputType = {
    id: number | null
    accion: string | null
    paymentId: number | null
    interaction_TypeId: number | null
    createdAt: Date | null
  }

  export type InteractionsMaxAggregateOutputType = {
    id: number | null
    accion: string | null
    paymentId: number | null
    interaction_TypeId: number | null
    createdAt: Date | null
  }

  export type InteractionsCountAggregateOutputType = {
    id: number
    accion: number
    paymentId: number
    interaction_TypeId: number
    createdAt: number
    _all: number
  }


  export type InteractionsAvgAggregateInputType = {
    id?: true
    paymentId?: true
    interaction_TypeId?: true
  }

  export type InteractionsSumAggregateInputType = {
    id?: true
    paymentId?: true
    interaction_TypeId?: true
  }

  export type InteractionsMinAggregateInputType = {
    id?: true
    accion?: true
    paymentId?: true
    interaction_TypeId?: true
    createdAt?: true
  }

  export type InteractionsMaxAggregateInputType = {
    id?: true
    accion?: true
    paymentId?: true
    interaction_TypeId?: true
    createdAt?: true
  }

  export type InteractionsCountAggregateInputType = {
    id?: true
    accion?: true
    paymentId?: true
    interaction_TypeId?: true
    createdAt?: true
    _all?: true
  }

  export type InteractionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interactions to aggregate.
     */
    where?: interactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interactions to fetch.
     */
    orderBy?: interactionsOrderByWithRelationInput | interactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: interactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned interactions
    **/
    _count?: true | InteractionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InteractionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InteractionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InteractionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InteractionsMaxAggregateInputType
  }

  export type GetInteractionsAggregateType<T extends InteractionsAggregateArgs> = {
        [P in keyof T & keyof AggregateInteractions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteractions[P]>
      : GetScalarType<T[P], AggregateInteractions[P]>
  }




  export type interactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: interactionsWhereInput
    orderBy?: interactionsOrderByWithAggregationInput | interactionsOrderByWithAggregationInput[]
    by: InteractionsScalarFieldEnum[] | InteractionsScalarFieldEnum
    having?: interactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InteractionsCountAggregateInputType | true
    _avg?: InteractionsAvgAggregateInputType
    _sum?: InteractionsSumAggregateInputType
    _min?: InteractionsMinAggregateInputType
    _max?: InteractionsMaxAggregateInputType
  }

  export type InteractionsGroupByOutputType = {
    id: number
    accion: string
    paymentId: number | null
    interaction_TypeId: number
    createdAt: Date
    _count: InteractionsCountAggregateOutputType | null
    _avg: InteractionsAvgAggregateOutputType | null
    _sum: InteractionsSumAggregateOutputType | null
    _min: InteractionsMinAggregateOutputType | null
    _max: InteractionsMaxAggregateOutputType | null
  }

  type GetInteractionsGroupByPayload<T extends interactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InteractionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InteractionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteractionsGroupByOutputType[P]>
            : GetScalarType<T[P], InteractionsGroupByOutputType[P]>
        }
      >
    >


  export type interactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    paymentId?: boolean
    interaction_TypeId?: boolean
    createdAt?: boolean
    payment?: boolean | interactions$paymentArgs<ExtArgs>
    interaction_Type?: boolean | interactions$interaction_TypeArgs<ExtArgs>
  }, ExtArgs["result"]["interactions"]>

  export type interactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    paymentId?: boolean
    interaction_TypeId?: boolean
    createdAt?: boolean
    payment?: boolean | interactions$paymentArgs<ExtArgs>
    interaction_Type?: boolean | interactions$interaction_TypeArgs<ExtArgs>
  }, ExtArgs["result"]["interactions"]>

  export type interactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    paymentId?: boolean
    interaction_TypeId?: boolean
    createdAt?: boolean
    payment?: boolean | interactions$paymentArgs<ExtArgs>
    interaction_Type?: boolean | interactions$interaction_TypeArgs<ExtArgs>
  }, ExtArgs["result"]["interactions"]>

  export type interactionsSelectScalar = {
    id?: boolean
    accion?: boolean
    paymentId?: boolean
    interaction_TypeId?: boolean
    createdAt?: boolean
  }

  export type interactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accion" | "paymentId" | "interaction_TypeId" | "createdAt", ExtArgs["result"]["interactions"]>
  export type interactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | interactions$paymentArgs<ExtArgs>
    interaction_Type?: boolean | interactions$interaction_TypeArgs<ExtArgs>
  }
  export type interactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | interactions$paymentArgs<ExtArgs>
    interaction_Type?: boolean | interactions$interaction_TypeArgs<ExtArgs>
  }
  export type interactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | interactions$paymentArgs<ExtArgs>
    interaction_Type?: boolean | interactions$interaction_TypeArgs<ExtArgs>
  }

  export type $interactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "interactions"
    objects: {
      payment: Prisma.$paymentPayload<ExtArgs> | null
      interaction_Type: Prisma.$interaction_TypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accion: string
      paymentId: number | null
      interaction_TypeId: number
      createdAt: Date
    }, ExtArgs["result"]["interactions"]>
    composites: {}
  }

  type interactionsGetPayload<S extends boolean | null | undefined | interactionsDefaultArgs> = $Result.GetResult<Prisma.$interactionsPayload, S>

  type interactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<interactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InteractionsCountAggregateInputType | true
    }

  export interface interactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['interactions'], meta: { name: 'interactions' } }
    /**
     * Find zero or one Interactions that matches the filter.
     * @param {interactionsFindUniqueArgs} args - Arguments to find a Interactions
     * @example
     * // Get one Interactions
     * const interactions = await prisma.interactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends interactionsFindUniqueArgs>(args: SelectSubset<T, interactionsFindUniqueArgs<ExtArgs>>): Prisma__interactionsClient<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {interactionsFindUniqueOrThrowArgs} args - Arguments to find a Interactions
     * @example
     * // Get one Interactions
     * const interactions = await prisma.interactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends interactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, interactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__interactionsClient<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interactionsFindFirstArgs} args - Arguments to find a Interactions
     * @example
     * // Get one Interactions
     * const interactions = await prisma.interactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends interactionsFindFirstArgs>(args?: SelectSubset<T, interactionsFindFirstArgs<ExtArgs>>): Prisma__interactionsClient<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interactionsFindFirstOrThrowArgs} args - Arguments to find a Interactions
     * @example
     * // Get one Interactions
     * const interactions = await prisma.interactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends interactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, interactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__interactionsClient<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interactions
     * const interactions = await prisma.interactions.findMany()
     * 
     * // Get first 10 Interactions
     * const interactions = await prisma.interactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interactionsWithIdOnly = await prisma.interactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends interactionsFindManyArgs>(args?: SelectSubset<T, interactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interactions.
     * @param {interactionsCreateArgs} args - Arguments to create a Interactions.
     * @example
     * // Create one Interactions
     * const Interactions = await prisma.interactions.create({
     *   data: {
     *     // ... data to create a Interactions
     *   }
     * })
     * 
     */
    create<T extends interactionsCreateArgs>(args: SelectSubset<T, interactionsCreateArgs<ExtArgs>>): Prisma__interactionsClient<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interactions.
     * @param {interactionsCreateManyArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interactions = await prisma.interactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends interactionsCreateManyArgs>(args?: SelectSubset<T, interactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interactions and returns the data saved in the database.
     * @param {interactionsCreateManyAndReturnArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interactions = await prisma.interactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interactions and only return the `id`
     * const interactionsWithIdOnly = await prisma.interactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends interactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, interactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interactions.
     * @param {interactionsDeleteArgs} args - Arguments to delete one Interactions.
     * @example
     * // Delete one Interactions
     * const Interactions = await prisma.interactions.delete({
     *   where: {
     *     // ... filter to delete one Interactions
     *   }
     * })
     * 
     */
    delete<T extends interactionsDeleteArgs>(args: SelectSubset<T, interactionsDeleteArgs<ExtArgs>>): Prisma__interactionsClient<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interactions.
     * @param {interactionsUpdateArgs} args - Arguments to update one Interactions.
     * @example
     * // Update one Interactions
     * const interactions = await prisma.interactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends interactionsUpdateArgs>(args: SelectSubset<T, interactionsUpdateArgs<ExtArgs>>): Prisma__interactionsClient<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interactions.
     * @param {interactionsDeleteManyArgs} args - Arguments to filter Interactions to delete.
     * @example
     * // Delete a few Interactions
     * const { count } = await prisma.interactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends interactionsDeleteManyArgs>(args?: SelectSubset<T, interactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interactions
     * const interactions = await prisma.interactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends interactionsUpdateManyArgs>(args: SelectSubset<T, interactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions and returns the data updated in the database.
     * @param {interactionsUpdateManyAndReturnArgs} args - Arguments to update many Interactions.
     * @example
     * // Update many Interactions
     * const interactions = await prisma.interactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interactions and only return the `id`
     * const interactionsWithIdOnly = await prisma.interactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends interactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, interactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interactions.
     * @param {interactionsUpsertArgs} args - Arguments to update or create a Interactions.
     * @example
     * // Update or create a Interactions
     * const interactions = await prisma.interactions.upsert({
     *   create: {
     *     // ... data to create a Interactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interactions we want to update
     *   }
     * })
     */
    upsert<T extends interactionsUpsertArgs>(args: SelectSubset<T, interactionsUpsertArgs<ExtArgs>>): Prisma__interactionsClient<$Result.GetResult<Prisma.$interactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interactionsCountArgs} args - Arguments to filter Interactions to count.
     * @example
     * // Count the number of Interactions
     * const count = await prisma.interactions.count({
     *   where: {
     *     // ... the filter for the Interactions we want to count
     *   }
     * })
    **/
    count<T extends interactionsCountArgs>(
      args?: Subset<T, interactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteractionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InteractionsAggregateArgs>(args: Subset<T, InteractionsAggregateArgs>): Prisma.PrismaPromise<GetInteractionsAggregateType<T>>

    /**
     * Group by Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interactionsGroupByArgs} args - Group by arguments.
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
      T extends interactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: interactionsGroupByArgs['orderBy'] }
        : { orderBy?: interactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, interactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteractionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the interactions model
   */
  readonly fields: interactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for interactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__interactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends interactions$paymentArgs<ExtArgs> = {}>(args?: Subset<T, interactions$paymentArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    interaction_Type<T extends interactions$interaction_TypeArgs<ExtArgs> = {}>(args?: Subset<T, interactions$interaction_TypeArgs<ExtArgs>>): Prisma__interaction_TypeClient<$Result.GetResult<Prisma.$interaction_TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the interactions model
   */
  interface interactionsFieldRefs {
    readonly id: FieldRef<"interactions", 'Int'>
    readonly accion: FieldRef<"interactions", 'String'>
    readonly paymentId: FieldRef<"interactions", 'Int'>
    readonly interaction_TypeId: FieldRef<"interactions", 'Int'>
    readonly createdAt: FieldRef<"interactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * interactions findUnique
   */
  export type interactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
    /**
     * Filter, which interactions to fetch.
     */
    where: interactionsWhereUniqueInput
  }

  /**
   * interactions findUniqueOrThrow
   */
  export type interactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
    /**
     * Filter, which interactions to fetch.
     */
    where: interactionsWhereUniqueInput
  }

  /**
   * interactions findFirst
   */
  export type interactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
    /**
     * Filter, which interactions to fetch.
     */
    where?: interactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interactions to fetch.
     */
    orderBy?: interactionsOrderByWithRelationInput | interactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interactions.
     */
    cursor?: interactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interactions.
     */
    distinct?: InteractionsScalarFieldEnum | InteractionsScalarFieldEnum[]
  }

  /**
   * interactions findFirstOrThrow
   */
  export type interactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
    /**
     * Filter, which interactions to fetch.
     */
    where?: interactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interactions to fetch.
     */
    orderBy?: interactionsOrderByWithRelationInput | interactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interactions.
     */
    cursor?: interactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interactions.
     */
    distinct?: InteractionsScalarFieldEnum | InteractionsScalarFieldEnum[]
  }

  /**
   * interactions findMany
   */
  export type interactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
    /**
     * Filter, which interactions to fetch.
     */
    where?: interactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interactions to fetch.
     */
    orderBy?: interactionsOrderByWithRelationInput | interactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing interactions.
     */
    cursor?: interactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interactions.
     */
    skip?: number
    distinct?: InteractionsScalarFieldEnum | InteractionsScalarFieldEnum[]
  }

  /**
   * interactions create
   */
  export type interactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a interactions.
     */
    data: XOR<interactionsCreateInput, interactionsUncheckedCreateInput>
  }

  /**
   * interactions createMany
   */
  export type interactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many interactions.
     */
    data: interactionsCreateManyInput | interactionsCreateManyInput[]
  }

  /**
   * interactions createManyAndReturn
   */
  export type interactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * The data used to create many interactions.
     */
    data: interactionsCreateManyInput | interactionsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * interactions update
   */
  export type interactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a interactions.
     */
    data: XOR<interactionsUpdateInput, interactionsUncheckedUpdateInput>
    /**
     * Choose, which interactions to update.
     */
    where: interactionsWhereUniqueInput
  }

  /**
   * interactions updateMany
   */
  export type interactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update interactions.
     */
    data: XOR<interactionsUpdateManyMutationInput, interactionsUncheckedUpdateManyInput>
    /**
     * Filter which interactions to update
     */
    where?: interactionsWhereInput
    /**
     * Limit how many interactions to update.
     */
    limit?: number
  }

  /**
   * interactions updateManyAndReturn
   */
  export type interactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * The data used to update interactions.
     */
    data: XOR<interactionsUpdateManyMutationInput, interactionsUncheckedUpdateManyInput>
    /**
     * Filter which interactions to update
     */
    where?: interactionsWhereInput
    /**
     * Limit how many interactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * interactions upsert
   */
  export type interactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the interactions to update in case it exists.
     */
    where: interactionsWhereUniqueInput
    /**
     * In case the interactions found by the `where` argument doesn't exist, create a new interactions with this data.
     */
    create: XOR<interactionsCreateInput, interactionsUncheckedCreateInput>
    /**
     * In case the interactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<interactionsUpdateInput, interactionsUncheckedUpdateInput>
  }

  /**
   * interactions delete
   */
  export type interactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
    /**
     * Filter which interactions to delete.
     */
    where: interactionsWhereUniqueInput
  }

  /**
   * interactions deleteMany
   */
  export type interactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interactions to delete
     */
    where?: interactionsWhereInput
    /**
     * Limit how many interactions to delete.
     */
    limit?: number
  }

  /**
   * interactions.payment
   */
  export type interactions$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
  }

  /**
   * interactions.interaction_Type
   */
  export type interactions$interaction_TypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interaction_Type
     */
    select?: interaction_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interaction_Type
     */
    omit?: interaction_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interaction_TypeInclude<ExtArgs> | null
    where?: interaction_TypeWhereInput
  }

  /**
   * interactions without action
   */
  export type interactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interactions
     */
    select?: interactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the interactions
     */
    omit?: interactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: interactionsInclude<ExtArgs> | null
  }


  /**
   * Model mails
   */

  export type AggregateMails = {
    _count: MailsCountAggregateOutputType | null
    _avg: MailsAvgAggregateOutputType | null
    _sum: MailsSumAggregateOutputType | null
    _min: MailsMinAggregateOutputType | null
    _max: MailsMaxAggregateOutputType | null
  }

  export type MailsAvgAggregateOutputType = {
    id: number | null
  }

  export type MailsSumAggregateOutputType = {
    id: number | null
  }

  export type MailsMinAggregateOutputType = {
    id: number | null
    accion: string | null
    nombre: string | null
    cedula: string | null
    createdAt: Date | null
    msj: string | null
  }

  export type MailsMaxAggregateOutputType = {
    id: number | null
    accion: string | null
    nombre: string | null
    cedula: string | null
    createdAt: Date | null
    msj: string | null
  }

  export type MailsCountAggregateOutputType = {
    id: number
    accion: number
    nombre: number
    cedula: number
    createdAt: number
    msj: number
    _all: number
  }


  export type MailsAvgAggregateInputType = {
    id?: true
  }

  export type MailsSumAggregateInputType = {
    id?: true
  }

  export type MailsMinAggregateInputType = {
    id?: true
    accion?: true
    nombre?: true
    cedula?: true
    createdAt?: true
    msj?: true
  }

  export type MailsMaxAggregateInputType = {
    id?: true
    accion?: true
    nombre?: true
    cedula?: true
    createdAt?: true
    msj?: true
  }

  export type MailsCountAggregateInputType = {
    id?: true
    accion?: true
    nombre?: true
    cedula?: true
    createdAt?: true
    msj?: true
    _all?: true
  }

  export type MailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mails to aggregate.
     */
    where?: mailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mails to fetch.
     */
    orderBy?: mailsOrderByWithRelationInput | mailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mails
    **/
    _count?: true | MailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailsMaxAggregateInputType
  }

  export type GetMailsAggregateType<T extends MailsAggregateArgs> = {
        [P in keyof T & keyof AggregateMails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMails[P]>
      : GetScalarType<T[P], AggregateMails[P]>
  }




  export type mailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mailsWhereInput
    orderBy?: mailsOrderByWithAggregationInput | mailsOrderByWithAggregationInput[]
    by: MailsScalarFieldEnum[] | MailsScalarFieldEnum
    having?: mailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailsCountAggregateInputType | true
    _avg?: MailsAvgAggregateInputType
    _sum?: MailsSumAggregateInputType
    _min?: MailsMinAggregateInputType
    _max?: MailsMaxAggregateInputType
  }

  export type MailsGroupByOutputType = {
    id: number
    accion: string
    nombre: string
    cedula: string
    createdAt: Date
    msj: string
    _count: MailsCountAggregateOutputType | null
    _avg: MailsAvgAggregateOutputType | null
    _sum: MailsSumAggregateOutputType | null
    _min: MailsMinAggregateOutputType | null
    _max: MailsMaxAggregateOutputType | null
  }

  type GetMailsGroupByPayload<T extends mailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailsGroupByOutputType[P]>
            : GetScalarType<T[P], MailsGroupByOutputType[P]>
        }
      >
    >


  export type mailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    nombre?: boolean
    cedula?: boolean
    createdAt?: boolean
    msj?: boolean
  }, ExtArgs["result"]["mails"]>

  export type mailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    nombre?: boolean
    cedula?: boolean
    createdAt?: boolean
    msj?: boolean
  }, ExtArgs["result"]["mails"]>

  export type mailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    nombre?: boolean
    cedula?: boolean
    createdAt?: boolean
    msj?: boolean
  }, ExtArgs["result"]["mails"]>

  export type mailsSelectScalar = {
    id?: boolean
    accion?: boolean
    nombre?: boolean
    cedula?: boolean
    createdAt?: boolean
    msj?: boolean
  }

  export type mailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accion" | "nombre" | "cedula" | "createdAt" | "msj", ExtArgs["result"]["mails"]>

  export type $mailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mails"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accion: string
      nombre: string
      cedula: string
      createdAt: Date
      msj: string
    }, ExtArgs["result"]["mails"]>
    composites: {}
  }

  type mailsGetPayload<S extends boolean | null | undefined | mailsDefaultArgs> = $Result.GetResult<Prisma.$mailsPayload, S>

  type mailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MailsCountAggregateInputType | true
    }

  export interface mailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mails'], meta: { name: 'mails' } }
    /**
     * Find zero or one Mails that matches the filter.
     * @param {mailsFindUniqueArgs} args - Arguments to find a Mails
     * @example
     * // Get one Mails
     * const mails = await prisma.mails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mailsFindUniqueArgs>(args: SelectSubset<T, mailsFindUniqueArgs<ExtArgs>>): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mailsFindUniqueOrThrowArgs} args - Arguments to find a Mails
     * @example
     * // Get one Mails
     * const mails = await prisma.mails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mailsFindUniqueOrThrowArgs>(args: SelectSubset<T, mailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsFindFirstArgs} args - Arguments to find a Mails
     * @example
     * // Get one Mails
     * const mails = await prisma.mails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mailsFindFirstArgs>(args?: SelectSubset<T, mailsFindFirstArgs<ExtArgs>>): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsFindFirstOrThrowArgs} args - Arguments to find a Mails
     * @example
     * // Get one Mails
     * const mails = await prisma.mails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mailsFindFirstOrThrowArgs>(args?: SelectSubset<T, mailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mails
     * const mails = await prisma.mails.findMany()
     * 
     * // Get first 10 Mails
     * const mails = await prisma.mails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailsWithIdOnly = await prisma.mails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mailsFindManyArgs>(args?: SelectSubset<T, mailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mails.
     * @param {mailsCreateArgs} args - Arguments to create a Mails.
     * @example
     * // Create one Mails
     * const Mails = await prisma.mails.create({
     *   data: {
     *     // ... data to create a Mails
     *   }
     * })
     * 
     */
    create<T extends mailsCreateArgs>(args: SelectSubset<T, mailsCreateArgs<ExtArgs>>): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mails.
     * @param {mailsCreateManyArgs} args - Arguments to create many Mails.
     * @example
     * // Create many Mails
     * const mails = await prisma.mails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mailsCreateManyArgs>(args?: SelectSubset<T, mailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mails and returns the data saved in the database.
     * @param {mailsCreateManyAndReturnArgs} args - Arguments to create many Mails.
     * @example
     * // Create many Mails
     * const mails = await prisma.mails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mails and only return the `id`
     * const mailsWithIdOnly = await prisma.mails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mailsCreateManyAndReturnArgs>(args?: SelectSubset<T, mailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mails.
     * @param {mailsDeleteArgs} args - Arguments to delete one Mails.
     * @example
     * // Delete one Mails
     * const Mails = await prisma.mails.delete({
     *   where: {
     *     // ... filter to delete one Mails
     *   }
     * })
     * 
     */
    delete<T extends mailsDeleteArgs>(args: SelectSubset<T, mailsDeleteArgs<ExtArgs>>): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mails.
     * @param {mailsUpdateArgs} args - Arguments to update one Mails.
     * @example
     * // Update one Mails
     * const mails = await prisma.mails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mailsUpdateArgs>(args: SelectSubset<T, mailsUpdateArgs<ExtArgs>>): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mails.
     * @param {mailsDeleteManyArgs} args - Arguments to filter Mails to delete.
     * @example
     * // Delete a few Mails
     * const { count } = await prisma.mails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mailsDeleteManyArgs>(args?: SelectSubset<T, mailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mails
     * const mails = await prisma.mails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mailsUpdateManyArgs>(args: SelectSubset<T, mailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mails and returns the data updated in the database.
     * @param {mailsUpdateManyAndReturnArgs} args - Arguments to update many Mails.
     * @example
     * // Update many Mails
     * const mails = await prisma.mails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mails and only return the `id`
     * const mailsWithIdOnly = await prisma.mails.updateManyAndReturn({
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
    updateManyAndReturn<T extends mailsUpdateManyAndReturnArgs>(args: SelectSubset<T, mailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mails.
     * @param {mailsUpsertArgs} args - Arguments to update or create a Mails.
     * @example
     * // Update or create a Mails
     * const mails = await prisma.mails.upsert({
     *   create: {
     *     // ... data to create a Mails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mails we want to update
     *   }
     * })
     */
    upsert<T extends mailsUpsertArgs>(args: SelectSubset<T, mailsUpsertArgs<ExtArgs>>): Prisma__mailsClient<$Result.GetResult<Prisma.$mailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsCountArgs} args - Arguments to filter Mails to count.
     * @example
     * // Count the number of Mails
     * const count = await prisma.mails.count({
     *   where: {
     *     // ... the filter for the Mails we want to count
     *   }
     * })
    **/
    count<T extends mailsCountArgs>(
      args?: Subset<T, mailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MailsAggregateArgs>(args: Subset<T, MailsAggregateArgs>): Prisma.PrismaPromise<GetMailsAggregateType<T>>

    /**
     * Group by Mails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mailsGroupByArgs} args - Group by arguments.
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
      T extends mailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mailsGroupByArgs['orderBy'] }
        : { orderBy?: mailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mails model
   */
  readonly fields: mailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mails model
   */
  interface mailsFieldRefs {
    readonly id: FieldRef<"mails", 'Int'>
    readonly accion: FieldRef<"mails", 'String'>
    readonly nombre: FieldRef<"mails", 'String'>
    readonly cedula: FieldRef<"mails", 'String'>
    readonly createdAt: FieldRef<"mails", 'DateTime'>
    readonly msj: FieldRef<"mails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mails findUnique
   */
  export type mailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
    /**
     * Filter, which mails to fetch.
     */
    where: mailsWhereUniqueInput
  }

  /**
   * mails findUniqueOrThrow
   */
  export type mailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
    /**
     * Filter, which mails to fetch.
     */
    where: mailsWhereUniqueInput
  }

  /**
   * mails findFirst
   */
  export type mailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
    /**
     * Filter, which mails to fetch.
     */
    where?: mailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mails to fetch.
     */
    orderBy?: mailsOrderByWithRelationInput | mailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mails.
     */
    cursor?: mailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mails.
     */
    distinct?: MailsScalarFieldEnum | MailsScalarFieldEnum[]
  }

  /**
   * mails findFirstOrThrow
   */
  export type mailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
    /**
     * Filter, which mails to fetch.
     */
    where?: mailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mails to fetch.
     */
    orderBy?: mailsOrderByWithRelationInput | mailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mails.
     */
    cursor?: mailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mails.
     */
    distinct?: MailsScalarFieldEnum | MailsScalarFieldEnum[]
  }

  /**
   * mails findMany
   */
  export type mailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
    /**
     * Filter, which mails to fetch.
     */
    where?: mailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mails to fetch.
     */
    orderBy?: mailsOrderByWithRelationInput | mailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mails.
     */
    cursor?: mailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mails.
     */
    skip?: number
    distinct?: MailsScalarFieldEnum | MailsScalarFieldEnum[]
  }

  /**
   * mails create
   */
  export type mailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
    /**
     * The data needed to create a mails.
     */
    data: XOR<mailsCreateInput, mailsUncheckedCreateInput>
  }

  /**
   * mails createMany
   */
  export type mailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mails.
     */
    data: mailsCreateManyInput | mailsCreateManyInput[]
  }

  /**
   * mails createManyAndReturn
   */
  export type mailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
    /**
     * The data used to create many mails.
     */
    data: mailsCreateManyInput | mailsCreateManyInput[]
  }

  /**
   * mails update
   */
  export type mailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
    /**
     * The data needed to update a mails.
     */
    data: XOR<mailsUpdateInput, mailsUncheckedUpdateInput>
    /**
     * Choose, which mails to update.
     */
    where: mailsWhereUniqueInput
  }

  /**
   * mails updateMany
   */
  export type mailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mails.
     */
    data: XOR<mailsUpdateManyMutationInput, mailsUncheckedUpdateManyInput>
    /**
     * Filter which mails to update
     */
    where?: mailsWhereInput
    /**
     * Limit how many mails to update.
     */
    limit?: number
  }

  /**
   * mails updateManyAndReturn
   */
  export type mailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
    /**
     * The data used to update mails.
     */
    data: XOR<mailsUpdateManyMutationInput, mailsUncheckedUpdateManyInput>
    /**
     * Filter which mails to update
     */
    where?: mailsWhereInput
    /**
     * Limit how many mails to update.
     */
    limit?: number
  }

  /**
   * mails upsert
   */
  export type mailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
    /**
     * The filter to search for the mails to update in case it exists.
     */
    where: mailsWhereUniqueInput
    /**
     * In case the mails found by the `where` argument doesn't exist, create a new mails with this data.
     */
    create: XOR<mailsCreateInput, mailsUncheckedCreateInput>
    /**
     * In case the mails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mailsUpdateInput, mailsUncheckedUpdateInput>
  }

  /**
   * mails delete
   */
  export type mailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
    /**
     * Filter which mails to delete.
     */
    where: mailsWhereUniqueInput
  }

  /**
   * mails deleteMany
   */
  export type mailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mails to delete
     */
    where?: mailsWhereInput
    /**
     * Limit how many mails to delete.
     */
    limit?: number
  }

  /**
   * mails without action
   */
  export type mailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mails
     */
    select?: mailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mails
     */
    omit?: mailsOmit<ExtArgs> | null
  }


  /**
   * Model datos_actualizados
   */

  export type AggregateDatos_actualizados = {
    _count: Datos_actualizadosCountAggregateOutputType | null
    _avg: Datos_actualizadosAvgAggregateOutputType | null
    _sum: Datos_actualizadosSumAggregateOutputType | null
    _min: Datos_actualizadosMinAggregateOutputType | null
    _max: Datos_actualizadosMaxAggregateOutputType | null
  }

  export type Datos_actualizadosAvgAggregateOutputType = {
    id: number | null
    accion: number | null
    tipo_socio: number | null
    cedula: number | null
    rif: number | null
  }

  export type Datos_actualizadosSumAggregateOutputType = {
    id: number | null
    accion: number | null
    tipo_socio: number | null
    cedula: number | null
    rif: number | null
  }

  export type Datos_actualizadosMinAggregateOutputType = {
    id: number | null
    accion: number | null
    tipo_socio: number | null
    nombres: string | null
    apellidos: string | null
    cedula: number | null
    parentesco: string | null
    rif: number | null
    sexo: string | null
    profesion: string | null
    nacionalidad: string | null
    edo_civil: string | null
    fecha_nacimiento: string | null
    lugar_nacimiento: string | null
    residencia: string | null
    telefono_celular: string | null
    telofono_hogar: string | null
    telefono_trabajo: string | null
  }

  export type Datos_actualizadosMaxAggregateOutputType = {
    id: number | null
    accion: number | null
    tipo_socio: number | null
    nombres: string | null
    apellidos: string | null
    cedula: number | null
    parentesco: string | null
    rif: number | null
    sexo: string | null
    profesion: string | null
    nacionalidad: string | null
    edo_civil: string | null
    fecha_nacimiento: string | null
    lugar_nacimiento: string | null
    residencia: string | null
    telefono_celular: string | null
    telofono_hogar: string | null
    telefono_trabajo: string | null
  }

  export type Datos_actualizadosCountAggregateOutputType = {
    id: number
    accion: number
    tipo_socio: number
    nombres: number
    apellidos: number
    cedula: number
    parentesco: number
    rif: number
    sexo: number
    profesion: number
    nacionalidad: number
    edo_civil: number
    fecha_nacimiento: number
    lugar_nacimiento: number
    residencia: number
    telefono_celular: number
    telofono_hogar: number
    telefono_trabajo: number
    _all: number
  }


  export type Datos_actualizadosAvgAggregateInputType = {
    id?: true
    accion?: true
    tipo_socio?: true
    cedula?: true
    rif?: true
  }

  export type Datos_actualizadosSumAggregateInputType = {
    id?: true
    accion?: true
    tipo_socio?: true
    cedula?: true
    rif?: true
  }

  export type Datos_actualizadosMinAggregateInputType = {
    id?: true
    accion?: true
    tipo_socio?: true
    nombres?: true
    apellidos?: true
    cedula?: true
    parentesco?: true
    rif?: true
    sexo?: true
    profesion?: true
    nacionalidad?: true
    edo_civil?: true
    fecha_nacimiento?: true
    lugar_nacimiento?: true
    residencia?: true
    telefono_celular?: true
    telofono_hogar?: true
    telefono_trabajo?: true
  }

  export type Datos_actualizadosMaxAggregateInputType = {
    id?: true
    accion?: true
    tipo_socio?: true
    nombres?: true
    apellidos?: true
    cedula?: true
    parentesco?: true
    rif?: true
    sexo?: true
    profesion?: true
    nacionalidad?: true
    edo_civil?: true
    fecha_nacimiento?: true
    lugar_nacimiento?: true
    residencia?: true
    telefono_celular?: true
    telofono_hogar?: true
    telefono_trabajo?: true
  }

  export type Datos_actualizadosCountAggregateInputType = {
    id?: true
    accion?: true
    tipo_socio?: true
    nombres?: true
    apellidos?: true
    cedula?: true
    parentesco?: true
    rif?: true
    sexo?: true
    profesion?: true
    nacionalidad?: true
    edo_civil?: true
    fecha_nacimiento?: true
    lugar_nacimiento?: true
    residencia?: true
    telefono_celular?: true
    telofono_hogar?: true
    telefono_trabajo?: true
    _all?: true
  }

  export type Datos_actualizadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which datos_actualizados to aggregate.
     */
    where?: datos_actualizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos_actualizados to fetch.
     */
    orderBy?: datos_actualizadosOrderByWithRelationInput | datos_actualizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: datos_actualizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos_actualizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos_actualizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned datos_actualizados
    **/
    _count?: true | Datos_actualizadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Datos_actualizadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Datos_actualizadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Datos_actualizadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Datos_actualizadosMaxAggregateInputType
  }

  export type GetDatos_actualizadosAggregateType<T extends Datos_actualizadosAggregateArgs> = {
        [P in keyof T & keyof AggregateDatos_actualizados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatos_actualizados[P]>
      : GetScalarType<T[P], AggregateDatos_actualizados[P]>
  }




  export type datos_actualizadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datos_actualizadosWhereInput
    orderBy?: datos_actualizadosOrderByWithAggregationInput | datos_actualizadosOrderByWithAggregationInput[]
    by: Datos_actualizadosScalarFieldEnum[] | Datos_actualizadosScalarFieldEnum
    having?: datos_actualizadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Datos_actualizadosCountAggregateInputType | true
    _avg?: Datos_actualizadosAvgAggregateInputType
    _sum?: Datos_actualizadosSumAggregateInputType
    _min?: Datos_actualizadosMinAggregateInputType
    _max?: Datos_actualizadosMaxAggregateInputType
  }

  export type Datos_actualizadosGroupByOutputType = {
    id: number
    accion: number
    tipo_socio: number
    nombres: string
    apellidos: string
    cedula: number
    parentesco: string
    rif: number
    sexo: string
    profesion: string
    nacionalidad: string
    edo_civil: string
    fecha_nacimiento: string
    lugar_nacimiento: string
    residencia: string
    telefono_celular: string
    telofono_hogar: string
    telefono_trabajo: string
    _count: Datos_actualizadosCountAggregateOutputType | null
    _avg: Datos_actualizadosAvgAggregateOutputType | null
    _sum: Datos_actualizadosSumAggregateOutputType | null
    _min: Datos_actualizadosMinAggregateOutputType | null
    _max: Datos_actualizadosMaxAggregateOutputType | null
  }

  type GetDatos_actualizadosGroupByPayload<T extends datos_actualizadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Datos_actualizadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Datos_actualizadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Datos_actualizadosGroupByOutputType[P]>
            : GetScalarType<T[P], Datos_actualizadosGroupByOutputType[P]>
        }
      >
    >


  export type datos_actualizadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    tipo_socio?: boolean
    nombres?: boolean
    apellidos?: boolean
    cedula?: boolean
    parentesco?: boolean
    rif?: boolean
    sexo?: boolean
    profesion?: boolean
    nacionalidad?: boolean
    edo_civil?: boolean
    fecha_nacimiento?: boolean
    lugar_nacimiento?: boolean
    residencia?: boolean
    telefono_celular?: boolean
    telofono_hogar?: boolean
    telefono_trabajo?: boolean
  }, ExtArgs["result"]["datos_actualizados"]>

  export type datos_actualizadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    tipo_socio?: boolean
    nombres?: boolean
    apellidos?: boolean
    cedula?: boolean
    parentesco?: boolean
    rif?: boolean
    sexo?: boolean
    profesion?: boolean
    nacionalidad?: boolean
    edo_civil?: boolean
    fecha_nacimiento?: boolean
    lugar_nacimiento?: boolean
    residencia?: boolean
    telefono_celular?: boolean
    telofono_hogar?: boolean
    telefono_trabajo?: boolean
  }, ExtArgs["result"]["datos_actualizados"]>

  export type datos_actualizadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accion?: boolean
    tipo_socio?: boolean
    nombres?: boolean
    apellidos?: boolean
    cedula?: boolean
    parentesco?: boolean
    rif?: boolean
    sexo?: boolean
    profesion?: boolean
    nacionalidad?: boolean
    edo_civil?: boolean
    fecha_nacimiento?: boolean
    lugar_nacimiento?: boolean
    residencia?: boolean
    telefono_celular?: boolean
    telofono_hogar?: boolean
    telefono_trabajo?: boolean
  }, ExtArgs["result"]["datos_actualizados"]>

  export type datos_actualizadosSelectScalar = {
    id?: boolean
    accion?: boolean
    tipo_socio?: boolean
    nombres?: boolean
    apellidos?: boolean
    cedula?: boolean
    parentesco?: boolean
    rif?: boolean
    sexo?: boolean
    profesion?: boolean
    nacionalidad?: boolean
    edo_civil?: boolean
    fecha_nacimiento?: boolean
    lugar_nacimiento?: boolean
    residencia?: boolean
    telefono_celular?: boolean
    telofono_hogar?: boolean
    telefono_trabajo?: boolean
  }

  export type datos_actualizadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accion" | "tipo_socio" | "nombres" | "apellidos" | "cedula" | "parentesco" | "rif" | "sexo" | "profesion" | "nacionalidad" | "edo_civil" | "fecha_nacimiento" | "lugar_nacimiento" | "residencia" | "telefono_celular" | "telofono_hogar" | "telefono_trabajo", ExtArgs["result"]["datos_actualizados"]>

  export type $datos_actualizadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "datos_actualizados"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accion: number
      tipo_socio: number
      nombres: string
      apellidos: string
      cedula: number
      parentesco: string
      rif: number
      sexo: string
      profesion: string
      nacionalidad: string
      edo_civil: string
      fecha_nacimiento: string
      lugar_nacimiento: string
      residencia: string
      telefono_celular: string
      telofono_hogar: string
      telefono_trabajo: string
    }, ExtArgs["result"]["datos_actualizados"]>
    composites: {}
  }

  type datos_actualizadosGetPayload<S extends boolean | null | undefined | datos_actualizadosDefaultArgs> = $Result.GetResult<Prisma.$datos_actualizadosPayload, S>

  type datos_actualizadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<datos_actualizadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Datos_actualizadosCountAggregateInputType | true
    }

  export interface datos_actualizadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['datos_actualizados'], meta: { name: 'datos_actualizados' } }
    /**
     * Find zero or one Datos_actualizados that matches the filter.
     * @param {datos_actualizadosFindUniqueArgs} args - Arguments to find a Datos_actualizados
     * @example
     * // Get one Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends datos_actualizadosFindUniqueArgs>(args: SelectSubset<T, datos_actualizadosFindUniqueArgs<ExtArgs>>): Prisma__datos_actualizadosClient<$Result.GetResult<Prisma.$datos_actualizadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Datos_actualizados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {datos_actualizadosFindUniqueOrThrowArgs} args - Arguments to find a Datos_actualizados
     * @example
     * // Get one Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends datos_actualizadosFindUniqueOrThrowArgs>(args: SelectSubset<T, datos_actualizadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__datos_actualizadosClient<$Result.GetResult<Prisma.$datos_actualizadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datos_actualizados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_actualizadosFindFirstArgs} args - Arguments to find a Datos_actualizados
     * @example
     * // Get one Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends datos_actualizadosFindFirstArgs>(args?: SelectSubset<T, datos_actualizadosFindFirstArgs<ExtArgs>>): Prisma__datos_actualizadosClient<$Result.GetResult<Prisma.$datos_actualizadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datos_actualizados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_actualizadosFindFirstOrThrowArgs} args - Arguments to find a Datos_actualizados
     * @example
     * // Get one Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends datos_actualizadosFindFirstOrThrowArgs>(args?: SelectSubset<T, datos_actualizadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__datos_actualizadosClient<$Result.GetResult<Prisma.$datos_actualizadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datos_actualizados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_actualizadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.findMany()
     * 
     * // Get first 10 Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datos_actualizadosWithIdOnly = await prisma.datos_actualizados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends datos_actualizadosFindManyArgs>(args?: SelectSubset<T, datos_actualizadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datos_actualizadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Datos_actualizados.
     * @param {datos_actualizadosCreateArgs} args - Arguments to create a Datos_actualizados.
     * @example
     * // Create one Datos_actualizados
     * const Datos_actualizados = await prisma.datos_actualizados.create({
     *   data: {
     *     // ... data to create a Datos_actualizados
     *   }
     * })
     * 
     */
    create<T extends datos_actualizadosCreateArgs>(args: SelectSubset<T, datos_actualizadosCreateArgs<ExtArgs>>): Prisma__datos_actualizadosClient<$Result.GetResult<Prisma.$datos_actualizadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datos_actualizados.
     * @param {datos_actualizadosCreateManyArgs} args - Arguments to create many Datos_actualizados.
     * @example
     * // Create many Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends datos_actualizadosCreateManyArgs>(args?: SelectSubset<T, datos_actualizadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Datos_actualizados and returns the data saved in the database.
     * @param {datos_actualizadosCreateManyAndReturnArgs} args - Arguments to create many Datos_actualizados.
     * @example
     * // Create many Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Datos_actualizados and only return the `id`
     * const datos_actualizadosWithIdOnly = await prisma.datos_actualizados.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends datos_actualizadosCreateManyAndReturnArgs>(args?: SelectSubset<T, datos_actualizadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datos_actualizadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Datos_actualizados.
     * @param {datos_actualizadosDeleteArgs} args - Arguments to delete one Datos_actualizados.
     * @example
     * // Delete one Datos_actualizados
     * const Datos_actualizados = await prisma.datos_actualizados.delete({
     *   where: {
     *     // ... filter to delete one Datos_actualizados
     *   }
     * })
     * 
     */
    delete<T extends datos_actualizadosDeleteArgs>(args: SelectSubset<T, datos_actualizadosDeleteArgs<ExtArgs>>): Prisma__datos_actualizadosClient<$Result.GetResult<Prisma.$datos_actualizadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Datos_actualizados.
     * @param {datos_actualizadosUpdateArgs} args - Arguments to update one Datos_actualizados.
     * @example
     * // Update one Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends datos_actualizadosUpdateArgs>(args: SelectSubset<T, datos_actualizadosUpdateArgs<ExtArgs>>): Prisma__datos_actualizadosClient<$Result.GetResult<Prisma.$datos_actualizadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datos_actualizados.
     * @param {datos_actualizadosDeleteManyArgs} args - Arguments to filter Datos_actualizados to delete.
     * @example
     * // Delete a few Datos_actualizados
     * const { count } = await prisma.datos_actualizados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends datos_actualizadosDeleteManyArgs>(args?: SelectSubset<T, datos_actualizadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datos_actualizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_actualizadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends datos_actualizadosUpdateManyArgs>(args: SelectSubset<T, datos_actualizadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datos_actualizados and returns the data updated in the database.
     * @param {datos_actualizadosUpdateManyAndReturnArgs} args - Arguments to update many Datos_actualizados.
     * @example
     * // Update many Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Datos_actualizados and only return the `id`
     * const datos_actualizadosWithIdOnly = await prisma.datos_actualizados.updateManyAndReturn({
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
    updateManyAndReturn<T extends datos_actualizadosUpdateManyAndReturnArgs>(args: SelectSubset<T, datos_actualizadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datos_actualizadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Datos_actualizados.
     * @param {datos_actualizadosUpsertArgs} args - Arguments to update or create a Datos_actualizados.
     * @example
     * // Update or create a Datos_actualizados
     * const datos_actualizados = await prisma.datos_actualizados.upsert({
     *   create: {
     *     // ... data to create a Datos_actualizados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Datos_actualizados we want to update
     *   }
     * })
     */
    upsert<T extends datos_actualizadosUpsertArgs>(args: SelectSubset<T, datos_actualizadosUpsertArgs<ExtArgs>>): Prisma__datos_actualizadosClient<$Result.GetResult<Prisma.$datos_actualizadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datos_actualizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_actualizadosCountArgs} args - Arguments to filter Datos_actualizados to count.
     * @example
     * // Count the number of Datos_actualizados
     * const count = await prisma.datos_actualizados.count({
     *   where: {
     *     // ... the filter for the Datos_actualizados we want to count
     *   }
     * })
    **/
    count<T extends datos_actualizadosCountArgs>(
      args?: Subset<T, datos_actualizadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Datos_actualizadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Datos_actualizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Datos_actualizadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Datos_actualizadosAggregateArgs>(args: Subset<T, Datos_actualizadosAggregateArgs>): Prisma.PrismaPromise<GetDatos_actualizadosAggregateType<T>>

    /**
     * Group by Datos_actualizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_actualizadosGroupByArgs} args - Group by arguments.
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
      T extends datos_actualizadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: datos_actualizadosGroupByArgs['orderBy'] }
        : { orderBy?: datos_actualizadosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, datos_actualizadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatos_actualizadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the datos_actualizados model
   */
  readonly fields: datos_actualizadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for datos_actualizados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__datos_actualizadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the datos_actualizados model
   */
  interface datos_actualizadosFieldRefs {
    readonly id: FieldRef<"datos_actualizados", 'Int'>
    readonly accion: FieldRef<"datos_actualizados", 'Int'>
    readonly tipo_socio: FieldRef<"datos_actualizados", 'Int'>
    readonly nombres: FieldRef<"datos_actualizados", 'String'>
    readonly apellidos: FieldRef<"datos_actualizados", 'String'>
    readonly cedula: FieldRef<"datos_actualizados", 'Int'>
    readonly parentesco: FieldRef<"datos_actualizados", 'String'>
    readonly rif: FieldRef<"datos_actualizados", 'Int'>
    readonly sexo: FieldRef<"datos_actualizados", 'String'>
    readonly profesion: FieldRef<"datos_actualizados", 'String'>
    readonly nacionalidad: FieldRef<"datos_actualizados", 'String'>
    readonly edo_civil: FieldRef<"datos_actualizados", 'String'>
    readonly fecha_nacimiento: FieldRef<"datos_actualizados", 'String'>
    readonly lugar_nacimiento: FieldRef<"datos_actualizados", 'String'>
    readonly residencia: FieldRef<"datos_actualizados", 'String'>
    readonly telefono_celular: FieldRef<"datos_actualizados", 'String'>
    readonly telofono_hogar: FieldRef<"datos_actualizados", 'String'>
    readonly telefono_trabajo: FieldRef<"datos_actualizados", 'String'>
  }
    

  // Custom InputTypes
  /**
   * datos_actualizados findUnique
   */
  export type datos_actualizadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
    /**
     * Filter, which datos_actualizados to fetch.
     */
    where: datos_actualizadosWhereUniqueInput
  }

  /**
   * datos_actualizados findUniqueOrThrow
   */
  export type datos_actualizadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
    /**
     * Filter, which datos_actualizados to fetch.
     */
    where: datos_actualizadosWhereUniqueInput
  }

  /**
   * datos_actualizados findFirst
   */
  export type datos_actualizadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
    /**
     * Filter, which datos_actualizados to fetch.
     */
    where?: datos_actualizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos_actualizados to fetch.
     */
    orderBy?: datos_actualizadosOrderByWithRelationInput | datos_actualizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datos_actualizados.
     */
    cursor?: datos_actualizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos_actualizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos_actualizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datos_actualizados.
     */
    distinct?: Datos_actualizadosScalarFieldEnum | Datos_actualizadosScalarFieldEnum[]
  }

  /**
   * datos_actualizados findFirstOrThrow
   */
  export type datos_actualizadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
    /**
     * Filter, which datos_actualizados to fetch.
     */
    where?: datos_actualizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos_actualizados to fetch.
     */
    orderBy?: datos_actualizadosOrderByWithRelationInput | datos_actualizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datos_actualizados.
     */
    cursor?: datos_actualizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos_actualizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos_actualizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datos_actualizados.
     */
    distinct?: Datos_actualizadosScalarFieldEnum | Datos_actualizadosScalarFieldEnum[]
  }

  /**
   * datos_actualizados findMany
   */
  export type datos_actualizadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
    /**
     * Filter, which datos_actualizados to fetch.
     */
    where?: datos_actualizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos_actualizados to fetch.
     */
    orderBy?: datos_actualizadosOrderByWithRelationInput | datos_actualizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing datos_actualizados.
     */
    cursor?: datos_actualizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos_actualizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos_actualizados.
     */
    skip?: number
    distinct?: Datos_actualizadosScalarFieldEnum | Datos_actualizadosScalarFieldEnum[]
  }

  /**
   * datos_actualizados create
   */
  export type datos_actualizadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
    /**
     * The data needed to create a datos_actualizados.
     */
    data: XOR<datos_actualizadosCreateInput, datos_actualizadosUncheckedCreateInput>
  }

  /**
   * datos_actualizados createMany
   */
  export type datos_actualizadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many datos_actualizados.
     */
    data: datos_actualizadosCreateManyInput | datos_actualizadosCreateManyInput[]
  }

  /**
   * datos_actualizados createManyAndReturn
   */
  export type datos_actualizadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
    /**
     * The data used to create many datos_actualizados.
     */
    data: datos_actualizadosCreateManyInput | datos_actualizadosCreateManyInput[]
  }

  /**
   * datos_actualizados update
   */
  export type datos_actualizadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
    /**
     * The data needed to update a datos_actualizados.
     */
    data: XOR<datos_actualizadosUpdateInput, datos_actualizadosUncheckedUpdateInput>
    /**
     * Choose, which datos_actualizados to update.
     */
    where: datos_actualizadosWhereUniqueInput
  }

  /**
   * datos_actualizados updateMany
   */
  export type datos_actualizadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update datos_actualizados.
     */
    data: XOR<datos_actualizadosUpdateManyMutationInput, datos_actualizadosUncheckedUpdateManyInput>
    /**
     * Filter which datos_actualizados to update
     */
    where?: datos_actualizadosWhereInput
    /**
     * Limit how many datos_actualizados to update.
     */
    limit?: number
  }

  /**
   * datos_actualizados updateManyAndReturn
   */
  export type datos_actualizadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
    /**
     * The data used to update datos_actualizados.
     */
    data: XOR<datos_actualizadosUpdateManyMutationInput, datos_actualizadosUncheckedUpdateManyInput>
    /**
     * Filter which datos_actualizados to update
     */
    where?: datos_actualizadosWhereInput
    /**
     * Limit how many datos_actualizados to update.
     */
    limit?: number
  }

  /**
   * datos_actualizados upsert
   */
  export type datos_actualizadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
    /**
     * The filter to search for the datos_actualizados to update in case it exists.
     */
    where: datos_actualizadosWhereUniqueInput
    /**
     * In case the datos_actualizados found by the `where` argument doesn't exist, create a new datos_actualizados with this data.
     */
    create: XOR<datos_actualizadosCreateInput, datos_actualizadosUncheckedCreateInput>
    /**
     * In case the datos_actualizados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<datos_actualizadosUpdateInput, datos_actualizadosUncheckedUpdateInput>
  }

  /**
   * datos_actualizados delete
   */
  export type datos_actualizadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
    /**
     * Filter which datos_actualizados to delete.
     */
    where: datos_actualizadosWhereUniqueInput
  }

  /**
   * datos_actualizados deleteMany
   */
  export type datos_actualizadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which datos_actualizados to delete
     */
    where?: datos_actualizadosWhereInput
    /**
     * Limit how many datos_actualizados to delete.
     */
    limit?: number
  }

  /**
   * datos_actualizados without action
   */
  export type datos_actualizadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_actualizados
     */
    select?: datos_actualizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_actualizados
     */
    omit?: datos_actualizadosOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const First_contact_loteScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    accion: 'accion',
    contactAvailable: 'contactAvailable',
    contact: 'contact',
    contact_createdAt: 'contact_createdAt',
    response: 'response',
    response_createdAt: 'response_createdAt',
    contactCall: 'contactCall',
    contactCall_createdAt: 'contactCall_createdAt',
    responseCall: 'responseCall',
    responseCall_createdAt: 'responseCall_createdAt',
    PromisePayment: 'PromisePayment',
    Payment: 'Payment',
    PaymentId: 'PaymentId',
    PromiseNonPayment: 'PromiseNonPayment',
    note: 'note',
    caseStatus: 'caseStatus',
    cuotasIniciales: 'cuotasIniciales'
  };

  export type First_contact_loteScalarFieldEnum = (typeof First_contact_loteScalarFieldEnum)[keyof typeof First_contact_loteScalarFieldEnum]


  export const Interaction_TypeScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type Interaction_TypeScalarFieldEnum = (typeof Interaction_TypeScalarFieldEnum)[keyof typeof Interaction_TypeScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    factura: 'factura',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const InteractionsScalarFieldEnum: {
    id: 'id',
    accion: 'accion',
    paymentId: 'paymentId',
    interaction_TypeId: 'interaction_TypeId',
    createdAt: 'createdAt'
  };

  export type InteractionsScalarFieldEnum = (typeof InteractionsScalarFieldEnum)[keyof typeof InteractionsScalarFieldEnum]


  export const MailsScalarFieldEnum: {
    id: 'id',
    accion: 'accion',
    nombre: 'nombre',
    cedula: 'cedula',
    createdAt: 'createdAt',
    msj: 'msj'
  };

  export type MailsScalarFieldEnum = (typeof MailsScalarFieldEnum)[keyof typeof MailsScalarFieldEnum]


  export const Datos_actualizadosScalarFieldEnum: {
    id: 'id',
    accion: 'accion',
    tipo_socio: 'tipo_socio',
    nombres: 'nombres',
    apellidos: 'apellidos',
    cedula: 'cedula',
    parentesco: 'parentesco',
    rif: 'rif',
    sexo: 'sexo',
    profesion: 'profesion',
    nacionalidad: 'nacionalidad',
    edo_civil: 'edo_civil',
    fecha_nacimiento: 'fecha_nacimiento',
    lugar_nacimiento: 'lugar_nacimiento',
    residencia: 'residencia',
    telefono_celular: 'telefono_celular',
    telofono_hogar: 'telofono_hogar',
    telefono_trabajo: 'telefono_trabajo'
  };

  export type Datos_actualizadosScalarFieldEnum = (typeof Datos_actualizadosScalarFieldEnum)[keyof typeof Datos_actualizadosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    first_contact_lote?: First_contact_loteListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_contact_lote?: first_contact_loteOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    first_contact_lote?: First_contact_loteListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    username?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
  }

  export type first_contact_loteWhereInput = {
    AND?: first_contact_loteWhereInput | first_contact_loteWhereInput[]
    OR?: first_contact_loteWhereInput[]
    NOT?: first_contact_loteWhereInput | first_contact_loteWhereInput[]
    id?: IntFilter<"first_contact_lote"> | number
    createdAt?: DateTimeFilter<"first_contact_lote"> | Date | string
    userId?: IntFilter<"first_contact_lote"> | number
    accion?: StringFilter<"first_contact_lote"> | string
    contactAvailable?: BoolFilter<"first_contact_lote"> | boolean
    contact?: BoolFilter<"first_contact_lote"> | boolean
    contact_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    response?: BoolFilter<"first_contact_lote"> | boolean
    response_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    contactCall?: BoolFilter<"first_contact_lote"> | boolean
    contactCall_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    responseCall?: BoolFilter<"first_contact_lote"> | boolean
    responseCall_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    PromisePayment?: BoolFilter<"first_contact_lote"> | boolean
    Payment?: BoolFilter<"first_contact_lote"> | boolean
    PaymentId?: IntNullableFilter<"first_contact_lote"> | number | null
    PromiseNonPayment?: BoolFilter<"first_contact_lote"> | boolean
    note?: StringNullableFilter<"first_contact_lote"> | string | null
    caseStatus?: BoolFilter<"first_contact_lote"> | boolean
    cuotasIniciales?: IntFilter<"first_contact_lote"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type first_contact_loteOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    accion?: SortOrder
    contactAvailable?: SortOrder
    contact?: SortOrder
    contact_createdAt?: SortOrderInput | SortOrder
    response?: SortOrder
    response_createdAt?: SortOrderInput | SortOrder
    contactCall?: SortOrder
    contactCall_createdAt?: SortOrderInput | SortOrder
    responseCall?: SortOrder
    responseCall_createdAt?: SortOrderInput | SortOrder
    PromisePayment?: SortOrder
    Payment?: SortOrder
    PaymentId?: SortOrderInput | SortOrder
    PromiseNonPayment?: SortOrder
    note?: SortOrderInput | SortOrder
    caseStatus?: SortOrder
    cuotasIniciales?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type first_contact_loteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: first_contact_loteWhereInput | first_contact_loteWhereInput[]
    OR?: first_contact_loteWhereInput[]
    NOT?: first_contact_loteWhereInput | first_contact_loteWhereInput[]
    createdAt?: DateTimeFilter<"first_contact_lote"> | Date | string
    userId?: IntFilter<"first_contact_lote"> | number
    accion?: StringFilter<"first_contact_lote"> | string
    contactAvailable?: BoolFilter<"first_contact_lote"> | boolean
    contact?: BoolFilter<"first_contact_lote"> | boolean
    contact_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    response?: BoolFilter<"first_contact_lote"> | boolean
    response_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    contactCall?: BoolFilter<"first_contact_lote"> | boolean
    contactCall_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    responseCall?: BoolFilter<"first_contact_lote"> | boolean
    responseCall_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    PromisePayment?: BoolFilter<"first_contact_lote"> | boolean
    Payment?: BoolFilter<"first_contact_lote"> | boolean
    PaymentId?: IntNullableFilter<"first_contact_lote"> | number | null
    PromiseNonPayment?: BoolFilter<"first_contact_lote"> | boolean
    note?: StringNullableFilter<"first_contact_lote"> | string | null
    caseStatus?: BoolFilter<"first_contact_lote"> | boolean
    cuotasIniciales?: IntFilter<"first_contact_lote"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type first_contact_loteOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    accion?: SortOrder
    contactAvailable?: SortOrder
    contact?: SortOrder
    contact_createdAt?: SortOrderInput | SortOrder
    response?: SortOrder
    response_createdAt?: SortOrderInput | SortOrder
    contactCall?: SortOrder
    contactCall_createdAt?: SortOrderInput | SortOrder
    responseCall?: SortOrder
    responseCall_createdAt?: SortOrderInput | SortOrder
    PromisePayment?: SortOrder
    Payment?: SortOrder
    PaymentId?: SortOrderInput | SortOrder
    PromiseNonPayment?: SortOrder
    note?: SortOrderInput | SortOrder
    caseStatus?: SortOrder
    cuotasIniciales?: SortOrder
    _count?: first_contact_loteCountOrderByAggregateInput
    _avg?: first_contact_loteAvgOrderByAggregateInput
    _max?: first_contact_loteMaxOrderByAggregateInput
    _min?: first_contact_loteMinOrderByAggregateInput
    _sum?: first_contact_loteSumOrderByAggregateInput
  }

  export type first_contact_loteScalarWhereWithAggregatesInput = {
    AND?: first_contact_loteScalarWhereWithAggregatesInput | first_contact_loteScalarWhereWithAggregatesInput[]
    OR?: first_contact_loteScalarWhereWithAggregatesInput[]
    NOT?: first_contact_loteScalarWhereWithAggregatesInput | first_contact_loteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"first_contact_lote"> | number
    createdAt?: DateTimeWithAggregatesFilter<"first_contact_lote"> | Date | string
    userId?: IntWithAggregatesFilter<"first_contact_lote"> | number
    accion?: StringWithAggregatesFilter<"first_contact_lote"> | string
    contactAvailable?: BoolWithAggregatesFilter<"first_contact_lote"> | boolean
    contact?: BoolWithAggregatesFilter<"first_contact_lote"> | boolean
    contact_createdAt?: DateTimeNullableWithAggregatesFilter<"first_contact_lote"> | Date | string | null
    response?: BoolWithAggregatesFilter<"first_contact_lote"> | boolean
    response_createdAt?: DateTimeNullableWithAggregatesFilter<"first_contact_lote"> | Date | string | null
    contactCall?: BoolWithAggregatesFilter<"first_contact_lote"> | boolean
    contactCall_createdAt?: DateTimeNullableWithAggregatesFilter<"first_contact_lote"> | Date | string | null
    responseCall?: BoolWithAggregatesFilter<"first_contact_lote"> | boolean
    responseCall_createdAt?: DateTimeNullableWithAggregatesFilter<"first_contact_lote"> | Date | string | null
    PromisePayment?: BoolWithAggregatesFilter<"first_contact_lote"> | boolean
    Payment?: BoolWithAggregatesFilter<"first_contact_lote"> | boolean
    PaymentId?: IntNullableWithAggregatesFilter<"first_contact_lote"> | number | null
    PromiseNonPayment?: BoolWithAggregatesFilter<"first_contact_lote"> | boolean
    note?: StringNullableWithAggregatesFilter<"first_contact_lote"> | string | null
    caseStatus?: BoolWithAggregatesFilter<"first_contact_lote"> | boolean
    cuotasIniciales?: IntWithAggregatesFilter<"first_contact_lote"> | number
  }

  export type interaction_TypeWhereInput = {
    AND?: interaction_TypeWhereInput | interaction_TypeWhereInput[]
    OR?: interaction_TypeWhereInput[]
    NOT?: interaction_TypeWhereInput | interaction_TypeWhereInput[]
    id?: IntFilter<"interaction_Type"> | number
    type?: StringFilter<"interaction_Type"> | string
    interactions?: InteractionsListRelationFilter
  }

  export type interaction_TypeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    interactions?: interactionsOrderByRelationAggregateInput
  }

  export type interaction_TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: interaction_TypeWhereInput | interaction_TypeWhereInput[]
    OR?: interaction_TypeWhereInput[]
    NOT?: interaction_TypeWhereInput | interaction_TypeWhereInput[]
    type?: StringFilter<"interaction_Type"> | string
    interactions?: InteractionsListRelationFilter
  }, "id">

  export type interaction_TypeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: interaction_TypeCountOrderByAggregateInput
    _avg?: interaction_TypeAvgOrderByAggregateInput
    _max?: interaction_TypeMaxOrderByAggregateInput
    _min?: interaction_TypeMinOrderByAggregateInput
    _sum?: interaction_TypeSumOrderByAggregateInput
  }

  export type interaction_TypeScalarWhereWithAggregatesInput = {
    AND?: interaction_TypeScalarWhereWithAggregatesInput | interaction_TypeScalarWhereWithAggregatesInput[]
    OR?: interaction_TypeScalarWhereWithAggregatesInput[]
    NOT?: interaction_TypeScalarWhereWithAggregatesInput | interaction_TypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"interaction_Type"> | number
    type?: StringWithAggregatesFilter<"interaction_Type"> | string
  }

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    id?: IntFilter<"payment"> | number
    factura?: IntFilter<"payment"> | number
    createdAt?: DateTimeFilter<"payment"> | Date | string
    interaction?: InteractionsListRelationFilter
  }

  export type paymentOrderByWithRelationInput = {
    id?: SortOrder
    factura?: SortOrder
    createdAt?: SortOrder
    interaction?: interactionsOrderByRelationAggregateInput
  }

  export type paymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    factura?: IntFilter<"payment"> | number
    createdAt?: DateTimeFilter<"payment"> | Date | string
    interaction?: InteractionsListRelationFilter
  }, "id">

  export type paymentOrderByWithAggregationInput = {
    id?: SortOrder
    factura?: SortOrder
    createdAt?: SortOrder
    _count?: paymentCountOrderByAggregateInput
    _avg?: paymentAvgOrderByAggregateInput
    _max?: paymentMaxOrderByAggregateInput
    _min?: paymentMinOrderByAggregateInput
    _sum?: paymentSumOrderByAggregateInput
  }

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    OR?: paymentScalarWhereWithAggregatesInput[]
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payment"> | number
    factura?: IntWithAggregatesFilter<"payment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"payment"> | Date | string
  }

  export type interactionsWhereInput = {
    AND?: interactionsWhereInput | interactionsWhereInput[]
    OR?: interactionsWhereInput[]
    NOT?: interactionsWhereInput | interactionsWhereInput[]
    id?: IntFilter<"interactions"> | number
    accion?: StringFilter<"interactions"> | string
    paymentId?: IntNullableFilter<"interactions"> | number | null
    interaction_TypeId?: IntFilter<"interactions"> | number
    createdAt?: DateTimeFilter<"interactions"> | Date | string
    payment?: XOR<PaymentNullableScalarRelationFilter, paymentWhereInput> | null
    interaction_Type?: XOR<Interaction_TypeNullableScalarRelationFilter, interaction_TypeWhereInput> | null
  }

  export type interactionsOrderByWithRelationInput = {
    id?: SortOrder
    accion?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    interaction_TypeId?: SortOrder
    createdAt?: SortOrder
    payment?: paymentOrderByWithRelationInput
    interaction_Type?: interaction_TypeOrderByWithRelationInput
  }

  export type interactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: interactionsWhereInput | interactionsWhereInput[]
    OR?: interactionsWhereInput[]
    NOT?: interactionsWhereInput | interactionsWhereInput[]
    accion?: StringFilter<"interactions"> | string
    paymentId?: IntNullableFilter<"interactions"> | number | null
    interaction_TypeId?: IntFilter<"interactions"> | number
    createdAt?: DateTimeFilter<"interactions"> | Date | string
    payment?: XOR<PaymentNullableScalarRelationFilter, paymentWhereInput> | null
    interaction_Type?: XOR<Interaction_TypeNullableScalarRelationFilter, interaction_TypeWhereInput> | null
  }, "id">

  export type interactionsOrderByWithAggregationInput = {
    id?: SortOrder
    accion?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    interaction_TypeId?: SortOrder
    createdAt?: SortOrder
    _count?: interactionsCountOrderByAggregateInput
    _avg?: interactionsAvgOrderByAggregateInput
    _max?: interactionsMaxOrderByAggregateInput
    _min?: interactionsMinOrderByAggregateInput
    _sum?: interactionsSumOrderByAggregateInput
  }

  export type interactionsScalarWhereWithAggregatesInput = {
    AND?: interactionsScalarWhereWithAggregatesInput | interactionsScalarWhereWithAggregatesInput[]
    OR?: interactionsScalarWhereWithAggregatesInput[]
    NOT?: interactionsScalarWhereWithAggregatesInput | interactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"interactions"> | number
    accion?: StringWithAggregatesFilter<"interactions"> | string
    paymentId?: IntNullableWithAggregatesFilter<"interactions"> | number | null
    interaction_TypeId?: IntWithAggregatesFilter<"interactions"> | number
    createdAt?: DateTimeWithAggregatesFilter<"interactions"> | Date | string
  }

  export type mailsWhereInput = {
    AND?: mailsWhereInput | mailsWhereInput[]
    OR?: mailsWhereInput[]
    NOT?: mailsWhereInput | mailsWhereInput[]
    id?: IntFilter<"mails"> | number
    accion?: StringFilter<"mails"> | string
    nombre?: StringFilter<"mails"> | string
    cedula?: StringFilter<"mails"> | string
    createdAt?: DateTimeFilter<"mails"> | Date | string
    msj?: StringFilter<"mails"> | string
  }

  export type mailsOrderByWithRelationInput = {
    id?: SortOrder
    accion?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    createdAt?: SortOrder
    msj?: SortOrder
  }

  export type mailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mailsWhereInput | mailsWhereInput[]
    OR?: mailsWhereInput[]
    NOT?: mailsWhereInput | mailsWhereInput[]
    accion?: StringFilter<"mails"> | string
    nombre?: StringFilter<"mails"> | string
    cedula?: StringFilter<"mails"> | string
    createdAt?: DateTimeFilter<"mails"> | Date | string
    msj?: StringFilter<"mails"> | string
  }, "id">

  export type mailsOrderByWithAggregationInput = {
    id?: SortOrder
    accion?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    createdAt?: SortOrder
    msj?: SortOrder
    _count?: mailsCountOrderByAggregateInput
    _avg?: mailsAvgOrderByAggregateInput
    _max?: mailsMaxOrderByAggregateInput
    _min?: mailsMinOrderByAggregateInput
    _sum?: mailsSumOrderByAggregateInput
  }

  export type mailsScalarWhereWithAggregatesInput = {
    AND?: mailsScalarWhereWithAggregatesInput | mailsScalarWhereWithAggregatesInput[]
    OR?: mailsScalarWhereWithAggregatesInput[]
    NOT?: mailsScalarWhereWithAggregatesInput | mailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mails"> | number
    accion?: StringWithAggregatesFilter<"mails"> | string
    nombre?: StringWithAggregatesFilter<"mails"> | string
    cedula?: StringWithAggregatesFilter<"mails"> | string
    createdAt?: DateTimeWithAggregatesFilter<"mails"> | Date | string
    msj?: StringWithAggregatesFilter<"mails"> | string
  }

  export type datos_actualizadosWhereInput = {
    AND?: datos_actualizadosWhereInput | datos_actualizadosWhereInput[]
    OR?: datos_actualizadosWhereInput[]
    NOT?: datos_actualizadosWhereInput | datos_actualizadosWhereInput[]
    id?: IntFilter<"datos_actualizados"> | number
    accion?: IntFilter<"datos_actualizados"> | number
    tipo_socio?: IntFilter<"datos_actualizados"> | number
    nombres?: StringFilter<"datos_actualizados"> | string
    apellidos?: StringFilter<"datos_actualizados"> | string
    cedula?: IntFilter<"datos_actualizados"> | number
    parentesco?: StringFilter<"datos_actualizados"> | string
    rif?: IntFilter<"datos_actualizados"> | number
    sexo?: StringFilter<"datos_actualizados"> | string
    profesion?: StringFilter<"datos_actualizados"> | string
    nacionalidad?: StringFilter<"datos_actualizados"> | string
    edo_civil?: StringFilter<"datos_actualizados"> | string
    fecha_nacimiento?: StringFilter<"datos_actualizados"> | string
    lugar_nacimiento?: StringFilter<"datos_actualizados"> | string
    residencia?: StringFilter<"datos_actualizados"> | string
    telefono_celular?: StringFilter<"datos_actualizados"> | string
    telofono_hogar?: StringFilter<"datos_actualizados"> | string
    telefono_trabajo?: StringFilter<"datos_actualizados"> | string
  }

  export type datos_actualizadosOrderByWithRelationInput = {
    id?: SortOrder
    accion?: SortOrder
    tipo_socio?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    cedula?: SortOrder
    parentesco?: SortOrder
    rif?: SortOrder
    sexo?: SortOrder
    profesion?: SortOrder
    nacionalidad?: SortOrder
    edo_civil?: SortOrder
    fecha_nacimiento?: SortOrder
    lugar_nacimiento?: SortOrder
    residencia?: SortOrder
    telefono_celular?: SortOrder
    telofono_hogar?: SortOrder
    telefono_trabajo?: SortOrder
  }

  export type datos_actualizadosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: datos_actualizadosWhereInput | datos_actualizadosWhereInput[]
    OR?: datos_actualizadosWhereInput[]
    NOT?: datos_actualizadosWhereInput | datos_actualizadosWhereInput[]
    accion?: IntFilter<"datos_actualizados"> | number
    tipo_socio?: IntFilter<"datos_actualizados"> | number
    nombres?: StringFilter<"datos_actualizados"> | string
    apellidos?: StringFilter<"datos_actualizados"> | string
    cedula?: IntFilter<"datos_actualizados"> | number
    parentesco?: StringFilter<"datos_actualizados"> | string
    rif?: IntFilter<"datos_actualizados"> | number
    sexo?: StringFilter<"datos_actualizados"> | string
    profesion?: StringFilter<"datos_actualizados"> | string
    nacionalidad?: StringFilter<"datos_actualizados"> | string
    edo_civil?: StringFilter<"datos_actualizados"> | string
    fecha_nacimiento?: StringFilter<"datos_actualizados"> | string
    lugar_nacimiento?: StringFilter<"datos_actualizados"> | string
    residencia?: StringFilter<"datos_actualizados"> | string
    telefono_celular?: StringFilter<"datos_actualizados"> | string
    telofono_hogar?: StringFilter<"datos_actualizados"> | string
    telefono_trabajo?: StringFilter<"datos_actualizados"> | string
  }, "id">

  export type datos_actualizadosOrderByWithAggregationInput = {
    id?: SortOrder
    accion?: SortOrder
    tipo_socio?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    cedula?: SortOrder
    parentesco?: SortOrder
    rif?: SortOrder
    sexo?: SortOrder
    profesion?: SortOrder
    nacionalidad?: SortOrder
    edo_civil?: SortOrder
    fecha_nacimiento?: SortOrder
    lugar_nacimiento?: SortOrder
    residencia?: SortOrder
    telefono_celular?: SortOrder
    telofono_hogar?: SortOrder
    telefono_trabajo?: SortOrder
    _count?: datos_actualizadosCountOrderByAggregateInput
    _avg?: datos_actualizadosAvgOrderByAggregateInput
    _max?: datos_actualizadosMaxOrderByAggregateInput
    _min?: datos_actualizadosMinOrderByAggregateInput
    _sum?: datos_actualizadosSumOrderByAggregateInput
  }

  export type datos_actualizadosScalarWhereWithAggregatesInput = {
    AND?: datos_actualizadosScalarWhereWithAggregatesInput | datos_actualizadosScalarWhereWithAggregatesInput[]
    OR?: datos_actualizadosScalarWhereWithAggregatesInput[]
    NOT?: datos_actualizadosScalarWhereWithAggregatesInput | datos_actualizadosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"datos_actualizados"> | number
    accion?: IntWithAggregatesFilter<"datos_actualizados"> | number
    tipo_socio?: IntWithAggregatesFilter<"datos_actualizados"> | number
    nombres?: StringWithAggregatesFilter<"datos_actualizados"> | string
    apellidos?: StringWithAggregatesFilter<"datos_actualizados"> | string
    cedula?: IntWithAggregatesFilter<"datos_actualizados"> | number
    parentesco?: StringWithAggregatesFilter<"datos_actualizados"> | string
    rif?: IntWithAggregatesFilter<"datos_actualizados"> | number
    sexo?: StringWithAggregatesFilter<"datos_actualizados"> | string
    profesion?: StringWithAggregatesFilter<"datos_actualizados"> | string
    nacionalidad?: StringWithAggregatesFilter<"datos_actualizados"> | string
    edo_civil?: StringWithAggregatesFilter<"datos_actualizados"> | string
    fecha_nacimiento?: StringWithAggregatesFilter<"datos_actualizados"> | string
    lugar_nacimiento?: StringWithAggregatesFilter<"datos_actualizados"> | string
    residencia?: StringWithAggregatesFilter<"datos_actualizados"> | string
    telefono_celular?: StringWithAggregatesFilter<"datos_actualizados"> | string
    telofono_hogar?: StringWithAggregatesFilter<"datos_actualizados"> | string
    telefono_trabajo?: StringWithAggregatesFilter<"datos_actualizados"> | string
  }

  export type UsersCreateInput = {
    username: string
    email: string
    password: string
    first_contact_lote?: first_contact_loteCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    first_contact_lote?: first_contact_loteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_contact_lote?: first_contact_loteUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_contact_lote?: first_contact_loteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type first_contact_loteCreateInput = {
    createdAt?: Date | string
    accion: string
    contactAvailable?: boolean
    contact?: boolean
    contact_createdAt?: Date | string | null
    response?: boolean
    response_createdAt?: Date | string | null
    contactCall?: boolean
    contactCall_createdAt?: Date | string | null
    responseCall?: boolean
    responseCall_createdAt?: Date | string | null
    PromisePayment?: boolean
    Payment?: boolean
    PaymentId?: number | null
    PromiseNonPayment?: boolean
    note?: string | null
    caseStatus?: boolean
    cuotasIniciales?: number
    user: UsersCreateNestedOneWithoutFirst_contact_loteInput
  }

  export type first_contact_loteUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    accion: string
    contactAvailable?: boolean
    contact?: boolean
    contact_createdAt?: Date | string | null
    response?: boolean
    response_createdAt?: Date | string | null
    contactCall?: boolean
    contactCall_createdAt?: Date | string | null
    responseCall?: boolean
    responseCall_createdAt?: Date | string | null
    PromisePayment?: boolean
    Payment?: boolean
    PaymentId?: number | null
    PromiseNonPayment?: boolean
    note?: string | null
    caseStatus?: boolean
    cuotasIniciales?: number
  }

  export type first_contact_loteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    contactAvailable?: BoolFieldUpdateOperationsInput | boolean
    contact?: BoolFieldUpdateOperationsInput | boolean
    contact_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response?: BoolFieldUpdateOperationsInput | boolean
    response_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactCall?: BoolFieldUpdateOperationsInput | boolean
    contactCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseCall?: BoolFieldUpdateOperationsInput | boolean
    responseCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PromisePayment?: BoolFieldUpdateOperationsInput | boolean
    Payment?: BoolFieldUpdateOperationsInput | boolean
    PaymentId?: NullableIntFieldUpdateOperationsInput | number | null
    PromiseNonPayment?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    caseStatus?: BoolFieldUpdateOperationsInput | boolean
    cuotasIniciales?: IntFieldUpdateOperationsInput | number
    user?: UsersUpdateOneRequiredWithoutFirst_contact_loteNestedInput
  }

  export type first_contact_loteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    contactAvailable?: BoolFieldUpdateOperationsInput | boolean
    contact?: BoolFieldUpdateOperationsInput | boolean
    contact_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response?: BoolFieldUpdateOperationsInput | boolean
    response_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactCall?: BoolFieldUpdateOperationsInput | boolean
    contactCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseCall?: BoolFieldUpdateOperationsInput | boolean
    responseCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PromisePayment?: BoolFieldUpdateOperationsInput | boolean
    Payment?: BoolFieldUpdateOperationsInput | boolean
    PaymentId?: NullableIntFieldUpdateOperationsInput | number | null
    PromiseNonPayment?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    caseStatus?: BoolFieldUpdateOperationsInput | boolean
    cuotasIniciales?: IntFieldUpdateOperationsInput | number
  }

  export type first_contact_loteCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    accion: string
    contactAvailable?: boolean
    contact?: boolean
    contact_createdAt?: Date | string | null
    response?: boolean
    response_createdAt?: Date | string | null
    contactCall?: boolean
    contactCall_createdAt?: Date | string | null
    responseCall?: boolean
    responseCall_createdAt?: Date | string | null
    PromisePayment?: boolean
    Payment?: boolean
    PaymentId?: number | null
    PromiseNonPayment?: boolean
    note?: string | null
    caseStatus?: boolean
    cuotasIniciales?: number
  }

  export type first_contact_loteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    contactAvailable?: BoolFieldUpdateOperationsInput | boolean
    contact?: BoolFieldUpdateOperationsInput | boolean
    contact_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response?: BoolFieldUpdateOperationsInput | boolean
    response_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactCall?: BoolFieldUpdateOperationsInput | boolean
    contactCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseCall?: BoolFieldUpdateOperationsInput | boolean
    responseCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PromisePayment?: BoolFieldUpdateOperationsInput | boolean
    Payment?: BoolFieldUpdateOperationsInput | boolean
    PaymentId?: NullableIntFieldUpdateOperationsInput | number | null
    PromiseNonPayment?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    caseStatus?: BoolFieldUpdateOperationsInput | boolean
    cuotasIniciales?: IntFieldUpdateOperationsInput | number
  }

  export type first_contact_loteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    contactAvailable?: BoolFieldUpdateOperationsInput | boolean
    contact?: BoolFieldUpdateOperationsInput | boolean
    contact_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response?: BoolFieldUpdateOperationsInput | boolean
    response_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactCall?: BoolFieldUpdateOperationsInput | boolean
    contactCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseCall?: BoolFieldUpdateOperationsInput | boolean
    responseCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PromisePayment?: BoolFieldUpdateOperationsInput | boolean
    Payment?: BoolFieldUpdateOperationsInput | boolean
    PaymentId?: NullableIntFieldUpdateOperationsInput | number | null
    PromiseNonPayment?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    caseStatus?: BoolFieldUpdateOperationsInput | boolean
    cuotasIniciales?: IntFieldUpdateOperationsInput | number
  }

  export type interaction_TypeCreateInput = {
    type: string
    interactions?: interactionsCreateNestedManyWithoutInteraction_TypeInput
  }

  export type interaction_TypeUncheckedCreateInput = {
    id?: number
    type: string
    interactions?: interactionsUncheckedCreateNestedManyWithoutInteraction_TypeInput
  }

  export type interaction_TypeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    interactions?: interactionsUpdateManyWithoutInteraction_TypeNestedInput
  }

  export type interaction_TypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    interactions?: interactionsUncheckedUpdateManyWithoutInteraction_TypeNestedInput
  }

  export type interaction_TypeCreateManyInput = {
    id?: number
    type: string
  }

  export type interaction_TypeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type interaction_TypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type paymentCreateInput = {
    factura: number
    createdAt?: Date | string
    interaction?: interactionsCreateNestedManyWithoutPaymentInput
  }

  export type paymentUncheckedCreateInput = {
    id?: number
    factura: number
    createdAt?: Date | string
    interaction?: interactionsUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type paymentUpdateInput = {
    factura?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interaction?: interactionsUpdateManyWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    factura?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interaction?: interactionsUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type paymentCreateManyInput = {
    id?: number
    factura: number
    createdAt?: Date | string
  }

  export type paymentUpdateManyMutationInput = {
    factura?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    factura?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type interactionsCreateInput = {
    accion: string
    createdAt?: Date | string
    payment?: paymentCreateNestedOneWithoutInteractionInput
    interaction_Type?: interaction_TypeCreateNestedOneWithoutInteractionsInput
  }

  export type interactionsUncheckedCreateInput = {
    id?: number
    accion: string
    paymentId?: number | null
    interaction_TypeId: number
    createdAt?: Date | string
  }

  export type interactionsUpdateInput = {
    accion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateOneWithoutInteractionNestedInput
    interaction_Type?: interaction_TypeUpdateOneWithoutInteractionsNestedInput
  }

  export type interactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    interaction_TypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type interactionsCreateManyInput = {
    id?: number
    accion: string
    paymentId?: number | null
    interaction_TypeId: number
    createdAt?: Date | string
  }

  export type interactionsUpdateManyMutationInput = {
    accion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type interactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    interaction_TypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mailsCreateInput = {
    accion: string
    nombre: string
    cedula: string
    createdAt?: Date | string
    msj: string
  }

  export type mailsUncheckedCreateInput = {
    id?: number
    accion: string
    nombre: string
    cedula: string
    createdAt?: Date | string
    msj: string
  }

  export type mailsUpdateInput = {
    accion?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msj?: StringFieldUpdateOperationsInput | string
  }

  export type mailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msj?: StringFieldUpdateOperationsInput | string
  }

  export type mailsCreateManyInput = {
    id?: number
    accion: string
    nombre: string
    cedula: string
    createdAt?: Date | string
    msj: string
  }

  export type mailsUpdateManyMutationInput = {
    accion?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msj?: StringFieldUpdateOperationsInput | string
  }

  export type mailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msj?: StringFieldUpdateOperationsInput | string
  }

  export type datos_actualizadosCreateInput = {
    accion: number
    tipo_socio: number
    nombres: string
    apellidos: string
    cedula: number
    parentesco: string
    rif: number
    sexo: string
    profesion: string
    nacionalidad: string
    edo_civil: string
    fecha_nacimiento: string
    lugar_nacimiento: string
    residencia: string
    telefono_celular: string
    telofono_hogar: string
    telefono_trabajo: string
  }

  export type datos_actualizadosUncheckedCreateInput = {
    id?: number
    accion: number
    tipo_socio: number
    nombres: string
    apellidos: string
    cedula: number
    parentesco: string
    rif: number
    sexo: string
    profesion: string
    nacionalidad: string
    edo_civil: string
    fecha_nacimiento: string
    lugar_nacimiento: string
    residencia: string
    telefono_celular: string
    telofono_hogar: string
    telefono_trabajo: string
  }

  export type datos_actualizadosUpdateInput = {
    accion?: IntFieldUpdateOperationsInput | number
    tipo_socio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    cedula?: IntFieldUpdateOperationsInput | number
    parentesco?: StringFieldUpdateOperationsInput | string
    rif?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    profesion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    edo_civil?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: StringFieldUpdateOperationsInput | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    residencia?: StringFieldUpdateOperationsInput | string
    telefono_celular?: StringFieldUpdateOperationsInput | string
    telofono_hogar?: StringFieldUpdateOperationsInput | string
    telefono_trabajo?: StringFieldUpdateOperationsInput | string
  }

  export type datos_actualizadosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: IntFieldUpdateOperationsInput | number
    tipo_socio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    cedula?: IntFieldUpdateOperationsInput | number
    parentesco?: StringFieldUpdateOperationsInput | string
    rif?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    profesion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    edo_civil?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: StringFieldUpdateOperationsInput | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    residencia?: StringFieldUpdateOperationsInput | string
    telefono_celular?: StringFieldUpdateOperationsInput | string
    telofono_hogar?: StringFieldUpdateOperationsInput | string
    telefono_trabajo?: StringFieldUpdateOperationsInput | string
  }

  export type datos_actualizadosCreateManyInput = {
    id?: number
    accion: number
    tipo_socio: number
    nombres: string
    apellidos: string
    cedula: number
    parentesco: string
    rif: number
    sexo: string
    profesion: string
    nacionalidad: string
    edo_civil: string
    fecha_nacimiento: string
    lugar_nacimiento: string
    residencia: string
    telefono_celular: string
    telofono_hogar: string
    telefono_trabajo: string
  }

  export type datos_actualizadosUpdateManyMutationInput = {
    accion?: IntFieldUpdateOperationsInput | number
    tipo_socio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    cedula?: IntFieldUpdateOperationsInput | number
    parentesco?: StringFieldUpdateOperationsInput | string
    rif?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    profesion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    edo_civil?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: StringFieldUpdateOperationsInput | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    residencia?: StringFieldUpdateOperationsInput | string
    telefono_celular?: StringFieldUpdateOperationsInput | string
    telofono_hogar?: StringFieldUpdateOperationsInput | string
    telefono_trabajo?: StringFieldUpdateOperationsInput | string
  }

  export type datos_actualizadosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: IntFieldUpdateOperationsInput | number
    tipo_socio?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    cedula?: IntFieldUpdateOperationsInput | number
    parentesco?: StringFieldUpdateOperationsInput | string
    rif?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    profesion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    edo_civil?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: StringFieldUpdateOperationsInput | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    residencia?: StringFieldUpdateOperationsInput | string
    telefono_celular?: StringFieldUpdateOperationsInput | string
    telofono_hogar?: StringFieldUpdateOperationsInput | string
    telefono_trabajo?: StringFieldUpdateOperationsInput | string
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

  export type First_contact_loteListRelationFilter = {
    every?: first_contact_loteWhereInput
    some?: first_contact_loteWhereInput
    none?: first_contact_loteWhereInput
  }

  export type first_contact_loteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type first_contact_loteCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    accion?: SortOrder
    contactAvailable?: SortOrder
    contact?: SortOrder
    contact_createdAt?: SortOrder
    response?: SortOrder
    response_createdAt?: SortOrder
    contactCall?: SortOrder
    contactCall_createdAt?: SortOrder
    responseCall?: SortOrder
    responseCall_createdAt?: SortOrder
    PromisePayment?: SortOrder
    Payment?: SortOrder
    PaymentId?: SortOrder
    PromiseNonPayment?: SortOrder
    note?: SortOrder
    caseStatus?: SortOrder
    cuotasIniciales?: SortOrder
  }

  export type first_contact_loteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    PaymentId?: SortOrder
    cuotasIniciales?: SortOrder
  }

  export type first_contact_loteMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    accion?: SortOrder
    contactAvailable?: SortOrder
    contact?: SortOrder
    contact_createdAt?: SortOrder
    response?: SortOrder
    response_createdAt?: SortOrder
    contactCall?: SortOrder
    contactCall_createdAt?: SortOrder
    responseCall?: SortOrder
    responseCall_createdAt?: SortOrder
    PromisePayment?: SortOrder
    Payment?: SortOrder
    PaymentId?: SortOrder
    PromiseNonPayment?: SortOrder
    note?: SortOrder
    caseStatus?: SortOrder
    cuotasIniciales?: SortOrder
  }

  export type first_contact_loteMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    accion?: SortOrder
    contactAvailable?: SortOrder
    contact?: SortOrder
    contact_createdAt?: SortOrder
    response?: SortOrder
    response_createdAt?: SortOrder
    contactCall?: SortOrder
    contactCall_createdAt?: SortOrder
    responseCall?: SortOrder
    responseCall_createdAt?: SortOrder
    PromisePayment?: SortOrder
    Payment?: SortOrder
    PaymentId?: SortOrder
    PromiseNonPayment?: SortOrder
    note?: SortOrder
    caseStatus?: SortOrder
    cuotasIniciales?: SortOrder
  }

  export type first_contact_loteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    PaymentId?: SortOrder
    cuotasIniciales?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type InteractionsListRelationFilter = {
    every?: interactionsWhereInput
    some?: interactionsWhereInput
    none?: interactionsWhereInput
  }

  export type interactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type interaction_TypeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type interaction_TypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type interaction_TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type interaction_TypeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type interaction_TypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type paymentCountOrderByAggregateInput = {
    id?: SortOrder
    factura?: SortOrder
    createdAt?: SortOrder
  }

  export type paymentAvgOrderByAggregateInput = {
    id?: SortOrder
    factura?: SortOrder
  }

  export type paymentMaxOrderByAggregateInput = {
    id?: SortOrder
    factura?: SortOrder
    createdAt?: SortOrder
  }

  export type paymentMinOrderByAggregateInput = {
    id?: SortOrder
    factura?: SortOrder
    createdAt?: SortOrder
  }

  export type paymentSumOrderByAggregateInput = {
    id?: SortOrder
    factura?: SortOrder
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: paymentWhereInput | null
    isNot?: paymentWhereInput | null
  }

  export type Interaction_TypeNullableScalarRelationFilter = {
    is?: interaction_TypeWhereInput | null
    isNot?: interaction_TypeWhereInput | null
  }

  export type interactionsCountOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    paymentId?: SortOrder
    interaction_TypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type interactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    interaction_TypeId?: SortOrder
  }

  export type interactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    paymentId?: SortOrder
    interaction_TypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type interactionsMinOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    paymentId?: SortOrder
    interaction_TypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type interactionsSumOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    interaction_TypeId?: SortOrder
  }

  export type mailsCountOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    createdAt?: SortOrder
    msj?: SortOrder
  }

  export type mailsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mailsMaxOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    createdAt?: SortOrder
    msj?: SortOrder
  }

  export type mailsMinOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    createdAt?: SortOrder
    msj?: SortOrder
  }

  export type mailsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type datos_actualizadosCountOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    tipo_socio?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    cedula?: SortOrder
    parentesco?: SortOrder
    rif?: SortOrder
    sexo?: SortOrder
    profesion?: SortOrder
    nacionalidad?: SortOrder
    edo_civil?: SortOrder
    fecha_nacimiento?: SortOrder
    lugar_nacimiento?: SortOrder
    residencia?: SortOrder
    telefono_celular?: SortOrder
    telofono_hogar?: SortOrder
    telefono_trabajo?: SortOrder
  }

  export type datos_actualizadosAvgOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    tipo_socio?: SortOrder
    cedula?: SortOrder
    rif?: SortOrder
  }

  export type datos_actualizadosMaxOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    tipo_socio?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    cedula?: SortOrder
    parentesco?: SortOrder
    rif?: SortOrder
    sexo?: SortOrder
    profesion?: SortOrder
    nacionalidad?: SortOrder
    edo_civil?: SortOrder
    fecha_nacimiento?: SortOrder
    lugar_nacimiento?: SortOrder
    residencia?: SortOrder
    telefono_celular?: SortOrder
    telofono_hogar?: SortOrder
    telefono_trabajo?: SortOrder
  }

  export type datos_actualizadosMinOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    tipo_socio?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    cedula?: SortOrder
    parentesco?: SortOrder
    rif?: SortOrder
    sexo?: SortOrder
    profesion?: SortOrder
    nacionalidad?: SortOrder
    edo_civil?: SortOrder
    fecha_nacimiento?: SortOrder
    lugar_nacimiento?: SortOrder
    residencia?: SortOrder
    telefono_celular?: SortOrder
    telofono_hogar?: SortOrder
    telefono_trabajo?: SortOrder
  }

  export type datos_actualizadosSumOrderByAggregateInput = {
    id?: SortOrder
    accion?: SortOrder
    tipo_socio?: SortOrder
    cedula?: SortOrder
    rif?: SortOrder
  }

  export type first_contact_loteCreateNestedManyWithoutUserInput = {
    create?: XOR<first_contact_loteCreateWithoutUserInput, first_contact_loteUncheckedCreateWithoutUserInput> | first_contact_loteCreateWithoutUserInput[] | first_contact_loteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: first_contact_loteCreateOrConnectWithoutUserInput | first_contact_loteCreateOrConnectWithoutUserInput[]
    createMany?: first_contact_loteCreateManyUserInputEnvelope
    connect?: first_contact_loteWhereUniqueInput | first_contact_loteWhereUniqueInput[]
  }

  export type first_contact_loteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<first_contact_loteCreateWithoutUserInput, first_contact_loteUncheckedCreateWithoutUserInput> | first_contact_loteCreateWithoutUserInput[] | first_contact_loteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: first_contact_loteCreateOrConnectWithoutUserInput | first_contact_loteCreateOrConnectWithoutUserInput[]
    createMany?: first_contact_loteCreateManyUserInputEnvelope
    connect?: first_contact_loteWhereUniqueInput | first_contact_loteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type first_contact_loteUpdateManyWithoutUserNestedInput = {
    create?: XOR<first_contact_loteCreateWithoutUserInput, first_contact_loteUncheckedCreateWithoutUserInput> | first_contact_loteCreateWithoutUserInput[] | first_contact_loteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: first_contact_loteCreateOrConnectWithoutUserInput | first_contact_loteCreateOrConnectWithoutUserInput[]
    upsert?: first_contact_loteUpsertWithWhereUniqueWithoutUserInput | first_contact_loteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: first_contact_loteCreateManyUserInputEnvelope
    set?: first_contact_loteWhereUniqueInput | first_contact_loteWhereUniqueInput[]
    disconnect?: first_contact_loteWhereUniqueInput | first_contact_loteWhereUniqueInput[]
    delete?: first_contact_loteWhereUniqueInput | first_contact_loteWhereUniqueInput[]
    connect?: first_contact_loteWhereUniqueInput | first_contact_loteWhereUniqueInput[]
    update?: first_contact_loteUpdateWithWhereUniqueWithoutUserInput | first_contact_loteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: first_contact_loteUpdateManyWithWhereWithoutUserInput | first_contact_loteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: first_contact_loteScalarWhereInput | first_contact_loteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type first_contact_loteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<first_contact_loteCreateWithoutUserInput, first_contact_loteUncheckedCreateWithoutUserInput> | first_contact_loteCreateWithoutUserInput[] | first_contact_loteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: first_contact_loteCreateOrConnectWithoutUserInput | first_contact_loteCreateOrConnectWithoutUserInput[]
    upsert?: first_contact_loteUpsertWithWhereUniqueWithoutUserInput | first_contact_loteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: first_contact_loteCreateManyUserInputEnvelope
    set?: first_contact_loteWhereUniqueInput | first_contact_loteWhereUniqueInput[]
    disconnect?: first_contact_loteWhereUniqueInput | first_contact_loteWhereUniqueInput[]
    delete?: first_contact_loteWhereUniqueInput | first_contact_loteWhereUniqueInput[]
    connect?: first_contact_loteWhereUniqueInput | first_contact_loteWhereUniqueInput[]
    update?: first_contact_loteUpdateWithWhereUniqueWithoutUserInput | first_contact_loteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: first_contact_loteUpdateManyWithWhereWithoutUserInput | first_contact_loteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: first_contact_loteScalarWhereInput | first_contact_loteScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutFirst_contact_loteInput = {
    create?: XOR<UsersCreateWithoutFirst_contact_loteInput, UsersUncheckedCreateWithoutFirst_contact_loteInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFirst_contact_loteInput
    connect?: UsersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsersUpdateOneRequiredWithoutFirst_contact_loteNestedInput = {
    create?: XOR<UsersCreateWithoutFirst_contact_loteInput, UsersUncheckedCreateWithoutFirst_contact_loteInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFirst_contact_loteInput
    upsert?: UsersUpsertWithoutFirst_contact_loteInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFirst_contact_loteInput, UsersUpdateWithoutFirst_contact_loteInput>, UsersUncheckedUpdateWithoutFirst_contact_loteInput>
  }

  export type interactionsCreateNestedManyWithoutInteraction_TypeInput = {
    create?: XOR<interactionsCreateWithoutInteraction_TypeInput, interactionsUncheckedCreateWithoutInteraction_TypeInput> | interactionsCreateWithoutInteraction_TypeInput[] | interactionsUncheckedCreateWithoutInteraction_TypeInput[]
    connectOrCreate?: interactionsCreateOrConnectWithoutInteraction_TypeInput | interactionsCreateOrConnectWithoutInteraction_TypeInput[]
    createMany?: interactionsCreateManyInteraction_TypeInputEnvelope
    connect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
  }

  export type interactionsUncheckedCreateNestedManyWithoutInteraction_TypeInput = {
    create?: XOR<interactionsCreateWithoutInteraction_TypeInput, interactionsUncheckedCreateWithoutInteraction_TypeInput> | interactionsCreateWithoutInteraction_TypeInput[] | interactionsUncheckedCreateWithoutInteraction_TypeInput[]
    connectOrCreate?: interactionsCreateOrConnectWithoutInteraction_TypeInput | interactionsCreateOrConnectWithoutInteraction_TypeInput[]
    createMany?: interactionsCreateManyInteraction_TypeInputEnvelope
    connect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
  }

  export type interactionsUpdateManyWithoutInteraction_TypeNestedInput = {
    create?: XOR<interactionsCreateWithoutInteraction_TypeInput, interactionsUncheckedCreateWithoutInteraction_TypeInput> | interactionsCreateWithoutInteraction_TypeInput[] | interactionsUncheckedCreateWithoutInteraction_TypeInput[]
    connectOrCreate?: interactionsCreateOrConnectWithoutInteraction_TypeInput | interactionsCreateOrConnectWithoutInteraction_TypeInput[]
    upsert?: interactionsUpsertWithWhereUniqueWithoutInteraction_TypeInput | interactionsUpsertWithWhereUniqueWithoutInteraction_TypeInput[]
    createMany?: interactionsCreateManyInteraction_TypeInputEnvelope
    set?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    disconnect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    delete?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    connect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    update?: interactionsUpdateWithWhereUniqueWithoutInteraction_TypeInput | interactionsUpdateWithWhereUniqueWithoutInteraction_TypeInput[]
    updateMany?: interactionsUpdateManyWithWhereWithoutInteraction_TypeInput | interactionsUpdateManyWithWhereWithoutInteraction_TypeInput[]
    deleteMany?: interactionsScalarWhereInput | interactionsScalarWhereInput[]
  }

  export type interactionsUncheckedUpdateManyWithoutInteraction_TypeNestedInput = {
    create?: XOR<interactionsCreateWithoutInteraction_TypeInput, interactionsUncheckedCreateWithoutInteraction_TypeInput> | interactionsCreateWithoutInteraction_TypeInput[] | interactionsUncheckedCreateWithoutInteraction_TypeInput[]
    connectOrCreate?: interactionsCreateOrConnectWithoutInteraction_TypeInput | interactionsCreateOrConnectWithoutInteraction_TypeInput[]
    upsert?: interactionsUpsertWithWhereUniqueWithoutInteraction_TypeInput | interactionsUpsertWithWhereUniqueWithoutInteraction_TypeInput[]
    createMany?: interactionsCreateManyInteraction_TypeInputEnvelope
    set?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    disconnect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    delete?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    connect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    update?: interactionsUpdateWithWhereUniqueWithoutInteraction_TypeInput | interactionsUpdateWithWhereUniqueWithoutInteraction_TypeInput[]
    updateMany?: interactionsUpdateManyWithWhereWithoutInteraction_TypeInput | interactionsUpdateManyWithWhereWithoutInteraction_TypeInput[]
    deleteMany?: interactionsScalarWhereInput | interactionsScalarWhereInput[]
  }

  export type interactionsCreateNestedManyWithoutPaymentInput = {
    create?: XOR<interactionsCreateWithoutPaymentInput, interactionsUncheckedCreateWithoutPaymentInput> | interactionsCreateWithoutPaymentInput[] | interactionsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: interactionsCreateOrConnectWithoutPaymentInput | interactionsCreateOrConnectWithoutPaymentInput[]
    createMany?: interactionsCreateManyPaymentInputEnvelope
    connect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
  }

  export type interactionsUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<interactionsCreateWithoutPaymentInput, interactionsUncheckedCreateWithoutPaymentInput> | interactionsCreateWithoutPaymentInput[] | interactionsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: interactionsCreateOrConnectWithoutPaymentInput | interactionsCreateOrConnectWithoutPaymentInput[]
    createMany?: interactionsCreateManyPaymentInputEnvelope
    connect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
  }

  export type interactionsUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<interactionsCreateWithoutPaymentInput, interactionsUncheckedCreateWithoutPaymentInput> | interactionsCreateWithoutPaymentInput[] | interactionsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: interactionsCreateOrConnectWithoutPaymentInput | interactionsCreateOrConnectWithoutPaymentInput[]
    upsert?: interactionsUpsertWithWhereUniqueWithoutPaymentInput | interactionsUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: interactionsCreateManyPaymentInputEnvelope
    set?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    disconnect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    delete?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    connect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    update?: interactionsUpdateWithWhereUniqueWithoutPaymentInput | interactionsUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: interactionsUpdateManyWithWhereWithoutPaymentInput | interactionsUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: interactionsScalarWhereInput | interactionsScalarWhereInput[]
  }

  export type interactionsUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<interactionsCreateWithoutPaymentInput, interactionsUncheckedCreateWithoutPaymentInput> | interactionsCreateWithoutPaymentInput[] | interactionsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: interactionsCreateOrConnectWithoutPaymentInput | interactionsCreateOrConnectWithoutPaymentInput[]
    upsert?: interactionsUpsertWithWhereUniqueWithoutPaymentInput | interactionsUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: interactionsCreateManyPaymentInputEnvelope
    set?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    disconnect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    delete?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    connect?: interactionsWhereUniqueInput | interactionsWhereUniqueInput[]
    update?: interactionsUpdateWithWhereUniqueWithoutPaymentInput | interactionsUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: interactionsUpdateManyWithWhereWithoutPaymentInput | interactionsUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: interactionsScalarWhereInput | interactionsScalarWhereInput[]
  }

  export type paymentCreateNestedOneWithoutInteractionInput = {
    create?: XOR<paymentCreateWithoutInteractionInput, paymentUncheckedCreateWithoutInteractionInput>
    connectOrCreate?: paymentCreateOrConnectWithoutInteractionInput
    connect?: paymentWhereUniqueInput
  }

  export type interaction_TypeCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<interaction_TypeCreateWithoutInteractionsInput, interaction_TypeUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: interaction_TypeCreateOrConnectWithoutInteractionsInput
    connect?: interaction_TypeWhereUniqueInput
  }

  export type paymentUpdateOneWithoutInteractionNestedInput = {
    create?: XOR<paymentCreateWithoutInteractionInput, paymentUncheckedCreateWithoutInteractionInput>
    connectOrCreate?: paymentCreateOrConnectWithoutInteractionInput
    upsert?: paymentUpsertWithoutInteractionInput
    disconnect?: paymentWhereInput | boolean
    delete?: paymentWhereInput | boolean
    connect?: paymentWhereUniqueInput
    update?: XOR<XOR<paymentUpdateToOneWithWhereWithoutInteractionInput, paymentUpdateWithoutInteractionInput>, paymentUncheckedUpdateWithoutInteractionInput>
  }

  export type interaction_TypeUpdateOneWithoutInteractionsNestedInput = {
    create?: XOR<interaction_TypeCreateWithoutInteractionsInput, interaction_TypeUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: interaction_TypeCreateOrConnectWithoutInteractionsInput
    upsert?: interaction_TypeUpsertWithoutInteractionsInput
    disconnect?: interaction_TypeWhereInput | boolean
    delete?: interaction_TypeWhereInput | boolean
    connect?: interaction_TypeWhereUniqueInput
    update?: XOR<XOR<interaction_TypeUpdateToOneWithWhereWithoutInteractionsInput, interaction_TypeUpdateWithoutInteractionsInput>, interaction_TypeUncheckedUpdateWithoutInteractionsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type first_contact_loteCreateWithoutUserInput = {
    createdAt?: Date | string
    accion: string
    contactAvailable?: boolean
    contact?: boolean
    contact_createdAt?: Date | string | null
    response?: boolean
    response_createdAt?: Date | string | null
    contactCall?: boolean
    contactCall_createdAt?: Date | string | null
    responseCall?: boolean
    responseCall_createdAt?: Date | string | null
    PromisePayment?: boolean
    Payment?: boolean
    PaymentId?: number | null
    PromiseNonPayment?: boolean
    note?: string | null
    caseStatus?: boolean
    cuotasIniciales?: number
  }

  export type first_contact_loteUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    accion: string
    contactAvailable?: boolean
    contact?: boolean
    contact_createdAt?: Date | string | null
    response?: boolean
    response_createdAt?: Date | string | null
    contactCall?: boolean
    contactCall_createdAt?: Date | string | null
    responseCall?: boolean
    responseCall_createdAt?: Date | string | null
    PromisePayment?: boolean
    Payment?: boolean
    PaymentId?: number | null
    PromiseNonPayment?: boolean
    note?: string | null
    caseStatus?: boolean
    cuotasIniciales?: number
  }

  export type first_contact_loteCreateOrConnectWithoutUserInput = {
    where: first_contact_loteWhereUniqueInput
    create: XOR<first_contact_loteCreateWithoutUserInput, first_contact_loteUncheckedCreateWithoutUserInput>
  }

  export type first_contact_loteCreateManyUserInputEnvelope = {
    data: first_contact_loteCreateManyUserInput | first_contact_loteCreateManyUserInput[]
  }

  export type first_contact_loteUpsertWithWhereUniqueWithoutUserInput = {
    where: first_contact_loteWhereUniqueInput
    update: XOR<first_contact_loteUpdateWithoutUserInput, first_contact_loteUncheckedUpdateWithoutUserInput>
    create: XOR<first_contact_loteCreateWithoutUserInput, first_contact_loteUncheckedCreateWithoutUserInput>
  }

  export type first_contact_loteUpdateWithWhereUniqueWithoutUserInput = {
    where: first_contact_loteWhereUniqueInput
    data: XOR<first_contact_loteUpdateWithoutUserInput, first_contact_loteUncheckedUpdateWithoutUserInput>
  }

  export type first_contact_loteUpdateManyWithWhereWithoutUserInput = {
    where: first_contact_loteScalarWhereInput
    data: XOR<first_contact_loteUpdateManyMutationInput, first_contact_loteUncheckedUpdateManyWithoutUserInput>
  }

  export type first_contact_loteScalarWhereInput = {
    AND?: first_contact_loteScalarWhereInput | first_contact_loteScalarWhereInput[]
    OR?: first_contact_loteScalarWhereInput[]
    NOT?: first_contact_loteScalarWhereInput | first_contact_loteScalarWhereInput[]
    id?: IntFilter<"first_contact_lote"> | number
    createdAt?: DateTimeFilter<"first_contact_lote"> | Date | string
    userId?: IntFilter<"first_contact_lote"> | number
    accion?: StringFilter<"first_contact_lote"> | string
    contactAvailable?: BoolFilter<"first_contact_lote"> | boolean
    contact?: BoolFilter<"first_contact_lote"> | boolean
    contact_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    response?: BoolFilter<"first_contact_lote"> | boolean
    response_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    contactCall?: BoolFilter<"first_contact_lote"> | boolean
    contactCall_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    responseCall?: BoolFilter<"first_contact_lote"> | boolean
    responseCall_createdAt?: DateTimeNullableFilter<"first_contact_lote"> | Date | string | null
    PromisePayment?: BoolFilter<"first_contact_lote"> | boolean
    Payment?: BoolFilter<"first_contact_lote"> | boolean
    PaymentId?: IntNullableFilter<"first_contact_lote"> | number | null
    PromiseNonPayment?: BoolFilter<"first_contact_lote"> | boolean
    note?: StringNullableFilter<"first_contact_lote"> | string | null
    caseStatus?: BoolFilter<"first_contact_lote"> | boolean
    cuotasIniciales?: IntFilter<"first_contact_lote"> | number
  }

  export type UsersCreateWithoutFirst_contact_loteInput = {
    username: string
    email: string
    password: string
  }

  export type UsersUncheckedCreateWithoutFirst_contact_loteInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type UsersCreateOrConnectWithoutFirst_contact_loteInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFirst_contact_loteInput, UsersUncheckedCreateWithoutFirst_contact_loteInput>
  }

  export type UsersUpsertWithoutFirst_contact_loteInput = {
    update: XOR<UsersUpdateWithoutFirst_contact_loteInput, UsersUncheckedUpdateWithoutFirst_contact_loteInput>
    create: XOR<UsersCreateWithoutFirst_contact_loteInput, UsersUncheckedCreateWithoutFirst_contact_loteInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFirst_contact_loteInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFirst_contact_loteInput, UsersUncheckedUpdateWithoutFirst_contact_loteInput>
  }

  export type UsersUpdateWithoutFirst_contact_loteInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateWithoutFirst_contact_loteInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type interactionsCreateWithoutInteraction_TypeInput = {
    accion: string
    createdAt?: Date | string
    payment?: paymentCreateNestedOneWithoutInteractionInput
  }

  export type interactionsUncheckedCreateWithoutInteraction_TypeInput = {
    id?: number
    accion: string
    paymentId?: number | null
    createdAt?: Date | string
  }

  export type interactionsCreateOrConnectWithoutInteraction_TypeInput = {
    where: interactionsWhereUniqueInput
    create: XOR<interactionsCreateWithoutInteraction_TypeInput, interactionsUncheckedCreateWithoutInteraction_TypeInput>
  }

  export type interactionsCreateManyInteraction_TypeInputEnvelope = {
    data: interactionsCreateManyInteraction_TypeInput | interactionsCreateManyInteraction_TypeInput[]
  }

  export type interactionsUpsertWithWhereUniqueWithoutInteraction_TypeInput = {
    where: interactionsWhereUniqueInput
    update: XOR<interactionsUpdateWithoutInteraction_TypeInput, interactionsUncheckedUpdateWithoutInteraction_TypeInput>
    create: XOR<interactionsCreateWithoutInteraction_TypeInput, interactionsUncheckedCreateWithoutInteraction_TypeInput>
  }

  export type interactionsUpdateWithWhereUniqueWithoutInteraction_TypeInput = {
    where: interactionsWhereUniqueInput
    data: XOR<interactionsUpdateWithoutInteraction_TypeInput, interactionsUncheckedUpdateWithoutInteraction_TypeInput>
  }

  export type interactionsUpdateManyWithWhereWithoutInteraction_TypeInput = {
    where: interactionsScalarWhereInput
    data: XOR<interactionsUpdateManyMutationInput, interactionsUncheckedUpdateManyWithoutInteraction_TypeInput>
  }

  export type interactionsScalarWhereInput = {
    AND?: interactionsScalarWhereInput | interactionsScalarWhereInput[]
    OR?: interactionsScalarWhereInput[]
    NOT?: interactionsScalarWhereInput | interactionsScalarWhereInput[]
    id?: IntFilter<"interactions"> | number
    accion?: StringFilter<"interactions"> | string
    paymentId?: IntNullableFilter<"interactions"> | number | null
    interaction_TypeId?: IntFilter<"interactions"> | number
    createdAt?: DateTimeFilter<"interactions"> | Date | string
  }

  export type interactionsCreateWithoutPaymentInput = {
    accion: string
    createdAt?: Date | string
    interaction_Type?: interaction_TypeCreateNestedOneWithoutInteractionsInput
  }

  export type interactionsUncheckedCreateWithoutPaymentInput = {
    id?: number
    accion: string
    interaction_TypeId: number
    createdAt?: Date | string
  }

  export type interactionsCreateOrConnectWithoutPaymentInput = {
    where: interactionsWhereUniqueInput
    create: XOR<interactionsCreateWithoutPaymentInput, interactionsUncheckedCreateWithoutPaymentInput>
  }

  export type interactionsCreateManyPaymentInputEnvelope = {
    data: interactionsCreateManyPaymentInput | interactionsCreateManyPaymentInput[]
  }

  export type interactionsUpsertWithWhereUniqueWithoutPaymentInput = {
    where: interactionsWhereUniqueInput
    update: XOR<interactionsUpdateWithoutPaymentInput, interactionsUncheckedUpdateWithoutPaymentInput>
    create: XOR<interactionsCreateWithoutPaymentInput, interactionsUncheckedCreateWithoutPaymentInput>
  }

  export type interactionsUpdateWithWhereUniqueWithoutPaymentInput = {
    where: interactionsWhereUniqueInput
    data: XOR<interactionsUpdateWithoutPaymentInput, interactionsUncheckedUpdateWithoutPaymentInput>
  }

  export type interactionsUpdateManyWithWhereWithoutPaymentInput = {
    where: interactionsScalarWhereInput
    data: XOR<interactionsUpdateManyMutationInput, interactionsUncheckedUpdateManyWithoutPaymentInput>
  }

  export type paymentCreateWithoutInteractionInput = {
    factura: number
    createdAt?: Date | string
  }

  export type paymentUncheckedCreateWithoutInteractionInput = {
    id?: number
    factura: number
    createdAt?: Date | string
  }

  export type paymentCreateOrConnectWithoutInteractionInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutInteractionInput, paymentUncheckedCreateWithoutInteractionInput>
  }

  export type interaction_TypeCreateWithoutInteractionsInput = {
    type: string
  }

  export type interaction_TypeUncheckedCreateWithoutInteractionsInput = {
    id?: number
    type: string
  }

  export type interaction_TypeCreateOrConnectWithoutInteractionsInput = {
    where: interaction_TypeWhereUniqueInput
    create: XOR<interaction_TypeCreateWithoutInteractionsInput, interaction_TypeUncheckedCreateWithoutInteractionsInput>
  }

  export type paymentUpsertWithoutInteractionInput = {
    update: XOR<paymentUpdateWithoutInteractionInput, paymentUncheckedUpdateWithoutInteractionInput>
    create: XOR<paymentCreateWithoutInteractionInput, paymentUncheckedCreateWithoutInteractionInput>
    where?: paymentWhereInput
  }

  export type paymentUpdateToOneWithWhereWithoutInteractionInput = {
    where?: paymentWhereInput
    data: XOR<paymentUpdateWithoutInteractionInput, paymentUncheckedUpdateWithoutInteractionInput>
  }

  export type paymentUpdateWithoutInteractionInput = {
    factura?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUncheckedUpdateWithoutInteractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    factura?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type interaction_TypeUpsertWithoutInteractionsInput = {
    update: XOR<interaction_TypeUpdateWithoutInteractionsInput, interaction_TypeUncheckedUpdateWithoutInteractionsInput>
    create: XOR<interaction_TypeCreateWithoutInteractionsInput, interaction_TypeUncheckedCreateWithoutInteractionsInput>
    where?: interaction_TypeWhereInput
  }

  export type interaction_TypeUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: interaction_TypeWhereInput
    data: XOR<interaction_TypeUpdateWithoutInteractionsInput, interaction_TypeUncheckedUpdateWithoutInteractionsInput>
  }

  export type interaction_TypeUpdateWithoutInteractionsInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type interaction_TypeUncheckedUpdateWithoutInteractionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type first_contact_loteCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    accion: string
    contactAvailable?: boolean
    contact?: boolean
    contact_createdAt?: Date | string | null
    response?: boolean
    response_createdAt?: Date | string | null
    contactCall?: boolean
    contactCall_createdAt?: Date | string | null
    responseCall?: boolean
    responseCall_createdAt?: Date | string | null
    PromisePayment?: boolean
    Payment?: boolean
    PaymentId?: number | null
    PromiseNonPayment?: boolean
    note?: string | null
    caseStatus?: boolean
    cuotasIniciales?: number
  }

  export type first_contact_loteUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    contactAvailable?: BoolFieldUpdateOperationsInput | boolean
    contact?: BoolFieldUpdateOperationsInput | boolean
    contact_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response?: BoolFieldUpdateOperationsInput | boolean
    response_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactCall?: BoolFieldUpdateOperationsInput | boolean
    contactCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseCall?: BoolFieldUpdateOperationsInput | boolean
    responseCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PromisePayment?: BoolFieldUpdateOperationsInput | boolean
    Payment?: BoolFieldUpdateOperationsInput | boolean
    PaymentId?: NullableIntFieldUpdateOperationsInput | number | null
    PromiseNonPayment?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    caseStatus?: BoolFieldUpdateOperationsInput | boolean
    cuotasIniciales?: IntFieldUpdateOperationsInput | number
  }

  export type first_contact_loteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    contactAvailable?: BoolFieldUpdateOperationsInput | boolean
    contact?: BoolFieldUpdateOperationsInput | boolean
    contact_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response?: BoolFieldUpdateOperationsInput | boolean
    response_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactCall?: BoolFieldUpdateOperationsInput | boolean
    contactCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseCall?: BoolFieldUpdateOperationsInput | boolean
    responseCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PromisePayment?: BoolFieldUpdateOperationsInput | boolean
    Payment?: BoolFieldUpdateOperationsInput | boolean
    PaymentId?: NullableIntFieldUpdateOperationsInput | number | null
    PromiseNonPayment?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    caseStatus?: BoolFieldUpdateOperationsInput | boolean
    cuotasIniciales?: IntFieldUpdateOperationsInput | number
  }

  export type first_contact_loteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    contactAvailable?: BoolFieldUpdateOperationsInput | boolean
    contact?: BoolFieldUpdateOperationsInput | boolean
    contact_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    response?: BoolFieldUpdateOperationsInput | boolean
    response_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contactCall?: BoolFieldUpdateOperationsInput | boolean
    contactCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseCall?: BoolFieldUpdateOperationsInput | boolean
    responseCall_createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PromisePayment?: BoolFieldUpdateOperationsInput | boolean
    Payment?: BoolFieldUpdateOperationsInput | boolean
    PaymentId?: NullableIntFieldUpdateOperationsInput | number | null
    PromiseNonPayment?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    caseStatus?: BoolFieldUpdateOperationsInput | boolean
    cuotasIniciales?: IntFieldUpdateOperationsInput | number
  }

  export type interactionsCreateManyInteraction_TypeInput = {
    id?: number
    accion: string
    paymentId?: number | null
    createdAt?: Date | string
  }

  export type interactionsUpdateWithoutInteraction_TypeInput = {
    accion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: paymentUpdateOneWithoutInteractionNestedInput
  }

  export type interactionsUncheckedUpdateWithoutInteraction_TypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type interactionsUncheckedUpdateManyWithoutInteraction_TypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type interactionsCreateManyPaymentInput = {
    id?: number
    accion: string
    interaction_TypeId: number
    createdAt?: Date | string
  }

  export type interactionsUpdateWithoutPaymentInput = {
    accion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interaction_Type?: interaction_TypeUpdateOneWithoutInteractionsNestedInput
  }

  export type interactionsUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    interaction_TypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type interactionsUncheckedUpdateManyWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    interaction_TypeId?: IntFieldUpdateOperationsInput | number
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