//Caio Vinícius Melo da Silva
//Número USP: 12542859

#include <stdio.h>
#include <math.h>


//calcula o semiperímetro do triângulo
double semiPerimetro(double a, double b, double c){
    return ((a + b + c) / 2);
}

int main (){

    // lados do triângulo hipotético
    double l1, l2, l3;
    double area, P;

    scanf("%lf %lf %lf", &l1, &l2, &l3);
    
    P = semiPerimetro(l1, l2, l3);
    //calcula a area do triangulo
    area = sqrt((P)*(P - l1)*(P - l2)*(P - l3));

    // avalia condicao de existencia
    if((l1 < l2 + l3) && (l2 < l1 + l3) && (l3 < l1 + l2)){
        printf("Medidas dos lados formam um triangulo VALIDO\n");

        // bloco de condicional classificacao dos lados
        if((l1 == l2 && l1 == l3) ){
            printf("Classificacao em funcao dos lados: EQUILATERO\n");
        }
        else if((l1 == l2 && l1 != l3) || (l1 != l2 && l1 == l3) || (l2 == l3 && l2 != l3)){
            printf("Classificacao em funcao dos lados: ISOCELES\n");
        }
        else{
            printf("Classificacao em funcao dos lados: ESCALENO\n");
        }

        // bloco de condicional classificacao dos angulos
        if(((l1 >= l2) && (l1 >= l3) && (pow(l1, 2) < pow(l2, 2) + pow(l3, 2))) || ((l2 >= l1) && (l2 >= l3) && (pow(l2, 2) < pow(l1, 2) + pow(l3, 2))) || ((l3 >= l1) && (l3 >= l2) && (pow(l3, 2) < pow(l2, 2) + pow(l1, 2)))){
            printf("Classificacao em funcao dos angulos: AGUDO\n");
        }
        else if (((l1 >= l2) && (l1 >= l3) && (pow(l1, 2) > pow(l2, 2) + pow(l3, 2))) || ((l2 >= l1) && (l2 >= l3) && (pow(l2, 2) > pow(l1, 2) + pow(l3, 2))) || ((l3 >= l1) && (l3 >= l2) && (pow(l3, 2) > pow(l2, 2) + pow(l1, 2)))) {
            printf("Classificacao em funcao dos angulos: OBTUSO\n");
        }
        else{
            printf("Classificacao em funcao dos angulos: RETO\n");
        }
        // imprime valor da area
        printf("Area do triangulo: %lf\n", area);
        
    }
    else{
        printf("Medidas dos lados formam um triangulo INVALIDO\n");
    }
    
    return 0;
}