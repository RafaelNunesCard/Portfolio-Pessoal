import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(

      theme: ThemeData(
        fontFamily: "BlackSample",
      ),
      home: Scallfolf(
        appBar: AppBar(
          title: Text("Aplicativo Exemplo Scaffold"),
        ),
        body: Center(
          child: Text(
            "Texto\nTexto 2",
            textDirection: TextDirection.ltr,
            style: TextStyle(
              fontsize: 50,
              height: 2,
              fontWeight: FontWeight.bold,
              color: Colors.black[700],
              backgroundColor: Colors.yellow.shade700,
              decoration: TextDecoration.underline,
            ),
          ),
        )
      )
    );
    
    /*
     Container(
      child: Center(
        child: 
      )
    );
    */
  }
}