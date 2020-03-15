# labo-3-firebase-ArneSix
labo-3-firebase-ArneSix created by GitHub Classroom


Labo 3 - Real Time - Firebase
Taken Labo 3
Indienen via Github Classroom voor 17/03 - 20:00u

https://classroom.github.com/a/JOKALzoG (Koppelingen naar een externe site.)

Je kan vertrekken vanaf volgende files:

https://github.com/rogerthat-be/sense_dashboard (Koppelingen naar een externe site.)

Denk aan je UI in het dashboard!
 

Labo 3 Opdrachten
Accept labo3 invitation:

Labo3 Repo-structuur:

flask(folder)
templates(folder)
sensehat.html
server.py
sensehat_dashboard (folder)
assets (folder)
css (folder)
main.css
js (folder)
main.js 
pi (folder)
matrix.py
environment.py
README.md (omschrijving van de opdrachten)
.gitignore
LICENSE (MIT of consorten)
Tips
Color Conversions
zet hexadecimale kleuren om naar rgb via Python
Firebase Server Python
def on_snapshot(doc_snapshot, changes, read_time):
  for doc in doc_snapshot:
    doc_dict = doc.to_dict()
    print(doc_dict)

# Get the pi ref
pi_ref = db.collection(COLLECTION_NAME).document(PI_ID)
pi_watch = pi_ref.on_snapshot(on_snapshot)
sensehat_dashboard
Maak een webapplicatie m.b.v. Client (HTML, CSS en JavaScript), Server (Python Interpreter / Server on Raspberry PI: matrix.py en environment.py) en Google Firebase.

Server
environment.py
Om x-aantal minuten worden de waarden van de omgevingssensoren doorgestuurd naar Firebase.
matrix.py
De server luistert naar wijzigingen in matrix-document binnen Firebase
Client
Luistert naar wijzigingen in environment-document binnen Firebase
Stuurt wijzigingen van de matrix (kleur) door naar Firebase
 

Bedenk zelf nog een handige of leuke toevoeging

(vb een web-animatie in het dashboard die afhankelijk is van de manier waarop de raspberry beweegt.)
koppeling van een API aan het dashboard (kleur afhankelijk van het weer / een tweet / ...
