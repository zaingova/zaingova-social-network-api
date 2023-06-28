module.exports = {
  // function that takes full date string format and returns a shortened version using 'toLocaleDateString'
  dateFunction: (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(options) + " at " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
};