const getSleepHours = day => {
    day = day.toLowerCase();
    switch(day){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 4;
         break;
      case 'thursday':
        return 7;
         break;
      case 'friday':
        return 4;
         break;
      case 'saturday':
        return 7;
         break;
      case 'sunday':
        return 6;
         break;
      default:
        console.log("Invalid input.");
    }
  }
  
  const getActualSleepHours = () => getSleepHours('Monday')+getSleepHours('Tuesday')+getSleepHours('Wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('Saturday')+getSleepHours('Sunday');
  
  
  const getIdealSleepHours = () => 6.5 * 7;
  //ideal sleep a night * 7;
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours){
      console.log("The user got a perfect amount of sleep");
    }else if(actualSleepHours > idealSleepHours){
      console.log("The user got " + (actualSleepHours - idealSleepHours) + " hours more  of sleep than needed");
    }else {
      console.log("The user got " + (idealSleepHours - actualSleepHours) + " hours less of sleep than needed");
    }
  }
  
  
  calculateSleepDebt();
  
  