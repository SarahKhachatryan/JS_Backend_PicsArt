/**EventEmitter implementation*/
class EventEmitter {
    listeners = [];

    emit(eventName, ...data) {
        this.listeners.filter(({name}) => name === eventName)
            .forEach(({callback}) => callback.call(this, ...data));
    }


    on(name, callback) {
        if (typeof callback === 'function' && typeof name === 'string') {
            this.listeners.push({name, callback});
        }

    }
}

const emitter = new EventEmitter();

//register a listener
emitter.on('hello', function () {
    console.log('listener called');
})

//rise an event
emitter.emit('hello');

