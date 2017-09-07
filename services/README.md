# OsteAPI Dokumentation

## Resurser

### Get /cheeses 

Resursen repræsenterer alle oste i kartoteket.
Resursen er formateret på følgende måde:

```JSON 
[{
    "varenr": 1236,
    "navn": "St clemens",
    "pris": 42.5,
    "type": "Blåskimmel",
    "producent": "St clemens",
    "antal": 15, 
    "beskrivelse": {
        "tekst": "Den ost er bare super smagfuld og dejlig indeni...",
        "smag": "mild",
        "vægt": 300,
        "billede": "stclemensblaaskimmel.jpg"
    }
}]
```

### GET /cheeses/\<varenummer>

Resursen repræsenterer en enkelt ost i kartoteket.
Resursen er formateret på følgende måde

```JSON

{
    "varenr": 5678,
    "navn": "Salatost i tern",
    "pris": 21.95,
    "type": "Salatost",
    "antal": 8,
    "producent": "Karolines køkken",
    "beskrivelse": {
        "vægt": 200,
        "smag": "mild",
        "billede": "fetatern.jpg",
        "tekst":"Letsaltet ost skåret i tern, lagt i et genluksbæger med si for nem håndtering."
    }
}

```