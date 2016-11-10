/**
 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */

export { Clock } from './Clock';
export * from './errors';
export { DayOfWeek } from './DayOfWeek';
export { Duration } from './Duration';
export { Instant } from './Instant';
export { LocalDate } from './LocalDate';
export { LocalTime } from './LocalTime';
export { LocalDateTime } from './LocalDateTime';
export { Month } from './Month';
export { MonthDay } from './MonthDay';
export { Period } from './Period';
export { Year } from './Year';
export { YearMonth } from './YearMonth';
export { ZonedDateTime } from './ZonedDateTime';
export { ZoneOffset } from './ZoneOffset';
export { ZoneId } from './ZoneId';
export { ZoneRegion } from './ZoneRegion';
export { ZoneRulesProvider } from './zone/ZoneRulesProvider';

export {convert} from './convert';

export {nativeJs} from './temporal/NativeJsTemporal';
export {ChronoField} from './temporal/ChronoField';
export {ChronoUnit} from './temporal/ChronoUnit';
export {IsoFields} from './temporal/IsoFields';
export {TemporalAdjusters} from './temporal/TemporalAdjusters';
export {TemporalQueries} from './temporal/TemporalQueries';

export {DateTimeFormatter} from './format/DateTimeFormatter';
export {DateTimeFormatterBuilder} from './format/DateTimeFormatterBuilder';
export {ResolverStyle} from './format/ResolverStyle';

import * as assert from './assert';
export { assert };

import './_init';

const used = [];
/**
 * use
 *
 * Provides a way to extend the internals of js-joda
 *
 * @param {function} fn - function to extend js-joda public api
 * @returns {this} for chaining
 */
export function use(fn) {
    if (!~used.indexOf(fn)) {
        fn(exports);
        used.push(fn);
    }
    return exports;
}
