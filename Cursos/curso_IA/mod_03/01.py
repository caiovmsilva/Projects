from dotenv import load_dotenv
import os
from langchain_openai import OpenAI, ChatOpenAI

load_dotenv()
api_key = os.getenv('OPENAI_API_KEY')

# model = OpenAI()

# response = model.invoke(
#     input="Quem foi Alan Turing?",
#     temperature=0.7,
#     max_tokens=300,

# )

# print(response)

model = ChatOpenAI(
    model = "gpt-3.5-turbo",
)

messages = [
    {'role': 'system', 'content': 'Você é um assistente inteligente.'},
    {'role': 'user', 'content': 'Quem foi Alan Turing?'},
]
