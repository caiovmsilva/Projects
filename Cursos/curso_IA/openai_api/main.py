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
        {'role': 'user', 
        'content': "Como eu posso salvar uma chave privada em um arquivo e usá-la dentro de outro arquivo?"},
    ],
)

print(response.choices[0].message.content)