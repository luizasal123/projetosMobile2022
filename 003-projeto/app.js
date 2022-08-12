var salario = 2000;
var aumento = 0.15;
var inflacao = 0.07;
novoSalario = salario + (aumento * salario);
novoSalarioInflacao = novoSalario - (inflacao*novoSalario);
console.log(novoSalario);
console.log(novoSalarioInflacao);
var strnovoSalarioIn=`o novo salário é: \n R$\t\t${novoSalario}`;
var strnovoSalario = `o novo salário aplicada a inflação é : \n R$ \t\t${novoSalarioInflacao}`
console.log(strnovoSalario)
console.log(strnovoSalarioIn)