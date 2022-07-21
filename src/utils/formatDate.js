export const formatDate = date =>
  new Intl.DateTimeFormat('es', {
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(date);

export const formatHistoryDate = date =>
  new Intl.DateTimeFormat('es', {
    dateStyle: 'long',
  }).format(date);
