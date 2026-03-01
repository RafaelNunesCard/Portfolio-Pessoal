import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class Argumentos {
  final int id;
  final String nome;

  Argumentos(this.id, this.nome);
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // home: Tela1(),
      initialRoute: '/',

      routes: {
        '/': (context) => Tela1(),
        Tela2.routeName: (context) => Tela2,
        //'/tela2': (context) => Tela2( ),
        '/tela2/tela3': (context) => Tela3(),
      },
    );
  }
}

class Tela1 extends StatelessWidget {
  const Tela1({super.key});
  int valor = 1;


  @override
  Widget build(BuildContext context) {
    return Container(
      child: MaterialApp(
        home: Scaffold(
          appBar: AppBar(
            title: Text('Tela 1'),
            backgroundColor: Colors.blueAccent,
          ),
          body: Center(
            child: ElevatedButton(
              onPressed: () {
                print('Clicou no botão da tela 1');

                Navigator.pushNamed(context, '/tela2', 
                arguments: argumentos(valor, "Rafael $valor" ));
                valor++;
                // Navigator.push(
                //   context,
                //   MaterialPageRoute(builder: (context) {
                //     return Tela2();
                //   })
                // );
              },
              child: Text('Ir para a tela 2'),
            ),
          ),
        ),
      ),
    );
  }
}

class Tela2 extends StatelessWidget {

  static const routeName =  "/tela2";

  const Tela2({super.key});

  @override
  Widget build(BuildContext context) {

    final argumentos = ModalRoute.of(context).settings.arguments as Argumentos;

    return Container(
      child: MaterialApp(
        home: Scaffold(
          appBar: AppBar(
            title: Text('Tela 2' + argumentos.nome),
            backgroundColor: Colors.redAccent,
          ),
          body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: () {
                    print('Clicou no botão da tela 2');
            
                    Navigator.pop(context);
                  },
                  child: Text('Retornar a tela 1'),
                ),
            
                ElevatedButton(
                  onPressed: () {
                    print('Clicou no botão da tela 2');
            
                    Navigator.pushNamed(context, '/tela2/tela3');
                  },
                  child: Text('Ir para a tela 3'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class Tela3 extends StatelessWidget {
  const Tela3({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: MaterialApp(
        home: Scaffold(
          appBar: AppBar(
            title: Text('Tela 3'),
            backgroundColor: Colors.greenAccent,
          ),
          body: Center(
            child: ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('Retornar para a tela 2'),
            ),
          ),
        ),
      ),
    );
  }
}
