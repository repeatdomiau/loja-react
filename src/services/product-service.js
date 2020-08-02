export default async () => {

  const responseToJson = response => response.json();

  return await fetch('./data/data.json').then(responseToJson);

}
