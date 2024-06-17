export default class ReservationUtil {
    dateToday = new Date();
    dateReservationLimit = new Date();
    dateSelected = new Date();
    timeSelected = "18:00";
    guestsSelected = 1;
    firstName = '';
    lastName = '';
    email = '';

    /**
    * Initializes with reservations enabled from current day until specification. E.g.: from today up to 7 days.
    * @param {number} reservationLimit Maximum numbers of days people will by able to reserve a table starting from today.
    */
    constructor(reservationLimit){
        this.dateReservationLimit.setDate(this.dateToday.getDate() + reservationLimit);

        // By binding the method, you ensure that this inside setReservationDateFromFormOnChange always refers to the instance of ReservationUtil.
        this.setReservationDateFromFormOnChange = this.setReservationDateFromFormOnChange.bind(this);
    }

    isDateValid(date){
        const selectedDate = date.split('-');
        if (    (selectedDate[0] >= this.dateToday.getUTCFullYear() && selectedDate[0] <= this.dateReservationLimit.getUTCFullYear() ) &&
                (selectedDate[1] - 1 >= this.dateToday.getUTCMonth() && selectedDate[1] - 1 <= this.dateReservationLimit.getUTCMonth() ) &&
                (selectedDate[2] >= this.dateToday.getUTCDate() && selectedDate[2] <= this.dateReservationLimit.getUTCDate() )
        ){
            return true;
        }

        return false;
    }

    setReservationDateFromFormOnChange(date){
        const targetDate = date.split('-');
        this.dateSelected.setUTCFullYear(targetDate[0]);
        this.dateSelected.setUTCMonth(targetDate[1] - 1); // Months are zero-indexed
        this.dateSelected.setUTCDate(targetDate[2]);
    }

    setReservationTimeFromFormOnChange(time){
        this.timeSelected = time;
    }

    setGuestsFromFormOnChange(guests){
        this.guestsSelected = guests;
    }

    dateToInputString(date){
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getUTCDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    dateSelectedToDisplayText(){
        const year = this.dateSelected.getUTCFullYear();
        const month = String(this.dateSelected.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(this.dateSelected.getUTCDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    }

    debugDate() {
        console.log(this.dateToday.getUTCFullYear());
        console.log(this.dateToday.getUTCMonth());
        console.log(this.dateToday.getUTCDate());

        console.log(this.dateReservationLimit.getUTCFullYear());
        console.log(this.dateReservationLimit.getUTCMonth());
        console.log(this.dateReservationLimit.getUTCDate());
    }
}