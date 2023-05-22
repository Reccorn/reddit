

export function timestampToDate(timestamp: string | undefined): string {
  var d = new Date(Number(timestamp)*1000);
  return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
}
