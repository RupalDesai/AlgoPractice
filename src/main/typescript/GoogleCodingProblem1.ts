
function findBusiestPeriod() {
    let maxPeopleAtPeriod = 0;
    /* index will point to start of the busiest period */
    let index: number = 0;
    let peopleInBuilding = 0;
    const stamp = [
        { "timestamp": 1526579928, count: 3, "type": "enter" },
        { "timestamp": 1526580382, count: 2, "type": "exit" },
        { "timestamp": 1526579938, count: 6, "type": "enter" },
        { "timestamp": 1526579943, count: 1, "type": "enter" },
        { "timestamp": 1526579944, count: 0, "type": "enter" },
        { "timestamp": 1526580345, count: 5, "type": "exit" },
        { "timestamp": 1526580351, count: 3, "type": "exit" },
    ];

    stamp.forEach((log, i) => {
        if (log.type === "enter") {
            peopleInBuilding += log.count;
        }
        else {
            if (peopleInBuilding > maxPeopleAtPeriod) {
                maxPeopleAtPeriod = peopleInBuilding;
                index = i;
            }
            peopleInBuilding == log.count;
        }
    });
    console.log('Busiest Period in the building is from '+stamp[index-1].timestamp+' to '+stamp[index].timestamp);
}

findBusiestPeriod();