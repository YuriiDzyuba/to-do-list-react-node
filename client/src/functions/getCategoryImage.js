import idea from "../img/icons/bell.svg";
import Quote from "../img/icons/feather.svg";
import Random from "../img/icons/droplet.svg";
import task from "../img/icons/code.svg";

export const getCategoryImage = (categoryType) => {
    switch (categoryType) {
        case "idea":
            return idea;
        case "Quote":
            return Quote;
        case "Random":
            return Random;
        case "task":
            return task;
        default:
            return null
    }
}
