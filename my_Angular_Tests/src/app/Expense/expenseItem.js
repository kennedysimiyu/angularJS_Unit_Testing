// expense item function
function ExpenseItem(type, description, amount) {
    this.type = type;
    this.description = description;
    this.amount = amount;
}
// setting up of a reasonable amount functionality while inhering from ExpenseItem function
ExpenseItem.prototype.isReasonable = function(){
    return this.amount <= 100;
}