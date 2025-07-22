import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate   
from langchain_core.output_parsers import StrOutputParser 

load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')

model = ChatOpenAI(model="gpt-3.5-turbo")

classification_chain = (
    PromptTemplate.from_template(
        '''
        Classifique a pergunta do usuário em um dos seguintes setores:
        - Financeiro
        - Suporte Técnico 
        - Outras Informações

        Pergunta: {pergunta}
        ''' 
    )
    | model 
    | StrOutputParser()
)

Financial_chain = (
    PromptTemplate.from_template(
        '''
        Você é um especialista financeiro.
        Sempre responda às perguntas começando com "Bem-vindo ao Setor Financeiro".
        Responda à pergunta do usuário: 
        Pergunta: {pergunta}
        ''' 
    )
    | model 
    | StrOutputParser()
)

tech_support_chain = (
    PromptTemplate.from_template(
        '''
        Você é um especialista em suporte técnico.
        Sempre responda às perguntas começando com "Bem-vindo ao Setor de Suporte Técnico".
        Responda à pergunta do usuário: 
        Pergunta: {pergunta}
        ''' 
    )
    | model 
    | StrOutputParser()
)

other_info_chain = (
    PromptTemplate.from_template(
        '''
        Você é um especialista em outras informações.
        Sempre responda às perguntas começando com "Bem-vindo ao Setor de Informações Gerais".
        Responda à pergunta do usuário: 
        Pergunta: {pergunta}
        '''
    )
    | model
    | StrOutputParser()
)

def route(classification):
    classification = classification.lower()
    if "financeiro" in classification:
        return Financial_chain
    elif "suporte técnico" in classification:
        return tech_support_chain
    else:
        return other_info_chain
    
pergunta = input("Digite sua pergunta: ")

classification = classification_chain.invoke(
    {"pergunta": pergunta}
)

response_chain = route(classification = classification)

response = response_chain.invoke(
    {"pergunta": pergunta}
)

print(response)