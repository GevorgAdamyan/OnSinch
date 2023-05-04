export default class Utils {
  static generateRandomDOB() {
    let start = new Date(1900, 0, 1);
    let end = new Date(2000, 0, 1);
    let dob = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    let day = dob.getDate().toString().padStart(2, '0');
    let month = (dob.getMonth() + 1).toString().padStart(2, '0');
    let year = dob.getFullYear().toString();
    return `${day}.${month}.${year}`;
  }

  static getRandomElement(arr: any[]) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
}
