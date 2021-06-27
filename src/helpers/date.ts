export default class DateHelper {
  getCurrentISODate() {
    return new Date().toISOString().split("T")[0];
  }
}
