function myInstanceof(L, R) {
    var O = R.prototype;
    L = L.__proto__;

    while (true) {
        if (L === null) {
            return false;
        } 
        if (L === O) {
            return true;
        }

        L = L.__proto__;
    }
}

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  console.log(auto instanceof Car)
  console.log(myInstanceof(auto, Car));