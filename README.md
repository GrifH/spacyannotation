# spacyannotation
A tool to annotate data for SpaCy NER to create custom NER model. Can host this locally using live-server

    npm install live-server
    live-server

## Inputs

### PUBMED ID

Using the url parameter _pubmedID_ you can load a paper with publically available abstract to the annotation machine e.g. [hosted url]/?pubmedID=33248227. If the abstract can be found, it will be loaded into the tool.

### Command Line

The python script _paperLoad.py_ can be used to load files from the _papers/_ folder. Place all texts in files in the _papers/_ folder, and run

    python3 paperLoad.py
    
This will load the papers for access from url parameters. [hosted url]/?paper=1 Will load the first text in. The parameter ranges from 1 to number of papers loaded.

### Copy/Paste

You can copy/paste text into the raw data input box (bottom left). Seperate sentences by new line.

## Usage

Using the above options, load raw data into the bottom left text box. The top left box will be populated with the first line of raw text. Select a word or phrase you'd like to label, and then click the appropriate label. This will add the annotation to the top right text box. When the line is completely annotated, hit the "Mark as Completed". This will format the annotations and append them to the bottom right text box, and a new sentence will be loaded into the top left to begin annotating.

## Saving

### Copy/Paste

The annotations saved in the bottom right can be copied and used as they are for training.

### Saving

Add your name or file name into the name text box on top left. Hitting "Save Annotations" will prepare the "Download Annotations" Link. Hitting "Download Annotations" will download a text file with the annotations.
