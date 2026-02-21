void main() {
  // For:
  for(int i = 1 ; i <= 10; i++) {
    print(i);
  }

  for(int i = 0 ; i < 3; i++) {
    for(int j = 0; j < 3; j++) {
      print('($i,$j)');
    }
  }

  //While:
  bool condicao = true;
  int i =  1;

  while(condicao == true) {
    print(i);
    i++;
    if(i > 10){
      condicao = false;
    }
  }

  //Do while(sempre executa uma vez):
  do{
    print(i);
    i++;
    if(i > 10){
      condicao = false;
    }
  }while(condicao);
}
