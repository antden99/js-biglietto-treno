Descrizione:
Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 (fortunelli :adulto_anziano:).
L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca - come quelle fatte in classe :occhiolino:
Consigli:
scrivete lo pseudo code
preparate lista strumenti
pensate prima al caso base e poi vi complicate la vita
zero grafica solo js.

# steps

- chiedi all'utente 2 input e salvali in 2 variabili
    - km che desidera percorrere
    - età passeggero

- Calcolare il prezzo del biglietto (Km che desirera percorrere * 0.21 euro)
    - salvare il prezzo del biglietto in una variabile

- SE  (età passeggero < 18)
    - (prezzo biglietto - 20%)

- ALTRIMENTI SE ( età passeggero > 65 )
    - (prezzo biglietto - 40%)

- Stampa come output il prezzo del biglietto

