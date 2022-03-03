import Parse from "parse";

// get all Market items
export const getAllMarket = () => {
    const Market = Parse.Object.extend("Market");
    const query = new Parse.Query(Market);
    return query.find().then((results) => {
        console.log(results);
        return results;
    });
};

// get specific Market item
export const getItemById = (id) => {
    const Market = Parse.Object.extend("Market");
    const query = new Parse.Query(Market);
    return query.get(id).then((result) => {
        console.log(result);
        return result;
    });
};

// create new Market item
export const createItem = (item, size, gender, level) => {
    const Market = Parse.Object.extend("Market");
    const item = new Market();
    item.set("item", item);
    item.set("size", size);
    item.set("gender", gender);
    item.set("level", level);
    return item.save().then((result) => {
        return result;
    });
};

// delete Market item - might not be necessary
export const removeItem = (id) => {
    const Lesson = Parse.Object.extend("Market");
    const query = new Parse.Query(Lesson);
    return query.get(id).then((result) => {
      return result.destroy();
    });
  };