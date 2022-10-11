const dateToISO = (date: Date): string =>
    new Date(date).toISOString().substring(0, 10);

export default dateToISO;
