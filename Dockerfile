FROM python:3.8-slim

COPY entrypoint.py /entrypoint.py
RUN chmod +x /entrypoint.py
ENTRYPOINT ["/entrypoint.py"]