function status(request, response) {
  //request é o que chega do mundo, e o response é o que queremos responder
  response.status(200).json("eu sou ácima são da média");
}
export default status; //entrada do endpoint

//o .send não define o tipo de teclado que esta enviando a mengaem.
//diferente do .json que define o charset: utf-8
