let limit = 2;

let tasks = [];

const addTask = (timer, content) => {
    const target = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // console.log(content);
                resolve(content);
            }, timer);
        })
    };

    tasks.push(target);
};

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')


