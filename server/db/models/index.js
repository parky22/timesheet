const Employee = require('./employee');
const Time = require('./time');

Employee.hasMany(Time);
Time.belongsTo(Employee);
