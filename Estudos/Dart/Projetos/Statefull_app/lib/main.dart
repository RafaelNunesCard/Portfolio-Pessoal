import 'package:flutter/material.dart';

void main() {
  runApp(MyApp( nome: 'Pedro',));
}

class MyApp extends StatefulWidget {
  final String nome;

  const MyApp({super.key, this.nome = ''});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int salario = 7000;

  void aumentaSalario( int valor ) {
    setState(() {
      salario = salario + valor;
    });
  }

  void diminuiSalario( int valor ) {
    setState(() {
      salario = salario - valor;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          body: Center(
            child: GestureDetector(
              onTap: () {
                  print('Clicou');
                  aumentaSalario(200);
                },
              child: Text(
              'O salário de ${widget.nome} é $salario',
              textDirection: TextDirection.ltr,
            ),
            ),
          ),
      ),
    );
  }
}