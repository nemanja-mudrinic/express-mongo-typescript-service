const timeFormat = {
  hour: '2-digit',
  minute: '2-digit',
  day: 'numeric',
  month: 'short',
} as Intl.DateTimeFormatOptions;
const defaultLocale = 'en-US';

export const formatDate = (date: Date): string => date.toLocaleTimeString(defaultLocale, timeFormat);
