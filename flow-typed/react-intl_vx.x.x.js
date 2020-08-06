// `react-intl` and all its dependencies, translated from the
// relevant-looking TypeScript .d.ts files, with minimal tweaks to
// make it work.

// Anything at `React.` is `any`; see
// https://chat.zulip.org/#narrow/stream/243-mobile-team/topic/libdef.3A.20react-native-webview/near/896571.
// We should use Flow's builtin React type annotations, like
// React$Node instead of React.Node.

// react-intl/dist/react-intl.d.ts
declare module 'react-intl' {
  /**
   * Flowtype definitions for react-intl
   * Generated by Flowgen from a Typescript Definition
   * Flowgen v1.11.0
   */

  import type { DisplayNames } from '@formatjs/intl-displaynames';

  declare type ArgumentElement = BaseElement<typeof TYPE.argument>;
  declare interface ArgumentPart {
    type: typeof PART_TYPE.argument;
    value: any;
  }
  declare interface BaseElement<T: $Values<typeof TYPE>> {
    type: T;
    value: string;
    location?: Location;
  }
  /**
   * Create intl object
   * @param config intl config
   * @param cache cache for formatter instances to prevent memory leak
   */
  declare export function createIntl(config: OptionalIntlConfig, cache?: IntlCache): IntlShape;
  declare export function createIntlCache(): IntlCache;
  declare export interface CustomFormatConfig {
    format?: string;
  }
  declare export type CustomFormats = {
    relative?: { [key: string]: IntlRelativeTimeFormatOptions, ... },
    ...
  } & $Rest<Formats, { ... }>;
  declare type DateElement = SimpleFormatElement<typeof TYPE.date, DateTimeSkeleton>;
  declare interface DateTimeSkeleton {
    type: typeof SKELETON_TYPE.dateTime;
    pattern: string;
    location?: Location;
  }
  declare var DEFAULT_INTL_CONFIG: Pick<
    IntlConfig,
    | 'formats'
    | 'messages'
    | 'timeZone'
    | 'textComponent'
    | 'defaultLocale'
    | 'defaultFormats'
    | 'onError',
  >;
  declare export function defineMessages<T, U: { [key: string]: T, ... }>(msgs: U): U;
  declare interface ElementPart {
    type: 'element';
    value: string;
  }
  declare interface FieldData {
    // $FlowFixMe - illegal name
    '0'?: string;
    // $FlowFixMe - illegal name
    '1'?: string;
    // $FlowFixMe - illegal name
    '-1'?: string;
    // $FlowFixMe - illegal name
    '2'?: string;
    // $FlowFixMe - illegal name
    '-2'?: string;
    // $FlowFixMe - illegal name
    '3'?: string;
    // $FlowFixMe - illegal name
    '-3'?: string;
    future: RelativeTimeData;
    past: RelativeTimeData;
  }
  declare export type FormatDateOptions = Exclude<Intl.DateTimeFormatOptions, 'localeMatcher'> &
    CustomFormatConfig;
  declare export type FormatDisplayNameOptions = Exclude<DisplayNamesOptions, 'localeMatcher'>;
  declare export type FormatListOptions = Exclude<IntlListFormatOptions, 'localeMatcher'>;
  declare export type FormatNumberOptions = Exclude<UnifiedNumberFormatOptions, 'localeMatcher'> &
    CustomFormatConfig;
  declare export type FormatPluralOptions = Exclude<Intl.PluralRulesOptions, 'localeMatcher'> &
    CustomFormatConfig;
  declare export type FormatRelativeTimeOptions = Exclude<
    IntlRelativeTimeFormatOptions,
    'localeMatcher',
  > &
    CustomFormatConfig;
  declare interface Formats {
    number: { [key: string]: Intl.NumberFormatOptions, ... };
    date: { [key: string]: Intl.DateTimeFormatOptions, ... };
    time: { [key: string]: Intl.DateTimeFormatOptions, ... };
  }
  declare type FormattableUnit = Unit | Units;
  declare export var FormattedDate: React.FC<
    Intl.DateTimeFormatOptions &
      CustomFormatConfig & {
        value: string | number | Date | void,
        ...
      },
  >;
  declare export var FormattedDateParts: React.FC<
    Intl.DateTimeFormatOptions &
      CustomFormatConfig & {
        value: string | number | Date | void,
        children(
          val: Intl.DateTimeFormatPart[],
        ): React.ReactElement<
          any,
          | string
          | ((
              props: any,
            ) => React.ReactElement<
              any,
              string | any | ((props: any) => React.Component<any, any, any>),
            > | null)
          | ((props: any) => React.Component<any, any, any>),
        > | null,
        ...
      },
  >;
  declare export var FormattedDisplayName: React.FC<
    DisplayNamesOptions & {
      value: string | number | { [key: string]: any },
      ...
    },
  >;
  declare export class FormattedHTMLMessage
    mixins FormattedMessage<{
        [string]: PrimitiveType,
        ...,
      }> {
    static displayName: string;
    static defaultProps: {
      tagName: 'span',
      values: { ... },
      ...
    };
    render(): React$Node;
  }
  declare export var FormattedList: React.FC<
    IntlListFormatOptions & {
      value: React.Node[],
      ...
    },
  >;

  // changed `mixins` to `extends` in Flow to TS translation
  declare export class FormattedMessage<
    V: { [key: string]: any, ... } = {
      [key: string]: PrimitiveType | React.ReactElement<> | FormatXMLElementFn,
      ...,
    },
  > extends React$Component<Props_3<V>> {
    static displayName: string;
    static defaultProps: {
      values: { ... },
      ...
    };
    shouldComponentUpdate(nextProps: Props_3<V>): boolean;
    render(): React$Node;
  }
  declare export var FormattedNumber: React.FC<
    UnifiedNumberFormatOptions &
      CustomFormatConfig & {
        value: number,
        ...
      },
  >;
  declare export var FormattedNumberParts: React.FC<
    $PropertyType<Formatter, 'formatNumber'> & {
      value: $ElementType<Parameters<$PropertyType<IntlShape, 'formatNumber'>>, 0>,
      children(val: Intl.NumberFormatPart[]): React.ReactElement<> | null,
      ...
    },
  >;
  declare export var FormattedPlural: React.ForwardRefExoticComponent<
    Pick<
      Props_2,
      | 'children'
      | 'other'
      | 'zero'
      | 'one'
      | 'two'
      | 'few'
      | 'many'
      | 'localeMatcher'
      | 'format'
      | 'type'
      | 'value',
    > & {
      forwardedRef?: ((instance: any) => void) | React.RefObject<any> | null | void,
      ...
    } & React.RefAttributes<any>,
  > & {
    WrappedComponent: React.ComponentType<Props_2>,
    ...
  };
  // changed `mixins` to `extends` in Flow to TS translation
  declare export class FormattedRelativeTime extends React.PureComponent<Props, State_2> {
    _updateTimer: any;
    static displayName: string;
    static defaultProps: Pick<Props, 'unit' | 'value'>;
    state: State_2;
    constructor(props: Props): this;
    scheduleNextUpdate(x: Props, x: State_2): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    static getDerivedStateFromProps(props: Props, state: State_2): $Rest<State_2, { ... }> | null;
    render(): React$Node;
  }
  declare export var FormattedTime: React.FC<
    Intl.DateTimeFormatOptions &
      CustomFormatConfig & {
        value: string | number | Date | void,
        ...
      },
  >;
  declare export var FormattedTimeParts: React.FC<
    Intl.DateTimeFormatOptions &
      CustomFormatConfig & {
        value: string | number | Date | void,
        children(
          val: Intl.DateTimeFormatPart[],
        ): React.ReactElement<
          any,
          | string
          | ((
              props: any,
            ) => React.ReactElement<
              any,
              string | any | ((props: any) => React.Component<any, any, any>),
            > | null)
          | ((props: any) => React.Component<any, any, any>),
        > | null,
        ...
      },
  >;
  declare type Formatter = {
    formatDate: FormatDateOptions,
    formatTime: FormatDateOptions,
    formatNumber: FormatNumberOptions,
    formatList: FormatListOptions,
    formatDisplayName: FormatDisplayNameOptions,
    ...
  };
  declare export interface Formatters {
    getDateTimeFormat(
      ...args: ConstructorParameters<typeof Intl.DateTimeFormat>
    ): Intl.DateTimeFormat;
    getNumberFormat(...args: ConstructorParameters<typeof Intl.NumberFormat>): Intl.NumberFormat;
    getMessageFormat(...args: ConstructorParameters<typeof IntlMessageFormat>): IntlMessageFormat;
    getRelativeTimeFormat(
      ...args: ConstructorParameters<typeof RelativeTimeFormat>
    ): RelativeTimeFormat;
    getPluralRules(...args: ConstructorParameters<typeof Intl.PluralRules>): Intl.PluralRules;
    getListFormat(...args: ConstructorParameters<typeof ListFormat>): ListFormat;
    getDisplayNames(...args: ConstructorParameters<DisplayNames>): DisplayNames;
  }
  declare interface Formatters_2 {
    getNumberFormat(...args: ConstructorParameters<typeof Intl.NumberFormat>): Intl.NumberFormat;
    getDateTimeFormat(
      ...args: ConstructorParameters<typeof Intl.DateTimeFormat>
    ): Intl.DateTimeFormat;
    getPluralRules(...args: ConstructorParameters<typeof Intl.PluralRules>): Intl.PluralRules;
  }
  declare type FormatXMLElementFn = (...args: any[]) => string | { [key: string]: any };
  declare export function injectIntl<IntlPropName: string, P: WrappedComponentProps<IntlPropName>>(
    WrappedComponent: React.ComponentType<P>,
    options?: Opts<IntlPropName, false>,
  ): React.FC<WithIntlProps<P>> & {
    WrappedComponent: React.ComponentType<P>,
    ...
  };
  declare export function injectIntl<
    IntlPropName: string,
    P: WrappedComponentProps<IntlPropName>,
    T: React.ComponentType<P>,
  >(
    WrappedComponent: React.ComponentType<P>,
    options?: Opts<IntlPropName, true>,
  ): React.ForwardRefExoticComponent<
    React.PropsWithoutRef<WithIntlProps<P>> & React.RefAttributes<T>,
  > & {
    WrappedComponent: React.ComponentType<P>,
    ...
  };
  declare export interface IntlCache {
    dateTime: { [key: string]: Intl.DateTimeFormat, ... };
    number: { [key: string]: Intl.NumberFormat, ... };
    message: { [key: string]: IntlMessageFormat, ... };
    relativeTime: { [key: string]: RelativeTimeFormat, ... };
    pluralRules: { [key: string]: Intl.PluralRules, ... };
    list: { [key: string]: ListFormat, ... };
    displayNames: { [key: string]: DisplayNames, ... };
  }
  declare export interface IntlConfig {
    locale: string;
    timeZone?: string;
    formats: CustomFormats;
    textComponent?: React.ComponentType<> | $Keys<React.ReactHTML>;
    messages: { [key: string]: string, ... } | { [key: string]: MessageFormatElement[], ... };
    defaultLocale: string;
    defaultFormats: CustomFormats;
    onError(err: string): void;
  }
  declare export var IntlContext: React$Context<IntlShape>;
  // Changed from `interface` to `type` in TS to Flow translation.
  declare export type IntlFormatters = {
    formatDate(
      value: $ElementType<Parameters<$PropertyType<Intl.DateTimeFormat, 'format'>>, 0> | string,
      opts?: FormatDateOptions,
    ): string,
    formatTime(
      value: $ElementType<Parameters<$PropertyType<Intl.DateTimeFormat, 'format'>>, 0> | string,
      opts?: FormatDateOptions,
    ): string,
    formatDateToParts(
      value: $ElementType<Parameters<$PropertyType<Intl.DateTimeFormat, 'format'>>, 0> | string,
      opts?: FormatDateOptions,
    ): Intl.DateTimeFormatPart[],
    formatTimeToParts(
      value: $ElementType<Parameters<$PropertyType<Intl.DateTimeFormat, 'format'>>, 0> | string,
      opts?: FormatDateOptions,
    ): Intl.DateTimeFormatPart[],
    formatRelativeTime(
      value: $ElementType<Parameters<$PropertyType<RelativeTimeFormat, 'format'>>, 0>,
      unit?: $ElementType<Parameters<$PropertyType<RelativeTimeFormat, 'format'>>, 1>,
      opts?: FormatRelativeTimeOptions,
    ): string,
    formatNumber(
      value: $ElementType<Parameters<$PropertyType<Intl.NumberFormat, 'format'>>, 0>,
      opts?: FormatNumberOptions,
    ): string,
    formatNumberToParts(
      value: $ElementType<Parameters<$PropertyType<Intl.NumberFormat, 'format'>>, 0>,
      opts?: FormatNumberOptions,
    ): Intl.NumberFormatPart[],
    formatPlural(
      value: $ElementType<Parameters<$PropertyType<Intl.PluralRules, 'select'>>, 0>,
      opts?: FormatPluralOptions,
    ): $Call<<R>((...args: any[]) => R) => R, $PropertyType<Intl.PluralRules, 'select'>>,
    formatMessage(
      descriptor: MessageDescriptor,
      // The `+` was added to make the properties covariant rather
      // than invariant, something TypeScript can't do.
      values?: { +[key: string]: PrimitiveType, ... },
    ): string,
    formatMessage(
      descriptor: MessageDescriptor,
      // The `+` was added to make the properties covariant rather
      // than invariant, something TypeScript can't do.
      values?: { +[key: string]: PrimitiveType | React.ReactElement<> | FormatXMLElementFn, ... },
    ): string | React.ReactNodeArray,
    formatHTMLMessage(
      descriptor: MessageDescriptor,
      values?: { [key: string]: PrimitiveType, ... },
    ): React.Node,
    formatList(values: Array<string>, opts?: FormatListOptions): string,
    formatList(values: Array<string | React.Node>, opts?: FormatListOptions): React.Node,
    formatDisplayName(
      value: $ElementType<Parameters<$PropertyType<DisplayNames, 'of'>>, 0>,
      opts?: FormatDisplayNameOptions,
    ): string | void,
  };
  declare interface IntlListFormatOptions {
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     * For information about this option, see
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation.
     */
    localeMatcher?: 'best fit' | 'lookup';

    /**
     * The format of output message. Possible values are:
     * - "always" (default, e.g., 1 day ago),
     * - or "auto" (e.g., yesterday).
     * The "auto" value allows to not always have to
     * use numeric values in the output.
     */
    type?: 'conjunction' | 'disjunction' | 'unit';

    /**
     * The length of the internationalized message. Possible values are:
     * - "long" (default, e.g., in 1 month)
     * - "short" (e.g., in 1 mo.),
     * - or "narrow" (e.g., in 1 mo.).
     * The narrow style could be similar to the short style for some locales.
     */
    style?: 'long' | 'short' | 'narrow';
  }
  declare class IntlMessageFormat {
    constructor(
      message: string | MessageFormatElement[],
      locales?: string | string[],
      overrideFormats?: $Rest<Formats, { ... }>,
      opts?: Options,
    ): this;
    format: (values?: { [key: string]: PrimitiveType, ... } | void) => string;
    formatToParts: (values?: { [key: string]: any, ... } | void) => MessageFormatPart[];
    formatHTMLMessage: (
      values?: {
        [key: string]:
          | string
          | number
          | boolean
          | { [key: string]: any }
          | Date
          | FormatXMLElementFn
          | null
          | void,
        ...,
      } | void,
    ) => (string | { [key: string]: any })[];
    resolvedOptions: () => {
      locale: string,
      ...
    };
    getAst: () => MessageFormatElement[];
    static defaultLocale: string;
    static __parse: typeof parse | void;
    static formats: {
      number: {
        currency: {
          style: string,
          ...
        },
        percent: {
          style: string,
          ...
        },
        ...
      },
      date: {
        short: {
          month: string,
          day: string,
          year: string,
          ...
        },
        medium: {
          month: string,
          day: string,
          year: string,
          ...
        },
        long: {
          month: string,
          day: string,
          year: string,
          ...
        },
        full: {
          weekday: string,
          month: string,
          day: string,
          year: string,
          ...
        },
        ...
      },
      time: {
        short: {
          hour: string,
          minute: string,
          ...
        },
        medium: {
          hour: string,
          minute: string,
          second: string,
          ...
        },
        long: {
          hour: string,
          minute: string,
          second: string,
          timeZoneName: string,
          ...
        },
        full: {
          hour: string,
          minute: string,
          second: string,
          timeZoneName: string,
          ...
        },
        ...
      },
      ...
    };
  }
  // changed `mixins` to `extends` in Flow to TS translation
  declare export class IntlProvider extends React.PureComponent<OptionalIntlConfig, State> {
    static displayName: string;
    static defaultProps: Pick<
      IntlConfig,
      | 'formats'
      | 'messages'
      | 'timeZone'
      | 'textComponent'
      | 'defaultLocale'
      | 'defaultFormats'
      | 'onError',
    >;
    state: State;
    static getDerivedStateFromProps(
      props: OptionalIntlConfig,
      x: State,
    ): $Rest<State, { ... }> | null;
    render(): React$Node;
  }
  declare interface IntlRelativeTimeFormatOptions {
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     * For information about this option, see
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation.
     */
    localeMatcher?: 'best fit' | 'lookup';

    /**
     * The format of output message. Possible values are:
     * - "always" (default, e.g., 1 day ago),
     * - or "auto" (e.g., yesterday).
     * The "auto" value allows to not always have to
     * use numeric values in the output.
     */
    numeric?: 'always' | 'auto';

    /**
     * The length of the internationalized message. Possible values are:
     * - "long" (default, e.g., in 1 month)
     * - "short" (e.g., in 1 mo.),
     * - or "narrow" (e.g., in 1 mo.).
     * The narrow style could be similar to the short style for some locales.
     */
    style?: 'long' | 'short' | 'narrow';
  }
  declare export type IntlShape = {
    formatters: Formatters,
    ...
  } & IntlConfig &
    IntlFormatters;
  declare interface IParseOptions {
    filename?: string;
    startRule?: string;
    tracer?: any;
    [key: string]: any;
  }
  declare type LDMLPluralRule = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';
  declare class ListFormat {
    constructor(locales?: string | string[], options?: IntlListFormatOptions): this;
    format(elements: string[]): string;
    formatToParts(elements: string[]): Part_2[];
    resolvedOptions(): ResolvedIntlListFormatOptions;
    static supportedLocalesOf(
      locales: string | string[],
      options?: Pick<IntlListFormatOptions, 'localeMatcher'>,
    ): string[];
    static __addLocaleData(...data: ListPatternLocaleData[]): void;
    static localeData: { [key: string]: ListPatternFieldsData, ... };
    static polyfilled: boolean;
  }
  declare interface ListPattern {
    start: string;
    middle: string;
    end: string;
    pair: string;
  }
  declare interface ListPatternData {
    long: ListPattern;
    short?: ListPattern;
    narrow?: ListPattern;
  }
  declare interface ListPatternFieldsData {
    conjunction?: ListPatternData;
    disjunction?: ListPatternData;
    unit?: ListPatternData;
  }
  declare type ListPatternLocaleData = LocaleData<ListPatternFieldsData>;
  declare type LiteralElement = BaseElement<typeof TYPE.literal>;
  declare interface LiteralPart {
    type: 'literal';
    value: string;
  }
  declare interface LiteralPart_2 {
    type: typeof PART_TYPE.literal;
    value: string;
  }
  declare type Locale = string;
  declare interface LocaleData<T> {
    data: { [key: Locale]: T, ... };
    aliases: { [key: string]: string, ... };
    availableLocales: string[];
    parentLocales: { [key: string]: string, ... };
  }
  declare type LocaleFieldsData = $ObjMapi<{ [k: RelativeTimeField]: any }, <f>(f) => FieldData> & {
    nu?: Array<string | null>,
    ...
  };
  declare interface Location {
    start: LocationDetails;
    end: LocationDetails;
  }
  declare interface LocationDetails {
    offset: number;
    line: number;
    column: number;
  }

  // Changed from `interface` to `type` in TS to Flow translation.
  declare export type MessageDescriptor = {
    id?: string | number,
    description?: string | { [key: string]: any },
    defaultMessage?: string,
  };
  declare type MessageFormatElement =
    | LiteralElement
    | ArgumentElement
    | NumberElement
    | DateElement
    | TimeElement
    | SelectElement
    | PluralElement
    | PoundElement;
  declare type MessageFormatPart = LiteralPart_2 | ArgumentPart;
  declare type NumberElement = SimpleFormatElement<typeof TYPE._number, NumberSkeleton>;
  declare interface NumberFormatDigitOptions {
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
  }
  declare interface NumberSkeleton {
    type: typeof SKELETON_TYPE._number;
    tokens: NumberSkeletonToken[];
    location?: Location;
  }
  declare interface NumberSkeletonToken {
    stem: string;
    options: string[];
  }
  declare export type Omit<T, K: $Keys<any>> = Pick<T, Exclude<$Keys<T>, K>>;
  declare type OptionalIntlConfig = Omit<IntlConfig, $Keys<typeof DEFAULT_INTL_CONFIG>> &
    $Rest<typeof DEFAULT_INTL_CONFIG, { ... }>;
  declare interface Options {
    formatters?: Formatters_2;
  }
  declare interface Options_2 {
    /**
     * Whether to convert `#` in plural rule options
     * to `{var, number}`
     * Default is true
     */
    normalizeHashtagInPlural?: boolean;

    /**
     * Capture location info in AST
     * Default is false
     */
    captureLocation?: boolean;
  }
  declare interface Opts<IntlPropName: string = 'intl', ForwardRef: boolean = false> {
    intlPropName?: IntlPropName;
    forwardRef?: ForwardRef;
    enforceContext?: boolean;
  }
  declare function parse(input: string, opts?: ParseOptions): MessageFormatElement[];
  declare type ParseOptions = Options_2 & IParseOptions;
  declare type Part = LiteralPart | RelativeTimeFormatNumberPart;
  declare type Part_2 = LiteralPart | ElementPart;
  declare var PART_TYPE: {|
    +literal: 0, // 0
    +argument: 1, // 1
  |};
  declare type PluralElement = {
    options: { [key: ValidPluralRule]: PluralOrSelectOption, ... },
    offset: number,
    pluralType: $PropertyType<Intl.PluralRulesOptions, 'type'>,
    ...
  } & BaseElement<typeof TYPE.plural>;
  declare interface PluralOrSelectOption {
    value: MessageFormatElement[];
    location?: Location;
  }
  declare interface PoundElement {
    type: typeof TYPE.pound;
    location?: Location;
  }
  declare type PrimitiveType = string | number | boolean | null | void | Date;
  declare type Props = {
    value?: number,
    unit?: Unit,
    updateIntervalInSeconds?: number,
    children?: (value: string) => React.ReactChild,
    ...
  } & FormatRelativeTimeOptions;
  declare type Props_2 = {
    value: number,
    intl: IntlShape,
    other: React.Node,
    zero?: React.Node,
    one?: React.Node,
    two?: React.Node,
    few?: React.Node,
    many?: React.Node,
    children?: (value: React.Node) => React.ReactElement<> | null,
    ...
  } & FormatPluralOptions;
  declare type Props_3<V: { [key: string]: any, ... } = { [key: string]: React.Node, ... }> = {
    values?: V,
    tagName?: React.ElementType<any>,
    children?: (...nodes: React.ReactNodeArray) => React.Node,
    ...
  } & MessageDescriptor;
  declare export var RawIntlProvider: React.Provider<IntlShape>;
  declare type RelativeTimeData = $ObjMapi<{ [k: LDMLPluralRule]: any }, <u>(u) => string>;
  declare type RelativeTimeField =
    | 'second'
    | 'second-short'
    | 'second-narrow'
    | 'minute'
    | 'minute-short'
    | 'minute-narrow'
    | 'hour'
    | 'hour-short'
    | 'hour-narrow'
    | 'day'
    | 'day-short'
    | 'day-narrow'
    | 'week'
    | 'week-short'
    | 'week-narrow'
    | 'month'
    | 'month-short'
    | 'month-narrow'
    | 'quarter'
    | 'quarter-short'
    | 'quarter-narrow'
    | 'year'
    | 'year-short'
    | 'year-narrow';
  declare class RelativeTimeFormat {
    constructor(locales?: string | string[], options?: IntlRelativeTimeFormatOptions): this;
    format(value: number, unit: FormattableUnit): string;
    formatToParts(value: number, unit: FormattableUnit): Part[];
    resolvedOptions(): ResolvedIntlRelativeTimeFormatOptions;
    static supportedLocalesOf(
      locales: string | string[],
      options?: Pick<IntlRelativeTimeFormatOptions, 'localeMatcher'>,
    ): string[];
    static __addLocaleData(...data: RelativeTimeLocaleData[]): void;
    static localeData: { [key: string]: UnpackedLocaleFieldsData, ... };
    static polyfilled: boolean;
  }
  declare type RelativeTimeFormatNumberPart = {
    unit: Unit,
    ...
  } & Intl.NumberFormatPart;
  declare type RelativeTimeLocaleData = LocaleData<LocaleFieldsData>;
  declare interface ResolvedIntlListFormatOptions {
    /**
     * The BCP 47 language tag for the locale actually used.
     * If any Unicode extension values were requested in the
     * input BCP 47 language tag that led to this locale,
     * the key-value pairs that were requested and are
     * supported for this locale are included in locale.
     */
    locale: string;

    /**
     * The format of output message. Possible values are:
     * - "always" (default, e.g., 1 day ago),
     * - or "auto" (e.g., yesterday).
     * The "auto" value allows to not always have to
     * use numeric values in the output.
     */
    type: 'conjunction' | 'disjunction' | 'unit';

    /**
     * The length of the internationalized message. Possible values are:
     * - "long" (default, e.g., in 1 month)
     * - "short" (e.g., in 1 mo.),
     * - or "narrow" (e.g., in 1 mo.).
     * The narrow style could be similar to the short style for some locales.
     */
    style: 'long' | 'short' | 'narrow';
  }
  declare type ResolvedIntlRelativeTimeFormatOptions = {
    /**
     * The BCP 47 language tag for the locale actually used.
     * If any Unicode extension values were requested in the
     * input BCP 47 language tag that led to this locale,
     * the key-value pairs that were requested and are
     * supported for this locale are included in locale.
     */
    locale: string,

    /**
     * The value requested using the Unicode
     * extension key "nu" or filled in as a default.
     */
    numberingSystem: string,
    ...
  };
  declare type SelectElement = {
    options: { [key: string]: PluralOrSelectOption, ... },
    ...
  } & BaseElement<typeof TYPE.select>;
  declare type SimpleFormatElement<T: $Values<typeof TYPE>, S: Skeleton> = {
    style?: string | S | null,
    ...
  } & BaseElement<T>;
  declare type Skeleton = NumberSkeleton | DateTimeSkeleton;
  declare var SKELETON_TYPE: {|
    // underscore added in translating from TS; Flow complains of
    // "Unexpected reserved type"
    +_number: 0, // 0
    +dateTime: 1, // 1
  |};
  declare interface State {
    /**
     * Explicit intl cache to prevent memory leaks
     */
    cache: IntlCache;

    /**
     * Intl object we created
     */
    intl?: IntlShape;

    /**
     * list of memoized config we care about.
     * This is important since creating intl is
     * very expensive
     */
    prevConfig: OptionalIntlConfig;
  }
  declare interface State_2 {
    prevUnit?: Unit;
    prevValue?: number;
    currentValueInSeconds: number;
  }
  declare type TimeElement = SimpleFormatElement<typeof TYPE.time, DateTimeSkeleton>;

  declare var TYPE: {|
    +literal: 0, // 0
    +argument: 1, // 1
    // underscore added in translating from TS; Flow complains of
    // "Unexpected reserved type"
    +_number: 2, // 2
    +date: 3, // 3
    +time: 4, // 4
    +select: 5, // 5
    +plural: 6, // 6
    +pound: 7, // 7
  |};
  declare type UnifiedNumberFormatOptions = Intl.NumberFormatOptions &
    NumberFormatDigitOptions & {
      localeMatcher?: UnifiedNumberFormatOptionsLocaleMatcher,
      style?: UnifiedNumberFormatOptionsStyle,
      compactDisplay?: UnifiedNumberFormatOptionsCompactDisplay,
      currencyDisplay?: UnifiedNumberFormatOptionsCurrencyDisplay,
      currencySign?: UnifiedNumberFormatOptionsCurrencySign,
      notation?: UnifiedNumberFormatOptionsNotation,
      signDisplay?: UnifiedNumberFormatOptionsSignDisplay,
      unit?: Unit_2,
      unitDisplay?: UnifiedNumberFormatOptionsUnitDisplay,
      ...
    };
  declare type UnifiedNumberFormatOptionsCompactDisplay = 'short' | 'long';
  declare type UnifiedNumberFormatOptionsCurrencyDisplay =
    | 'symbol'
    | 'code'
    | 'name'
    | 'narrowSymbol';
  declare type UnifiedNumberFormatOptionsCurrencySign = 'standard' | 'accounting';
  declare type UnifiedNumberFormatOptionsLocaleMatcher = 'lookup' | 'best fit';
  declare type UnifiedNumberFormatOptionsNotation =
    | 'standard'
    | 'scientific'
    | 'engineering'
    | 'compact';
  declare type UnifiedNumberFormatOptionsSignDisplay = 'auto' | 'always' | 'never' | 'exceptZero';
  declare type UnifiedNumberFormatOptionsStyle = 'decimal' | 'percent' | 'currency' | 'unit';
  declare type UnifiedNumberFormatOptionsUnitDisplay = 'long' | 'short' | 'narrow';
  declare type Unit = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  declare type Unit_2 =
    | 'degree'
    | 'acre'
    | 'hectare'
    | 'percent'
    | 'bit'
    | 'byte'
    | 'gigabit'
    | 'gigabyte'
    | 'kilobit'
    | 'kilobyte'
    | 'megabit'
    | 'megabyte'
    | 'petabyte'
    | 'terabit'
    | 'terabyte'
    | 'day'
    | 'hour'
    | 'millisecond'
    | 'minute'
    | 'month'
    | 'second'
    | 'week'
    | 'year'
    | 'centimeter'
    | 'foot'
    | 'inch'
    | 'kilometer'
    | 'meter'
    | 'mile-scandinavian'
    | 'mile'
    | 'millimeter'
    | 'yard'
    | 'gram'
    | 'kilogram'
    | 'ounce'
    | 'pound'
    | 'stone'
    | 'celsius'
    | 'fahrenheit'
    | 'fluid-ounce'
    | 'gallon'
    | 'liter'
    | 'milliliter';
  declare type Units =
    | 'seconds'
    | 'minutes'
    | 'hours'
    | 'days'
    | 'weeks'
    | 'months'
    | 'quarters'
    | 'years';
  declare type UnpackedLocaleFieldsData = $ObjMapi<
    { [k: RelativeTimeField]: any },
    <f>(f) => FieldData,
  > & {
    nu: Array<string | null>,
    ...
  };
  declare export function useIntl(): IntlShape;
  declare type ValidPluralRule = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other' | string;
  declare export type WithIntlProps<P> = Omit<P, $Keys<WrappedComponentProps<>>> & {
    forwardedRef?: React.Ref<any>,
    ...
  };
  declare export type WrappedComponentProps<IntlPropName: string = 'intl'> = $ObjMapi<
    { [k: IntlPropName]: any },
    <k>(k) => IntlShape,
  >;
  declare export {};
}

// @formatjs/intl-utils/dist/types.d.ts
declare module '@formatjs/intl-utils/types' {
  declare export type Locale = string;
  declare export interface LocaleData<T> {
    data: { [Locale]: T, ... };
    aliases: { [string]: string, ... };
    availableLocales: string[];
    parentLocales: { [string]: string, ... };
  }
}

// @formatjs/intl-utils/dist/displaynames-types.d.ts
declare module '@formatjs/intl-utils/displaynames-types' {
  import type { LocaleData } from '@formatjs/intl-utils/types';

  declare export type LanguageTag = string;
  declare export type RegionCode = string;
  declare export type ScriptCode = string;
  declare export type CurrencyCode = string;
  declare export interface DisplayNamesData {
    /**
     * Note that for style fields, `short` and `narrow` might not exist.
     * At runtime, the fallback order will be narrow -> short -> long.
     */
    types: {
      /**
       * Maps language subtag like `zh-CN` to their display names.
       */
      language: {
        narrow: { [key: LanguageTag]: string, ... },
        short: { [key: LanguageTag]: string, ... },
        long: { [key: LanguageTag]: string, ... },
        ...
      },
      region: {
        narrow: { [key: RegionCode]: string, ... },
        short: { [key: RegionCode]: string, ... },
        long: { [key: RegionCode]: string, ... },
        ...
      },
      script: {
        narrow: { [key: ScriptCode]: string, ... },
        short: { [key: ScriptCode]: string, ... },
        long: { [key: ScriptCode]: string, ... },
        ...
      },
      currency: {
        narrow: { [key: CurrencyCode]: string, ... },
        short: { [key: CurrencyCode]: string, ... },
        long: { [key: CurrencyCode]: string, ... },
        ...
      },
      ...
    };

    /**
     * Not in spec, but we need this to display both language and region in display name.
     * e.g. zh-Hans-SG + "{0}（{1}）" -> 简体中文（新加坡）
     * Here {0} is replaced by language display name and {1} is replaced by region display name.
     */
    patterns: {
      locale: string,
      ...
    };
  }
  declare export type DisplayNamesLocaleData = LocaleData<DisplayNamesData>;
  declare export {};
}

// @formatjs/intl-utils/dist/index.d.ts
declare module '@formatjs/intl-utils' {
  /**
   * Flowtype definitions for @formatjs/intl-utils/dist/index.d.ts
   * Generated by Flowgen from a Typescript Definition
   * Flowgen v1.11.0
   */

  // Only the part we use is uncommented.

  // declare export { selectUnit } from './diff';
  // declare export {
  //   defaultNumberOption,
  //   getAliasesByLang,
  //   getInternalSlot,
  //   getMultiInternalSlots,
  //   getNumberOption,
  //   getOption,
  //   getParentLocalesByLang,
  //   isLiteralPart,
  //   LiteralPart,
  //   partitionPattern,
  //   setInternalSlot,
  //   setMultiInternalSlots,
  //   setNumberFormatDigitOptions,
  //   toObject,
  //   objectIs,
  //   isWellFormedCurrencyCode,
  //   toString,
  // } from './polyfill-utils';
  // declare export {
  //   createResolveLocale,
  //   getLocaleHierarchy,
  //   supportedLocales,
  //   unpackData,
  //   isMissingLocaleDataError,
  // } from './resolve-locale';
  // declare export * from './units'
  // declare export * from './relative-time-types'
  // declare export * from './unified-numberformat-types'
  // declare export * from './list-types'
  // declare export * from './plural-rules-types'
  // declare export * from './number-types'
  declare export * from '@formatjs/intl-utils/displaynames-types'
  // declare export { getCanonicalLocales } from './get-canonical-locales';
  // declare export { invariant } from './invariant';
}

// @formatjs/intl-displaynames/dist/index.d.ts
declare module '@formatjs/intl-displaynames' {
  /**
   * Flowtype definitions for index
   * Generated by Flowgen from a Typescript Definition
   * Flowgen v1.11.0
   */

  import type { DisplayNamesLocaleData, DisplayNamesData } from '@formatjs/intl-utils';

  declare export interface DisplayNamesOptions {
    localeMatcher?: 'lookup' | 'best fit';
    style?: 'narrow' | 'short' | 'long';
    type?: 'language' | 'region' | 'script' | 'currency';
    fallback?: 'code' | 'none';
  }
  declare export interface DisplayNamesResolvedOptions {
    locale: string;
    style: $NonMaybeType<$PropertyType<DisplayNamesOptions, 'style'>>;
    type: $NonMaybeType<$PropertyType<DisplayNamesOptions, 'type'>>;
    fallback: $NonMaybeType<$PropertyType<DisplayNamesOptions, 'fallback'>>;
  }
  declare export class DisplayNames {
    constructor(locales?: string | string[], options?: DisplayNamesOptions): this;
    static supportedLocalesOf(
      locales?: string | string[],
      options?: Pick<DisplayNamesOptions, 'localeMatcher'>,
    ): string[];
    static __addLocaleData(...data: DisplayNamesLocaleData[]): void;
    of(code: string | number | { [key: string]: any }): string | void;
    resolvedOptions(): DisplayNamesResolvedOptions;
    static localeData: { [key: string]: DisplayNamesData, ... };
    static +polyfilled: any; // true
  }
}