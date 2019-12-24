/*

Good morning!

Here's a solution to yesterday's problem.

This is your coding interview problem for today.

This problem was asked by Snapchat.

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
*/



function min_rooms_required(start: number[], end: number[]) {
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    console.log(start, end);
    let i = 0, j = 0;
    let min_rooms_required = 0;
    let count_overlap_interval = 0;
    while (i < start.length && j < end.length) {
        if (start[i] < end[j]) {
            i++;
            count_overlap_interval++;
        } else {
            j++;
            count_overlap_interval--;
        }
        min_rooms_required = Math.max(min_rooms_required, count_overlap_interval);
    }
    console.log('Minimun no of intervals needed', min_rooms_required);
}

min_rooms_required([30, 0, 60], [75, 50, 150]);
