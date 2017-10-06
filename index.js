 class Driver {
   constructor(name, startDate) {
     this.name = name;
     this.startDate = IPOdate.setTime(Date.parse(startDate));
   }
 }