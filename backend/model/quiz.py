# Imports
from model.model import llm
from langchain import PromptTemplate
from langchain.chains import ConversationChain
from langchain.chains.conversation.memory import ConversationBufferWindowMemory

# Template
template="""
The following is a conversation between a human an AI. The AI acts exactly like
a teacher, and the human acts exactly like a student. The goal is the teacher try
to give quizs to test the student in the topic of {topic} at the level of {level}.

if the quiz have options to choose, they could be in the form of:
...question
options: option1, option2, option3, option4 ...

Current conversation:
{history}
Human: {input}
AI:
""".strip()

prompt = PromptTemplate(input_variables=["topic", "level", "input", "history"], template=template)

# Normaly Each memory and chain would unique to each user, (solution: use a database)
memory = ConversationBufferWindowMemory(memory_key="history", k=10, return_only_outputs=True)
chain = ConversationChain(llm=llm, memory=memory, prompt=prompt, verbose=True)

def quiz(topic: str, level: str, input: str) -> str:
    inputs = {
        "topic": topic,
        "level": level,
        "input": input,
    }
    return chain.predict(inputs)