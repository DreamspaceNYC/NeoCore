FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install flask
COPY ollama_service.py .
CMD ["python", "ollama_service.py"]

