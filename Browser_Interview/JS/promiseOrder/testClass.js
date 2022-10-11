class Scheduler {
    constructor(limit) {
        this.tasks = [];
        this.run = [];
        this.limit = limit;
    }

    add(task) {
        this.tasks.push(task);
        return this.schedule();
    }

    schedule() {
        if (this.run.length < this.limit && this.tasks.length) {
            const task = this.tasks.shift();

            const promise = task().then(() => {
                console.log(promise, this.run);
                this.run.splice(this.run.indexOf(promise), 1);
            });

            this.run.push(promise);
            return promise;
        } else {
            return Promise.race(this.run).then(() => this.schedule());
        }
    }
}

const scheduler = new Scheduler(2);

const timeout = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)));
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');