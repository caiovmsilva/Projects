'''
    Enunciado
    https://www.notion.so/Exerc-cio-1-27daf9aee87680fcaf56c04d1d1aa08c
'''

n = int(input("Digite um numero natural: "))

aux = n

dig = reverso = 0

while aux != 0:
    dig = aux%10 # pega último dígito
    reverso = reverso * 10 + dig
    aux = aux//10

if reverso == n: 
    print(n, "é um palíndromo")
else:
    print(n, "não é um palíndromo")

