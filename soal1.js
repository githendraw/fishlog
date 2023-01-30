const number = 50;
let output;
for (let i = 0; i < number; i++) {
    output = output ? `${output}${i},` : `${i},`;
}