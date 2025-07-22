from dotenv import load_dotenv
import os
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate

load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')


model = ChatOpenAI(model="gpt-3.5-turbo")

template = '''
Traduza o texto do {idioma1} para o {idioma2}:
{texto}
'''

prompt_template = PromptTemplate.from_template(
    template = template
)

prompt = prompt_template.format(
    idioma1="português",
    idioma2="alemão",
    texto="Bom dia!"
)

print(f"Prompt: {prompt}")

response = model.invoke(prompt)

print(f"Texto traduzido: {response.content}")
