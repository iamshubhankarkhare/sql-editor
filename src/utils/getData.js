export const getData = async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/employees.csv'
  );
  const data = await response.text();
  const [headerLine, ...lines] = data.split('\n');
  const headers = headerLine.split(',');

  const objects = lines.map((line, index) =>
    line
      // Split line with value separators
      .split(',')

      // Reduce values array into an object like: { [header]: value }
      .reduce(
        (object, value, index) => ({
          ...object,
          [headers[index]]: value,
        }),
        {}
      )
  );
  //To randomize the results for the sake of this task
  objects.sort(() => (Math.random() > 0.5 ? 1 : -1));
  return objects;
};
