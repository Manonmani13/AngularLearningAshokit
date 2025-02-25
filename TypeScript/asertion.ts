let color;
color='red';
let endsWithD=(<string> color).endsWith('d');
let alternativeEndsWithD=(color as string).endsWith('d');
console.log(alternativeEndsWithD)