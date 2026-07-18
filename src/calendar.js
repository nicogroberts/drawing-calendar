export { displayCurrentDate };

/*
Object containing all the days corresponding to each month
*/
const daysOfTheMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
};

/*
Object containing all the different colors corresponding to amount of activity levels
*/
const activityStates = {
    None: '#262626',
    Least: '#033a16',
    Less: '#196c2e',
    More: '#2ea043',
    Most: '#55d163'
};

// first thing needed is the current date

const currentDate = new Date();

const displayCurrentDate = () => {
    console.log(currentDate);
};