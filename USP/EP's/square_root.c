//Exercicio Programa - Calculo da Raiz Quadrada

#include <stdio.h>

int main (){
   double n, e, x, MAX, MIN, dif;
   int c;
   c = 0;
   MIN = 0;

   //entrar o valor de n e e (tolerância)
   scanf("%lf %lf", &n, &e);
   MAX = n;

    //caso de n >= 1
    if(n >= 1 && e > 0){
        //laço para realização das iterações 
        do{
            printf("%d:", c);
            c++;
            //x será sempre a média do intervalo de MIN à MAX
            x = (MAX + MIN)/2;

            printf("intervalo = [ %.10f, %.10f]  x = %.10f\n", MIN, MAX, x);
            dif = x*x - n;

            //bloco para garantir que a diferença seja sempre absoluta
            if(dif > 0){
                dif = 1*dif;
            }
            else if(dif < 0){
                dif = (-1)*dif;
            }

            //possíveis situações após a atribuição do valor de x
            if(dif < e){
                printf("Numero de iteracoes: %d\n", c);
                printf("Diferenca absoluta: %.10f\n", dif);
                printf("Raiz quadrada: %.10f\n", x);
            }
            else if(x*x > n){
                MAX = x;
            }
            else if(x*x < n){
                MIN = x;
            }
        
        //enquanto x não for uma boa aproximação de raiz de n
        }while((dif < e) != 1);
    }

    //caso de 0 <= n < 1
    else if(n >= 0 && n < 1 && e > 0){
        //como x, para 0<=n<1, sempre será maior do que n, x deve estar no intervalo de n < x < 1 
        MIN = n;
        MAX = 1;
        do{
            printf("%d:", c);
            c++;
            x = (MAX + MIN)/2;

            printf("intervalo = [ %.10lf, %.10lf)  x = %.10lf\n", MIN, MAX, x);
            dif = x*x - n;

            if(dif > 0){
                dif = 1*dif;
            }
            else if(dif < 0){
                dif = (-1)*dif;
            }

            if(dif < e){
                    printf("Numero de iteracoes: %d\n", c);
                    printf("Diferenca absoluta: %.10f\n", dif);
                    printf("Raiz quadrada: %.10f\n", x);
                }
            else if(x*x > n){
                MAX = x;
            }
            else if(x*x < MIN){
                MIN = x;
            }
        }while((dif < e) != 1);
        
    }

   return 0;
}
