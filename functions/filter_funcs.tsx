import { Alert } from "react-native";

// MAKE THIS WORK WITH OBJECTS (ASSIGNMENTS LIST)
export function sort_by_due_dates(dates: any) {
    // Convert alphabetical dates into numerical dates
    let month_numbers = ["January", "Ferbuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < dates.length; i++) {
        let date = dates[i];
        if (isNaN(date[0])) {
            date = date.split(" ");
            let month: any = month_numbers.indexOf(date[0]);
            let day = date[1][0]
            let year = date[2];
            
            // Add zeros to days/months if single-digit
            if (Number(month) < 10) { month = "0" + month }
            if (Number(day) < 10) { day = "0" + day }
            
            let format_date = `${month}/${day}/${year}`;
            
            dates[i] = format_date;
        }
    }
    
    let new_dates = [];
    let years = [];
    let months = [];
    let days = [];
    let output = [];
    
    // Sort dates into years with ids
    for (let i = 0; i < dates.length; i++) {
        let selected = dates[i];
        let year = selected.substring(selected.lastIndexOf("/") + 1);
        
        let year_id = {
            year_num: Number(year),
            date: dates[i]
        }
        years.push(year_id);
    }
    
    // Sort years in ascending order
    for (let i = 0; i < years.length; i++) {
        let selected = years[i];
        let minimum = selected;
        
        // Iterate through remaining elements
        for (let j = i + 1; j < years.length; j++) {
            let day_num = years[j].date.slice(0, years[j].date.indexOf("/"));
            
            if (years[j].year_num < minimum.year_num) {
                minimum = years[j];
            }
        }
        
        let index = years.indexOf(minimum);
        
        if (selected !== minimum) {
            [years[i], years[index]] = [years[index], years[i]];
        }
    }
    
    // Make new output match with sorted eyars
    for (let i = 0; i < years.length; i++) {
        new_dates.push(years[i].date);
    }
    
    // Sort dates into days with ids
    for (let i = 0; i < new_dates.length; i++) {
        let selected = new_dates[i];
        let day = selected.substring(selected.indexOf("/") + 1);
        
        let day_id = {
            day_num: Number(day),
            date: new_dates[i]
        }
        days.push(day_id);
    }
    
    // Sort days if months are same in ascending order
    for (let i = 0; i < days.length; i++) {
        let selected = days[i];
        let minimum = selected;
        let minimum_month = minimum.date.slice(0, minimum.date.indexOf("/"));
        
        // Iterate through remaining elements
        for (let j = i + 1; j < days.length; j++) {
            let month_num = days[j].date.slice(0, days[j].date.indexOf("/"));
            
            if (days[j].day_num < minimum.day_num && month_num == minimum_month) {
                minimum = days[j];
            }
        }
        
        let index = days.indexOf(minimum);
        
        if (selected !== minimum) {
            [days[i], days[index]] = [days[index], days[i]];
        }
    }
    
    // Make new dates match with sorted days
    new_dates = [];
    for (let i = 0; i < days.length; i++) {
        new_dates.push(days[i].date);
    }
    
    // Sort dates into months with ids
    for (let i = 0; i < new_dates.length; i++) {
        let selected = new_dates[i];
        let month = selected.substring(0, selected.indexOf("/"));
        
        let month_id = {
            month_num: Number(month),
            date: new_dates[i]
        }
        months.push(month_id);
    }
    
    // Sort months in ascending order
    for (let i = 0; i < months.length; i++) {
        let selected = months[i];
        let minimum = selected;
        let selected_year = selected.date.substring(selected.date.lastIndexOf("/") + 1);
        
        // Iterate through remaining elements
        for (let j = i + 1; j < months.length; j++) {
            if (months[j].month_num < minimum.month_num && selected_year > minimum.date.substring(minimum.date.lastIndexOf("/") + 1)) {
                minimum = months[j];
            } 
        }
        
        if (selected !== minimum) {
            let index = months.indexOf(minimum);
            [months[i], months[index]] = [months[index], months[i]];
        }
    }
    
    // Make new dates match with sorted months
    for (let i = 0; i < months.length; i++) {
        output.push(months[i].date);
    }
    Alert.alert(String(...output));
    
    return output;
}  