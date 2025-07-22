from dotenv import load_dotenv
import os
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage

load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')

model = ChatOpenAI(model="gpt-3.5-turbo")

chat_template = ChatPromptTemplate.from_messages(
    [
        SystemMessage(content="Você deve responder baseado em dados geográficos de regiões do Brasil."),
        HumanMessagePromptTemplate.from_template("Por favor, me fale sobre a região {região}."),
        AIMessage(content="Claro, vou começar coletando informações sobre a região e coletando dados disponíveis."),
        HumanMessage(content="Certifique-se de incluir dados demográficos"),
        AIMessage(content="Entendido. Aqui estão os dados: "),
    ]
    )

prompt = chat_template.format_messages(região="Nordeste")
# print(prompt)

response = model.invoke(prompt)

print(response.content)