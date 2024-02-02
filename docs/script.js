const TITLE = "Jokenpo.html";
console.log(`[${TITLE}] init`);

var option

function SelectOption(Useroption) {
  option = Useroption
  console.log(option)

  const options = ["pedra", "papel", "tesoura"]
  const random = Math.floor(Math.random() * 3)

  console.log(options)
  console.log(random)
  console.log(options[random])

  const imgApp = document.getElementById("imgApp")
  console.log(imgApp)

  imgApp.src = `assets/imgs/${options[random]}.png`

  const TxtReplay = document.getElementById("TxtReplay")
  console.log(TxtReplay)
  TxtReplay.innerText = `Escolha outra opção para jogar novamente!`

  var Result = ""
  if (option == "pedra" && options[random] == "tesoura") {
    Result = "Você ganhou!"
  } else if (option == "tesoura" && options[random] == "papel") {
    Result = "Você ganhou!"
  } else if (option == "papel" && options[random] == "pedra") {
    Result = "Você ganhou!"
  } else if (option == options[random]) {
    Result = "Empate!"
  } else {
    Result = "Você perdeu!"
  }

  const TxtResult = document.getElementById("TxtResult")
  console.log(TxtResult)
  TxtResult.innerText = `Você escolheu ${option} e o computador escolheu ${options[random]}\n\t${Result}`

}
