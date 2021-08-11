# test-08102021

1. run npm install on test-back folder.
2. run npm start
3. server is up and running on http://localhost:3002/
4. to get all data go to http://localhost:3002/dossier/
5. to fetch data by filter, use POSTMAN or FIRECAMP and go to http://localhost:3002/dossier/filters 
   add this to the body (JSON forma) of the request
   ```
   {
    "CreationDateMin": "",
    "CreationDateMax": "2021-07-02T19:33:27.539+00:00",
    "workshopBeginDateMin": "2021-05-01T00:00:00.000Z",
    "workshopBeginDateMax": "",
    "workshopEndDateMin": "2021-06-18T00:00:00.000Z",
    "workshopEndDateMax": "2021-06-20T00:00:00.000Z",
    "dateFacturationMax": "",
    "dateFacturationMin": "",
    "payementVendeur": "",
    "payementCoach": "",
    "Tarifs": "",
    "types": "Client",
    "call": "Confirmé",
    "vendeurs": "Bouachir",
    "workshops": "",
    "provenances": "Mehdi DI",
    "coachs": "",
    "statusDossier": "Service déclaré"
   }
  ```
