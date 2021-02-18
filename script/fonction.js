function tronque_description(description, lg_max) {
    if (description.length > lg_max){
        description = description.substr(0, lg_max);
        last_space= description.lastIndexOf(" ");  
        description = description.substr(0, last_space)+" ...";
        return description;
    }else {
        return description;
    }
}
