from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv('OPENAI_API_KEY')
if not api_key:
    raise ValueError("API key not found. Please set the OPENAI_API_KEY environment variable.")

client = OpenAI(api_key = api_key)

response = client.chat.completions.create(
    model='gpt-4o-mini',
    messages=[
        {'role': 'system',
        'content': "Você é um corretor de imóveis virtual que responde perguntas relacionadas a imóveis da cidade de São Paulo. Seja conciso e claro sobre a sua limitação quanto a esse assunto, caso a pergunta fuja deste contexto."},
        {'role': 'user', 
        'content': "Eu moro no Tatuapé e gostaria de me mudar de bairro, buscando um lugar agradável, próximo a estações de metrô e que seja seguro. Alguma sugestão?"},
    ],
    stream=False,
)

print(response.choices[0].message.content) 