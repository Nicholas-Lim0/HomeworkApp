export function sort_by_due_date(dates: any) {
    // 11/12 November 12, 2025
    // Convert alphabetical dates into numerical dates
    let month_numbers = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < dates.length; i++) {
        let date = dates[i];
        if (isNaN(date[0])) {
            date = date.split(" ");
            let month: any = month_numbers.indexOf(date[0]) + 1;
            let day = date[1].slice(0, date[1].indexOf(","));
            let year = date[2];
            
            // Add zeros to days/months if single-digit
            if (Number(month) < 10) { month = "0" + month }
            if (Number(day) < 10) { day = "0" + day }
            
            let format_date = `${month}/${day}/${year} `;
            
            dates[i] = format_date;
        }
    }
    
    // *****Sort years in ascending order*****
    for (let i = 0; i < dates.length; i++) {
        let selected = dates[i];
        let minimum = selected;
        
        // Iterate through remaining elements
        for (let j = i + 1; j < dates.length; j++) {
            let minimum_year = minimum.slice(minimum.lastIndexOf("/") + 1).trim();
            let next = dates[j];
            let next_year = next.slice(next.lastIndexOf("/") + 1).trim();
            
            if (next_year < minimum_year) {
                minimum = dates[j];
            }
        }
        
        let index = dates.indexOf(minimum);
        
        if (selected !== minimum) {
            [dates[i], dates[index]] = [dates[index], dates[i]];
        }
    }
    
    // *****Sort months in ascending order if year is same*****
    for (let i = 0; i < dates.length; i++) {
        let selected = dates[i];
        let minimum = selected;
        
        // Iterate through remaining elements
        for (let j = i + 1; j < dates.length; j++) {
            let minimum_month = minimum.slice(0, minimum.indexOf("/"));
            let minimum_year = minimum.slice(minimum.lastIndexOf("/") + 1).trim();
            let next = dates[j];
            let next_month = next.slice(0, next.indexOf("/"));
            let next_year = next.slice(next.lastIndexOf("/") + 1).trim();
            
            if (next_month < minimum_month && next_year == minimum_year) {
                minimum = dates[j];
            }
        }
        
        let index = dates.indexOf(minimum);
        
        if (selected !== minimum) {
            [dates[i], dates[index]] = [dates[index], dates[i]];
        }
    }
    
    // *****Sort days in ascending order if month is same*****
    for (let i = 0; i < dates.length; i++) {
        let selected = dates[i];
        let minimum = selected;
        let minimum_day = minimum.slice(minimum.indexOf("/") + 1, minimum.lastIndexOf("/"));
        let minimum_month = minimum.slice(0, minimum.indexOf("/"));
        
        // Iterate through remaining elements
        for (let j = i + 1; j < dates.length; j++) {
            let next = dates[j];
            let next_day = next.slice(next.indexOf("/") + 1, next.lastIndexOf("/"));
            let next_month = next.slice(0, next.indexOf("/"));
            
            if (next_day < minimum_day && next_month == minimum_month) {
                minimum = dates[j];
                minimum_day = next_day;
                minimum_month = next_month;
            }
        }
        
        let index = dates.indexOf(minimum);
        
        if (selected !== minimum) {
            [dates[i], dates[index]] = [dates[index], dates[i]];
        }
    }
    
    // *****Numericize alphabetical dates******
    for (let i = 0; i < dates.length; i++) {
        let date = dates[i];
        if (date.length == 11) {
            let month = month_numbers[Number(date.slice(0, date.indexOf("/"))) - 1];
            let day = date.slice(date.indexOf("/") + 1, date.lastIndexOf("/"));
            let year = date.slice(date.lastIndexOf("/") + 1).trim();
            
            // Remove 0 from day
            if (day[0] == "0") { day = day[1] }
            
            let formatted_date = `${month} ${day}, ${year}`;
            dates[i] = formatted_date;
        }
    }
    
    return dates.reverse();
}