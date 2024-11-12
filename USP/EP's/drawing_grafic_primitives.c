// Exercicio Programa - Desenho de Primitivas Graficas

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

// constante que define o valor maximo que um pixel pode assumir.

#define VALOR_MAXIMO 255

// constantes que definem as strings que podem ser especificadas na entrada, cada uma associada uma operacao.

#define RETA "RETA"
#define RETANGULO_CONTORNO "RETANGULO_CONTORNO"
#define RETANGULO_PREENCHIDO "RETANGULO_PREENCHIDO"
#define CLONA "CLONA"
#define CLONA_INV "CLONA_INV"
#define CLONA_HOR "CLONA_HOR"
#define CLONA_VER "CLONA_VER"
#define FIM "FIM"

// estrutura que representa uma imagem.

typedef struct {

	int altura;	// altura da imagem (numero de linhas)
	int largura;   	// largura da imagem (numero de colunas na imagem)
	int ** matriz;  // ponteiro para a matriz que armazena o conteudo da imagem

} Imagem;

// estrutura que representa um Ponto no plano 2D.

typedef struct {

	int x; // coordenada horizontal
	int y; // coordenada vertical

} Ponto2D;

// funcao que cria uma imagem vazia e a devolve. Precisa ser completada para funcionar corretamente.

Imagem * cria_imagem(int largura, int altura){
	int w, h; // w é a largura e h é a altura
	Imagem * imagem = (Imagem *) malloc(sizeof(Imagem));
	
	imagem->altura = altura;
	imagem->largura = largura;
	
	imagem->matriz = (int **) malloc(imagem->altura * sizeof(int *));
	
	for(h = 0; h < imagem->altura; h++){
		imagem->matriz[h] = (int *) malloc(imagem->largura * sizeof(int));
		for(w = 0; w < imagem->largura; w++){
			imagem->matriz[h][w] = 0; //pinta todos os pixels de preto para a visualização da área reservada
		}
	}

	return imagem;
}

// funcao (ja completa) que libera os recursos de memoria associados a uma imagem.

void libera_imagem(Imagem * imagem){

	int lin;

	for(lin = 0; lin < imagem->altura; lin++) free(imagem->matriz[lin]); // liberacao de cada linha da matriz (cada linha é um vetor de int)

	free(imagem->matriz);	// liberacao da matriz (que é na realidade um vetor de linhas, ou um vetor de "vetor de int")
	free(imagem);		// liberacao da estrutura em si
}


// funcao (ja completa) que salva uma imagem em um arquivo, no formato PGM. Programas/utilitarios que trabalham
// com imagens bitmap (como o Gimp e visualizadores de imagens normalmente instalados em ambiente Linux) em geral
// reconhecem formato. Se tiver dificuldades para visualizar os arquivos de imagem salvos por esta funcao, um visualizador 
// online pode ser encontrado neste link: http://paulcuth.me.uk/netpbm-viewer/.

void salva(Imagem * imagem, char * nomeArquivo){

	int lin, col;
	FILE * saida = fopen(nomeArquivo, "w"); // abertura do arquivo para escrita ("w" - write)

	if(saida){

		// o 'fprintf' funciona de forma igual ao 'printf', com a diferença que 
		// o conteudo eh escrito em um arquivo (associado a variavel 'saida')
	
		fprintf(saida, "P2\n%d %d\n%d\n", imagem->largura, imagem->altura, VALOR_MAXIMO);

		
		for(lin = 0; lin < imagem->altura; lin++){

			for(col = 0; col < imagem->largura; col++){

				fprintf(saida, (col == 0 ? "%d" : " %d"), imagem->matriz[lin][col]);  				
			}
			
			fprintf(saida, "\n");
		}
	}

	fclose(saida); // fechamento do arquivo
}

// desenha uma reta que tem origem no ponto 'p1' e termina no ponto 'p2', na tonalidade de cinza definida em 'cor'.
 
//Algoritmo DDA para a criação de retas
void reta(Imagem * imagem, Ponto2D p1, Ponto2D p2, int cor){
	double dx, dy, y, x, xi, yi; // xi = incremento de x; yi = incremento de y 
	//dx = distância entre p2.x e p1.x; dy = distância entre p2.y e p1.y
	int  step, xx, yy;
	//step é quantos pontos eu necessito para ir de p1 a p2
	dx = p2.x - p1.x;
	dy = p2.y - p1.y;
	
	if(abs(dx) > abs(dy)){
		step = abs(dx);
	}
	else{
		step = abs(dy);
	}
	xi = dx/step;
	yi = dy/step;

	x = p1.x;
	y = p1.y;
	
	for(int i = 1; i <= step; i++){
		x = x + xi;
		y = y + yi;
		xx = round(x);
		yy = round(y);
		imagem->matriz[yy][xx] = cor; 
	}
	
}

// desenha o contorno de um retangulo com cantos opostos em 'p1' e 'p2', na tonalidade de cinza definida em 'cor'.
// Você não pode assumir nada em relacao a posicao dos cantos 'p1' e 'p2', apenas que tratam-se de cantos opostos.

void retangulo_contorno(Imagem * imagem, Ponto2D p1, Ponto2D p2, int cor){
	int Ax, Ay, Bx, By, x, y;
	int xmin, ymin, xmax, ymax;
	//determina entre p1 e p2 qual será o maior e menor valor
	if(p1.x < p2.x){
		xmin = p1.x;
		xmax = p2.x;
	}
	else{
		xmin = p2.x;
		xmax = p1.x;
	}
	if(p1.y < p2.y){
		ymin = p1.y;
		ymax = p2.y;
	}
	else{
		ymin = p2.y;
		ymax = p1.y;
	}
	Ax = xmax;
	Ay = ymin;
	Bx = xmin;
	By = ymax;

	for(x = xmin; x <= Ax; x++){
		imagem->matriz[ymin][x] = cor;
	}
	for(y = ymin; y <= By; y++){
		imagem->matriz[y][xmin] = cor;
	}
	for(x = Bx; x <= xmax; x++){
		imagem->matriz[ymax][x] = cor;
	}
	for(y = Ay; y <= ymax; y++){
		imagem->matriz[y][xmax] = cor;
	}
}

// desenha um retangulo preenchido com cantos opostos em 'p1' e 'p2', na tonalidade de cinza definida em 'cor'.
// Você não pode assumir nada em relacao a posicao dos cantos 'p1' e 'p2', apenas que tratam-se de cantos opostos.

void retangulo_preenchido(Imagem * imagem, Ponto2D p1, Ponto2D p2, int cor){
	int x, y;
	int xmin, ymin, xmax, ymax;
	if(p1.x < p2.x){
		xmin = p1.x;
		xmax = p2.x;
	}
	else{
		xmin = p2.x;
		xmax = p1.x;
	}
	if(p1.y < p2.y){
		ymin = p1.y;
		ymax = p2.y;
	}
	else{
		ymin = p2.y;
		ymax = p1.y;
	}

	for(x = xmin; x <= xmax; x++){
		for(y = ymin; y <= ymax; y++){
			imagem->matriz[y][x] = cor;
		} 
	}
	
}

// copia o conteudo da area compreendida no retangulo delimitado pelos cantos opostos 'p1' e 'p2' para uma região destino 
// na imagem. Para esta funcao, voce pode assumir que 'p1' representa o canto superior esquerdo da area a ser copiada, 
// 'p2' o canto inferior direito desta mesma area, e 'p3' o canto superior esquerdo da regiao que receberá a copia.

void clona(Imagem * imagem, Ponto2D p1, Ponto2D p2, Ponto2D p3){
	int x, y;
	int xmin, ymin, xmax, ymax;
	if(p1.x < p2.x){
		xmin = p1.x;
		xmax = p2.x;
	}
	else{
		xmin = p2.x;
		xmax = p1.x;
	}
	if(p1.y < p2.y){
		ymin = p1.y;
		ymax = p2.y;
	}
	else{
		ymin = p2.y;
		ymax = p1.y;
	}
	for(y = ymin; y <= ymax; y++){
		for(x = xmin; x <= xmax; x++){
			imagem->matriz[y + p3.y][x + p3.x] = imagem->matriz[y][x];
		}
	}
}

// similar a funcao acima, mas invertendo o valor dos pixels copiados para a região destino. Isto é, pixels brancos devem
// se tornar pretos, pixels pretos se tornar brancos, e pixels em tons de cinza devem assumir o valor complementar (aquele
// que somado ao valor original resulta no valor definido na constante VALOR_MAXIMO).

void clona_inverte_cor(Imagem * imagem, Ponto2D p1, Ponto2D p2, Ponto2D p3){
	int x, y;
	int xmin, ymin, xmax, ymax;
	if(p1.x < p2.x){
		xmin = p1.x;
		xmax = p2.x;
	}
	else{
		xmin = p2.x;
		xmax = p1.x;
	}
	if(p1.y < p2.y){
		ymin = p1.y;
		ymax = p2.y;
	}
	else{
		ymin = p2.y;
		ymax = p1.y;
	}
	printf("xmin: %d\n", xmin);
	printf("ymin: %d\n", ymin);
	for(y = ymin; y <= ymax; y++){
		for(x = xmin; x <= xmax; x++){
			imagem->matriz[y + p3.y][x + p3.x] = VALOR_MAXIMO - imagem->matriz[y][x];
		}
	}
}

// similar a funcao 'clona', mas espelhando horizontalmente a região copiada.

void clona_espelha_horizontal(Imagem * imagem, Ponto2D p1, Ponto2D p2, Ponto2D p3){
	int y, x, k;
	for(y = p1.y; y <= p2.y; y++){
		for(x = p1.x, k = p2.x; x <= p2.x, k >= p1.x; x++, k--){
			imagem->matriz[y][p3.x + k] = imagem->matriz[y][x];
		}
	}
}

// similar a funcao 'clona', mas espelhando verticalmente a região copiada.

void clona_espelha_vertical(Imagem * imagem, Ponto2D p1, Ponto2D p2, Ponto2D p3){
	int y, x, k;
	for(y = p1.y, k = p2.y; y <= p2.y, k >=p1.y; y++, k--){
		for(x = p1.x; x <= p2.x; x++){
			imagem->matriz[k + p3.y][x] = imagem->matriz[y][x];
		}
	}	
}

int main(){

	int largura, altura;
	int cor;
	char operacao[32], nome_arquivo[256];
	Imagem * img;
	Ponto2D p1;
	Ponto2D p2;
	Ponto2D p3;

	scanf("%s %d %d", nome_arquivo, &largura, &altura);
	img = cria_imagem(largura, altura);

	while(scanf("%s", operacao) == 1 && strcmp(operacao, FIM) != 0){
	
		if(strcmp(operacao, RETA) == 0){
			scanf("%d %d %d %d %d", &p1.x, &p1.y, &p2.x, &p2.y, &cor);
			reta(img, p1, p2, cor);
		}
		else if(strcmp(operacao, RETANGULO_CONTORNO) == 0){
			scanf("%d %d %d %d %d", &p1.x, &p1.y, &p2.x, &p2.y, &cor);
			retangulo_contorno(img, p1, p2, cor);
		}
		else if(strcmp(operacao, RETANGULO_PREENCHIDO) == 0){
			scanf("%d %d %d %d %d", &p1.x, &p1.y, &p2.x, &p2.y, &cor);
			retangulo_preenchido(img, p1, p2, cor);
		}
		else if(strcmp(operacao, CLONA) == 0){
			scanf("%d %d %d %d %d %d", &p1.x, &p1.y, &p2.x, &p2.y, &p3.x, &p3.y);
			clona(img, p1, p2, p3);
		}
		else if(strcmp(operacao, CLONA_INV) == 0){
			scanf("%d %d %d %d %d %d", &p1.x, &p1.y, &p2.x, &p2.y, &p3.x, &p3.y);
			clona_inverte_cor(img, p1, p2, p3);
		}
		else if(strcmp(operacao, CLONA_HOR) == 0){
			scanf("%d %d %d %d %d %d", &p1.x, &p1.y, &p2.x, &p2.y, &p3.x, &p3.y);
			clona_espelha_horizontal(img, p1, p2, p3);
		}
		else if(strcmp(operacao, CLONA_VER) == 0){
			scanf("%d %d %d %d %d %d", &p1.x, &p1.y, &p2.x, &p2.y, &p3.x, &p3.y);
			clona_espelha_vertical(img, p1, p2, p3);
		}
	}

	salva(img, nome_arquivo);
	libera_imagem(img);

	return 0;	
}
