FROM python:latest

RUN pip install --upgrade pip

RUN mkdir /app

WORKDIR /app

COPY . .

RUN pip install -r reqclearuirements.txt

RUN python -m spacy download en_core_web_lg

CMD flask run --host=0.0.0.0