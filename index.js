function Student(name) { 
    this.name = this.name;
}
Student.prototype.hello = function () { 
    alert('Hello' + this.name + '!')
}

var vedio = new Student();
console.log(vedio.constructor === Student.prototype.constructor);
