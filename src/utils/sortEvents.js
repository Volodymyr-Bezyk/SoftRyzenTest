export const sortEvents = (filteredEvents, sortBy) => {
  const order = { high: 1, medium: 2, low: 3 };

  switch (sortBy) {
    case 'name.inc':
      return filteredEvents.sort((a, b) => a.title.localeCompare(b.title));
    case 'name.dec':
      return filteredEvents.sort((a, b) => b.title.localeCompare(a.title));
    case 'date.inc':
      return filteredEvents.sort(
        (a, b) => Date.parse(a.date) - Date.parse(b.date)
      );
    case 'date.dec':
      return filteredEvents.sort(
        (a, b) => Date.parse(b.date) - Date.parse(a.date)
      );
    case 'priority.inc':
      return filteredEvents.sort(
        (a, b) => order[b.priority.value] - order[a.priority.value]
      );

    case 'priority.dec':
      return filteredEvents.sort(
        (a, b) => order[a.priority.value] - order[b.priority.value]
      );
    default:
      return filteredEvents;
  }
};
