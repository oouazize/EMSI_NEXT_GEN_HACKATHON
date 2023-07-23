## Run: 
docker compose --build -d

## Nots:
    If it disend work run manualy:
        cd client && npm run dev
        docker compose up -d database
        docker compose up -d database-client
        cd backend && pip install -r requirements.txt && flask run --host=0.0.0.0