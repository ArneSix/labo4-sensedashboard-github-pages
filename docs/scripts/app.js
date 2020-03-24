const dbConfig = {
    collection: 'raspberry',
    document: 'dashboard'
};

const app = {
    init() {
        // initialiseer de firebase app
        firebase.initializeApp(firebaseConfig);

        this._db = firebase.firestore();
        // cache the DOM
        this.cacheDOMElements();
        this.cacheDOMEvents();
        this.cacheFirestoreChanges();

        this.humidity = document.querySelector('.humidity');
        this.compass = document.querySelector('.compass');
        this.temp = document.querySelector('.temp');

        this.Aroll = document.querySelector('.a-roll');
        this.Apitch = document.querySelector('.a-pitch');
        this.Ayaw = document.querySelector('.a-yaw');

        this.Groll = document.querySelector('.g-roll');
        this.Gpitch = document.querySelector('.g-pitch');
        this.Gyaw = document.querySelector('.g-yaw');

        this._matrix = {
            isOn: false, color: {value: '#000000', type: 'hex'}
        };
    },
    cacheDOMElements() {
        this.$colorPicker = document.querySelector('#colorPicker');
        this.$toggleMatrix = document.querySelector('#toggleMatrix');
        this.$btnChange = document.querySelector('#btnChange');
    },
    cacheDOMEvents() {
        this.$btnChange.addEventListener('click', (e) => {
            e.preventDefault();

            this._matrix.color.value = this.$colorPicker.value;
            this._matrix.isOn = this.$toggleMatrix.checked;

            this.updateInFirebase();
        });
    },
    cacheFirestoreChanges() {
        this._db.collection(dbConfig.collection).doc(dbConfig.document).onSnapshot((snap) => {
            const response = snap.data();
            const data = response.sensor;

            this.humidity.innerText = data.humidity;
            this.temp.innerText = data.temp;
            this.compass.innerText = data.compass;
            
            this.Aroll.innerText = data.accelero.roll;
            this.Apitch.innerText = data.accelero.pitch;
            this.Ayaw.innerText = data.accelero.yaw;

            this.Groll.innerText = data.gyro.roll;
            this.Gpitch.innerText = data.gyro.pitch;
            this.Gyaw.innerText = data.gyro.yaw;
            
        });
    },
    updateInFirebase() {
        this._db.collection(dbConfig.collection).doc(dbConfig.document)
            .set(
                {matrix: this._matrix},
                {merge: true}
            );
    }
}

app.init();
