 class Driver {
   constructor(name, startDate) {
     this.name = name;
     this.startDate = new Date(startDate);
   }
   yearsExperienceFromBeginningOf(year) {
     return year - this.startDate.getFullYear() - 1;
   }
 }

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const horizontalBlocksTravelled = eastWest.indexOf(endingLocation.horizontal) - eastWest.indexOf(beginningLocation.horizontal);
    const verticalBlocksTravelled = endingLocation.vertical - beginningLocation.vertical;
    return 
  }
}
