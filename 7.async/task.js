class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Параметр id не передан');
        }

        if (this.alarmCollection.find(item => item.id === id)) {
             console.error('Такой будильник уже сущетсвует');
            return;
            }

        this.alarmCollection.push({
            id,
            time,
            callback
        })
    }

    removeClock(id) {
        const index = this.alarmCollection.findIndex(item => item.id === id);
           if (index !== -1) {
            this.alarmCollection.splice(index, 1);
            return true;
        } else {
            return false; 
        }
    }

    getCurrentFormattedTime() {
        const timeCurrent = new Date();
        const hours = String(timeCurrent.getHours()).padStart(2, '0');
        const minutes = String(timeCurrent.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

     checkClock(alarm) {
        if (this.getCurrentFormattedTime() === alarm.time) {
            alarm.callback();
            }
        };

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => 
                this.alarmCollection.forEach(item => this.checkClock(item))
           )
        }
     }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((alarm) => {
            console.log(`id: ${alarm.id}, time: ${alarm.time}`)
        }
    );
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

