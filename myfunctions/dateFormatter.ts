export const dateFormatter = (
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }
): string => {
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(date);
  return formattedDate;
};


export function convertIsoToTimeString(isoString: string): string {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const timeString = new Intl.DateTimeFormat('en-US', options).format(date);
  return timeString;
}

export function convertIsoToDateString(isoString: string): string {
  const months: string[] = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

  const dateObject = new Date(isoString);

  const month = months[dateObject.getMonth()];
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedDate = `${month} ${String(day).padStart(2, '0')}, ${year} - ${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${ampm}`;

  return formattedDate;
}