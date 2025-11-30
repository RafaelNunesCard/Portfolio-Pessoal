//RECURSIVIDADE
function fatorialn(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}