import 'package:flutter/material.dart';

void main() {
  int valor = 10;

  runApp(MyApp( title: 'Aplicativo Olá Mundo', valor: valor, ));
}

class MyApp extends StatelessWidget {
  final String title;
  final int valor;

  const MyApp({super.key , this.title = '', this.valor = 0});

    @override
    Widget build(BuildContext context) {
      return MaterialApp(
        home: Scaffold(
          appBar: AppBar(
            title: Text( title ),
          ),
          body: Center(
            child: Text(
              'Olá Mundo $valor',
              style: TextStyle(
                  fontSize: 50,
                  color: Colors.black
              ),
            ),
          ),
        ),
     );
   }
}
