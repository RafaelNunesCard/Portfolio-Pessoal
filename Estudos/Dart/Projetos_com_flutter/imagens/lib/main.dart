import 'package:flutter/material.dart';
void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {


  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text( 'Colocando imagens' ),
        ),
        body: Image.network(
          'https://imgs.search.brave.com/45HJcnPFJqBLYPLVVlTeaE3TuM8wd3Vb80g5yHkNxwEs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjUv/NzcxLzg0Mi9zbWFs/bC9jdXRlLW5ld2Zv/dW5kbGFuZC1kb2ct/aW4tYS1zbWFsbC1i/YXRodHViLXdpdGgt/c29hcC1mb2FtLWFu/ZC1idWJibGVzLWN1/dGUtcGFzdGVsLWNv/bG9ycy1nZW5lcmF0/aXZlLWFpLXBob3Rv/LmpwZw',
          fit: BoxFit.cover,
          width: double.infinity,
          height: double.infinity,
          ),

        /*
        Imagens baixadas
        body: Image.asset(
          'assets/images/Cat.jpg',
          fit: BoxFit.cover,
          width: double.infinity,
          height: double.infinity,
        ),
        */
      ),
    );
  }
}