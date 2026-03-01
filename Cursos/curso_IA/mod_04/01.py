# from dotenv import load_dotenv
# import os 
# from langchain_community.tools import DuckDuckGoSearchRun

# #Não está usando LLM, apenas fazendo uma busca na web
# ddg_search = DuckDuckGoSearchRun()

# search_result = ddg_search.run("Quem foi Albert Einstein?")

# print(search_result)

# from langchain_experimental.utilities import PythonREPL

# python_repl = PythonREPL()

# result = python_repl.run('print(5 * 5)')

# print(result)  # Output: 25

from langchain_community.tools import WikipediaQueryRun
from langchain_community.utilities import WikipediaAPIWrapper

wikipedia = WikipediaQueryRun(
    api_wrapper = WikipediaAPIWrapper(
        lang='pt'
    )
    
)

wikipedia_results = wikipedia.run("Quem foi Michael Jackson?")

print(wikipedia_results)