const dbConfig = {
    collection: 'raspberry_collection',
    document: 'lectorpi_doc'
};

const app = {
    init() {
        // initialiseer de firebase app
        firebase.initializeApp(firebaseConfig);
        this._db = firebase.firestore();
        // cache the DOM
        this.cacheDOMElements();
        this.cacheDOMEvents();
    },
    cacheDOMElements() {
        this.$colorPicker = document.querySelector('#colorPicker');
        this.$btnChange = document.querySelector('#btnChange');
    },
    cacheDOMEvents() {
        this.$btnChange.addEventListener('click', (e) => {
            e.preventDefault();

            const color = this.$colorPicker.value;
        });
    },
    updateInFirebase() {

    }
}

app.init();