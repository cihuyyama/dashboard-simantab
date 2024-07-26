// utils/dateFormatter.ts
import { parse, format } from 'date-fns';

export const formatDateTime = (datetime: string): string => {
  // Parse the datetime string into a Date object
  const date = parse(datetime, 'yyyyMMddHHmm', new Date());
  // Format the Date object into a readable string
  return format(date, 'EEEE p'); // Example: 'Jul 20, 2024, 12:00 AM'
};
