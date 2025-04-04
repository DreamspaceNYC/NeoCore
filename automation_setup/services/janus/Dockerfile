FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install flask
COPY janus_service.py .
CMD ["python", "janus_service.py"]

