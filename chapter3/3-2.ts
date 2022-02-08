class AppState {
    
    // this property represent app state
    counter = 0;
    // this property stores the refrence to the single instance of AppState
    private static instanceRef: AppState;

    private constructor() {};

    static getInstance(): AppState {
        if(AppState.instanceRef === undefined) {
            AppState.instanceRef = new AppState();
        }
        return AppState.instanceRef;
    }
}


// const appState = new AppState(); // error because of private

// this variable gets a reference to the AppState instance.
const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();

appState1.counter++;
appState1.counter++;
appState2.counter++;
appState2.counter++;

console.log(appState1.counter);
console.log(appState2.counter);
